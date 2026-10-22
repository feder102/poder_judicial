// Prueba teorica y curso: preguntas de verdadero o falso armadas a partir del
// banco de Q&A. Cada pregunta se presenta con una respuesta propuesta que es la
// correcta (verdadero) o un distractor (falso).
//   - Simulacro: 100 preguntas, 75 minutos, 71 % para aprobar.
//   - Curso: 9 modulos (uno por tema); cada uno se habilita al aprobar el anterior.

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
        pregunta: p.pregunta,
        propuesta,
        verdadero,
        correcta,
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
      const anteriorAprobado = n === 1 || (datos.modulos[n - 1] && datos.modulos[n - 1].aprobado);
      const clase = estado.aprobado ? "aprobado" : anteriorAprobado ? "disponible" : "bloqueado";

      const li = document.createElement("li");
      li.className = `teo-modulo teo-modulo--${clase}`;

      const info = document.createElement("div");
      const nombre = document.createElement("span");
      nombre.className = "teo-modulo__nombre";
      nombre.textContent = `Módulo ${n}: ${tema}`;
      const detalle = document.createElement("span");
      detalle.className = "teo-modulo__estado";
      detalle.textContent =
        clase === "bloqueado"
          ? "Bloqueado: aprobá el módulo anterior"
          : estado.aprobado
          ? n === 9 && estado.mejor === undefined
            ? "Completado"
            : `Aprobado, mejor nota ${estado.mejor}%`
          : estado.mejor !== undefined
          ? `Disponible, mejor nota ${estado.mejor}%`
          : "Disponible";
      info.append(nombre, detalle);

      const boton = document.createElement("button");
      boton.type = "button";
      boton.className = "boton-secundario";
      boton.disabled = clase === "bloqueado";
      if (n === 9) {
        // El modulo 9 no tiene cuestionario de entrenamiento: solo se marca como completado.
        boton.textContent = estado.aprobado ? "Desmarcar" : "Marcar completado";
        boton.addEventListener("click", () => {
          const d = leer();
          d.modulos[9] = estado.aprobado ? {} : { aprobado: true };
          guardar(d);
          renderizarMenu();
        });
      } else {
        boton.textContent = estado.mejor !== undefined ? "Repetir cuestionario" : "Hacer cuestionario";
        boton.addEventListener("click", () => iniciarModulo(n, tema));
      }
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
    const pool = QA.preguntasDelTema("", false);
    const items = armarItems(pool, PREGUNTAS_SIMULACRO, (p) => p.tema);
    iniciarSesion({
      tipo: "simulacro",
      titulo: "Simulacro de la prueba teórica",
      items,
      segundos: MINUTOS_SIMULACRO * 60,
    });
  }

  function iniciarModulo(n, tema) {
    const items = armarItems(QA.preguntasDelTema(tema, false), PREGUNTAS_MODULO, () => `Módulo ${n}`);
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
    $("teo-enunciado").textContent = it.pregunta;
    $("teo-propuesta").textContent = `Respuesta propuesta: ${it.propuesta}`;
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
        ? sesion.modulo < 9
          ? `Módulo aprobado: se habilitó el módulo ${sesion.modulo + 1}.`
          : "Módulo aprobado."
        : "Necesitás 71 % o más para habilitar el módulo siguiente. Podés repetir el cuestionario.";
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
      preg.textContent = it.pregunta;
      const prop = document.createElement("p");
      prop.className = "qa-rev-item__resp";
      prop.textContent = `Respuesta propuesta: ${it.propuesta}`;

      const tuya = document.createElement("p");
      tuya.className = "qa-rev-item__resp " + (ok ? "qa-rev-item__resp--ok" : "qa-rev-item__resp--mal");
      const dijo = it.respuesta === null ? "No respondiste" : `Respondiste ${it.respuesta ? "Verdadero" : "Falso"}`;
      tuya.textContent = `${dijo}. Era ${it.verdadero ? "Verdadero" : "Falso"}.`;

      art.append(meta, preg, prop, tuya);
      if (!it.verdadero) {
        const c = document.createElement("p");
        c.className = "qa-rev-item__resp qa-rev-item__resp--ok";
        c.textContent = `Lo correcto: ${it.correcta}`;
        art.appendChild(c);
      }
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
    if (!confirm("¿Reiniciar el progreso del curso? Se vuelven a bloquear los módulos 2 al 9.")) return;
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
