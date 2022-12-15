import Payonner from "../payonner/Payonner";
import IPayPalPayment from "../paypal/IPaypalPayment";
import Token from "../utils/Token";

export default class PayonnerAdapter implements IPayPalPayment {

    //  ATRAVES DO CONSTRUTOR POSSIBILITANDO O ACESSO A CLASSE PAYONNER
    constructor(private payonner: Payonner) {
        console.log('Adapter')
    }

    authToken(): Token {
        return this.payonner.authToken()
    }

    //  ADAPTANDO OS METODOS PARA OBTER UM NOME EM COMUM
    paypalPayment(): void {
        return this.payonner.sendPayment()
    }

    paypalReceive(): void {
        return this.payonner.receivePayment()
    }

}