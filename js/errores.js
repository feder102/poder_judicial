// Motor de generacion de errores ortograficos.
// Aplica confusiones ortograficas reales y frecuentes del espanol (no sustituciones
// aleatorias de letras) para que el ejercicio entrene la deteccion de errores tipicos
// de examen: tildes, b/v, g/j, c/s/z, h muda, consonantes dobles y m/n ante b-p.

const REGLAS_ORTOGRAFICAS = [
  {
    categoria: "tilde",
    aplicar(palabra) {
      const idx = [...palabra].findIndex((c) => "áéíóú".includes(c));
      if (idx === -1) return null;
      const sinTilde = { á: "a", é: "e", í: "i", ó: "o", ú: "u" };
      return palabra.slice(0, idx) + sinTilde[palabra[idx]] + palabra.slice(idx + 1);
    },
  },
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

function reglasAplicables(palabra) {
  const min = palabra.toLowerCase();
  const resultado = [];
  for (const regla of REGLAS_ORTOGRAFICAS) {
    const r = regla.aplicar(min);
    if (r && r !== min) {
      resultado.push({ categoria: regla.categoria, valor: conservarMayuscula(palabra, r) });
    }
  }
  return resultado;
}

/**
 * Genera un ejercicio a partir de un texto plano: inserta `cantidadErrores`
 * errores ortograficos distribuidos a lo largo del texto.
 * Devuelve { tokens, errores } donde tokens es la lista para renderizar
 * (con .texto ya modificado en las palabras erroneas) y errores es un
 * array de { tokenIdx, original, categoria }.
 */
function generarEjercicio(texto, cantidadErrores) {
  const tokens = tokenizar(texto);
  const candidatos = [];
  tokens.forEach((tok, idx) => {
    if (tok.tipo === "palabra" && esCandidata(tok.texto)) {
      const reglas = reglasAplicables(tok.texto);
      if (reglas.length > 0) {
        candidatos.push({ idx, reglas });
      }
    }
  });

  const n = Math.min(cantidadErrores, candidatos.length);
  const elegidos = [];

  if (n > 0) {
    const numBaldes = n;
    const tamBalde = candidatos.length / numBaldes;
    const usados = new Set();
    for (let b = 0; b < numBaldes; b++) {
      const inicio = Math.floor(b * tamBalde);
      const fin = Math.max(inicio + 1, Math.floor((b + 1) * tamBalde));
      const opciones = [];
      for (let i = inicio; i < fin && i < candidatos.length; i++) {
        if (!usados.has(i)) opciones.push(i);
      }
      if (opciones.length === 0) continue;
      const elegido = opciones[Math.floor(Math.random() * opciones.length)];
      usados.add(elegido);
      elegidos.push(candidatos[elegido]);
    }
    // completar si algun balde quedo vacio (texto corto / candidatos escasos)
    let cursor = 0;
    while (elegidos.length < n && cursor < candidatos.length) {
      if (!usados.has(cursor)) {
        usados.add(cursor);
        elegidos.push(candidatos[cursor]);
      }
      cursor++;
    }
  }

  elegidos.sort((a, b) => a.idx - b.idx);

  const errores = [];
  for (const cand of elegidos) {
    const regla = cand.reglas[Math.floor(Math.random() * cand.reglas.length)];
    const original = tokens[cand.idx].texto;
    tokens[cand.idx] = { tipo: "palabra", texto: regla.valor, esError: true };
    errores.push({ tokenIdx: cand.idx, original, escrito: regla.valor, categoria: regla.categoria });
  }

  return { tokens, errores };
}

/** Recorta un texto a aproximadamente `objetivoPalabras`, cerrando en el punto mas cercano. */
function recortarTexto(texto, objetivoPalabras) {
  const palabras = texto.split(/\s+/);
  if (palabras.length <= objetivoPalabras) return texto;
  const parcial = palabras.slice(0, objetivoPalabras).join(" ");
  const ultimoPunto = Math.max(parcial.lastIndexOf(". "), parcial.lastIndexOf(".\n"));
  if (ultimoPunto > parcial.length * 0.5) {
    return parcial.slice(0, ultimoPunto + 1);
  }
  return parcial.replace(/[,;:]?\s*\S*$/, ".");
}
