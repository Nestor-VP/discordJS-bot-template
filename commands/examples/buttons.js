// A basic command with buttons

const { ActionRowBuilder, ButtonBuilder, ButtonStyle, SlashCommandBuilder } = require('discord.js');

module.exports = {
	
    data: new SlashCommandBuilder()
		.setName('buttons')
		.setDescription('Display some buttons'),
        
	async execute(interaction) {

    // Creating buttons objects
		const mybutton1 = new ButtonBuilder()
			.setCustomId('mybutton1')
			.setLabel('Button 1')
			.setStyle(ButtonStyle.Primary);

		const mybutton2 = new ButtonBuilder()
			.setCustomId('mybutton2')
			.setLabel('Button 2')
			.setStyle(ButtonStyle.Danger);

		const buttons = new ActionRowBuilder()
			.addComponents(mybutton1, mybutton2);

    // Bot response with buttons        
    const response = await interaction.reply({
			content: `This is a Basic Button example`,
			components: [buttons],
		});

    // Creating a button-press confirmation variable - setting wait-time 30s
    const confirmation = await response.awaitMessageComponent({ time: 30_000 });

    // Verifying which button was pressed
    if (confirmation.customId === 'mybutton1')
    {
        await confirmation.update({ content: `You just pressed Button 1`, components: [] });
    }
    else
    {
        await confirmation.update({ content: `You just pressed Button 2`, components: [] });
    }


	},
};