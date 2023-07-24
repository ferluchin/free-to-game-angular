# Video Game Database - FreeToGame API

Esta es una aplicación en Angular que consume la API de [FreeToGame](https://www.freetogame.com/api-doc) para mostrar información de videojuegos. Esta aplicación permite listar juegos, filtrarlos por nombre, género y plataforma, y muestra información detallada de cada juego.

## Características principales

- **Listar los juegos:** La aplicación muestra una lista de juegos en forma de cuadrícula. Cada juego se muestra en una tarjeta con la imagen, el título y una descripción corta.

- **Filtrar juegos:** Se puede filtrar la lista de juegos por nombre, género y plataforma utilizando un formulario de filtrado.

- **Mostrar información completa de juego:** Al seleccionar un juego, se muestra en una nueva página la información completa del juego.

## Estructura del código

El código de la aplicación sigue las siguientes prácticas:

- **Servicios:** Las llamadas a la API están contenidas en servicios para poder ser llamadas desde cualquier parte del código.

- **Interfaces:** Se crearon interfaces para tipificar los objetos, como por ejemplo los objetos respuesta de los llamados a la API.

- **Bootstrap:** Se instaló la dependencia de Bootstrap para Angular, lo que permite el uso de grids, cards, inputs, etc.

- **Responsive:** La aplicación es responsiva y se puede visualizar en cualquier tipo de dispositivo.

- **Componentes:** La aplicación está modularizada en componentes que pueden ser reutilizados.

- **Environment:** Se crearon archivos de environment para poder usar variables de entorno desde cualquier parte del código, como por ejemplo la URL base de la API.

- **Operadores RxJs:** Se utilizan operadores RxJs para filtrar los resultados y obtener el listado de opciones de los inputs.

- **Testing:** Se realizó Unit testing a los componentes.

## Ejecución del proyecto

1. Clona el repositorio en tu equipo local.
2. Navega hasta el directorio del proyecto e instala las dependencias con `npm install`.
3. Ejecuta el servidor de desarrollo con `ng serve`. Navega a `http://localhost:4200/`. La aplicación se recargará automáticamente si cambias alguno de los archivos fuente.
4. Para construir el proyecto para producción, utiliza `ng build`.

## Demostración

Para ver la aplicación en acción, visita el siguiente enlace: [Enlace a Netlify (pendiente de actualizar)](https://tusitio.netlify.app)

## Contribuciones

Las contribuciones a este proyecto son bienvenidas. Por favor, abre un Issue o una Pull Request para sugerir cambios o mejoras.

## Licencia

Este proyecto se distribuye bajo la licencia MIT. Consulta el archivo `LICENSE` para más detalles.
