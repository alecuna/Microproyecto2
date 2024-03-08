# Microproyecto2

	En una situación hipotética, usted es amigo de Eustaquio; Eustaquio es el presidente del club de Videojuegos y le gustaría hacer una página web para atraer más personas a su club.
	Eustaquio tiene un conjunto de requerimientos:
- Cada club tiene un nombre, una descripción, y un listado de videojuegos.
- Cada videojuego tiene un título, un género, una descripción.
- Debe permitir a los usuarios tener acceso al listados de los juegos que ofrece dicho club.
- Debe permitir a los usuarios hacer una búsqueda de todos los juegos del sistema.
- Por temas de escalabilidad, un usuario puede ser creado sin un club inicialmente
- Para ingresar a un club, deberá registrar una membresía (una afiliación o suscripción) en la base de datos para dicho club.
- Dicho usuario debe tener, nombre y apellido, Username, email, contraseña y videojuego preferido
- Un usuario deberá poder acceder a vista de su perfil para modificar su información sea nombre, apellido, videojuego preferido o retirarse de un club
- El listado de la información de videojuegos y clubes será proporcionado desde el inicio y se deben precargar en la base de datos. Véase la última sección de este documento para los datos en formato JSON que se deben cargar.

REQUERIMIENTOS FUNCIONALES

- Vista de registro:
 
Esta vista es importante ya que le permite al usuario entrar a la plataforma. Si el usuario no está registrado y no inicia sesión no    puede acceder al listado de juegos disponibles, entonces esta página debe mostrar un formulario en donde el usuario ingrese sus datos   personales tales como nombre, correo electrónico y contraseña para poder registrarse en la plataforma. Además, deben agregarse otros    métodos de registro tales como Google, Twitter, etc.  (al menos uno). 
 
- Vista de inicio de sesión:
  
En esta vista se debe mostrar un formulario para que el usuario pueda entrar a la plataforma haciendo uso de correo electrónico y       contraseña. Además deben agregarse otros métodos de autenticación tales como Google, Twitter, etc.

- Vista de inicio (página principal):
  
Esta página únicamente puede ser visitada cuando un usuario ha iniciado sesión correctamente, en caso de que alguien intente entrar a esta sección sin estar autenticado, se debe redirigir inmediatamente a la vista de inicio de sesión. 
Aquí el usuario debe encontrar el listado de los clubes.  Se debe mostrar al usuario los clubes de una forma agradable donde se pueda ver toda la información referente al mismo, incluyendo si el usuario ya está suscrito al club o no. Además, al dar click sobre un club, se debe redirigir al usuario hacia la página de detalles del mismo.

- Vista detalles de un club:
  
Esta página, al igual que la anterior, es privada. Únicamente puede mostrar el detalle de un club si hay un usuario autenticado.
Aquí se debe mostrar toda la información del club y se debe permitir, a través de un botón, que el usuario se suscriba (solicite una membresía) a dicho club. En caso de que el usuario ya esté registrado en el club, el botón pasa a ser un botón para retirarse del club.
Se deben mostrar los detalles de todos los juegos que incluye el club.

- Vista de buscador:
  
En esta sección el usuario debe encontrar una barra de búsqueda que le permita ingresar el nombre del juego que quiere buscar y al ejecutar la búsqueda, deben aparecer los juegos que coincidan con dicho criterio.

- Registro de usuarios:
  
Los usuarios deben poder registrarse en la página web proporcionando su nombre, apellido, nombre de usuario, email, contraseña y videojuego preferido. El videojuego preferido debe ser uno de los registrados en base de datos.
La información del usuario debe almacenarse en la base de datos de Firebase Firestore.

- Acceso a los juegos del club:

Los usuarios registrados deben poder acceder a los juegos que ofrece el club de videojuegos.
Se deben mostrar los juegos disponibles junto con su información, como nombre, género y descripción.

- Gestión de clubes:

Los usuarios deben poder unirse a un club existente.
Para unirse a un club, un usuario debe solicitar una afiliación (membresía) entrando a la página del club y presionando el botón de suscripción.
La información de la membresía, relacionando el ID del club con el usuario, debe almacenarse en la base de datos.

- Perfil de usuario:
  
Los usuarios deben poder acceder a su perfil para ver y modificar su información personal.
Deben poder editar su nombre, apellido y videojuego preferido.
Los usuarios deben poder retirarse de un club al que están afiliados.

- Interfaz de usuario:
  
La aplicación debe tener una interfaz de usuario clara y fácil de usar.
La interfaz debe ser responsive, adaptándose a diferentes dispositivos como teléfonos móviles, tabletas y computadoras de escritorio.
Se debe utilizar React para estructurar el contenido de la aplicación, incluyendo formularios, tablas y elementos visuales.
Se deben aplicar estilos con CSS para hacer que la aplicación sea visualmente atractiva y coherente.
Se debe utilizar Firebase como plataforma de desarrollo y Firestore como base de datos para almacenar la información de los usuarios, clubes y membresías.
La aplicación debe ser capaz de leer y escribir datos en la base de datos de Firestore.




