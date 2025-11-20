// ========================================
// MBTI TYPE DESCRIPTIONS
// ========================================

const mbtiDescriptions = {
    'INTJ': {
        es: { name: 'El Arquitecto', traits: 'Estratégico, independiente, visionario', description: 'Pensadores estratégicos con un plan para todo' },
        en: { name: 'The Architect', traits: 'Strategic, independent, visionary', description: 'Imaginative and strategic thinkers, with a plan for everything' },
        pt: { name: 'O Arquiteto', traits: 'Estratégico, independente, visionário', description: 'Pensadores imaginativos e estratégicos, com um plano para tudo' }
    },
    'INTP': {
        es: { name: 'El Lógico', traits: 'Analítico, curioso, innovador', description: 'Innovadores filosóficos, fascinados por el análisis lógico' },
        en: { name: 'The Logician', traits: 'Analytical, curious, innovative', description: 'Innovative inventors with an unquenchable thirst for knowledge' },
        pt: { name: 'O Lógico', traits: 'Analítico, curioso, inovador', description: 'Inventores inovadores com uma sede insaciável por conhecimento' }
    },
    'ENTJ': {
        es: { name: 'El Comandante', traits: 'Líder nato, decidido, estratégico', description: 'Líderes audaces e imaginativos, siempre encuentran un camino' },
        en: { name: 'The Commander', traits: 'Born leader, decisive, strategic', description: 'Bold, imaginative and strong-willed leaders, always finding a way' },
        pt: { name: 'O Comandante', traits: 'Líder nato, decidido, estratégico', description: 'Líderes ousados, imaginativos e obstinados, sempre encontrando um caminho' }
    },
    'ENTP': {
        es: { name: 'El Innovador', traits: 'Ingenioso, inteligente, curioso', description: 'Pensadores inteligentes y curiosos que no pueden resistir un desafío intelectual' },
        en: { name: 'The Debater', traits: 'Ingenious, smart, curious', description: 'Smart and curious thinkers who cannot resist an intellectual challenge' },
        pt: { name: 'O Inovador', traits: 'Engenhoso, inteligente, curioso', description: 'Pensadores espertos e curiosos que não resistem a um desafio intelectual' }
    },
    'INFJ': {
        es: { name: 'El Abogado', traits: 'Idealista, organizado, altruista', description: 'Idealistas tranquilos y místicos, pero muy inspiradores' },
        en: { name: 'The Advocate', traits: 'Idealistic, organized, altruistic', description: 'Quiet and mystical, yet very inspiring and tireless idealists' },
        pt: { name: 'O Advogado', traits: 'Idealista, organizado, altruísta', description: 'Idealistas quietos e místicos, mas muito inspiradores e incansáveis' }
    },
    'INFP': {
        es: { name: 'El Mediador', traits: 'Idealista, leal, curioso', description: 'Personas poéticas, amables y altruistas, siempre dispuestas a ayudar' },
        en: { name: 'The Mediator', traits: 'Idealistic, loyal, curious', description: 'Poetic, kind and altruistic people, always eager to help a good cause' },
        pt: { name: 'O Mediador', traits: 'Idealista, leal, curioso', description: 'Pessoas poéticas, bondosas e altruístas, sempre ansiosas para ajudar uma boa causa' }
    },
    'ENFJ': {
        es: { name: 'El Protagonista', traits: 'Carismático, inspirador, altruista', description: 'Líderes carismáticos e inspiradores, capaces de cautivar a su audiencia' },
        en: { name: 'The Protagonist', traits: 'Charismatic, inspiring, altruistic', description: 'Charismatic and inspiring leaders, able to mesmerize their listeners' },
        pt: { name: 'O Protagonista', traits: 'Carismático, inspirador, altruísta', description: 'Líderes carismáticos e inspiradores, capazes de hipnotizar seus ouvintes' }
    },
    'ENFP': {
        es: { name: 'El Activista', traits: 'Entusiasta, creativo, sociable', description: 'Espíritus libres entusiastas, creativos y sociables' },
        en: { name: 'The Campaigner', traits: 'Enthusiastic, creative, sociable', description: 'Enthusiastic, creative and sociable free spirits, who can always find a reason to smile' },
        pt: { name: 'O Ativista', traits: 'Entusiasta, criativo, sociável', description: 'Espíritos livres entusiastas, criativos e sociáveis, que sempre encontram uma razão para sorrir' }
    },
    'ISTJ': {
        es: { name: 'El Logístico', traits: 'Práctico, responsable, leal', description: 'Individuos prácticos y orientados a los hechos, cuya fiabilidad es incuestionable' },
        en: { name: 'The Logistician', traits: 'Practical, responsible, loyal', description: 'Practical and fact-minded individuals, whose reliability cannot be doubted' },
        pt: { name: 'O Logístico', traits: 'Prático, responsável, leal', description: 'Indivíduos práticos e focados em fatos, cuja confiabilidade não pode ser duvidada' }
    },
    'ISFJ': {
        es: { name: 'El Defensor', traits: 'Protector, cálido, leal', description: 'Protectores dedicados y cálidos, siempre listos para defender a sus seres queridos' },
        en: { name: 'The Defender', traits: 'Protective, warm, loyal', description: 'Very dedicated and warm protectors, always ready to defend their loved ones' },
        pt: { name: 'O Defensor', traits: 'Protetor, caloroso, leal', description: 'Protetores muito dedicados e calorosos, sempre prontos para defender seus entes queridos' }
    },
    'ESTJ': {
        es: { name: 'El Ejecutivo', traits: 'Organizado, tradicional, líder', description: 'Excelentes administradores, incomparables en la gestión de cosas o personas' },
        en: { name: 'The Executive', traits: 'Organized, traditional, leader', description: 'Excellent administrators, unsurpassed at managing things or people' },
        pt: { name: 'O Executivo', traits: 'Organizado, tradicional, líder', description: 'Administradores excelentes, inigualáveis em gerenciar coisas ou pessoas' }
    },
    'ESFJ': {
        es: { name: 'El Cónsul', traits: 'Sociable, popular, servicial', description: 'Personas extraordinariamente cariñosas, sociales y populares' },
        en: { name: 'The Consul', traits: 'Sociable, popular, helpful', description: 'Extraordinarily caring, social and popular people, always eager to help' },
        pt: { name: 'O Cônsul', traits: 'Sociável, popular, prestativo', description: 'Pessoas extraordinariamente atenciosas, sociais e populares, sempre ansiosas para ajudar' }
    },
    'ISTP': {
        es: { name: 'El Virtuoso', traits: 'Práctico, observador, espontáneo', description: 'Experimentadores audaces y prácticos, maestros de todo tipo de herramientas' },
        en: { name: 'The Virtuoso', traits: 'Practical, observant, spontaneous', description: 'Bold and practical experimenters, masters of all kinds of tools' },
        pt: { name: 'O Virtuoso', traits: 'Prático, observador, espontâneo', description: 'Experimentadores ousados e práticos, mestres em todos os tipos de ferramentas' }
    },
    'ISFP': {
        es: { name: 'El Aventurero', traits: 'Artístico, flexible, encantador', description: 'Artistas flexibles y encantadores, siempre listos para explorar y experimentar' },
        en: { name: 'The Adventurer', traits: 'Artistic, flexible, charming', description: 'Flexible and charming artists, always ready to explore and experience something new' },
        pt: { name: 'O Aventureiro', traits: 'Artístico, flexível, encantador', description: 'Artistas flexíveis e encantadores, sempre prontos para explorar e experimentar algo novo' }
    },
    'ESTP': {
        es: { name: 'El Emprendedor', traits: 'Enérgico, perceptivo, directo', description: 'Personas inteligentes, enérgicas y muy perceptivas que disfrutan vivir al límite' },
        en: { name: 'The Entrepreneur', traits: 'Energetic, perceptive, direct', description: 'Smart, energetic and very perceptive people, who truly enjoy living on the edge' },
        pt: { name: 'O Empreendedor', traits: 'Enérgico, perceptivo, direto', description: 'Pessoas inteligentes, enérgicas e muito perceptivas, que realmente gostam de viver no limite' }
    },
    'ESFP': {
        es: { name: 'El Animador', traits: 'Espontáneo, energético, entusiasta', description: 'Artistas espontáneos, enérgicos y entusiastas: la vida nunca es aburrida a su alrededor' },
        en: { name: 'The Entertainer', traits: 'Spontaneous, energetic, enthusiastic', description: 'Spontaneous, energetic and enthusiastic people – life is never boring around them' },
        pt: { name: 'O Animador', traits: 'Espontâneo, energético, entusiasta', description: 'Pessoas espontâneas, energéticas e entusiastas – a vida nunca é entediante perto delas' }
    }
};

// ========================================
// ZODIAC SIGNS
// ========================================

const zodiacSigns = {
    'Aries': {
        dates: '21 Mar - 19 Abr',
        element: 'Fuego',
        symbol: '♈',
        es: { name: 'Aries', traits: 'Valiente, directo, competitivo' },
        en: { name: 'Aries', traits: 'Courageous, determined, confident' },
        pt: { name: 'Áries', traits: 'Corajoso, determinado, confiante' }
    },
    'Tauro': {
        dates: '20 Abr - 20 May',
        element: 'Tierra',
        symbol: '♉',
        es: { name: 'Tauro', traits: 'Confiable, paciente, práctico' },
        en: { name: 'Taurus', traits: 'Reliable, patient, practical' },
        pt: { name: 'Touro', traits: 'Confiável, paciente, prático' }
    },
    'Géminis': {
        dates: '21 May - 20 Jun',
        element: 'Aire',
        symbol: '♊',
        es: { name: 'Géminis', traits: 'Adaptable, comunicativo, ingenioso' },
        en: { name: 'Gemini', traits: 'Adaptable, outgoing, intelligent' },
        pt: { name: 'Gêmeos', traits: 'Adaptável, extrovertido, inteligente' }
    },
    'Cáncer': {
        dates: '21 Jun - 22 Jul',
        element: 'Agua',
        symbol: '♋',
        es: { name: 'Cáncer', traits: 'Intuitivo, emocional, protector' },
        en: { name: 'Cancer', traits: 'Intuitive, emotional, protective' },
        pt: { name: 'Câncer', traits: 'Intuitivo, emocional, protetor' }
    },
    'Leo': {
        dates: '23 Jul - 22 Ago',
        element: 'Fuego',
        symbol: '♌',
        es: { name: 'Leo', traits: 'Creativo, apasionado, generoso' },
        en: { name: 'Leo', traits: 'Creative, passionate, generous' },
        pt: { name: 'Leão', traits: 'Criativo, apaixonado, generoso' }
    },
    'Virgo': {
        dates: '23 Ago - 22 Sep',
        element: 'Tierra',
        symbol: '♍',
        es: { name: 'Virgo', traits: 'Analítico, trabajador, práctico' },
        en: { name: 'Virgo', traits: 'Analytical, hardworking, practical' },
        pt: { name: 'Virgem', traits: 'Analítico, trabalhador, prático' }
    },
    'Libra': {
        dates: '23 Sep - 22 Oct',
        element: 'Aire',
        symbol: '♎',
        es: { name: 'Libra', traits: 'Diplomático, justo, social' },
        en: { name: 'Libra', traits: 'Diplomatic, fair-minded, social' },
        pt: { name: 'Libra', traits: 'Diplomático, justo, social' }
    },
    'Escorpio': {
        dates: '23 Oct - 21 Nov',
        element: 'Agua',
        symbol: '♏',
        es: { name: 'Escorpio', traits: 'Apasionado, valiente, decidido' },
        en: { name: 'Scorpio', traits: 'Passionate, brave, resourceful' },
        pt: { name: 'Escorpião', traits: 'Apaixonado, corajoso, engenhoso' }
    },
    'Sagitario': {
        dates: '22 Nov - 21 Dic',
        element: 'Fuego',
        symbol: '♐',
        es: { name: 'Sagitario', traits: 'Optimista, aventurero, filosófico' },
        en: { name: 'Sagittarius', traits: 'Optimistic, adventurous, philosophical' },
        pt: { name: 'Sagitário', traits: 'Otimista, aventureiro, filosófico' }
    },
    'Capricornio': {
        dates: '22 Dic - 19 Ene',
        element: 'Tierra',
        symbol: '♑',
        es: { name: 'Capricornio', traits: 'Disciplinado, ambicioso, responsable' },
        en: { name: 'Capricorn', traits: 'Disciplined, ambitious, responsible' },
        pt: { name: 'Capricórnio', traits: 'Disciplinado, ambicioso, responsável' }
    },
    'Acuario': {
        dates: '20 Ene - 18 Feb',
        element: 'Aire',
        symbol: '♒',
        es: { name: 'Acuario', traits: 'Original, independiente, humanitario' },
        en: { name: 'Aquarius', traits: 'Original, independent, humanitarian' },
        pt: { name: 'Aquário', traits: 'Original, independente, humanitário' }
    },
    'Piscis': {
        dates: '19 Feb - 20 Mar',
        element: 'Agua',
        symbol: '♓',
        es: { name: 'Piscis', traits: 'Compasivo, artístico, intuitivo' },
        en: { name: 'Pisces', traits: 'Compassionate, artistic, intuitive' },
        pt: { name: 'Peixes', traits: 'Compassivo, artístico, intuitivo' }
    }
};

// ========================================
// LIFE PATH NUMBERS
// ========================================

const lifePathNumbers = {
    1: {
        es: { name: 'El Líder', traits: 'Independiente, pionero, innovador', description: 'Nacido para liderar y crear nuevos caminos' },
        en: { name: 'The Leader', traits: 'Independent, pioneer, innovative', description: 'Born to lead and create new paths' },
        pt: { name: 'O Líder', traits: 'Independente, pioneiro, inovador', description: 'Nascido para liderar e criar novos caminhos' }
    },
    2: {
        es: { name: 'El Diplomático', traits: 'Cooperativo, sensible, pacificador', description: 'Maestro de la armonía y la cooperación' },
        en: { name: 'The Diplomat', traits: 'Cooperative, sensitive, peacemaker', description: 'Master of harmony and cooperation' },
        pt: { name: 'O Diplomata', traits: 'Cooperativo, sensível, pacificador', description: 'Mestre da harmonia e cooperação' }
    },
    3: {
        es: { name: 'El Creativo', traits: 'Expresivo, optimista, artístico', description: 'Comunicador natural con gran creatividad' },
        en: { name: 'The Creative', traits: 'Expressive, optimistic, artistic', description: 'Natural communicator with great creativity' },
        pt: { name: 'O Criativo', traits: 'Expressivo, otimista, artístico', description: 'Comunicador natural com grande criatividade' }
    },
    4: {
        es: { name: 'El Constructor', traits: 'Práctico, trabajador, organizado', description: 'Fundamento sólido y confiable' },
        en: { name: 'The Builder', traits: 'Practical, hardworking, organized', description: 'Solid and reliable foundation' },
        pt: { name: 'O Construtor', traits: 'Prático, trabalhador, organizado', description: 'Fundação sólida e confiável' }
    },
    5: {
        es: { name: 'El Aventurero', traits: 'Libre, versátil, dinámico', description: 'Espíritu libre que busca experiencias' },
        en: { name: 'The Adventurer', traits: 'Free, versatile, dynamic', description: 'Free spirit seeking experiences' },
        pt: { name: 'O Aventureiro', traits: 'Livre, versátil, dinâmico', description: 'Espírito livre em busca de experiências' }
    },
    6: {
        es: { name: 'El Cuidador', traits: 'Responsable, protector, compasivo', description: 'Guardián del hogar y la familia' },
        en: { name: 'The Nurturer', traits: 'Responsible, protective, compassionate', description: 'Guardian of home and family' },
        pt: { name: 'O Cuidador', traits: 'Responsável, protetor, compassivo', description: 'Guardião do lar e da família' }
    },
    7: {
        es: { name: 'El Buscador', traits: 'Analítico, espiritual, introspectivo', description: 'Buscador de verdad y sabiduría' },
        en: { name: 'The Seeker', traits: 'Analytical, spiritual, introspective', description: 'Seeker of truth and wisdom' },
        pt: { name: 'O Buscador', traits: 'Analítico, espiritual, introspectivo', description: 'Buscador da verdade e sabedoria' }
    },
    8: {
        es: { name: 'El Poderoso', traits: 'Ambicioso, autoritario, material', description: 'Maestro del mundo material y el éxito' },
        en: { name: 'The Powerhouse', traits: 'Ambitious, authoritative, material', description: 'Master of the material world and success' },
        pt: { name: 'O Poderoso', traits: 'Ambicioso, autoritário, material', description: 'Mestre do mundo material e do sucesso' }
    },
    9: {
        es: { name: 'El Humanitario', traits: 'Compasivo, idealista, generoso', description: 'Servidor de la humanidad con gran corazón' },
        en: { name: 'The Humanitarian', traits: 'Compassionate, idealistic, generous', description: 'Server of humanity with a big heart' },
        pt: { name: 'O Humanitário', traits: 'Compassivo, idealista, generoso', description: 'Servidor da humanidade com um grande coração' }
    }
};

// Make globally available
window.mbtiDescriptions = mbtiDescriptions;
window.zodiacSigns = zodiacSigns;
window.lifePathNumbers = lifePathNumbers;
