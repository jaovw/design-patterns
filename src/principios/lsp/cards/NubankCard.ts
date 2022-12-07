import IPaymentInstrument from "./IPaymentInstrument";

export default abstract class NubankCard implements IPaymentInstrument {

    validate(): void {
        console.log('Validacao basica')
    }

    collectPayment(): void {
        console.log('Pagamento realizado.')
    }
}