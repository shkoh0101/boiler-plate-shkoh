const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        // email 주소에 빈칸이 있으면 제거(trim) 한다
        trim: true,
        // email 주소가 중복되지 않게 즉 unique하게 입력되어야 한다
        unique: 1
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    // 어떤 user과 관리자가 될 수도, 사용자가 될 수도 있으니까
    role: {
        type: Number,
        default: 0
    },
    image: {
        type: String
    },
    // 유효성을 관리해주기 위해 token을 사용할 수 있다
    token: {
        type: String
    },
    // token의 유효기간을 정해줄 수 있다
    tokenExp: {
        type: Number
    }
})

// 스키마를 모델로 감싸줄 수 있다
const User = mongoose.model('User', userSchema)

// 모델을 다른데에서도 사용할 수 있게 하기 위해 exports 한다. 
module.exports = { User }