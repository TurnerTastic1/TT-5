const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId, token } = require('../../config.json');
const fs = require('fs');

module.exports = (client) => {
	client.commandHandler = async () => {
		const commandFolders = fs.readdirSync('./commands');
		for (const folder of commandFolders) {
			const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
			const { commands, commandArr } = client;
			for (const file of commandFiles) {
				const command = require(`../../commands/${folder}/${file}`);
				commands.set(command.data.name, command);
				commandArr.push(command.data.toJSON());
				console.log(`Command: ${command.data.name} has passed handler`);
			}
		}

		const rest = new REST({ version: '10' }).setToken(token);
		rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: client.commandArr })
			.then(() => console.log('Successfully registered application commands.'))
			.catch(console.error);
	};
};