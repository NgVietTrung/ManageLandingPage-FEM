const input = document.querySelector(".footer-input");
const btn = document.querySelector(".footer-btn");
const err = document.querySelector(".footer-error");
let validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

btn.addEventListener("click", (e) => {
    e.preventDefault();
    if(input.value === "" || validateEmail(input.value) === false){
        err.style.display = "block";
        input.classList.add("error-mes");
        input.placeholder = "viettrung@mail";
    }
    else {
        input.classList.remove("error-mes");
        err.style.display = "none";
        input.placeholder = "Please insert a valid email";
    }
});