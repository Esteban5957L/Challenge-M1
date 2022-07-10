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

function closureConvertir(sep) {
  /* Tu codigo aqui */
  return function (seg) {
    var hours = Math.floor(seg / 3600);
    var minutes = Math.floor((seg % 3600) / 60);
    var seconds = seg % 60;
    var result =
      ("0" + hours).slice(-2) +
      sep +
      ("0" + minutes).slice(-2) +
      sep +
      ("0" + seconds).slice(-2);
    return result;
  };
}

// EJERCICIO 2
// ----- Recursión -----
// Crea la funcion 'formatted':

//Dada una cadena que contiene caracteres alfanuméricos y guiones -> `str`
//Un número entero que representa el tamaño del grupo -> `n`

//Devuelve una versión formateada de `str` en la que los caracteres alfanuméricos se agrupan según `n` y se separan por guiones partiendo desde atras hacia adelante.
//Cada grupo debe contener exactamente `n` caracteres excepto el primero, que puede contener menos de `n` caracteres para dar cuenta de cualquier resto.

// Ejemplos:
//formatted(4-3t-0-u,2) => 4-3t-0u
//formatted(3h5n-8v-7-m,4) => 3h5n-8v7m
//formatted(j-45i9ut5-34f-x10,5) => j45i-9ut53-4fx10

function formatted(str, n) {
  let x = str.replace(/-/g, "");
  if (x.length <= n) return x;
  return (
    formatted(x.slice(0, x.length - n), n) +
    "-" +
    x.slice(x.length - n, x.length)
  );
}
// ----------------------

// ----- LinkedList -----

// EJERCICIO 3
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

LinkedList.prototype.size = function () {
  /* Tu codigo aqui */

  let cont = 1;
  let save = this.head;
  if (save === null) {
    return (cont = 0);
  }
  while (save.next !== null) {
    cont++;
    save = save.next;
  }

  return cont;
};

// EJERCICIO 4
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

LinkedList.prototype.addInPos = function (pos, value) {
  /* Tu codigo aqui */
  let save = this.head;
  let anterior;
  let aux;

  if (this.size() < pos) {
    return false;
  }

  for (let i = 0; i <= pos; i++) {
    if (i === pos) {
      let nodo = new Node(value);
      aux = save;
      anterior.next = nodo;
      nodo.next = aux;
      return true;
    }
    anterior = save;
    save = save.next;
  }

  return false;
};

/*let lista = new LinkedList();
  lista.add(1)
  lista.add(2)
  lista.addInPos(2,3);*/

// EJERCICIO 5
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

LinkedList.prototype.removeFromPos = function (pos) {
  // Tu código aca:
  let save = this.head;
  let anterior;
  let removido;
  if (this.size() < pos || pos < 0) {
    return false;
  }
  if (pos === 0) {
    removido = this.head.value;
    this.head = save.next;
    return removido;
  }

  for (let i = 0; i <= pos; i++) {
    if (i === pos) {
      removido = save.value;
      anterior.next = save.next;
      save = null;
      return removido;
    }
    anterior = save;
    save = save.next;
  }
};

// ----- QUEUE -----

// EJERCICIO 6
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

function edad(obj) {
  if (obj.age >= 18) {
    return true;
  } else return false;
}

function data(obj, tipoUser) {
  if (obj.data.tipoUser === tipoUser) {
    return true;
  } else return false;
}

function numero(obj, num) {
  if (num.length === 0) {
    return false;
  } else {
    for (let i = 0; i < num.length; i++) {
      if (num[i] === obj.data.telefono) {
        return true;
      }
    }

    return false;
  }
}

var controlRegister = function (queue, tipoUser) {
  // Tu código aca:
  let admitidos = [];
  let num = [];
  let obj = {};

  while (queue.size() !== 0) {
    obj = queue.dequeue();

    if (edad(obj) && data(obj, tipoUser) && numero(obj, num) === false) {
      num.push(obj.data.telefono);
      admitidos.push(obj.fullname);
    }
  }
  return admitidos;
};

// ---------------
// ----- BST -----

// EJERCICIO 7
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

var generateBST = function (array) {
  let arb = new BinarySearchTree(array[0]);
  for (let i = 1; i < array.length; i++) {
    arb.insert(array[i]);
  }
  return arb;
};


// ----------------------

module.exports = {
  closureConvertir,
  formatted,
  LinkedList,
  Queue,
  controlRegister,
  generateBST,
};
