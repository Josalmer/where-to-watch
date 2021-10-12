# Planificación

Se realiza la planificación de los 3 primeros milestones del proyecto.

En cada uno de ellos se añaden tareas extraídas de las [Historias de Usuario](./hu.md) previamente especificadas.

## Milestone 1

El [primer Milestone](https://github.com/Josalmer/where-to-watch/milestone/1) del proyecto tiene como objetivo diseñar el sistema e implementar las clases esenciales del mismo.

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

* [T-02](https://github.com/Josalmer/where-to-watch/issues/10): Crear modelo Category
>Representa a las categorías del contenido del sistema, el contenido podrá pertenecer a una o más categorías.
>
>Related to: [HU-1](https://github.com/Josalmer/where-to-watch/issues/5), [HU-2](https://github.com/Josalmer/where-to-watch/issues/6), [HU-3](https://github.com/Josalmer/where-to-watch/issues/7)

* [T-03](https://github.com/Josalmer/where-to-watch/issues/11): Crear modelo Content
>Representa el contenido digital del sistema, podrá pertenecer a una o más categorías, y podrá ser ofrecido por una o más plataformas de streaming.
>
>Related to: [HU-1](https://github.com/Josalmer/where-to-watch/issues/5), [HU-2](https://github.com/Josalmer/where-to-watch/issues/6), [HU-3](https://github.com/Josalmer/where-to-watch/issues/7)

* [T-04](https://github.com/Josalmer/where-to-watch/issues/12): Crear modelo StreamingPlatform
>Representa en el sistema a las distintas plataformas de Streaming
>
>Related to: [HU-1](https://github.com/Josalmer/where-to-watch/issues/5), [HU-2](https://github.com/Josalmer/where-to-watch/issues/6), [HU-3](https://github.com/Josalmer/where-to-watch/issues/7)

* [T-05](https://github.com/Josalmer/where-to-watch/issues/13): Crear relación Content-StreamingPlatform
>Crear relación Content <--> StreamingPlatform
>
>Related to: [HU-1](https://github.com/Josalmer/where-to-watch/issues/5), [HU-2](https://github.com/Josalmer/where-to-watch/issues/6), [HU-3](https://github.com/Josalmer/where-to-watch/issues/7)

* [T-06](https://github.com/Josalmer/where-to-watch/issues/14): Crear modelo Search
>Representa las búsquedas realizadas por los usuarios en el sistema
>
>Related to: [HU-2](https://github.com/Josalmer/where-to-watch/issues/6), [HU-4](https://github.com/Josalmer/where-to-watch/issues/8)

* [T-07](https://github.com/Josalmer/where-to-watch/issues/15): Crear relación Seach - StreamingPlatformContent
>Crear relación Search <--> StreamingPlatformContent
>
>Related to: [HU-2](https://github.com/Josalmer/where-to-watch/issues/6), [HU-4](https://github.com/Josalmer/where-to-watch/issues/8)

## Milestone 2

El [segundo Milestone](https://github.com/Josalmer/where-to-watch/milestone/2) del proyecto tiene como objetivo diseñar e implementar el sistema de scrapeo para obtener los datos necesarios para el sistema. Funcionamiento con **Netflix**.

* [T-08](https://github.com/Josalmer/where-to-watch/issues/16): Crear interfaz del servicio de Scraping
>Representa la interfaz que implementarán cada uno de los servicios de scraping que se implementaran para cada plataforma de streaming.
>
>Related to: [HU-1](https://github.com/Josalmer/where-to-watch/issues/5), [HU-3](https://github.com/Josalmer/where-to-watch/issues/7)
