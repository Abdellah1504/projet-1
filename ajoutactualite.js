
 //-------------
 const form = document.getElementById("newsform");
const titleinput = document.getElementById("titre");
const descriptioninput = document.getElementById("description");
const contenuinput = document.getElementById("contenu");



// Gestion de l'événement click sur le bouton "submit"   
   form.addEventListener('submit', async(e) => {
   e.preventDefault(); 

    const title = titleinput.value.trim();
    const description = descriptioninput.value.trim();
    const content = contenuinput.value.trim();
     const news = { title, description, content } ;

  
     try {
        await fetch ('http://localhost:3000/articles', {
            method: 'POST',
            headers: {"Content-Type": "application/json"}, 
            body: JSON.stringify(news)      
        });        
        
      window.location.href = 'blog.html' ;
          
    } catch(err) {
             alert('Erreur lors de la sauvegarde');
             console.error(err);
        
    }
            console.log ("news apres =",news);
 });

 


     