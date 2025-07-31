

async function fetchnews(){
//Récupération des actualités eventuellement stockées dans le localStorage
let news = window.localStorage.getItem('news');  // getItem(clé)

console.log ("news =",news);

//if (news === null){  ***
    // Récupération des news depuis l'API
    const reponse =  await  fetch('http://localhost:3000/articles');
      news =  await reponse.json();
  console.log ("reponse =",reponse);
console.log ("news =",news);
 // le fetch pour appeller l'API
    
    // Transformation des news en JSON ( a laide de setItem)
    const valeurnews = JSON.stringify(news);
    // Stockage des informations dans le localStorage
    window.localStorage.setItem("news", valeurnews);  //setItem(clé , valeur a enregistrer)
//  si il y en a on les reconstitue en memoire avec  JSON.parse

//}else{  ***
//    news = JSON.parse(news);  ***
//    console.log ("news  parse=",news);  ***
//}         ***
 genererNews(news);
 }   
fetchnews()

function genererNews(news){
    for (let i = 0; i < news.length; i++ ) {
      const actualité = news[i];

    //Recuparation de l'element du DOM qui acceuillera les news
    const sectionnews = document.querySelector("#news-list");
    //création d'une balise dedié a une  actualité
    const newsElement = document.createElement("article");
    newsElement.classList.add('gr-back');
        newsElement.classList.add('gr-marge');
     //newsElement.style.
      newsElement.classList.add('col-sm-50');
      newsElement.classList.add('mt-50');   
    
    // Création des balises
    
    const titreElement = document.createElement("h2");  
    //titreElement.style.textAlign = "center";
    titreElement.innerText = actualité.title;    // innerText est le contenu textuel rendu
    titreElement.classList.add('taille30');
    titreElement.classList.add('text-white');
    titreElement.classList.add('col-sm-50');    
  
   
    const descriptionElement = document.createElement("p");
    descriptionElement.style.textAlign = "center";
    descriptionElement.innerText = actualité.description ?? "Pas de description pour le moment."; //   ?? Nullish   s il y rien on met  "Pas de description pour le moment."
    descriptionElement.classList.add('text-white');
    descriptionElement.classList.add('col-sm-50');
     

    const contenuElement = document.createElement("p");
    contenuElement.style.textAlign = "center";
    contenuElement.innerText = actualité.content ?? "Pas de contenu pour le moment."; //   ?? Nullish   s il y rien on met  "Pas de description pour le moment."
    contenuElement.classList.add('text-white');
    contenuElement.classList.add('col-sm-50');
    

    const boutonElement = document.createElement("div");
    boutonElement.classList.add('row');
    
    const dateElement = document.createElement("p");   
    dateElement.innerText =  "publié le " + actualité.publicationDate ?? "Pas de contenu pour le moment."; //   ?? Nullish   s il y rien on met  "Pas de description pour le moment."
     dateElement.classList.add('col-67');
     dateElement.classList.add('col-sm-50');
    dateElement.classList.add('text-white');  


    const supprimerBouton = document.createElement("button");
    supprimerBouton.dataset.id = actualité.id
    supprimerBouton.textContent = "supprimer"; // text dans le bouton Avis
    supprimerBouton.classList.add('button-supr');
    supprimerBouton.classList.add('col-15');
    supprimerBouton.classList.add('col-sm-50');    
    
       if    (!localStorage.getItem('userToken')) {
     
        supprimerBouton.style.display = "none"
      }



    const modifierBouton = document.createElement("button");
    modifierBouton.dataset.id = actualité.id;
    modifierBouton.textContent = "modifier"; // text dans le bouton modifier
    modifierBouton.classList.add('button-modif'); 
    modifierBouton.classList.add('col-15');
    modifierBouton.classList.add('col-sm-50');
      
        if    (!localStorage.getItem('userToken')) {
     
       modifierBouton.style.display = "none"
         }
        

    // on rattache la balise newsElement a la section sectionnews
    sectionnews.appendChild(newsElement);
    // on rattache les balises boutons a boutonElement 
    boutonElement.appendChild(dateElement);
    boutonElement.appendChild(modifierBouton);
    boutonElement.appendChild(supprimerBouton);
    //Rattachement de nos balises au DOM 
    newsElement.appendChild(titreElement);
    newsElement.appendChild(descriptionElement);
    newsElement.appendChild(contenuElement); 
    newsElement.appendChild(boutonElement);
   
      newsElement.appendChild(dateElement);
     newsElement.appendChild(boutonElement);  


     modifierBouton.addEventListener ("click", () => {

     window.location.href = 'modifActualité.html?id=' + actualité.id ;    
    
   })

     supprimerBouton.addEventListener ("click", () => {

     window.location.href = 'modifActualité.html?id=' + actualité.id ;   
   
   
})
       
}
}
   
























