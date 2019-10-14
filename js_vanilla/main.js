function CreateNewComment(){
    //let Blogbody = document.getElementsByTagName("body")[0]
    let CommentBox = document.getElementById("CommentBox")

    let CommentTable = document.createElement("table")
    CommentTable.setAttribute("class", "CommentTable")

    let NewComment = document.createElement("tr")
    NewComment.setAttribute("class", "Comment")

    let UserCommentName = document.createElement("p")
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
        UserCommentImage.appendChild(UserCommentName)
        UserCommentImage.appendChild(UserImg)
        NewComment.appendChild(UserCommentImage)
        NewComment.appendChild(UserCommentText)
        CommentTable.appendChild(NewComment)
        CommentBox.appendChild(CommentTable)
    }
}

$(document).ready(() => {
    $("#JQxhrButton").click(() => {
        xhr.onload = () => {
            if(xhr.status >= 200 && xhr.status < 300){
                let data = JSON.parse(xhr.responseText);
                let firstPost = data[1]
                draw2(firstPost)
            }else{
                console.log("we have an error")
            }
        }
    
        xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
        xhr.send(); 
    })
})

let xhr = new XMLHttpRequest()
function Vxhr(){
    xhr.onload = () => {
        if(xhr.status >= 200 && xhr.status < 300){
            let data = JSON.parse(xhr.responseText);
            let firstPost = data[0]
            draw(firstPost)
        }else{
            console.log("we have an error")
        }
    }

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
    xhr.send(); 
}

function draw(data){
    let showTextVanilla = document.getElementById("VanillaTextXHR")
    showTextVanilla.innerHTML = data.title
}

function draw2(data){
    let showTextjQuery = document.getElementById("JqueryTextXHR")
    showTextjQuery.innerHTML = data.title
}



