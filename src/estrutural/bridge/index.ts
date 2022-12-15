import IPlatform from "./platforms/IPlatform";
import YouTube from "./platforms/YouTube";
import Live from "./transmission/Live";

function startLive(platform: IPlatform) {

    console.log('Aguarde ...')

    const live = new Live(platform)

    live.broadcasting()
    live.result()
}

startLive(new YouTube())