import IVehicle from "../interfaces/IVehicle";
import IVehicleCar from "../interfaces/IVehicleCar";

//  SENDO POSSIVEL IMPLEMENTAR MAIS DE UMA INTERFACE EM UMA MESMA CLASSE
export default class Car implements IVehicle, IVehicleCar {

    constructor(
        color: string,
        year: number,
        engine: number,
        seats: number

    ) {
        this.configurationCar(color, year, engine, seats)
    }

    configurationCar(color: string, year: number, engine: number, seats: number): void {

        console.log(`Criando carro ${color}, ano ${year}, motor ${engine} com ${seats} bancos`)

        this.startVehicle()
    }

    startVehicle(): void {
        console.log('Ligando o motor ...')
    }



}