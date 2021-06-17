const email = document.querySelector("#email");
const tombol = document.querySelector("button");
const label = document.querySelector("label")
const label2 = document.querySelector(".label_dekstop")
const form = document.querySelector("form")

tombol.addEventListener('click', e => {
    e.preventDefault();
    console.log(email.value)
    console.log(window.innerWidth)
    
    if(window.innerWidth>1000) {
        label.style.display = "none"
        if(validateEmail(email.value) === false){
            email.style.border = "1px solid red"
            label2.classList.add("error")
            label2.style.display = "block"
            tombol.classList.add("error_button")
        }
        else {
            email.style.border = null
            label2.classList.remove("error")
            label2.style.display = "none"
        }
    }
    if (window.innerWidth>1000){
        label2.style.display = "none"
        if(validateEmail(email.value) === false){
            email.style.border = "1px solid red"
            label.classList.add("error")
            label.style.display = "block"
            tombol.classList.add("error_button")
        }
        else {
            email.style.border = null
            label.classList.remove("error")
            label.style.display = "none"
            tombol.classList.remove("error_button")
        }
    }
})

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}