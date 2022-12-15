import IPlatform from "../platforms/IPlatform";
import Live from "./Live";

export default class AdvancedLive extends Live {

    constructor(platform: IPlatform) {
        super(platform) //  CHAMANDO AS PROPRIEDADES DO PAI
    }

    subtitles(): void {
        console.log('Legendas ativadas')
    }

    comments(): void {
        console.log('Comentarios liberados')
    }
}