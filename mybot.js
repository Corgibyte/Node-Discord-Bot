// setup environment variables via dotenv
require('dotenv').config()

// import classes from discord.js
const {Client, Intents} = require('discord.js');
const {MessageEmbed, WebhookClient} = require('discord.js');
const Discord = require('discord.js');

// Instantiate new client with parameters
const client = new Client (

    { intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]}

);


// get guild
const getGuild = async (guildID) => {
    
    guild = client.guilds.fetch(guildID)
    return guild; // returns the promise of a discord guild
        
}

// get channel
const getChannel = async (channelID) => {

        channel = client.channels.fetch(channelID)
        return channel; // returns the promise of a discord channel

}

// create webhook
const createWebhook = async (channelID) => {
    await client.login(process.env.DISCORD_TOKEN);
    const channel = await getChannel(channelID);
    const webhook = await channel.createWebhook('hook', {
      avatar: 'https://i.imgur.com/wSTFkRM.png',
    });
    webhook.send("webhook has been created!");
    client.destroy();
    return webhook.url;
  };

getGuild(974107730438680586)
getChannel('974107730438680589')
createWebhook('974107730438680589')

// client on ready, we create a webhook ##FINALLY WORKS####
//client.on('ready', () => {
//    let guild = client.guilds.cache.get("974107730438680586"); // get the guild ID
//    guild.channels.createWebhook('974107730438680589', 'hook', { // create webhook for the channel in the server
//        avatar: 'https://i.imgur.com/wSTFkRM.png',
//    })
//    .then(console.log('Webhook has been created!'))
//    .then(webhook => webhook.send('Hi!'))
//})


// Test function
client.on('message',
    function(msg) {
        if(msg.content === "Hello!") {
            msg.reply("What's Up!")
        }
    }
)


// authenticate
client.login(process.env.DISCORD_TOKEN)
