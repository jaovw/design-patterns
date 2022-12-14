import Helicopter from "../aerial/Helicopter";
import IAirCraft from "../aerial/interfaces/IAirCraft";
import ILandVehicle from "../land/interfaces/ILandVehicle";
import Motorcycle from "../land/Motorcycle";
import ITransportFactory from "./interfaces/ITransportFactory";

export default class NineNineTransport implements ITransportFactory {

    createTransportVehicle(): ILandVehicle {

        return new Motorcycle()
    }

    createTransportAircraft(): IAirCraft {

        return new Helicopter()
    }

}