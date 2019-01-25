import express from 'express';
import path from 'path';

const app = express();
const port = 4000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', ((req, res) => {
  res.render('index');
}));

app.use(express.static(path.join(__dirname, '../public')));
app.listen(port, () => console.log(`started and listening on port ${port}!`));
