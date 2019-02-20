import Pacientes from "./Paciente.js"

let P1  = new Pacientes(
    `${new Date("2000,03,22, 10:30:10")}`,
    "1.68 mts",  
    "85 kgs");

let P2  = new Pacientes(
    `${new Date("2010,05,10, 11:51:00")}`,
    "1.58 mts",  
    "78 kgs");

P1.imprimir();

P1.fechaNacimiento= new Date("2000,01,10, 10:30:00");
P1.pesoPaciente = "90 kgs";
console.log(P1);

P1.imprimir();