import IAircraft from "./interfaces/IAirCraft";

export default class Airplane implements IAircraft {

    startRoute(): void {

        this.checkWind()
        this.getCargo()

        console.log('Iniciando decolagem ...')
    }

    getCargo(): void {

        console.log('Pegamoso os passageiros, estamos prontos.')
    }

    checkWind(): void {

        console.log('Ventos a 25 km/h, ventos ok!')
    }

}