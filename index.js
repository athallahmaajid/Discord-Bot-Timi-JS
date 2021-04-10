if (process.env.TYPE !== 'BOT') {
    require('dotenv').config();
}

const Discord = require("discord.js");
const moment = require("moment-timezone");
const client = new Discord.Client();
const data = require('./config.json');

client.on("ready", () => {
    let guild = client.guilds.cache.get(data.serverID);
    time = moment().tz(data.timezone)
    guild.member(data.userID).setNickname(`${time.format('ddd')} ${time.format('LT')}`)
    setInterval(() => {
        time = moment().tz("America/New_York")
        guild.member(data.userID).setNickname(`${time.format('ddd')} ${time.format('LT')}`)
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

client.login(process.env.TOKEN)