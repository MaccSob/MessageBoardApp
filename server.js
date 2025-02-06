import express from 'express';
const app = express();

app.get('/', (req, res) => {
  res.send('Home Page')
});

app.get('/log', (req, res) => {
  res.send('Log Page')
})

app.listen(3000, () => console.log('Server Started'))