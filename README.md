# Site Géraldine Barbry - EVARS

Site web pour Géraldine Barbry, Conseillère conjugale et familiale.

## Prérequis

Ce projet nécessite Node.js (version 18 ou supérieure) et npm.

### Installation de Node.js

Si Node.js n'est pas installé sur votre système, voici plusieurs méthodes :

#### Option 1 : Via Homebrew (macOS)
```bash
brew install node
```

#### Option 2 : Via le site officiel
1. Allez sur https://nodejs.org/
2. Téléchargez la version LTS
3. Installez le fichier téléchargé

#### Option 3 : Via nvm (Node Version Manager)
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
source ~/.zshrc
nvm install --lts
nvm use --lts
```

## Installation

1. Installez les dépendances :
```bash
npm install
```

## Démarrage du serveur de développement

### Méthode 1 : Utiliser le script de démarrage
```bash
./start.sh
```

### Méthode 2 : Utiliser npm directement
```bash
npm run dev
```

Le site sera accessible à l'adresse : **http://localhost:5173**

## Fonctionnalités

- Site responsive avec navigation moderne
- Barre latérale avec captures d'écran (côté droit)
- Modal Calendly pour la prise de rendez-vous
- Sections : Qui suis-je, EVARS, Thématiques, Conférences, Outils, Contact

## Structure du projet

```
geraldinebarbry/
├── public/              # Fichiers statiques (images, etc.)
│   ├── screenshot1.png
│   └── screenshot2.png
├── src/
│   ├── App.tsx         # Composant principal
│   ├── components/     # Composants React
│   └── index.css      # Styles globaux
├── package.json
└── vite.config.ts     # Configuration Vite
```

## Commandes disponibles

- `npm run dev` : Lance le serveur de développement
- `npm run build` : Compile le projet pour la production
- `npm run preview` : Prévisualise la version de production


