function CtreatNewStory(){
    let ProblemBox = document.createElement("div")
    ProblemBox.innerHTML `<div class="CommentBox">
                                <div class="Problem">
                                    A computer is a machine that can be instructed to carry out sequences of arithmetic or logical operations automatically via computer programming. Modern computers have the ability to follow generalized sets of operations, called programs. These programs enable computers to perform an extremely wide range of tasks. A "complete" computer including the hardware, the operating system (main software), and peripheral equipment required and used for "full" operation can be referred to as a computer system. This term may as well be used for a group of computers that are connected and work together, in particular a computer network or computer cluster.
                                </div>
                                <table class="CommentTable">
                                    <tr class="Comment">
                                        <td><img src="" class="ProfileCommentPic"></td>
                                        <td class="CommentText">computer can do that and that but not that. if you want to do that you need to install a Abc that program will help you to solve that problem</td>
                                    </tr>
                                </table>
                                <form action="" class="Response">
                                    <fieldset>
                                        <legend>Response</legend>
                                            <textarea class="CommentText" name="User comment" rows="7" cols="50"></textarea>
                                            <br>
                                    </fieldset>
                                </form>
                                <button class="Send" onclick="CreateNewComment()">Send</button>
                            </div>`
    document.body.appendChild(ProblemBox)
}

function CreateNewComment(){

    let body = document.getElementsByTagName("body")[0]
    let CommentTable = document.createElement("table")
    CommentTable.setAttribute("class", "CommentTable")

    let NewComment = document.createElement("tr")
    NewComment.setAttribute("class", "Comment")

    let UserCommentImage = document.createElement("td")
    UserCommentImage.setAttribute("class", "ProfileCommentPic")
    
    let UserImg = document.createElement("img")
    UserImg.setAttribute("src", "D:\emerald_axe.png")
    UserImg.setAttribute("class", "ProfileCommentPic")

    let UserCommentText = document.createElement("td")
    UserCommentText.setAttribute("class", "CommentText")
    
    let CommentText = document.getElementsByClassName("CommentText").value

    
    
    
    if(CommentText == "a"){
        alert("plz enter some thing to send an comment")
    }
    else{
        UserCommentText.innerHTML = CommentText
        UserCommentImage.appendChild(UserImg)
        NewComment.appendChild(UserCommentImage)
        NewComment.appendChild(UserCommentText)
        CommentTable.appendChild(NewComment)
        body.appendChild(CommentTable)
    }
}

