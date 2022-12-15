import IPlatform from "./IPlatform";

export default class YouTube implements IPlatform {

    constructor() {

        this.configureRMTP()

        console.log('YouTube: Transmissao iniciada!')
    }

    configureRMTP(): void {

        this.authToken()

        console.log('YouTube: Configurando o broadcasting ... ')
    }

    authToken(): void {
        console.log('YouTube: Autorizando a aplicacao')
    }
}