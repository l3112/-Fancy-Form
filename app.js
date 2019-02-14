function animatedForm(){
const arrows = document.querySelectorAll(".fa-arrow-down");
//the image of arrow down
arrows.forEach(arrow => {
    arrow.addEventListener("click", () => {
        const input = arrow.previousElementSibling;
        const parent = arrow.parentElement;
        const nextSlide = parent.nextElementSibling;
// goes to email form

// validation check

if(input.type === "text" && validateUser(input)){
nextSlide(parent, nextForm);
} else if(input.type === 'email' && validateEmail(input)){
    nextSlide(parent, nextForm)
} else if(input.type === 'password' && validateUser(input)){
    nextSlide(parent, nextForm)
}
    });
});

}

function validateUser(user){
    if(user.value.length < 6){
        console.log('You need more characters');
        error('rgb(189,84,87');
    }
        else {
            error('rgb(87, 231, 106)');
            return true;
        }
}

function validateEmail(email){
    const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(validation.test (email.value)){
        return true;
    
    }
}

function nextSlide(parent, nextForm){
    parent.classList.add('inactive');
    parent.classList.remove('active');
    nextForm.classList.add('active');
}

function error(color){
    document.body.style.backgroundColor = color;

}


animatedForm();