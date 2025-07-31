const burger = document.getElementById('burger');
const nav = document.getElementById('menu');

    burger.addEventListener('click' , () => {
        if (nav.style.display === 'block'){
            nav.style.display = 'none' ;
    } else {
        nav.style.display = 'block'  ;
    }
    });
        
   