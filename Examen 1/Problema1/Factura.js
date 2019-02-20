export default class Factura{
    constructor(fechaFactura,totalFactura, numeroFactura){
        this._fechaFactura= fechaFactura;
        this._totalFactura= totalFactura;
        this._numeroFactura= numeroFactura;
    }

    //lectura
    get fechaFactura(){
        return this._fechaFactura;
    }
    get totalFactura(){
        return this._totalFactura;
    }
    get numeroFactura(){
        return this._numeroFactura;
    }

    //escritura
    set numeroFactura(numeroFactura){
        this._numeroFactura = numeroFactura;
    }
    
    //consola
    imprimir(){
        console.log(`${this._fechaFactura}, ${this._totalFactura}, 
        ${this._numeroFactura}`);
    }

    
}