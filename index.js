const Discord = require("discord.js");
const fetch = require("node-fetch");
const moment = require("moment-timezone");
const client = new Discord.Client();

client.on("ready", () => {
    let guild = client.guilds.cache.get('822570977249853481');
    time = moment().tz("America/New_York")
    guild.member('830118399564578836').setNickname(`${time.format('ddd')} ${time.format('LT')}`)
    setInterval(() => {
        time = moment().tz("America/New_York")
        guild.member('830118399564578836').setNickname(`${time.format('ddd')} ${time.format('LT')}`)
    },60000)
    client.user.setPresence({ activity: 
        { 
            name: 'Eastern Time', 
            type: "STREAMING", 
            // url: "https://www.twitch.tv/alvinictn"
        }, status: 'online' })
        .then(console.log)
        .catch(console.error);
})

client.login("ODMwMTE4Mzk5NTY0NTc4ODM2.YHCCAQ.Cr0tyNOMTzklT_JDwEa3rzIIqaQ")