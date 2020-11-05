const express = require('express');
const app = express();

const { users } = require('./data');
const projectRouter = require('./routes/projects');

app.listen(3000);

app.use(express.json());
app.use(setUser);
app.use('/projects', projectRouter);

app.get('/', (req, res) => {
  res.send('Home page');
});

app.get('/dashboard', (req, res) => {
  res.send('Dashboard Page');
});

app.get('/admin', (req, res) => {
  res.send('Admin Page');
});

function setUser(req, res, next) {
  const userId = req.body.userId;
  if (userId) {
    req.user = users.find(user => user.id === userId);
  }
  next();
}