TURNO NOCTURNO  - GRUPO 1 -  2023

FERNANDO MAGLIANO


###### OBLIGATORIO 1 ######

###### REPOSITORIO ######

  ## Creacion de repositorio Git y Github

    - Creamos un repositorio local usando el comando git init para trabajar de forma local
    - Creamos en Github una cuenta 
    - Creamos un repositorio en Github para centralizar todo el codigo 
    - Clonamos el repositorio remoto para trabajar de forma local con git clone <link>


  ## Comandos Git

  - git config --global user.name "Mi nombre"               ...   configura tu nombre 
  - git config --global user.email "usuario@dominio.com"    ...   configura tu email
  - git init                                                ...   crea un repositorio
  - git clone  <link>                                       ...   crea una copia del repositorio externo a la maquina local en la que se esta trabajando
  - git clone -b <nombre de la rama><link>                  ...   crea una copia de la rama                                                        
  - git add                                                 ...   añade un cambio a un  directorio de trabajo, indica a Git que quieres incluir
                                                                  actualizaciones en un archivo concreto en la próxima confirmación.
                                                                  Git add no guarda, los cambios no se registran hasta que ejecutas git commit 
  - git rm                                                  ...   elimina archivos
  - git commit                                              ...   confirma los cambios realizados en Git
  - git status                                              ...   Permite ver los cambios que se han preparad y los que no y los archivos en los que Git 
                                                                  no va a realizar el seguimiento                                
  - git branch                                              ...   es usado para listar las ramas existentes, crear y eliminar ramas
  - git merge                                               ...   une dos ramas
  - git pull                                                ...   baja los cambios hechos del repositorio remot a la maquina local
  - git push                                                ...   sube los cambios desde la maquina local al repositorio remoto
  - git remote                                              ...   te permite crear, ver y eliminar conexiones con otros repositorios
  - git log                                                 ...   muestra las instantáneas confirmadas. Te permite ver el historial del proyecto, 
                                                                  filtrarlo y buscar cambios concretos.
                                                                  Mientras que git status te permite examinar el directorio de trabajo y el entorno de ensayo, git log solo muestra el historial confirmado.
  - git diff                                                ...   se usa para identificar diferencias en el repositorio
  - git stash                                               ...   almacena temporalmente (o guarda en un stash) los cambios que hayas efectuado para que
                                                                  puedas trabajar en otra cosa y mas tarde aplicar los cambio
  - git checkout                                            ...   te permite desplazarte entre las ramas creadas por git branch




##### VERSIONADO #####

## buenas practicas y uso de ramas separadas


- Estableceremos 2 ramas principales:
  . master que es la rama principal que es la que se pone en produccion, es la que tiene la ultima version estable
  . develop que es la rama para el desarrollo

  . se crean ramas auxiliares por cada feature localmente y luego al terminar se hace un merge con la rama develop y una vez testeado los cambios se hace un merge con master

- al hacer un commit usar comentarios concisos y claros para brindar informacion sobre el cambio realizado


## resumen de commit y evolucion del proyecto

- todos los commit llevaran un nombre acorde al cambio realizado
- el comando git log lista las confirmaciones hechas sobre ese repositorio en orden cronologico inverso
- git log -p muestra las diferencias introducias en cada confirmacion


###### ELICITACION ######

## Actividades de investigacion

# Entrevistas:
   - Se realizaron encuestas a padres, abuelos y hermanos de varias escuelas del centro de Montevideo sobre la alimentacion que desearian para sus hijos, nietos etc.
   - De dichas entrevistas se vio el interes de que las comidas servidas sean balanceadas, con una funcion nutricional, la cual permita satisfacer las necesidades de  los ninios que comen en el comedor y una funcion educadora para establecer habitos alimenticios saludables que ayuden en el desarrollo y promocion de la salud.
   - Tambien los comedores tienen influencia en otros aspectos como en el comportamiento social, la socializacion e interaccion.
   - Por todo esto sugieren los entrevistados que los comedores sean evaludados periodicamente.
   - Se vio la necesidad de contar con un menu alternativo para ninos con alergias, intolerancia u otras patologias.


# Cuestionarios
   - Se entregaron cuestionarios a padres de una escuela con varias preguntas para que con tiempo las respondieran y a los 2 dias los fuimos a recoger.
   - De estos cuestionarios se pudo concluir que los padres y responsables quieren que en los comedores se vendan productos mas saludables como tortas caseras, tartas saladas, que en vez de vender gaseosas se vendan jugos naturales y yogur.
   - Para los menus del almuerzo que sea balanceado con mas frutas y verduras.


# Ing. Inversa
  
  


## Referencias a fuentes de informacion

  - las entrevistas se pueden ver en elicitacion/entrevistas
  - los cuestionarios se pueden ven en elicitacion/cuestionarios

## USERPERSONAS

## Modelo conceptual del problema



##### ESPECIFICACIONES #####

## Requisitos funcionales
  
  1. Permitir ver los menus diarios y alternativos
     Actor: Usuario.
     Descripcion: El sistema debe permitir ver el menu diario y el alternativo y al final salir y volver a la pantalla de Inicio.
                  No puede ser modificado por el usuario, solo desde el comedor se puede modificar
     Prioridad: baja.

  2. Permitir al comedor ingresar las compras
     Actor: Personal autorizado del Comedor
     Descripcion: El sistema pedira clave de autenticacion al personal del comedor para poder entrar.
                  El sistema proporcionara una lista de los productos a la venta y se deben marcar lo que corresponda, en la lista ya sale el precio unitario del producto.
                  El sistema pedira la forma de pago de los mismos, que puede ser en efectivo en el momento de la compra o lo pone en la cuenta del alumno.
    Prioridad: Alta.

  3. Permitir ver los gastos de los ninios
     Actor: Usuario.
     Descripcion: El sistema debe permitir ver todos los consumos del alumno.
                  El usuario tiene que ingresar con la clave del alumno que se forma con el nombre y apellido del ninio y el grado al que asiste. Ej. FM6A (Fernando Magliano 6A).
                  Se debera listar todos los consumos con dia, producto y precio de cada uno de ellos, en la lista se van a mostrar los productos comprados en efectivos(ya pagados) y los que estan en la cuenta del alumno con el total a pagar.
                  El usuario no puede modificar.
     Prioridad: baja.

  4. Permitir a los padres pagar los consumos de sus hijos
     Actor: Usuario.
     Descripcion: Los padres podran pagar los gastos de sus hijos hasta un momento dado.
                  Despues de realizar dichos pagos los consumos y compras se borraran del sistema.
                  Los pagos se pueden realizar en efectivo, debito o credito.
    Prioridad: Alta.

  5. Permitir mandar mensajes o sugerencias
     Actor: Usuario
     Descripcion: El sistema permitira escribir mensajes o sugerencias al comedor, los mismos seran enviados al Comedor por email.
     Prioridad: Baja.

  
## Requisitos no funcionales


1. El sistema debe poder permitir ingresar 500 ocurrencias (cantidad de ninios de la escuela)
2. La interfaz de usuario será implementada para navegadores web únicamente con HTML5 y JavaScript.
3. El sistema debe estar protegido contra el ingreso no autorizado al sector comedor
4. La aplicación debe ser compatible con todas las versiones de Windows, desde Windows 95.
5. La aplicación debe ser compatible con todas las versiones de android, desde android 0.9


## User Stories / User casos detallados


## bocetos de IU

    

