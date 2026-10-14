let btn=document.querySelector("button");

let inp=document.querySelector("input");

btn.addEventListener("click",()=>{
  addtask();
})

let tasks=document.querySelector(".tasks")
function addtask(){
    let p=document.createElement("p");
    p.innerText = inp.value;
    let cancel=document.createElement("i");
    cancel.className="fa-solid fa-circle-xmark"
    p.appendChild(cancel);

    tasks.appendChild(p);
    inp.value="";
}

tasks.addEventListener("click",(element)=>{

if(element.target.classList.contains("fa-circle-xmark")){
          element.target.parentElement.remove();
}
  
  
})