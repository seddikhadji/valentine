# 💝 Surprise Valentine pour ma 224

Un site web interactif romantique pour demander à ta copine d'être ta Valentine !

## 🎯 Ce que contient ce site

1. **Page d'entrée** avec code secret (MYLOVE224)
2. **Puzzle interactif** - Elle reconstitue votre photo
3. **Timeline animée** - Vos moments importants
4. **Messages d'amour** - 5 messages touchants
5. **La grande question** - "Veux-tu être ma Valentine ?" avec un bouton "Non" qui s'échappe ! 😄
6. **Message final** - Déclaration d'amour + compte à rebours jusqu'au mariage (30/07/2026)

## 🚀 Comment mettre en ligne (GitHub Pages - GRATUIT)

### Étape 1: Créer un compte GitHub (si tu n'en as pas)
1. Va sur https://github.com
2. Clique sur "Sign up" (S'inscrire)
3. Crée ton compte (gratuit)

### Étape 2: Créer un nouveau repository
1. Une fois connecté, clique sur le bouton **"+"** en haut à droite
2. Sélectionne **"New repository"**
3. Nom du repository: `valentine-surprise` (ou ce que tu veux)
4. Sélectionne **"Public"**
5. ✅ Coche **"Add a README file"**
6. Clique sur **"Create repository"**

### Étape 3: Uploader les fichiers
1. Dans ton nouveau repository, clique sur **"Add file"** → **"Upload files"**
2. Glisse-dépose TOUS les fichiers de ce dossier:
   - `index.html`
   - `style.css`
   - `script.js`
   - `puzzle-image.jpg` (REMPLACE cette image par votre vraie photo !)
3. En bas de la page, clique sur **"Commit changes"**

### Étape 4: Remplacer l'image du puzzle
1. Prends une belle photo de vous deux (format carré de préférence, 360x360px idéal)
2. Renomme-la **exactement** en `puzzle-image.jpg`
3. Dans ton repo GitHub, clique sur le fichier `puzzle-image.jpg` actuel
4. Clique sur l'icône de poubelle pour le supprimer
5. Clique sur **"Add file"** → **"Upload files"**
6. Upload ta nouvelle photo `puzzle-image.jpg`
7. Commit les changements

### Étape 5: Activer GitHub Pages
1. Dans ton repository, clique sur **"Settings"** (Paramètres)
2. Dans le menu de gauche, clique sur **"Pages"**
3. Sous "Source", sélectionne **"main"** (ou "master")
4. Clique sur **"Save"**
5. ⏳ Attends 1-2 minutes

### Étape 6: Obtenir ton lien
1. Rafraîchis la page
2. Tu verras un message: **"Your site is published at..."**
3. Ton lien sera: `https://TON-NOM-UTILISATEUR.github.io/valentine-surprise/`
4. **C'EST CE LIEN QUE TU ENVERRAS DANS LA CARTE !**

## 💐 Message pour la carte du fleuriste

Voici ce que tu peux écrire sur la carte qui accompagne les fleurs:

```
Ma 224,

Un petit quelque chose de spécial t'attend en ligne...

🔗 Lien: [TON LIEN GITHUB PAGES ICI]
🔐 Code secret: MYLOVE224

Je t'aime 💕
```

## 🎨 Personnalisation (Optionnel)

### Changer le code secret
1. Ouvre `script.js`
2. Ligne 2, change `const SECRET_CODE = "MYLOVE224";` par ce que tu veux
3. N'oublie pas de mettre à jour la carte des fleurs !

### Modifier les messages d'amour
1. Ouvre `script.js`
2. Trouve la section `const loveMessages = [...]` (lignes 18-24)
3. Modifie les messages comme tu veux

### Changer la date du mariage
1. Ouvre `script.js`
2. Ligne 3, modifie `const WEDDING_DATE = new Date("2026-07-30T00:00:00");`

### Ajouter de la musique (YouTube)
1. Ouvre `index.html`
2. Juste avant la balise `</body>`, ajoute:
```html
<audio autoplay loop>
    <source src="votre-chanson.mp3" type="audio/mpeg">
</audio>
```
3. Upload le fichier MP3 sur GitHub avec les autres fichiers

## 📱 Compatibilité

✅ Fonctionne sur:
- Ordinateurs (Windows, Mac, Linux)
- Téléphones (iPhone, Android)
- Tablettes
- Tous les navigateurs modernes

## 🎯 Fonctionnalités

- ✨ Animations fluides et professionnelles
- 💝 Particules animées (cœurs et étoiles)
- 🧩 Puzzle interactif drag & drop
- 🎊 Confettis et feux d'artifice
- 😂 Bouton "Non" qui s'échappe (impossible à cliquer !)
- ⏱️ Compte à rebours en temps réel jusqu'au mariage
- 📱 100% responsive (mobile-friendly)
- 🎨 Design romantique moderne
- 🌈 Gradients et effets lumineux

## 🆘 Aide / Questions

Si tu as des problèmes:

1. **Le site ne s'affiche pas**
   - Vérifie que GitHub Pages est bien activé dans Settings
   - Attends quelques minutes (ça peut prendre jusqu'à 5 min)
   - Vérifie que tous les fichiers sont bien uploadés

2. **L'image du puzzle ne s'affiche pas**
   - Vérifie que le fichier s'appelle **exactement** `puzzle-image.jpg` (minuscules)
   - Vérifie qu'il est à la racine du repository (pas dans un dossier)

3. **Le code secret ne fonctionne pas**
   - Vérifie l'orthographe: `MYLOVE224` (en majuscules ou minuscules, peu importe)
   - Regarde dans `script.js` si tu ne l'as pas changé

## 💕 C'est tout !

Ton site est prêt ! Envoie le lien avec les fleurs et prépare-toi à la faire fondre ! 🌹

---

**Créé avec ❤️ pour ma 224**
**Mariage: 30 Juillet 2026** 💒
