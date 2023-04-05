
Repositorio para Fundamentos de Ingenieria de Software


TURNO NOCTURNO   N4A  - GRUPO 1 - 2023

Fernando Magliano
Felipe Ghione
Ignacio Santalla

# OBLIGATORIO 1 #

# REPOSITORIO #

## Creacion de repositorio Git y Github ##

- Creamos un repositorio local usando el comando git init para trabajar de forma local
- Creamos en Github una cuenta 
- Creamos un repositorio en Github para centralizar todo el codigo 
- Clonamos el repositorio remoto para trabajar de forma local con git clone <link>
- Cada integrante del equipo trabajara en su repositorio local y subira al repositorio remoto sus trabajos



## Comandos Git ##

- git config --global user.name "Mi nombre" ... configura tu nombre
- git config --global user.email "usuario@dominio.com" ... configura tu email
- git init ... crea un repositorio
- git clone ... crea una copia del repositorio externo a la maquina local en la que se esta trabajando
- git clone -b ... crea una copia de la rama
- git add ... añade un cambio a un directorio de trabajo, indica a Git que quieres incluir actualizaciones en un archivo concreto en la próxima confirmación. Git add no guarda, los cambios no se registran hasta que ejecutas  git commit
- git rm ... elimina archivos
- git commit ... confirma los cambios realizados en Git
- git status ... Permite ver los cambios que se han preparad y los que no y los archivos en los que Git no va a realizar el seguimiento
- git branch ... es usado para listar las ramas existentes, crear y eliminar ramas
- git merge ... une dos ramas
- git pull ... baja los cambios hechos del repositorio remot a la maquina local
- git push ... sube los cambios desde la maquina local al repositorio remoto
- git remote ... te permite crear, ver y eliminar conexiones con otros repositorios
- git log ... muestra las instantáneas confirmadas. Te permite ver el historial del proyecto, filtrarlo y buscar cambios concretos. Mientras que git status te permite examinar el directorio de trabajo y el entorno de ensayo, git log solo muestra el historial confirmado.
- git diff ... se usa para identificar diferencias en el repositorio
- git stash ... almacena temporalmente (o guarda en un stash) los cambios que hayas efectuado para que puedas trabajar en otra cosa y mas tarde aplicar los cambio
- git checkout ... te permite desplazarte entre las ramas creadas por git branch
 
 
# VERSIONADO #

## Buenas practicas y uso de ramas separadas ##

- Estableceremos 2 ramas principales: 
   - main que es la rama principal que es la que se pone en produccion, es la que tiene la ultima version estable
   - develop que es la rama para el desarrollo diario de la aplicacion 

   - se crean ramas auxiliares por cada feature localmente y luego al terminar se hace un merge con la rama develop y una vez testeado los cambios
     se hace un merge con main

- al hacer un commit se usaran comentarios concisos y claros para brindar informacion sobre el cambio realizado

## Resumen de commit y evolucion del proyecto ##

- Todos los commit llevaran un nombre acorde al cambio realizado
- El comando git log lista las confirmaciones hechas sobre ese repositorio en orden cronologico inverso
- git log -p muestra las diferencias introducias en cada confirmacion


# ELICITACION #

## Actividades de investigacion ##

### Entrevistas ###
Se realizaron entrevistas a padres y abuelos de niños que concurren al colegio Ingles en  Montevideo sobre la construccion de una app para el comedor escolar.
Se hicieron preguntas sobre la alimentacion que desearian para sus hijos, nietos etc. y sobre las funcionalidades que deberia tener dicha aplicacion
De dichas entrevistas se vio el interes de que las comidas servidas sean balanceadas, con una funcion nutricional, la cual permita satisfacer las necesidades de los niños.
Saber que  comen los niños en el comedor y que el comedor tenga una funcion educadora para establecer habitos alimenticios saludables que ayuden en el desarrollo y promocion de la salud.
Tambien los comedores tienen influencia en otros aspectos como en el comportamiento social, la socializacion e interaccion.
Por todo esto sugieren los entrevistados que los comedores sean evaludados periodicamente.
Se vio la necesidad de contar con un menu alternativo para ninos con alergias, intolerancia u otras patologias.

En lo que respecta a la aplicacion deberia permitir a los padres ver el menu y una lista de ingredientes para cada comida, tambien debe permitir a los padres recibir actualizaciones y notificaciones del comedor escolar, como cambios en el menu, horarios de servicios y eventos especiales.


### Ing. Inversa ###

Se procedio a analizar un sistema existente en un comedor escolar para entender su funcionamiento interno.
El primer paso, visitamos el comedor escolar para observar su funcionamiento y determinar sus componentes claves, la elaboracion de los alimentos, la limpieza de las instalaciones, la interaccion del personal con los alumnos y la organizacion general del comedor escolar.
Se investigo a los proveedores para identificar las politicas de abastecimiento del comedor y los criterios para seleccionar los proveedores.
Se entrevisto al personal para saber como funciona el comedor, los que proporcionan valiosa informacion sobre el proceso de preparacion de alimentos.
Se evaluo el sistema de control para garantizar que se cumplan los requisitos de seguridad e higiene, las politicas de control de calidad y los procedimientos de limpieza.
Se hizo uso de la aplicacion existente, viendo que cumplia con casi todos los puntos tocados en las entrevistas, con exepccion que no hay forma de que los padres puedan mandar sus ideas y sugerencias al comedor.


### Tormenta de ideas ###

Se realizo una reunion en el patio de la escuela, donde se piensa poner en practica la aplicacion, con varios padres, abuelos, maestros y los desarrolladores.
En esta reunion se tiraron varias ideas de como podria llevarse a cabo la aplicacion, como las funcionalidades que deberia tener segun cada uno de los participantes.
Los padres estaban interesados en el tipo de comida que se vende en el comedor, y como controlar que sus hijos no coman muchas galletitas y dulces para lo que propusieron vender comidas saludables y saber de antemano cual va a ser el menu diario y que productos posee
Las maestras tenen variados menus con los ingredientes de cada uno de sus productos visibles, porque varios de ellos tienen alergias, son diabeticos o tienen intolerancias
Los padres de los niños en edad preescolar sugieren que los niños coman en un sector aparte o en otro horario ya que necesitan mas atencion

### Referencias a fuentes de informacion ###

- Las entrevistas se pueden ver en elicitacion/entrevistas
- La tormenta de ideas se pueden ven en elicitacion/tormentadeideas
- Los datos recopilados de Ing. Inversa se puede ver en elicitaciones/inginversa


### USERPERSONAS ###

- se hicieron user personas para 3 responsables de niños.
- Camila y Marcos abuelos de Juan que cursa  6do año en el colegio Ingles.
- Maria Isabel madre de Melisa que concurre al jardin 3 años  del colegio Ingles.
- Juan Pablo padre de Antonio que cursa 2do año en el colegio Ingles.

- Los user personas pueden verse en elicitacion/userpersonas


### Modelo conceptual del problema ###


# ESPECIFICACIONES #

## Requisitos funcionales ##

- Permitir ver los menus diarios y alternativos 
  Actor: Usuario. 
  Descripcion: El sistema debe permitir ver el menu diario y el alternativo (en caso de intoleracia, alergico, diabetico) y al final salir y volver a la pantalla de Inicio.
  No puede ser modificado por el usuario
  Prioridad: baja.

- Permitir hacer pedidos
  Actor: Usuario
  Descripcion: La aplicacion debe permitir a los padres hacer los pedidos para sus respectivos hijos para un dia o para toda la semana.
  Prioridad: Media.

- Permitir al comedor ingresar las compras 
  Actor: Personal del Comedor 
  Descripcion: El sistema proporcionara una lista de los productos a la venta y se deben marcar lo que corresponda (o con lector de barra), en la lista ya sale el precio unitario del producto. El sistema pedira la forma de pago de los mismos, que puede ser en efectivo en el momento de la compra o lo pone en la cuenta del alumno. 
  Prioridad: Alta.

- Permitir que los padres vean una lista de todos los productos y precios
  Actor: usuario
  Descripcion: El sistema debe permitir ver todos los productos que vende el comedor escolar con sus respectivos precios. 
  No puede ser modificado por los usuarios
  Prioridad: baja.

- Permitir ver las compras de los niños 
  Actor: Usuario. 
  Descripcion: El sistema debe permitir ver el historial de compras de cada alumno. El usuario debe ingresar la clave del alumno que se forma con el nombre y apellido del niño y el grado al que asiste. Ej. FM6A (Fernando Magliano 6A). Se debera listar todos los consumos con dia, producto y precio de cada uno de ellos, en la lista se van a mostrar los productos comprados en efectivos(ya pagados) y los que estan en la cuenta del alumno con el total a pagar. El usuario no puede modificar solo listar lo comprado por el niño. 
  Prioridad: baja.

- Permitir mandar mensajes o sugerencias 
  Actor: Usuario 
  Descripcion: El sistema permitira escribir mensajes o sugerencias al comedor, los mismos seran enviados al Comedor por email. 
  Prioridad: Baja.

- Permitir a los padres pagar en linea
  Actor: Usuario
  Descripcion: La aplicacion debe permitir pagar los gastos de su hijo en linea
  Prioridad: Alta.


## Requisitos no funcionales ##

- El sistema debe poder permitir ingresar 500 ocurrencias (cantidad de niños de la escuela)
- La interfaz de usuario será implementada para navegadores web únicamente con HTML5 y JavaScript.
- La aplicación debe ser compatible con todas las versiones de Windows, desde Windows 95.
- La aplicación debe ser compatible con todas las versiones de android, desde android 9.0
- El sistema debe ser responsive
- 

## User Stories / User casos detallados ##

### Casos de Uso ###

#### Caso 1 ... Menu
# ------------------
Actor: Usuario
Precondicion: Los menus ya fueron subidos por los responsables del comedor
Descripcion: Al ingresar al Menu, se solicita primero si quiere ver el menu diario o el menu semanal. Despues se solicita que tipo de menu quiere ver y se desplegan los diferentes menus existentes que pueden ser el menu diario comun, el menu para diabeticos, el menu para celiacos
##### Curso basico
###### Accion de los Usuarios                                         Respuesta del sistema
- se ingresa al Menu                                           - el sistema pregunta si quiere entrar a menu diario o menu semanal
- si ingresa a menu diario                                     - el sistema pregunta que tipo de menu quiere ver y proporciona una lista de menus
- dependienddo que menu elija                                  - el sistema desplega el menu elegido
- si ingresa a menu semanal                                    - el sistema proporciona el menu comun y los menus alternativos para toda la semana 

____________________________________________________________________________________________________________________________________________________________________________
#### Caso 2 ... Pedidos
# ---------------------
Actor: Usuario
Precondicion: Que los menus esten subidos a la aplicacion
Descripcion: Al ingresar los padres o responsables  ingresan el nombre del niño, y sistema le pregunta si quiere hacer un pedido para un dia o para toda la semana. Luego el sistema les proporciona la lista de los menus para que ellos elijan. Estos pedidos la aplicacion los sube automaticamente al historial del alumno

##### Curso basico
###### Accion de los Usuarios                                                   Respuesta del sistema
- se ingresa al icono de pedidos                                       - el sistema pregunta si va hacer un pedido para un dia o para mas dias
- si ingresa para un dia                                               - el sistema lista los menus del dia
- se ingresa el menu elegido                                           - el sistema suma ese menu al historial del alumno
- si ingresa a menu semanal                                            - despues de elegir el menu para cada dia, el sistema automaticamente lo sube al historial del alumno

____________________________________________________________________________________________________________________________________________________________________________
#### Caso 3 ... Compras
# ---------------------

Actor: Usuario
Descripcion: El personal del comedor debera ingresar al historial del alumno las compras que realize en el comedor y la forma en que las paga o pagara.

#### Curso basico
##### Accion de los usuarios                                                         Respuesta del sistema
- se ingresa el nombre del alumno                                      - el sistema entra al historial del alumno
- se ingresa de a uno los productos comprados                          - el sistema pregunta como lo va a pagar
- se ingresa la forma de pago                                          - el sistema entra al historial del alumno y lo ingresa, si es a cuenta lo suma a un subtotal a pagar

____________________________________________________________________________________________________________________________________________________________________________
#### Caso 4 ... Historial 
# -----------------------
Actor: Usuario
Precondicion: Haber comprado en el comedor escolar
Descripcion: el sistema le pide al usuario el nombre y le devuelve un listado de todos los productos comprados en el comedor, con sus precios y como lo pago.
             El historial se borra automaticamente a fin de año siempre y cuando no halla productos por pagar, en ese caso manda un aviso al comedor.
             

##### Curso basico
##### Accion de los usuarios                                                 Respuesta del sistema
- se ingresa el nombre del alumno                                          - el sistema devuelve una lista de los producto comprados en el comedor 

____________________________________________________________________________________________________________________________________________________________________________
#### Caso 5 ... Productos
# ----------------------

Actor: Usuario
Precondicion: Tener ingresado los productos 
Descripcion: el usuario ingresa a icono y se le desplegara un listado de todos los productos que vende el comedor aparte de los menus 

#### Curso basico
##### Accion de los usuarios                                                    Respuesta del sistema
- el usuario clickea sobre el icono de productos                         - el sistema devuelve una lists de todos los productos que vende el comedor, con su precio.

____________________________________________________________________________________________________________________________________________________________________________
#### Caso 6 ... Sugerencias y comentarios
# ---------------------------------------
Actor: Usuario
Descripcion: es un espacio donde los padres pueden enviar comentarios o sugerencias al comedor escolar

##### Curso basico
##### Accion de los usuarios                                                      Respuesta del sistema
- el usuario abre el link de comentarios                                - el sistema abre un formulario que luego de ser llenado por el usuario lo envia por email al comedor

____________________________________________________________________________________________________________________________________________________________________________
#### Caso 7 ... Pagos en linea
# -------------------

Actor: Usuario
Precondicion: tener pagos por hacer si el subtotal dentro del historias es distinto de 0.
Descripcion: el sistema abre el historial y si subtotal es distinto de 0 lo redicciona al banco correspondiente para realizar el pago

#### Curso basico
##### Accion de los usuarios                                                    Respuesta del sistema
- ingresamos el nombre del alumno                                        - el sistema va al historial y ve lo que se debe y le da una lista de las posibles formas de pago
- el usuario elige la forma de pago                                      - el sistema lo redirecciona al sitio correspondiente

____________________________________________________________________________________________________________________________________________________________________________

## bocetos de IU ##




# VALIDACION Y VERIFICACION


# REFLEXION

# REFLEXION INDIVIDUAL

-----------------
