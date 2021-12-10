const mongoose = require('mongoose');

/* 입력받을 유저의 정보를 적는다. */
const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50,
  },
  email: {
    type: String,
    trim: true, // 스페이스를 제거해주는 역할
    unique: 1, // 똑같은 이메일이 들어오지 않게 한다.
  },
  password: {
    type: String,
    minlength: 5,
  },
  role: {
    //유저가 관리자가 될 수 있고 일반 유저가 될 수 있다.
    type: Number,
    default: 0, // 0은 일반유저
  },
  image: String,
  token: {
    // 토큰을 이용해서 유효성 관리
    type: String,
  },
  tokenExp: {
    // 토큰을 사용할 수 있는 유효기간을 정하는 것이다.
    type: Number,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = { User };
