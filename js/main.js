let item=document.querySelectorAll("ul li");
let feat_show=document.querySelector("ul .feat_show");
let comp_show=document.querySelector("ul  .comp_show")

item.forEach((e)=>{
    e.addEventListener("click",()=>{
        item.forEach((d)=>{
            d.classList.remove("active")
        })
        e.classList.add("active")
        e.children[0].children[0].classList.toggle("rotat")
    })
    
})