
//Let and const
let msj = "Hello";
if(true){
    let msj = "adios";
}
console.log(msj);

const OPTIONS = "All";
if ( true ){
    const OPTIONS = "Nothings";
}


//TypeScript
let my_name:string = "Alex";
let num:number = 123;
let boolean:boolean = true;
let today:Date = new Date();
today = new Date('2019-08-16');
let anyThings:any;

anyThings = my_name;
anyThings = num;
anyThings = boolean;

let spiderman = {
    name: "Alex",
    age: 28
}

console.log( today );

//Template literales del ES6

let alex:string = "Alex";
let lastName:string ="Londoño";
let age:number = 28;

let text = `Hello, How are you ${alex} ${lastName}, I am ${ age }` ;
let text2 = `${ 8/2}`;
console.log( text );
console.log( text2 );
console.log( spiderman.name );

//Funciones: Parámetros opcionales, obligatorios y por defecto
function activate (
    who:string, 
    obj:string="Batiseñal", 
    moment?:String
    ){

    let msj:string;
    if(moment){
        msj =  `${who} activó the ${obj} en la ${moment}` ;
    }else{
        msj =  `${who} activó the ${obj}` ;
    }
    console.log(msj);
}
activate("Gordon", "Batiseñal", "Tarde");

//Funciones de flechas  y funciones normal

let myFunction = function (a:string){
    return a;
}

let myFunctionFlecha = a =>a;

console.log(myFunction("Normal"));
console.log(myFunction("Flecha"));


let myFunction2 = function (a:number, b:number){
    return a + b;
}
let myFunction2Flecha = ( a:number, b:number)=> a + b;

let myFunction3 = function (nombre:string){
    nombre = nombre.toUpperCase();
    return nombre;
}

let hulk = {
    name: "Hulk",
    smash(){
        setTimeout( () => console.log( this.name + " smash!!"), 1500);
    }
}
hulk.smash();

//Destructuración de Objetos

let avenger = {
    nombre: "Steve",
    clave: "Capitan America",
    poder: "Droga"
}
let { nombre:alias, clave, poder } = avenger;
console.log( alias, clave, poder );

//Destructuración de Arreglos

let avengers:string[] = ["Thor", "Steve", "Tony"];
let [ thor, capi, iroman ] = avengers;

console.log( thor, capi, iroman );

//Promesas en ES6 - Ejecutar procesos asincronos
let promise1 = new Promise( function(resolve, reject ){
    setTimeout(() => {
        console.log("Promesa terminado");
        //Termina bien
        resolve();

        //Termina Mal∫
       // reject();

    }, 1500);
})

console.log("Paso 1");

promise1.then( function(){
    console.log("Ejecutarme cuando se termine bien!")
},
    function(){
        console.log("Ejecutarme cuando se termine mal!")
    }
)
console.log("Paso 2");


//Interfaces in TypeScript
interface Xmen {
    nombre: string,
    poder: string
}

function enviarMision ( xmen : Xmen){
    console.log("Enviando a : " + xmen.nombre);
}

function enviarCuartel ( xmen : Xmen){
    console.log("Enviando al cuartel : " + xmen.nombre);
}


let wolverine:Xmen = {
    nombre: "Wolerine",
    poder: "Regeneración"
}

enviarMision( wolverine );
enviarCuartel( wolverine );

//Introduccion a las Clases de la POO


class Avenger {
    nombre: string = "Sin Nombre";
    equipo:string;
    nombreReal:string;
    puedePelar:boolean = false;
    peleasGanadas:number = 0;

    constructor(nombre:string, equipo:string, nombreReal:string){
        console.log("Se ejecutó el constructor");
        this.nombre = nombre;
        this.equipo =equipo;
        this.nombreReal = nombreReal;
    }
}

let antMan:Avenger = new Avenger("AntMan", "Cap", "Scott Lang");
console.log(antMan);
