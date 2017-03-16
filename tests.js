QUnit.test( "Crear Arreglo", function( assert ) {
  assert.deepEqual(crearArreglo(), [], "Arreglo Creado" );
});

QUnit.test( "Agregar al Arreglo", function( assert ) {
  assert.deepEqual(agregarAlArreglo([], 1), [1], "Funciona con arreglos vacíos" );
  assert.deepEqual(agregarAlArreglo([1,2,3], 1), [1,2,3,1], "Funciona con arreglos no vacíos" );
});

QUnit.test( "Longitud del Arreglo", function( assert ) {
  assert.equal(longitudDelArreglo([]), 0, "Funciona con arreglos vacíos" );
  assert.equal(longitudDelArreglo([1,2,3]), 3, "Funciona con arreglos no vacíos" );
});

QUnit.test( "Obtener del Arreglo", function( assert ) {
  assert.equal(obtenerDelArreglo([1,2,3], 2), 3, "Elemento correcto" );
});

QUnit.test( "Suma del Arreglo", function( assert ) {
  assert.equal(suma([]), 0, "Funciona con arreglos vacíos" );
  assert.equal(suma([1,2,3]), 6, "Funciona con arreglos no vacíos" );
});

QUnit.test( "Promedio del Arreglo", function( assert ) {
  assert.equal(promedio([]), 0, "Funciona con arreglos vacíos" );
  assert.equal(promedio([1,2,3]), 2, "Funciona con arreglos no vacíos" );
});
