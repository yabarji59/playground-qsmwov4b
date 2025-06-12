// Données du quiz
const quizData = {
    variables: [
        {
            question: "Quelle est la bonne façon de déclarer une variable constante en JavaScript ?",
            options: [
                "var x = 5;",
                "let x = 5;",
                "const x = 5;",
                "x = 5;"
            ],
            correctAnswer: 2,
            explanation: "const est utilisé pour déclarer une variable constante qui ne peut pas être réassignée."
        },
        {
            question: "Quel type de données est représenté par la valeur 'true' ?",
            options: [
                "String",
                "Number",
                "Boolean",
                "Object"
            ],
            correctAnswer: 2,
            explanation: "true est une valeur de type Boolean."
        },
        {
            question: "Comment accéder à la propriété 'age' d'un objet 'person' ?",
            options: [
                "person[age]",
                "person.age",
                "person('age')",
                "person->age"
            ],
            correctAnswer: 1,
            explanation: "La notation point (person.age) est la façon standard d'accéder aux propriétés d'un objet."
        }
    ],
    arrays: [
        {
            question: "Quelle méthode ajoute un élément à la fin d'un tableau ?",
            options: [
                "push()",
                "pop()",
                "shift()",
                "unshift()"
            ],
            correctAnswer: 0,
            explanation: "push() ajoute un élément à la fin d'un tableau."
        },
        {
            question: "Comment créer un nouveau tableau à partir d'un tableau existant en doublant chaque valeur ?",
            options: [
                "array.forEach()",
                "array.map()",
                "array.filter()",
                "array.reduce()"
            ],
            correctAnswer: 1,
            explanation: "map() crée un nouveau tableau en appliquant une fonction à chaque élément."
        },
        {
            question: "Quelle méthode supprime le premier élément d'un tableau ?",
            options: [
                "push()",
                "pop()",
                "shift()",
                "unshift()"
            ],
            correctAnswer: 2,
            explanation: "shift() supprime le premier élément d'un tableau."
        }
    ],
    conditions: [
        {
            question: "Quelle est la syntaxe correcte pour une condition if en JavaScript ?",
            options: [
                "if x == 5:",
                "if (x = 5)",
                "if (x === 5)",
                "if x === 5:"
            ],
            correctAnswer: 2,
            explanation: "En JavaScript, les conditions if utilisent des parenthèses et === pour la comparaison stricte."
        },
        {
            question: "Quel opérateur est utilisé pour la comparaison stricte ?",
            options: [
                "==",
                "===",
                "=",
                "=>"
            ],
            correctAnswer: 1,
            explanation: "=== est l'opérateur de comparaison stricte qui vérifie aussi le type."
        },
        {
            question: "Comment écrire une condition ternaire pour assigner 'majeur' si age >= 18, sinon 'mineur' ?",
            options: [
                "age >= 18 ? 'majeur' : 'mineur'",
                "if (age >= 18) 'majeur' else 'mineur'",
                "age >= 18 && 'majeur' || 'mineur'",
                "ternary(age >= 18, 'majeur', 'mineur')"
            ],
            correctAnswer: 0,
            explanation: "L'opérateur ternaire utilise la syntaxe condition ? valeurSiVrai : valeurSiFaux."
        }
    ],
    loops: [
        {
            question: "Quelle boucle est la plus appropriée pour itérer sur un tableau ?",
            options: [
                "for (let i = 0; i < array.length; i++)",
                "while (i < array.length)",
                "for...of",
                "do...while"
            ],
            correctAnswer: 2,
            explanation: "for...of est la syntaxe la plus simple pour itérer sur les éléments d'un tableau."
        },
        {
            question: "Comment sortir d'une boucle for avant sa fin ?",
            options: [
                "exit",
                "break",
                "continue",
                "return"
            ],
            correctAnswer: 1,
            explanation: "break permet de sortir complètement d'une boucle."
        },
        {
            question: "Quelle boucle s'exécute au moins une fois ?",
            options: [
                "for",
                "while",
                "do...while",
                "for...of"
            ],
            correctAnswer: 2,
            explanation: "do...while s'exécute au moins une fois car la condition est vérifiée à la fin."
        }
    ],
    functions: [
        {
            question: "Quelle est la syntaxe correcte pour une fonction fléchée ?",
            options: [
                "function(x) => x * 2",
                "x => x * 2",
                "arrow x => x * 2",
                "=> x * 2"
            ],
            correctAnswer: 1,
            explanation: "La syntaxe de base d'une fonction fléchée est paramètre => expression."
        },
        {
            question: "Comment déclarer une fonction avec un paramètre par défaut ?",
            options: [
                "function greet(name = 'World')",
                "function greet(name: 'World')",
                "function greet(name || 'World')",
                "function greet(name ? 'World')"
            ],
            correctAnswer: 0,
            explanation: "Les paramètres par défaut utilisent la syntaxe paramètre = valeur."
        },
        {
            question: "Quelle méthode permet de créer une nouvelle fonction avec un contexte this fixe ?",
            options: [
                "call()",
                "apply()",
                "bind()",
                "attach()"
            ],
            correctAnswer: 2,
            explanation: "bind() crée une nouvelle fonction avec un contexte this fixe."
        }
    ]
};

// Fonction pour initialiser le quiz
function initQuiz() {
    const quizContainer = document.getElementById('quiz-container');
    let currentCategory = 'variables';
    let currentQuestion = 0;
    let score = 0;

    // Fonction pour afficher une question
    function displayQuestion(category, questionIndex) {
        const question = quizData[category][questionIndex];
        const questionHTML = `
            <div class="question">
                <h3>Question ${questionIndex + 1}</h3>
                <p>${question.question}</p>
                <div class="options">
                    ${question.options.map((option, index) => `
                        <button class="option" onclick="checkAnswer(${index}, ${question.correctAnswer}, '${category}', ${questionIndex})">
                            ${option}
                        </button>
                    `).join('')}
                </div>
                <div id="explanation-${category}-${questionIndex}" class="explanation"></div>
            </div>
        `;
        quizContainer.innerHTML = questionHTML;
    }

    // Fonction pour vérifier la réponse
    window.checkAnswer = function(selectedIndex, correctIndex, category, questionIndex) {
        const explanationDiv = document.getElementById(`explanation-${category}-${questionIndex}`);
        const question = quizData[category][questionIndex];
        
        if (selectedIndex === correctIndex) {
            score++;
            explanationDiv.innerHTML = `<p class="correct">Correct ! ${question.explanation}</p>`;
        } else {
            explanationDiv.innerHTML = `<p class="incorrect">Incorrect. ${question.explanation}</p>`;
        }

        // Désactiver les boutons après la réponse
        const buttons = document.querySelectorAll('.option');
        buttons.forEach(button => button.disabled = true);

        // Afficher le score
        document.getElementById('score').textContent = `Score: ${score}/${Object.keys(quizData[category]).length}`;

        // Passer à la question suivante après 2 secondes
        setTimeout(() => {
            if (questionIndex < quizData[category].length - 1) {
                displayQuestion(category, questionIndex + 1);
            } else {
                showResults(category);
            }
        }, 2000);
    };

    // Fonction pour afficher les résultats
    function showResults(category) {
        const totalQuestions = quizData[category].length;
        const percentage = (score / totalQuestions) * 100;
        
        quizContainer.innerHTML = `
            <div class="results">
                <h2>Quiz Terminé !</h2>
                <p>Score final : ${score}/${totalQuestions} (${percentage}%)</p>
                <button onclick="restartQuiz('${category}')">Recommencer</button>
                <button onclick="changeCategory()">Changer de catégorie</button>
            </div>
        `;
    }

    // Fonction pour redémarrer le quiz
    window.restartQuiz = function(category) {
        score = 0;
        currentQuestion = 0;
        displayQuestion(category, 0);
        document.getElementById('score').textContent = 'Score: 0/0';
    };

    // Fonction pour changer de catégorie
    window.changeCategory = function() {
        const categories = Object.keys(quizData);
        const currentIndex = categories.indexOf(currentCategory);
        const nextIndex = (currentIndex + 1) % categories.length;
        currentCategory = categories[nextIndex];
        score = 0;
        currentQuestion = 0;
        displayQuestion(currentCategory, 0);
        document.getElementById('score').textContent = 'Score: 0/0';
    };

    // Initialiser le quiz
    displayQuestion(currentCategory, 0);
} 