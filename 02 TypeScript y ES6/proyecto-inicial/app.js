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
        msj = who + " activ\u00F3 the " + obj;
    }
    console.log(msj);
}
activate("Gordon");
