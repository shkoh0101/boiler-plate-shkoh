const express = require('express')
const app = express()
const port = 3000


// 이 App에서 mongoDB와 연결하기 
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://shkoh:abcd12345@boilerplate.3gmmh.mongodb.net/boilerplate?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))


app.get('/', (req, res) => {
  res.send('Hello World! 안녕하세요')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})



