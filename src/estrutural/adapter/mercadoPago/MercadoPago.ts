import Token from "../utils/Token";
import IMercadoPagoPayment from "./IMercadoPagoPayment";

export default class MercadoPago implements IMercadoPagoPayment {
    
    private token: Token

    authToken(): Token {
        return new Token()
    }

    mercadoPagoPayment(): void {
        
        this.token = this.authToken()
        console.log('TOKEN:' + this.token.getToken())
        console.log('Enviando pagemento via MercadoPago')
    }

    mercadoPagoReceivePayment(): void {
        console.log('Recebendo pagamento via MercadoPago')
    }

}