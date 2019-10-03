function CreateNewComment(){
    
    let CommentTable = document.getElementById("CommentTable")
    
    let NewComment = CommentTable.insertRow(-1)
    NewComment.setAttribute("class", "Comment")

    let UserCommentImage = NewComment.insertCell(0)
    UserCommentImage.setAttribute("class", "ProfileCommentPic")
    let img = document.createElement("img")
    img.src = "aaa"
    img.setAttribute("class", "ProfileCommentPic")
    

    let UserCommentText = NewComment.insertCell(1);
    UserCommentText.setAttribute("class", "CommentText")
    
    UserCommentImage.innerHTML = img
    UserCommentText.innerHTML = "Test text"
}
