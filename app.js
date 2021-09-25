require('dotenv').config()
const { Client, Collection } = require('discord.js');

const client = new Client({
    intents: [
        'GUILDS',
        'GUILD_MESSAGES',
        'GUILD_VOICE_STATES'
    ]
});

const fs = require("fs");

client.commands = new Collection();
client.aliases = new Collection();

["aliases", "commands"].forEach(cmd => client[cmd] = new Collection());
["console", "command", "event"].forEach(events => require(`./handlers/${events}`)(client));

client.categories = fs.readdirSync('./commands');



client.login(process.env.DISCORD_CLIENT_TOKEN);