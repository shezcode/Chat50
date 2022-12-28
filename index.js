
// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// require('dotenv').config();

//turn to import syntax
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();


const app = express();

app.use(bodyParser.json());
app.use(cors());

app.post('/', (req, res) => {
  res.json({ message: 'Hello World' });
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


