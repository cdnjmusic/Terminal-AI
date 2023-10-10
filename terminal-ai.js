#!/usr/bin/env node

// Use your own API Key to authenticate
require('dotenv').config();
const openai = require('openai');

const apiKey = process.env.OPENAI_API_KEY; // Corrected
const client = new openai({ apiKey });

console.log('Terminal-AI here!');

// Handle the command-line arguments (in this case, a prompt)
const args = process.argv.slice(2);

if (args.length === 0) {
  console.error('Usage: npm start <prompt>');
} else {
  const prompt = args.join(' ');

  // Display prompt in terminal
  console.log(prompt);

  // model parameterization
  // const model = 'text-davinci-002';

  // Send the prompt to OpenAI GPT-3
  async function getGpt3Response(prompt) {
    try {
      const response = await client.completions.create({
        model: 'text-davinci-003', // Choose the engine you want
        prompt: prompt,
        max_tokens: 100, // Adjust the number of tokens as needed
      });      

      return response.choices[0].text;
    } catch (error) {
      console.error('Error calling OpenAI API:', error);
      return 'An error occurred while generating a response.';
    }
  }

  // Call the function with the user's prompt
  getGpt3Response(prompt)
    .then((result) => {
      console.log('AI Response:', result);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}
