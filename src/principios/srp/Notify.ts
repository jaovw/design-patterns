import Client from "./Client";

export default class Notify {

    //  ABSTRAINDO O METODO DE NOTIFICACAO 
    //  APLICANDO APENAS UMA RESPONSABILIDADE PARA CADA CLASSE 

    constructor(private client: Client) {

    }

    sendEmail(): boolean {

        console.log('Enviando email ...')

        this.client.email

        return true
    }
}