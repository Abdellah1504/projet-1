
console.log ("debut ");
 /**
 * Cette fonction prend un email en paramètre et valide qu'il est au bon format. 
 * @param {string} email 
 * @throws {Error}
 */
function validerEmail(email) {
    let emailRegExp = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+")
    const message =  document.getElementById("resultmail")


    if (!emailRegExp.test(email))  {
        //throw new Error("L'email n'est pas valide.")
        message.style.color="red"
        message.innerHTML="Email non valide"
          console.log ("non valide");
          return false
    }
    else
     {
        message.style.color="green"
        message.innerHTML="Email  valide"
          console.log ("valide");
          return true
    }    
    }  
     

// Exemple de fonction pour demander un token au serveur et l'enregistrer dans localStorage
async function obtenirToken(mdp, email) {
    try {
        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                password: mdp,
                email: email
            })
        });

        if (response.ok) {
            const data = await response.json();
            const token = data.token;
             console.log ("response.ok");
            console.log('Token reçu :', token);

            // Enregistrement du token dans localStorage
            localStorage.setItem('userToken', token);
            console.log('Token stocké dans localStorage');
            window.location.href= "blog.html"
        } else {
            console.error('Erreur lors de la demande de token:', response.status);
            console.log ("response.notok");
        }
    } catch (error) {
        console.error('Erreur de réseau:', error);
    }
}
 // Gestion de l'événement submit  
document.addEventListener("DOMContentLoaded", function () {

 let btnsubmit = document.getElementById("buttonconect");


 if (btnsubmit) {
btnsubmit.addEventListener("click", (e) => {
    e.preventDefault();  

    let baliseEmail = document.getElementById("email")
        let email = baliseEmail.value

       if ( validerEmail(email)  ) {
            console.log ("validerEmail") 

        let balisemdp= document.getElementById("password")
        let mdp    = balisemdp.value
       // ajoutListenerEnvoyermail() 
         obtenirToken(mdp, email) 
         console.log ("ajoutListenerEnvoyermail");
        
      }   
   
    
});
 }
});

console.log ("fin ");










