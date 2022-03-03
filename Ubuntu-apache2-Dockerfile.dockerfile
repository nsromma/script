FROM ubuntu
ENV DEBIAN_FRONTEND=noninteractive
RUN apt-get update -y 
RUN apt-get install apache2 -y 
RUN echo "Ubuntu container will be fun!" > /var/www/html/index.html 
EXPOSE 80 
CMD ["apache2ctl", "-D", "FOREGROUND"]