import React from "react";


const PageNotFound= () =>{
    return(
        <div>
            <h1>Désolé, Garage n'a pas réussi à trouver ta page!!</h1>
            <p>Voici un lien pour retourner à l'accueil</p> 
            <a href='/'>Page d'accueil</a>
            <p></p>
            <a href='/silicon-days'>Silicon days</a>
        </div>
        
    )
}

export default PageNotFound