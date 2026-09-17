# syntax=docker/dockerfile:1

# Sitio 100% estatico (HTML/CSS/JS sin build): una sola etapa, nginx sirve
# los archivos tal cual. No hay paso de compilacion ni dependencias de Node.
FROM nginx:1.27-alpine

COPY index.html /usr/share/nginx/html/index.html
COPY css/ /usr/share/nginx/html/css/
COPY js/ /usr/share/nginx/html/js/
COPY data/ /usr/share/nginx/html/data/

EXPOSE 80
