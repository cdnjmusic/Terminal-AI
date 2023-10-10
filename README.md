# Terminal-AI

Terminal-AI is a terminal-based AI assistant for NodeJS users. It provides a simple interface to interact with OpenAI's GPT-3 model. Follow the steps below to install and configure the app.

## Installation

1. Create a new Node.js project or navigate to an existing project's directory where you want to use Terminal-AI.

2. Install Terminal-AI as a dependency using npm:

   ```bash
   npm install terminal-ai
   ```

## Configuration

3. Inside your project's directory, locate `./node_modules/terminal-ai` and create a `.env` file. This file is used to store sensitive information, i.e., your OpenAI API key.

4. Open the `.env` file and add your OpenAI API key as follows:

   ```
   OPENAI_API_KEY=<your-api-key>
   ```

   Replace `<your-api-key>` with your actual OpenAI API key.

## Running Terminal-AI

5. Open your project's `package.json` file located in the root directory.

6. In the `scripts` section of your `package.json`, add a script that uses Terminal-AI. For example, to run Terminal-AI with the prompt "hello," add the following script:

   ```json
   "scripts": {
     "tai": "cd node_modules/terminal-ai && npm start"
   }
   ```

   You can customize the prompt by changing `"hello"` to any other prompt you'd like to use.

7. Save your `package.json` file.

## Usage

Now that you've configured Terminal-AI, you can run it by executing the following command in your terminal:

```bash
npm run tai <prompt>
```

Terminal-AI will start, and you can interact with it by providing prompts.

## Support

If you encounter any issues or have questions, please [open an issue on GitHub](https://github.com/cdnjmusic/Terminal-AI/issues).