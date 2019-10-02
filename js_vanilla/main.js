let CommentTable= document.getElementsByClassName("CommentTable")

function CreateNewComment(){
    let NewComment = CommentTable.insertRow(0)

    let UserImage = NewComment.insertCell(0)
    let UserCommentText = NewComment.insertCell(1)

    UserImage.innerHTML = "Test image"
    UserCommentText.innerHTML = "Test text"
}