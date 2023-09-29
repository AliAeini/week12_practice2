let btns = document.querySelectorAll(".btn_show_modal")
let modal = document.querySelector(".modal_container")
let btns_container = document.querySelector(".btns_container")

btns.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        let modal_body = modal.querySelector(".modal_body")
        modal_body.innerHTML = btn.getAttribute("data_conetent_body")
        modal.style.display = "flex"
    })
    let close_modal = modal.querySelector(".close_modal")
    close_modal.addEventListener("click", ()=>{
        modal.style.display = "none"
    })
    let close_btn = modal.querySelector(".close_btn")
    close_btn.addEventListener("click", ()=>{
        modal.style.display = "none"
    })
})
document.addEventListener("click", (e)=>{
    if(e.target.id === "html"){
        modal.style.display = "none"
    }
    if(modal.style.display == "flex"){
        btns_container.style.filter = "grayscale(100%)"
        body.style.backgroundColor = "gray"
    }else{
        btns_container.style.filter = "none"
        body.style.backgroundColor = "unset"
    }
})
