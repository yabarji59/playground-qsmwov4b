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

## Exercices pratiques

### Exercice 1 : Variables et types de données

```javascript runnable
// Déclarez trois variables :
// 1. Une variable 'nom' contenant votre prénom
// 2. Une variable 'age' contenant votre âge
// 3. Une variable 'estEtudiant' contenant true ou false

// Votre code ici
let nom = "";
let age = 0;
let estEtudiant = false;

// Affichez les variables avec console.log
console.log("Nom :", nom);
console.log("Âge :", age);
console.log("Est étudiant :", estEtudiant);
```

### Exercice 2 : Tableaux

```javascript runnable
// Créez un tableau 'fruits' contenant 5 fruits
// Utilisez la méthode push() pour ajouter un fruit
// Utilisez la méthode pop() pour retirer le dernier fruit
// Affichez la longueur du tableau et son contenu

// Votre code ici
let fruits = [];

// Affichez les résultats
console.log("Tableau de fruits :", fruits);
console.log("Nombre de fruits :", fruits.length);
```

### Exercice 3 : Conditions

```javascript runnable
// Créez une fonction qui vérifie si un nombre est pair ou impair
// La fonction doit afficher "Le nombre X est pair" ou "Le nombre X est impair"

function verifierNombre(nombre) {
    // Votre code ici
}

// Testez la fonction avec différents nombres
verifierNombre(4);
verifierNombre(7);
verifierNombre(0);
```

### Exercice 4 : Boucles

```javascript runnable
// Créez un tableau de nombres de 1 à 10
// Utilisez une boucle for pour calculer la somme de tous les nombres
// Affichez le résultat

// Votre code ici
let nombres = [];
let somme = 0;

// Affichez le résultat
console.log("Somme des nombres :", somme);
```

### Exercice 5 : Fonctions

```javascript runnable
// Créez une fonction qui calcule la moyenne d'un tableau de notes
// La fonction doit :
// 1. Prendre un tableau de notes en paramètre
// 2. Calculer la moyenne
// 3. Retourner "Excellent" si la moyenne >= 16
// 4. Retourner "Bien" si la moyenne >= 14
// 5. Retourner "Moyen" si la moyenne >= 12
// 6. Retourner "Insuffisant" sinon

function calculerMoyenne(notes) {
    // Votre code ici
}

// Testez la fonction
let notes = [15, 17, 14, 16, 13];
console.log("Résultat :", calculerMoyenne(notes));
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