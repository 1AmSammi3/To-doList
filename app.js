let input = document.querySelector(".input");
let listBox = document.querySelector("ul");

function addNew(){
    if(input.value === ""){
        alert("Enter a task");
    }
    else{
        let list = document.createElement("li");
        let flex = document.createElement("div");
        let checked = document.createElement("span");
        let content = document.createElement("span");
        let discard = document.createElement("span");
        discard.innerHTML = "\u00d7";
        content.innerHTML = input.value;
        flex.appendChild(checked);
        flex.appendChild(content);
        flex.appendChild(discard);
        list.appendChild(flex);
        listBox.appendChild(list);
        flex.setAtrribute("class", "flex");
        checked.setAtrribute("class", "checked");
        content.setAtrribute("class", "content");
        discard.setAtrribute("class", "discard");
    }
    input.value = "";
}

listBox.addEventListener("click", function e(){
    if(e.target.className === "CHECKED"){
        e.target.innerHTML = "✔️";
        content.classList.toggle("checked");
    }
    else if(e.target.className === "DISCARD"){
        e.target.parentElement.remove();
    }
},false);
