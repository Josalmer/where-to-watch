# Where To Watch

Sistema de ayuda para encontrar contenido en las distintas plataformas de streaming.

## Descripción

Se realiza este proyecto como práctica de la asignatura CC (Cloud Computing) del Máster en Ingeniería Informática de la UGR.

Por ello tendremos dos tipos de documentos:

* Los relativos al desarrollo y documentación de **Where To Watch**
* Los relativos a la consecución de los objetivos de la asignatura **Cloud Computing**, todos ellos estarán bajo el directorio [cc](./cc).

## Entrega del 02/11/2021

El principal objetivo de esta entrega es añadir tests y una descripción inicial de la infraestructura virtual a la aplicación a los gestores de dependencias y/o tareas, la necesaria para que se ejecuten los tests.

### Gestor de paquetes

>* Issue: [Se necesita un gestor de paquetes](https://github.com/Josalmer/where-to-watch/issues/30)

Se realiza una pequeña investigación para buscar una alternativa seria a npm, la única que compite en cuanto a utilización es **Yarn**. En el artículo [Yarn vs npm: Everything You Need to Know](https://www.sitepoint.com/yarn-vs-npm/) hacen una comparativa entre ambos gestores de paquetes, destaca que Yarn tiene algunas funciones adicionales, aunque tiene la desventaja que necesitas instalar en el sistema npm para instalar yarn, por ello utilizaré **npm** y así instalo un gestor menos.

Se utiliza el gestor de paquetes **npm (node package manager)**, ya que es el más utilizado en proyectos que utilizan NodeJS, así mismo prácticamente todos los paquetes para NodeJS que estan públicados publicamente estan disponibles en www.npmjs.com (más de un millón de paquetes).

### Gestor de tareas

>* Issue: [Se necesita un gestor de tareas](https://github.com/Josalmer/where-to-watch/issues/31)

Se realiza una pequeña investigación y se analizan [**gulp**](https://www.npmjs.com/package/gulp), [**grunt**](https://www.npmjs.com/package/grunt) y [**Mask**](https://github.com/jakedeichert/mask).

Gulp y Grunt son especificos de javascript y se deben instalar como dependencias del proyecto, **Gulp** tiene el doble de descargas semanales (1.433.568, frente a 725.969 que tiene Grunt).

Mientras que **Mask** ejecuta ordenes en cualquier lenguaje instalado en el sistema. Por esta razón nos quedamos con Mask.

Creamos el [**maskfile.md**](maskfile.md) y añadimos las primeras tareas: **build** y **clean**.
