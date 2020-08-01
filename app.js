const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        navLinks.forEach((link, index) => {
            if (link.getElementsByClassName.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/5 + 0.3}s`;
            }
        });
        burger.classList.toggle('toggle');
    });

};

navSlide();


const notifyBTN = document.querySelector('button.btn-cta');
const error = document.querySelector('.error');
const emailInput = document.querySelector('input.email');
const myForm = document.querySelector('form');

notifyBTN.addEventListener('click', validation);
let validError = false;

function validation(e) {

    e.preventDefault();
    error.classList.add('hide');
    emailInput.style.borderColor = '#ddd';
    if (emailInput.value.length == 0) {
        addError(emailInput, 'Required Field');
    } else {
        let exp = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        let result = exp.test(emailInput.value);
        if (!result) {
            addError(emailInput, 'Please provide a valid email address');
            validError = true;
        } else {
            validError = false;
            console.log(validError);
        }
    }
    if (!validError) {
        console.log("Submit");
        myForm.submit();
    }

}

function addError(input, mes) {
    let temp = input.nextElementSibling;
    temp.classList.remove('hide');
    temp.textContent = mes;
    input.style.borderColor = 'red';
    input.focus();
}