import IPaymentInstrument from "./IPaymentInstrument";

export default class NubankRewards implements IPaymentInstrument {

    // SUBSTITUICAO DIRETA DA CLASSE ABSTRATA PELA INTERFACE 
    validate(): void {
        console.log('Consultando a pontuacao ...')
    }

    collectPayment(): void {
        console.log('Pagamento efetuado a partir do rewards')
    }


}