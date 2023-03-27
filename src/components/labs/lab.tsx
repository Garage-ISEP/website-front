import { FC } from 'react';
import { ModelLabs } from './interfaces';
import { Props } from './interfaces';

const datasLabs = [
  {
    id: 0,
    name: "Cyber",
    image: "Cyber.png",
    description: "Ransomware, botnets, ddos, phishing, les attaques cyber évoluent tous les jours dans notre monde numérique. Le cyberlab est là pour les comprendre et les éviter. "
  },
  {
    id: 1,
    name: "Blockchain",
    image: "Blockchain.png",
    description: "La blockchain est la technologie du moment. Entre crypto, NFT et finance décentralisée, les rouages du monde de demain sont étudiés dans le Blockchain Lab.       "
  },
  {
    id: 2,
    name: "Maker",
    image: "MAKERV1.png",
    description: "Dans un monde connecté, nous avons de plus en plus besoin de robotique. A l'aide de l'automatisation et de la conception, le Maker Lab bâtit le futur.            "
  },
  {
    id: 3,
    name: "Virtual",
    image: "Virtual2.png",
    description: "La VR est une technologie d'avenir, entre ces applications pour le monde du jeu vidéo ou encore les cinémas 5D, le Virtual Lab se penche sur le futur lointain.   "
  },
  {
    id: 4,
    name: "IA",
    image: "IAV1.png",
    description: "La connaissance sans la sagesse, c'est l'intelligence artificielle. L'IA Lab accumule les connaissances et les exploite pour créer les intelligences artificielles de demain."
  },
  {
    id: 5,
    name: "Coder",
    image: "CODERV1.png",
    description: "A l'aide d'outils modernes et très performants, le Coder Lab transforme les idées et les projets en solutions concrètes en les codant avec différents langages de programmation."
  }
]


const Lab: FC<Props> = ({ image, name, description }) => {
  return (
    <div className="grid place-items-center p-2 sm:p-6 transition-all duration-150 bg-white rounded-lg shadow-xl ease hover:shadow-2xl">
      <div className="relative inline-flex items-center justify-center  h-14 overflow-hidden text-white rounded-full">
        <span className="text-2xl text-blue-900 font-bold">{name}</span>
      </div>
      <div className="mt-1 mb-6">
        <div className="flex justify-center">
          <img src={image} className="m-3 p-1" width={'180px'} height={'auto'}/>
        </div>
      </div>
      <div>
        <p className="m-2 text-center leading-6 text-white-500">
          {description}
        </p>
      </div>
    </div>
  );
};


export const AffichageLabs: FC = ({}) => {
  return (
    <section className="pb-10 ">
      <div className="grid place-items-center">
        <h1 className="mt-10 text-4xl font-bold">Les labs</h1>
        <div className="w-11/12 sm:w-9/12 2xl:w-8/12">
          <div className="grid gap-4 grid-cols-2 lg:grid-cols-3 lg:gap-8 last:col-start-2 col-start-1">
            {datasLabs.map((number: ModelLabs) => (
              <Lab
                image={number.image}
                name={number.name}
                description={number.description}
                key={number.id}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


