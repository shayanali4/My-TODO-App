var myUl= document.getElementById('myUL')

// var x = document.getElementById('new-tasks').value;
// if (x == "") {
//   alert("Name must be filled out");
//   return false;
// }
// else{

// }

function addTask() {
    var newTask=document.getElementById('new-tasks')
    var list =document.createElement("li");
    var text =document.createTextNode(newTask.value);
    var delBtn = document.createElement("button");
    var editBtn = document.createElement("button");
    var span =document.createElement("span");
    var delText =document.createTextNode("Delete");
    var editText =document.createTextNode("Edit");

    list.appendChild(text)
    myUl.appendChild(list)

    editBtn.setAttribute("class", "btn btn-light");
    delBtn.setAttribute("class", "btn btn-light");
    editBtn.setAttribute("type", "button");
    delBtn.setAttribute("type", "button");
    editBtn.setAttribute("onclick", "editList(this)");
    delBtn.setAttribute("onclick", "deleteList(this)");

    editBtn.appendChild(editText)
    delBtn.appendChild(delText)

    span.appendChild(editBtn)
    span.appendChild(delBtn)

    list.appendChild(span)

    document.getElementById('deleteAll').disabled=false;
    newTask.value="";
}

function deleteList(e) {
    e.parentElement.parentElement.remove();
}

function editList(e){
    var f =e.parentElement.parentElement.firstChild.nodeValue;
    var newText=prompt("Enter New Task",f);
    e.parentElement.parentElement.firstChild.nodeValue=newText;
}

function deleteAll(e){
    myUl.innerHTML="";
    document.getElementById('deleteAll').disabled=true;

}