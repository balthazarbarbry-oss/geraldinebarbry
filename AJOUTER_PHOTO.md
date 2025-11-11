# 📸 Comment ajouter une photo depuis le Finder

## Méthode 1 : Glisser-déposer (Le plus simple)

1. **Ouvrez le Finder**
2. **Trouvez votre photo** (dans Téléchargements, Images, etc.)
3. **Ouvrez un autre Finder** (Cmd + N) et naviguez vers :
   ```
   /Users/balthazarbarbry/Parcel-site/geraldinebarbry/public
   ```
4. **Glissez-déposez** votre photo dans le dossier `public`
5. **Renommez-la** si nécessaire (évitez les espaces, utilisez des tirets ou underscores)

## Méthode 2 : Copier-coller

1. **Trouvez votre photo** dans le Finder
2. **Clic droit** sur la photo > **Copier** (ou Cmd + C)
3. **Ouvrez le Finder** et allez dans :
   ```
   /Users/balthazarbarbry/Parcel-site/geraldinebarbry/public
   ```
4. **Collez** la photo (Cmd + V)

## Méthode 3 : Via le Terminal

1. **Ouvrez le Terminal**
2. **Copiez votre photo** dans le dossier public :
   ```bash
   cp "/chemin/vers/votre/photo.jpg" /Users/balthazarbarbry/Parcel-site/geraldinebarbry/public/
   ```
   
   Exemple si la photo est sur le Bureau :
   ```bash
   cp ~/Desktop/ma-photo.jpg /Users/balthazarbarbry/Parcel-site/geraldinebarbry/public/
   ```

## Utiliser la photo dans votre site

Une fois la photo dans le dossier `public`, vous pouvez l'utiliser dans votre code :

### Dans React (App.tsx) :
```jsx
<img src="/nom-de-votre-photo.jpg" alt="Description" />
```

### Exemple :
Si vous avez copié `photo-profil.jpg` dans `public/`, utilisez :
```jsx
<img src="/photo-profil.jpg" alt="Photo de profil" />
```

## Emplacement du dossier public

Le dossier `public` se trouve ici :
```
/Users/balthazarbarbry/Parcel-site/geraldinebarbry/public
```

## Astuce : Ouvrir le dossier public rapidement

Dans le Terminal, tapez :
```bash
open /Users/balthazarbarbry/Parcel-site/geraldinebarbry/public
```

Cela ouvrira le dossier `public` dans le Finder !

## Formats d'image recommandés

- **JPG/JPEG** : Pour les photos
- **PNG** : Pour les images avec transparence
- **WebP** : Format moderne et optimisé (si supporté)

## Taille recommandée

Pour de meilleures performances :
- **Photos de profil** : 800x800px maximum
- **Images de bannière** : 1920x1080px maximum
- **Icônes** : 200x200px maximum

