var count = 0;
function likehere() {
    count++;
    document.querySelector("#inputid1").innerHTML = "Like" + count;
}


function commenthere() {

    //read the value from input
    let userComment = document.querySelector("#inputid2").value;

    //cloning of commentcontainer
    let newElement = document.querySelector("#commentContainer").cloneNode(true);

    //remove id
    newElement.removeAttribute("id");

    //for visibility of new element
    newElement.style.visibility = "visible";

    //inside clone element we put usercomment
    newElement.children[0].innerHTML = userComment;

    let commentBox = document.querySelector("#mainbox");
    commentBox.insertBefore(newElement, commentBox.firstChild);

    //clean input box
    document.querySelector("#inputid2").value = "";
}


function deletehere(btnElement) {

    btnElement.parentElement.parentElement.remove();

}