// ----- IMPORTANTE -----

// IMPORTANTE!: Para este checkpoint se les brindarán las
// implementaciones ya realizadas en las homeworks de
// Queue, LinkedList y BinarySearchTree.
// Sobre dichas implementaciónes van a tener que agregar nuevos
// métodos o construir determinadas funciones explicados más abajo.
// Pero todos los métodos ya implementados en las homeowrks no es
// necesario que los vuelvan a definir.

const { Queue, LinkedList, Node, BinarySearchTree } = require("./DS.js");

// ----- Closures -----

// EJERCICIO 1
// Convertir segundos a Horas,Minutos y Segundos(hh:mm:ss) con una separacion ingresada por parametro
// Implementar la funcion 'closureConvertir' que recibe un parametro
// - 'sep' que es lo que va a separar entre Horas,Minutos y Segundos
// y retorna una funcion, nos referiremos a esta ultima como funcion hija,
// y a 'closureConvertir' como la funcion padre.
// la funcion hija debe recibir un valor en segundos y devolver su conversion a Horas,Minutos y Segundos con una separacion con el parametro 'sep' de
// la funcion padre original 'closureConvertir'
// el formato de salida es de hh:mm:ss

// Ejemplo:
// > var conv = closureConvertir(':');

// > conv(6551);
// < '01:49:11'

// > conv(3123);
// < '00:52:30'

function closureConvertir(sep) {}

// EJERCICIO 2
//Determinar si los ingredientes esta en un trago(bebida)
// Implementar la funcion 'closureTragos' que recibe un parametro
// - 'suppliers' que es un arreglo con los ingredientes para poder preparar un trago(bebida)
// y retorna una funcion, nos referiremos a esta ultima como funcion hija,
// y a 'closureConvertir' como la funcion padre.
// la funcion hija debe recibir un array de ingredientes que tiene una persona y debe devolver:
// -> true: si esos ingredientes coinciden con el trago (si se ingresa un solo ingrediente y coincide devolvera true)
// -> false: si alguno de esos ingredientes no coinciden con el trago
// el formato de salida es de un Booleano

// EJEMPLO:
//const trago = closureTragos(["agua", "vodka", "naranja", "Hielo"]);

//trago(["vodka", "naranja"]));
//>True

//trago(["fernet", "cola"]));
//>False

//trago(["AGUA", "cola"]));
//>False

function closureTragos(suppliers) {}

// ----------------------

// EJERCICIO 3
// ----- Recursión -----
// Crea la funcion 'formatted':

//Dada una cadena que contiene caracteres alfanuméricos y guiones -> `str`
//Un número entero que representa el tamaño del grupo -> `n`

//Devuelve una versión formateada de `str` en la que los caracteres alfanuméricos se agrupan según `n` y se separan por guiones partiendo desde atras hacia adelante.
//Cada grupo debe contener exactamente `n` caracteres excepto el primero, que puede contener menos de `n` caracteres para dar cuenta de cualquier resto.

// Ejemplos:
//formatted(4-3t-0-u, 2) => 4-3t-0u
//formatted(3h5n-8v-7-m, 4) => 3h5n-8v7m
//formatted(j-45i9ut5-34f-x10, 5) => j45i-9ut53-4fx10

function formatted(str, n) {}
// ----------------------

// ----- LinkedList -----

// EJERCICIO 4
// Implementar el método size dentro del prototype de LinkedList que deberá retornar el tamaño actual de
// la LinkedList. En el caso de que la lista se encuentre vacía deberá retornar cero.
// Ejemplo:
//    var lista = new LinkedList();
//    lista.size(); --> 0
//    lista.add(1);
//    lista.size(); --> 1
//    lista.add(2);
//    lista.add(3);
//    lista.size(); --> 3

LinkedList.prototype.size = function () {};

// EJERCICIO 5
// Implementar el método addInPos dentro del prototype de LinkedList que deberá agregar un elemento en
// la posición indicada. Ambos datos serán brindados como parámetro (pos, value). Donde "pos" será la
// posición en la cual se deberá agregar el valor "value". En el caso de que la posición en la que se
// quiera hacer la inserción no sea válida (Supere el tamaño de la lista actual) debe devolver false.
// Si el nodo fue agregado correctamente devolver true.
// Aclaración: la posición cero corresponde al head de la LinkedList
// Ejemplo 1:
//    Suponiendo que la lista actual es: Head --> [1] --> [2] --> [4]
//    lista.addInPos(2, 3);
//    Ahora la lista quedaría: Head --> [1] --> [2] --> [3] --> [4]
// Ejemplo 2:
//    Suponiendo que la lista está vacía: Head --> null
//    lista.addInPos(2, 3); --> Debería devolver false ya que no es posible agregar en la posición 2
//    sin antes tener cargada la posición 0 y 1.

LinkedList.prototype.addInPos = function (pos, value) {};

// EJERCICIO 6
// Implementar el método removeFromPos dentro del prototype de LinkedList que deberá remover un elemento de
// la posición indicada ("pos" será la posición del elemento a remover).
// En el caso de que la posición en la que se quiera hacer el remove no sea válida (Supere el tamaño de
// la lista actual o sea un número negativo) debe devolver false.
// Si el nodo fue removido correctamente devolver el valor del nodo.
// Aclaración: la posición cero corresponde al head de la LinkedList
// Ejemplo 1:
//    Suponiendo que la lista actual es: Head --> [1] --> [2] --> [3] --> [4]
//    lista.removeFromPos(2);
//    Ahora la lista quedaría: Head --> [1] --> [2] --> [4] y la función debería haber devuelto el valor 3
// Ejemplo 2:
//    Suponiendo que se pide una posición inválida: removeFromPos(8) --> false

LinkedList.prototype.removeFromPos = function (pos) {};

// ----- QUEUE -----

// EJERCICIO 7
// Implementar la función controlRegister: a partir de una Queue que va a recibir como paráemtro que tiene
// en cada posición un objeto que va a representar a una persona y tiene la siguiente forma:
// {
//   fullname: "Esteban Villalba",
//   age: 23,
//   data: {
//     telefono: 3512253029,
//     tipoUser: "Vip"
//   }
// }
// La idea es ir verificando uno a uno si la primer persona de la cola tiene los requisitos necesarios para
// registrarse al curso(también recibido por parámetro).
//Los requisitos que debe cumplir son:
// - Ser mayor de 18 años (18 inclusive es válido)
// - Tener datos que corresponda con el curso
// - Que no se haya registrado ya otra persona al curso con ese mismo número de documento.
// Finalmente la función debe devolver un arreglo con todos los nombres de las personas que pudieron ingresar
// Importante!: Aquellas personas que no cumplan con los requisitos para ingresar deben ser removidos de la cola

var controlRegister = function (queue, tipoUser) {};

// ----- BST -----

// EJERCICIO 8
// Implementar la función generateBST para que a partir de un array recibido como parametro
// genere un BinarySearchTree. Devolver dicho arbol generado.
// Ejemplo:
//    - array(15,5,22,1,16,30,13,4);
//    - arbol generado:
//             15
//          /      \
//        5         22
//      /  \       /   \
//     1    13    16    30
//      \
//       4

var generateBST = function (array) {};

// EJERCICIO 9
// Dado un arreglo ordenado, encontrar el índice de un elemento específico pasado como parámetro
// utilizando el método conocido como búsqueda binaria. En el caso de que el número buscado no se encuentre
// en el array devolver -1.
// Ejemplo:
//    array = [1,2,3,4,5,6,7,8,9,10];
//    binarySearch(array, 2) -> Devolvería 1 ya que array[1] = 2


var binarySearch = function (){};

// EJERCICIO 10
// Implementar la función countArray: a partir de un array en el cual cada posición puede ser un único
// número u otro array anidado de números, determinar la suma de todos los números contenidos en el array.
// El array será recibido por parámetro.
// Ejemplo:
//    const array = [1, [2, [3,4]], [5,6], 7]; 
//    countArray(array); --> Debería devolver 28 (1 + 2 + 3 + 4 + 5 + 6 + 7)
// Pista: utilizar el método Array.isArray() para determinar si algun elemento de array es un array anidado
// [Para más información del método: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/isArray]
var countArray = function(array) {}; 

// ----------------------

module.exports = {
  closureConvertir,
  closureTragos,
  formatted,
  LinkedList,
  Queue,
  controlRegister,
  generateBST,
  binarySearch,
  countArray
};
