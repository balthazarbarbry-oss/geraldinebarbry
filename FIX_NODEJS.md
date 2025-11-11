# 🔧 Résolution du problème de compatibilité Node.js

## Problème détecté

Vous avez une version de Node.js installée dans `/usr/local/bin/node` qui est **incompatible** avec macOS Big Sur (11.0.1). Cette version a été compilée pour macOS 13.5 et ne fonctionne pas sur votre système.

## Solution : Désinstaller et réinstaller Node.js

### Étape 1 : Désinstaller l'ancienne version

Exécutez ces commandes dans le terminal :

```bash
# Supprimer les fichiers Node.js
sudo rm -rf /usr/local/bin/node
sudo rm -rf /usr/local/bin/npm
sudo rm -rf /usr/local/bin/npx
sudo rm -rf /usr/local/lib/node_modules
sudo rm -rf /usr/local/include/node
sudo rm -rf /usr/local/share/man/man1/node.1
sudo rm -rf /usr/local/share/man/man1/npm.1
sudo rm -rf /usr/local/share/systemtap/tapset/node.stp
```

### Étape 2 : Installer une version compatible

1. **Allez sur** : https://nodejs.org/
2. **Téléchargez** la version **LTS v18.x ou v20.x** pour **macOS ARM64** (si vous avez un Mac M1/M2) ou **x64** (si Intel)
3. **Installez** le fichier `.pkg` téléchargé
4. **Redémarrez** votre terminal complètement (fermez et rouvrez-le)

### Étape 3 : Vérifier l'installation

```bash
node --version
npm --version
```

Vous devriez voir des numéros de version (par exemple : v18.20.0 et 10.2.0)

### Étape 4 : Lancer le site

```bash
cd /Users/balthazarbarbry/Parcel-site/geraldinebarbry
./start.sh
```

## Alternative : Utiliser nvm (Node Version Manager)

Si vous préférez utiliser nvm pour gérer plusieurs versions de Node.js :

1. **Installez nvm** (déjà fait si vous avez exécuté les commandes précédentes) :
   ```bash
   export NVM_DIR="$HOME/.nvm"
   [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
   ```

2. **Ajoutez nvm à votre shell** (ajoutez ces lignes à `~/.zshrc`) :
   ```bash
   export NVM_DIR="$HOME/.nvm"
   [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
   ```

3. **Installez Node.js via nvm** :
   ```bash
   nvm install 18
   nvm use 18
   ```

4. **Vérifiez** :
   ```bash
   node --version
   ```

5. **Lancez le site** :
   ```bash
   cd /Users/balthazarbarbry/Parcel-site/geraldinebarbry
   ./start.sh
   ```

## Vérification finale

Après l'installation, le script `./start.sh` devrait :
- ✅ Détecter Node.js
- ✅ Installer les dépendances automatiquement
- ✅ Lancer le serveur sur http://localhost:5173


