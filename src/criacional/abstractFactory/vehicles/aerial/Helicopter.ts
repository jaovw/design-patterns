import IAircraft from "./interfaces/IAirCraft";

export default class Helicopter implements IAircraft {

    startRoute(): void {

        this.checkWind()
        this.getCargo()

        console.log('Iniciando a decolagem ...')
    }

    getCargo(): void {

        console.log('Passageiros ok, ligando helices')
    }

    checkWind(): void {

        console.log('Ventos a 25 km/h, Sudeste, ventos ok!')
    }

}