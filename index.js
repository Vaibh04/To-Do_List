const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const btn = document.querySelector("button");



btn.addEventListener("click",addTask);

function addTask()
{
    if(inputBox.value === '')
    {
        alert("You must write something.");
    }else{
        let li = document.createElement("li");
        li.textContent=inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.textContent = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value='';
    inputBox.focus();
    saveData();
};

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI")
    {
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN")
    {
        e.target.parentElement.remove();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML); //store the data in the local storage in our browser
};

function showTask()
{
    listContainer.innerHTML=localStorage.getItem("data");
}

showTask();