// Fonction utilitaire pour afficher les résultats
function displayResult(elementId, content) {
    const resultElement = document.getElementById(elementId);
    resultElement.innerHTML = content;
}

// 1. Variables et Types de données
function runVariablesExercise() {
    let result = '<h3>Résultats des exercices sur les variables :</h3>';
    
    // Déclaration de variables
    let nombre = 42;
    let texte = "Hello World";
    let booleen = true;
    let tableau = [1, 2, 3];
    let objet = { nom: "John", age: 30 };
    
    // Affichage des résultats
    result += `<p>Nombre : ${nombre}</p>`;
    result += `<p>Texte : ${texte}</p>`;
    result += `<p>Booléen : ${booleen}</p>`;
    result += `<p>Tableau : ${JSON.stringify(tableau)}</p>`;
    result += `<p>Objet : ${JSON.stringify(objet)}</p>`;
    
    displayResult('variables-result', result);
}

// 2. Tableaux
function runArraysExercise() {
    let result = '<h3>Résultats des exercices sur les tableaux :</h3>';
    
    // Création et manipulation de tableaux
    let fruits = ['pomme', 'banane', 'orange'];
    
    // Ajout d'éléments
    fruits.push('fraise');
    fruits.unshift('kiwi');
    
    // Suppression d'éléments
    fruits.pop();
    fruits.shift();
    
    // Manipulation avec map et filter
    let nombres = [1, 2, 3, 4, 5];
    let doubles = nombres.map(n => n * 2);
    let pairs = nombres.filter(n => n % 2 === 0);
    
    result += `<p>Tableau original : ${fruits.join(', ')}</p>`;
    result += `<p>Nombres doublés : ${doubles.join(', ')}</p>`;
    result += `<p>Nombres pairs : ${pairs.join(', ')}</p>`;
    
    displayResult('arrays-result', result);
}

// 3. Conditions
function runConditionsExercise() {
    let result = '<h3>Résultats des exercices sur les conditions :</h3>';
    
    let age = 20;
    let note = 15;
    
    // Utilisation de if/else
    if (age >= 18) {
        result += `<p>Vous êtes majeur</p>`;
    } else {
        result += `<p>Vous êtes mineur</p>`;
    }
    
    // Utilisation de switch
    switch (true) {
        case note >= 16:
            result += `<p>Excellent</p>`;
            break;
        case note >= 14:
            result += `<p>Très bien</p>`;
            break;
        case note >= 12:
            result += `<p>Bien</p>`;
            break;
        default:
            result += `<p>À améliorer</p>`;
    }
    
    // Opérateur ternaire
    let message = age >= 18 ? "Majeur" : "Mineur";
    result += `<p>Statut : ${message}</p>`;
    
    displayResult('conditions-result', result);
}

// 4. Boucles
function runLoopsExercise() {
    let result = '<h3>Résultats des exercices sur les boucles :</h3>';
    
    // Boucle for classique
    result += '<p>Boucle for : ';
    for (let i = 1; i <= 5; i++) {
        result += `${i} `;
    }
    result += '</p>';
    
    // Boucle while
    let compteur = 1;
    result += '<p>Boucle while : ';
    while (compteur <= 3) {
        result += `${compteur} `;
        compteur++;
    }
    result += '</p>';
    
    // Boucle for...of
    let couleurs = ['rouge', 'vert', 'bleu'];
    result += '<p>Boucle for...of : ';
    for (let couleur of couleurs) {
        result += `${couleur} `;
    }
    result += '</p>';
    
    displayResult('loops-result', result);
}

// 5. Fonctions
function runFunctionsExercise() {
    let result = '<h3>Résultats des exercices sur les fonctions :</h3>';
    
    // Fonction classique
    function addition(a, b) {
        return a + b;
    }
    
    // Fonction fléchée
    const multiplication = (a, b) => a * b;
    
    // Fonction avec paramètres par défaut
    function saluer(nom = "visiteur") {
        return `Bonjour ${nom} !`;
    }
    
    // Utilisation des fonctions
    result += `<p>Addition : ${addition(5, 3)}</p>`;
    result += `<p>Multiplication : ${multiplication(4, 2)}</p>`;
    result += `<p>Saluer : ${saluer()}</p>`;
    result += `<p>Saluer avec nom : ${saluer("Alice")}</p>`;
    
    displayResult('functions-result', result);
} 