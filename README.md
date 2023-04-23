
Repositorio para Fundamentos de Ingenieria de Software


TURNO NOCTURNO   N4A  - GRUPO 1 - 2023

Felipe Ghione
Ignacio Santalla
Fernando Magliano

# OBLIGATORIO 1 #

# REPOSITORIO #

## Creacion de repositorio Git y Github ##

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
- Los commits usarán un formato estándar definido como "conventional commits" donde los commits serán con el formato : tipo(scope opcional): descripción del commit. También se tienen los llamados "Scopes" en este estandar, estos "Scopes" son opcionales y sirven para especificar el alcance del commit, en nuestro caso decidimos utilizarlos ya que consideramos que mejoran la calidad del commit al proveer más información sobre el mismo. Eventualmente se pueden añadir "footers" y un "cuerpo de mensaje" para cada commit con fin de darle un formato más formal al mismo, en nuestro caso decidimos no usar ni "footers" ni "cuerpo de mensaje" ya que consideramos que no nos aporta nada productivo.

Los tipos de commit definidos a utilizar son:
    
    - feat: Una nueva característica o funcionalidad.
    - fix: Un error corregido.
    - BREAKING CHANGE: Un cambio que contenga un signo ! despues del tipo, rompe la compatibilidad con versiones anteriores.
    - build: Cambios que afectan el sistema de compilación o dependencias externas (ej. cambios en el package.json).
    - ci: Cambios en nuestros archivos y scripts de configuración de integración continua.
    - docs: Cambios en la documentación.
    - chore: Otros cambios que no afectan el código fuente.
    - perf: Un cambio de código que mejora el rendimiento.
    - refactor: Un cambio de código que no corrige un error ni agrega una característica.
    - style: Cambios que no afectan el significado del código (espacios en blanco, formato, puntos y comas faltantes, etc).
    - test: Agregar pruebas faltantes o corregir pruebas existentes.

    La razón de la utilización de este tipo de commits es que mejoran enormemente la expresividad de cada commit, enriqueciendo el historial de commits.


# ELICITACION #

## Actividades de investigacion ##

### Entrevistas ###
Se realizaron entrevistas a padres y abuelos de niños que concurren a varios colegios de  Montevideo (vecinos) sobre la construccion de una app para el comedor escolar.
Se hicieron preguntas sobre la alimentacion que desearian para sus hijos, nietos etc. y sobre las funcionalidades que deberia tener dicha aplicacion
De dichas entrevistas se vio el interes de que las comidas servidas sean balanceadas, con una funcion nutricional, la cual permita satisfacer las necesidades de los niños.
Saber que  comen los niños en el comedor y que el comedor tenga una funcion educadora para establecer habitos alimenticios saludables que ayuden en el desarrollo y promocion de la salud.
Tambien los comedores tienen influencia en otros aspectos como en el comportamiento social, la socializacion e interaccion.
Por todo esto sugieren los entrevistados que los comedores sean evaludados periodicamente.
Se vio la necesidad de contar con un menu alternativo para ninos con alergias, intolerancia u otras patologias.

En lo que respecta a la aplicacion deberia permitir a los padres ver el menu y una lista de ingredientes para cada comida, tambien debe permitir a los padres recibir actualizaciones y notificaciones del comedor escolar, como cambios en el menu, horarios de servicios y eventos especiales.


### Ing. Inversa ###

Se procedio a analizar una app existente llamada ColeChef.
Al analizar la aplicacion se encontraron las siguientes funcionalidades:
* Se ve la claridad y sencillez de uso. 
* Permite ingresar a mas de un niño por padre para poder ver por separado sus necesidades.
* Se proporciona los menus, la informacion nutricional, los alergenos y todos los ingredientes de cada menu.
* Se proporciona las diferentes actividades del centro.
* Se puede encargar el menu para dias puntuales, por semana o mes.
* Permite recibir informacion sobre el comedor escolar en el telefono de forma directa y sencilla.
* Tiene incorporado un espacio en donde los padres pueden mandar mensajes o sugerencias al comedor.
* Se puede configurar el idioma de la aplicacion ya que esta en varios idiomas.
* En la parte de notificaciones se puede encontrar toda la informacion, los mensajes y la actividad de cada uno de los hijos en el comedor.
* Proporciona recomendaciones de re cenas en funcion de lo que el alumno comio al mediodia y tambien propuestas de desayunos y meriendas saludables.
* Tiene lo que se llama libreta viajera donde esta un informe diario completo de los mas pequeños.

En definitiva la aplicacion es muy buena, clara, comoda agil y segura.



### Tormenta de ideas ###

De las entrevistas realizadas, y de los datos de la ingenieria inversa se tiraron las siguientes ideas para la aplicacion:


- que se pueda pagar en linea y hacer los pedidos por la aplicacion 
- mandar sugerencias y recomendaciones al comedor
- que el comedor pueda mandar mensaje a los padres
- poder ver las compras de los niños
- poder ver el listado de todos los productos que vende el comedor aparte de los almuerzos
- que se pueda pedir para un dia en particular o para toda la semana
- saber de antemano cual va a ser el menu diario y que productos posee.
- tener variados menus con los ingredientes de cada uno de sus productos visibles, porque varios de ellos tienen alergias, son diabeticos o tienen intolerancias
- que los niños en edad preescolar  coman en un sector aparte o en otro horario ya que necesitan mas atencion.
- asegurar la higiene del comedor

### Referencias a fuentes de informacion ###

- Las entrevistas se pueden ver en fis2023/elicitacion/entrevistas
- Los datos recopilados de Ing. Inversa se puede ver en fis2023/elicitacion/inginversa


### USERPERSONAS ###

- se hicieron user personas para 3 responsables de niños.
- Camila y Marcos abuelos de Juan que cursa  6do año en el colegio San Pablo.
- Maria Isabel madre de Melisa que concurre al jardin 3 años  del colegio Clara Jackson.
- Juan Pablo padre de Antonio que cursa 2do año en el colegio Ingles.

- Los user personas pueden verse en elicitacion/userpersonas


### Modelo conceptual del problema ###

ver en fis2023/modeloconceptual


# ESPECIFICACIONES #

## Requerimientos funcionales ##

- Permitir ver los menus diarios y alternativos 
  Actor: Usuario. 
  Descripcion: El sistema debe permitir ver el menu diario y el alternativo (en caso de intoleracia, alergico, diabetico) y al final salir y volver a la pantalla de Inicio.
  No puede ser modificado por el usuario
  Prioridad: media.

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

- Notificar al usuario de su próximo pago
  Actor: Usuario.
  Descripcion: El sistema debe ser capaz de notificar al usuario una vez al mes cuanto deberá abonar, la cantidad a ser pagada es lo gastado por la cuenta.
  Prioridad: Alta.

- Permitir agregar nuevas funcionalidades al sistema
  Actor: Administrador.
  Descripcion: El sistema debe ser capaz de permitir al usuario administrador agregar nuevas funcionalidades a la aplicación.
  Prioridad: Alta.

- Permitir modificar el menú, sea agregar o quitar elementos del menú.
  Actor: Funcionario del comedor.
  Descripcion: El sistema debe permitir al Funcionario del comedor agregar o quitar un alimento o bebida.
  Prioridad: Alta.

- Permitir que el Funcionario del comedor pueda modificar una comida del menú.
  Actor: Funcionario del comedor.
  Descripcion: El sistema debe permitir que el Funcionario del comedor pueda modificar la  descripcion de un plato determinado, como por ejemplo los ingredientes utilizados en su preparación.
  Prioridad: Alta.

- Permitir al usuario agregar un niño
  Actor: Usuario.
  Descripcion: El sistema debe permitir al usuario agragar a un niño, para asi poder diferenciar entre niños a cargo y poder administrar comidas por separado.
  Prioridad: Alta.


## Requerimientos no funcionales ##

- El sistema debe poder permitir ingresar 500 ocurrencias (cantidad de niños de la escuela).
- La interfaz de usuario será implementada para navegadores web únicamente con HTML5 y JavaScript.
- La aplicación debe ser compatible con todas las versiones de Windows a partir de Windows 7 version 6.1.
- La aplicación debe ser compatible con todas las versiones de android, desde android 9.0.
- El sistema debe ser responsive.
- El sistema debe ser compatible con todas las versiones de IOS 14.0 en adelante.
- La Aplicación debe ser bilingue, o sea que tenga la opción de elegir entre español o inglés.
- La Aplicación debe tener disponible para su uso un modo oscuro y un modo claro.
- El sistema debe proporcionar mensajes de error que sean informativos y orientados al usuario.


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

Actor: Personal del comedor
Descripcion: El personal del comedor debera ingresar al historial del alumno las compras que realize en el comedor y la forma en que las paga o pagara.

#### Curso basico
##### Accion de los usuarios                                                         Respuesta del sistema
- se ingresa al sector comedor                                         - se abre el menu de posibilidades (compras, subir menu, cambiar menu)
- se ingresa al compras                                                - el sistema pide el nombre del alumno
- se ingresa el nombre del alumno                                      - el sistema entra al historial del alumno
- se ingresa de a uno los productos comprados                          - el sistema pregunta como lo va a pagar
- se ingresa la forma de pago                                          - el sistema entra al historial del alumno e  ingresa las compras, 
                                                                        si es a cuenta lo suma a un subtotal a pagar y si es en efectivo los sube al historial
                                                                        pero sin valor

                                                                        
____________________________________________________________________________________________________________________________________________________________________________
#### Caso 4 ... Historial 
# -----------------------
Actor: Usuario
Precondicion: Haber comprado en el comedor escolar
Descripcion: el sistema le pide al usuario el nombre y le devuelve un listado de todos los productos comprados en el comedor, ya sea los menus o los productos adicionales, con sus precios y un total a pagar.
             El historial se borra automaticamente a fin de año siempre y cuando no halla productos por pagar.
             

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
- el usuario clickea sobre el icono de productos                         - el sistema devuelve una lista de todos los productos que vende el comedor, con su precio.

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
#### Caso 8 ... Modificar Menu
# ----------------------------

Actor: Personal del Comedor
Descripcion: el sistema abre el area de los menus y permite cambiar el menu o eliminar productos de los mismos

#### Curso basico
##### Accion de los usuarios                                                   Respuesta del sistema
- se ingresa al sector comedor                                            - el sistema abre el menu de posibilidades (compras, menus, modificar menu)
- se ingresa a modificar menu                                             - el sistema proporciona los menus a modificar
- se hacen las modificiaciones                                            - el sistema cierra la aplicacion

____________________________________________________________________________________________________________________________________________________________________________
#### Caso 9 ... Ingresar Menus
# ----------------------------

Actor: Personal del comedor
Descripcion: el sistema permite ingresar los menus diarios y semanales

#### Curso basico                                                              
##### Accion de los usuarios                                                  Respuesta del sistema
 - se ingresa al sector comedor                                              - el sistema abre el menu de posibilidades (compras, menus, modificar menu)
 - se ingresa a menus                                                        - el sistema pide que menu quiere ingresar  ( diario o semanal)
 - se ingresa al deseado                                                     - si ingreso a diario se ingresa el menu diario y si ingreso a semanal le va indicando los dias
                                                                               para que los ingrese. Al terminar el sistema cierra la seccion

________________________________________________________________________________________________________________________________________________________________________



## bocetos de IU ##

Los bocetos de la interfaz se pueden ver en fis2023/bocetosIU.


# VALIDACION Y VERIFICACION


# REFLEXION

# REFLEXION INDIVIDUAL

-----------------

