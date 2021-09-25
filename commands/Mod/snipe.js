const Discord = require('discord.js');
const config = require('../../boconfig.json');

module.exports = {
    config: {
        name: 'snipe',
        description: 'Snipes last deleted message',
        aliases: [""]
    },
    run: async (client, message, args) => {
    
        const msg = message.client.snipes.get(message.channel.id)
        if(!msg) return message.channel.send("There is no deleted message!")

        const embed = new Discord.MessageEmbed()

        .setAuthor(msg.author, message.author.displayAvatarURL({ dynamic: true }))
        .addField('Content Of the Message :', msg.content)
        .setColor(config.embedcolor)
        .setFooter(" Requested by " + message.author.tag , message.author.avatarURL())
        .setTimestamp()
        if(msg.image)embed.setImage(msg.image)

        message.channel.send({ embed:[embed] });

    }
}
