import IVehicle from "../interfaces/IVehicle";
import IVehicleMotorcycle from "../interfaces/IVehicleMotorcycle";

//  SENDO POSSIVEL IMPLEMENTAR MAIS DE UMA INTERFACE EM UMA MESMA CLASSE
export default class Motorcycle implements IVehicle, IVehicleMotorcycle {

    constructor(
        color: string,
        year: number,
        engine: number
    ) {
        this.configurationMotorcycle(color, year, engine)
    }
    configurationMotorcycle(color: string, year: number, engine: number): void {

        console.log(`Criando uma moto ${color}, ano ${year} com ${engine} cilindradas`)

        this.startVehicle()
    }

    startVehicle(): void {
        console.log('Ligando o motor ...')
    }

}