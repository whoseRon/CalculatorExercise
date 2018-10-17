const express = require('express');
const http = require('http');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist/CalculatorExercise'));

app.get('/*', (req, res) => res.sendFile(path.join(__dirname)));

app.get('/api/add/:operandA/:operandB', (req, res) => {
  const result = Number(req.params.operandA) + Number(req.params.operandB);
  res.send({ result });
});

const server = http.createServer(app);

server.listen(3000, () => {
  console.log(`Server started at http://localhost:3000`);
});
