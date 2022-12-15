import MercadoPago from "../mercadoPago/MercadoPago";
import IPayPalPayment from "../paypal/IPaypalPayment";
import Token from "../utils/Token";

export default class MercadoPagoAdapter implements IPayPalPayment {

    //  ADAPTER PARA NOVOS METODOS
    constructor(private payment: MercadoPago) {
        console.log('Adapter MercadoPago')
    }

    authToken(): Token {
        return this.payment.authToken()
    }

    paypalPayment(): void {
        return this.payment.mercadoPagoPayment()
    }

    paypalReceive(): void {
        return this.payment.mercadoPagoReceivePayment()
    }

}