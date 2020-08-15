function submit() {
    let usercomment = document.querySelector("#id1").value;
    let clonevalue = document.querySelector("#place").cloneNode(true);
    clonevalue.innerHTML = usercomment;

    let commentdiv = document.querySelector("#fetch");
    commentdiv.insertBefore(clonevalue, commentdiv.firstChild)

    document.querySelector("#id1").value = "";


}

