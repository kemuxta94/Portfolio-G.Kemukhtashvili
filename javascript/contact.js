const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');


openMenu.addEventListener('click', show)
closeMenu.addEventListener('click', close)

function show() {
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}

function close() {
    mainMenu.style.top = '-100%'
}


const allForm = document.querySelectorAll('.form input, .form textarea');

for(let form of allForm) {
    form.addEventListener('input', function() {
        if(this.checkValidity()) {
            this.classList.add('valid');
            this.classList.remove('invalid');
        }else {
            this.classList.add('invalid');
            this.classList.remove('valid');
        }

        if(this.value === '') {
            this.classList.remove('valid');
            this.classList.remove('invalid')
        }
    })
}