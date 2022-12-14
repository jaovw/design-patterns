import Transport from "./Transport";
import Bike from "./vehicles/Bike";
import IVehicle from "./vehicles/interfaces/IVehicle";

//  FACTORY METHOD
export default class BikeTransport extends Transport {

    protected createTransport(): IVehicle {

        return new Bike()
    }

}