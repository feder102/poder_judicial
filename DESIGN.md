---
version: alpha
name: Corrector de Expedientes
description: Práctica de ortografía y examen multiple choice para el ingreso al Poder Judicial de San Juan, presentada como un portal de información pública — clara, institucional y orientada a datos.
colors:
  banda: "#13253D"      # cabecera del sitio, el único plano oscuro de la página
  fondo: "#F3F5F8"      # superficie dominante de la página
  superficie: "#FFFFFF" # tarjetas, hoja del expediente, ficha de resultado
  tinta: "#172131"      # texto principal (AA sobre fondo y superficie)
  tinta-2: "#4A5565"    # texto secundario (≥ 4.5:1 sobre fondo y superficie)
  borde: "#D9DEE5"
  accion: "#1F5FA8"     # una sola tarea: acciones y selección
  verde: "#1D7A45"      # semáforo: aprobado
  ambar: "#975A00"      # semáforo: a revisar
  rojo: "#B3261E"       # semáforo: a reforzar / se te escapó
typography:
  interfaz:
    fontFamily: Public Sans
    fontSize: 16px
    lineHeight: 1.5
  titulo:
    fontFamily: Public Sans
    fontSize: clamp(1.75rem, 4vw, 2.4rem)
    fontWeight: 700
    letterSpacing: -0.015em
  expediente:
    fontFamily: Source Serif 4
    fontSize: clamp(1.05rem, 1.25vw, 1.3rem)
    lineHeight: 1.85
  indice:
    fontFamily: Public Sans
    fontSize: clamp(3rem, 8vw, 4.5rem)
    fontWeight: 700
rounded:
  sm: 4px
  md: 8px
spacing:
  sm: 8px
  md: 16px
  lg: 32px
components:
  boton-sello:
    backgroundColor: "{colors.accion}"
    textColor: "#FFFFFF"
    rounded: "{rounded.sm}"
    padding: 12px 22px
  boton-secundario:
    backgroundColor: "{colors.superficie}"
    textColor: "{colors.tinta}"
    rounded: "{rounded.sm}"
    padding: 11px 18px
---

## Overview

El sitio se lee como un portal de datos públicos (en la línea de
municipiosargentinos.net): una banda institucional arriba con la navegación,
páginas con migas de pan y un título claro, y resultados presentados como una
**ficha** con un índice de 0 a 100. El usuario es alguien que estudia para un
examen de ingreso: necesita leer mucho texto sin cansarse y entender su
desempeño de un vistazo.

## Colors

- `banda` solo en la cabecera del sitio. Es el único plano oscuro.
- `fondo` y `superficie` cargan casi toda la página; la jerarquía la dan los
  bordes finos, no las sombras.
- `accion` es el único color de interacción (botones, sliders, palabra marcada,
  opción elegida).
- El semáforo `verde` / `ambar` / `rojo` aparece únicamente para comunicar un
  resultado (índice, barras por área, revisión del texto, historial). Nunca
  como decoración.
- Modo oscuro: los mismos roles redefinidos en `@media (prefers-color-scheme: dark)`.

## Typography

- Public Sans para toda la interfaz: diseñada para sitios de información
  gubernamental, con cifras tabulares para tiempos, conteos e índices.
- Source Serif 4 solo para el texto jurídico (examen y revisión), que es el
  documento: se lee justificado, como la hoja impresa del cuadernillo.
- Etiquetas en minúscula inicial, sin versalitas ni tracking. Sin monoespaciada.

## Layout

- Cabecera del sitio a todo el ancho; contenido en `max-width: 1120px`.
- Inicio: formulario de práctica a la izquierda, columna lateral con el banco de
  contenido, tu historial y cómo se puntúa.
- Examen: barra fija con tiempo y conteo; la hoja ocupa casi todo el ancho.
- Resultados: ficha (índice + escala + datos) y después el detalle por área,
  el historial y la revisión.
- En pantallas de examen la navegación se oculta y se reemplaza por
  "Examen en curso" para no abandonar el cronómetro por error.

## Components

- **Ficha de resultado**: índice grande `/100`, estado (Aprobado / A revisar /
  A reforzar) como etiqueta de color, escala segmentada con marcador y la
  línea de aprobación.
- **Filas por área / tema**: nombre, barra de semáforo, conteo — como un ranking.
- **Palabra marcada**: círculo trazado a mano en color `accion` (el gesto de
  corregir un expediente con lápiz).

## Do's and Don'ts

- Do: usar el semáforo solo para resultados.
- Do: `:focus-visible` visible en todo lo interactivo.
- Don't: volver a la tinta violeta, al fondo de papel rayado ni al sello rotado.
- Don't: etiquetas en mayúsculas espaciadas, monoespaciada decorativa, una
  palabra del título en cursiva de color, bordes laterales de color en
  tarjetas, flechas pegadas a los enlaces, easing con rebote.
