
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