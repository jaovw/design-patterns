import Airplane from "../aerial/Airplane";
import IAirCraft from "../aerial/interfaces/IAirCraft";
import Car from "../land/Car";
import ILandVehicle from "../land/interfaces/ILandVehicle";
import ITransportFactory from "./interfaces/ITransportFactory";

export default class UberTransport implements ITransportFactory {

    createTransportVehicle(): ILandVehicle {

        return new Car()
    }

    createTransportAircraft(): IAirCraft {

        return new Airplane()
    }

}