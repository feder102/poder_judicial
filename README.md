# Corrector de Expedientes

Sitio de práctica de ortografía para el examen de ingreso al Poder Judicial
de San Juan. Muestra un texto real del cuadernillo de estudio con errores
ortográficos insertados que hay que encontrar antes de que se acabe el tiempo.

Tiene dos niveles, elegibles en la pantalla de configuración:

- **Detectar**: alcanza con marcar las palabras que tienen error.
- **Corregir** (más difícil): además de marcar el error hay que escribir la
  palabra correcta. Solo cuenta como acierto si coincide exactamente
  (tildes y mayúsculas incluidas). El historial de progreso se separa por nivel.

## Q&A (preguntas y respuestas)

Desde el botón **Q&A · Preguntas y respuestas** de la pantalla inicial se accede a un
examen multiple choice sobre el Cuadernillo 2026 (~700 preguntas, temas I a IX).
Se configura:

- cantidad de preguntas (5–50, tope según las disponibles),
- nota de aprobación en % (el resultado muestra APROBADO / REPROBADO según ese umbral),
- si se muestra o no el artículo y su título en cada pregunta (sin él, se reescribe el
  enunciado para no nombrarlo y se descartan las preguntas que dependen del número),
- tema del cuadernillo.

Es un examen ciego: las respuestas se corrigen al final, con revisión pregunta por pregunta.

Es un sitio estático (HTML + CSS + JS, sin build ni backend), pensado para
servirse directamente con cualquier servidor web.

## Estructura

- `index.html` — pantallas de configuración, juego y resultados
- `css/styles.css` — sistema visual
- `js/errores.js` — motor de inyección de errores ortográficos (tildes, b/v, g/j, c/s/z, h muda, consonantes dobles, ll/y, m/n, x/s)
- `js/app.js` — estado del juego, temporizador, render y resultados
- `js/qa.js` — sección Q&A (sorteo, examen, resultados)
- `data/preguntas.js` — banco de preguntas multiple choice (la respuesta correcta se carga primera y se mezcla al armar el examen)
- `data/textos.js` — 71 textos jurídicos (~400 palabras c/u) extraídos y limpiados del `CUADERNILLO-2026.pdf`, etiquetados por tema del programa

## Uso local

No requiere instalación. Basta con levantar cualquier servidor estático desde
la raíz del proyecto, por ejemplo:

```bash
python3 -m http.server 8000
```

y abrir `http://localhost:8000`.

## Despliegue

Sitio 100% estático: alcanza con copiar la carpeta a un servidor con Nginx o
Apache apuntando el `root` a este directorio. No requiere Node, PHP ni base
de datos.
