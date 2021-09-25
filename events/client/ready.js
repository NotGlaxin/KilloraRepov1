require('dotenv').config()
const moment = require('moment');
const chalk = require("chalk");
const mongoose = require("mongoose");

module.exports = async client => {
    let totalUsers = client.guilds.cache.reduce((users , value) => users + value.memberCount, 0);
    let totalGuilds = client.guilds.cache.size
    let totalChannels = client.channels.cache.size

    console.log(chalk.blue`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Loading Commands!`);
    console.log(chalk.blue`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Active, Commands Loaded!`);
    console.log(chalk.blue`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} Logged In!`);

    console.log(chalk.blue`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Now ` + totalChannels + ` Channels, ` + totalGuilds + ` Servers And ` + totalUsers + ` Users!`);

    mongoose.connect(process.env.MONGOCONNECT, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log(chalk.blue`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Starting Presence!`);
    console.log(chalk.blue`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Started Presence!`);
    console.log(chalk.blue`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Connected To Database!`);

    client.user.setPresence({ status: 'idle', activities: [{
        name: 'Being Developed By Glaxin!',
        type: 'PLAYING'
    }] });
    console.log(chalk.blue`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: No Errors Found!`);
    console.log(chalk.blue`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Ready To Use!`);
}