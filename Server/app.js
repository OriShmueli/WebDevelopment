const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const dataBase = require('./dataBase')

dataBase.connectToDataBase()
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static('../Client/public'))

app.get('/WebDevelopment', (req, res) => {
    res.render('index.html')
})

let commentS = require('./models/comments')

app.post('/WebDevelopment', (req, res) => {
    let userCommentInfo = {
        getComment: req.body.UserComment 
    } 
    const NewComment = new commentS({ userCommentInfo })
    NewComment.save((err) => {
        console.log(err)
    })

    console.log('comment:' + userCommentInfo.getComment)
})

let PORT = process.env.PORT || 8080

app.listen(PORT, () => console.log(`connecting to: ${PORT}`))