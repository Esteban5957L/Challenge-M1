var expect = require("chai").expect;

const {
  closureConvertir,
  formatted,
  LinkedList,
  Queue,
  controlRegister,
  generateBST,
} = require("../checkpoint");

describe("Practica del Checkpoint M1", function () {
  describe("EJERCICIO 1: closureConvertir", function () {
    let conv1 = closureConvertir(":");
    let conv2 = closureConvertir(";");
    let conv3 = closureConvertir("-");
    it("Una funcion 'Hija' debe estar adentro de una funcion 'Padre'", function () {
      expect(typeof conv1).to.be.equal("function");
    });
    it("La conversion debe separar por : , si : le es pasado como parametro a la funcion padre", function () {
      expect(typeof conv1).to.be.equal("function");
      expect(conv1(6551)).to.be.equal("01:49:11");
      expect(conv1(21720)).to.be.equal("06:02:00");
      expect(conv1(57862)).to.be.equal("16:04:22");
    });
    it("La conversion debe separar por ; , si ; le es pasado como parametro a la funcion padre", function () {
      expect(typeof conv2).to.be.equal("function");
      expect(conv2(6551)).to.be.equal("01;49;11");
      expect(conv2(21720)).to.be.equal("06;02;00");
      expect(conv2(57862)).to.be.equal("16;04;22");
    });
    it("La conversion debe separar por - , si - le es pasado como parametro a la funcion padre", function () {
      expect(typeof conv3).to.be.equal("function");
      expect(conv3(6551)).to.be.equal("01-49-11");
      expect(conv3(21720)).to.be.equal("06-02-00");
      expect(conv3(57862)).to.be.equal("16-04-22");
    });
  });

  describe("EJERCICIO 2: formatted", function () {
    const str = "j-45i9ut5-34f-x10";
    const n = 5;
    it("Debe devolver el strings correspondiente", function () {
      expect(formatted(str, n)).to.be.equal("j45i-9ut53-4fx10");
    });
  });

  describe("EJERCICIO 3: LinkedList size", function () {
    var newList;

    beforeEach(function () {
      newList = new LinkedList();
    });

    it("Debe devolver el tamaño actual de la lista", function () {
      expect(newList.size()).to.equal(0);
      newList.add(1);
      newList.add(2);
      expect(newList.size()).to.equal(2);
      newList.add(3);
      expect(newList.size()).to.equal(3);
    });
  });

  describe("EJERCICIO 4: LinkedList addInPos ", function () {
    var newList;

    beforeEach(function () {
      newList = new LinkedList();
    });

    it("Debe agregar un nuevo nodo en la posición correcta", function () {
      expect(newList.addInPos(2, 2)).to.equal(false);
      newList.add(1);
      newList.add(2);
      expect(newList.addInPos(2, 3)).to.equal(true);
      expect(newList.head.next.next.value).to.equal(3);
      expect(newList.head.next.next.next).to.equal(null);
      newList.add(4);
      newList.add(6);
      expect(newList.addInPos(4, 5)).to.equal(true);
      expect(newList.head.next.next.next.next.value).to.equal(5);
      expect(newList.head.next.next.next.next.next.value).to.equal(6);
    });
  });
  describe("EJERCICIO 5: LinkedList removeFromPos ", function () {
    var newList;

    beforeEach(function () {
      newList = new LinkedList();
    });

    it("Debe remover un nuevo nodo de la posición correcta", function () {
      expect(newList.removeFromPos(2)).to.equal(false);
      newList.add(1);
      newList.add(2);
      expect(newList.removeFromPos(1)).to.equal(2);
      expect(newList.head.value).to.equal(1);
      expect(newList.head.next).to.equal(null);
      newList.add(4);
      newList.add(6);
      expect(newList.removeFromPos(5)).to.equal(false);
      expect(newList.removeFromPos(0)).to.equal(1);
      expect(newList.head.value).to.equal(4);
      expect(newList.head.next.value).to.equal(6);
    });
  });
  describe("EJERCICIO 6: controlRegister", function () {
    var queue = new Queue();

    queue.enqueue({
      fullname: "Franco Etcheverri",
      age: 26,
      data: { telefono: 24562436254, tipoUser: "vip" },
    });
    queue.enqueue({
      fullname: "Toni Tralice",
      age: 30,
      data: { telefono: 26346324634, tipoUser: "vip" },
    });
    queue.enqueue({
      fullname: "Jessica Longo",
      age: 26,
      data: { telefono: 24562436254, tipoUser: "vip" },
    });
    queue.enqueue({
      fullname: "Nahuel Paolinelli",
      age: 40,
      data: { telefono: 3346534534, tipoUser: "ordinary" },
    });
    queue.enqueue({
      fullname: "Esteban Villalba",
      age: 10,
      data: { telefono: 346346346, tipoUser: "vip" },
    });
    queue.enqueue({
      fullname: "Elena Gonzales",
      age: 10,
      data: { tipoUser: "vip" },
    });

    it("Debe devolver las personas que cumplen los requisitos para registrarse en el curso", function () {
      expect(controlRegister(queue, "vip")).to.deep.equal([
        "Franco Etcheverri",
        "Toni Tralice",
      ]);

      queue.enqueue({
        fullname: "Franco Etcheverri",
        age: 26,
        data: { telefono: 24562436254, tipoUser: "vip" },
      });
      queue.enqueue({
        fullname: "Toni Tralice",
        age: 30,
        data: { telefono: 26346324634, tipoUser: "vip" },
      });
      queue.enqueue({
        fullname: "Jessica Longo",
        age: 26,
        data: { telefono: 24562436254, tipoUser: "vip" },
      });
      queue.enqueue({
        fullname: "Nahuel Paolinelli",
        age: 40,
        data: { telefono: 3346534534, tipoUser: "ordinary" },
      });
      queue.enqueue({
        fullname: "Esteban Villalba",
        age: 10,
        data: { telefono: 346346346, tipoUser: "vip" },
      });
      queue.enqueue({
        fullname: "Elena Gonzales",
        age: 10,
        data: { tipoUser: "vip" },
      });

      expect(controlRegister(queue, "ordinary")).to.deep.equal([
        "Nahuel Paolinelli",
      ]);

      queue.enqueue({
        fullname: "Franco Etcheverri",
        age: 26,
        data: { telefono: 24562436254, tipoUser: "vip" },
      });
      queue.enqueue({
        fullname: "Toni Tralice",
        age: 30,
        data: { telefono: 26346324634, tipoUser: "vip" },
      });
      queue.enqueue({
        fullname: "Jessica Longo",
        age: 26,
        data: { telefono: 24562436254, tipoUser: "vip" },
      });
      queue.enqueue({
        fullname: "Nahuel Paolinelli",
        age: 40,
        data: { telefono: 3346534534, tipoUser: "ordinary" },
      });
      queue.enqueue({
        fullname: "Esteban Villalba",
        age: 10,
        data: { telefono: 346346346, tipoUser: "vip" },
      });
      queue.enqueue({
        fullname: "Elena Gonzales",
        age: 10,
        data: { tipoUser: "vip" },
      });
      queue.enqueue({
        fullname: "Diego Rodriguez",
        age: 33,
        data: { telefono: 10435345345, tipoUser: "vip" },
      });
      expect(controlRegister(queue, "vip")).to.deep.equal([
        "Franco Etcheverri",
        "Toni Tralice",
        "Diego Rodriguez",
      ]);
    });
  });
  describe("EJERCICIO 7: generateBST", function () {
    it("Debe generar un arbol correctamente a partir de un array", function () {
      var tree = generateBST([15,5,22,1,16,30,13,4]);
      expect(tree.value).to.equal(15);
      expect(tree.left.value).to.equal(5);
      expect(tree.left.left.value).to.equal(1);
      expect(tree.left.left.right.value).to.equal(4);
      expect(tree.left.right.value).to.equal(13);
      expect(tree.right.value).to.equal(22);
      expect(tree.right.left.value).to.equal(16);
      expect(tree.right.right.value).to.equal(30);
    });
  });
});
