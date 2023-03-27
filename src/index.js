require('dotenv').config()
const { Client, IntentsBitField, ActivityType } = require('discord.js')

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

client.on('interactionCreate', (interaction) =>{
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'add') {
        const num1 = interaction.options.get('first-number').value;
        const num2 = interaction.options.get('second-number').value;

        interaction.reply(`The product is ${num1 + num2}!`)
    }
});

client.on('ready', (c) => {
    console.log(`${c.user.tag} is logged online. Ay, well done!`);

    client.user.setActivity({
        name: "All Our Amazing Reports!",
        type: ActivityType.Watching
    })
})

client.login(process.env.TOKEN)