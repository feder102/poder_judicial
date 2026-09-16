# Corrector de Expedientes

Sitio de práctica de ortografía para el examen de ingreso al Poder Judicial
de San Juan. Muestra un texto real del cuadernillo de estudio con errores
ortográficos insertados que hay que encontrar antes de que se acabe el tiempo.

Es un sitio estático (HTML + CSS + JS, sin build ni backend), pensado para
servirse directamente con cualquier servidor web.

## Estructura

- `index.html` — pantallas de configuración, juego y resultados
- `css/styles.css` — sistema visual
- `js/errores.js` — motor de inyección de errores ortográficos (tildes, b/v, g/j, c/s/z, h muda, consonantes dobles, ll/y, m/n, x/s)
- `js/app.js` — estado del juego, temporizador, render y resultados
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
