const express = require('express');
const articleRouter = require('./routes/articles');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost/blog', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
  const articles = [
    {
      title: 'Test Article',
      createDate: new Date(),
      paragraph: 'Test Paragraph',
    },
  ];
  res.render('articles/index', { articles: articles });
});

app.use('/articles', articleRouter);

app.listen(5000);
