# syntax=docker/dockerfile:1

# Sitio 100% estatico (HTML/CSS/JS sin build): una sola etapa, nginx sirve
# los archivos tal cual. No hay paso de compilacion ni dependencias de Node.
FROM nginx:1.27-alpine

# Puerto 3000 para seguir la misma convencion que el resto de los proyectos
# en este Coolify (en vez del 80 por defecto de la imagen de nginx).
COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY index.html /usr/share/nginx/html/index.html
COPY css/ /usr/share/nginx/html/css/
COPY js/ /usr/share/nginx/html/js/
COPY data/ /usr/share/nginx/html/data/

EXPOSE 3000
