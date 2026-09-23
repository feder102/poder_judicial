// Persistencia local (localStorage) de dos cosas que no tienen que ver con
// un intento puntual, sino con el uso a lo largo del tiempo en este navegador:
// el historial de intentos (para el grafico de progreso) y las palabras que
// se quedaron sin corregir (para el repaso). No hay backend: si se borran los
// datos del navegador o se usa otra maquina, se empieza de cero.

const Progreso = (function () {
  "use strict";

  const CLAVE_HISTORIAL = "expediente_historial_v1";
  const CLAVE_REPASO = "expediente_repaso_v1";
  const MAX_HISTORIAL = 50;

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
      /* almacenamiento no disponible (modo privado, cuota, etc.): no es critico */
    }
  }

  function registrarIntento(resumen) {
    const historial = leer(CLAVE_HISTORIAL, []);
    historial.push(resumen);
    if (historial.length > MAX_HISTORIAL) {
      historial.splice(0, historial.length - MAX_HISTORIAL);
    }
    guardar(CLAVE_HISTORIAL, historial);
  }

  function obtenerHistorial() {
    return leer(CLAVE_HISTORIAL, []);
  }

  // Normaliza para no duplicar "Provincia" y "provincia" como palabras distintas.
  function claveNormalizada(palabra) {
    return palabra
      .toLowerCase()
      .normalize("NFD")
      .replace(/[̀-ͯ]/g, "");
  }

  function registrarPalabrasFalladas(erroresPerdidos, tema) {
    if (!erroresPerdidos.length) return;
    const repaso = leer(CLAVE_REPASO, {});
    const ahora = Date.now();
    for (const err of erroresPerdidos) {
      const clave = claveNormalizada(err.original);
      const actual = repaso[clave] || {
        correcta: err.original,
        veces: 0,
        categorias: [],
      };
      actual.correcta = err.original;
      actual.veces += 1;
      actual.ultimoEscrito = err.escrito;
      actual.ultimaFecha = ahora;
      actual.tema = tema;
      if (!actual.categorias.includes(err.categoria)) actual.categorias.push(err.categoria);
      repaso[clave] = actual;
    }
    guardar(CLAVE_REPASO, repaso);
  }

  function obtenerRepaso() {
    const repaso = leer(CLAVE_REPASO, {});
    return Object.entries(repaso)
      .map(([clave, datos]) => Object.assign({ clave }, datos))
      .sort((a, b) => b.veces - a.veces || b.ultimaFecha - a.ultimaFecha);
  }

  function eliminarPalabraRepaso(clave) {
    const repaso = leer(CLAVE_REPASO, {});
    delete repaso[clave];
    guardar(CLAVE_REPASO, repaso);
  }

  function vaciarRepaso() {
    guardar(CLAVE_REPASO, {});
  }

  return {
    registrarIntento,
    obtenerHistorial,
    registrarPalabrasFalladas,
    obtenerRepaso,
    eliminarPalabraRepaso,
    vaciarRepaso,
  };
})();
