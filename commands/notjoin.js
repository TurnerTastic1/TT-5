const { SlashCommandBuilder } = require('discord.js');
// const { MessageEmbded } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('notjoin')
		.setDescription('Joins current VC!'),
	async execute(client, interaction) {
		// if (!interaction.member.voice) {return interaction.reply('You need to be in a VC to access this command');}
		const queue = await client.player.createQueue(interaction.guild, {});
		await queue.connect(interaction.member.voice.channel);
		await interaction.reply('Joined!');
	},
};