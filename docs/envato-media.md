# Médias à télécharger sur Envato Elements

> **État (16 novembre 2026) :** la vidéo et les 9 photos des sections 1 à 3 sont intégrées. La vidéo
> d'accueil assemble deux plans Envato (fondu d'une seconde, 18 s, MP4 + WebM) ; son image d'attente
> est `public/images/hero-poster-modern-kitchen-island.webp`. La photo reçue pour l'article
> « préparer sa maison » montre une baignoire et non une cuisine : elle est en ligne sous
> `bathroom-freestanding-bathtub-white-wall.webp` (texte alternatif exact) ; une photo de cuisine ouverte
> irait mieux. Après remplacement d'une photo sous le même nom, augmenter le `?v=` de son adresse dans
> le code, sinon les navigateurs gardent l'ancienne jusqu'à 7 jours.

Liste des vidéos et des photos de banque à chercher sur Envato Elements pour remplacer les visuels
provisoires du site. Pour chaque média : où il apparaît, ce qu'il doit montrer, les mots-clés de
recherche (en anglais, c'est la langue d'Envato) et **le nom de fichier exact** à lui donner.

> **Règle du cahier des charges :** les photos de banque servent à illustrer (vidéo d'accueil, cartes,
> bannières, articles). Elles ne doivent **jamais** être présentées comme des réalisations de V&C.
> Les **projets avant/après** des pages Cuisine et Salle de bain doivent être les **vraies photos du
> client** (voir la section 4).

## Comment les intégrer

1. Télécharger le média dans la meilleure résolution proposée.
2. Le renommer exactement comme indiqué (minuscules, tirets, sans accents).
3. **Photos :** les déposer en `.jpg` dans `public/images/`, puis lancer
   `node scripts/optimize-images.mjs`. Le script les convertit en WebP (1920 px, qualité 72) et
   remplace les fichiers provisoires du même nom.
4. **Vidéo :** la déposer dans `public/videos/` (créer le dossier). La page d'accueil la détecte
   d'elle-même : sans vidéo, la photo de remplacement (poster) s'affiche.

Critères communs : format paysage, lumière naturelle, intérieurs résidentiels modernes (pas de
commerce ni d'hôtel). Pas de texte, de logo ni de filigrane. Personne de face (droit à l'image).
Tons neutres (blanc, bois clair, gris, vert sauge) qui vont avec le vert de la marque `#125A50`.

---

## 1. Vidéo d'accueil (hero) — prioritaire

| Fichier | Où | Spécifications |
| --- | --- | --- |
| `public/videos/hero.mp4` | Accueil, plein écran derrière le titre | H.264, 1920×1080, 10 à 20 s, **sans son**, boucle propre, **moins de 8 Mo** |
| `public/videos/hero.webm` *(facultatif)* | Même vidéo, format plus léger | VP9, 1920×1080, moins de 6 Mo |

**À montrer :** une cuisine et/ou une salle de bain haut de gamme, des mouvements de caméra lents
(travelling, glissement le long d'un îlot, lumière qui entre par la fenêtre). L'image doit rester
assez sombre ou calme **en bas à gauche**, où se placent le titre et les boutons.

**Recherches Envato (Stock Video) :**
- `modern kitchen interior slow motion`
- `luxury kitchen dolly shot`
- `kitchen island cinematic interior`
- `modern bathroom interior camera movement`
- `home renovation interior walkthrough`

**À éviter :** vidéos avec des gens au premier plan, chantiers sales ou bruyants, plans rapides,
effets de transition, textes incrustés.

**Poster (image de remplacement) :** une capture nette de la vidéo, enregistrée sous
`public/images/kitchen-bathroom-renovation-tampa-bay.jpg` (voir la photo n° 1 ci-dessous ; on peut
aussi garder une photo à part).

---

## 2. Photos des pages principales

| # | Fichier (`public/images/…`) | Où | À montrer | Recherches Envato (Photos) |
| --- | --- | --- | --- | --- |
| 1 | `kitchen-bathroom-renovation-tampa-bay.jpg` | Poster de la vidéo d'accueil, image de partage (réseaux sociaux) | Grande cuisine lumineuse vue d'ensemble, format 16:9 | `bright modern kitchen interior wide`, `open concept kitchen living room` |
| 2 | `kitchen-renovation-island-pendants.jpg` | Accueil, carte « Rénovation de cuisine » | Îlot central avec suspensions, armoires sur mesure, format 4:3 | `kitchen island pendant lights`, `custom kitchen cabinets island` |
| 3 | `bathroom-renovation-wood-vanity-glass-shower.jpg` | Accueil, carte « Rénovation de salle de bain » | Meuble-lavabo en bois et douche vitrée, format 4:3 | `modern bathroom wood vanity glass shower`, `walk-in shower bathroom interior` |
| 4 | `custom-kitchen-renovation-tampa.jpg` | Bannière de la page Cuisine | Cuisine complète, plan large, zone calme en bas à gauche, 16:9 ou plus large | `luxury kitchen interior wide angle`, `white kitchen cabinets marble` |
| 5 | `bathroom-renovation-floating-vanity.jpg` | Bannière de la page Salle de bain + couverture de l'article « humidité » | Meuble-lavabo suspendu, carrelage grand format, 16:9 | `floating vanity modern bathroom`, `spa bathroom interior` |

## 3. Couvertures des articles du blogue

Format 16:9, au moins 2400 px de large.

| Fichier (`public/images/…`) | Article | Recherches Envato (Photos) |
| --- | --- | --- |
| `kitchen-renovation-white-island.jpg` | Rénovation de cuisine : les étapes à connaître | `white kitchen island renovation`, `kitchen remodel finished` |
| `small-kitchen-smart-storage.jpg` | Optimiser l'espace dans une petite cuisine | `small kitchen storage ideas`, `compact kitchen pull out drawer` |
| `bathroom-renovation-floating-vanity.jpg` | Rénover une salle de bain en Floride : l'humidité | *(même photo que le n° 5)* |
| `kitchen-countertop-quartz.jpg` | Quartz, granit ou marbre : quel comptoir choisir ? | `quartz countertop kitchen close up`, `marble granite countertop samples` |
| `bathroom-freestanding-tub.jpg` | Baignoire ou douche : que choisir ? | `freestanding bathtub modern bathroom`, `bathtub and walk-in shower` |
| `kitchen-renovation-open-plan.jpg` | Comment préparer votre maison pour une rénovation | `home renovation preparation protected floor`, `open plan kitchen renovation` |

## 4. Projets avant/après — photos du client uniquement (pas Envato)

Les comparateurs avant/après des pages Cuisine et Salle de bain affichent pour l'instant des
**exemples marqués « Contenu exemple »**. Ils doivent être remplacés par de **vrais projets de
V&C** : une photo « avant » et une photo « après » **prises du même endroit, avec le même cadrage**
(sinon la ligne de comparaison ne montre rien d'utile).

| Fichiers (`public/images/…`) | Projet |
| --- | --- |
| `project-kitchen-1-before.jpg` / `project-kitchen-1-after.jpg` | Cuisine n° 1 |
| `project-kitchen-2-before.jpg` / `project-kitchen-2-after.jpg` | Cuisine n° 2 |
| `project-bathroom-1-before.jpg` / `project-bathroom-1-after.jpg` | Salle de bain n° 1 |
| `project-bathroom-2-before.jpg` / `project-bathroom-2-after.jpg` | Salle de bain n° 2 |

Pour chaque projet, le client fournit aussi : la ville, le besoin, l'état initial, les travaux, les
matériaux, les méthodes et le résultat (voir `src/content/projects.ts` et
`docs/client-info-to-verify.md`).
