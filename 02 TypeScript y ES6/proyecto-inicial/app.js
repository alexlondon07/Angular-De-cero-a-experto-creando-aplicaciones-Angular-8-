//Let and const
var msj = "Hello";
if (true) {
    var msj_1 = "adios";
}
console.log(msj);
var OPTIONS = "All";
if (true) {
    var OPTIONS_1 = "Nothings";
}
//TypeScript
var my_name = "Alex";
var num = 123;
var boolean = true;
var today = new Date();
today = new Date('2019-08-16');
var anyThings;
anyThings = my_name;
anyThings = num;
anyThings = boolean;
var spiderman = {
    name: "Alex",
    age: 28
};
console.log(today);
//Template literales del ES6
var alex = "Alex";
var lastName = "Londoño";
var age = 28;
var text = "Hello, How are you " + alex + " " + lastName + ", I am " + age;
var text2 = "" + 8 / 2;
console.log(text);
console.log(text2);
console.log(spiderman.name);
//Funciones: Parámetros opcionales, obligatorios y por defecto
function activate(who, obj, moment) {
    if (obj === void 0) { obj = "Batiseñal"; }
    var msj;
    if (moment) {
        msj = who + " activ\u00F3 the " + obj + " en la " + moment;
    }
    else {
        msj = who + " activ\u00F3 the " + obj;
    }
    console.log(msj);
}
activate("Gordon", "Batiseñal", "Tarde");
//Funciones de flechas  y funciones normal
var myFunction = function (a) {
    return a;
};
var myFunctionFlecha = function (a) { return a; };
console.log(myFunction("Normal"));
console.log(myFunction("Flecha"));
var myFunction2 = function (a, b) {
    return a + b;
};
var myFunction2Flecha = function (a, b) { return a + b; };
var myFunction3 = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
var hulk = {
    name: "Hulk",
    smash: function () {
        var _this = this;
        setTimeout(function () { return console.log(_this.name + " smash!!"); }, 1500);
    }
};
hulk.smash();
//Destructuración de Objetos
var avenger = {
    nombre: "Steve",
    clave: "Capitan America",
    poder: "Droga"
};
var alias = avenger.nombre, clave = avenger.clave, poder = avenger.poder;
console.log(alias, clave, poder);
//Destructuración de Arreglos
var avengers = ["Thor", "Steve", "Tony"];
var thor = avengers[0], capi = avengers[1], iroman = avengers[2];
console.log(thor, capi, iroman);
//Promesas en ES6 - Ejecutar procesos asincronos
var promise1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Promesa terminado");
        //Termina bien
        resolve();
        //Termina Mal∫
        // reject();
    }, 1500);
});
console.log("Paso 1");
promise1.then(function () {
    console.log("Ejecutarme cuando se termine bien!");
}, function () {
    console.log("Ejecutarme cuando se termine mal!");
});
console.log("Paso 2");
function enviarMision(xmen) {
    console.log("Enviando a : " + xmen.nombre);
}
function enviarCuartel(xmen) {
    console.log("Enviando al cuartel : " + xmen.nombre);
}
var wolverine = {
    nombre: "Wolerine",
    poder: "Regeneración"
};
enviarMision(wolverine);
enviarCuartel(wolverine);
//Introduccion a las Clases de la POO
var Avenger = (function () {
    function Avenger(nombre, equipo, nombreReal) {
        this.nombre = "Sin Nombre";
        this.puedePelar = false;
        this.peleasGanadas = 0;
        console.log("Se ejecutó el constructor");
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }
    return Avenger;
}());
var antMan = new Avenger("AntMan", "Cap", "Scott Lang");
console.log(antMan);
