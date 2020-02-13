//import { create } from "domain"
let globalComment
$(document).ready(() => {
    $("#PostComment").submit(() => {
        //alert( "Handler for .submit() called." );
        $.ajax({
            url: "mongodb://localhost:27017/WebDevelopment",
            type: 'get',
            dataType: "jsonp",
            jsonp: "jsonp",
            success: (data) => {
                console.log(data.UserComment)
                globalComment = data.UserComment
            },
            error: (XMLHttpRequest, testStatus, errorThrown) => {
                console.log("error", errorThrown)
            }
        })
        
        let CommentBox = document.getElementById("CommentBox")
    
        let CommentTable = document.createElement("table")
        CommentTable.setAttribute("class", "CommentTable")
    
        let NewComment = document.createElement("tr")
        NewComment.setAttribute("class", "Comment")
    
        let UserCommentName = document.createElement("p")
        let UserCommentImage = document.createElement("td")
        
        let UserImg = document.createElement("img")
        UserImg.setAttribute("src", "./public/profileImg/emerald_axe.png")
        UserImg.setAttribute("class", "ProfileCommentPic")
    
        let UserCommentText = document.createElement("td")
        UserCommentText.setAttribute("class", "CommentText")
        
        let CommentText = globalComment//document.getElementsByClassName("CommentText")
        
        
        UserCommentText.innerHTML = CommentText
        UserCommentImage.appendChild(UserCommentName)
        UserCommentImage.appendChild(UserImg)
        NewComment.appendChild(UserCommentImage)
        NewComment.appendChild(UserCommentText) 
        CommentTable.appendChild(NewComment)
        CommentBox.appendChild(CommentTable)
    })
    
})


$(document).ready(() => {
    $("#JQxhrButton").click(() => {
        let link = "https://jsonplaceholder.typicode.com/posts";
        $.getJSON(link, (data) => {
            $("#JqueryTextXHR").text(data[0].title)
        })
        let xhr = $.ajax(link) 
        .done(() => {console.log("success")})
        .fail(() => {console.log("error")})
        .always(() => {console.log("complete")})
    })
})


let xhr = new XMLHttpRequest()
function Vxhr(){
    xhr.onload = () => {
        if(xhr.status >= 200 && xhr.status < 300){
            let data = JSON.parse(xhr.responseText);
            let showTextVanilla = document.getElementById("VanillaTextXHR")
            showTextVanilla.innerHTML = data[0].title
        }else{
            console.log("we have an error")
        }
    }

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
    xhr.send(); 

    
}


