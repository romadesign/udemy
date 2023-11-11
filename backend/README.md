# djangoApi Start project
- Install Python, Xammp, VsCode || PyCharm

## Librerias instaladas
- pip install PyJWT
- pip install mysqlclient
- pip install corsheaders
- pip install faker
- pip instal pillow <- image ->

### Crear proyecto en windows
* Crear entorno envn
```
  python -m venv "nombre del entorno"
```

* Activar entorno creado
```
  "nombre del entorno"\Scripts\activate
```

* Install Django
```
  pip install django
```

* Creando proyecto con Django
```
  django-admin startproject "nombre del proyecto"
```

* Iniciar proyecto
```
  python manage.py runserver
```

## Creando un super user
```
  python3 manage.py createsuperuser
```

## Realizar migraciones
```
  python manage.py makemigrations
  python manage.py migrate
```


### Crear proyecto en linux
* Crear entorno envn
```
  python3 -m virtualenv nombre_de_tu_entorno
```

* Activar entorno creado
```
  source nombre_entorno_virtual/bin/activate
```

Si tienes problemas al instalar mysqlclient ejecutar
```
  sudo apt-get install libmariadb3 libmariadb-dev
```

Posibles problemas en linux

* Install mysql
```
  sudo apt-get install mysql-server

  https://stackoverflow.com/questions/11657829/error-2002-hy000-cant-connect-to-local-mysql-server-through-socket-var-run
```
otras opciones Detener mysql
```
  sudo /etc/init.d/mysql stop
```
* Crear usuario a mysql
```
  sudo mysql -u root
```
``` mysql
    ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'test'; <- colocar vacio
```

* Crear base de datos
```
  sudo mysql -u root -p
```

```
  create database db_name;
```



* Teclado en español
```
https://www.sysadmit.com/2017/12/linux-configurar-teclado-espanol.html
```

______________________________________________________________________________________________--

## Migraciones posibles soluciones
https://docs.djangoproject.com/en/4.1/topics/migrations/


## Para utilizar Django con Xampp 
```
  'default': {
         'ENGINE': 'django.db.backends.mysql',
         'NAME': 'udemy',
         'USER': 'root',
         'PASSWORD': ''
    }
}
```

* Ahora
```
  DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'udemy',
        'USER': 'root',
        'PASSWORD': '',
        'HOST': '127.0.0.1',
        'PORT': '3306',
    }
}
```

# https://www.codewithharry.com/tutorial/react-useref/


## Recursos
SQL
```
  https://runebook.dev/es/docs/django/topics/db/sql 
```


## Confingurado con Docker
```
    // ir a la carpeta backend y colocar
    docker-compose up || docker-compose up -d

    // Se instalara todo para poder ejecutar el proyecto en la parte backend
  
```
