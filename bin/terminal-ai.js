const openai = require('openai');

// Use your own API Key to authenticate
require('dotenv').config();
const apiKey = process.env.OPENAI_API_KEY; // Corrected
const client = new openai({ apiKey });

console.log('Terminal-AI here!');

// Handle the command-line arguments (in this case, a prompt)
const args = process.argv.slice(2);

if (args.length === 0) {
  console.error('Usage: tai <prompt>');
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
        engine: 'text-davinci-002', // Choose the engine you want
        prompt: prompt,
        max_tokens: 50, // Adjust the number of tokens as needed
        model: 'davinci'
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
