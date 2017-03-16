# 02 Arreglos en Javascript

Un arreglo es una lista ordenada de diferentes tipos.

```
  var miArreglo = ["Hola", 45, true];
```

Los arreglos también se pueden definir usando el constructor Array o el operador []

```
  var miArreglo1 = new Array();
  var miArreglo2 = [];
```

Para acceder a un elemento dentro del arreglo utilizamos el operador []

```
  miArreglo[0];
```

Los arreglos son estructuras de datos que comienzan en 0, por tanto el primer elemento será el 0 y no el 1

Los arreglos tienen un atributo especial llamado length, que nos permite saber cual es el tamaño del arreglo

```
  miArreglo.length
```

Gracias a este atributo, podemos recorrer todos los elementos del arreglo con una estructura de control for, de la siguiente manera
```
for(var i=0; i<miArreglo.length; i++)
{
  console.log(miAreglo[i]);
}
```

Para agregar un elemento al final del arreglo utilizamos el método push

```
  miArreglo.push(4);
```

Si tenemos un arreglo cuyos elementos sean números, podremos ordenarlo con la función sort

```
  miArreglo.sort();
```

Ahora completa los ejercicios en ejercicios.js.

Puedes verificar que todo esté correcto visitando en tu navegador el archivo index.html
