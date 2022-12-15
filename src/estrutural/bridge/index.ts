import IPlatform from "./platforms/IPlatform";
import Twitch from "./platforms/Twitch";
import YouTube from "./platforms/YouTube";
import AdvancedLive from "./transmission/AdvancedLive";
import Live from "./transmission/Live";

function startLive(platform: IPlatform) {

    console.log('Aguarde ...')

    const live = new Live(platform)

    live.broadcasting()
    live.result()
}

//  REALIZANDO OUTRA PONTE
function startAdvancedLive(platform: IPlatform) {

    console.log('Aguarde ...')

    const live = new AdvancedLive(platform)

    live.broadcasting()
    live.result()

    live.subtitles()
    live.comments()
}

// startLive(new YouTube())
startAdvancedLive(new Twitch())