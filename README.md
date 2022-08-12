# examples-static_rendering

Repository with use case for static rendering, includes layout, page and widget

------------------------
Beyond genera un archivo estatico por cada modulo en base al contenido que va a renderizar, dicho de otra forma si un
modulo tiene un atributo(widget) o una uri(pagina), beyond genera un archivo por cada posible renderizado que generen
los valores configurados para el modulo
------------------------

## Configuracion

Para configurar un modulo en beyond con SR, se debe agregar un objeto "render"
dentro de la entrada "widget" del modulo y en él, especificar el tipo de renderizado que se quiere. Para SR la
configuracion varia segun el tipo de widget

- ### Layouts

Los layouts no reciben atributos, solo basta con definir en true la entrada "sr" dentro de la propiedad render

```json
    "render": {
"sr": true,
"csr": false
}
```

- ### Paginas

Las paginas reciben un array de strings que representan las uri, se configura cada entrada por cada valor esperado

```json
    "render": {
"sr": [
"/{uri1}",
...
"/{uriN}",
],
"csr": false
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

Para la configuracion SR los widgets reciben un array de objetos que representan los atributos que puede recibir el
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

Un caso sencillo de configuracion seria este

```json
  "widget": {
"element": {
"name": "my-widget",
"attrs": [
"name",
"color"
]
}
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

    <my-widget name:"Bob" color:"green">
```

Implementaciones NO soportadas para este widget con SR:

```js
<my-widget name:"Peter" color:"green">

    <my-widget name:"Mike" color:"red">
```

Estos ultimos dos ejemplos no estan soportados, ya que las entradas no fueron definidas dentro del "sr"
en la configuracion del render del modulo

---------------------

## API

En entorno de desarrollo Beyond provee una API para visualizar los archivos generados por el SR de esta manera se tiene
informacion de todas la configuraciones realizadas y de las intancias generadas para el SR

Para visualizar la api navegas a la url de tu proyecto con el enlace `__sr_widgets__/list`

http://localhost:{port}/__sr_widgets__/list