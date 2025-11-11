# 📤 Instructions pour pousser vers GitHub

Le commit a été créé avec succès ! Pour pousser vers GitHub, vous avez plusieurs options :

## ✅ Option 1 : Utiliser SSH (Recommandé)

Si vous avez configuré SSH avec GitHub :

```bash
cd /Users/balthazarbarbry/Parcel-site/geraldinebarbry
git remote set-url origin git@github.com:balthazarbarbry-oss/geraldinebarbry.git
git push origin main
```

## ✅ Option 2 : Utiliser un Token d'accès personnel

1. **Créez un token GitHub** :
   - Allez sur : https://github.com/settings/tokens
   - Cliquez sur "Generate new token (classic)"
   - Donnez-lui les permissions `repo`
   - Copiez le token

2. **Poussez avec le token** :
   ```bash
   cd /Users/balthazarbarbry/Parcel-site/geraldinebarbry
   git push https://VOTRE_TOKEN@github.com/balthazarbarbry-oss/geraldinebarbry.git main
   ```

   Remplacez `VOTRE_TOKEN` par votre token.

## ✅ Option 3 : Utiliser GitHub CLI

Si vous avez `gh` installé :

```bash
gh auth login
git push origin main
```

## ✅ Option 4 : Via l'interface GitHub

1. Allez sur : https://github.com/balthazarbarbry-oss/geraldinebarbry
2. Cliquez sur "Upload files"
3. Glissez-déposez les fichiers modifiés

## 📋 Résumé des changements commités

- ✅ Logo Parcel. intégré (screenshot3.png)
- ✅ Barre latérale avec captures d'écran
- ✅ Scripts de démarrage (start.sh, lancer_site.sh, ouvrir_site.sh)
- ✅ Serveurs Python pour lancer sans Node.js
- ✅ Version HTML statique (index_static.html)
- ✅ Documentation complète (README.md, guides)
- ✅ Fichier .gitignore configuré

## 🔗 Lien du dépôt

https://github.com/balthazarbarbry-oss/geraldinebarbry

