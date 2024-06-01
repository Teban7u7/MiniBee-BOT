//archivo index.js
const {Client} = require("discord.js");

//crear un nuevo cliente de discord
const client = new Client({
    intents: 3276799
});

// crear primer evento
client.on(Events.client, async() => {
    console.log(`Conectado como ${client.user.username}!`)
});

// conectar clientes
client.login("")
