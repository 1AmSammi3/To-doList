let input = document.querySelector(".input");
let listBox = document.querySelector("ul");
let list, flex, checked, content, discard;

function addNew(){
    if(input.value === ""){
        alert("Enter a task");
    }
    else{
        list = document.createElement("li");
        flex = document.createElement("div");
        checked = document.createElement("span");
        content = document.createElement("span");
        discard = document.createElement("span");
        discard.innerHTML = "\u00d7";
        content.innerHTML = input.value;
        flex.appendChild(checked);
        flex.appendChild(content);
        flex.appendChild(discard);        
        list.appendChild(flex);
        listBox.appendChild(list);
        flex.setAttribute("class", "flex");
        checked.setAttribute("class", "checked");
        content.setAttribute("class", "content");
        discard.setAttribute("class", "discard");
        checked.setAttribute("onclick", "check()");
        discard.setAttribute("onclick", "discarded()");
    }
    input.value = "";
}

function check() {
      if(flex) {
         checked.nextElementSibling.classList.toggle("checked");
   checked.classList.toggle("check");
      }
}

function  discarded(){
   list.remove();
}

//discard.addEventListener("click", discarded);

/*flex.addEventListener("click", function e(){
    if(e.target.tagName === "SPAN"){
        e.target.classList.toggle("checked");
    }
    if(e.target.innerText === "\u00d7"){
        e.target.parentElement.parentElement.remove();
    }
}, false);*/
