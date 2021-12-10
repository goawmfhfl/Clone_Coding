const express = require('express');
const app = express();
const port = 3000;

/*어플리케이션과 몽고 디비에 연결하기 */
const mongoose = require('mongoose');
mongoose
  .connect(
    'mongodb+srv://goawmfhfl:!chl940729@myfirstserver.7g0ci.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    },
  )
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

app.get('/', (req, res) => res.send('hello world!'));

app.listen(port, () => console.log(`Example app listening on port ${port}`));
