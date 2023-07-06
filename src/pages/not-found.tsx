import { Link } from "react-router-dom";


const PageNotFound= () =>{
    return(
        <div>
            <h1>Désolé, Garage n'a pas réussi à trouver ta page!!</h1>
            <p>Voici un lien pour retourner à l'accueil</p> 
            <Link to='/'>Page d'accueil</Link>
            <Link to='/silicon-days'>Silicon days</Link>
            
        </div>
        
    )
}

export default PageNotFound