const prev = document.getElementById('prev');
const next = document.getElementById('next');
const slides = document.getElementById('slides')
let slide = 0 ;

prev.addEventListener('click' , () =>{
console.log('click à gauche');
slide = slide - 1 ;
changerslide ();
})

next.addEventListener('click' , () =>{
    console.log('click à droite');
    slide = slide + 1 ;
    changerslide ();
    })

    function changerslide () {

      slides.style.transform = 'translateX (-' + (slide*100) + '%)' ;
    }