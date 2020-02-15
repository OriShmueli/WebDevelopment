const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const dataBase = require('./dataBase')

dataBase.connectToDataBase()
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static('../Client/public'))

app.get('/', (req, res) => {
    res.render('index.html')
})

let commentS = require('./models/comments')
const key = require('./config/keys')

app.post('/WebDevelopment', (req, res) => {
    
    const  {UserComment} = req.body
    const NewComment = new commentS({ UserComment })
    /*NewComment.save((err) => {
        if(err) throw err
    })*/
    dataBase.getDB().collection(key.collection).insertOne(NewComment, (err, result) => {
        if(err){
            console.log(err)
        }else{
            console.log(`inserted: ${UserComment}`)
        }
    } )

    /*let userCommentInfo = {
        getComment: req.body.UserComment 
    } 
    const NewComment = new commentS({ userCommentInfo })
    NewComment.save((err) => {
        if(err) throw err
        console.log(NewComment.schema)
    })
    commentS.findById('5e4565037691c13be839384e', (err) => {
        if(err) throw err

        console.log(commentS)
    })
    //console.log(NewComment)
    console.log('comment:' + NewComment.UserComment)*/
})

let PORT = process.env.PORT || 8080

app.listen(PORT, () => console.log(`connecting to: ${PORT}`))