import React from "react";
import { isMobile } from 'react-device-detect';

//mettre erreur 404 en texte
const PageNotFound= () =>{
    if (isMobile) {
        return(
            <div className="grid grid-rows-2 gap-4 items-center">
                <div className="block text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                    <h1 className="text-end">Désolé, Garage n'a pas réussi à trouver ta page!!</h1>
                    <ul className="list-inside list-disc text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                        <h1 className="underline font-bold">Différents liens:</h1>
                        <li className="underline"><a href='/' className="inline-block">Page d'accueil</a></li>
                        <li className="underline"><a href='/silicon-days' className="inline-block">Silicon days</a></li>
                    </ul>
                </div>
                <div className="justify-self-center">
                    <img  src="Garage-logo.svg"></img>
                </div>             
            </div>
        )
        }else{
            return(
        <div className="grid grid-cols-3 gap-4 items-center">
                <div>
                    <img src="IArobot-removebg-preview (1).png"/>
                </div>
                <div className="justify-self-center">
                    <img  src="Garage-logo.svg"></img>
                </div>
                <div className="grid grid-rows-2 block text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                    <div>
                        <h1>Désolé, Garage n'a pas réussi à trouver ta page!!</h1>
                    </div>
                    <ul className="list-inside list-disc text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                        <h1 className="">Différents liens:</h1>
                        <li className="underline"><a href='/' className="inline-block">Page d'accueil</a></li>
                        <li className="underline"><a href='/silicon-days' className="inline-block">Silicon days</a></li>
                    </ul>
                </div>
            
        </div>
            )
        }
    
}

export default PageNotFound

