# Ohmyfood Next.js

Starting project for Ohmyfood. 

You can run project following the steps : 
1. in you terminal write `npm install` (you need to do this only one time)
2. write `npm run dev` to run the project

# Context

Dans cet exercice, vous allez améliorer le site de Ohmyfood, une entreprise spécialisée dans le secteur de la restauration, en vous aidant d'une maquette. L’équipe a commencé à intégrer un nouveau site avec Next.Js.

Votre mission est simple : terminer l’intégration en ajoutant des composants réutilisables pour afficher les restaurants.

Cet exercice est entièrement guidé.
Vous pouvez suivre les étapes ci-dessous.

# Étapes

## Étape 1 - Mettez en place la route vers les restaurants

Pour pouvoir afficher les pages de restaurants, la première étape est de créer une nouvelle route dans Next.js afin de pouvoir récupérer nos pages de restaurant.

1.  Dans le dossier`app`nous allons donc créer un nouveau dossier`restaurant`qui sera la base de la route pour nos restaurants.
2.  Dans le dossier`restaurant`nous allons créer un dossier`[slug]`
3.  Dans le dossier`[slug]`créer le fichier`page.jsx`.

### **Résultat attendu**

-   Votre nouvelle page s’affiche lorsque vous naviguez sur l’URL localhost:3000/restaurant/un-restaurant

### **Recommandations**

-   Avant de créer le dossier \[slug\] ajoutez un dossier`restaurant.`Dans une réelle application cela pourra avoir un impact positif sur le SEO donnant un peu de contexte sur ce qui est affiché.
-   Faites bien attention à nommer votre dossier \[slug\] avec des crochets, le nom slug en soit n’est pas vraiment important mais les crochets notent le caractère dynamique de l’élément

### **Ressources**

-   Lisez la documentation de Next.js sur [la création de pages et de layouts](https://nextjs.org/docs/app/getting-started/layouts-and-pages)

## Étape 2 - Ajoutez un lien a vos composants de carte de restaurant

Il est temps de lier votre composant à la page restaurant. Pour ce faire, ajoutez un composant <Link> de Next.js nous renverrons à la page du restaurant de manière dynamique en passant le slug du restaurant dans la props href.

### **Résultat attendu**

-   En cliquant sur la carte du restaurant vous devez être amené à la route`restaurant/[slug-du-restaurant]`et voir votre page.

### **Ressources**

-   La [documentation Next.js sur la navigation](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating).

## Étape 3 - Récupérez les informations du restaurant et affichez la page

Maintenant nous allons récupérer le slug grâce aux params de la page, une fois que nous avons récupéré le slug nous pouvons le rechercher parmis les données de nos restaurants. une fois que nous avons les données de notre restaurant il ne nous reste plus qu’à mettre en place les différents composants

### **Résultat attendu**

-   Vous aurez la page de restaurant tel qu’attendu sur la maquette, la page affichée dépend du restaurant sur lequel vous avez cliqué.

### **Recommandations**

-   Même s'il existe plusieurs manières d’obtenir le résultat, une bonne pratique avec Next.JS est de récupérer les params de manière asynchrone et de rechercher le restaurant dans la liste des restaurants avant de travailler l’affichage de la page. Il n’est pas conseillé ici d’utiliser le ‘use client’ dans la page.
-   Pensez à bien mettre la fonction de votre page comme async pour pouvoir récupérer les params

### **Ressources**

-   La documentation Next sur [les segments de route dynamiques](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes)

## Étape 5 - Mettez en page vos contenus

Maintenant que nous avons mis en place la logique de notre page, il ne nous reste plus qu’à intégrer le contenu de celle-ci. Pour cela vous pouvez vous aider du composant d’interface <MenuItem /> conçu à cet effet.

### **Résultat attendu**

-   la page de restaurant telle qu’attendue sur la maquette, la page affichée dépend du restaurant sur lequel vous avez cliqué.

### **Recommandations**

-   Prêtez bien attention au CSS déjà existant dans l’application
-   Utilisez l’élément`_<MenuItem />_`

### **Ressources**

-   Le cours React
-   La documentation Next sur[les segments de route dynamiques](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes).

## Étape 6 - Gérez l’erreur 404

Afin d’avoir une application complète nous voulons nous assurer que l’utilisateur soit redirigé vers une page d’erreur si le restaurant entré dans l’url n’existe pas.

Pour cela, créez un composant not-found.jsx .  
Dans notre page.jsx nous ajoutons une condition notFound() de next/navigation si nous ne trouvons aucun restaurant avec le slug indiqué dans l’url.

### **Résultat attendu**

-   Lorsque l’on rentre un slug qui n’existe pas dans l’url comme : restaurant/mon-resto alors nous avons la page 404 d’affichée

### **Recommandations**

-   Choisissez bien l’endroit où placer votre composant not-found.jsx en fonction de l’endroit où il est placé il pourra être affiché à différents endroits de l’application. Si vous voulez des 404 personnalisé pour les différents niveaux vous pouvez en mettre une à la racine de app et une autre dans chaque sous dossier.

### **Ressources**

-   La [documentation sur la fonction notFound de next/navigation](https://nextjs.org/docs/app/api-reference/functions/not-found)