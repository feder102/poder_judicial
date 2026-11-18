// Prueba teorica y curso: afirmaciones de verdadero o falso armadas a partir del
// banco de Q&A. Cada afirmacion (data/afirmaciones) tiene un hueco donde entra la
// respuesta correcta (verdadera) o un distractor (falsa); debajo se muestra la
// fuente del cuadernillo.
//   - Simulacro: 100 afirmaciones, 75 minutos, 71 % para aprobar.
//   - Curso: 9 modulos (uno por tema), todos habilitados desde el inicio.

(function () {
  "use strict";

  const CLAVE = "expediente_teo_v1";
  const APROBACION = 71;
  const PREGUNTAS_SIMULACRO = 100;
  const MINUTOS_SIMULACRO = 75;
  const PREGUNTAS_MODULO = 10;
  const MAX_SIMULACROS = 10;

  const $ = (id) => document.getElementById(id);

  let sesion = null;
  let timerId = null;

  // ---------- Almacenamiento ----------

  function leer() {
    try {
      const raw = localStorage.getItem(CLAVE);
      const d = raw ? JSON.parse(raw) : {};
      return { modulos: d.modulos || {}, simulacros: d.simulacros || [] };
    } catch (e) {
      return { modulos: {}, simulacros: [] };
    }
  }

  function guardar(datos) {
    try {
      localStorage.setItem(CLAVE, JSON.stringify(datos));
    } catch (e) {
      /* almacenamiento no disponible: no es critico */
    }
  }

  // ---------- Armado de preguntas ----------

  function temas() {
    return [...new Set(PREGUNTAS_QA.map((p) => p.tema))];
  }

  // Palabras que se escriben con mayuscula inicial aunque vayan en medio de la oracion.
  const PROPIOS = /^(?:Corte|C[áa]mara|Congreso|Constituci[óo]n|Presidente|Vicepresidente|Gobernador|Vicegobernador|Ministerio|Ministro|Poder|Estado|Provincia|Naci[óo]n|Senado|Fiscal|Defensor|Defensa|Consejo|Jefe|C[óo]digo|Investigaci[óo]n|Tribunal|Juicio|H[áa]beas|Convenci[óo]n|Comisi[óo]n|Escuela|Oficina|Sala|Registro|Tesorer[íi]a|Jurado|Asesor[íi]a|Policía|Polic[íi]a|Unidad|UFI|Comit[ée]|Ciudad|Argentina|San|Santa|Buenos|Cuadernillo|Mesa|Secretar[íi]a|Instituto|Acuerdo|Acordada|Sistema|Secci[óo]n|Capital|Mujer|Segunda|Primera|Tercera|Rivera|Iglesia|J[áa]chal|Gran|Centro|Servicio|Defensores|Jueces|Juez|Corte|Colegio|Estados|Organismo|Autoridad|[A-ZÁÉÍÓÚ]{2,}|[A-Z][a-z]*[A-Z])$/;

  // Palabras funcionales o verbos que, al iniciar la respuesta, van en minuscula dentro de la oracion.
  function aMinuscula(texto) {
    const primera = texto.split(/[\s,;:.]/)[0];
    if (/^\d/.test(primera) || PROPIOS.test(primera) || /^Ley\s+\d/.test(texto)) return texto;
    return texto.charAt(0).toLowerCase() + texto.slice(1);
  }

  function armarAfirmacion(p, respuesta) {
    const plantilla = AFIRMACIONES[p.id];
    if (!plantilla) {
      const enunciado = p.pregunta.replace(/^¿/, "").replace(/\?$/, "");
      return `${enunciado}: ${respuesta}.`;
    }
    // Si la respuesta empieza con la misma palabra que precede al hueco ("por" + "Por la..."), no se repite.
    const previa = plantilla.match(/(\S+) \{\}/);
    const primeraPalabra = respuesta.split(/[\s,;:.]/)[0].toLowerCase();
    const base = previa && previa[1].toLowerCase() === primeraPalabra ? plantilla.replace(/\S+ \{\}/, "{}") : plantilla;
    return finalizarAfirmacion(base, respuesta);
  }

  function finalizarAfirmacion(plantilla, respuesta) {
    const i = plantilla.indexOf("{}");
    const insertar = i === 0 || plantilla.charAt(i - 2) === "?" ? respuesta : aMinuscula(respuesta);
    const limpia = insertar.replace(/[.]$/, "");
    let texto = plantilla.replace("{}", limpia);
    // Evita puntos o signos duplicados al final.
    texto = texto.replace(/([.?!])\.$/, "$1");
    return texto.charAt(0).toUpperCase() + texto.slice(1);
  }

  // "Art. 74 — Competencia", "Art. 74" o solo el rotulo, segun lo que tenga la pregunta.
  function fuenteDe(p) {
    const parte = [p.articulo, p.titulo].filter(Boolean).join(" — ");
    return "Cuadernillo 2026" + (parte ? `. ${parte}` : "") + ` (${p.tema.split(" — ")[0]})`;
  }

  // Devuelve `cantidad` afirmaciones de verdadero/falso, mitad y mitad.
  function armarItems(pool, cantidad, contextoDe) {
    const elegidas = QA.mezclar(pool).slice(0, cantidad);
    const flags = QA.mezclar(elegidas.map((_, i) => i % 2 === 0));
    return elegidas.map((p, i) => {
      const verdadero = flags[i];
      const correcta = p.opciones[p.correcta];
      const distractores = p.opciones.filter((_, k) => k !== p.correcta);
      const propuesta = verdadero ? correcta : distractores[Math.floor(Math.random() * distractores.length)];
      return {
        contexto: contextoDe(p),
        afirmacion: armarAfirmacion(p, propuesta),
        fuente: fuenteDe(p),
        verdadero,
        correcta,
        correccion: verdadero ? null : armarAfirmacion(p, correcta),
        explicacion: p.explicacion,
        respuesta: null,
      };
    });
  }

  // ---------- Menu ----------

  function formatoTiempo(seg) {
    const m = Math.floor(seg / 60);
    const s = seg % 60;
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  }

  function renderizarMenu() {
    const datos = leer();

    const ult = datos.simulacros[datos.simulacros.length - 1];
    $("teo-historial-simulacro").textContent = ult
      ? `Último simulacro: ${ult.aciertos}/${ult.total} (${ult.porcentaje}%), ${ult.porcentaje >= APROBACION ? "aprobado" : "no aprobado"}. Intentos registrados: ${datos.simulacros.length}.`
      : "Todavía no hiciste ningún simulacro en este navegador.";

    const lista = $("teo-modulos");
    lista.textContent = "";
    temas().forEach((tema, i) => {
      const n = i + 1;
      const estado = datos.modulos[n] || {};
      const clase = estado.aprobado ? "aprobado" : "disponible";

      const li = document.createElement("li");
      li.className = `teo-modulo teo-modulo--${clase}`;

      const info = document.createElement("div");
      const nombre = document.createElement("span");
      nombre.className = "teo-modulo__nombre";
      nombre.textContent = `Módulo ${n}: ${tema}`;
      const detalle = document.createElement("span");
      detalle.className = "teo-modulo__estado";
      detalle.textContent =
        estado.mejor !== undefined
          ? `${estado.aprobado ? "Aprobado" : "Todavía no aprobado"}, mejor nota ${estado.mejor}%`
          : "Sin intentos todavía";
      info.append(nombre, detalle);

      const boton = document.createElement("button");
      boton.type = "button";
      boton.className = "boton-secundario";
      boton.textContent = estado.mejor !== undefined ? "Repetir cuestionario" : "Hacer cuestionario";
      boton.addEventListener("click", () => iniciarModulo(n, tema));
      li.append(info, boton);
      lista.appendChild(li);
    });
  }

  // ---------- Sesion de preguntas ----------

  function iniciarSesion(cfg) {
    detenerTimer();
    sesion = Object.assign({ actual: 0, inicio: Date.now() }, cfg);
    $("teo-contexto").textContent = cfg.titulo;
    $("teo-num-total").textContent = cfg.items.length;
    $("teo-etiqueta-tiempo").textContent = cfg.segundos ? "Tiempo restante" : "Tiempo";
    $("teo-pastilla-tiempo").classList.remove("urgente");
    actualizarTiempo();
    timerId = setInterval(tick, 1000);
    mostrarItem();
    App.mostrarPantalla("teoJuego");
  }

  function iniciarSimulacro() {
    const pool = PREGUNTAS_QA;
    const items = armarItems(pool, PREGUNTAS_SIMULACRO, (p) => p.tema);
    iniciarSesion({
      tipo: "simulacro",
      titulo: "Simulacro de la prueba teórica",
      items,
      segundos: MINUTOS_SIMULACRO * 60,
    });
  }

  function iniciarModulo(n, tema) {
    const items = armarItems(PREGUNTAS_QA.filter((p) => p.tema === tema), PREGUNTAS_MODULO, () => `Módulo ${n}`);
    iniciarSesion({ tipo: "modulo", modulo: n, tema, titulo: `Módulo ${n}: ${tema}`, items, segundos: 0 });
  }

  function detenerTimer() {
    if (timerId) clearInterval(timerId);
    timerId = null;
  }

  function segundosUsados() {
    return Math.floor((Date.now() - sesion.inicio) / 1000);
  }

  function actualizarTiempo() {
    const usados = sesion ? segundosUsados() : 0;
    const restante = sesion && sesion.segundos ? Math.max(0, sesion.segundos - usados) : usados;
    $("teo-valor-tiempo").textContent = formatoTiempo(restante);
    if (sesion && sesion.segundos) $("teo-pastilla-tiempo").classList.toggle("urgente", restante <= 300);
  }

  function tick() {
    actualizarTiempo();
    if (sesion.segundos && segundosUsados() >= sesion.segundos) finalizar();
  }

  function mostrarItem() {
    const it = sesion.items[sesion.actual];
    $("teo-num-actual").textContent = sesion.actual + 1;
    $("teo-enunciado").textContent = it.afirmacion;
    $("teo-fuente").textContent = `Fuente: ${it.fuente}`;
    document.querySelectorAll('input[name="teo-resp"]').forEach((r) => {
      r.checked = it.respuesta !== null && String(it.respuesta ? 1 : 0) === r.value;
    });
    $("teo-boton-anterior").disabled = sesion.actual === 0;
    $("teo-boton-siguiente").textContent = sesion.actual === sesion.items.length - 1 ? "Finalizar" : "Siguiente";
    actualizarRespondidas();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function actualizarRespondidas() {
    $("teo-num-respondidas").textContent = sesion.items.filter((i) => i.respuesta !== null).length;
  }

  function pedirFinalizar() {
    const sin = sesion.items.filter((i) => i.respuesta === null).length;
    if (sin > 0 && !confirm(`Te quedan ${sin} preguntas sin responder. ¿Finalizar igual?`)) return;
    finalizar();
  }

  // ---------- Resultados ----------

  function finalizar() {
    detenerTimer();
    const { items, tipo } = sesion;
    const total = items.length;
    const aciertos = items.filter((i) => i.respuesta === i.verdadero).length;
    const porcentaje = Math.round((aciertos / total) * 100);
    const aprobado = (aciertos / total) * 100 >= APROBACION;
    const usados = sesion.segundos ? Math.min(segundosUsados(), sesion.segundos) : segundosUsados();

    const sello = $("teo-sello");
    sello.textContent = aprobado ? "APROBADO" : "NO APROBADO";
    sello.className = "sello-veredicto " + (aprobado ? "sello-veredicto--aprobado" : "sello-veredicto--reprobado");
    $("teo-stat-aciertos").textContent = `${aciertos}/${total}`;
    $("teo-stat-porcentaje").textContent = `${porcentaje}%`;
    $("teo-stat-minimo").textContent = `${APROBACION}%`;
    $("teo-stat-tiempo").textContent = formatoTiempo(usados);

    const datos = leer();
    let mensaje;
    if (tipo === "simulacro") {
      datos.simulacros.push({ ts: Date.now(), aciertos, total, porcentaje });
      datos.simulacros = datos.simulacros.slice(-MAX_SIMULACROS);
      mensaje = aprobado
        ? "Con esta nota aprobarías la prueba teórica. Recordá que el examen real tiene otras preguntas."
        : "Con esta nota no alcanzarías el mínimo de la prueba teórica. Repasá los errores y volvé a intentar.";
    } else {
      const previo = datos.modulos[sesion.modulo] || {};
      datos.modulos[sesion.modulo] = {
        mejor: Math.max(porcentaje, previo.mejor || 0),
        aprobado: !!previo.aprobado || aprobado,
      };
      mensaje = aprobado
        ? "Módulo aprobado."
        : "Necesitás 71 % o más para aprobar el módulo. Podés repetir el cuestionario.";
    }
    guardar(datos);
    $("teo-mensaje").textContent = mensaje;

    renderizarRevision();
    App.mostrarPantalla("teoResultados");
  }

  function renderizarRevision() {
    const cont = $("teo-revision");
    cont.textContent = "";
    const ord = sesion.items
      .map((it, n) => ({ it, n }))
      .sort((a, b) => Number(a.it.respuesta === a.it.verdadero) - Number(b.it.respuesta === b.it.verdadero) || a.n - b.n);

    ord.forEach(({ it, n }) => {
      const ok = it.respuesta === it.verdadero;
      const art = document.createElement("article");
      art.className = "qa-rev-item" + (ok ? " qa-rev-item--ok" : it.respuesta === null ? " qa-rev-item--blanco" : "");

      const meta = document.createElement("p");
      meta.className = "qa-rev-item__meta";
      meta.textContent = `${n + 1}. ${it.contexto}`;
      const preg = document.createElement("p");
      preg.className = "qa-rev-item__pregunta";
      preg.textContent = it.afirmacion;

      const tuya = document.createElement("p");
      tuya.className = "qa-rev-item__resp " + (ok ? "qa-rev-item__resp--ok" : "qa-rev-item__resp--mal");
      const dijo = it.respuesta === null ? "No respondiste" : `Respondiste ${it.respuesta ? "Verdadero" : "Falso"}`;
      tuya.textContent = `${dijo}. Era ${it.verdadero ? "Verdadero" : "Falso"}.`;

      art.append(meta, preg, tuya);
      if (!it.verdadero) {
        const c = document.createElement("p");
        c.className = "qa-rev-item__resp qa-rev-item__resp--ok";
        c.textContent = `Lo correcto: ${it.correccion}`;
        art.appendChild(c);
      }
      const fu = document.createElement("p");
      fu.className = "qa-rev-item__fuente";
      fu.textContent = `Fuente: ${it.fuente}`;
      art.appendChild(fu);
      if (it.explicacion) {
        const e = document.createElement("p");
        e.className = "qa-rev-item__explicacion";
        e.textContent = it.explicacion;
        art.appendChild(e);
      }
      cont.appendChild(art);
    });
  }

  // ---------- Eventos ----------

  $("boton-ir-teo").addEventListener("click", () => {
    renderizarMenu();
    App.mostrarPantalla("teoInicio");
  });
  $("boton-teo-volver").addEventListener("click", () => App.mostrarPantalla("config"));
  $("boton-teo-simulacro").addEventListener("click", iniciarSimulacro);
  $("boton-teo-reiniciar").addEventListener("click", () => {
    if (!confirm("¿Reiniciar el progreso del curso? Se borran las notas de los nueve módulos.")) return;
    const d = leer();
    d.modulos = {};
    guardar(d);
    renderizarMenu();
  });

  document.querySelectorAll('input[name="teo-resp"]').forEach((r) => {
    r.addEventListener("change", () => {
      sesion.items[sesion.actual].respuesta = r.value === "1";
      actualizarRespondidas();
    });
  });
  $("teo-boton-anterior").addEventListener("click", () => {
    if (sesion.actual > 0) {
      sesion.actual--;
      mostrarItem();
    }
  });
  $("teo-boton-siguiente").addEventListener("click", () => {
    if (sesion.actual < sesion.items.length - 1) {
      sesion.actual++;
      mostrarItem();
    } else {
      pedirFinalizar();
    }
  });
  $("teo-boton-finalizar").addEventListener("click", pedirFinalizar);

  $("teo-boton-repetir").addEventListener("click", () => {
    if (sesion.tipo === "simulacro") iniciarSimulacro();
    else iniciarModulo(sesion.modulo, sesion.tema);
  });
  $("teo-boton-menu").addEventListener("click", () => {
    renderizarMenu();
    App.mostrarPantalla("teoInicio");
  });
})();
