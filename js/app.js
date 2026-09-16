(function () {
  "use strict";

  const CLAVE_CONFIG = "expediente_ortografia_config_v1";

  const pantallas = {
    config: document.getElementById("pantalla-config"),
    juego: document.getElementById("pantalla-juego"),
    resultados: document.getElementById("pantalla-resultados"),
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
      encontrados: new Set(),
      falsos: 0,
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

  function manejarClicPalabra(idx, span) {
    if (estado.terminado) return;
    const esError = estado.errores.find((e) => e.tokenIdx === idx);
    if (esError) {
      if (estado.encontrados.has(idx)) return;
      estado.encontrados.add(idx);
      span.classList.add("acertada");
      document.getElementById("valor-hallados").textContent = estado.encontrados.size;
      if (estado.encontrados.size === estado.errores.length) {
        setTimeout(finalizarPractica, 500);
      }
    } else {
      estado.falsos++;
      span.classList.remove("fallo");
      // reflow para permitir relanzar la animacion si se hace clic dos veces
      void span.offsetWidth;
      span.classList.add("fallo");
    }
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
    const total = estado.errores.length;
    const encontrados = estado.encontrados.size;
    const tiempoUsado = estado.segundosTotales - Math.max(0, estado.segundosRestantes);
    const precision = encontrados + estado.falsos > 0 ? Math.round((encontrados / (encontrados + estado.falsos)) * 100) : 0;

    document.getElementById("stat-encontrados").textContent = `${encontrados}/${total}`;
    document.getElementById("stat-tiempo").textContent = formatoTiempo(tiempoUsado);
    document.getElementById("stat-falsos").textContent = estado.falsos;
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

    renderizarRevision();
    mostrarPantalla("resultados");
  }

  function formatoTiempo(s) {
    const mm = String(Math.floor(s / 60)).padStart(2, "0");
    const ss = String(s % 60).padStart(2, "0");
    return `${mm}:${ss}`;
  }

  function renderizarRevision() {
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
        if (estado.encontrados.has(idx)) {
          span.classList.add("acertada-final");
        } else {
          span.classList.add("perdida-final");
          const nota = document.createElement("span");
          nota.className = "correccion-tooltip";
          nota.textContent = info.original;
          span.appendChild(nota);
        }
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

  // ---------- Arranque ----------

  poblarTemas();
  cargarConfigGuardada();
  actualizarLecturas();
})();
