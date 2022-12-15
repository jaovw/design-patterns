import IPlatform from "../platforms/IPlatform";
import ITransmission from "./ITransmission";

export default class Live implements ITransmission {

    //  BRIDGE
    constructor(private platform: IPlatform) { }

    broadcasting(): void {
        console.log('Iniciando a transmissao!')
    }

    result(): void {
       console.log('**** LIVE ON ****')
    }
}