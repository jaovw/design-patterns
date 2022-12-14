import BikeTransport from "./transport/BikeTransport"
import CarTransport from "./transport/CarTransport"
import MotorcycleTransport from "./transport/MotorcycleTransport"
import Transport from "./transport/Transport"

declare var process

let transport: Transport

if (process.argv.includes('--uber')) {

    transport = new CarTransport()
    transport.startTransport()

} else if (process.argv.includes('--log')) {

    transport = new MotorcycleTransport()
    transport.startTransport()

} else if (process.argv.includes('--eats')) {

    transport = new BikeTransport()
    transport.startTransport()
    
} else {

    console.error('Selecione um tipo de entrega')
}