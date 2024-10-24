let navbar=document.querySelector('nav');
let navLinks=document.querySelectorAll('nav .rightPart ul a');
let navLogo=document.querySelector('.navLogo');
let collapseBotton=document.querySelector('.collapseBotton');
let navList=document.querySelector('.navList');
let leftArrow=document.querySelector('.fa-arrow-left')

window.addEventListener('scroll' , ()=>{
    if(window.scrollY>0){
        navbar.classList.add('bg-white');
        navLinks.forEach(el=>el.style.color='black');
        navLogo.innerHTML=' <img class="w-50" src="./Bakery_images/images/bakery-color.png" alt="">';

    }
    else{
        navbar.classList.remove('bg-white');
        navLinks.forEach(el=>el.style.color='white');
        navLogo.innerHTML=' <img class="w-50" src="./Bakery_images/images/bakery-light-1.png" alt="">';
    }

    
});
collapseBotton.addEventListener('click',()=>{
    navList.classList.toggle('start-0');
});
leftArrow.addEventListener('click',()=>{
    navList.classList.remove('start-0')
})