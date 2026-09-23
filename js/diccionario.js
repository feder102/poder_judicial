// Definiciones cortas para las "palabras para repasar", tomadas del
// Wikcionario en espanol (Wikimedia) vía su API publica (sin backend, sin
// API key). Contenido bajo licencia CC BY-SA — de ahi el credito visible en
// la pantalla de repaso.
//
// Se pide el HTML ya renderizado (prop=text) en vez del wikitexto crudo:
// asi es el propio Wiktionary el que expande las plantillas (por ejemplo
// "{{accion de|escuchar}}" -> "Accion de escuchar"), en vez de tener que
// reimplementar ese motor de plantillas a mano con regex.

const Diccionario = (function () {
  "use strict";

  const CLAVE_CACHE = "expediente_diccionario_cache_v1";
  const API = "https://es.wiktionary.org/w/api.php";
  const MAX_LARGO = 240;

  function leerCache() {
    try {
      const raw = localStorage.getItem(CLAVE_CACHE);
      return raw ? JSON.parse(raw) : {};
    } catch (e) {
      return {};
    }
  }

  function guardarCache(cache) {
    try {
      localStorage.setItem(CLAVE_CACHE, JSON.stringify(cache));
    } catch (e) {
      /* almacenamiento no disponible: no es critico, se vuelve a pedir */
    }
  }

  function acortar(texto) {
    if (texto.length <= MAX_LARGO) return texto;
    const corte = texto.lastIndexOf(" ", MAX_LARGO);
    return texto.slice(0, corte > 0 ? corte : MAX_LARGO).trim() + "…";
  }

  // La seccion "Español" de una entrada viene como un bloque de hermanos
  // (encabezado, plantillas de pronunciacion, y mas abajo un <dl><dd>...
  // por cada acepcion) hasta el proximo <h2> de otro idioma. Se toma el
  // primer <dd> de la primera lista de definiciones que aparezca ahi.
  function extraerPrimeraDefinicion(html) {
    const doc = new DOMParser().parseFromString(html, "text/html");
    const contenedor = doc.querySelector(".mw-parser-output") || doc.body;
    const hijos = Array.from(contenedor.children);

    const esEncabezadoEspanol = (el) => {
      const h2 = el.querySelector && el.querySelector("h2");
      return !!h2 && h2.textContent.trim() === "Español";
    };
    const tieneEncabezadoH2 = (el) => !!(el.querySelector && el.querySelector("h2"));

    const idxInicio = hijos.findIndex(esEncabezadoEspanol);
    if (idxInicio === -1) return null;

    let idxFin = hijos.length;
    for (let i = idxInicio + 1; i < hijos.length; i++) {
      if (tieneEncabezadoH2(hijos[i])) {
        idxFin = i;
        break;
      }
    }

    const seccion = doc.createElement("div");
    for (let i = idxInicio + 1; i < idxFin; i++) {
      seccion.appendChild(hijos[i].cloneNode(true));
    }

    const dd = seccion.querySelector("dl dd");
    if (!dd) return null;

    dd.querySelectorAll("sup, style").forEach((el) => el.remove());
    const texto = dd.textContent.replace(/\s+/g, " ").trim();
    return texto.length > 0 ? acortar(texto) : null;
  }

  async function buscarEnWiktionary(palabra) {
    const url = `${API}?action=parse&page=${encodeURIComponent(palabra)}&prop=text&format=json&formatversion=2&origin=*`;
    const resp = await fetch(url);
    if (!resp.ok) throw new Error("respuesta no ok");
    const datos = await resp.json();
    if (datos.error || !datos.parse) return null;
    return extraerPrimeraDefinicion(datos.parse.text);
  }

  /**
   * Devuelve { definicion: string|null, url: string }. definicion es null
   * si no se encontro (la palabra no esta en el Wikcionario, o fallo la red);
   * en ese caso `url` sirve para que la persona la busque a mano.
   */
  async function obtenerDefinicion(palabra) {
    const clave = palabra.toLowerCase();
    const url = `https://es.wiktionary.org/wiki/${encodeURIComponent(clave)}`;
    const cache = leerCache();

    if (cache[clave] !== undefined) {
      return { definicion: cache[clave], url };
    }

    let definicion = null;
    try {
      definicion = await buscarEnWiktionary(clave);
    } catch (e) {
      definicion = null;
    }

    cache[clave] = definicion;
    guardarCache(cache);
    return { definicion, url };
  }

  return { obtenerDefinicion };
})();
