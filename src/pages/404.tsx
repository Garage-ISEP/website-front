import React, { useState, useEffect } from 'react';

//mettre erreur 404 en texte
const PageNotFound= () =>{
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
        const windowWidth = window.innerWidth;
        const mobileThreshold = 768;

        setIsMobile(windowWidth < mobileThreshold);
        };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
    
    if (isMobile) {
        return(
            <div className="grid grid-rows-2  items-center">
                <div className="block ">
                    <h1 className="text-center text-3xl font-bold mb-5">Erreur 404</h1>
                    <h1 className="text-center text-3xl mb-5">Désolé, Garage n'a pas réussi à trouver ta page!!</h1>
                    <h1 className="text-center underline font-bold">Différents liens:</h1>
                    <ul className="text-center list-inside list-disc text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
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
                        <h1 className="mb-5 font-bold">Erreur 404</h1>
                        <h1 className="mb-5">Désolé, Garage n'a pas réussi à trouver ta page!!</h1>
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

