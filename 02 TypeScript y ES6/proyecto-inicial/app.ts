
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
        msj =  `${who} activó the ${obj}` ;
    }
   
    console.log(msj);
}

activate("Gordon");