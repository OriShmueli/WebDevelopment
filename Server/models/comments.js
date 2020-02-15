const mongoose = require('mongoose')

let commentSchema = new mongoose.Schema({
    /*userName: {
        type: String
    },*/
    UserComment: String,
    date: {
        type: Date,
        default: Date.now 
    }
})

const commentS = mongoose.model('Comment', commentSchema)

module.exports = commentS