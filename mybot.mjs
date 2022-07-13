// import classes from discord.js
import {
  Client,
  Intents
} from "discord.js";
import "dotenv/config.js";

// Instantiate new client with parameters
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

const login = async () => {
  if (!client.isReady) {
    await client.login(process.env.DISCORD_TOKEN);
  }
};

// get guild
const getGuild = async (guildID) => {
  await login();
  const guild = await client.guilds.fetch(guildID);
  return guild; // returns the promise of a discord guild
};

// get channel
const getChannel = async (channelID) => {
  await login();
  const channel = await client.channels.fetch(channelID);
  return channel; // returns the promise of a discord channel
};

// create webhook
const createWebhook = async (channelID) => {
  await login();
  const channel = await client.channels.fetch(channelID);
  const webhook = await channel.createWebhook("hook", {
    avatar: "https://i.imgur.com/wSTFkRM.png",
  });
  webhook.send("webhook has been created!");
  return webhook.url;
};

// Testing
const run = async () => {
  const guild = await getGuild("284210397014130688");
  const channel = await getChannel("964211195982794765");
  const webhook = await createWebhook("964211195982794765");
  console.log(`Guild: ${guild}\nChannel: ${channel}\nWebhook: ${webhook}`);
  client.destroy();
};

run();