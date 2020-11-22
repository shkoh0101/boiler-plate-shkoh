const express = require('express')
const app = express()
const port = 3000


// 입력된 데이터를 분석하기 위한 분석기를 가져온다
const bodyParser = require('body-parser');


const config = require('./config/key');



// User.js에 있는 정보를 가져와야 한다
const { User } = require("./models/User");

// application/x-www-form-urlencoded 이런 타입으로 된 것을 분석해서 가져올 수 있게 하기 위해
app.use(bodyParser.urlencoded({extended: true}));

// application/json 이런 타입으로 된 것을 분석해서 가져올 수 있게 하기 위해 
app.use(bodyParser.json());


// 이 App에서 mongoDB와 연결하기 
const mongoose = require('mongoose')
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World! 안녕하세요, 새해복 많이 받으세요, 제발')
})

// 클라이언트가 없으니 postman을 이용해서 입력된 회원정보를 데이터베이스에 넣어준다
// 이 라우터의 endpoint는 /register 임
app.post('/register', (req, res) => {
    
    // body-parser를 이용하여 클라이언트에 보낼 데이터를 req.body가 받아 준다
    const user = new User(req.body)

    // 저장할때 err가 있으면 
    // .status(200)은 성공했다는 의미
    user.save((err, userInfo) => {
        if(err) return res.json({ success: false, err})
        return res.status(200).json({
            success: true
        })
    })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})



