export default interface IVehicleCar {
    //  PODENDO SER EXTENDIDA DA INTERFACE IVEHICLE
    //  POR TER UM METODO EM COMUM
    configurationCar(
        color: string,
        year: number,
        engine: number,
        seats: number
    ): void
}