// Seccion Q&A: examen multiple choice sobre el Cuadernillo 2026.
// Las preguntas viven en data/preguntas.js (PREGUNTAS_QA). Como el resto de la
// app es un examen ciego: no hay feedback hasta que se finaliza.

(function () {
  "use strict";

  const CLAVE_CONFIG = "expediente_qa_config_v1";
  const CLAVE_RECIENTES = "expediente_qa_recientes_v1";
  const CLAVE_HISTORIAL = "expediente_qa_historial_v1";
  const MAX_RECIENTES = 300;
  const MAX_HISTORIAL = 30;
  const MAX_PREGUNTAS = 50;
  const LETRAS = ["A", "B", "C", "D", "E"];

  const $ = (id) => document.getElementById(id);

  const inputCantidad = $("qa-input-cantidad");
  const inputAprobacion = $("qa-input-aprobacion");
  const inputArticulo = $("qa-input-articulo");
  const inputTema = $("qa-input-tema");

  let estado = null;

  // ---------- Almacenamiento ----------

  function leer(clave, porDefecto) {
    try {
      const raw = localStorage.getItem(clave);
      return raw ? JSON.parse(raw) : porDefecto;
    } catch (e) {
      return porDefecto;
    }
  }

  function guardar(clave, valor) {
    try {
      localStorage.setItem(clave, JSON.stringify(valor));
    } catch (e) {
      /* almacenamiento no disponible: no es critico */
    }
  }

  // ---------- Utilidades ----------

  function mezclar(lista) {
    const a = lista.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // "Art. 74 — Competencia", "Art. 74" o solo el rotulo, segun lo que tenga la pregunta.
  function etiquetaArticulo(p) {
    return [p.articulo, p.titulo].filter(Boolean).join(" — ");
  }

  // Algunos enunciados citan el numero de articulo; si el articulo no se
  // muestra, hay que sacarlo del texto o, si la pregunta depende de el,
  // descartarla. Al reves: si el articulo se muestra, se descartan las
  // preguntas cuya respuesta es justamente el numero de articulo.
  const RE_ARTICULO = /\b(art[íi]culos?|arts?\.)\s*\d/i;

  function textoSinArticulo(texto) {
    let t = texto.replace(/^(¿)?\s*[Ss]egún (el|los) (art[íi]culos?|arts?\.)[^,?]*?,\s*/, "$1");
    t = t.replace(/,?\s*según (el|los) (art[íi]culos?|arts?\.)[^,?:]*?(?=[,?:])/, "");
    if (t !== texto) t = t.replace(/^(¿?)([a-záéíóúñ])/, (m, q, c) => q + c.toUpperCase());
    return RE_ARTICULO.test(t) ? null : t;
  }

  function adaptarPregunta(p, mostrarArticulo) {
    if (mostrarArticulo) {
      return p.opciones.some((o) => RE_ARTICULO.test(o)) ? null : p;
    }
    if (p.opciones.some((o) => RE_ARTICULO.test(o))) return null;
    const texto = textoSinArticulo(p.pregunta);
    return texto === null ? null : Object.assign({}, p, { pregunta: texto });
  }

  function preguntasDelTema(tema, mostrarArticulo) {
    const base = tema ? PREGUNTAS_QA.filter((p) => p.tema === tema) : PREGUNTAS_QA;
    return base.map((p) => adaptarPregunta(p, mostrarArticulo)).filter(Boolean);
  }

  // Prioriza preguntas que no salieron en los ultimos intentos.
  function sortear(tema, cantidad, mostrarArticulo) {
    const pool = preguntasDelTema(tema, mostrarArticulo);
    const recientes = new Set(leer(CLAVE_RECIENTES, []));
    const nuevas = mezclar(pool.filter((p) => !recientes.has(p.id)));
    const viejas = mezclar(pool.filter((p) => recientes.has(p.id)));
    const elegidas = nuevas.concat(viejas).slice(0, cantidad);
    const ids = leer(CLAVE_RECIENTES, []).concat(elegidas.map((p) => p.id));
    guardar(CLAVE_RECIENTES, ids.slice(-Math.min(MAX_RECIENTES, Math.floor(PREGUNTAS_QA.length * 0.6))));
    return mezclar(elegidas);
  }

  function prepararPregunta(p) {
    const orden = mezclar(p.opciones.map((texto, i) => ({ texto, ok: i === p.correcta })));
    return {
      id: p.id,
      tema: p.tema,
      articulo: p.articulo,
      titulo: p.titulo,
      pregunta: p.pregunta,
      explicacion: p.explicacion,
      opciones: orden.map((o) => o.texto),
      correcta: orden.findIndex((o) => o.ok),
      respuesta: null,
    };
  }

  // ---------- Configuracion ----------

  function poblarTemas() {
    const temas = [...new Set(PREGUNTAS_QA.map((p) => p.tema))];
    for (const tema of temas) {
      const opt = document.createElement("option");
      opt.value = tema;
      opt.textContent = tema;
      inputTema.appendChild(opt);
    }
  }

  function actualizarLecturas() {
    const disponibles = preguntasDelTema(inputTema.value, inputArticulo.checked).length;
    const max = Math.max(1, Math.min(MAX_PREGUNTAS, disponibles));
    inputCantidad.max = max;
    inputCantidad.min = Math.min(5, max);
    if (parseInt(inputCantidad.value, 10) > max) inputCantidad.value = max;
    $("qa-escala-max").textContent = max;
    $("qa-valor-cantidad").textContent = inputCantidad.value;
    $("qa-valor-aprobacion").textContent = inputAprobacion.value;
    $("qa-ayuda-disponibles").textContent = `${disponibles} preguntas disponibles en este tema.`;
    const n = parseInt(inputCantidad.value, 10);
    const minimo = Math.ceil((n * parseInt(inputAprobacion.value, 10)) / 100);
    $("qa-ayuda-aprobacion").textContent = `Necesitás al menos ${minimo} de ${n} respuestas correctas para aprobar.`;
  }

  function cargarConfig() {
    const cfg = leer(CLAVE_CONFIG, null);
    if (!cfg) return;
    if (cfg.cantidad) inputCantidad.value = cfg.cantidad;
    if (cfg.aprobacion) inputAprobacion.value = cfg.aprobacion;
    inputArticulo.checked = !!cfg.mostrarArticulo;
    if (cfg.tema && [...inputTema.options].some((o) => o.value === cfg.tema)) inputTema.value = cfg.tema;
  }

  [inputCantidad, inputAprobacion, inputTema].forEach((el) => {
    el.addEventListener("input", actualizarLecturas);
  });
  inputArticulo.addEventListener("change", actualizarLecturas);

  // ---------- Examen ----------

  function iniciar(cfg) {
    const preguntas = sortear(cfg.tema, cfg.cantidad, cfg.mostrarArticulo).map(prepararPregunta);
    estado = { cfg, preguntas, actual: 0 };
    $("qa-num-total").textContent = preguntas.length;
    mostrarPregunta();
    App.mostrarPantalla("qaJuego");
  }

  function mostrarPregunta() {
    const p = estado.preguntas[estado.actual];
    const total = estado.preguntas.length;
    $("qa-num-actual").textContent = estado.actual + 1;
    $("qa-tema-actual").textContent = p.tema;
    const art = $("qa-articulo");
    if (estado.cfg.mostrarArticulo && etiquetaArticulo(p)) {
      art.textContent = etiquetaArticulo(p);
      art.classList.remove("oculto");
    } else {
      art.classList.add("oculto");
    }
    $("qa-enunciado").textContent = p.pregunta;

    const cont = $("qa-opciones");
    cont.textContent = "";
    p.opciones.forEach((texto, i) => {
      const label = document.createElement("label");
      label.className = "qa-opcion";
      const input = document.createElement("input");
      input.type = "radio";
      input.name = "qa-respuesta";
      input.value = i;
      input.checked = p.respuesta === i;
      input.addEventListener("change", () => {
        p.respuesta = i;
        actualizarRespondidas();
      });
      const caja = document.createElement("span");
      caja.className = "qa-opcion__caja";
      const letra = document.createElement("span");
      letra.className = "qa-opcion__letra";
      letra.textContent = LETRAS[i] + ".";
      const t = document.createElement("span");
      t.textContent = texto;
      caja.append(letra, t);
      label.append(input, caja);
      cont.appendChild(label);
    });

    $("qa-boton-anterior").disabled = estado.actual === 0;
    $("qa-boton-siguiente").textContent = estado.actual === total - 1 ? "Finalizar" : "Siguiente";
    actualizarRespondidas();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function actualizarRespondidas() {
    $("qa-num-respondidas").textContent = estado.preguntas.filter((p) => p.respuesta !== null).length;
  }

  function finalizar(pedirConfirmacion) {
    const sinResponder = estado.preguntas.filter((p) => p.respuesta === null).length;
    if (pedirConfirmacion && sinResponder > 0) {
      const ok = confirm(`Te quedan ${sinResponder} preguntas sin responder. ¿Finalizar igual?`);
      if (!ok) return;
    }
    mostrarResultados();
  }

  // ---------- Resultados ----------

  function mostrarResultados() {
    const { preguntas, cfg } = estado;
    const total = preguntas.length;
    const aciertos = preguntas.filter((p) => p.respuesta === p.correcta).length;
    const blancos = preguntas.filter((p) => p.respuesta === null).length;
    const porcentaje = Math.round((aciertos / total) * 100);
    const aprobado = (aciertos / total) * 100 >= cfg.aprobacion;

    const sello = $("qa-sello");
    sello.textContent = aprobado ? "APROBADO" : "REPROBADO";
    sello.className = "sello-veredicto " + (aprobado ? "sello-veredicto--aprobado" : "sello-veredicto--reprobado");

    $("qa-stat-aciertos").textContent = `${aciertos}/${total}`;
    $("qa-stat-porcentaje").textContent = `${porcentaje}%`;
    $("qa-stat-minimo").textContent = `${cfg.aprobacion}%`;
    $("qa-stat-blancos").textContent = blancos;

    renderizarTemas();
    renderizarRevision();
    registrarIntento({ ts: Date.now(), tema: cfg.tema, aciertos, total, aprobacion: cfg.aprobacion });
    App.mostrarPantalla("qaResultados");
  }

  function renderizarTemas() {
    const porTema = new Map();
    estado.preguntas.forEach((p) => {
      const t = porTema.get(p.tema) || { ok: 0, total: 0 };
      t.total++;
      if (p.respuesta === p.correcta) t.ok++;
      porTema.set(p.tema, t);
    });
    const lista = $("qa-lista-temas");
    lista.textContent = "";
    for (const [tema, { ok, total }] of porTema) {
      const pct = Math.round((ok / total) * 100);
      const li = document.createElement("li");
      li.className = "area-item";
      const nombre = document.createElement("span");
      nombre.className = "area-item__nombre";
      nombre.textContent = tema;
      const barra = document.createElement("span");
      barra.className = "area-item__barra";
      const relleno = document.createElement("span");
      relleno.className = "area-item__relleno " + (pct >= estado.cfg.aprobacion ? "aprobado" : pct >= 50 ? "revisar" : "");
      relleno.style.width = pct + "%";
      barra.appendChild(relleno);
      const cuenta = document.createElement("span");
      cuenta.className = "area-item__cuenta";
      cuenta.textContent = `${ok}/${total}`;
      li.append(nombre, barra, cuenta);
      lista.appendChild(li);
    }
  }

  function renderizarRevision() {
    const cont = $("qa-revision");
    cont.textContent = "";
    estado.preguntas.forEach((p, n) => {
      const ok = p.respuesta === p.correcta;
      const item = document.createElement("article");
      item.className = "qa-rev-item" + (ok ? " qa-rev-item--ok" : p.respuesta === null ? " qa-rev-item--blanco" : "");

      const meta = document.createElement("p");
      meta.className = "qa-rev-item__meta";
      meta.textContent = `${n + 1}. ${etiquetaArticulo(p)} · ${p.tema}`;

      const preg = document.createElement("p");
      preg.className = "qa-rev-item__pregunta";
      preg.textContent = p.pregunta;

      item.append(meta, preg);

      const tuya = document.createElement("p");
      tuya.className = "qa-rev-item__resp " + (ok ? "qa-rev-item__resp--ok" : "qa-rev-item__resp--mal");
      tuya.textContent =
        p.respuesta === null
          ? "No respondiste."
          : `Tu respuesta: ${LETRAS[p.respuesta]}. ${p.opciones[p.respuesta]}`;
      item.appendChild(tuya);

      if (!ok) {
        const correcta = document.createElement("p");
        correcta.className = "qa-rev-item__resp qa-rev-item__resp--ok";
        correcta.textContent = `Correcta: ${LETRAS[p.correcta]}. ${p.opciones[p.correcta]}`;
        item.appendChild(correcta);
      }
      if (p.explicacion) {
        const exp = document.createElement("p");
        exp.className = "qa-rev-item__explicacion";
        exp.textContent = p.explicacion;
        item.appendChild(exp);
      }
      cont.appendChild(item);
    });
  }

  function registrarIntento(resumen) {
    const h = leer(CLAVE_HISTORIAL, []);
    h.push(resumen);
    guardar(CLAVE_HISTORIAL, h.slice(-MAX_HISTORIAL));
  }

  // ---------- Eventos ----------

  $("boton-ir-qa").addEventListener("click", () => {
    actualizarLecturas();
    App.mostrarPantalla("qaConfig");
  });
  $("boton-qa-volver").addEventListener("click", () => App.mostrarPantalla("config"));

  $("form-qa").addEventListener("submit", (e) => {
    e.preventDefault();
    const cfg = {
      cantidad: parseInt(inputCantidad.value, 10),
      aprobacion: parseInt(inputAprobacion.value, 10),
      mostrarArticulo: inputArticulo.checked,
      tema: inputTema.value,
    };
    guardar(CLAVE_CONFIG, cfg);
    iniciar(cfg);
  });

  $("qa-boton-anterior").addEventListener("click", () => {
    if (estado.actual > 0) {
      estado.actual--;
      mostrarPregunta();
    }
  });
  $("qa-boton-siguiente").addEventListener("click", () => {
    if (estado.actual < estado.preguntas.length - 1) {
      estado.actual++;
      mostrarPregunta();
    } else {
      finalizar(true);
    }
  });
  $("qa-boton-finalizar").addEventListener("click", () => finalizar(true));

  $("qa-boton-repetir").addEventListener("click", () => iniciar(estado.cfg));
  $("qa-boton-config").addEventListener("click", () => {
    actualizarLecturas();
    App.mostrarPantalla("qaConfig");
  });
  $("qa-boton-inicio").addEventListener("click", () => App.mostrarPantalla("config"));

  // ---------- Arranque ----------

  poblarTemas();
  cargarConfig();
  actualizarLecturas();
})();
