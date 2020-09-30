const { RichEmbed } = require('discord.js');

exports.run = async (client, message, args, color, prefix) => {
  
  let embed = new RichEmbed() 
  .setColor(color)
  .setDescription(`
Hello there! :)
im [Water](https://discord.com/api/oauth2/authorize?client_id=736937565902340106&permissions=8&scope=bot) (discord bot)
example if you need help:
\`w!help\`
\`w!help [command]\`
\`[mention me to know my prefix]\``)
  
  message.author.send(embed);
  
  message.channel.send(`:white_check_mark: | Check your DM's <@${message.author.id}>`)

}

exports.conf = {
    aliases: [],
    cooldown: "5"
}

exports.help = {
    name: "invite",
    description: "invite the bot to your server",
    usage: "invite"
}
