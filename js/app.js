(function () {
  "use strict";

  const CLAVE_CONFIG = "expediente_ortografia_config_v1";

  const pantallas = {
    config: document.getElementById("pantalla-config"),
    juego: document.getElementById("pantalla-juego"),
    resultados: document.getElementById("pantalla-resultados"),
    repaso: document.getElementById("pantalla-repaso"),
  };

  function mostrarPantalla(nombre) {
    for (const key in pantallas) {
      pantallas[key].classList.toggle("oculto", key !== nombre);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // ---------- Configuracion ----------

  const inputErrores = document.getElementById("input-errores");
  const inputTiempo = document.getElementById("input-tiempo");
  const inputLongitud = document.getElementById("input-longitud");
  const inputTema = document.getElementById("input-tema");
  const valorErrores = document.getElementById("valor-errores");
  const valorTiempo = document.getElementById("valor-tiempo");
  const valorLongitud = document.getElementById("valor-longitud");
  const formConfig = document.getElementById("form-config");

  function cargarConfigGuardada() {
    try {
      const raw = localStorage.getItem(CLAVE_CONFIG);
      if (!raw) return;
      const cfg = JSON.parse(raw);
      if (cfg.errores) inputErrores.value = cfg.errores;
      if (cfg.tiempo) inputTiempo.value = cfg.tiempo;
      if (cfg.longitud) inputLongitud.value = cfg.longitud;
      if (cfg.tema !== undefined) inputTema.value = cfg.tema;
    } catch (e) {
      /* localStorage no disponible: se ignora y se usan los valores por defecto */
    }
  }

  function guardarConfig(cfg) {
    try {
      localStorage.setItem(CLAVE_CONFIG, JSON.stringify(cfg));
    } catch (e) {
      /* almacenamiento no disponible (modo privado, cuota, etc.): no es critico */
    }
  }

  function poblarTemas() {
    // orden de aparicion en el cuadernillo (I, III, IV, V...), no alfabetico
    const temas = [...new Set(TEXTOS_JURIDICOS.map((t) => t.tema))];
    for (const tema of temas) {
      const opt = document.createElement("option");
      opt.value = tema;
      opt.textContent = tema;
      inputTema.appendChild(opt);
    }
  }

  function actualizarLecturas() {
    valorErrores.textContent = inputErrores.value;
    valorTiempo.textContent = inputTiempo.value;
    valorLongitud.textContent = inputLongitud.value;
  }

  [inputErrores, inputTiempo, inputLongitud].forEach((el) => {
    el.addEventListener("input", actualizarLecturas);
  });

  // ---------- Estado del juego ----------

  let estado = null;

  function elegirTexto(tema) {
    const candidatos = tema ? TEXTOS_JURIDICOS.filter((t) => t.tema === tema) : TEXTOS_JURIDICOS;
    const lista = candidatos.length ? candidatos : TEXTOS_JURIDICOS;
    return lista[Math.floor(Math.random() * lista.length)];
  }

  function iniciarPractica(cfg) {
    const fuente = elegirTexto(cfg.tema);
    const textoRecortado = recortarTexto(fuente.texto, cfg.longitud);
    const { tokens, errores } = generarEjercicio(textoRecortado, cfg.errores);

    estado = {
      cfg,
      tema: fuente.tema,
      tokens,
      errores,
      marcadas: new Set(),
      segundosTotales: cfg.tiempo * 60,
      segundosRestantes: cfg.tiempo * 60,
      timerId: null,
      terminado: false,
      inicio: Date.now(),
    };

    document.getElementById("tema-actual").textContent = fuente.tema;
    document.getElementById("valor-total").textContent = errores.length;
    document.getElementById("valor-hallados").textContent = "0";

    renderizarJuego();
    actualizarCronometro();
    mostrarPantalla("juego");

    estado.timerId = setInterval(tick, 1000);
  }

  function tick() {
    if (!estado || estado.terminado) return;
    estado.segundosRestantes--;
    actualizarCronometro();
    if (estado.segundosRestantes <= 0) {
      finalizarPractica();
    }
  }

  function actualizarCronometro() {
    const s = Math.max(0, estado.segundosRestantes);
    const mm = String(Math.floor(s / 60)).padStart(2, "0");
    const ss = String(s % 60).padStart(2, "0");
    document.getElementById("valor-cronometro").textContent = `${mm}:${ss}`;
    document.getElementById("pastilla-tiempo").classList.toggle("urgente", s <= 30 && s > 0);
  }

  function renderizarJuego() {
    const contenedor = document.getElementById("texto-juego");
    contenedor.innerHTML = "";
    estado.tokens.forEach((tok, idx) => {
      if (tok.tipo === "sep") {
        contenedor.appendChild(document.createTextNode(tok.texto));
        return;
      }
      const span = document.createElement("span");
      span.className = "palabra";
      span.textContent = tok.texto;
      span.dataset.idx = idx;
      span.tabIndex = 0;
      span.addEventListener("click", () => manejarClicPalabra(idx, span));
      span.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          manejarClicPalabra(idx, span);
        }
      });
      contenedor.appendChild(span);
    });
  }

  // Durante el examen no se avisa si un click esta bien o mal: solo se
  // marca de forma neutra lo que la persona fue senalando, igual que
  // subrayar a lapiz sobre el papel antes de corregir. La correccion real
  // (que palabras eran errores de verdad) se calcula recien al finalizar.
  function manejarClicPalabra(idx, span) {
    if (estado.terminado) return;
    if (estado.marcadas.has(idx)) {
      estado.marcadas.delete(idx);
      span.classList.remove("marcada");
    } else {
      estado.marcadas.add(idx);
      span.classList.add("marcada");
    }
    document.getElementById("valor-hallados").textContent = estado.marcadas.size;
  }

  document.getElementById("boton-finalizar").addEventListener("click", finalizarPractica);

  function finalizarPractica() {
    if (!estado || estado.terminado) return;
    estado.terminado = true;
    clearInterval(estado.timerId);
    mostrarResultados();
  }

  // ---------- Resultados ----------

  function mostrarResultados() {
    const idxErrores = new Set(estado.errores.map((e) => e.tokenIdx));
    const encontradosIdx = new Set([...estado.marcadas].filter((idx) => idxErrores.has(idx)));
    const falsosIdx = new Set([...estado.marcadas].filter((idx) => !idxErrores.has(idx)));

    const total = estado.errores.length;
    const encontrados = encontradosIdx.size;
    const falsos = falsosIdx.size;
    const tiempoUsado = estado.segundosTotales - Math.max(0, estado.segundosRestantes);
    const precision = encontrados + falsos > 0 ? Math.round((encontrados / (encontrados + falsos)) * 100) : 0;

    document.getElementById("stat-encontrados").textContent = `${encontrados}/${total}`;
    document.getElementById("stat-tiempo").textContent = formatoTiempo(tiempoUsado);
    document.getElementById("stat-falsos").textContent = falsos;
    document.getElementById("stat-precision").textContent = `${precision}%`;

    const ratio = total > 0 ? encontrados / total : 0;
    const sello = document.getElementById("sello-veredicto");
    sello.classList.remove("sello-veredicto--aprobado", "sello-veredicto--revisar", "sello-veredicto--reprobado");
    if (ratio >= 0.9) {
      sello.textContent = "APROBADO";
      sello.classList.add("sello-veredicto--aprobado");
    } else if (ratio >= 0.6) {
      sello.textContent = "A REVISAR";
      sello.classList.add("sello-veredicto--revisar");
    } else {
      sello.textContent = "A REFORZAR";
      sello.classList.add("sello-veredicto--reprobado");
    }

    Progreso.registrarIntento({
      ts: Date.now(),
      tema: estado.tema,
      encontrados,
      total,
      tiempoUsado,
      falsos,
    });
    const perdidos = estado.errores.filter((e) => !encontradosIdx.has(e.tokenIdx));
    Progreso.registrarPalabrasFalladas(perdidos, estado.tema);
    actualizarContadorRepaso();

    renderizarProgreso();
    renderizarRevision(encontradosIdx, falsosIdx);
    mostrarPantalla("resultados");
  }

  // ---------- Progreso (historial + palabras para repasar) ----------

  function renderizarProgreso() {
    const historial = Progreso.obtenerHistorial();
    const resumen = document.getElementById("progreso-resumen");
    const contenedor = document.getElementById("grafico-progreso");

    if (historial.length <= 1) {
      resumen.textContent = "Este es tu primer intento registrado en este navegador.";
      contenedor.innerHTML = "";
      return;
    }

    const ultimos = historial.slice(-15);
    resumen.textContent = `${historial.length} intentos registrados en este navegador (se pierden si reiniciás la PC o borrás datos de navegación). Mostrando los últimos ${ultimos.length}.`;

    const anchoBarra = 16;
    const espacio = 6;
    const alto = 90;
    const ancho = ultimos.length * (anchoBarra + espacio) + espacio;

    let barras = "";
    ultimos.forEach((intento, i) => {
      const ratio = intento.total > 0 ? intento.encontrados / intento.total : 0;
      const alturaBarra = Math.max(4, ratio * alto);
      const x = espacio + i * (anchoBarra + espacio);
      const y = alto - alturaBarra;
      let clase = "reforzar";
      if (ratio >= 0.9) clase = "aprobado";
      else if (ratio >= 0.6) clase = "revisar";
      const esUltimo = i === ultimos.length - 1;
      const pct = Math.round(ratio * 100);
      const fecha = new Date(intento.ts).toLocaleDateString("es-AR", { day: "2-digit", month: "2-digit" });
      barras += `<rect x="${x}" y="${y.toFixed(1)}" width="${anchoBarra}" height="${alturaBarra.toFixed(1)}" rx="2" class="barra-progreso ${clase}${esUltimo ? " actual" : ""}"><title>${pct}% (${intento.encontrados}/${intento.total}) · ${fecha}</title></rect>`;
    });

    contenedor.innerHTML = `<svg viewBox="0 0 ${ancho} ${alto}" width="100%" height="90" preserveAspectRatio="none" role="img" aria-label="Precision de tus ultimos intentos">${barras}</svg>`;
  }

  function formatoRelativo(ts) {
    const minutos = Math.floor((Date.now() - ts) / 60000);
    if (minutos < 1) return "recién";
    if (minutos < 60) return `hace ${minutos} min`;
    const horas = Math.floor(minutos / 60);
    if (horas < 24) return `hace ${horas} h`;
    const dias = Math.floor(horas / 24);
    return `hace ${dias} d`;
  }

  function actualizarContadorRepaso() {
    const n = Progreso.obtenerRepaso().length;
    const badge = document.getElementById("contador-repaso");
    badge.textContent = n;
    badge.classList.toggle("oculto", n === 0);
  }

  function renderizarRepaso() {
    const lista = document.getElementById("lista-repaso");
    const palabras = Progreso.obtenerRepaso();
    lista.innerHTML = "";
    document.getElementById("repaso-vacio").classList.toggle("oculto", palabras.length > 0);
    document.getElementById("repaso-credito").classList.toggle("oculto", palabras.length === 0);

    for (const p of palabras) {
      const li = document.createElement("li");
      li.className = "repaso-item";

      const texto = document.createElement("div");
      texto.className = "repaso-item__texto";
      const correcta = document.createElement("span");
      correcta.className = "repaso-item__correcta";
      correcta.textContent = p.correcta;
      const meta = document.createElement("span");
      meta.className = "repaso-item__meta";
      meta.textContent = `fallada ${p.veces} ${p.veces === 1 ? "vez" : "veces"} · ${p.categorias.join(", ")} · ${formatoRelativo(p.ultimaFecha)}`;
      const definicion = document.createElement("p");
      definicion.className = "repaso-item__definicion repaso-item__definicion--cargando";
      definicion.textContent = "Buscando definición…";
      texto.appendChild(correcta);
      texto.appendChild(meta);
      texto.appendChild(definicion);

      cargarDefinicion(p.correcta, definicion);

      const boton = document.createElement("button");
      boton.type = "button";
      boton.className = "repaso-item__ok";
      boton.textContent = "Ya la sé";
      boton.addEventListener("click", () => {
        Progreso.eliminarPalabraRepaso(p.clave);
        renderizarRepaso();
        actualizarContadorRepaso();
      });

      li.appendChild(texto);
      li.appendChild(boton);
      lista.appendChild(li);
    }
  }

  function cargarDefinicion(palabra, elemento) {
    Diccionario.obtenerDefinicion(palabra).then(({ definicion, url }) => {
      elemento.classList.remove("repaso-item__definicion--cargando");
      if (definicion) {
        elemento.textContent = definicion;
      } else {
        elemento.innerHTML = "";
        elemento.classList.add("repaso-item__definicion--vacia");
        elemento.appendChild(document.createTextNode("Sin definición disponible en el Wikcionario. "));
        const link = document.createElement("a");
        link.href = url;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.textContent = "Buscarla igual →";
        elemento.appendChild(link);
      }
    });
  }

  function formatoTiempo(s) {
    const mm = String(Math.floor(s / 60)).padStart(2, "0");
    const ss = String(s % 60).padStart(2, "0");
    return `${mm}:${ss}`;
  }

  function renderizarRevision(encontradosIdx, falsosIdx) {
    const contenedor = document.getElementById("texto-revision");
    contenedor.innerHTML = "";
    const erroresPorIdx = new Map(estado.errores.map((e) => [e.tokenIdx, e]));

    estado.tokens.forEach((tok, idx) => {
      if (tok.tipo === "sep") {
        contenedor.appendChild(document.createTextNode(tok.texto));
        return;
      }
      const info = erroresPorIdx.get(idx);
      const span = document.createElement("span");
      span.className = "palabra";
      span.textContent = tok.texto;
      if (info) {
        if (encontradosIdx.has(idx)) {
          span.classList.add("acertada-final");
        } else {
          span.classList.add("perdida-final");
          const nota = document.createElement("span");
          nota.className = "correccion-tooltip";
          nota.textContent = info.original;
          span.appendChild(nota);
        }
      } else if (falsosIdx.has(idx)) {
        span.classList.add("falso-final");
      }
      contenedor.appendChild(span);
    });
  }

  // ---------- Eventos de flujo ----------

  formConfig.addEventListener("submit", (e) => {
    e.preventDefault();
    const cfg = {
      errores: parseInt(inputErrores.value, 10),
      tiempo: parseInt(inputTiempo.value, 10),
      longitud: parseInt(inputLongitud.value, 10),
      tema: inputTema.value,
    };
    guardarConfig(cfg);
    iniciarPractica(cfg);
  });

  document.getElementById("boton-repetir").addEventListener("click", () => {
    iniciarPractica(estado.cfg);
  });

  document.getElementById("boton-config").addEventListener("click", () => {
    mostrarPantalla("config");
  });

  function abrirRepaso() {
    renderizarRepaso();
    mostrarPantalla("repaso");
  }

  document.getElementById("boton-ver-repaso").addEventListener("click", abrirRepaso);
  document.getElementById("boton-repaso-desde-resultados").addEventListener("click", abrirRepaso);

  document.getElementById("boton-repaso-volver").addEventListener("click", () => {
    mostrarPantalla("config");
  });

  document.getElementById("boton-vaciar-repaso").addEventListener("click", () => {
    if (confirm("¿Vaciar toda la lista de palabras para repasar?")) {
      Progreso.vaciarRepaso();
      renderizarRepaso();
      actualizarContadorRepaso();
    }
  });

  // ---------- Arranque ----------

  poblarTemas();
  cargarConfigGuardada();
  actualizarLecturas();
  actualizarContadorRepaso();
})();
