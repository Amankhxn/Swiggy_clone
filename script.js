// <-------------------------------Login page-------------------------------------->


let login_btn = document.getElementById("LOGIN");
let Login_Parent = document.querySelector(".nav-list");
let Login_closetbn = document.querySelector(".login-closebtn");

login_btn.addEventListener('click',() =>{
    Login_Parent.classList.add("active-3");
})

Login_closetbn.addEventListener('click',() => {
    Login_Parent.classList.remove("active-3");
})

// ---------------------------Other Button-----------------------------------------
let location_other = document.querySelector(".location");
let Other = document.querySelector(".name");
let icon = document.querySelector(".other-closebtn");

Other.addEventListener('click',() => {
  location_other.classList.add('active-2');
})

icon.addEventListener('click',() => {
    location_other.classList.remove('active-2');
})


// <---------------------------------Filter button------------------------------------------->

let Filter_btn = document.querySelector(".link-filter");
let Filter_Parent = document.querySelector(".nav-list-2");
let Filter_closebtn = document.querySelector(".other-closebtn-2");

Filter_btn.addEventListener('click',() =>{
    Filter_Parent.classList.add('active');
})

Filter_closebtn.addEventListener('click',() => {
    Filter_Parent.classList.remove('active');
})

// <----------------------------------Cart HOver------------------------------------------>

let CART = document.getElementById("Cart");
let main_Card = document.querySelector(".mainCart");

CART.addEventListener('mouseover',() => {
    main_Card.style.display='block';
})
CART.addEventListener('mouseout',() => {
    main_Card.style.display='none';
})

// <-------------------------Sign In Content Change--------------------->


let content = document.querySelector(".login-para-2");
let Login_info = document.querySelector(".login-head");
let login_button =document.querySelector(".login-form-btn");

let inputName = document.querySelector(".Input-name");
let inputEmail = document.querySelector(".Input-Email");


content.addEventListener('click', () => {
    Login_info.innerHTML = "Sign Up";
    login_button.innerHTML = "Continue";
    inputName.style.display ="block";
    inputEmail.style.display = "block";
    content.innerHTML = "Login in Your account"; 

    
})

Login_info.addEventListener('click',() => {
    Login_info.innerHTML = "Login";
    login_button.innerHTML = "Login";
    inputName.style.display ="none";
    inputEmail.style.display = "none";
    content.innerHTML = "create an account"; 

})




// <----------------------------Help Content----------------------------------------------------->

let hidden_para = document.querySelector(".help-right-content");
let show_para = document.querySelector(".help-right-hidden-content");

hidden_para.addEventListener('click', () => {
  show_para.style.display = 'block';
  console.log('hello');
})