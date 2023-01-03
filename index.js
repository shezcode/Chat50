import { Configuration, OpenAIApi } from "openai";

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();


const configuration = new Configuration({
    organization: "org-EEWgN6xA4mAxwdCMmAwEo3R4",
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const app = express();
app.use(bodyParser.json());
app.use(cors());


app.post('/chat', async (req, res) => {
  const { conversation } = req.body;
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `Pretend you are a chatbot for a web app that is being used in my final project for CS50, you should try to answer to every prompt with some compsci related terminology. The prompt is: ${conversation} \n You:`,
    max_tokens: 200,
    temperature: 0.5,
  });
  if (response.data) {
    console.log(response)
    res.json({ message: response.data.choices[0].text });
  }
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


