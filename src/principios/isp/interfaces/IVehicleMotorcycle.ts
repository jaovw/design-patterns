export default interface IVehicleMotorcycle {
    //  PODENDO SER EXTENDIDA DA INTERFACE IVEHICLE
    //  POR TER UM METODO EM COMUM
    configurationMotorcycle(
        color: string,
        year: number,
        engine: number
    ): void
}