
// navbar script start ......................

let nav = document.querySelector('.navbar');
let menu = document.querySelector('.menubar');
let closebar = document.querySelector('.closebar');

menu.addEventListener('click', () => {
    nav.classList.add('active');

})

closebar.addEventListener('click', () => {
    nav.classList.remove('active');

})  

// navbar script end .......................

// sproduct details script start ............

let mainImg = document.querySelector('.mainImg');
let smallImg = document.querySelectorAll('.small-img');

smallImg[0].onclick = () =>{
    mainImg.src = smallImg[0].src;
}
smallImg[1].onclick = () =>{
    mainImg.src = smallImg[1].src;
}
smallImg[2].onclick = () =>{
    mainImg.src = smallImg[2].src;
}
smallImg[3].onclick = () =>{
    mainImg.src = smallImg[3].src;
}
smallImg[4].onclick = () =>{
    mainImg.src = smallImg[4].src;  
}

// sproduct details script end ................
