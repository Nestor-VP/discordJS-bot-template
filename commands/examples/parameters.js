// Command with parameters
// how to use it, type: /sum num1 num2

const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('sum')
		.setDescription('add two numbers')
        .addIntegerOption(option => 
            option.setName('num1')
            .setDescription('Enter the first number')
            .setRequired(true)
            )
        .addIntegerOption(option => 
             option.setName('num2')
            .setDescription('Enter second number')
            .setRequired(true)
            ),
	async execute(interaction) {

    // Get parameter values
    const num1 = await interaction.options.get('num1').value;
    const num2 = await interaction.options.get('num2').value;

    const sum =  num1 + num2;

    return await interaction.reply(`The sum of ${num1} + ${num2} is: ${sum}`);


    }
}