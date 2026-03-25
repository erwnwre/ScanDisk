# ScanDisk — projet exportable Astro

Site éditorial statique inspiré de ton brief : internet-core, palette rose/violet/jaune, fenêtres old-web, damiers, playlist sticky, rubriques **Chronik / Inside / ITW / FreeScan**, articles de démonstration en **Lorem Ipsum**.

## Ce qui est inclus

- Home page
- Pages de rubriques
- Pages article
- Barre playlist sticky avec embed YouTube playlist
- Notes sur 5 pour les posts de Chronik
- Responsive mobile
- Contenus d’exemple en Markdown
- Covers SVG placeholder prêtes à remplacer
- Déploiement simple sur hébergement statique gratuit

## Démarrer en local

```bash
npm install
npm run dev
```

## Build de production

```bash
npm run build
npm run preview
```

Le site statique final est généré dans `dist/`.

## Ajouter ou modifier un article

Tous les articles sont dans `src/content/posts/`.

Chaque fichier `.md` contient :
- `title`
- `excerpt`
- `section`
- `date`
- `author`
- `cover`
- `rating` (Chronik seulement si tu veux)
- `youtubeEmbed` (facultatif)
- `featured` (facultatif)

## Remplacer les visuels

Les placeholders sont dans `public/covers/`.
Tu peux les remplacer par JPG, PNG, WebP ou SVG.

## Déploiement gratuit recommandé

### Cloudflare Pages
1. Crée un dépôt GitHub.
2. Pousse ce projet dans le dépôt.
3. Connecte le dépôt à Cloudflare Pages.
4. Build command : `npm run build`
5. Output directory : `dist`
6. Déploie et récupère ton sous-domaine `.pages.dev`.

### GitHub Pages
Comme Astro génère un site statique, tu peux aussi publier le contenu de `dist/` sur GitHub Pages.

## Remarques
- Le design est volontairement très stylisé et un peu cheap 3D.
- Les contenus sont volontairement en Lorem Ipsum pour que tu remplaces toi-même.
- Il n’y a pas de mode sombre.
