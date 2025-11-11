# Guide d'installation - Node.js requis

## ⚠️ Node.js n'est pas installé sur votre système

Pour lancer le site, vous devez d'abord installer Node.js. Voici plusieurs méthodes :

## Méthode 1 : Installation via le site officiel (RECOMMANDÉ - Le plus simple)

**⚠️ IMPORTANT pour macOS Big Sur (11.x) :** Assurez-vous de télécharger la version **ARM64** (Apple Silicon) ou **x64** selon votre processeur.

1. **Allez sur** : https://nodejs.org/
2. **Téléchargez** la version **LTS** (Long Term Support) - choisissez la version pour **macOS** (ARM64 si vous avez un Mac M1/M2, ou x64 pour Intel)
3. **Installez** le fichier `.pkg` téléchargé (double-clic)
4. **Redémarrez** votre terminal
5. **Vérifiez** l'installation :
   ```bash
   node --version
   npm --version
   ```
6. **Lancez** le serveur :
   ```bash
   cd /Users/balthazarbarbry/Parcel-site/geraldinebarbry
   npm install
   npm run dev
   ```

**Note :** Si vous avez une version de Node.js incompatible (erreur `dyld: Symbol not found`), désinstallez-la d'abord puis réinstallez une version compatible avec macOS 11.

## Méthode 2 : Installation via Homebrew (si vous avez Homebrew)

Si vous avez Homebrew installé :

```bash
brew install node
```

Puis :
```bash
cd /Users/balthazarbarbry/Parcel-site/geraldinebarbry
npm install
npm run dev
```

## Méthode 3 : Installation via nvm (Node Version Manager)

1. **Installez nvm** :
   ```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
   ```

2. **Rechargez votre terminal** ou exécutez :
   ```bash
   source ~/.zshrc
   ```

3. **Installez Node.js** :
   ```bash
   nvm install --lts
   nvm use --lts
   ```

4. **Vérifiez** :
   ```bash
   node --version
   ```

5. **Lancez** le serveur :
   ```bash
   cd /Users/balthazarbarbry/Parcel-site/geraldinebarbry
   npm install
   npm run dev
   ```

## Après l'installation de Node.js

Une fois Node.js installé, exécutez ces commandes dans le terminal :

```bash
# Aller dans le dossier du projet
cd /Users/balthazarbarbry/Parcel-site/geraldinebarbry

# Installer les dépendances (première fois uniquement)
npm install

# Lancer le serveur de développement
npm run dev
```

Le site sera alors accessible à l'adresse : **http://localhost:5173**

## Vérification rapide

Pour vérifier si Node.js est maintenant installé :

```bash
node --version
npm --version
```

Si ces commandes affichent des numéros de version, Node.js est installé correctement !

