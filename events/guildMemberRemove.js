module.exports = (client, member) => {
	
  const guild = client.guilds.get('738023432582856705');
  guild.channels.get('738023432582856709').setName(`Total Member : ${guild.memberCount}`)
  
} 