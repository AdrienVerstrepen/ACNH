# A.C.N.H.
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![API : Nookipedia](https://img.shields.io/badge/API-Nookipedia-green.svg)

## 🇫🇷 Présentation du projet

L'**ACNH** ou l'**Archive des Collectibles Nouvellemment Homologués** est une plateforme ayant pour but de donner un accès rapide à son avancement sur la complétion du jeu *Animal Crossing New Horizons*.

Ici vous pourrez maintenir à jour une liste de souhait, qui contient les éléments que vous cherchez actuellement à obtenir dans le jeu : 
- 🐡 Poissons
- 🦴 Fossiles
- 🎨 Œuvres d'art
- 🐞 Insectes
- 🤖 Gyroïdes
- 🦐 Créatures marines

## 🇬🇧 Project Overview

**ACNH** or the Archive of Newly Homologated Collectibles is a plateform designed to provide quick access to your completion progress in *Animal Crossing New Horizons*.

With this tool, you will be able to keep track of the items you are currently chasing down : 
- 🐡 Fish
- 🦴 Fossils
- 🎨 Art pieces
- 🐞 Bugs
- 🤖 Gyroids
- 🦐 Sea creatures

### Stack
* **Front-end** : Vue.js 
* **Back-end/API** : Nookipedia REST API
* **Deployment** : Docker and Azure

## Déploiement / Deployment

### Local

First, get the source code : 
```bash
git clone https://github.com/AdrienVerstrepen/ACNH.git
```

Then, install the dependancies : 
```bash
cd ./ACNH
npm i 
```

Once the deps are installed, configure your .env with your [Nookipedia API](https://api.nookipedia.com/) key.

After that, you'll be ready to go :
```bash
npm run build
```

Once the previous script has ended, please enter : 
```bash
npm run preview
```

### Possibilités d'ouvertures / Future Improvments

L'ajout des villageois et des disponibilités temporelles des poissons, insectes, créature marines pourrait être une extension à ce projet.

## Difficultés rencontrées / Difficulties met

L'API Nookipedia, bien que très riche et utile, manque de disponibilité. Qui plus est, les données ne sont pas standardisées ce qui cause des problèmes pour la gestion des données.

La variété des éléments rencontré a rendu difficile la création de composants. Au départ, l'approche suivie était un composant carte par élément (Gyroide, Poisson, Insecte, ...). 

L'approche finalement réalisée a été de tout standardiser puis de réaliser des opérations sur les différentes listes portant les éléments standards.

Cela permet une réutilisation plus propre des composants et permet de réduire le boilerplate.

## 🏷️ Credits

A huge thanks to [Nookipedia API](https://api.nookipedia.com/) and [Nookipedia Wiki](https://nookipedia.com/wiki/Main_Page) for allowing me to use their API and their enormous database of assets, informations and details about the Animal Crossing franchise.

This project is purely for studying how to build front-end applications using a RESTFUL API; it is not affiliated with Nintendo by any means.

*Animal Crossing: New Horizons* and all the assets (images, names, sounds, characters) of the Animal Crossing Franchise are registered trademarks and the sole property of Nintendo Co., Ltd.

This project has no commercial use and is intended for educational and personnal usage purposes.

The source code of this whole project is available under the [MIT License](LICENSE).