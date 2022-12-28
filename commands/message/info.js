const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('info')
		.setDescription('Replies with select info')
		.addSubcommand(subcommand =>
			subcommand
				.setName('user')
				.setDescription('Replies with user info')
				.addUserOption(option =>
					option.setName('target')
						.setDescription('The user')))
		.addSubcommand(subcommand =>
			subcommand
				.setName('server')
				.setDescription('Replies with server info')),
	async execute(interaction) {
		if (interaction.options.getSubcommand() == 'user') {
			const user = interaction.options.getUser('target');
			if (user) {
				if (user.tag == 'TT-5#0861') interaction.reply('TT-5 is a bot created by Turner Naef on Jul 26 2022.');
				else interaction.reply(`${user.tag} was created on ${user.createdAt}`);
			}
			else {
				interaction.reply('Please enter a valid user');
			}

		}
		else if (interaction.options.getSubcommand() == 'server') {
			interaction.reply(`${interaction.guild.name} was created on ${interaction.guild.createdAt} and has ${interaction.guild.memberCount} members.`);
		}
		else {
			interaction.reply('wrong input');
		}
	},
};