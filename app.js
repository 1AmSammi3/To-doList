let input = document.querySelector(".input");
let listBox = document.querySelector("ul");
let list, flex, checked, content, discard;
let todoText = input.value;
function addNew(){
    if(input.value === ""){
        alert("Enter a task");
    }
    else{
        list = document.createElement("li");
        checked = document.createElement("span");
        content = document.createElement("span");
        discard = document.createElement("span");
        discard.innerHTML = "\u00d7";
        content.innerHTML = input.value;
        list.appendChild(checked);
        list.appendChild(content);
        list.appendChild(discard);
        listBox.appendChild(list);
        checked.setAttribute("class", "checked");
        content.setAttribute("class", "content");
        discard.setAttribute("class", "discard");
        checked.onclick = toggletodo;
        discard.onclick = remove;
    }
    input.value = "";
}

function toggletodo() {
   list = this.parentNode;
   list.classList.toggle("check");
   this.classList.toggle("check");
}

function remove(){
   list = this.parentNode;
   listBox.removeChild(list);
}
