const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const { User } = require('./models/User');

// application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// application/json
app.use(bodyParser.json());

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

app.post('/register', (req, res) => {
  // 회원 가입 할 시에 필요한 정보들을 client에서 가져오면
  // 그것들을 데이터 베이스에 넣어준다

  const user = new User(req.body);
  user.save((err, userInfo) => {
    if (err) return res.json({ success: false });
    return res.status(200).json({
      success: true,
    });
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}`));
