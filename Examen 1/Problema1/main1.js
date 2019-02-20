import Facturas from "./Factura.js"

let F1  = new Facturas(
    `${new Date("2019,03,18, 15:00:10")}`,
    "$15,000",  
    "No. #515");
let F2  = new Facturas(
    `${new Date("2019,04,20, 12:30:00")}`,
    "$5,750",  
    "No. #280");

F1.imprimir();
F2.imprimir();

F1.numeroFactura="No. #520";
console.log(F1);
F2.numeroFactura="No. #350";
console.log(F2);

F1.imprimir();
F2.imprimir();