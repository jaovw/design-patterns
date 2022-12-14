import IAircraft from "../../aerial/interfaces/IAirCraft";
import ILandVehicle from "../../land/interfaces/ILandVehicle";

//  ABSTRACT FACTORY
export default interface ITransportFactory {

    createTransportVehicle(): ILandVehicle
    createTransportAircraft(): IAircraft
}