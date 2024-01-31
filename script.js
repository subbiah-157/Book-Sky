var popupoverlay=document.querySelector(".pop-overlay");
var popupbox=document.querySelector(".popup-box");
var addbutton=document.getElementById("add-popup");
addbutton.addEventListener("click",function(){
    popupoverlay.style.display="block";
    popupbox.style.display="block";
})

var cancelpopup=document.getElementById("cancel-popup");
cancelpopup.addEventListener("click",function(event){
    event.preventDefault();
    popupoverlay.style.display="none";
    popupbox.style.display="none";
})

var container = document.querySelector(".container");
var addbook=document.getElementById("addbook");
var booktitle=document.getElementById("Book-title");
var bookauthor=document.getElementById("Book-author");
var bookdescription=document.getElementById("description");

addbook.addEventListener("click",function(){
    event.preventDefault()
    var div=document.createElement("div");
    div.setAttribute("class","book-container");
    div.innerHTML=`<h2>${addbook.value}</h2>
    <h5>${bookauthor.value}</h5>
    <p>${bookdescription.value}</p>
    <button onclick="deletebook(event)">Delete</button>`
    container.append(div);
    popupoverlay.style.display="none";
    popupbox.style.display="none";
})

function deletebook(event){
    event.target.parentElement.remove();
}