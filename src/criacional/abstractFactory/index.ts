import Client from "./vehicles/client/Client";
import Company from "./vehicles/consts/Company";
import ITransportFactory from "./vehicles/factories/interfaces/ITransportFactory";
import NineNineTransport from "./vehicles/factories/nineNineTransport";
import UberTransport from "./vehicles/factories/UberTransport";

const currentCompany = Company.NINENINE

let factory: ITransportFactory

switch (currentCompany) {

    case Company.UBER:

        factory = new UberTransport()
        break;

    case Company.NINENINE:

        factory = new NineNineTransport()
        break

    default:
        console.error('Desconhecida!')
}

const client = new Client(factory)

client.startRoute()
