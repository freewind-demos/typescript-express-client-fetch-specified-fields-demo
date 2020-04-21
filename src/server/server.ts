import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import queryUsers from './queryUsers';

const app = express();
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../../public')));

app.post('/users', (req, res) => {
  console.log("req.body", req.body);
  const matchedUsers = queryUsers(req.body)
  res.json(matchedUsers);
});

app.listen(3000, () => {
  console.log('listen on http://localhost:3000')
});
