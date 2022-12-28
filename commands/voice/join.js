const { SlashCommandBuilder } = require('discord.js');
const { joinVoiceChannel } = require('@discordjs/voice');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('join')
		.setDescription('Joins a voice channel!')
		.addStringOption(option =>
			option.setName('channelID')
				.setDescription('Enter your channel ID')
				.setRequired(true)),
	async execute(interaction) {
		const channelID = interaction.options.getString('channelID');
        if (!channelID || !interaction.user.voice.channel) return;

		interaction.user.joinVoiceChannel();
	},
};