let inpField = document.querySelector('.search-bar');
let searchIco = document.querySelector('.search-icon');

searchIco.addEventListener('click' , ()=>{
    inpField.classList.toggle('active');
})