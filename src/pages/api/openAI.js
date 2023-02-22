import openai from 'openai';

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const chats = [];

export default async function handler(req, res) {
  const { Configuration, OpenAIApi } = require('openai');

  chats.push(`User: ${req.query.message}`);

  let prompt = `Context:
  ${chats.join('\n')}
  New Message:
  `;

  const configuration = new Configuration({
    apiKey: OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  try {
    const completion = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt,
      max_tokens: 1000,

      temperature: 0,
      top_p: 1,
      frequency_penalty: 0.2,
      presence_penalty: 0.0,
    });

    const response = completion.data.choices[0];

    chats.push(`New Message: ${response.text.replace(/\n/g, '')}`);

    res.status(200).json({ message: response });
  } catch (error) {
    console.log(error);
  }
}
