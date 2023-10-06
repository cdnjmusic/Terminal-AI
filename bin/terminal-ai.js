#!/usr/bin/env node

const { API_KEY } = require('./config');

console.log('Terminal-AI here!');

// Handle the command-line arguments (in this case, a prompt)
const args = process.argv.slice(2);

if (args.length === 0) {
  console.error('Usage: tai <prompt>');
} else {
  const prompt = args.join(' ');

  // Here, you can implement logic to process the prompt, communicate with your AI, and display results.
  // For simplicity, we'll just echo the prompt for now.
  console.log(`You asked: ${prompt}`);
}
