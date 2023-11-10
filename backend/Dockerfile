# Usa una imagen de Python como base
FROM python:3.10.11

# Establece la variable de entorno PYTHONUNBUFFERED a 1
ENV PYTHONUNBUFFERED 1

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia el archivo de requisitos al contenedor en /app/
COPY requirements.txt /app/

# Instala las dependencias del proyecto
RUN pip install --upgrade pip
RUN pip install -r requirements.txt
RUN pip install PyJWT
RUN pip install mysqlclient
RUN pip install django-cors-headers
RUN pip install Pillow

# Copia el contenido del directorio actual al contenedor en /app/
COPY . /app/

# Exponer el puerto 8000 (o el que hayas configurado en tu aplicación)
EXPOSE 8000

# Comando para ejecutar la aplicación cuando el contenedor se inicia
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
