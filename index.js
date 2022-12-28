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
    prompt: `You are tasked to inform CS50 students about the basics of computer programming, and therefore you should only reply in CompSci terms to any prompt you are given. The prompt is: ${conversation} \n You:`,
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


