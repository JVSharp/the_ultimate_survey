// ========================================
// TRANSLATIONS
// ========================================

const translations = {
    es: {
        title: "LA ENCUESTA FINAL",
        subtitle: "Descubre tu verdadera esencia",
        intro: "Responde algunas preguntas y descubre:",
        features: [
            "→ Tu Pokémon de 1ª Gen",
            "→ Tu Carta del Tarot",
            "→ Tu Elemento",
            "→ Tu Color de Aura",
            "→ Tu Clase RPG",
            "→ Eventos de tu Nacimiento"
        ],
        startButton: "COMENZAR",
        startButton: "COMENZAR",
        nextButton: "SIGUIENTE",
        backButton: "ANTERIOR",
        calculating: "Analizando tu esencia...",
        shareButton: "📸 COMPARTIR",
        downloadButton: "💾 DESCARGAR",
        restartButton: "REINICIAR",
        resultsTitle: "TUS RESULTADOS",
        resultLabels: {
            pokemon: "Tu Pokémon",
            tarot: "Tu Carta del Tarot",
            element: "Tu Elemento",
            aura: "Color de Aura",
            rpgClass: "Tu Clase RPG",
            birthEvent: "Tu Día Especial",
            daysAlive: "Días Vivo",
            fliesEaten: "Moscas Comidas",
            heartbeats: "Latidos",
            blinks: "Parpadeos",
            steps: "Pasos",
            pizzas: "Pizzas"
        },
        funStatsDescriptions: {
            daysAlive: "Has vivido {value} días en este planeta",
            fliesEaten: "Aproximadamente {value} moscas sin querer",
            heartbeats: "Tu corazón ha latido aproximadamente {value} veces",
            blinks: "Has parpadeado alrededor de {value} veces",
            steps: "Has caminado aproximadamente {value} pasos",
            pizzas: "Probablemente has comido {value} pizzas"
        }
    },
    en: {
        title: "THE FINAL SURVEY",
        subtitle: "Discover your true essence",
        intro: "Answer some questions and discover:",
        features: [
            "→ Your 1st Gen Pokémon",
            "→ Your Tarot Card",
            "→ Your Element",
            "→ Your Aura Color",
            "→ Your RPG Class",
            "→ Your Birth Events"
        ],
        startButton: "START",
        startButton: "START",
        nextButton: "NEXT",
        backButton: "BACK",
        calculating: "Analyzing your essence...",
        shareButton: "📸 SHARE",
        downloadButton: "💾 DOWNLOAD",
        restartButton: "RESTART",
        resultsTitle: "YOUR RESULTS",
        resultLabels: {
            pokemon: "Your Pokémon",
            tarot: "Your Tarot Card",
            element: "Your Element",
            aura: "Aura Color",
            rpgClass: "Your RPG Class",
            birthEvent: "Your Special Day",
            daysAlive: "Days Alive",
            fliesEaten: "Flies Eaten",
            heartbeats: "Heartbeats",
            blinks: "Blinks",
            steps: "Steps",
            pizzas: "Pizzas"
        },
        funStatsDescriptions: {
            daysAlive: "You have lived {value} days on this planet",
            fliesEaten: "Approximately {value} flies accidentally",
            heartbeats: "Your heart has beaten approximately {value} times",
            blinks: "You have blinked around {value} times",
            steps: "You have walked approximately {value} steps",
            pizzas: "You have probably eaten {value} pizzas"
        }
    },
    pt: {
        title: "A PESQUISA FINAL",
        subtitle: "Descubra sua verdadeira essência",
        intro: "Responda algumas perguntas e descubra:",
        features: [
            "→ Seu Pokémon de 1ª Gen",
            "→ Sua Carta de Tarô",
            "→ Seu Elemento",
            "→ Cor da Sua Aura",
            "→ Sua Classe RPG",
            "→ Eventos do Seu Nascimento"
        ],
        startButton: "COMEÇAR",
        startButton: "COMEÇAR",
        nextButton: "PRÓXIMO",
        backButton: "VOLTAR",
        calculating: "Analisando sua essência...",
        shareButton: "📸 COMPARTILHAR",
        downloadButton: "💾 BAIXAR",
        restartButton: "REINICIAR",
        resultsTitle: "SEUS RESULTADOS",
        resultLabels: {
            pokemon: "Seu Pokémon",
            tarot: "Sua Carta de Tarô",
            element: "Seu Elemento",
            aura: "Cor da Aura",
            rpgClass: "Sua Classe RPG",
            birthEvent: "Seu Dia Especial",
            daysAlive: "Dias Vivo",
            fliesEaten: "Moscas Comidas",
            heartbeats: "Batimentos",
            blinks: "Piscadas",
            steps: "Passos",
            pizzas: "Pizzas"
        },
        funStatsDescriptions: {
            daysAlive: "Você viveu {value} dias neste planeta",
            fliesEaten: "Aproximadamente {value} moscas sem querer",
            heartbeats: "Seu coração bateu aproximadamente {value} vezes",
            blinks: "Você piscou cerca de {value} vezes",
            steps: "Você caminhou aproximadamente {value} passos",
            pizzas: "Você provavelmente comeu {value} pizzas"
        }
    }
};

// Questions in multiple languages
const questionsData = {
    es: [
        {
            id: 'name',
            type: 'text',
            text: '¿Cuál es tu nombre?',
            placeholder: 'Ingresa tu nombre...'
        },
        {
            id: 'birthdate',
            type: 'date',
            text: '¿Cuál es tu fecha de nacimiento?',
            placeholder: 'DD/MM/AAAA'
        },
        {
            id: 'gender',
            type: 'options',
            text: '¿Cuál es tu género?',
            options: ['Masculino', 'Femenino', 'No binario', 'Prefiero no decir']
        },
        {
            id: 'color',
            type: 'options',
            text: '¿Qué color te atrae más?',
            options: ['Rojo', 'Azul', 'Verde', 'Amarillo', 'Morado', 'Negro']
        },
        {
            id: 'element',
            type: 'options',
            text: '¿Con qué elemento te identificas?',
            options: ['Fuego', 'Agua', 'Tierra', 'Aire', 'Rayo', 'Hielo']
        },
        {
            id: 'time',
            type: 'options',
            text: '¿Cuál es tu momento favorito del día?',
            options: ['Amanecer', 'Mañana', 'Tarde', 'Atardecer', 'Noche', 'Medianoche']
        },
        {
            id: 'personality',
            type: 'options',
            text: '¿Cómo te describirías?',
            options: ['Aventurero', 'Pensador', 'Líder', 'Creativo', 'Protector', 'Místico']
        },
        {
            id: 'hobby',
            type: 'options',
            text: '¿Qué prefieres hacer en tu tiempo libre?',
            options: ['Leer', 'Deportes', 'Arte', 'Videojuegos', 'Música', 'Naturaleza']
        },
        {
            id: 'food',
            type: 'options',
            text: '¿Cuál es tu tipo de comida favorita?',
            options: ['Dulce', 'Salado', 'Picante', 'Ácido', 'Amargo', 'Umami']
        }
    ],
    en: [
        {
            id: 'name',
            type: 'text',
            text: 'What is your name?',
            placeholder: 'Enter your name...'
        },
        {
            id: 'birthdate',
            type: 'date',
            text: 'What is your birth date?',
            placeholder: 'MM/DD/YYYY'
        },
        {
            id: 'gender',
            type: 'options',
            text: 'What is your gender?',
            options: ['Male', 'Female', 'Non-binary', 'Prefer not to say']
        },
        {
            id: 'color',
            type: 'options',
            text: 'Which color attracts you most?',
            options: ['Red', 'Blue', 'Green', 'Yellow', 'Purple', 'Black']
        },
        {
            id: 'element',
            type: 'options',
            text: 'Which element do you identify with?',
            options: ['Fire', 'Water', 'Earth', 'Air', 'Lightning', 'Ice']
        },
        {
            id: 'time',
            type: 'options',
            text: 'What is your favorite time of day?',
            options: ['Dawn', 'Morning', 'Afternoon', 'Sunset', 'Night', 'Midnight']
        },
        {
            id: 'personality',
            type: 'options',
            text: 'How would you describe yourself?',
            options: ['Adventurous', 'Thinker', 'Leader', 'Creative', 'Protector', 'Mystic']
        },
        {
            id: 'hobby',
            type: 'options',
            text: 'What do you prefer to do in your free time?',
            options: ['Reading', 'Sports', 'Art', 'Video Games', 'Music', 'Nature']
        },
        {
            id: 'food',
            type: 'options',
            text: 'What is your favorite type of food?',
            options: ['Sweet', 'Salty', 'Spicy', 'Sour', 'Bitter', 'Umami']
        }
    ],
    pt: [
        {
            id: 'name',
            type: 'text',
            text: 'Qual é o seu nome?',
            placeholder: 'Digite seu nome...'
        },
        {
            id: 'birthdate',
            type: 'date',
            text: 'Qual é a sua data de nascimento?',
            placeholder: 'DD/MM/AAAA'
        },
        {
            id: 'gender',
            type: 'options',
            text: 'Qual é o seu gênero?',
            options: ['Masculino', 'Feminino', 'Não-binário', 'Prefiro não dizer']
        },
        {
            id: 'color',
            type: 'options',
            text: 'Qual cor te atrai mais?',
            options: ['Vermelho', 'Azul', 'Verde', 'Amarelo', 'Roxo', 'Preto']
        },
        {
            id: 'element',
            type: 'options',
            text: 'Com qual elemento você se identifica?',
            options: ['Fogo', 'Água', 'Terra', 'Ar', 'Raio', 'Gelo']
        },
        {
            id: 'time',
            type: 'options',
            text: 'Qual é o seu momento favorito do dia?',
            options: ['Amanhecer', 'Manhã', 'Tarde', 'Pôr do sol', 'Noite', 'Meia-noite']
        },
        {
            id: 'personality',
            type: 'options',
            text: 'Como você se descreveria?',
            options: ['Aventureiro', 'Pensador', 'Líder', 'Criativo', 'Protetor', 'Místico']
        },
        {
            id: 'hobby',
            type: 'options',
            text: 'O que você prefere fazer no seu tempo livre?',
            options: ['Ler', 'Esportes', 'Arte', 'Videogames', 'Música', 'Natureza']
        },
        {
            id: 'food',
            type: 'options',
            text: 'Qual é o seu tipo de comida favorita?',
            options: ['Doce', 'Salgado', 'Picante', 'Azedo', 'Amargo', 'Umami']
        }
    ]
};

let currentLanguage = 'es';

function changeLanguage(lang) {
    currentLanguage = lang;

    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-lang="${lang}"]`).classList.add('active');

    // Update UI text
    updateUIText();

    // Update active survey questions if function exists (defined in app.js)
    if (typeof window.updateActiveSurveyQuestions === 'function') {
        window.updateActiveSurveyQuestions();
    }
}

function updateUIText() {
    const t = translations[currentLanguage];

    // Update welcome screen if it exists
    const welcomeScreen = document.getElementById('welcome-screen');
    if (welcomeScreen) {
        const title = welcomeScreen.querySelector('.glitch-text');
        const subtitle = welcomeScreen.querySelector('.subtitle');
        const intro = welcomeScreen.querySelector('.pixel-box p');
        const featureList = welcomeScreen.querySelector('.feature-list');
        const startBtn = welcomeScreen.querySelector('.pixel-button .button-text');

        if (title) title.textContent = t.title;
        if (subtitle) subtitle.textContent = t.subtitle;
        if (intro) intro.textContent = t.intro;
        if (featureList) featureList.innerHTML = t.features.map(f => `<li>${f}</li>`).join('');
        if (startBtn) startBtn.textContent = t.startButton;
    }

    // Update results screen if it exists and is active
    const resultsScreen = document.getElementById('results-screen');
    if (resultsScreen && resultsScreen.classList.contains('active') && lastResults) {
        // Regenerate entire results display with new language
        displayResults(lastResults);
    }
}

// ========================================
// EXTENDED QUESTIONS FOR LONG MODE (MBTI)
// ========================================

const extendedQuestionsData = {
    es: [
        // Extraversion vs Introversion
        {
            id: 'mbti_ei_1',
            type: 'options',
            text: 'En una fiesta, prefieres:',
            options: ['Hablar con muchas personas (E)', 'Conversar profundamente con pocas personas (I)'],
            dimension: 'EI',
            scores: [1, 0]
        },
        {
            id: 'mbti_ei_2',
            type: 'options',
            text: 'Después de un día largo, te sientes mejor:',
            options: ['Saliendo con amigos (E)', 'Quedándote solo en casa (I)'],
            dimension: 'EI',
            scores: [1, 0]
        },
        {
            id: 'mbti_ei_3',
            type: 'options',
            text: 'Cuando conoces gente nueva:',
            options: ['Te emocionas y hablas fácilmente (E)', 'Eres más reservado y cauteloso (I)'],
            dimension: 'EI',
            scores: [1, 0]
        },
        {
            id: 'mbti_ei_4',
            type: 'options',
            text: 'Prefieres trabajar:',
            options: ['En equipo con otros (E)', 'Solo o en grupos pequeños (I)'],
            dimension: 'EI',
            scores: [1, 0]
        },
        // Sensing vs Intuition
        {
            id: 'mbti_sn_1',
            type: 'options',
            text: 'Confías más en:',
            options: ['Hechos y experiencias concretas (S)', 'Intuiciones y posibilidades (N)'],
            dimension: 'SN',
            scores: [1, 0]
        },
        {
            id: 'mbti_sn_2',
            type: 'options',
            text: 'Prefieres hablar sobre:',
            options: ['Cosas prácticas y reales (S)', 'Ideas abstractas y teorías (N)'],
            dimension: 'SN',
            scores: [1, 0]
        },
        {
            id: 'mbti_sn_3',
            type: 'options',
            text: 'Al aprender algo nuevo:',
            options: ['Prefieres instrucciones paso a paso (S)', 'Prefieres entender el concepto general (N)'],
            dimension: 'SN',
            scores: [1, 0]
        },
        {
            id: 'mbti_sn_4',
            type: 'options',
            text: 'Te enfocas más en:',
            options: ['El presente y lo que es (S)', 'El futuro y lo que podría ser (N)'],
            dimension: 'SN',
            scores: [1, 0]
        },
        // Thinking vs Feeling
        {
            id: 'mbti_tf_1',
            type: 'options',
            text: 'Al tomar decisiones, priorizas:',
            options: ['La lógica y la objetividad (T)', 'Los valores y las emociones (F)'],
            dimension: 'TF',
            scores: [1, 0]
        },
        {
            id: 'mbti_tf_2',
            type: 'options',
            text: 'Valoras más:',
            options: ['La verdad y la justicia (T)', 'La armonía y la compasión (F)'],
            dimension: 'TF',
            scores: [1, 0]
        },
        {
            id: 'mbti_tf_3',
            type: 'options',
            text: 'En un conflicto, tiendes a:',
            options: ['Analizar quién tiene razón (T)', 'Considerar cómo se sienten todos (F)'],
            dimension: 'TF',
            scores: [1, 0]
        },
        {
            id: 'mbti_tf_4',
            type: 'options',
            text: 'Te describirías como:',
            options: ['Más racional y objetivo (T)', 'Más empático y personal (F)'],
            dimension: 'TF',
            scores: [1, 0]
        },
        // Judging vs Perceiving
        {
            id: 'mbti_jp_1',
            type: 'options',
            text: 'Prefieres:',
            options: ['Tener un plan claro (J)', 'Ser espontáneo y flexible (P)'],
            dimension: 'JP',
            scores: [1, 0]
        },
        {
            id: 'mbti_jp_2',
            type: 'options',
            text: 'Tu espacio de trabajo es:',
            options: ['Organizado y ordenado (J)', 'Más caótico pero funcional (P)'],
            dimension: 'JP',
            scores: [1, 0]
        },
        {
            id: 'mbti_jp_3',
            type: 'options',
            text: 'Con los proyectos:',
            options: ['Los terminas con anticipación (J)', 'Trabajas mejor bajo presión (P)'],
            dimension: 'JP',
            scores: [1, 0]
        },
        {
            id: 'mbti_jp_4',
            type: 'options',
            text: 'Prefieres:',
            options: ['Decidir y cerrar temas (J)', 'Mantener opciones abiertas (P)'],
            dimension: 'JP',
            scores: [1, 0]
        }
    ],
    en: [
        // Extraversion vs Introversion
        {
            id: 'mbti_ei_1',
            type: 'options',
            text: 'At a party, you prefer:',
            options: ['Talking to many people (E)', 'Having deep conversations with few people (I)'],
            dimension: 'EI',
            scores: [1, 0]
        },
        {
            id: 'mbti_ei_2',
            type: 'options',
            text: 'After a long day, you feel better:',
            options: ['Going out with friends (E)', 'Staying alone at home (I)'],
            dimension: 'EI',
            scores: [1, 0]
        },
        {
            id: 'mbti_ei_3',
            type: 'options',
            text: 'When meeting new people:',
            options: ['You get excited and talk easily (E)', 'You are more reserved and cautious (I)'],
            dimension: 'EI',
            scores: [1, 0]
        },
        {
            id: 'mbti_ei_4',
            type: 'options',
            text: 'You prefer to work:',
            options: ['In a team with others (E)', 'Alone or in small groups (I)'],
            dimension: 'EI',
            scores: [1, 0]
        },
        // Sensing vs Intuition
        {
            id: 'mbti_sn_1',
            type: 'options',
            text: 'You trust more in:',
            options: ['Facts and concrete experiences (S)', 'Intuitions and possibilities (N)'],
            dimension: 'SN',
            scores: [1, 0]
        },
        {
            id: 'mbti_sn_2',
            type: 'options',
            text: 'You prefer to talk about:',
            options: ['Practical and real things (S)', 'Abstract ideas and theories (N)'],
            dimension: 'SN',
            scores: [1, 0]
        },
        {
            id: 'mbti_sn_3',
            type: 'options',
            text: 'When learning something new:',
            options: ['You prefer step-by-step instructions (S)', 'You prefer understanding the general concept (N)'],
            dimension: 'SN',
            scores: [1, 0]
        },
        {
            id: 'mbti_sn_4',
            type: 'options',
            text: 'You focus more on:',
            options: ['The present and what is (S)', 'The future and what could be (N)'],
            dimension: 'SN',
            scores: [1, 0]
        },
        // Thinking vs Feeling
        {
            id: 'mbti_tf_1',
            type: 'options',
            text: 'When making decisions, you prioritize:',
            options: ['Logic and objectivity (T)', 'Values and emotions (F)'],
            dimension: 'TF',
            scores: [1, 0]
        },
        {
            id: 'mbti_tf_2',
            type: 'options',
            text: 'You value more:',
            options: ['Truth and justice (T)', 'Harmony and compassion (F)'],
            dimension: 'TF',
            scores: [1, 0]
        },
        {
            id: 'mbti_tf_3',
            type: 'options',
            text: 'In a conflict, you tend to:',
            options: ['Analyze who is right (T)', 'Consider how everyone feels (F)'],
            dimension: 'TF',
            scores: [1, 0]
        },
        {
            id: 'mbti_tf_4',
            type: 'options',
            text: 'You would describe yourself as:',
            options: ['More rational and objective (T)', 'More empathetic and personal (F)'],
            dimension: 'TF',
            scores: [1, 0]
        },
        // Judging vs Perceiving
        {
            id: 'mbti_jp_1',
            type: 'options',
            text: 'You prefer:',
            options: ['Having a clear plan (J)', 'Being spontaneous and flexible (P)'],
            dimension: 'JP',
            scores: [1, 0]
        },
        {
            id: 'mbti_jp_2',
            type: 'options',
            text: 'Your workspace is:',
            options: ['Organized and tidy (J)', 'More chaotic but functional (P)'],
            dimension: 'JP',
            scores: [1, 0]
        },
        {
            id: 'mbti_jp_3',
            type: 'options',
            text: 'With projects:',
            options: ['You finish them early (J)', 'You work better under pressure (P)'],
            dimension: 'JP',
            scores: [1, 0]
        },
        {
            id: 'mbti_jp_4',
            type: 'options',
            text: 'You prefer:',
            options: ['Deciding and closing topics (J)', 'Keeping options open (P)'],
            dimension: 'JP',
            scores: [1, 0]
        }
    ],
    pt: [
        // Extraversion vs Introversion
        {
            id: 'mbti_ei_1',
            type: 'options',
            text: 'Em uma festa, você prefere:',
            options: ['Falar com muitas pessoas (E)', 'Conversar profundamente com poucas pessoas (I)'],
            dimension: 'EI',
            scores: [1, 0]
        },
        {
            id: 'mbti_ei_2',
            type: 'options',
            text: 'Depois de um dia longo, você se sente melhor:',
            options: ['Saindo com amigos (E)', 'Ficando sozinho em casa (I)'],
            dimension: 'EI',
            scores: [1, 0]
        },
        {
            id: 'mbti_ei_3',
            type: 'options',
            text: 'Quando conhece pessoas novas:',
            options: ['Você fica animado e fala facilmente (E)', 'Você é mais reservado e cauteloso (I)'],
            dimension: 'EI',
            scores: [1, 0]
        },
        {
            id: 'mbti_ei_4',
            type: 'options',
            text: 'Você prefere trabalhar:',
            options: ['Em equipe com outros (E)', 'Sozinho ou em grupos pequenos (I)'],
            dimension: 'EI',
            scores: [1, 0]
        },
        // Sensing vs Intuition
        {
            id: 'mbti_sn_1',
            type: 'options',
            text: 'Você confia mais em:',
            options: ['Fatos e experiências concretas (S)', 'Intuições e possibilidades (N)'],
            dimension: 'SN',
            scores: [1, 0]
        },
        {
            id: 'mbti_sn_2',
            type: 'options',
            text: 'Você prefere falar sobre:',
            options: ['Coisas práticas e reais (S)', 'Ideias abstratas e teorias (N)'],
            dimension: 'SN',
            scores: [1, 0]
        },
        {
            id: 'mbti_sn_3',
            type: 'options',
            text: 'Ao aprender algo novo:',
            options: ['Você prefere instruções passo a passo (S)', 'Você prefere entender o conceito geral (N)'],
            dimension: 'SN',
            scores: [1, 0]
        },
        {
            id: 'mbti_sn_4',
            type: 'options',
            text: 'Você se concentra mais em:',
            options: ['O presente e o que é (S)', 'O futuro e o que poderia ser (N)'],
            dimension: 'SN',
            scores: [1, 0]
        },
        // Thinking vs Feeling
        {
            id: 'mbti_tf_1',
            type: 'options',
            text: 'Ao tomar decisões, você prioriza:',
            options: ['A lógica e a objetividade (T)', 'Os valores e as emoções (F)'],
            dimension: 'TF',
            scores: [1, 0]
        },
        {
            id: 'mbti_tf_2',
            type: 'options',
            text: 'Você valoriza mais:',
            options: ['A verdade e a justiça (T)', 'A harmonia e a compaixão (F)'],
            dimension: 'TF',
            scores: [1, 0]
        },
        {
            id: 'mbti_tf_3',
            type: 'options',
            text: 'Em um conflito, você tende a:',
            options: ['Analisar quem está certo (T)', 'Considerar como todos se sentem (F)'],
            dimension: 'TF',
            scores: [1, 0]
        },
        {
            id: 'mbti_tf_4',
            type: 'options',
            text: 'Você se descreveria como:',
            options: ['Mais racional e objetivo (T)', 'Mais empático e pessoal (F)'],
            dimension: 'TF',
            scores: [1, 0]
        },
        // Judging vs Perceiving
        {
            id: 'mbti_jp_1',
            type: 'options',
            text: 'Você prefere:',
            options: ['Ter um plano claro (J)', 'Ser espontâneo e flexível (P)'],
            dimension: 'JP',
            scores: [1, 0]
        },
        {
            id: 'mbti_jp_2',
            type: 'options',
            text: 'Seu espaço de trabalho é:',
            options: ['Organizado e arrumado (J)', 'Mais caótico mas funcional (P)'],
            dimension: 'JP',
            scores: [1, 0]
        },
        {
            id: 'mbti_jp_3',
            type: 'options',
            text: 'Com projetos:',
            options: ['Você os termina com antecedência (J)', 'Você trabalha melhor sob pressão (P)'],
            dimension: 'JP',
            scores: [1, 0]
        },
        {
            id: 'mbti_jp_4',
            type: 'options',
            text: 'Você prefere:',
            options: ['Decidir e fechar assuntos (J)', 'Manter opções abertas (P)'],
            dimension: 'JP',
            scores: [1, 0]
        }
    ]
};
