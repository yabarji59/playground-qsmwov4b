# Playground JavaScript

Bienvenue dans ce playground interactif pour apprendre les bases du JavaScript !

## Objectif

Ce playground vous permet de pratiquer et d'expérimenter avec les concepts fondamentaux du JavaScript :
- Variables et types de données
- Tableaux et leurs méthodes
- Structures conditionnelles
- Boucles
- Fonctions

## Comment utiliser ce playground

1. Explorez les différentes sections dans l'ordre
2. Pour chaque exercice :
   - Lisez la description
   - Examinez l'exemple de code
   - Cliquez sur "Exécuter" pour voir les résultats
   - Modifiez le code pour expérimenter

## Exemple de code

```javascript runnable
// Déclaration de variables
let nombre = 42;
let texte = "Hello World";
let booleen = true;

// Affichage des résultats
console.log("Nombre :", nombre);
console.log("Texte :", texte);
console.log("Booléen :", booleen);
```

## Quiz JavaScript

Testez vos connaissances avec ce quiz interactif ! Pour chaque question, modifiez la variable `reponse` avec votre choix (1, 2, 3 ou 4).

```javascript runnable
// Quiz sur les variables
console.log("=== Quiz JavaScript ===");
console.log("\nQuestion 1 : Quel est le type de la variable suivante ?");
console.log("let age = 25;");
console.log("1. string");
console.log("2. number");
console.log("3. boolean");
console.log("4. undefined");

// Votre réponse ici
let reponse = 0;

// Vérification de la réponse
if (reponse === 2) {
    console.log("\n✅ Correct ! 'age' est bien un nombre (number).");
} else {
    console.log("\n❌ Incorrect. La bonne réponse est 2 (number).");
    console.log("Explication : En JavaScript, les nombres entiers sont de type 'number'.");
}

// Question suivante
console.log("\nQuestion 2 : Quelle est la bonne syntaxe pour déclarer une constante ?");
console.log("1. var PI = 3.14;");
console.log("2. let PI = 3.14;");
console.log("3. const PI = 3.14;");
console.log("4. PI = 3.14;");

// Votre réponse ici
reponse = 0;

// Vérification de la réponse
if (reponse === 3) {
    console.log("\n✅ Correct ! 'const' est le mot-clé pour déclarer une constante.");
} else {
    console.log("\n❌ Incorrect. La bonne réponse est 3 (const PI = 3.14;).");
    console.log("Explication : 'const' est utilisé pour déclarer des variables qui ne peuvent pas être réassignées.");
}
```

## Conseils

- N'hésitez pas à modifier les exemples
- Utilisez la console pour déboguer
- Testez différentes combinaisons de code
- Faites des erreurs pour apprendre

## Ressources supplémentaires

- [MDN Web Docs - JavaScript](https://developer.mozilla.org/fr/docs/Web/JavaScript)
- [JavaScript.info](https://javascript.info/)
- [Eloquent JavaScript](https://eloquentjavascript.net/) 