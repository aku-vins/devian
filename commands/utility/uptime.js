const { RichEmbed } = require('discord.js');
const moment = require("moment")

exports.run = async (client, message, args, color) => {
  
  let days = Math.floor(client.uptime / 86400000);
      let hours = Math.floor(client.uptime / 3600000) % 24;
      let minutes = Math.floor(client.uptime / 60000) % 60;
      let seconds = Math.floor(client.uptime / 1000) % 60;
  
  
const embed = new RichEmbed()
.setAuthor(client.user.username + '', client.user.displayAvatarURL)
.setDescription(`\`\`\`My Uptime:\n${days}d ${hours}h ${minutes}m ${seconds}s\`\`\``)
  
  
      message.channel.send(embed);
      return; 
}

exports.conf = {
    aliases: ['up', 'time'],
    cooldown: "4"
}

exports.help = {
    name: "uptime",
    description: "Check bot uptime",
    usage: "uptime"
}
