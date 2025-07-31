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
    news.forEach(newsElement => {
        article.innerHTML = `<strong>${newsElement.title}<strong> - ${newsElement.description}  <strong> - ${newsElement.content}`  

        
    }); 
}
    

     
    

let SupBouton = document.getElementById("buttonsup");

  // Gestion de l'événement click sur le bouton "button-sup"
    SupBouton.addEventListener("click", async() => {
  
        await fetch ('http://localhost:3000/articles' + '/' + id, {
             
            method: 'DELETE'  
            
             
       });  
           // console.log ("id apres=",news.id);   
           fetcNews() ; 

 });
