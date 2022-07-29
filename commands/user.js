const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('user')
		.setDescription('Replies with some User info!'),
	async execute(interaction) {
		await interaction.reply(`Hello ${interaction.user.tag}. You're userID is: ${interaction.user.id} and you were created on ${interaction.user.createdAt}`);
	},
};