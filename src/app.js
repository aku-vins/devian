const Water = require('./handle/Waterbot.js');
const client = new Water({
  fetchAllMembers: true,
  disabledEvents: ["TYPING_START", "USER_NOTE_UPDATE"],
  disableEveryone: true
});

require('./handle/events')(client);
require('./handle/module')(client);

client.login(client.config.env.TOKEN);
