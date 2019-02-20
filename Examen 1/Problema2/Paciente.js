export default class Paciente{
    constructor(fechaNacimiento, estaturaPaciente, pesoPaciente){
        this._fechaNacimiento= fechaNacimiento;
        this._estaturaPaciente= estaturaPaciente;
        this._pesoPaciente= pesoPaciente;
    }

    //lectura
    get fechaNacimiento(){
        return this._fechaNacimiento;
    }

    //escritura
    set fechaNacimiento(fechaNacimiento){
        this._fechaNacimiento = fechaNacimiento;
    }
    set estaturaPaciente(estaturaPaciente){
        this._estaturaPaciente = estaturaPaciente;
    }
    set pesoPaciente(pesoPaciente){
        this._pesoPaciente = pesoPaciente;
    }
        
    //consola
    imprimir(){
        console.log(`${this._fechaNacimiento}, ${this._estaturaPaciente}, 
        ${this._pesoPaciente}`);
    }

    
}