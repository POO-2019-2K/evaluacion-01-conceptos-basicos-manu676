export default class Casa{
    constructor(precio, superficie, numeroHabitaciones, numeroBathroom){
        this._precio= precio;
        this._superficie= superficie;
        this._numeroHabitaciones= numeroHabitaciones;
        this._numeroBathroom = numeroBathroom;
    }

    //lectura
    get precio(){
        return this._precio;
    }
    get superficie(){
        return this._superficie;
    }

    //escritura
    set numeroHabitaciones(numeroHabitaciones){
        this._numeroHabitaciones =  numeroHabitaciones;
    }
    set numeroBathroom(numeroBathroom){
        this._numeroBathroom = numeroBathroom;
    }
    
}