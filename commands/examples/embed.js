// This commands Shows a basic discod embed

const { SlashCommandBuilder , EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('embed')
		.setDescription('Replies with a Embed example'),
	async execute(interaction) {

        // extracting command-author from interaction
        const author = await interaction.user;
		
        
        // Creating an Embed
        const myEmbed = new EmbedBuilder()
        .setColor(0x0099FF)
        .setTitle("This is a Discord Embed")
        .setDescription(`Hello ${author}`)
        .setThumbnail(author.displayAvatarURL())
        .addFields(
            { name: `Field 1` ,value:` Field 1 Text`, inline: false},
            { name: `Field 2` ,value:` Field 2 Text`, inline: false}
           );


        // Bot reply
        return await interaction.reply({embeds: [myEmbed]});
	},
};