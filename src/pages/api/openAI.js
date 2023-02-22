import openai from 'openai';

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

export default async function handler(req, res) {
  const previousChat = [
    'User: Hi, can you help me with my order?',
    'Bot: Sure, what do you need help with?',
    "User: I can't seem to find the checkout button.",
    'Bot: It should be at the bottom of the page. Can you check again?',
    "Bot:If you still can't find it, let me know and I can help you complete your order.",
    "User: yes, please I want to finsh buying the cart",
    // Add more chat messages as needed
  ];
  const context = previousChat.join('\n');
  
  const prompt = `Context:

${context}

New message:

`;

  const { Configuration, OpenAIApi } = require('openai');

  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  try {
    const completion = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: prompt,
      max_tokens: 1000,

      temperature: 0,
      top_p: 1,
      frequency_penalty: 0.2,
      presence_penalty: 0.0,
    });
    console.log(completion);
    const response = completion.data.choices[0];
    console.log(response);
    res.status(200).json({ message: response });
  } catch (error) {
    console.log(error);
  }
}

// const { Configuration, OpenAIApi } = require("openai");

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);

// const response = await openai.createCompletion({
//   model: "text-davinci-003",
//   prompt: "I am a highly intelligent question answering bot. If you ask me a question that is rooted in truth, I will give you the answer. If you ask me a question that is nonsense, trickery, or has no clear answer, I will respond with \"Unknown\".\n\nQ: What is human life expectancy in the United States?\nA: Human life expectancy in the United States is 78 years.\n\nQ: Who was president of the United States in 1955?\nA: Dwight D. Eisenhower was president of the United States in 1955.\n\nQ: Which party did he belong to?\nA: He belonged to the Republican Party.\n\nQ: What is the square root of banana?\nA: Unknown\n\nQ: How does a telescope work?\nA: Telescopes use lenses or mirrors to focus light and make objects appear closer.\n\nQ: Where were the 1992 Olympics held?\nA: The 1992 Olympics were held in Barcelona, Spain.\n\nQ: How many squigs are in a bonk?\nA: Unknown\n\nQ: Where is the Valley of Kings?\nA:",
//   temperature: 0,
//   max_tokens: 100,
//   top_p: 1,
//   frequency_penalty: 0.0,
//   presence_penalty: 0.0,
//   stop: ["\n"],
// });
