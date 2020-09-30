module.exports = async client => {
  //setTimeout(async () => {
    
      let guildsEval = await client.shard.broadcastEval('this.guilds.size')
      let channelsEval = await client.shard.broadcastEval('this.channels.size')
      let usersEval = await client.shard.broadcastEval('this.users.size')

     var botGuilds = guildsEval.reduce((prev, val) => prev + val)
     var botChannels = channelsEval.reduce((prev, val) => prev + val)
     var botUsers = usersEval.reduce((prev, val) => prev + val)
    
         var clientonmessage = `
_______________
Logging....

Login as ${client.user.tag}
Server: ${botGuilds}
Channel: ${botChannels}
User: ${botUsers}
_______________
Vins 2106#7613

> Succesfuly logged
`
      
  console.log(clientonmessage) 
    const activities = require('../../src/assets/json/status');

    client.setInterval(() => {
		const activity = activities[Math.floor(Math.random() * activities.length)];
		client.user.setActivity(`w!help | ${activity.text}`, { type: "STREAMING", url: "https://www.twitch.tv/Vins2106" });
	}, 20000);
	
  setInterval(() => require('quick.db').add('uptime', client.uptime), 3600000)
  // update stats
  setInterval(() => client.updateStats(), 1000 * 60);
  
  client.setInterval(() => {
  	for(const guild of client.guilds.array()){
	  	const channel = guild.channels.filter(x => x.name === 'neko-present' || x.name === 'bot-spam').first();
	  	if(!channel) continue;
		client.commands.get('neko').getNeko(channel, 'Hourly Neko Present');
  	}
  }, 3600000);
  
//}, 10000)
}