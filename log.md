# Journal des modifications

## Étape 1 - Mise en place de la route vers les restaurants

**Contexte** : le projet ne disposait d'aucune route pour afficher une page de restaurant individuelle.

**Modification** : création du dossier `src/app/restaurant/[slug]/page.jsx` avec un contenu minimal, afin de rendre la route `restaurant/[slug]` accessible.

**Problèmes rencontrés** : aucun.

## Étape 2 - Lien depuis la carte de restaurant

**Contexte** : le composant `RestaurantCard` n'était pas cliquable et ne menait à aucune page de détail.

**Modification** : la carte entière est désormais enveloppée dans un composant `<Link>` de Next.js pointant vers `/restaurant/[slug]`. Le clic sur le bouton "like" appelle `preventDefault()` pour ne pas déclencher la navigation. Ajout de `text-decoration: none` et `color: inherit` sur `.restaurantCard` dans `styles.css` pour compenser le passage de `div` à `a`.

**Problèmes rencontrés** : le passage de la carte en `<a>` aurait fait apparaître un soulignement et une couleur de lien par défaut sur le nom et le lieu du restaurant ; corrigé via le CSS mentionné ci-dessus.

## Étape 3 - Récupération des données du restaurant via le slug

**Contexte** : la page restaurant devait afficher un contenu dépendant du restaurant sélectionné.

**Modification** : la fonction de la page est passée en `async`, le `slug` est récupéré via `await params`, puis le restaurant correspondant est recherché dans `restaurants.json`.

**Problèmes rencontrés** : aucun.

## Étape 5 - Mise en page du contenu du restaurant

**Contexte** : le CSS de la page restaurant (`heroImage`, `mainWrapper`, `contentWrapper`, `menu`, `sectionTitle`, `orderButton`) ainsi que les composants `RestaurantHeader` et `MenuItem` existaient déjà dans le projet, mais n'étaient utilisés nulle part.

**Modification** : la page restaurant affiche désormais l'image d'en-tête, le composant `RestaurantHeader`, les sections de menu (entrées, plats, desserts) via le composant `MenuItem`, et le bouton "Commander". Vérification visuelle effectuée dans le navigateur (Chrome DevTools) : rendu conforme au CSS existant.

**Problèmes rencontrés** : aucun, les ressources CSS et composants nécessaires étaient déjà présents dans le projet (pas besoin d'accéder à la maquette Figma).

## Étape 6 - Gestion de l'erreur 404

**Contexte** : aucune page d'erreur n'existait si le slug de l'URL ne correspondait à aucun restaurant.

**Modification** : création de `src/app/restaurant/[slug]/not-found.jsx` (404 spécifique à la route restaurant) et appel de `notFound()` de `next/navigation` dans `page.jsx` lorsque aucun restaurant ne correspond au slug. Vérifié dans le navigateur avec l'URL `restaurant/mon-resto`.

**Problèmes rencontrés** : aucun.
