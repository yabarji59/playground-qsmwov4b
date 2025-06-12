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
   - Écrivez votre code dans l'espace prévu
   - Cliquez sur "Exécuter" pour vérifier votre réponse

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

// Vérification
if (typeof nom === 'string' && nom.length > 0 &&
    typeof age === 'number' && age > 0 &&
    typeof estEtudiant === 'boolean') {
    console.log("✅ Exercice réussi !");
    console.log("Nom :", nom);
    console.log("Âge :", age);
    console.log("Est étudiant :", estEtudiant);
} else {
    console.log("❌ Vérifiez que :");
    console.log("- 'nom' est une chaîne de caractères non vide");
    console.log("- 'age' est un nombre positif");
    console.log("- 'estEtudiant' est un booléen (true ou false)");
}
```

### Exercice 2 : Tableaux

```javascript runnable
// Créez un tableau 'fruits' contenant 5 fruits
// Utilisez la méthode push() pour ajouter un fruit
// Utilisez la méthode pop() pour retirer le dernier fruit
// Affichez la longueur du tableau et son contenu

// Votre code ici
let fruits = [];

// Vérification
if (Array.isArray(fruits) && fruits.length === 5) {
    console.log("✅ Exercice réussi !");
    console.log("Tableau de fruits :", fruits);
    console.log("Nombre de fruits :", fruits.length);
} else {
    console.log("❌ Vérifiez que :");
    console.log("- 'fruits' est un tableau");
    console.log("- Le tableau contient exactement 5 éléments");
}
```

### Exercice 3 : Conditions

```javascript runnable
// Créez une fonction qui vérifie si un nombre est pair ou impair
// La fonction doit afficher "Le nombre X est pair" ou "Le nombre X est impair"

function verifierNombre(nombre) {
    // Votre code ici
}

// Vérification
let tests = [
    { input: 4, expected: "pair" },
    { input: 7, expected: "impair" },
    { input: 0, expected: "pair" }
];

let tousTestsReussis = true;
tests.forEach(test => {
    let resultat = verifierNombre(test.input);
    if (!resultat.includes(test.expected)) {
        tousTestsReussis = false;
        console.log(`❌ Test échoué pour ${test.input}`);
    }
});

if (tousTestsReussis) {
    console.log("✅ Exercice réussi !");
} else {
    console.log("❌ Vérifiez que votre fonction :");
    console.log("- Affiche 'pair' pour les nombres pairs");
    console.log("- Affiche 'impair' pour les nombres impairs");
    console.log("- Gère correctement le cas du zéro");
}
```

### Exercice 4 : Boucles

```javascript runnable
// Créez un tableau de nombres de 1 à 10
// Utilisez une boucle for pour calculer la somme de tous les nombres
// Affichez le résultat

// Votre code ici
let nombres = [];
let somme = 0;

// Vérification
if (Array.isArray(nombres) && 
    nombres.length === 10 && 
    nombres[0] === 1 && 
    nombres[9] === 10 && 
    somme === 55) {
    console.log("✅ Exercice réussi !");
    console.log("Tableau :", nombres);
    console.log("Somme :", somme);
} else {
    console.log("❌ Vérifiez que :");
    console.log("- Le tableau contient les nombres de 1 à 10");
    console.log("- La somme est égale à 55");
}
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

// Vérification
let tests = [
    { input: [15, 17, 14, 16, 13], expected: "Bien" },
    { input: [18, 17, 19, 16, 20], expected: "Excellent" },
    { input: [12, 11, 13, 12, 12], expected: "Moyen" },
    { input: [8, 9, 7, 10, 6], expected: "Insuffisant" }
];

let tousTestsReussis = true;
tests.forEach(test => {
    let resultat = calculerMoyenne(test.input);
    if (resultat !== test.expected) {
        tousTestsReussis = false;
        console.log(`❌ Test échoué pour ${test.input}`);
        console.log(`Attendu : ${test.expected}, Obtenu : ${resultat}`);
    }
});

if (tousTestsReussis) {
    console.log("✅ Exercice réussi !");
} else {
    console.log("❌ Vérifiez que votre fonction :");
    console.log("- Calcule correctement la moyenne");
    console.log("- Retourne le bon message selon la moyenne");
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