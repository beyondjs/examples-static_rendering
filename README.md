# BeyondJS examples: Static Rendering (SR)

Repositorio con caso de uso para static rendering
------------------------
Beyond genera un archivo estático por cada módulo basado en el contenido que va a renderizar, dicho de otra forma si un
módulo tiene un atributo(widget) o una uri(página), beyond genera un archivo por cada posible renderizado que generen
los valores configurados para el módulo.
------------------------

## Configuración

Para configurar un módulo en beyond con SR, se debe agregar un objeto "render"
dentro de la entrada "widget" del módulo y en él, especificar el tipo de renderizado que se quiere. Para SR la
configuración varía según el tipo de widget.

- ### Layouts

Los layouts no reciben atributos, solo basta con definir en true la entrada "sr" dentro de la propiedad render.

```json
"render": {
  "sr": true,
  "csr": false
}
```

- ### Páginas

Las páginas reciben un array de strings que representan las uri, se configura cada entrada por cada valor esperado.

```json
"render": {
  "csr": false,  
  "sr": [
    "/{uri1}",
    ...
    "/{uriN}",
  ]
}
```

- ### Widgets

Los widgets soportan atributos, estos deben estar configurados dentro de la propiedad "element" del widget como una
propiedad "attrs" que es un array de string con los nombres de los atributos.

```json
"widget": {
  "element": {
    "name": "my-widget",
    "attrs": [
      "atribute1",
      ...
      "atributeN"
    ]
}
...
}
```

Para la configuración SR los widgets reciben un array de objetos que representan los atributos que puede recibir el
widget para cada renderizado.

```json
"render": {
  "csr": false,
  "sr": [
    {"entry1": "value"},
    ...
    {"entryN": "valueN"}
  ]
}
```

## Ejemplos

Un caso sencillo de configuración sería este:

```json
"widget": {
  "element": {
    "name": "my-widget",
    "attrs": [
      "name",
      "color"
    ]
  },
  "render": {
    "csr": false,
    "sr": [
      {"name": "Peter", "color": "blue"},
      {"name": "Bob", "color": "green"}
    ]
  }
}
```

Implementaciones soportadas para este widget con SR:

```js
<my-widget name:"Peter" color:"blue">
```
```js    
<my-widget name:"Bob" color:"green">
```

Implementaciones NO soportadas para este widget con SR:

```js
<my-widget name:"Peter" color:"green">
```
```js
<my-widget name:"Mike" color:"red">
```

Estos últimos dos ejemplos no están soportados, ya que las entradas no fueron definidas dentro del "sr"
en la configuración del render del módulo.

---------------------

## API

En entorno de desarrollo Beyond provee una API para visualizar los archivos generados por el SR de esta manera se tiene
información de las configuraciones realizadas y de las instancias generadas para el SR.

Para visualizar la api navegas a la url de tu proyecto con el enlace `__sr_widgets__/list`

http://localhost:{port}/__sr_widgets__/list