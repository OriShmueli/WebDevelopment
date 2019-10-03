
function CreateNewComment(){
    
    let CommentTable= document.getElementsByClassName("CommentTable")
    let NewComment = document.createElement("tr")
    let UserImage = document.createElement("td")
    let UserCommentText = document.createElement("td")
    
    NewComment.appendChild(UserImage)
    NewComment.appendChild(UserCommentText)

    CommentTable.appendChild(NewComment);
    UserImage.innerHTML = "Test image"
    UserCommentText.innerHTML = "Test text"
}