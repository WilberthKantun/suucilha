# Suucilha

## Colaboradores
- Wilberth Jesús Kantún Lizama
  - [GitHub](https://github.com/WilberthKantun) 
  - [LinkedIn](https://www.linkedin.com/in/wilberth-kant%C3%BAn-7a4470240/) 
- Wilder Manuel Turriza Poot 
  - [GitHub](https://github.com/WilderTurriza)
  - [LinkedIn](https://www.linkedin.com/in/wilder-turriza/)

## Objetivo del pryecto

El objetivo del proyecto es desarrollar un sistema de reservas en línea para el hotel Suucilha, que permita a los usuarios y al personal del hotel gestionar de manera eficiente y conveniente las reservas de habitaciones. Este sistema busca mejorar la experiencia de los clientes al ofrecer una plataforma intuitiva y segura para realizar reservas en el hotel. Además, proporciona herramientas para que el personal administrativo pueda manejar las reservaciones, gestionar las habitaciones y mantener actualizada la información visual del hotel, optimizando así la operación y administración del establecimiento.

## Descripción del proyecto

El proyecto en desarrollo es un sistema de reservas en línea para el hotel Suucilha. El sistema permitirá a los usuarios crear una cuenta, iniciar sesión, actualizar sus datos personales y recuperar su contraseña en caso de olvido. La página principal mostrará información general del hotel, como imágenes, servicios, contacto, redes sociales y ubicación mediante Google Maps.

Los usuarios podrán ver las habitaciones disponibles, aplicar filtros de búsqueda (cantidad de personas, costo y fecha disponible) y realizar reservaciones. Para completar una reservación, deberán pagar a través de la integración con PayPal. Además, podrán ver su historial de reservaciones y cancelar una reservación hasta 48 horas antes de la fecha de llegada.

Por otro lado, el sistema contará con una sección de administración donde el personal autorizado podrá iniciar sesión con una cuenta de administrador. Los administradores tendrán la capacidad de visualizar todas las reservaciones realizadas por fechas, gestionar las habitaciones (crear, modificar y eliminar), así como subir de 1 a 4 imágenes en formato .png para cada habitación.

## Requisitos funcionales
### Sistema
- RF-001. Permitir acceder como administrador
  - El sistema debe permitir el ingreso del administrador, ofreciendo funcionalidades para la gestión del establecimiento en general (Descritas con más detalles en las funcionalidades RF-013, RF-014 y RF-015), así como para la gestión y administración de reservaciones de habitaciones.
- RF-002. Crear cuenta
  - El sistema debe proporcionar a los usuarios la opción de crear una cuenta en el sitio web para poder acceder a las funcionalidades. Al crear una cuenta, los usuarios deberán proporcionar su nombre completo, fecha de nacimiento, correo electrónico y contraseña.
- RF-003. Cerrar sesión
   - El sistema debe permitir a los usuarios cerrar sesión en el sitio web para garantizar la privacidad y seguridad de su información personal.
- RF-004. Actualizar cuenta
   - El sistema debe permitir la actualización de los datos de la cuenta de usuario.
- RF-005. Recuperación de contraseña
   - El sistema debe facilitar a los usuarios un proceso sencillo para recuperar su contraseña en caso de olvido. Esta funcionalidad se realizará mediante el envío de la contraseña al correo electrónico registrado por el usuario.
- RF-006. Visualizar hotel
   - El sistema proporcionará una página de inicio que mostrará una presentación del hotel. Esta presentación incluirá imágenes del hotel, detalles sobre los servicios que ofrece, información de contacto, enlaces a las redes sociales del hotel y un mapa interactivo que muestra la ubicación del hotel utilizando Google Maps.
- RF-007. Visualizar habitaciones
   - El usuario podrá observar cada una de las habitaciones existentes, así como sus características, descripción y disponibilidad.
- RF-008. Filtrar habitaciones
  - El sistema debe permitir a los usuarios aplicar filtros de búsqueda para encontrar información sobre las habitaciones disponibles de acuerdo con sus intereses y necesidades. Los filtros deben incluir las siguientes opciones: cantidad de personas (1, 2, 4), costo (de $1000 a $2000 MXN), fecha disponible. Los resultados de la búsqueda deben ser precisos y relevantes para el usuario.
- RF-009. Reservar habitaciones
  - El usuario podrá realizar la reservación de alguna habitación, siempre y cuando esté disponible en la fecha que seleccione. Para esto, deberá indicar el número de días que reservarán la habitación.
- RF-010. Pagar reservación
  - Para poder realizar la reservación (funcionalidad RF-008), el sistema deberá validar el pago del usuario. Este proceso se llevará a cabo mediante la integración de PayPal como método de pago.
- RF-011. Visualizar historial de reservaciones
  - El usuario podrá visualizar todas las reservaciones que ha hecho anteriormente con su cuenta. 
- RF-012. Cancelar reservación
  - El usuario podrá cancelar la reservación 48 horas antes de su fecha de llegada prevista.
### Administrador
- RF-013. Visualizar reservaciones
  - El administrador podrá visualizar todas las reservaciones hechas por fechas. 
- RF-014. Gestionar habitaciones
  - El administrador podrá modificar y crear habitaciones. Para llevar a cabo esta tarea, el sistema solicitará los siguientes datos sobre la habitación: nombre, número máximo de personas permitidas, costo y descripción.
- RF-015. Subir imágenes
  - El administrador podrá subir de 1 a 4 imágenes en formato .png por habitación para una mejor descripción de su interior.

## Conclusiones
La realización de este proyecto nos ha permitido concluir que la utilización de la arquitectura REST es extremadamente útil para la transferencia de datos y la realización de operaciones. El uso de frameworks ha demostrado ser fundamental para mejorar la eficiencia en los procesos de desarrollo. Sin embargo, hemos encontrado dificultades al enfrentar fallos debido a nuestra falta de experiencia, lo que nos ha presentado desafíos significativos.
Spring Boot, en particular, ha sido una herramienta valiosa para el desarrollo del backend. Nos ha facilitado enormemente la comunicación con la base de datos y la creación de APIs, mejorando la eficiencia y la claridad en el manejo de las operaciones del servidor. Por otro lado, Vue.js nos ha permitido desarrollar interfaces de usuario más atractivas y funcionales, lo que ha contribuido a ofrecer una mejor experiencia a los usuarios.
Además de los aspectos técnicos, este proyecto nos ha dejado importantes lecciones sobre la gestión del tiempo. La aparición de problemas imprevistos y la falta de personal adecuado resaltaron la necesidad de planificar mejor y ser más realistas en la estimación de recursos y plazos. A pesar de tener un proyecto bien definido, la falta de experiencia en tecnologías y recursos humanos adecuados complicó su ejecución. En resumen, este proyecto ha sido una valiosa experiencia de aprendizaje tanto en el ámbito técnico como en la gestión de proyectos.

## Enlaces

- 📄[Diagrama de casos de uso](https://github.com/WilberthKantun/suucilha/assets/91703671/98d27afc-60ef-4d72-a179-c17287ad3d73)
- 📄[Diagrama de arquitectura del sistema](https://github.com/WilberthKantun/suucilha/assets/91703671/ccd5241b-74fb-4406-8454-2667ccf69c60)
- 👁️[Vistas del proyecto](https://www.figma.com/file/s0qiAiUykWXrqAIbV1AL9c/Untitled?type=design&node-id=0%3A1&mode=design&t=l4ZJP74EuBgggAQE-1)
- ⚙️[Funcionamiento](https://github.com/WilberthKantun/suucilha/tree/main/funcionamiento)
- 🗄️[Backend](https://github.com/WilderTurriza/Suucilha-backend)
- 🖥️[Frontend](https://github.com/WilberthKantun/suucilha)
