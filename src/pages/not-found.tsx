import React from "react";



const PageNotFound= () =>{
    return(
        <div className="grid grid-cols-3 gap-4 items-center">
                <div className="block text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                    <h1 className="text-end">Désolé, Garage n'a pas réussi à trouver ta page!!</h1>
                </div>
                <div className="justify-self-center">
                    <img  src="Garage-logo.svg"></img>
                </div>
                <ul className="list-inside list-disc text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                    <h1 className="underline font-bold">Différents liens:</h1>
                    <li className="underline"><a href='/' className="inline-block">Page d'accueil</a></li>
                    <li className="underline"><a href='/silicon-days' className="inline-block">Silicon days</a></li>
                </ul>
            
        </div>
    )
}

export default PageNotFound

