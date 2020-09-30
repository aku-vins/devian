const { get } = require('node-superfetch');
const { RichEmbed } = require('discord.js');

exports.run = async (client, message, args, color, prefix) => {


      const say = args.join(" ")
    if (!say)
      
    
      return message.reply("no say message!")
          
    message.delete();
    
    message.channel.send(say)
  
  
}

exports.conf = {
    aliases: ['say', 'sy'],
    cooldown: "1"
}

exports.help = {
    name: "say",
    description: "repeat what you say",
    usage: "say"
}
