// Motor de generacion de errores ortograficos.
// Aplica confusiones ortograficas reales y frecuentes del espanol (no sustituciones
// aleatorias de letras) para que el ejercicio entrene la deteccion de errores tipicos
// de examen: tildes, b/v, g/j, c/s/z, h muda, consonantes dobles y m/n ante b-p.

// Cada regla pertenece a un grupo, para poder ponderar la practica:
//   acentuacion  - tildes omitidas, de mas o diacriticas
//   puntuacion   - comas y puntos omitidos o de mas
//   gramatica    - homofonos, palabras juntas/separadas, concordancia, dequeismo
//   ortografia   - el resto (b/v, g/j, c/s/z, h, mayusculas...)
const GRUPOS_ERROR = ["acentuacion", "puntuacion", "gramatica", "ortografia"];
const PESOS_POR_DEFECTO = { acentuacion: 25, puntuacion: 25, gramatica: 25, ortografia: 25 };

const REGLAS_ORTOGRAFICAS = [
  {
    categoria: "b/v",
    aplicar(palabra) {
      const idxB = palabra.indexOf("b");
      const idxV = palabra.indexOf("v");
      if (idxB === -1 && idxV === -1) return null;
      if (idxB !== -1 && (idxV === -1 || idxB < idxV)) {
        return palabra.slice(0, idxB) + "v" + palabra.slice(idxB + 1);
      }
      return palabra.slice(0, idxV) + "b" + palabra.slice(idxV + 1);
    },
  },
  {
    categoria: "g/j",
    aplicar(palabra) {
      const m1 = palabra.match(/g([ei])/);
      if (m1) {
        const i = m1.index;
        return palabra.slice(0, i) + "j" + m1[1] + palabra.slice(i + 2);
      }
      const m2 = palabra.match(/j([ei])/);
      if (m2) {
        const i = m2.index;
        return palabra.slice(0, i) + "g" + m2[1] + palabra.slice(i + 2);
      }
      return null;
    },
  },
  {
    categoria: "c/s/z",
    aplicar(palabra) {
      if (palabra.includes("z")) {
        return palabra.replace("z", "s");
      }
      const mCe = palabra.match(/c([ei])/);
      if (mCe) {
        const i = mCe.index;
        return palabra.slice(0, i) + "s" + mCe[1] + palabra.slice(i + 2);
      }
      return null;
    },
  },
  {
    categoria: "h muda",
    aplicar(palabra) {
      if (palabra[0] === "h") return palabra.slice(1);
      return null;
    },
  },
  {
    categoria: "consonante doble",
    aplicar(palabra) {
      if (palabra.includes("cc")) return palabra.replace("cc", "c");
      if (palabra.includes("nn")) return palabra.replace("nn", "n");
      const mRr = palabra.match(/[aeiouáéíóú]rr[aeiouáéíóú]/);
      if (mRr) return palabra.replace("rr", "r");
      return null;
    },
  },
  {
    categoria: "ll/y",
    aplicar(palabra) {
      if (palabra.includes("ll")) return palabra.replace("ll", "y");
      return null;
    },
  },
  {
    categoria: "m/n",
    aplicar(palabra) {
      if (palabra.includes("mb")) return palabra.replace("mb", "nb");
      if (palabra.includes("mp")) return palabra.replace("mp", "np");
      return null;
    },
  },
  {
    categoria: "x/s",
    aplicar(palabra) {
      if (palabra.includes("x")) return palabra.replace("x", "s");
      return null;
    },
  },
];


// ---------- Acentuacion ----------

const SIN_TILDE = { á: "a", é: "e", í: "i", ó: "o", ú: "u" };
const CON_TILDE = { a: "á", e: "é", i: "í", o: "ó", u: "ú" };

// Palabras que en el texto aparecen sin tilde (articulo, preposicion, relativo...)
// y que con tilde pasan a ser otra palabra: ponerla es siempre un error.
const DIACRITICAS = {
  el: "él", tu: "tú", mi: "mí", si: "sí", se: "sé", de: "dé", te: "té",
  que: "qué", como: "cómo", cuando: "cuándo", donde: "dónde", quien: "quién",
  cual: "cuál", cuanto: "cuánto", aun: "aún", este: "éste", esta: "ésta", ese: "ése",
};

const REGLAS_ACENTUACION = [
  {
    categoria: "tilde omitida",
    aplicar(palabra) {
      const idx = [...palabra].findIndex((c) => "áéíóú".includes(c));
      if (idx === -1) return null;
      return palabra.slice(0, idx) + SIN_TILDE[palabra[idx]] + palabra.slice(idx + 1);
    },
  },
  {
    categoria: "tilde diacrítica",
    aplicar(palabra) {
      return DIACRITICAS[palabra] || null;
    },
  },
  {
    // agudas terminadas en z/l/r/d (juez, ciudad, resolver) no llevan tilde
    categoria: "tilde de más",
    aplicar(palabra) {
      if (palabra.length < 4 || !/[zlrd]$/.test(palabra) || /[áéíóú]/.test(palabra)) return null;
      let idx = -1;
      for (let i = palabra.length - 1; i >= 0; i--) {
        if ("aeiou".includes(palabra[i])) {
          idx = i;
          break;
        }
      }
      if (idx === -1) return null;
      return palabra.slice(0, idx) + CON_TILDE[palabra[idx]] + palabra.slice(idx + 1);
    },
  },
];

// ---------- Gramatica (a nivel de palabra) ----------

// Homofonos y palabras juntas/separadas: lo que esta en el texto es lo correcto,
// por lo tanto la forma alternativa es un error en ese contexto.
const SUSTITUCIONES_GRAMATICA = {
  hecho: ["echo", "hecho/echo"], hechos: ["echos", "hecho/echo"],
  haya: ["halla", "haya/halla"], halla: ["haya", "haya/halla"],
  hay: ["ay", "hay/ay"], vaya: ["valla", "vaya/valla"], valla: ["vaya", "vaya/valla"],
  tuvo: ["tubo", "tuvo/tubo"], tubo: ["tuvo", "tuvo/tubo"],
  haber: ["a ver", "haber/a ver"],
  sino: ["si no", "sino/si no"],
  también: ["tan bien", "también/tan bien"],
  porque: ["por que", "porque/por que"],
  además: ["a demás", "además/a demás"],
  aparte: ["a parte", "aparte/a parte"],
};

// Concordancia verbal: el original es correcto con su sujeto, el numero contrario no.
const PARES_VERBALES = {
  son: "es", es: "son", están: "está", está: "están", deben: "debe", debe: "deben",
  pueden: "puede", puede: "pueden", tienen: "tiene", tiene: "tienen", serán: "será", será: "serán",
  han: "ha", ha: "han", habían: "había", había: "habían", fueron: "fue", fue: "fueron",
  existen: "existe", existe: "existen", establecen: "establece", establece: "establecen",
  podrán: "podrá", podrá: "podrán", hayan: "haya", haya: "hayan",
};

const DETERMINANTES_PLURALES = new Set([
  "los", "las", "unos", "unas", "sus", "estos", "estas", "esos", "esas", "dichos", "dichas",
  "varios", "varias", "otros", "otras", "muchos", "muchas", "algunos", "algunas", "ciertos", "ciertas",
]);

const VERBOS_DEQUEISMO = new Set([
  "dijo", "señaló", "señala", "sostuvo", "sostiene", "afirma", "afirmó", "establece", "estableció",
  "dispone", "dispuso", "indica", "indicó", "considera", "consideró", "manifestó", "manifiesta",
  "resolvió", "resuelve", "informa", "explica", "declara", "determina", "determinó", "entiende",
  "advierte", "aclara", "expresó", "expone", "cree", "piensa", "sabe",
]);

const PREPOSICIONES_Y_ARTICULOS = new Set([
  "el", "la", "los", "las", "un", "una", "unos", "unas", "de", "del", "al", "en", "con", "por",
  "para", "sin", "su", "sus",
]);

// Palabras tras las cuales una coma es obligatoria (conectores y adversativas).
const ADVERSATIVAS = new Set(["pero", "sino", "aunque"]);
const CIERRE_CONECTOR = new Set(["embargo", "obstante", "decir", "ejemplo", "tanto", "contrario"]);

function esEspacioSimple(tok) {
  return !!tok && tok.tipo === "sep" && /^[ \t]+$/.test(tok.texto);
}

function pluralASingular(palabra) {
  if (palabra.length < 5 || /[áéíóú]s$/.test(palabra) || /(is|us|ss)$/.test(palabra)) return null;
  if (/ces$/.test(palabra)) return palabra.slice(0, -3) + "z";
  if (/[^aeiouáéíóú]es$/.test(palabra)) return palabra.slice(0, -2);
  if (/s$/.test(palabra)) return palabra.slice(0, -1);
  return null;
}

// Reglas que dependen de los tokens vecinos (puntuacion y gramatica).
// Cada una devuelve { grupo, categoria, valor, original?, sep? }:
//   valor    -> nuevo texto de la palabra (puede incluir la coma/punto pegado)
//   original -> texto correcto si difiere del token (puntuacion omitida)
//   sep      -> nuevo texto del separador que sigue a la palabra
function reglasContextuales(tokens, idx, inicios) {
  const tok = tokens[idx];
  const palabra = tok.texto;
  const min = palabra.toLowerCase();
  const sig = tokens[idx + 1];
  const sigPalabra = tokens[idx + 2];
  const ant = esEspacioSimple(tokens[idx - 1]) ? tokens[idx - 2] : null;
  const res = [];
  if (palabra === palabra.toUpperCase() && palabra.length > 1) return res; // siglas

  // --- puntuacion ---
  if (sig && sig.tipo === "sep" && sigPalabra && sigPalabra.tipo === "palabra") {
    const marca = sig.texto[0];
    const seguido = /^[,.]\s/.test(sig.texto); // la marca es unica y la sigue un espacio
    if (seguido && marca === ",") {
      const proxima = sigPalabra.texto.toLowerCase();
      const enumeracion = tokens[idx + 3] && tokens[idx + 3].tipo === "sep" && /^,\s/.test(tokens[idx + 3].texto);
      if (
        ADVERSATIVAS.has(proxima) ||
        CIERRE_CONECTOR.has(min) ||
        /mente$/.test(min) ||
        enumeracion
      ) {
        res.push({
          grupo: "puntuacion", categoria: "coma omitida",
          valor: palabra, original: palabra + ",", sep: sig.texto.slice(1),
        });
      }
    }
    if (seguido && marca === "." && /^[A-ZÁÉÍÓÚÑ]/.test(sigPalabra.texto)) {
      res.push({
        grupo: "puntuacion", categoria: "punto omitido",
        valor: palabra, original: palabra + ".", sep: sig.texto.slice(1),
      });
    }
    if (/^\s/.test(sig.texto) && PREPOSICIONES_Y_ARTICULOS.has(min) && !inicios.has(idx + 2)) {
      res.push({ grupo: "puntuacion", categoria: "coma de más", valor: palabra + "," });
    }
  }

  // --- gramatica ---
  const sust = SUSTITUCIONES_GRAMATICA[min];
  if (sust) {
    res.push({ grupo: "gramatica", categoria: sust[1], valor: conservarMayuscula(palabra, sust[0]) });
  }
  if ((min === "ha" || min === "han") && sigPalabra && esEspacioSimple(sig) &&
      /(ado|ido|to|so|cho)$/.test(sigPalabra.texto.toLowerCase())) {
    res.push({ grupo: "gramatica", categoria: "ha/a", valor: conservarMayuscula(palabra, min === "ha" ? "a" : "an") });
  }
  if (PARES_VERBALES[min]) {
    res.push({ grupo: "gramatica", categoria: "concordancia verbal", valor: conservarMayuscula(palabra, PARES_VERBALES[min]) });
  }
  if (ant && ant.tipo === "palabra" && DETERMINANTES_PLURALES.has(ant.texto.toLowerCase())) {
    const singular = pluralASingular(min);
    if (singular) {
      res.push({ grupo: "gramatica", categoria: "concordancia de número", valor: conservarMayuscula(palabra, singular) });
    }
  }
  if (min === "que" && ant && ant.tipo === "palabra" && VERBOS_DEQUEISMO.has(ant.texto.toLowerCase())) {
    res.push({ grupo: "gramatica", categoria: "dequeísmo", valor: conservarMayuscula(palabra, "de que") });
  }
  return res;
}

function conservarMayuscula(original, modificada) {
  if (original[0] === original[0].toUpperCase() && original[0] !== original[0].toLowerCase()) {
    return modificada[0].toUpperCase() + modificada.slice(1);
  }
  return modificada;
}

// Tokeniza preservando el texto exacto: alterna fragmentos "palabra" y "separador".
function tokenizar(texto) {
  const tokens = [];
  const re = /[A-Za-zÁÉÍÓÚÑÜáéíóúñü]+/g;
  let ultimo = 0;
  let m;
  while ((m = re.exec(texto)) !== null) {
    if (m.index > ultimo) {
      tokens.push({ tipo: "sep", texto: texto.slice(ultimo, m.index) });
    }
    tokens.push({ tipo: "palabra", texto: m[0] });
    ultimo = m.index + m[0].length;
  }
  if (ultimo < texto.length) {
    tokens.push({ tipo: "sep", texto: texto.slice(ultimo) });
  }
  return tokens;
}

function esCandidata(palabra) {
  if (palabra.length < 5) return false;
  if (palabra === palabra.toUpperCase()) return false; // evita siglas (CAVIG, ANIVI)
  // evita siglas/abreviaturas con mayusculas intercaladas (CCyCN, LCT, LOPJ)
  if (/[A-ZÁÉÍÓÚÑ]/.test(palabra.slice(1))) return false;
  return true;
}

// Detecta los indices de token que arrancan oracion (el primero del texto,
// y el que sigue a un ".", "!" o "?" de cierre), para poder generar errores
// de "minuscula despues de punto" ademas de las confusiones ortograficas.
function indicesInicioOracion(tokens) {
  const set = new Set();
  let esperandoMayuscula = true;
  for (let i = 0; i < tokens.length; i++) {
    const tok = tokens[i];
    if (tok.tipo === "palabra") {
      if (esperandoMayuscula) set.add(i);
      esperandoMayuscula = false;
    } else if (/[.!?][»"'”)\]]*\s*$/.test(tok.texto)) {
      esperandoMayuscula = true;
    }
  }
  return set;
}

// Palabra con mayuscula inicial "normal" (Constitucion, El, Juez): sirve de
// candidata para el error de minuscula, distinto de una sigla (CAVIG) o de
// una abreviatura con mayusculas intercaladas (CCyCN).
function esMayusculaInicialNormal(palabra) {
  if (palabra.length < 2) return false;
  if (/[A-ZÁÉÍÓÚÑ]/.test(palabra.slice(1))) return false;
  const primera = palabra.charAt(0);
  return primera !== primera.toLowerCase();
}

function reglaMinusculaInicial(palabra) {
  return palabra.charAt(0).toLowerCase() + palabra.slice(1);
}

// Memoria de las ultimas palabras que se usaron como error, para no repetir
// siempre las mismas entre intentos (los textos son fijos y pocos).
const CLAVE_RECIENTES = "expediente_errores_recientes_v1";
const MAX_RECIENTES = 120;

function leerRecientes() {
  try {
    const raw = localStorage.getItem(CLAVE_RECIENTES);
    return new Set(raw ? JSON.parse(raw) : []);
  } catch (e) {
    return new Set();
  }
}

function guardarRecientes(set) {
  try {
    localStorage.setItem(CLAVE_RECIENTES, JSON.stringify([...set].slice(-MAX_RECIENTES)));
  } catch (e) {
    /* no critico */
  }
}

function elegirAzar(lista) {
  return lista[Math.floor(Math.random() * lista.length)];
}

function esSigla(palabra) {
  if (palabra.length > 1 && palabra === palabra.toUpperCase()) return true;
  return /[A-ZÁÉÍÓÚÑ]/.test(palabra.slice(1));
}

// Reglas que solo dependen de la palabra (acentuacion y ortografia).
function reglasAplicables(palabra) {
  if (palabra.length < 2 || esSigla(palabra)) return [];
  const min = palabra.toLowerCase();
  const resultado = [];
  const probar = (reglas, grupo) => {
    for (const regla of reglas) {
      const r = regla.aplicar(min);
      if (r && r !== min) {
        resultado.push({ grupo, categoria: regla.categoria, valor: conservarMayuscula(palabra, r) });
      }
    }
  };
  probar(REGLAS_ACENTUACION, "acentuacion");
  if (esCandidata(palabra)) probar(REGLAS_ORTOGRAFICAS, "ortografia");
  return resultado;
}

// Reparte `n` errores entre los grupos segun los porcentajes pedidos, sin pasarse
// de lo que cada grupo tiene disponible en el texto. Lo que no entra en un grupo
// se reasigna a los otros grupos con porcentaje > 0 (nunca a uno en 0%).
function repartirCantidades(n, pesos, capacidad) {
  const cantidades = {};
  GRUPOS_ERROR.forEach((g) => (cantidades[g] = 0));
  let restante = n;
  let activos = GRUPOS_ERROR.filter((g) => (pesos[g] || 0) > 0 && capacidad[g] > 0);
  while (restante > 0 && activos.length > 0) {
    const totalPeso = activos.reduce((acc, g) => acc + pesos[g], 0);
    // metodo del resto mayor para que la suma sea exactamente `restante`
    const cuotas = activos.map((g) => {
      const ideal = (restante * pesos[g]) / totalPeso;
      return { g, base: Math.floor(ideal), resto: ideal - Math.floor(ideal) };
    });
    let faltan = restante - cuotas.reduce((acc, c) => acc + c.base, 0);
    cuotas.sort((x, y) => y.resto - x.resto);
    for (let i = 0; i < faltan; i++) cuotas[i % cuotas.length].base++;
    let asignado = 0;
    for (const c of cuotas) {
      const lugar = capacidad[c.g] - cantidades[c.g];
      const dar = Math.min(c.base, lugar);
      cantidades[c.g] += dar;
      asignado += dar;
    }
    if (asignado === 0) break;
    restante -= asignado;
    activos = activos.filter((g) => cantidades[g] < capacidad[g]);
  }
  return cantidades;
}

/**
 * Genera un ejercicio a partir de un texto plano: inserta `cantidadErrores`
 * errores distribuidos a lo largo del texto. `pesos` define el porcentaje de
 * cada grupo (acentuacion, puntuacion, gramatica, ortografia); se normaliza
 * solo, no hace falta que sume 100.
 * Devuelve { tokens, errores } donde tokens es la lista para renderizar
 * (con .texto ya modificado en las palabras erroneas) y errores es un
 * array de { tokenIdx, original, escrito, categoria, grupo }.
 */
function generarEjercicio(texto, cantidadErrores, pesos) {
  pesos = pesos || PESOS_POR_DEFECTO;
  const tokens = tokenizar(texto);
  const inicios = indicesInicioOracion(tokens);
  const candidatos = [];
  tokens.forEach((tok, idx) => {
    if (tok.tipo !== "palabra") return;
    let reglas = reglasAplicables(tok.texto).concat(reglasContextuales(tokens, idx, inicios));
    if (inicios.has(idx) && esCandidata(tok.texto) && esMayusculaInicialNormal(tok.texto)) {
      reglas = reglas.concat([
        { grupo: "ortografia", categoria: "mayúscula inicial", valor: reglaMinusculaInicial(tok.texto) },
      ]);
    }
    if (reglas.length > 0) {
      candidatos.push({ idx, reglas });
    }
  });

  const recientes = leerRecientes();
  const palabrasUsadas = new Set(); // misma palabra no dos veces en un ejercicio
  const idxUsados = new Set();
  const clave = (c) => tokens[c.idx].texto.toLowerCase();

  // Prefiere palabras que no salieron hace poco; si no hay, cae a cualquiera.
  const preferir = (cands) => {
    const libres = cands.filter((c) => !palabrasUsadas.has(clave(c)));
    const base = libres.length ? libres : cands;
    const frescas = base.filter((c) => !recientes.has(clave(c)));
    return frescas.length ? frescas : base;
  };

  const porGrupo = {};
  GRUPOS_ERROR.forEach((g) => {
    porGrupo[g] = candidatos.filter((c) => c.reglas.some((r) => r.grupo === g));
  });
  const capacidad = {};
  GRUPOS_ERROR.forEach((g) => {
    capacidad[g] = new Set(porGrupo[g].map(clave)).size;
  });
  const cantidades = repartirCantidades(cantidadErrores, pesos, capacidad);

  // Los grupos con menos material eligen primero, para que no se los coma otro.
  // Dentro de un grupo se rota entre tipos de error (el menos usado primero) y se
  // reparte por el texto en "baldes", para que no sean todos del mismo tipo ni
  // todos juntos.
  const orden = GRUPOS_ERROR.filter((g) => cantidades[g] > 0).sort((a, b) => capacidad[a] - capacidad[b]);
  const categoriasUsadas = new Map();
  const elegidos = []; // { cand, regla }
  for (const g of orden) {
    const k = cantidades[g];
    const lista = porGrupo[g].filter((c) => !idxUsados.has(c.idx));
    const tamBalde = lista.length / k;
    const reglasDe = (c) => c.reglas.filter((r) => r.grupo === g);
    for (let b = 0; b < k; b++) {
      const libres = lista.filter((c) => !idxUsados.has(c.idx));
      if (libres.length === 0) break;
      // tipo de error menos usado entre los que todavia tienen candidatos
      const disponibles = new Set();
      libres.forEach((c) => reglasDe(c).forEach((r) => disponibles.add(r.categoria)));
      const minimo = Math.min(...[...disponibles].map((cat) => categoriasUsadas.get(cat) || 0));
      const categoria = elegirAzar([...disponibles].filter((cat) => (categoriasUsadas.get(cat) || 0) === minimo));
      const conCategoria = (c) => reglasDe(c).some((r) => r.categoria === categoria);

      const inicio = Math.floor(b * tamBalde);
      const fin = Math.max(inicio + 1, Math.floor((b + 1) * tamBalde));
      let opciones = lista.slice(inicio, fin).filter((c) => !idxUsados.has(c.idx) && conCategoria(c));
      if (opciones.length === 0) opciones = libres.filter(conCategoria);

      const cand = elegirAzar(preferir(opciones));
      const regla = elegirAzar(reglasDe(cand).filter((r) => r.categoria === categoria));
      idxUsados.add(cand.idx);
      palabrasUsadas.add(clave(cand));
      categoriasUsadas.set(categoria, (categoriasUsadas.get(categoria) || 0) + 1);
      elegidos.push({ cand, regla, grupo: g });
    }
  }

  elegidos.sort((a, b) => a.cand.idx - b.cand.idx);

  const errores = [];
  for (const { cand, regla, grupo } of elegidos) {
    const original = regla.original !== undefined ? regla.original : tokens[cand.idx].texto;
    recientes.add(tokens[cand.idx].texto.toLowerCase());
    tokens[cand.idx] = { tipo: "palabra", texto: regla.valor, esError: true };
    if (regla.sep !== undefined) {
      tokens[cand.idx + 1] = { tipo: "sep", texto: regla.sep };
    }
    errores.push({ tokenIdx: cand.idx, original, escrito: regla.valor, categoria: regla.categoria, grupo });
  }
  guardarRecientes(recientes);

  return { tokens, errores };
}

/**
 * Recorta un texto a aproximadamente `objetivoPalabras`. Si el texto es mas largo,
 * arranca en el inicio de una oracion al azar (no siempre al principio) y cierra
 * en el punto mas cercano, asi las palabras candidatas varian entre intentos.
 */
function recortarTexto(texto, objetivoPalabras) {
  const palabras = texto.split(/\s+/);
  if (palabras.length <= objetivoPalabras) return texto;

  // indices de palabra que arrancan oracion y dejan espacio para el largo pedido
  const maxInicio = palabras.length - objetivoPalabras;
  const inicios = [0];
  for (let i = 1; i <= maxInicio; i++) {
    if (/[.!?][»"'”)\]]*$/.test(palabras[i - 1])) inicios.push(i);
  }
  const desde = elegirAzar(inicios);

  const parcial = palabras.slice(desde, desde + objetivoPalabras).join(" ");
  const ultimoPunto = Math.max(parcial.lastIndexOf(". "), parcial.lastIndexOf(".\n"));
  if (ultimoPunto > parcial.length * 0.5) {
    return parcial.slice(0, ultimoPunto + 1);
  }
  return parcial.replace(/[,;:]?\s*\S*$/, ".");
}
