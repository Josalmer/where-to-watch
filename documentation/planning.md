# Planificación

Se realiza la planificación de los primeros milestones del proyecto.

En cada uno de ellos se añaden tareas extraídas de las [Historias de Usuario](./hu.md) previamente especificadas.

## 0 - (INTERNO) Diseño e implementación de las clases esenciales del sistema

El Milestone [0 - (INTERNO) Diseño e implementación de las clases esenciales del sistema](https://github.com/Josalmer/where-to-watch/milestone/1) tiene como objetivo diseñar el sistema e implementar las clases esenciales del mismo.

* [T-01](https://github.com/Josalmer/where-to-watch/issues/9): Diseñar modelo de datos para el sistema
>Diseñar modelo de datos para el sistema, definiendo las principales clases del mismo:
>- Content
>- Category
>- StreamingPlatform
>- Search
>- ScrapingService
>- SearchHelpService
>Así como sus principales atributos y las relaciones entre los mismos.
>
>Related to: [HU-1](https://github.com/Josalmer/where-to-watch/issues/5), [HU-2](https://github.com/Josalmer/where-to-watch/issues/6), [HU-3](https://github.com/Josalmer/where-to-watch/issues/7), [HU-4](https://github.com/Josalmer/where-to-watch/issues/8)

* [T-02](https://github.com/Josalmer/where-to-watch/issues/10): Preparar lógica necesaria para almacenar las distintas categorías a las que podrá pertenecer el contenido digital
>Preparar lógica necesaria para almacenar las distintas categorías a las que podrá pertenecer el contenido digital referenciado en el sistema, será identificada por un identificador único y tendrá un nombre.
>
>Related to: [HU-1](https://github.com/Josalmer/where-to-watch/issues/5), [HU-2](https://github.com/Josalmer/where-to-watch/issues/6), [HU-3](https://github.com/Josalmer/where-to-watch/issues/7)

* [T-03](https://github.com/Josalmer/where-to-watch/issues/11): Preparar lógica necesaria para almacenar información del contenido digital
>Preparar lógica necesaria para almacenar información del contenido digital que se podrá buscar en el sistema, debe tener un identificador único (string), el titulo (string), una descripción (string), la fecha de lanzamiento (de tipo Date) y estará asociado a una categoría.
>
>Related to: [HU-1](https://github.com/Josalmer/where-to-watch/issues/5), [HU-2](https://github.com/Josalmer/where-to-watch/issues/6), [HU-3](https://github.com/Josalmer/where-to-watch/issues/7)

* [T-04](https://github.com/Josalmer/where-to-watch/issues/12): Preparar lógica necesaria para almacenar información de las plataformas de streaming
>Preparar lógica necesaria para almacenar información de las plataformas de streaming que ofrecen el contenido digital, debe tener un identificador único y un nombre, ambos de tipo string.
>
>Related to: [HU-1](https://github.com/Josalmer/where-to-watch/issues/5), [HU-2](https://github.com/Josalmer/where-to-watch/issues/6), [HU-3](https://github.com/Josalmer/where-to-watch/issues/7)

* [T-05](https://github.com/Josalmer/where-to-watch/issues/13): Preparar lógica necesaria para relacionar el contenido digital con cada plataforma de streaming
>Preparar lógica necesaria para relacionar el contenido digital con cada plataforma de streaming para un período de terminado.
>
>Related to: [HU-1](https://github.com/Josalmer/where-to-watch/issues/5), [HU-2](https://github.com/Josalmer/where-to-watch/issues/6), [HU-3](https://github.com/Josalmer/where-to-watch/issues/7)

## 0.1 - (INTERNO) Web Scraping

El Milestone [0.1 - (INTERNO) Web Scraping](https://github.com/Josalmer/where-to-watch/milestone/7) tiene como objetivo diseñar e implementar el sistema de scrapeo para obtener los datos necesarios para el sistema.

* [T-08](https://github.com/Josalmer/where-to-watch/issues/16): Preparar lógica necesaria para acceder, descargar e identificar contenido desde las webs de las plataformas de streaming
>Preparar lógica necesaria para acceder, descargar e identificar contenido desde las webs de las plataformas de streaming.
>
>Related to: [HU-1](https://github.com/Josalmer/where-to-watch/issues/5), [HU-3](https://github.com/Josalmer/where-to-watch/issues/7)

## 0.2 - (INTERNO) Web Server

El Milestone [0.2 - (INTERNO) Web Server](https://github.com/Josalmer/where-to-watch/milestone/8) tiene como objetivo el despliegue del servicio en una servidor en la nube con todos los recursos que necesite.

## 1 - (MVP) El sistema es capaz de almacenar y mantener actualizado automáticamente el contenido digital

El Milestone [1 - (MVP) El sistema es capaz de almacenar y mantener actualizado automáticamente el contenido digital](https://github.com/Josalmer/where-to-watch/milestone/2) es el primero que ofrece un MVP, y permite gestionar y mantener actualizado automáticamente la información sobre el contenido digital que ofrecen las plataformas de streaming.

## 2 - (MVP) El sistema permite realizar búsquedas por nombre

El Milestone [2 - (MVP) El sistema permite realizar búsquedas por nombre](https://github.com/Josalmer/where-to-watch/milestone/3) extiende el MVP 1 y permite buscar contenido.

* [HU-01](https://github.com/Josalmer/where-to-watch/issues/5): Como usuario, necesito poder encontrar en que plataformas se esta emitiendo una determinada serie.

* [T-06](https://github.com/Josalmer/where-to-watch/issues/14): Preparar lógica necesaria para almacenar información de las búsquedas que realicen los usuarios
>Preparar lógica necesaria para almacenar información de las búsquedas que realicen los usuarios, tendrá un identificador único (string), la búsqueda que realizo el usuario (string), la dirección ip desde donde se conecto el usuario (string), la información del agente del usuario (string), el país desde donde se realizo la búsqueda (string) y la fecha de la búsqueda (Date).
>
>Related to: [HU-2](https://github.com/Josalmer/where-to-watch/issues/6), [HU-4](https://github.com/Josalmer/where-to-watch/issues/8)

* [T-07](https://github.com/Josalmer/where-to-watch/issues/15): Preparar lógica necesaria para relacionar las búsquedas realizadas por los usuarios con el contenido
>Preparar lógica necesaria para relacionar las búsquedas realizadas por los usuarios con el contenido que en ese momento ofrecía cada plataforma de streaming.
>
>Related to: [HU-2](https://github.com/Josalmer/where-to-watch/issues/6), [HU-4](https://github.com/Josalmer/where-to-watch/issues/8)

## 3 - (MVP) El sistema permite obtener informes de las búsquedas realizadas por los usuarios

El Milestone [3 - (MVP) El sistema permite obtener informes de las búsquedas realizadas por los usuarios](https://github.com/Josalmer/where-to-watch/milestone/4) extiende el MVP 2 y permite obtener informes de las búsquedas realizadas por los usuarios.

* [HU-04](https://github.com/Josalmer/where-to-watch/issues/8): Como plataforma de streaming, necesito poder conocer las búsquedas de contenido realizadas por los usuarios.

## 4 - (MVP) El sistema permite realizar búsquedas por fecha de lanzamiento o autor

El Milestone [4 - (MVP) El sistema permite realizar búsquedas por fecha de lanzamiento o autor](https://github.com/Josalmer/where-to-watch/milestone/5) extiende el MVP 3 y permite realizar las búsquedas por fecha de lanzamiento o autor.

## 5 - (MVP) El sistema permite consultar la evolución del contenido en cada plataforma de streaming

El Milestone [5 - (MVP) El sistema permite consultar la evolución del contenido en cada plataforma de streaming](https://github.com/Josalmer/where-to-watch/milestone/6) extiende el MVP 4 y permite consultar la evolución historica del contenido digital en cada plataforma de streaming.

* [HU-03](https://github.com/Josalmer/where-to-watch/issues/7): Como usuario, necesito poder analizar la evolución del contenido ofrecido por una plataforma de streaming sobre una línea temporal.

## 6 - (MVP) El sistema permite consultar el ranking de las plataformas de streaming

El Milestone [6 - (MVP) El sistema permite consultar el ranking de las plataformas de streaming](https://github.com/Josalmer/where-to-watch/milestone/9) extiende el MVP 5 y permite consultar el ranking de las plataformas de streaming, en función del porcentaje de matchs con las búsquedas de los usuarios.

* [HU-02](https://github.com/Josalmer/where-to-watch/issues/6): Como usuario, necesito poder conocer que plataformas de streaming ofrecen la mayor parte del contenido buscado por los usuarios.
