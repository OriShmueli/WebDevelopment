function CreateNewComment(){

    let body = document.getElementsByTagName("body")[0]
    let CommentTable = document.createElement("table")
    CommentTable.setAttribute("class", "CommentTable");

    let NewComment = document.createElement("tr")
    NewComment.setAttribute("class", "Comment")

    let UserCommentImage = document.createElement("td")
    UserCommentImage.setAttribute("class", "ProfileCommentPic")
    
    let img = document.createElement("img")
    img.src = "aaa"
    img.setAttribute("class", "ProfileCommentPic")

    let UserCommentText = document.createElement("td")
    UserCommentText.setAttribute("class", "CommentText")
    
    let CommentText = document.getElementsByClassName("CommentText")

    NewComment.appendChild(UserCommentImage)
    NewComment.appendChild(UserCommentText)
    CommentTable.appendChild(NewComment)
    body.appendChild(CommentTable)
    
    UserCommentImage = img
    if(CommentText == ""){
        alert("plz enter some thing to send an comment")
    }
    else{
        UserCommentText.innerHTML = CommentText
    }
}

