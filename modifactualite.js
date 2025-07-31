
const titleinput = document.getElementById("titre");
const descriptioninput = document.getElementById("description");
const contenuinput = document.getElementById("contenu");

const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    console.log("id = " , id);

async function showNews(){   

    const response =  await  fetch('http://localhost:3000/articles' +'/' + id);
    const news = await response.json();

    console.log ("news =",news);
    console.log ("titles =",news.title);

     titleinput.value = news.title;
      descriptioninput.value = news.description;
      contenuinput.value = news.content;}
showNews();

const form = document.getElementById("newsform");
   
  
// Gestion de l'événement click sur le bouton "button-sauvegarde"
let majBouton = document.getElementById('buttonmaj');
 majBouton.addEventListener("click", async(e) => {
    e.preventDefault();

        const title = titleinput.value.trim();
        const description = descriptioninput.value.trim();
        const content = contenuinput.value.trim();

        const news = { title, description, content } ;

    console.log ("news avant =",news);

  try {
        await fetch ('http://localhost:3000/articles' +'/' + id, {
            method: 'PUT',
            headers: {"Content-Type": "application/json"}, 
            body: JSON.stringify(news) 
      
        });
        
            window.location.href = 'blog.html';
            console.log ("titles apres modification  =",news.title);
    
    } catch(err) {
             alert('Erreur lors de la sauvegarde');
             console.error(err);
        
    }
            console.log ("news apres =",news);

})




async function fetcNews() {
    try{
       const res = await fetch('http://localhost:3000/articles') ;
        const news = await res.json();
        console.log(news);
       
       } catch(err) {
        alert('Erreur à la recuperation des news ');
        console.error(err);
       }
    }
function renderNews(news){

    const newsLists = document.getElementById('news-list') ;
    const newsElement = document.getElementById('article');
    newsLists.innerHTML = '';
    news.forEach(() => {
        article.innerHTML = `<strong>${newsElement.title}<strong> - ${newsElement.description}  <strong> - ${newsElement.content}`  
        
    }); 
}


//supprerssion actualité

let SupBouton = document.getElementById("buttonsup");

  // Gestion de l'événement click sur le bouton "button-sup"
    SupBouton.addEventListener("click", async(e) => {
  e.preventDefault();
        await fetch ('http://localhost:3000/articles' + '/' + id, {
             
            method: 'DELETE'  
            
             
       });  
           // console.log ("id apres=",news.id);   
           window.location.href = 'blog.html';
 });