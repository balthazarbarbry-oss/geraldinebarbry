# 📥 Guide d'installation de Node.js - Étapes détaillées

## Étape 1 : Télécharger Node.js

1. **Ouvrez votre navigateur** (Safari, Chrome, Firefox, etc.)

2. **Allez sur le site officiel** : 
   - **URL directe** : https://nodejs.org/
   - Ou recherchez "Node.js" sur Google

3. **Sur la page d'accueil**, vous verrez deux boutons :
   - **LTS** (Long Term Support) - **RECOMMANDÉ** ✅
   - Current (version actuelle)

4. **Cliquez sur le bouton LTS** (généralement en vert)

5. **Le téléchargement commence automatiquement**
   - Le fichier sera sauvegardé dans votre dossier **Téléchargements**
   - Le nom du fichier ressemblera à : `node-v20.x.x.pkg` ou `node-v18.x.x.pkg`

## Étape 2 : Trouver le fichier téléchargé

1. **Ouvrez le Finder** (icône du visage souriant dans le Dock)

2. **Cliquez sur "Téléchargements"** dans la barre latérale gauche
   - Ou appuyez sur `Cmd + Option + L` pour ouvrir directement le dossier Téléchargements

3. **Cherchez le fichier** qui commence par `node-v` et se termine par `.pkg`
   - Il devrait être en haut de la liste (fichier le plus récent)

## Étape 3 : Installer Node.js

1. **Double-cliquez sur le fichier `.pkg`**
   - Une fenêtre d'installation s'ouvre

2. **Suivez l'assistant d'installation** :
   - Cliquez sur "Continuer" à chaque étape
   - Lisez les informations affichées
   - Acceptez la licence si demandé

3. **Quand on vous demande votre mot de passe** :
   - Entrez le mot de passe administrateur de votre Mac
   - Cliquez sur "Installer le logiciel"

4. **Attendez la fin de l'installation**
   - Une barre de progression s'affiche
   - Cela prend généralement 1-2 minutes

5. **Cliquez sur "Fermer"** quand l'installation est terminée

## Étape 4 : Redémarrer le terminal

**IMPORTANT** : Vous devez fermer et rouvrir votre terminal pour que Node.js soit reconnu.

1. **Fermez complètement votre terminal** (Cmd + Q)
2. **Rouvrez le terminal** (Applications > Utilitaires > Terminal)

## Étape 5 : Vérifier l'installation

Dans le nouveau terminal, tapez ces commandes :

```bash
node --version
```

Vous devriez voir quelque chose comme : `v20.11.0` ou `v18.19.0`

```bash
npm --version
```

Vous devriez voir quelque chose comme : `10.2.4`

✅ **Si vous voyez des numéros de version, Node.js est correctement installé !**

## Étape 6 : Lancer votre site

Maintenant, vous pouvez lancer votre site :

```bash
cd /Users/balthazarbarbry/Parcel-site/geraldinebarbry
./start.sh
```

Le script va :
- ✅ Détecter Node.js
- ✅ Installer les dépendances automatiquement
- ✅ Lancer le serveur sur http://localhost:5173

## 🆘 Problèmes courants

### "node: command not found" après l'installation
- **Solution** : Fermez complètement votre terminal (Cmd + Q) et rouvrez-le

### Le fichier .pkg ne s'ouvre pas
- **Solution** : Clic droit sur le fichier > "Ouvrir" > "Ouvrir" (pour contourner la sécurité macOS)

### Erreur de permissions
- **Solution** : Assurez-vous d'entrer le bon mot de passe administrateur

## 📍 Emplacement du fichier après téléchargement

Le fichier `.pkg` sera généralement ici :
```
/Users/balthazarbarbry/Téléchargements/node-v20.x.x.pkg
```

Vous pouvez le voir dans le Finder en allant dans **Téléchargements**.


