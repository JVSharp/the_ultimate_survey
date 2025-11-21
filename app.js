// ========================================
// DATA - QUESTIONS & RESULTS
// ========================================

// Questions will be loaded from translations.js based on language
let questions = [];

// Resultados Internacionalizados
const resultsData = {
    pokemon: [
        { name: 'Charizard', pokeId: 6, es: { type: 'Fuego/Volador', description: 'Poderoso y feroz, un líder nato' }, en: { type: 'Fire/Flying', description: 'Powerful and fierce, a born leader' }, pt: { type: 'Fogo/Voador', description: 'Poderoso e feroz, um líder nato' } },
        { name: 'Blastoise', pokeId: 9, es: { type: 'Agua', description: 'Fuerte y protector, siempre confiable' }, en: { type: 'Water', description: 'Strong and protective, always reliable' }, pt: { type: 'Água', description: 'Forte e protetor, sempre confiável' } },
        { name: 'Venusaur', pokeId: 3, es: { type: 'Planta/Veneno', description: 'Equilibrado y sabio, conectado con la naturaleza' }, en: { type: 'Grass/Poison', description: 'Balanced and wise, connected with nature' }, pt: { type: 'Grama/Venenoso', description: 'Equilibrado e sábio, conectado com a natureza' } },
        { name: 'Pikachu', pokeId: 25, es: { type: 'Eléctrico', description: 'Energético y carismático, amigo de todos' }, en: { type: 'Electric', description: 'Energetic and charismatic, friend to all' }, pt: { type: 'Elétrico', description: 'Energético e carismático, amigo de todos' } },
        { name: 'Mewtwo', pokeId: 150, es: { type: 'Psíquico', description: 'Misterioso y poderoso, pensador profundo' }, en: { type: 'Psychic', description: 'Mysterious and powerful, deep thinker' }, pt: { type: 'Psíquico', description: 'Misterioso e poderoso, pensador profundo' } },
        { name: 'Dragonite', pokeId: 149, es: { type: 'Dragón/Volador', description: 'Noble y gentil, con gran fortaleza interior' }, en: { type: 'Dragon/Flying', description: 'Noble and gentle, with great inner strength' }, pt: { type: 'Dragão/Voador', description: 'Nobre e gentil, com grande força interior' } },
        { name: 'Gengar', pokeId: 94, es: { type: 'Fantasma/Veneno', description: 'Travieso y astuto, lleno de sorpresas' }, en: { type: 'Ghost/Poison', description: 'Mischievous and cunning, full of surprises' }, pt: { type: 'Fantasma/Venenoso', description: 'Travesso e astuto, cheio de surpresas' } },
        { name: 'Alakazam', pokeId: 65, es: { type: 'Psíquico', description: 'Inteligente y estratégico, maestro mental' }, en: { type: 'Psychic', description: 'Intelligent and strategic, mental master' }, pt: { type: 'Psíquico', description: 'Inteligente e estratégico, mestre mental' } },
        { name: 'Machamp', pokeId: 68, es: { type: 'Lucha', description: 'Fuerte y determinado, nunca se rinde' }, en: { type: 'Fighting', description: 'Strong and determined, never gives up' }, pt: { type: 'Luta', description: 'Forte e determinado, nunca desiste' } },
        { name: 'Lapras', pokeId: 131, es: { type: 'Agua/Hielo', description: 'Gentil y empático, sanador natural' }, en: { type: 'Water/Ice', description: 'Gentle and empathetic, natural healer' }, pt: { type: 'Água/Gelo', description: 'Gentil e empático, curador natural' } },
        { name: 'Arcanine', pokeId: 59, es: { type: 'Fuego', description: 'Leal y valiente, protector incansable' }, en: { type: 'Fire', description: 'Loyal and brave, tireless protector' }, pt: { type: 'Fogo', description: 'Leal e corajoso, protetor incansável' } },
        { name: 'Jolteon', pokeId: 135, es: { type: 'Eléctrico', description: 'Rápido y adaptable, siempre en movimiento' }, en: { type: 'Electric', description: 'Fast and adaptable, always on the move' }, pt: { type: 'Elétrico', description: 'Rápido e adaptável, sempre em movimento' } },
        { name: 'Snorlax', pokeId: 143, es: { type: 'Normal', description: 'Relajado y paciente, disfruta la vida' }, en: { type: 'Normal', description: 'Relaxed and patient, enjoys life' }, pt: { type: 'Normal', description: 'Relaxado e paciente, aproveita a vida' } },
        { name: 'Gyarados', pokeId: 130, es: { type: 'Agua/Volador', description: 'Intenso y apasionado, fuerza imparable' }, en: { type: 'Water/Flying', description: 'Intense and passionate, unstoppable force' }, pt: { type: 'Água/Voador', description: 'Intenso e apaixonado, força imparável' } },
        { name: 'Articuno', pokeId: 144, es: { type: 'Hielo/Volador', description: 'Sereno y elegante, belleza gélida' }, en: { type: 'Ice/Flying', description: 'Serene and elegant, frozen beauty' }, pt: { type: 'Gelo/Voador', description: 'Sereno e elegante, beleza gélida' } }
    ],
    tarot: [
        { es: { name: 'El Mago', description: 'Manifestación y poder personal' }, en: { name: 'The Magician', description: 'Manifestation and personal power' }, pt: { name: 'O Mago', description: 'Manifestação e poder pessoal' } },
        { es: { name: 'La Sacerdotisa', description: 'Intuición y misterio' }, en: { name: 'The High Priestess', description: 'Intuition and mystery' }, pt: { name: 'A Sacerdotisa', description: 'Intuição e mistério' } },
        { es: { name: 'La Emperatriz', description: 'Abundancia y creatividad' }, en: { name: 'The Empress', description: 'Abundance and creativity' }, pt: { name: 'A Imperatriz', description: 'Abundância e criatividade' } },
        { es: { name: 'El Emperador', description: 'Autoridad y estructura' }, en: { name: 'The Emperor', description: 'Authority and structure' }, pt: { name: 'O Imperador', description: 'Autoridade e estrutura' } },
        { es: { name: 'El Hierofante', description: 'Tradición y sabiduría' }, en: { name: 'The Hierophant', description: 'Tradition and wisdom' }, pt: { name: 'O Hierofante', description: 'Tradição e sabedoria' } },
        { es: { name: 'Los Enamorados', description: 'Elección y armonía' }, en: { name: 'The Lovers', description: 'Choice and harmony' }, pt: { name: 'Os Enamorados', description: 'Escolha e harmonia' } },
        { es: { name: 'El Carro', description: 'Voluntad y determinación' }, en: { name: 'The Chariot', description: 'Willpower and determination' }, pt: { name: 'O Carro', description: 'Vontade e determinação' } },
        { es: { name: 'La Fuerza', description: 'Coraje y compasión' }, en: { name: 'Strength', description: 'Courage and compassion' }, pt: { name: 'A Força', description: 'Coragem e compaixão' } },
        { es: { name: 'El Ermitaño', description: 'Introspección y guía interior' }, en: { name: 'The Hermit', description: 'Introspection and inner guidance' }, pt: { name: 'O Eremita', description: 'Introspecção e guia interior' } },
        { es: { name: 'La Rueda de la Fortuna', description: 'Cambio y destino' }, en: { name: 'Wheel of Fortune', description: 'Change and destiny' }, pt: { name: 'A Roda da Fortuna', description: 'Mudança e destino' } },
        { es: { name: 'La Justicia', description: 'Equilibrio y verdad' }, en: { name: 'Justice', description: 'Balance and truth' }, pt: { name: 'A Justiça', description: 'Equilíbrio e verdade' } },
        { es: { name: 'El Colgado', description: 'Perspectiva y sacrificio' }, en: { name: 'The Hanged Man', description: 'Perspective and sacrifice' }, pt: { name: 'O Enforcado', description: 'Perspectiva e sacrifício' } },
        { es: { name: 'La Muerte', description: 'Transformación y renacimiento' }, en: { name: 'Death', description: 'Transformation and rebirth' }, pt: { name: 'A Morte', description: 'Transformação e renascimento' } },
        { es: { name: 'La Templanza', description: 'Moderación y paciencia' }, en: { name: 'Temperance', description: 'Moderation and patience' }, pt: { name: 'A Temperança', description: 'Moderação e paciência' } },
        { es: { name: 'El Diablo', description: 'Tentación y liberación' }, en: { name: 'The Devil', description: 'Temptation and liberation' }, pt: { name: 'O Diabo', description: 'Tentação e libertação' } },
        { es: { name: 'La Torre', description: 'Revelación y cambio súbito' }, en: { name: 'The Tower', description: 'Revelation and sudden change' }, pt: { name: 'A Torre', description: 'Revelação e mudança súbita' } },
        { es: { name: 'La Estrella', description: 'Esperanza y renovación' }, en: { name: 'The Star', description: 'Hope and renewal' }, pt: { name: 'A Estrela', description: 'Esperança e renovação' } },
        { es: { name: 'La Luna', description: 'Ilusión y subconsciente' }, en: { name: 'The Moon', description: 'Illusion and subconscious' }, pt: { name: 'A Lua', description: 'Ilusão e subconsciente' } },
        { es: { name: 'El Sol', description: 'Alegría y éxito' }, en: { name: 'The Sun', description: 'Joy and success' }, pt: { name: 'O Sol', description: 'Alegria e sucesso' } },
        { es: { name: 'El Juicio', description: 'Renacimiento y reflexión' }, en: { name: 'Judgement', description: 'Rebirth and reflection' }, pt: { name: 'O Julgamento', description: 'Renascimento e reflexão' } },
        { es: { name: 'El Mundo', description: 'Completitud y logro' }, en: { name: 'The World', description: 'Completion and achievement' }, pt: { name: 'O Mundo', description: 'Completude e realização' } },
        { es: { name: 'El Loco', description: 'Nuevos comienzos y aventura' }, en: { name: 'The Fool', description: 'New beginnings and adventure' }, pt: { name: 'O Louco', description: 'Novos começos e aventura' } }
    ],
    elements: [
        { es: { name: 'Fuego', description: 'Pasión, energía y transformación' }, en: { name: 'Fire', description: 'Passion, energy and transformation' }, pt: { name: 'Fogo', description: 'Paixão, energia e transformação' } },
        { es: { name: 'Agua', description: 'Emoción, intuición y fluidez' }, en: { name: 'Water', description: 'Emotion, intuition and fluidity' }, pt: { name: 'Água', description: 'Emoção, intuição e fluidez' } },
        { es: { name: 'Tierra', description: 'Estabilidad, práctica y crecimiento' }, en: { name: 'Earth', description: 'Stability, practice and growth' }, pt: { name: 'Terra', description: 'Estabilidade, prática e crescimento' } },
        { es: { name: 'Aire', description: 'Intelecto, comunicación y libertad' }, en: { name: 'Air', description: 'Intellect, communication and freedom' }, pt: { name: 'Ar', description: 'Intelecto, comunicação e liberdade' } },
        { es: { name: 'Éter', description: 'Espíritu, conexión y trascendencia' }, en: { name: 'Aether', description: 'Spirit, connection and transcendence' }, pt: { name: 'Éter', description: 'Espírito, conexão e transcendência' } }
    ],
    auraColors: [
        { es: { name: 'Aura Roja', description: 'Energía vital, pasión y acción' }, en: { name: 'Red Aura', description: 'Vital energy, passion and action' }, pt: { name: 'Aura Vermelha', description: 'Energia vital, paixão e ação' } },
        { es: { name: 'Aura Azul', description: 'Calma, comunicación y verdad' }, en: { name: 'Blue Aura', description: 'Calm, communication and truth' }, pt: { name: 'Aura Azul', description: 'Calma, comunicação e verdade' } },
        { es: { name: 'Aura Verde', description: 'Sanación, equilibrio y crecimiento' }, en: { name: 'Green Aura', description: 'Healing, balance and growth' }, pt: { name: 'Aura Verde', description: 'Cura, equilíbrio e crescimento' } },
        { es: { name: 'Aura Amarilla', description: 'Alegría, creatividad y optimismo' }, en: { name: 'Yellow Aura', description: 'Joy, creativity and optimism' }, pt: { name: 'Aura Amarela', description: 'Alegria, criatividade e otimismo' } },
        { es: { name: 'Aura Violeta', description: 'Espiritualidad, intuición y magia' }, en: { name: 'Violet Aura', description: 'Spirituality, intuition and magic' }, pt: { name: 'Aura Violeta', description: 'Espiritualidade, intuição e magia' } },
        { es: { name: 'Aura Blanca', description: 'Pureza, protección y claridad' }, en: { name: 'White Aura', description: 'Purity, protection and clarity' }, pt: { name: 'Aura Branca', description: 'Pureza, proteção e clareza' } },
        { es: { name: 'Aura Dorada', description: 'Sabiduría, iluminación y divinidad' }, en: { name: 'Golden Aura', description: 'Wisdom, enlightenment and divinity' }, pt: { name: 'Aura Dourada', description: 'Sabedoria, iluminação e divindade' } },
        { es: { name: 'Aura Índigo', description: 'Percepción, visión y conocimiento' }, en: { name: 'Indigo Aura', description: 'Perception, vision and knowledge' }, pt: { name: 'Aura Índigo', description: 'Percepção, visão e conhecimento' } }
    ],
    rpgClasses: [
        { es: { name: 'Guerrero', description: 'Valiente en batalla, protector del débil' }, en: { name: 'Warrior', description: 'Brave in battle, protector of the weak' }, pt: { name: 'Guerreiro', description: 'Corajoso na batalha, protetor dos fracos' } },
        { es: { name: 'Mago', description: 'Maestro de las artes arcanas' }, en: { name: 'Mage', description: 'Master of the arcane arts' }, pt: { name: 'Mago', description: 'Mestre das artes arcanas' } },
        { es: { name: 'Arquero', description: 'Preciso y ágil, cazador experto' }, en: { name: 'Archer', description: 'Precise and agile, expert hunter' }, pt: { name: 'Arqueiro', description: 'Preciso e ágil, caçador experiente' } },
        { es: { name: 'Sanador', description: 'Portador de luz y vida' }, en: { name: 'Healer', description: 'Bearer of light and life' }, pt: { name: 'Curandeiro', description: 'Portador de luz e vida' } },
        { es: { name: 'Ladrón', description: 'Astuto y sigiloso, maestro de sombras' }, en: { name: 'Rogue', description: 'Cunning and stealthy, master of shadows' }, pt: { name: 'Ladino', description: 'Astuto e furtivo, mestre das sombras' } },
        { es: { name: 'Paladín', description: 'Campeón de la justicia y el honor' }, en: { name: 'Paladin', description: 'Champion of justice and honor' }, pt: { name: 'Paladino', description: 'Campeão da justiça e honra' } },
        { es: { name: 'Druida', description: 'Guardián de la naturaleza' }, en: { name: 'Druid', description: 'Guardian of nature' }, pt: { name: 'Druida', description: 'Guardião da natureza' } },
        { es: { name: 'Nigromante', description: 'Maestro de la vida y la muerte' }, en: { name: 'Necromancer', description: 'Master of life and death' }, pt: { name: 'Necromante', description: 'Mestre da vida e da morte' } },
        { es: { name: 'Bardo', description: 'Artista y encantador de corazones' }, en: { name: 'Bard', description: 'Artist and charmer of hearts' }, pt: { name: 'Bardo', description: 'Artista e encantador de corações' } },
        { es: { name: 'Monje', description: 'Disciplinado maestro del cuerpo y mente' }, en: { name: 'Monk', description: 'Disciplined master of body and mind' }, pt: { name: 'Monge', description: 'Mestre disciplinado do corpo e da mente' } }
    ]
};

// ========================================
// STATE MANAGEMENT
// ========================================

let currentQuestion = 0;
let answers = {};
let musicPlaying = false;
let lastResults = null; // Store results for language switching
let surveyMode = 'short'; // 'short' or 'long'


// ========================================
// MUSIC PLAYER
// ========================================

function toggleMusic() {
    const audio = document.getElementById('background-music');
    const icon = document.getElementById('music-icon');

    if (musicPlaying) {
        audio.pause();
        icon.textContent = '🔇';
        musicPlaying = false;
    } else {
        audio.play().catch(e => console.log('Audio play failed:', e));
        icon.textContent = '🔊';
        musicPlaying = true;
    }
}

// Volume control
document.addEventListener('DOMContentLoaded', () => {
    const volumeSlider = document.getElementById('volume-slider');
    const audio = document.getElementById('background-music');

    if (volumeSlider && audio) {
        volumeSlider.addEventListener('input', (e) => {
            audio.volume = e.target.value / 100;
        });

        // Set initial volume
        audio.volume = 0.5;
    }
});

// ========================================
// NAVIGATION FUNCTIONS
// ========================================

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

function startSurvey(mode = 'short') {
    currentQuestion = 0;
    answers = {};
    surveyMode = mode;

    // Load questions based on mode
    if (mode === 'long') {
        questions = [...questionsData[currentLanguage], ...extendedQuestionsData[currentLanguage]];
    } else {
        questions = questionsData[currentLanguage];
    }

    showScreen('survey-screen');
    showQuestion();
}

// Make available globally for translations.js
// Make available globally for translations.js
window.updateActiveSurveyQuestions = async function () {
    const surveyScreen = document.getElementById('survey-screen');
    const resultsScreen = document.getElementById('results-screen');

    // If in survey mode, reload questions and refresh view
    if (surveyScreen.classList.contains('active')) {
        if (surveyMode === 'long') {
            questions = [...questionsData[currentLanguage], ...extendedQuestionsData[currentLanguage]];
        } else {
            questions = questionsData[currentLanguage];
        }
        showQuestion();
    }
    // If in results mode, re-display results with new language
    else if (resultsScreen.classList.contains('active') && lastResults) {
        // Re-fetch historical event in the new language if birthdate exists
        if (answers.birthdate) {
            // Show a small loading indicator or just update text? 
            // Since it's fast, we can just await it.
            // But to be safe, let's update the object.
            const newEvent = await getHistoricalEvent(answers.birthdate);
            lastResults.birthEvent = newEvent;
        }
        displayResults(lastResults);
    }
};

function restartSurvey() {
    currentQuestion = 0;
    answers = {};
    showScreen('welcome-screen');
    updateUIText();
}

// ========================================
// QUESTION RENDERING
// ========================================

function showQuestion() {
    if (!questions || !questions[currentQuestion]) {
        console.error("Question not found:", currentQuestion);
        return;
    }
    const question = questions[currentQuestion];
    const container = document.getElementById('question-container');
    const progress = ((currentQuestion + 1) / questions.length) * 100;

    document.getElementById('progress-fill').style.width = `${progress}%`;

    // Update Static Back Button Visibility
    const backBtn = document.getElementById('survey-back-btn');
    if (backBtn) {
        backBtn.style.display = currentQuestion > 0 ? 'block' : 'none';
        backBtn.innerHTML = `← ${translations[currentLanguage].backButton}`;
    }

    let html = `<div class="question">
        <p class="question-text">${question.text}</p>`;

    if (question.type === 'text') {
        html += `
            <input 
                type="text" 
                class="question-input" 
                id="answer-input"
                placeholder="${question.placeholder}"
                autocomplete="off"
            >
            <button class="pixel-button" onclick="submitAnswer()">
                <span class="button-text">${translations[currentLanguage].nextButton}</span>
            </button>
        `;
    } else if (question.type === 'date') {
        html += `
            <input 
                type="date" 
                class="question-input" 
                id="answer-input"
                autocomplete="off"
            >
            <button class="pixel-button" onclick="submitAnswer()">
                <span class="button-text">${translations[currentLanguage].nextButton}</span>
            </button>
        `;
    } else if (question.type === 'options') {
        html += `<div class="options-grid">`;
        question.options.forEach((option, index) => {
            html += `
                <button 
                    class="option-button" 
                    onclick="selectOption('${option}')"
                    id="option-${index}"
                >
                    → ${option}
                </button>
            `;
        });
        html += `</div>`;
    }

    html += `</div>`;
    container.innerHTML = html;

    // Focus input if text/date question
    if (question.type === 'text' || question.type === 'date') {
        setTimeout(() => {
            document.getElementById('answer-input').focus();
        }, 100);

        // Allow Enter key to submit
        document.getElementById('answer-input').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                submitAnswer();
            }
        });
    }
}

function selectOption(option) {
    if (!questions[currentQuestion]) return;
    const question = questions[currentQuestion];
    answers[question.id] = option;

    // Visual feedback
    document.querySelectorAll('.option-button').forEach(btn => {
        btn.classList.remove('selected');
    });
    event.target.classList.add('selected');

    // Auto-advance after short delay
    setTimeout(() => {
        nextQuestion();
    }, 300);
}

function submitAnswer() {
    const question = questions[currentQuestion];
    const input = document.getElementById('answer-input');

    if (input.value.trim() === '') {
        input.style.borderColor = '#ff00cc';
        setTimeout(() => {
            input.style.borderColor = '';
        }, 500);
        return;
    }

    answers[question.id] = input.value.trim();
    nextQuestion();
}

function nextQuestion() {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        calculateResults();
    }
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion();
    }
}

// ========================================
// POKEAPI INTEGRATION
// ========================================

function getPokemonSprite(pokeId) {
    // Return the direct URL to the Pokemon sprite from PokeAPI's GitHub repo
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeId}.png`;
}

// ========================================
// FUN STATISTICS
// ========================================

function calculateFunStats(birthdate) {
    const birth = new Date(birthdate);
    const now = new Date();
    const diffTime = Math.abs(now - birth);
    const daysAlive = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const yearsAlive = (now - birth) / (1000 * 60 * 60 * 24 * 365.25);

    return {
        daysAlive: daysAlive.toLocaleString(),
        fliesEaten: Math.floor(yearsAlive * 2).toLocaleString(), // ~2 flies per year
        heartbeats: Math.floor(daysAlive * 100000).toLocaleString(), // ~100k beats/day
        blinks: Math.floor(daysAlive * 28800).toLocaleString(), // ~28,800 blinks/day
        stepsWalked: Math.floor(daysAlive * 7500).toLocaleString(), // ~7,500 steps/day
        hoursSlept: Math.floor(daysAlive * 8).toLocaleString(), // 8 hours/day
        pizzasEaten: Math.floor(yearsAlive * 26).toLocaleString(), // ~26 pizzas/year
        songsListened: Math.floor(daysAlive * 20).toLocaleString() // ~20 songs/day
    };
}

// ========================================
// HISTORICAL EVENTS (Birth Date)
// ========================================

async function getHistoricalEvent(birthdate) {
    try {
        const date = new Date(birthdate);
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const lang = currentLanguage || 'es';

        // Use Wikipedia API to get events for that day
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000); // 10s timeout

        const response = await fetch(
            `https://${lang}.wikipedia.org/api/rest_v1/feed/onthisday/events/${month}/${day}`,
            { signal: controller.signal }
        );
        clearTimeout(timeoutId);

        if (response.ok) {
            const data = await response.json();
            if (data.events && data.events.length > 0) {
                // Filter out sad/negative events
                const negativeKeywords = [
                    'muerte', 'guerra', 'asesinado', 'fallece', 'muere', 'batalla', 'accidente', 'terremoto', 'tragedia',
                    'death', 'war', 'killed', 'died', 'battle', 'accident', 'earthquake', 'tragedy',
                    'morte', 'guerra', 'assassinado', 'morre', 'batalha', 'acidente', 'terremoto', 'tragédia'
                ];

                const positiveEvents = data.events.filter(event => {
                    const text = event.text.toLowerCase();
                    return !negativeKeywords.some(keyword => text.includes(keyword));
                });

                // If we have positive events, use one of them, otherwise fall back to any event (or a generic message)
                const eventsToUse = positiveEvents.length > 0 ? positiveEvents : data.events;

                // Get a random event from the filtered list
                const randomEvent = eventsToUse[Math.floor(Math.random() * Math.min(10, eventsToUse.length))];

                return {
                    year: randomEvent.year,
                    text: randomEvent.text,
                    description: `${lang === 'es' ? 'En' : (lang === 'pt' ? 'Em' : 'In')} ${randomEvent.year}: ${randomEvent.text}`
                };
            }
        }
    } catch (error) {
        console.error('Error fetching historical event:', error);
    }

    // Fallback localized
    const fallbacks = {
        es: { text: 'Un día especial en la historia', desc: 'Tu nacimiento marcó el inicio de una historia única' },
        en: { text: 'A special day in history', desc: 'Your birth marked the beginning of a unique story' },
        pt: { text: 'Um dia especial na história', desc: 'Seu nascimento marcou o início de uma história única' }
    };
    const fb = fallbacks[currentLanguage] || fallbacks.es;

    return {
        year: new Date(birthdate).getFullYear(),
        text: fb.text,
        description: fb.desc
    };
}

// ========================================
// EXTENDED CALCULATIONS
// ========================================

function calculateMBTI(answers) {
    let scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };

    // Iterate through answers to find MBTI questions
    for (const [key, value] of Object.entries(answers)) {
        if (key.startsWith('mbti_')) {
            // Find the question definition to get dimension and scores
            let question = null;
            for (const lang of Object.keys(extendedQuestionsData)) {
                const found = extendedQuestionsData[lang].find(q => q.id === key);
                if (found) {
                    question = found;
                    break;
                }
            }

            if (question) {
                const dimension = question.dimension; // e.g., 'EI'

                // ROBUST CHECK: Try to find the answer in the current language options
                let selectedIndex = question.options.indexOf(value);

                // If not found (maybe language switched), try to find it in ALL languages
                if (selectedIndex === -1) {
                    for (const lang of Object.keys(extendedQuestionsData)) {
                        const otherLangQuestion = extendedQuestionsData[lang].find(q => q.id === key);
                        if (otherLangQuestion) {
                            const idx = otherLangQuestion.options.indexOf(value);
                            if (idx !== -1) {
                                selectedIndex = idx;
                                break;
                            }
                        }
                    }
                }

                if (selectedIndex !== -1) {
                    const score = question.scores[selectedIndex];
                    if (score === 1) scores[dimension[0]]++;
                    else scores[dimension[1]]++;
                }
            }
        }
    }

    const type = (scores.E >= scores.I ? 'E' : 'I') +
        (scores.S >= scores.N ? 'S' : 'N') +
        (scores.T >= scores.F ? 'T' : 'F') +
        (scores.J >= scores.P ? 'J' : 'P');

    const description = (window.mbtiDescriptions && window.mbtiDescriptions[type])
        ? window.mbtiDescriptions[type]
        : { name: type, description: 'Descripción no disponible', traits: '' };

    return {
        type: type,
        data: description
    };
}

function calculateZodiacSign(dateString) {
    const signs = window.zodiacSigns;
    if (!signs) {
        console.error("Zodiac signs data not loaded");
        return { name: 'Unknown', traits: '', symbol: '?' };
    }
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;

    if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) return signs['Aries'];
    if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) return signs['Tauro'];
    if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) return signs['Géminis'];
    if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) return signs['Cáncer'];
    if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) return signs['Leo'];
    if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) return signs['Virgo'];
    if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) return signs['Libra'];
    if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) return signs['Escorpio'];
    if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) return signs['Sagitario'];
    if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) return signs['Capricornio'];
    if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) return signs['Acuario'];
    if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) return signs['Piscis'];

    return signs['Aries']; // Fallback
}

function calculateLifePathNumber(dateString) {
    const date = new Date(dateString);
    let sum = date.getDate() + (date.getMonth() + 1) + date.getFullYear();

    while (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
        sum = String(sum).split('').reduce((a, b) => parseInt(a) + parseInt(b), 0);
    }

    // Simplify master numbers for this basic version if needed, or keep them
    if (sum > 9) {
        sum = String(sum).split('').reduce((a, b) => parseInt(a) + parseInt(b), 0);
    }

    const nums = window.lifePathNumbers;
    if (!nums) {
        console.error("Life path data not loaded");
        return { name: 'Unknown', description: '' };
    }
    return {
        number: sum,
        data: nums[sum]
    };
}

// ========================================
// RESULTS CALCULATION
// ========================================

async function calculateResults() {
    // Show loading overlay
    const loadingOverlay = document.getElementById('loading-overlay');
    const loadingText = loadingOverlay.querySelector('.loading-text');
    loadingText.textContent = translations[currentLanguage].calculating;
    loadingOverlay.classList.add('active');

    try {
        // Generate a seed from answers for consistent randomness
        const seed = Object.values(answers).join('').split('').reduce((acc, char) => {
            return acc + char.charCodeAt(0);
        }, 0);

        // Seeded random function
        function seededRandom(index) {
            const x = Math.sin(seed + index) * 10000;
            return x - Math.floor(x);
        }

        // Simulate a small delay for "analysis" effect (and to allow UI to update)
        await new Promise(resolve => setTimeout(resolve, 1500));

        const results = {
            pokemon: resultsData.pokemon[Math.floor(seededRandom(1) * resultsData.pokemon.length)],
            tarot: resultsData.tarot[Math.floor(seededRandom(2) * resultsData.tarot.length)],
            element: resultsData.elements[Math.floor(seededRandom(3) * resultsData.elements.length)],
            aura: resultsData.auraColors[Math.floor(seededRandom(4) * resultsData.auraColors.length)],
            rpgClass: resultsData.rpgClasses[Math.floor(seededRandom(5) * resultsData.rpgClasses.length)]
        };

        // Get historical event and fun stats if birthdate was provided
        if (answers.birthdate) {
            results.birthEvent = await getHistoricalEvent(answers.birthdate);
            results.funStats = calculateFunStats(answers.birthdate);

            // Calculate extra results for long mode
            if (surveyMode === 'long') {
                results.mbti = calculateMBTI(answers);
                results.zodiac = calculateZodiacSign(answers.birthdate);
                results.lifePath = calculateLifePathNumber(answers.birthdate);
            }
        }

        displayResults(results);

    } catch (error) {
        console.error("Error calculating results:", error);
        alert("Lo siento, hubo un error calculando tus resultados. Por favor intenta de nuevo.");
        // Optionally return to survey or home
    } finally {
        // Hide loading overlay ALWAYS
        if (loadingOverlay) {
            loadingOverlay.classList.remove('active');
        }
    }
}

// ========================================
// RESULTS DISPLAY
// ========================================

function displayResults(results) {
    lastResults = results; // Store for language switching
    showScreen('results-screen');

    const grid = document.getElementById('results-grid');
    const userName = answers.name || 'Viajero';
    const t = translations[currentLanguage];

    const lang = currentLanguage;
    const pokemonData = results.pokemon[lang];
    const tarotData = results.tarot[lang];
    const elementData = results.elements ? results.elements[lang] : results.element[lang]; // Handle naming inconsistency if any
    const auraData = results.aura[lang];
    const rpgData = results.rpgClass[lang];

    // Helper to safely get localized string
    const getLoc = (obj, key) => obj ? obj[key] : '';

    let cardsHTML = `
        <div class="result-card">
            <div class="result-icon pokemon-sprite">
                <img src="${getPokemonSprite(results.pokemon.pokeId)}" alt="${results.pokemon.name}" class="pokemon-img">
            </div>
            <div class="result-title">${t.resultLabels.pokemon}</div>
            <div class="result-value">${results.pokemon.name}</div>
            <div class="result-type">${pokemonData.type}</div>
            <div class="result-description">
                ${pokemonData.description}
            </div>
        </div>

        <div class="result-card">
            <div class="result-icon">🔮</div>
            <div class="result-title">${t.resultLabels.tarot}</div>
            <div class="result-value">${tarotData.name}</div>
            <div class="result-description">
                ${tarotData.description}
            </div>
        </div>

        <div class="result-card">
            <div class="result-icon">⚡</div>
            <div class="result-title">${t.resultLabels.element}</div>
            <div class="result-value">${elementData.name}</div>
            <div class="result-description">
                ${elementData.description}
            </div>
        </div>

        <div class="result-card">
            <div class="result-icon">✨</div>
            <div class="result-title">${t.resultLabels.aura}</div>
            <div class="result-value" style="color: ${results.aura.color || '#fff'}">${auraData.name}</div>
            <div class="result-description">
                ${auraData.description}
            </div>
        </div>

        <div class="result-card">
            <div class="result-icon">⚔️</div>
            <div class="result-title">${t.resultLabels.rpgClass}</div>
            <div class="result-value">${rpgData.name}</div>
            <div class="result-description">
                ${rpgData.description}
            </div>
        </div>
    `;

    // Add extended results if available
    if (results.mbti) {
        const mbtiData = results.mbti.data[lang];
        const zodiacData = results.zodiac[lang];
        const lifePathData = results.lifePath.data[lang];

        cardsHTML += `
            <div class="result-card" style="border-color: var(--color-accent-secondary)">
                <div class="result-icon">🧠</div>
                <div class="result-title">Personalidad MBTI</div>
                <div class="result-value">${results.mbti.type}</div>
                <div class="result-description">
                    <strong>${mbtiData.name}</strong><br>
                    ${mbtiData.description}
                </div>
            </div>

            <div class="result-card">
                <div class="result-icon">${results.zodiac.symbol}</div>
                <div class="result-title">Signo Zodiacal</div>
                <div class="result-value">${zodiacData.name}</div>
                <div class="result-description">
                    ${zodiacData.traits}
                </div>
            </div>

            <div class="result-card">
                <div class="result-icon">🔢</div>
                <div class="result-title">Numerología</div>
                <div class="result-value">Camino de Vida ${results.lifePath.number}</div>
                <div class="result-description">
                    <strong>${lifePathData.name}</strong><br>
                    ${lifePathData.description}
                </div>
            </div>
        `;
    }

    // Add birth event card if available
    if (results.birthEvent) {
        cardsHTML += `
            <div class="result-card">
                <div class="result-icon">📅</div>
                <div class="result-title">${t.resultLabels.birthEvent}</div>
                <div class="result-value">${results.birthEvent.year}</div>
                <div class="result-description">
                    ${results.birthEvent.description}
                </div>
            </div>
        `;
    }

    // Add fun statistics cards if available
    if (results.funStats) {
        const funDesc = t.funStatsDescriptions;
        cardsHTML += `
            <div class="result-card">
                <div class="result-icon">🌍</div>
                <div class="result-title">${t.resultLabels.daysAlive}</div>
                <div class="result-value">${results.funStats.daysAlive}</div>
                <div class="result-description">
                    ${funDesc.daysAlive.replace('{value}', results.funStats.daysAlive)}
                </div>
            </div>

            <div class="result-card">
                <div class="result-icon">🪰</div>
                <div class="result-title">${t.resultLabels.fliesEaten}</div>
                <div class="result-value">${results.funStats.fliesEaten}</div>
                <div class="result-description">
                    ${funDesc.fliesEaten.replace('{value}', results.funStats.fliesEaten)}
                </div>
            </div>

            <div class="result-card">
                <div class="result-icon">❤️</div>
                <div class="result-title">${t.resultLabels.heartbeats}</div>
                <div class="result-value">${results.funStats.heartbeats}</div>
                <div class="result-description">
                    ${funDesc.heartbeats.replace('{value}', results.funStats.heartbeats)}
                </div>
            </div>

            <div class="result-card">
                <div class="result-icon">👁️</div>
                <div class="result-title">${t.resultLabels.blinks}</div>
                <div class="result-value">${results.funStats.blinks}</div>
                <div class="result-description">
                    ${funDesc.blinks.replace('{value}', results.funStats.blinks)}
                </div>
            </div>

            <div class="result-card">
                <div class="result-icon">👟</div>
                <div class="result-title">${t.resultLabels.steps}</div>
                <div class="result-value">${results.funStats.stepsWalked}</div>
                <div class="result-description">
                    ${funDesc.steps.replace('{value}', results.funStats.stepsWalked)}
                </div>
            </div>

            <div class="result-card">
                <div class="result-icon">🍕</div>
                <div class="result-title">${t.resultLabels.pizzas}</div>
                <div class="result-value">${results.funStats.pizzasEaten}</div>
                <div class="result-description">
                    ${funDesc.pizzas.replace('{value}', results.funStats.pizzasEaten)}
                </div>
            </div>
        `;
    }



    grid.innerHTML = cardsHTML;

    // Update title with user name
    document.querySelector('.results-title').textContent = `${t.resultsTitle} DE ${userName.toUpperCase()}`;

    // Update restart button text
    document.querySelector('#results-screen > .pixel-border > .pixel-button .button-text').textContent = t.restartButton;
}

// ========================================
// SHARE FUNCTIONALITY
// ========================================

async function captureResults() {
    const resultsContainer = document.getElementById('results-container');

    // Temporarily hide buttons for capture
    const buttons = resultsContainer.querySelectorAll('.pixel-button, .share-buttons');
    buttons.forEach(btn => btn.style.display = 'none');

    try {
        // Use html2canvas to capture the results
        const canvas = await html2canvas(resultsContainer, {
            backgroundColor: '#f5f5f5',
            scale: 2,
            logging: false,
            width: 800,
            height: null
        });

        return canvas;
    } finally {
        // Restore buttons
        buttons.forEach(btn => btn.style.display = '');
    }
}

async function shareToInstagram() {
    try {
        const canvas = await captureResults();

        // Convert canvas to blob
        canvas.toBlob(async (blob) => {
            const file = new File([blob], 'mi-encuesta-final.png', { type: 'image/png' });

            // Check if Web Share API is available
            if (navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
                try {
                    await navigator.share({
                        files: [file],
                        title: 'Mis Resultados - La Encuesta Final',
                        text: '¡Descubre tu esencia con La Encuesta Final! 🎮✨'
                    });
                } catch (err) {
                    if (err.name !== 'AbortError') {
                        console.log('Error sharing:', err);
                        // Fallback to download
                        downloadImageFromBlob(blob);
                    }
                }
            } else {
                // Fallback: download the image
                downloadImageFromBlob(blob);
                alert('📱 Imagen descargada. Puedes subirla manualmente a Instagram Stories.');
            }
        }, 'image/png');
    } catch (error) {
        console.error('Error capturing results:', error);
        alert('❌ Error al capturar los resultados. Por favor intenta de nuevo.');
    }
}

async function downloadImage() {
    try {
        const canvas = await captureResults();

        // Convert to blob and download
        canvas.toBlob((blob) => {
            downloadImageFromBlob(blob);
        }, 'image/png');
    } catch (error) {
        console.error('Error downloading image:', error);
        alert('❌ Error al descargar la imagen. Por favor intenta de nuevo.');
    }
}

function downloadImageFromBlob(blob) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `encuesta-final-${Date.now()}.png`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// ========================================
// INITIALIZATION
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('🎮 La Encuesta Final - Iniciada');

    // Load html2canvas library dynamically
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js';
    script.async = true;
    document.head.appendChild(script);

    // Initialize UI with current language
    updateUIText();

    // Inject Loading Overlay
    const loadingHTML = `
        <div id="loading-overlay" class="loading-overlay">
            <div class="loading-spinner"></div>
            <div class="loading-text">Analizando...</div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', loadingHTML);
});
