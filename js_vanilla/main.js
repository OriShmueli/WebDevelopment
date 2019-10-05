

function CreateNewComment(){
    //let Blogbody = document.getElementsByTagName("body")[0]
    let CommentBox = document.getElementById("CommentBox")

    let CommentTable = document.createElement("table")
    CommentTable.setAttribute("class", "CommentTable")

    let NewComment = document.createElement("tr")
    NewComment.setAttribute("class", "Comment")

    let UserCommentImage = document.createElement("td")
    
    let UserImg = document.createElement("img")
    UserImg.setAttribute("src", "D:\emerald_axe.png")
    UserImg.setAttribute("class", "ProfileCommentPic")

    let UserCommentText = document.createElement("td")
    UserCommentText.setAttribute("class", "CommentText")
    
    let CommentText = document.getElementsByClassName("CommentText").value

    
    
    
    if(CommentText === "a"){
        alert("plz enter some thing to send an comment")
        return;
    }
    else{
        UserCommentText.innerHTML = CommentText
        UserCommentImage.appendChild(UserImg)
        NewComment.appendChild(UserCommentImage)
        NewComment.appendChild(UserCommentText)
        CommentTable.appendChild(NewComment)
        CommentBox.appendChild(CommentTable)
    }
}

