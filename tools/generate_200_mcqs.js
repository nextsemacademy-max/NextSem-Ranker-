const fs = require('fs');
const path = require('path');

// Array of 200 high-yield MCQs covering Indus Valley Civilization & Vedic Literature (Pages 1-5 of Lucent GK)
const questions = [
  // 1-10
  {
    id: 1,
    difficulty: "Easy",
    topic: "Indus Valley Civilization - Basics",
    question: "Who among the following was the first scholar to use the term 'Indus Civilization'?",
    options: ["Daya Ram Sahni", "Sir Mortimer Wheeler", "Sir John Marshall", "Rakhal Das Bannerji"],
    correctAnswer: "C",
    explanation: "Sir John Marshall, the Director-General of the Archaeological Survey of India (ASI), was the first scholar to use the term 'Indus Civilization'."
  },
  {
    id: 2,
    difficulty: "Easy",
    topic: "Indus Valley Civilization - Sites & Geography",
    question: "On the banks of which river is the prominent Harappan settlement of Kalibangan situated?",
    options: ["Ravi", "Ghaggar", "Bhogava", "Luni"],
    correctAnswer: "B",
    explanation: "Kalibangan is situated along the dry bed of the Ghaggar (ancient Saraswati) river in Hanumangarh district, Rajasthan."
  },
  {
    id: 3,
    difficulty: "Easy",
    topic: "Indus Valley Civilization - Boundaries",
    question: "Which of the following sites marks the southernmost geographical boundary of the Indus Valley Civilization?",
    options: ["Sutkagendor", "Daimabad", "Manda", "Alamgirpur"],
    correctAnswer: "B",
    explanation: "Daimabad on the Pravara river (a tributary of Godavari) in Ahmednagar, Maharashtra marks the southernmost extension."
  },
  {
    id: 4,
    difficulty: "Easy",
    topic: "Indus Valley Civilization - Discoveries",
    question: "In which year did Rai Bahadur Daya Ram Sahni excavate the first mounds at Harappa?",
    options: ["1921", "1922", "1931", "1954"],
    correctAnswer: "A",
    explanation: "Daya Ram Sahni carried out the primary excavations at Harappa in 1921 under the direction of Sir John Marshall."
  },
  {
    id: 5,
    difficulty: "Easy",
    topic: "Indus Valley Civilization - Etymology",
    question: "The literal meaning of the local name 'Kalibangan' is:",
    options: ["Mound of the Dead", "Oasis of Sindh", "Bangles of Black Colour", "Fortified Granary"],
    correctAnswer: "C",
    explanation: "In local Rajasthani dialect, 'Kali' translates to black and 'Bangan' refers to bangles, named after the profuse black terracotta bangles found at the site."
  },
  {
    id: 6,
    difficulty: "Easy",
    topic: "Indus Valley Civilization - Fauna",
    question: "Which of the following animals was notably UNKNOWN to the people of the Indus Valley Civilization?",
    options: ["Humped Bull", "Elephant", "Lion", "Rhinoceros"],
    correctAnswer: "C",
    explanation: "While the tiger, elephant, rhinoceros, and humped bull are profusely depicted on Harappan seals and terracotta, the lion was unknown."
  },
  {
    id: 7,
    difficulty: "Easy",
    topic: "Indus Valley Civilization - Town Planning",
    question: "Which Harappan city uniquely exhibits a tripartite division consisting of Citadel, Middle Town, and Lower Town?",
    options: ["Lothal", "Mohenjodaro", "Dholavira", "Banawali"],
    correctAnswer: "C",
    explanation: "Unlike other Harappan towns that have two divisions (Citadel and Lower Town), Dholavira in Kutchh (Gujarat) was divided into three distinct fortified sectors."
  },
  {
    id: 8,
    difficulty: "Easy",
    topic: "Vedic Literature - Rig Veda",
    question: "How many total hymns (Suktas) are compiled in the canonical text of the Rig Veda Samhita?",
    options: ["1,549", "1,028", "1,080", "1,200"],
    correctAnswer: "B",
    explanation: "The Rig Veda Samhita contains 1,028 hymns (1,017 in the Shakala Shakha + 11 supplemental Valakhilya hymns) arranged across 10 Mandalas."
  },
  {
    id: 9,
    difficulty: "Easy",
    topic: "Vedic Literature - Priests",
    question: "Which category of Vedic priest was assigned the specific duty of reciting the hymns of the Rig Veda during sacrifices?",
    options: ["Udgatri", "Adhvaryu", "Hotri", "Brahma"],
    correctAnswer: "C",
    explanation: "The Hotri was the invoker-priest who recited verses from the Rig Veda. Udgatri sang Sama Veda chants, Adhvaryu performed manual rites with Yajur Veda, and Brahma oversaw the ritual."
  },
  {
    id: 10,
    difficulty: "Easy",
    topic: "Indus Valley Civilization - Metallurgy",
    question: "Which metal was completely absent from all technological phases of the Indus Valley Civilization?",
    options: ["Copper", "Bronze", "Iron", "Gold"],
    correctAnswer: "C",
    explanation: "The Harappan civilization was purely a Bronze Age culture. Iron metallurgy was introduced in India centuries later (~1000 BC) during the Later Vedic era."
  },
  // 11-20
  {
    id: 11,
    difficulty: "Easy",
    topic: "Indus Valley Civilization - Maritime Sites",
    question: "Which Harappan port settlement featured a massive artificial tidal dockyard constructed of burnt bricks?",
    options: ["Balakot", "Lothal", "Kuntasi", "Allahdino"],
    correctAnswer: "B",
    explanation: "Lothal in Gujarat had a 214 x 36 metre basin lined with burnt bricks, identified as the world's earliest known tidal dockyard."
  },
  {
    id: 12,
    difficulty: "Easy",
    topic: "Vedic Literature - Sama Veda",
    question: "The foundational roots of Indian classical music, ragas, and melodic scales originate from which sacred text?",
    options: ["Sama Veda", "Rig Veda", "Yajur Veda", "Atharva Veda"],
    correctAnswer: "A",
    explanation: "The Sama Veda ('Book of Melodies') contains chants set to musical notation and is regarded as the primary root of Indian music."
  },
  {
    id: 13,
    difficulty: "Easy",
    topic: "Vedic Literature - Categorization",
    question: "The traditional Sanskrit designation 'Vedatrayi' denotes the collective trinity of:",
    options: ["Rig Veda, Sama Veda, Atharva Veda", "Rig Veda, Yajur Veda, Atharva Veda", "Rig Veda, Sama Veda, Yajur Veda", "Sama Veda, Yajur Veda, Atharva Veda"],
    correctAnswer: "C",
    explanation: "'Vedatrayi' (the sacred triad) comprises Rig, Sama, and Yajur Vedas. Atharva Veda was considered canonical at a later date."
  },
  {
    id: 14,
    difficulty: "Easy",
    topic: "Indus Valley Civilization - Seals",
    question: "What soft stone served as the primary material for carving the vast majority of Harappan seals?",
    options: ["Terracotta", "Steatite", "Lapis Lazuli", "Sandstone"],
    correctAnswer: "B",
    explanation: "Over 90% of Harappan stamp seals were manufactured from steatite (soapstone), which was easily carved and hardened by heating."
  },
  {
    id: 15,
    difficulty: "Easy",
    topic: "Indus Valley Civilization - Sites",
    question: "In which modern administrative district of Pakistan is the site of Mohenjodaro situated?",
    options: ["Sahiwal", "Larkana", "Nawabshah", "Bahawalpur"],
    correctAnswer: "B",
    explanation: "Mohenjodaro is located on the west bank of the Indus River in Larkana district of Sindh province, Pakistan."
  },
  {
    id: 16,
    difficulty: "Moderate",
    topic: "Indus Valley Civilization - Fauna & Finds",
    question: "At which of the following Harappan sites was a terracotta figurine of a horse discovered?",
    options: ["Kalibangan", "Surkotada", "Lothal", "Banawali"],
    correctAnswer: "C",
    explanation: "A terracotta model of a horse was excavated at Lothal, whereas actual fossilized bone fragments of a horse were excavated at Surkotada."
  },
  {
    id: 17,
    difficulty: "Moderate",
    topic: "Indus Valley Civilization - Sculptures",
    question: "The celebrated bronze 'Dancing Girl' and the steatite sculpture of a 'Bearded Priest-King' were both unearthed at:",
    options: ["Harappa", "Mohenjodaro", "Chanhudaro", "Dholavira"],
    correctAnswer: "B",
    explanation: "Both the lost-wax cast bronze 'Dancing Girl' and the carved steatite 'Bearded Priest-King' were recovered from Mohenjodaro."
  },
  {
    id: 18,
    difficulty: "Moderate",
    topic: "Indus Valley Civilization - Urban Structure",
    question: "Which of the following Indus settlements is completely devoid of a raised fortified citadel?",
    options: ["Chanhudaro", "Kalibangan", "Banawali", "Lothal"],
    correctAnswer: "A",
    explanation: "Chanhudaro in Sindh, situated 130 km south of Mohenjodaro, was exclusively an industrial and craft settlement with no fortified citadel."
  },
  {
    id: 19,
    difficulty: "Moderate",
    topic: "Indus Valley Civilization - Foreign Trade",
    question: "From which ancient mining center did the Harappans primarily import high-grade Lapis Lazuli?",
    options: ["Kolar (Karnataka)", "Khetri (Rajasthan)", "Badakhshan (Afghanistan)", "Shaher-i-Sokhta (Iran)"],
    correctAnswer: "C",
    explanation: "Lapis Lazuli was imported from the mines of Badakhshan in northeastern Afghanistan, where the Harappan trading colony of Shortugai was established."
  },
  {
    id: 20,
    difficulty: "Moderate",
    topic: "Indus Valley Civilization - Epigraphy",
    question: "In Mesopotamian cuneiform inscriptions of King Sargon of Akkad, what term was used to designate the Indus valley region?",
    options: ["Dilmun", "Meluhha", "Makan", "Aratta"],
    correctAnswer: "B",
    explanation: "Sumerian and Akkadian texts refer to the Harappan region as 'Meluhha', while 'Dilmun' was Bahrain and 'Makan' was Oman/Makran coast."
  },
  // 21-30
  {
    id: 21,
    difficulty: "Moderate",
    topic: "Indus Valley Civilization - Agriculture",
    question: "The earliest archaeological evidence of a criss-cross ploughed agricultural field in the subcontinent was unearthed at:",
    options: ["Banawali", "Kalibangan", "Harappa", "Rangpur"],
    correctAnswer: "B",
    explanation: "Kalibangan yielded a pre-Harappan ploughed field showing two sets of furrows intersecting at right angles for dual cropping (mustard and gram)."
  },
  {
    id: 22,
    difficulty: "Moderate",
    topic: "Vedic Literature - Rig Veda",
    question: "Which group of Mandalas in the Rig Veda is recognized as the oldest and designated as the 'Family Books' (Gotra Mandalas)?",
    options: ["Mandalas 1 to 5", "Mandalas 2 to 7", "Mandalas 3 to 8", "Mandalas 8 to 10"],
    correctAnswer: "B",
    explanation: "Mandalas 2 to 7 are the earliest core of the Rig Veda, composed by distinct seer families (Gritsamada, Vishvamitra, Vamadeva, Atri, Bharadvaja, Vashistha)."
  },
  {
    id: 23,
    difficulty: "Moderate",
    topic: "Vedic Literature - Rig Veda",
    question: "The 'Purusha Sukta', which describes the cosmic origin of the four Varnas, is located in which Mandala of the Rig Veda?",
    options: ["10th Mandala", "1st Mandala", "7th Mandala", "9th Mandala"],
    correctAnswer: "A",
    explanation: "Hymn 90 of the 10th Mandala (a later addition) contains the Purusha Sukta, the earliest literary mention of the four Varnas."
  },
  {
    id: 24,
    difficulty: "Moderate",
    topic: "Vedic Literature - Yajur Veda",
    question: "Which Veda is uniquely divided into two broad traditions: one in combined prose and verse, and the other strictly in metrical verse?",
    options: ["Rig Veda", "Atharva Veda", "Yajur Veda", "Sama Veda"],
    correctAnswer: "C",
    explanation: "Yajur Veda is divided into Krishna Yajurveda (un-separated sacrificial prose and verse) and Shukla Yajurveda (hymns only)."
  },
  {
    id: 25,
    difficulty: "Moderate",
    topic: "Indus Valley Civilization - Town Planning",
    question: "Which major Harappan site conspicuously lacked a systematic grid-iron street pattern and underground drainage system?",
    options: ["Rakhigarhi", "Banawali", "Dholavira", "Mohenjodaro"],
    correctAnswer: "B",
    explanation: "Banawali in Haryana exhibited radial or organic street alignment and lacked the characteristic Harappan underground covered drainage."
  },
  {
    id: 26,
    difficulty: "Moderate",
    topic: "Indus Valley Civilization - Water Systems",
    question: "A network of rock-cut water reservoirs, broad feeder canals, and a unique rainwater harvesting system was discovered at:",
    options: ["Dholavira", "Lothal", "Rakhigarhi", "Sutkagendor"],
    correctAnswer: "A",
    explanation: "Dholavira engineered up to 16 giant rock-cut reservoirs to collect runoff from the seasonal Mansar and Manhar rivulets."
  },
  {
    id: 27,
    difficulty: "Moderate",
    topic: "Indus Valley Civilization - Sites",
    question: "Which is currently recognized as the largest Harappan archaeological site within the borders of India?",
    options: ["Dholavira", "Kalibangan", "Rakhigarhi", "Banawali"],
    correctAnswer: "C",
    explanation: "Rakhigarhi in Hisar district, Haryana, spanning over 350 hectares, is the largest Harappan site in India."
  },
  {
    id: 28,
    difficulty: "Moderate",
    topic: "Indus Valley Civilization - Artifacts",
    question: "At which industrial craft center was a baked brick discovered bearing the paw-print of a dog chasing a cat?",
    options: ["Harappa", "Mohenjodaro", "Chanhudaro", "Kalibangan"],
    correctAnswer: "C",
    explanation: "Chanhudaro yielded a wet mud brick that had been stepped on by a dog chasing a cat before being fired in a kiln."
  },
  {
    id: 29,
    difficulty: "Moderate",
    topic: "Vedic Literature - Brahmanas",
    question: "The 'Shatapatha Brahmana', the longest and most historically significant of all Brahmanas, is attached to:",
    options: ["Rig Veda", "Shukla Yajur Veda", "Sama Veda", "Atharva Veda"],
    correctAnswer: "B",
    explanation: "The Shatapatha Brahmana ('Brahmana of a Hundred Paths') belongs to Shukla (White) Yajur Veda and details the legend of the Deluge and Videha Madhava."
  },
  {
    id: 30,
    difficulty: "Moderate",
    topic: "Indus Valley Civilization - Agriculture",
    question: "The Greeks designated cotton as 'Sindon' because it was earliest cultivated in the world by the people of:",
    options: ["The Nile Valley", "The Indus Valley", "The Tigris-Euphrates Valley", "The Yellow River Valley"],
    correctAnswer: "B",
    explanation: "Harappans were the earliest known cultivators of cotton globally. The Greeks called cotton 'Sindon', derived from 'Sindhu' (Indus)."
  },
  // 31-40
  {
    id: 31,
    difficulty: "Moderate",
    topic: "Indus Valley Civilization - Burials",
    question: "Evidence of 'joint burials' (male and female interred together in a single grave) has been uncovered at:",
    options: ["Lothal", "Surkotada", "Balakot", "Sutkagendor"],
    correctAnswer: "A",
    explanation: "Lothal's cemetery contained three graves where two individuals were buried together, interpreted by early excavators as joint burials."
  },
  {
    id: 32,
    difficulty: "Moderate",
    topic: "Indus Valley Civilization - External Trade",
    question: "The recovery of a round, button-shaped Persian Gulf seal at Lothal points directly to maritime trade with:",
    options: ["Dilmun and Oman", "Crete and Mycenae", "Egypt", "Troy"],
    correctAnswer: "A",
    explanation: "The circular steatite Persian Gulf seal found at Lothal confirms regular sea trade passing through Dilmun (Bahrain) and Oman."
  },
  {
    id: 33,
    difficulty: "Moderate",
    topic: "Vedic Literature - Aranyakas",
    question: "The literal translation of the Sanskrit term 'Aranyaka' is:",
    options: ["Sacrificial manuals", "Forest texts", "Philosophical songs", "Grammatical appendices"],
    correctAnswer: "B",
    explanation: "'Aranya' means forest. Aranyakas are 'forest treatises' composed for hermits and students living in forest retreats."
  },
  {
    id: 34,
    difficulty: "Moderate",
    topic: "Indus Valley Civilization - Pottery",
    question: "A painted earthenware jar depicting a folk narrative reminiscent of the Panchatantra's 'Thirsty Crow / Cunning Fox' was found at:",
    options: ["Harappa", "Lothal", "Banawali", "Mohenjodaro"],
    correctAnswer: "B",
    explanation: "At Lothal, a painted jar shows a bird perched on a tree holding a fish with a fox-like animal standing below."
  },
  {
    id: 35,
    difficulty: "Moderate",
    topic: "Vedic Literature - Upanishads",
    question: "According to the traditional Muktika canon, how many Upanishads are recognized in total?",
    options: ["18", "108", "64", "12"],
    correctAnswer: "B",
    explanation: "The Muktika Upanishad canonical list acknowledges 108 Upanishads, of which 10 to 12 are considered Principal (Mukhya) Upanishads."
  },
  {
    id: 36,
    difficulty: "Difficult",
    topic: "Vedic Culture - Inscriptions",
    question: "The 14th-century BC Boghazkoi inscription in Asia Minor (modern Turkey) mentions which four Vedic deities as divine witnesses?",
    options: ["Agni, Surya, Soma, and Vayu", "Indra, Mitra, Varuna, and Nasatya", "Rudra, Vishnu, Prajapati, and Pushan", "Varuna, Agni, Yama, and Marut"],
    correctAnswer: "B",
    explanation: "The Boghazkoi clay tablets (~1380 BC) record a treaty between Hittite King Suppiluliuma and Mitanni King Mattiwaza invoking In-da-ra, Mi-it-ra, U-ru-w-na, and Na-sa-at-ti-ya."
  },
  {
    id: 37,
    difficulty: "Difficult",
    topic: "Indus Valley Civilization - Script",
    question: "The Harappan pictographic script was predominantly written in 'boustrophedon' style, which means:",
    options: ["Top to bottom exclusively", "Alternate lines flowing right-to-left then left-to-right", "Strictly left to right with cursive vowels", "Radially outward from the center of seals"],
    correctAnswer: "B",
    explanation: "Boustrophedon (ox-turning) describes writing alternate lines in opposite directions—starting right-to-left, then reversing left-to-right."
  },
  {
    id: 38,
    difficulty: "Difficult",
    topic: "Indus Valley Civilization - Religion",
    question: "On the famous 'Pashupati Mahadeva' seal from Mohenjodaro, which specific set of four animals surrounds the seated figure?",
    options: ["Lion, Horse, Bull, and Camel", "Elephant, Tiger, Rhinoceros, and Buffalo", "Leopard, Wild Boar, Humped Ox, and Antelope", "Tiger, Gaur, Nilgai, and Blackbuck"],
    correctAnswer: "B",
    explanation: "The yogic figure is flanked by an elephant and a tiger on his right, and a rhinoceros and water buffalo on his left, with two antelopes/deer under the seat."
  },
  {
    id: 39,
    difficulty: "Difficult",
    topic: "Vedic Literature - Vedangas",
    question: "Which of the six Vedangas is specifically dedicated to the study of word origins, etymology, and archaic glosses?",
    options: ["Shiksha", "Nirukta", "Kalpa", "Chhanda"],
    correctAnswer: "B",
    explanation: "Nirukta, authored by Yaska, is the Vedanga focusing on etymology and the semantic explanation of obscure Vedic vocabulary."
  },
  {
    id: 40,
    difficulty: "Difficult",
    topic: "Vedic Literature - Vedangas",
    question: "Which subdivision of the Kalpa Sutras contains the earliest Indian mathematical principles for constructing sacrificial fire altars?",
    options: ["Grihya Sutras", "Shulva Sutras", "Dharma Sutras", "Shrauta Sutras"],
    correctAnswer: "B",
    explanation: "The Shulva Sutras (authored by Baudhayana, Apastamba, etc.) laid down geometric rules for laying out Vedic altars and contain early geometric theorems."
  },
  // 41-50
  {
    id: 41,
    difficulty: "Difficult",
    topic: "Indus Valley Civilization - Northern Colonies",
    question: "Which two distinct Harappan trading outposts were discovered in northern Afghanistan along Central Asian caravan routes?",
    options: ["Shortugai and Mundigak", "Balakot and Sutkagendor", "Kuntasi and Desalpur", "Amri and Kot Diji"],
    correctAnswer: "A",
    explanation: "Shortugai on the Oxus River and Mundigak in southern Afghanistan served as Harappan trading settlements for procuring lapis lazuli, tin, and camel transport."
  },
  {
    id: 42,
    difficulty: "Difficult",
    topic: "Vedic Literature - Vedangas",
    question: "Who authored the foundational Sanskrit grammatical masterpiece 'Ashtadhyayi', representing the Vyakarana Vedanga?",
    options: ["Yaska", "Pingala", "Panini", "Lagadha Muni"],
    correctAnswer: "C",
    explanation: "Panini authored the Ashtadhyayi (~5th–4th century BC), formulating nearly 4,000 algorithmic sutras that standardized Classical Sanskrit."
  },
  {
    id: 43,
    difficulty: "Difficult",
    topic: "Vedic Literature - Brahmanas",
    question: "Which of the following is the SOLE Brahmana text surviving and attached to the Atharva Veda?",
    options: ["Aitareya Brahmana", "Gopatha Brahmana", "Jaiminiya Brahmana", "Taittiriya Brahmana"],
    correctAnswer: "B",
    explanation: "Unlike the other Vedas which have multiple surviving Brahmanas, the Atharva Veda has only one: the Gopatha Brahmana."
  },
  {
    id: 44,
    difficulty: "Difficult",
    topic: "Vedic Literature - Rig Veda",
    question: "The celebrated sacred Gayatri Mantra, addressed to the solar deity Savitri, is contained in which Mandala of the Rig Veda?",
    options: ["1st Mandala", "3rd Mandala", "7th Mandala", "9th Mandala"],
    correctAnswer: "B",
    explanation: "The Gayatri Mantra (Rig Veda 3.62.10) was composed by sage Vishvamitra in the 3rd Mandala."
  },
  {
    id: 45,
    difficulty: "Difficult",
    topic: "Indus Valley Civilization - Inscriptions",
    question: "A rare Harappan inscription consisting of 10 large white gypsum characters, resembling a civic signboard, was discovered at:",
    options: ["Harappa", "Dholavira", "Mohenjodaro", "Kalibangan"],
    correctAnswer: "B",
    explanation: "The famous 10-symbol 'Dholavira Signboard' was found dropped in a chamber near the northern gateway of Dholavira's citadel."
  },
  {
    id: 46,
    difficulty: "Difficult",
    topic: "Vedic Literature - Rig Veda",
    question: "The entire 9th Mandala of the Rig Veda (comprising 114 hymns) is dedicated exclusively to which deity?",
    options: ["Agni (Fire)", "Soma Pavamana", "Indra (Thunder)", "Varuna (Cosmic Order)"],
    correctAnswer: "B",
    explanation: "All 114 suktas of the 9th Mandala praise Soma Pavamana (the consecrated sacred plant juice and the moon)."
  },
  {
    id: 47,
    difficulty: "Difficult",
    topic: "Vedic Literature - Vedangas",
    question: "The earliest surviving text on Vedic astronomy, 'Vedanga Jyotisha', is traditionally attributed to:",
    options: ["Lagadha Muni", "Varahamihira", "Aryabhata", "Brahmagupta"],
    correctAnswer: "A",
    explanation: "Vedanga Jyotisha was authored by sage Lagadha (~1200–1000 BC) to calculate the precise calendar times for sacrificial rites."
  },
  {
    id: 48,
    difficulty: "Difficult",
    topic: "Indus Valley Civilization - Architecture",
    question: "What was the standardized volumetric ratio observed across typical mature Harappan burnt building bricks?",
    options: ["1 : 2 : 3", "1 : 2 : 4", "2 : 3 : 5", "1 : 3 : 6"],
    correctAnswer: "B",
    explanation: "Harappan masonry followed a strict dimensional ratio of 1 (thickness) : 2 (width) : 4 (length), e.g., 7 cm x 14 cm x 28 cm."
  },
  {
    id: 49,
    difficulty: "Difficult",
    topic: "Indus Valley Civilization - Excavations",
    question: "Who among the following archaeologists excavated and classified the burials at Harappa into 'Cemetery R-37' and 'Cemetery H'?",
    options: ["Sir Mortimer Wheeler", "S.R. Rao", "J.P. Joshi", "N.G. Mazumdar"],
    correctAnswer: "A",
    explanation: "Sir Mortimer Wheeler excavated Harappa in 1946, confirming Cemetery R-37 as Mature Harappan and Cemetery H as Late/Post-Harappan."
  },
  {
    id: 50,
    difficulty: "Difficult",
    topic: "Vedic Literature - Rig Veda",
    question: "The philosophical aphorism 'Truth is one, sages speak of it in various ways' (Ekam Sat Vipra Bahudha Vadanti) is found in:",
    options: ["Atharva Veda (Kanda 12)", "Rig Veda (1.164.46)", "Katha Upanishad", "Mundaka Upanishad"],
    correctAnswer: "B",
    explanation: "This celebrated Vedic non-dualist declaration is in Rig Veda (Mandala 1, Hymn 164, verse 46)."
  },
  // 51-60
  {
    id: 51,
    difficulty: "Easy",
    topic: "Indus Valley Civilization - Chronology",
    question: "What is the most widely accepted carbon-14 chronological timeframe for the mature Indus Valley Civilization?",
    options: ["3500 BC – 2500 BC", "2500 BC – 1750 BC", "1500 BC – 600 BC", "600 BC – 300 BC"],
    correctAnswer: "B",
    explanation: "Based on radiocarbon (C-14) calibration by D.P. Agrawal and standard historical consensus, mature Harappan culture flourished between 2500 BC and 1750 BC."
  },
  {
    id: 52,
    difficulty: "Easy",
    topic: "Indus Valley Civilization - Discoveries",
    question: "Who excavated the major urban site of Mohenjodaro in 1922?",
    options: ["Rai Bahadur Daya Ram Sahni", "Rakhal Das Bannerji", "Sir Aurel Stein", "N.G. Majumdar"],
    correctAnswer: "B",
    explanation: "R.D. Bannerji discovered the ancient ruins of Mohenjodaro in 1922 while investigating a Buddhist stupa on the mound."
  },
  {
    id: 53,
    difficulty: "Easy",
    topic: "Indus Valley Civilization - Sites & Rivers",
    question: "The historic site of Harappa was located along the bank of which river?",
    options: ["Indus", "Ravi", "Chenab", "Jhelum"],
    correctAnswer: "B",
    explanation: "Harappa is situated on the left bank of the Ravi river in Sahiwal district of West Punjab, Pakistan."
  },
  {
    id: 54,
    difficulty: "Easy",
    topic: "Indus Valley Civilization - Discoveries",
    question: "The port settlement of Lothal in Gujarat was excavated under the direction of:",
    options: ["S.R. Rao", "Amalanand Ghosh", "R.S. Bisht", "J.P. Joshi"],
    correctAnswer: "A",
    explanation: "Dr. S.R. Rao conducted excavations at Lothal between 1954 and 1962, uncovering its dockyard and warehouse complex."
  },
  {
    id: 55,
    difficulty: "Easy",
    topic: "Indus Valley Civilization - Northern Boundary",
    question: "Which Harappan site on the Chenab river in Jammu and Kashmir marks the northernmost limit of the civilization?",
    options: ["Manda", "Shortugai", "Ropar", "Kot Diji"],
    correctAnswer: "A",
    explanation: "Manda on the right bank of the Chenab in Akhnoor, Jammu represents the northern frontier of the main Harappan extent."
  },
  {
    id: 56,
    difficulty: "Easy",
    topic: "Indus Valley Civilization - Eastern Boundary",
    question: "Which site on the Hindon river in Uttar Pradesh marks the easternmost boundary of the Indus civilization?",
    options: ["Hastinapur", "Alamgirpur", "Ahichchhatra", "Kausambi"],
    correctAnswer: "B",
    explanation: "Alamgirpur in Meerut district, UP, along the Hindon river marks the easternmost known boundary of the Harappan culture."
  },
  {
    id: 57,
    difficulty: "Easy",
    topic: "Indus Valley Civilization - Western Boundary",
    question: "Which coastal site on the Dasht river near the Iran border represents the westernmost outpost of the Harappan civilization?",
    options: ["Sutkagendor", "Sotka-Koh", "Balakot", "Allahdino"],
    correctAnswer: "A",
    explanation: "Sutkagendor on the Makran coast in Baluchistan marks the westernmost frontier of the Indus civilization."
  },
  {
    id: 58,
    difficulty: "Easy",
    topic: "Indus Valley Civilization - Buildings",
    question: "Which colossal building at Mohenjodaro was considered the largest architectural structure of the city?",
    options: ["The Great Bath", "The Great Granary", "The Assembly Hall", "The College of Priests"],
    correctAnswer: "B",
    explanation: "The Great Granary at Mohenjodaro (measuring 45.71 m x 15.23 m) was the single largest architectural structure excavated at the site."
  },
  {
    id: 59,
    difficulty: "Easy",
    topic: "Indus Valley Civilization - Buildings",
    question: "The Great Bath, an elaborate public water tank made watertight with bitumen and gypsum mortar, was located at:",
    options: ["Harappa", "Mohenjodaro", "Lothal", "Kalibangan"],
    correctAnswer: "B",
    explanation: "The Great Bath was excavated on the citadel mound of Mohenjodaro, featuring steps leading down into the tank and surrounded by porticoes and rooms."
  },
  {
    id: 60,
    difficulty: "Easy",
    topic: "Indus Valley Civilization - Granaries",
    question: "A symmetrical complex of six granaries arranged in a double row of two rows was unearthed at:",
    options: ["Harappa", "Mohenjodaro", "Kalibangan", "Banawali"],
    correctAnswer: "A",
    explanation: "Harappa featured a group of six granaries arranged in two rows of six each (12 total units) on a raised revetment near the Ravi river."
  },
  // 61-70
  {
    id: 61,
    difficulty: "Moderate",
    topic: "Indus Valley Civilization - Discoveries",
    question: "Who discovered and carried out the pioneering excavation of Kalibangan in 1951?",
    options: ["Amalanand Ghosh", "B.B. Lal", "B.K. Thapar", "R.S. Bisht"],
    correctAnswer: "A",
    explanation: "Amalanand Ghosh first explored and identified Kalibangan in 1951; extensive systematic excavations were later conducted by B.B. Lal and B.K. Thapar in the 1960s."
  },
  {
    id: 62,
    difficulty: "Moderate",
    topic: "Indus Valley Civilization - Excavations",
    question: "The Harappan site of Banawali in Fatehabad district, Haryana was excavated in 1973 under the leadership of:",
    options: ["R.S. Bisht", "J.P. Joshi", "S.R. Rao", "Y.D. Sharma"],
    correctAnswer: "A",
    explanation: "Dr. R.S. Bisht of the Archaeological Survey of India directed the excavation of Banawali in 1973–74."
  },
  {
    id: 63,
    difficulty: "Moderate",
    topic: "Indus Valley Civilization - Discoveries",
    question: "Who discovered the sprawling site of Dholavira in the Rann of Kutchh in 1967–68?",
    options: ["J.P. Joshi", "R.S. Bisht", "D.K. Chakrabarti", "George Dales"],
    correctAnswer: "A",
    explanation: "J.P. Joshi first discovered Dholavira in 1967–68; extensive excavations were subsequently carried out by R.S. Bisht from 1990 onwards."
  },
  {
    id: 64,
    difficulty: "Moderate",
    topic: "Indus Valley Civilization - Artifacts",
    question: "At which Harappan site was a realistic clay toy model of an agricultural plough recovered?",
    options: ["Banawali", "Kalibangan", "Lothal", "Harappa"],
    correctAnswer: "A",
    explanation: "A complete terracotta toy plough was unearthed at Banawali, proving the use of the plough in Harappan farming."
  },
  {
    id: 65,
    difficulty: "Moderate",
    topic: "Indus Valley Civilization - Fire Altars",
    question: "A row of seven contiguous clay fire altars (Havan Kundas) was excavated on the citadel platform of:",
    options: ["Kalibangan", "Chanhudaro", "Mohenjodaro", "Banawali"],
    correctAnswer: "A",
    explanation: "Kalibangan revealed seven rectangular fire altars built in a row containing charcoal, ash, and terracotta cakes, indicating ritual fire ceremonies."
  },
  {
    id: 66,
    difficulty: "Moderate",
    topic: "Indus Valley Civilization - Imports",
    question: "The Harappans obtained the majority of their raw copper supplies from the ancient mines of:",
    options: ["Khetri in Rajasthan", "Kolar in Karnataka", "Hazaribagh in Jharkhand", "Singhbhum in Bihar"],
    correctAnswer: "A",
    explanation: "The Khetri copper belt in the Aravalli range of Rajasthan was the chief supplier of copper ingots and ore to Indus cities."
  },
  {
    id: 67,
    difficulty: "Moderate",
    topic: "Indus Valley Civilization - Imports",
    question: "Gold used in Harappan jewelry was primarily sourced from:",
    options: ["Kolar mines in South India and Afghanistan", "Khetri mines in Rajasthan", "Baluchistan", "Oman"],
    correctAnswer: "A",
    explanation: "Native gold was obtained from the Kolar goldfields in Karnataka and washed alluvial gravels in the rivers of Afghanistan and Central Asia."
  },
  {
    id: 68,
    difficulty: "Moderate",
    topic: "Indus Valley Civilization - External Trade",
    question: "Which island in the Persian Gulf was identified as 'Dilmun' in Mesopotamian trade records?",
    options: ["Bahrain", "Socotra", "Hormuz", "Kish"],
    correctAnswer: "A",
    explanation: "Cuneiform tablets identify Dilmun as modern Bahrain, which functioned as the crucial midway mart between Mesopotamia and Meluhha."
  },
  {
    id: 69,
    difficulty: "Moderate",
    topic: "Indus Valley Civilization - Burials",
    question: "Which Indus site provided distinctive archaeological evidence of 'pot burials' and an oval-shaped grave?",
    options: ["Surkotada", "Dholavira", "Chanhudaro", "Mohenjodaro"],
    correctAnswer: "A",
    explanation: "Surkotada in Kutchh revealed oval graves covered by stone cairns containing post-cremation pot burials."
  },
  {
    id: 70,
    difficulty: "Moderate",
    topic: "Indus Valley Civilization - Artifacts",
    question: "A bronze chariot drawn by two oxen and driven by a standing charioteer was discovered at which southern outpost?",
    options: ["Daimabad", "Lothal", "Kuntasi", "Bhagatrav"],
    correctAnswer: "A",
    explanation: "Daimabad in Maharashtra yielded a remarkable cache of heavy solid cast bronze sculptures, including a charioteer with two oxen, an elephant, a rhino, and a buffalo."
  },
  // 71-80
  {
    id: 71,
    difficulty: "Moderate",
    topic: "Indus Valley Civilization - Metrology",
    question: "What unit formed the primary base for Harappan fractional weights and measures?",
    options: ["12", "16", "20", "24"],
    correctAnswer: "B",
    explanation: "The Harappan metrological system followed a binary progression (1, 2, 4, 8, 16, 32, 64) for lower weights, where 16 was the fundamental traditional unit."
  },
  {
    id: 72,
    difficulty: "Moderate",
    topic: "Indus Valley Civilization - Religion",
    question: "Which sacred tree was most prominently depicted on Harappan seals and worshipped as an abode of divinity?",
    options: ["Peepal (Ficus religiosa)", "Banyan (Ficus benghalensis)", "Neem (Azadirachta indica)", "Mango (Mangifera indica)"],
    correctAnswer: "A",
    explanation: "The pipal tree with its heart-shaped leaves is depicted repeatedly on seals, including a famous seal showing a horned deity standing in a pipal tree."
  },
  {
    id: 73,
    difficulty: "Moderate",
    topic: "Indus Valley Civilization - Motifs",
    question: "Which mythological or composite creature appears most frequently across Harappan stamp seals?",
    options: ["Unicorn (one-horned beast)", "Humped bull", "Short-horned bull", "Composite chimera"],
    correctAnswer: "A",
    explanation: "The one-horned mythical creature (often called the 'unicorn') is the single most common animal motif on Harappan stamp seals."
  },
  {
    id: 74,
    difficulty: "Moderate",
    topic: "Indus Valley Civilization - Agriculture",
    question: "At which two Harappan sites was empirical evidence of rice cultivation (rice husk/imprints) documented?",
    options: ["Lothal and Rangpur", "Harappa and Mohenjodaro", "Banawali and Kalibangan", "Dholavira and Surkotada"],
    correctAnswer: "A",
    explanation: "Charred rice husks and grain impressions embedded in pottery were identified at Lothal and Rangpur in Gujarat."
  },
  {
    id: 75,
    difficulty: "Moderate",
    topic: "Indus Valley Civilization - Industry",
    question: "Which industrial settlement was renowned for manufacturing steatite and carnelian beads, shell bangles, and metal objects?",
    options: ["Chanhudaro", "Alamgirpur", "Rakhigarhi", "Manda"],
    correctAnswer: "A",
    explanation: "Chanhudaro had specialized workshops with bead-drilling equipment, metal-smelting furnaces, and shell-cutting tools."
  },
  {
    id: 76,
    difficulty: "Difficult",
    topic: "Indus Valley Civilization - Seals",
    question: "What percentage of the total recovered seals of the Indus Valley Civilization was found at Mohenjodaro alone?",
    options: ["25%", "40%", "56%", "75%"],
    correctAnswer: "C",
    explanation: "Mohenjodaro yielded 1,398 seals, which accounts for approximately 56% of all inscribed seals found across all Harappan sites."
  },
  {
    id: 77,
    difficulty: "Difficult",
    topic: "Indus Valley Civilization - Town Planning",
    question: "At which Harappan town did the main entrance doorways of private residences open directly onto the wide main street rather than into narrow side lanes?",
    options: ["Mohenjodaro", "Harappa", "Lothal", "Kalibangan"],
    correctAnswer: "C",
    explanation: "Unlike Mohenjodaro and Harappa where doors opened into quiet side lanes to avoid dust and noise, houses at Lothal opened directly onto the main thoroughfare."
  },
  {
    id: 78,
    difficulty: "Difficult",
    topic: "Indus Valley Civilization - Symbols",
    question: "The historic origins of which universal sacred symbol have been traced by archaeologists to Indus seal motifs?",
    options: ["The Swastika", "The Crescent", "The Triratna", "The Dharmachakra"],
    correctAnswer: "A",
    explanation: "Multiple steatite seals and terracotta tokens from Mohenjodaro and Harappa bear geometrically precise clock-wise and counter-clockwise Swastika symbols."
  },
  {
    id: 79,
    difficulty: "Difficult",
    topic: "Indus Valley Civilization - Decline Theories",
    question: "Which archaeologist proposed the theory that an Aryan invasion under the god Indra caused the collapse of Harappan cities?",
    options: ["Sir Mortimer Wheeler", "Sir John Marshall", "Walter Fairservis", "Robert Raikes"],
    correctAnswer: "A",
    explanation: "Sir Mortimer Wheeler famously claimed that 'Indra stands accused', citing Rigvedic mentions of 'Purandara' (destroyer of forts) and skeletons at Mohenjodaro."
  },
  {
    id: 80,
    difficulty: "Difficult",
    topic: "Indus Valley Civilization - Decline Theories",
    question: "Who advanced the ecological theory attributing the decline of Harappan culture to over-exploitation of delicate riverine environments and deforestation?",
    options: ["Walter Fairservis", "H.T. Lambrick", "G.F. Dales", "Daya Ram Sahni"],
    correctAnswer: "A",
    explanation: "Walter Fairservis computed the carrying capacity of the Indus soil and concluded that growing populations and overgrazing exhausted the fragile ecology."
  },
  // 81-90
  {
    id: 81,
    difficulty: "Difficult",
    topic: "Indus Valley Civilization - Script",
    question: "Approximately how many distinct pictographic and ideographic symbols have been cataloged in the undeciphered Indus script?",
    options: ["100 to 150", "375 to 400", "700 to 800", "1,200 to 1,500"],
    correctAnswer: "B",
    explanation: "Scholars like Iravatham Mahadevan and Asko Parpola have identified between 375 and 400 distinct graphemes/signs in the Harappan corpus."
  },
  {
    id: 82,
    difficulty: "Difficult",
    topic: "Indus Valley Civilization - Script Signs",
    question: "Which pictogram is observed to be the single most frequently occurring symbol across Indus seal inscriptions?",
    options: ["Fish symbol", "Bird in flight", "Jar/Pot sign", "Human stick figure"],
    correctAnswer: "A",
    explanation: "The stylized fish symbol (interpreted by Dravidian hypothesis researchers as 'meen') is the most common pictogram."
  },
  {
    id: 83,
    difficulty: "Difficult",
    topic: "Indus Valley Civilization - Epigraphy",
    question: "What is the oldest DECIPHERED indigenous script discovered within the Indian subcontinent?",
    options: ["Harappan Script", "Brahmi Script", "Kharosthi Script", "Aramaic Script"],
    correctAnswer: "B",
    explanation: "While the Harappan script is the oldest overall, the oldest successfully deciphered script is Brahmi (deciphered by James Prinsep in 1837)."
  },
  {
    id: 84,
    difficulty: "Difficult",
    topic: "Indus Valley Civilization - Burials",
    question: "What was the normal cardinal orientation of the human deceased in standard mature Harappan extended burials?",
    options: ["Head to the North, feet to the South", "Head to the East, feet to the West", "Head to the South, feet to the North", "Head to the West, feet to the East"],
    correctAnswer: "A",
    explanation: "Standard Harappan inhumations placed the corpse in a supine extended posture with the head pointing strictly North and feet to the South."
  },
  {
    id: 85,
    difficulty: "Difficult",
    topic: "Indus Valley Civilization - Imports",
    question: "From which region was high-value Silver primarily imported into Harappan cities?",
    options: ["Afghanistan, Persia, and South India", "Sindh and Baluchistan", "Khetri mines in Rajasthan", "Oman and Bahrain"],
    correctAnswer: "A",
    explanation: "Silver was imported from the lead-zinc-silver mines of Afghanistan and Persia, as well as South Indian deposits."
  },
  {
    id: 86,
    difficulty: "Difficult",
    topic: "Indus Valley Civilization - Imports",
    question: "Steatite for seals and beads was sourced internally from Rajasthan and externally from:",
    options: ["Shaher-i-Sokhta (Iran) and Kirthar Hills", "Dilmun (Bahrain)", "Badakhshan (Afghanistan)", "Kolar (Karnataka)"],
    correctAnswer: "A",
    explanation: "External steatite supplies came from Shaher-i-Sokhta in southeastern Iran and deposits across the Kirthar mountain range."
  },
  {
    id: 87,
    difficulty: "Difficult",
    topic: "Indus Valley Civilization - Shell Industry",
    question: "Which two coastal Harappan settlements were specialized centers for gathering chank conch-shells and manufacturing shell objects?",
    options: ["Balakot and Lothal", "Kalibangan and Banawali", "Harappa and Rakhigarhi", "Alamgirpur and Manda"],
    correctAnswer: "A",
    explanation: "Balakot on the Sonmiani Bay and Lothal in the Gulf of Khambhat were premier workshops for turning marine shells into bangles, ladles, and inlays."
  },
  {
    id: 88,
    difficulty: "Difficult",
    topic: "Indus Valley Civilization - Artifacts",
    question: "A miniature ivory vanity box, copper mirror, and a bronze crucible for melting metal were excavated at:",
    options: ["Harappa", "Mohenjodaro", "Chanhudaro", "Surkotada"],
    correctAnswer: "A",
    explanation: "Mound F at Harappa yielded personal grooming artifacts including a bronze vanity box, copper mirror, hair pins, and bronze-smelting crucibles."
  },
  {
    id: 89,
    difficulty: "Difficult",
    topic: "Indus Valley Civilization - Artifacts",
    question: "A cosmetic container identified as an inkpot and evidence of lipstick or rouge were excavated at:",
    options: ["Chanhudaro", "Harappa", "Kalibangan", "Dholavira"],
    correctAnswer: "A",
    explanation: "Chanhudaro's excavations yielded a small terracotta container identified as an inkpot, as well as cosmetic sticks resembling lipstick."
  },
  {
    id: 90,
    difficulty: "Difficult",
    topic: "Indus Valley Civilization - Civic Life",
    question: "Which of the following recreational objects was discovered at both Harappa and Mohenjodaro?",
    options: ["Cubic terracotta dice with numbered markings", "Iron chess pieces", "Bronze playing cards", "Spinning wooden roulette"],
    correctAnswer: "A",
    explanation: "Cubic terracotta dice with 1 to 6 punched circular dots identical to modern dice were found at both Harappa and Mohenjodaro."
  },
  // 91-100
  {
    id: 91,
    difficulty: "Easy",
    topic: "Vedic Culture - Chronology",
    question: "What is the historical timeframe assigned to the Early Vedic (Rigvedic) period in ancient India?",
    options: ["2500 BC – 1750 BC", "1500 BC – 1000 BC", "1000 BC – 600 BC", "600 BC – 300 BC"],
    correctAnswer: "B",
    explanation: "The Vedic era is divided into Early Vedic / Rigvedic period (1500 BC – 1000 BC) and Later Vedic period (1000 BC – 600 BC)."
  },
  {
    id: 92,
    difficulty: "Easy",
    topic: "Vedic Culture - Homeland Theories",
    question: "Which German Indologist proposed the widely accepted theory that the original homeland of the Indo-Aryans was Central Asia?",
    options: ["Max Muller", "William Jones", "A.L. Basham", "Vincent Smith"],
    correctAnswer: "A",
    explanation: "Prof. Max Muller in 1853 proposed that the ancestral homeland of Vedic Aryans was the steppe region of Central Asia."
  },
  {
    id: 93,
    difficulty: "Easy",
    topic: "Vedic Culture - Homeland Theories",
    question: "Who authored the famous work 'The Arctic Home in the Vedas', arguing that Aryans originated in polar regions?",
    options: ["Bal Gangadhar Tilak", "Swami Dayanand Saraswati", "Sri Aurobindo", "Dr. B.R. Ambedkar"],
    correctAnswer: "A",
    explanation: "Lokmanya Bal Gangadhar Tilak wrote 'The Arctic Home in the Vedas' (1903), interpreting Rigvedic descriptions of prolonged dawn as polar phenomena."
  },
  {
    id: 94,
    difficulty: "Easy",
    topic: "Vedic Culture - Homeland Theories",
    question: "Swami Dayanand Saraswati, the founder of Arya Samaj, held the view that the original homeland of Aryans was:",
    options: ["Tibet", "Central Asia", "Sapta Sindhu", "Scandinavia"],
    correctAnswer: "A",
    explanation: "In his seminal treatise 'Satyarth Prakash', Swami Dayanand Saraswati contended that the original home of Aryans was Tibet."
  },
  {
    id: 95,
    difficulty: "Easy",
    topic: "Vedic Culture - Geography",
    question: "What geographical designation was applied by the early Rigvedic Aryans to their core settlement region?",
    options: ["Aryavarta", "Sapta Sindhu", "Brahmavarta", "Madhyadesha"],
    correctAnswer: "B",
    explanation: "The early Rigvedic tribes settled in the 'Sapta Sindhu' (land of seven rivers: Indus, Jhelum, Chenab, Ravi, Beas, Sutlej, and Saraswati)."
  },
  {
    id: 96,
    difficulty: "Easy",
    topic: "Vedic Culture - Rivers",
    question: "What was the ancient Rigvedic name for the modern Jhelum river?",
    options: ["Vitasta", "Asikni", "Parushni", "Shutudri"],
    correctAnswer: "A",
    explanation: "The Jhelum river was known as the 'Vitasta' in Vedic literature and 'Hydaspes' to the Greeks."
  },
  {
    id: 97,
    difficulty: "Easy",
    topic: "Vedic Culture - Rivers",
    question: "What was the ancient Rigvedic name for the modern Chenab river?",
    options: ["Asikni", "Parushni", "Vipas", "Saraswati"],
    correctAnswer: "A",
    explanation: "The Chenab was referred to as 'Asikni' in the Rig Veda and 'Acesines' by Greek chroniclers."
  },
  {
    id: 98,
    difficulty: "Easy",
    topic: "Vedic Culture - Rivers",
    question: "What was the ancient Rigvedic name for the modern Ravi river?",
    options: ["Parushni", "Shutudri", "Vipas", "Vitasta"],
    correctAnswer: "A",
    explanation: "The Ravi was known as the 'Parushni' (or Iravati), on whose banks the famous Battle of Ten Kings was fought."
  },
  {
    id: 99,
    difficulty: "Easy",
    topic: "Vedic Culture - Rivers",
    question: "What was the ancient Rigvedic name for the modern Sutlej river?",
    options: ["Shutudri", "Vipas", "Kubha", "Suvastu"],
    correctAnswer: "A",
    explanation: "The Sutlej was designated as 'Shutudri' (or Zaradros in Greek accounts) in Vedic texts."
  },
  {
    id: 100,
    difficulty: "Easy",
    topic: "Vedic Culture - Rivers",
    question: "What was the ancient Rigvedic name for the modern Beas river?",
    options: ["Vipas", "Vitasta", "Drishadvati", "Gomati"],
    correctAnswer: "A",
    explanation: "The Beas river was known in Vedic literature as 'Vipas' (or Vipasa) and 'Hyphasis' to the Greeks."
  },
  // 101-110
  {
    id: 101,
    difficulty: "Moderate",
    topic: "Vedic Culture - Rivers",
    question: "Which river is praised in the Rig Veda as the most sacred with the titles 'Naditama', 'Devitama', and 'Matetama'?",
    options: ["Saraswati", "Sindhu", "Ganga", "Yamuna"],
    correctAnswer: "A",
    explanation: "The Saraswati river was revered as the holiest river, called 'Naditama' (best of rivers), 'Devitama' (best of goddesses), and 'Matetama' (best of mothers)."
  },
  {
    id: 102,
    difficulty: "Moderate",
    topic: "Vedic Culture - Rivers",
    question: "Which river is mentioned most frequently across the entire corpus of the Rig Veda?",
    options: ["Sindhu (Indus)", "Saraswati", "Ganga", "Parushni"],
    correctAnswer: "A",
    explanation: "The Sindhu (Indus) is mentioned more times than any other river in the Rig Veda because of its immense economic and geographical centrality."
  },
  {
    id: 103,
    difficulty: "Moderate",
    topic: "Vedic Culture - Rivers",
    question: "How many times is the sacred river Ganga explicitly mentioned in the Rig Veda?",
    options: ["Only once", "Three times", "Ten times", "Over fifty times"],
    correctAnswer: "A",
    explanation: "The Ganga is mentioned only once in the Rig Veda (in the Nadistuti Sukta of the 10th Mandala), showing that Aryans were concentrated in the northwest."
  },
  {
    id: 104,
    difficulty: "Moderate",
    topic: "Vedic Culture - Rivers",
    question: "How many times is the river Yamuna mentioned in the Rig Veda?",
    options: ["Three times", "Once", "Ten times", "Twenty times"],
    correctAnswer: "A",
    explanation: "The Yamuna is mentioned exactly three times in the Rig Veda."
  },
  {
    id: 105,
    difficulty: "Moderate",
    topic: "Vedic Culture - Afghan Rivers",
    question: "The Rig Veda mentions the river 'Kubha'. What is its modern identity?",
    options: ["Kabul river", "Kurram river", "Swat river", "Gomal river"],
    correctAnswer: "A",
    explanation: "The Rigvedic 'Kubha' corresponds to the modern Kabul river in Afghanistan."
  },
  {
    id: 106,
    difficulty: "Moderate",
    topic: "Vedic Culture - Afghan Rivers",
    question: "The Rigvedic river 'Krumu' corresponds to which modern waterway?",
    options: ["Kurram river", "Kabul river", "Gomal river", "Helmand river"],
    correctAnswer: "A",
    explanation: "'Krumu' is identified with the modern Kurram river flowing through northwestern Pakistan and Afghanistan."
  },
  {
    id: 107,
    difficulty: "Moderate",
    topic: "Vedic Culture - Afghan Rivers",
    question: "The Rigvedic river 'Gomati' mentioned alongside western tributaries corresponds to the modern:",
    options: ["Gomal river", "Swat river", "Chitral river", "Zaskar river"],
    correctAnswer: "A",
    explanation: "The western Rigvedic 'Gomati' corresponds to the Gomal river in Baluchistan/Waziristan (distinct from the Awadh Gomti)."
  },
  {
    id: 108,
    difficulty: "Moderate",
    topic: "Vedic Culture - Afghan Rivers",
    question: "The Rigvedic river 'Suvastu' is identified with which modern river in northwestern Pakistan?",
    options: ["Swat river", "Kabul river", "Gilgit river", "Hunza river"],
    correctAnswer: "A",
    explanation: "'Suvastu' translates to 'fair dwelling place' and corresponds to the fertile valley of the Swat river."
  },
  {
    id: 109,
    difficulty: "Moderate",
    topic: "Vedic Literature - Definition",
    question: "Vedic literature is classified as 'Apaurasheya', which means:",
    options: ["Not of human creation (divinely authored/revealed)", "Handed down by oral memory only", "Composed by warrior poets", "Transcribed on palm leaves"],
    correctAnswer: "A",
    explanation: "'Apaurasheya' means 'not composed by Purusha (man)', signifying that the Vedic revelations are eternal and heard from cosmic reality."
  },
  {
    id: 110,
    difficulty: "Moderate",
    topic: "Vedic Literature - Definition",
    question: "The Sanskrit term 'Shruti' applied to the four Vedic Samhitas literally translates to:",
    options: ["That which is remembered", "That which is heard", "That which is written", "That which is practiced"],
    correctAnswer: "B",
    explanation: "'Shruti' comes from the root 'Shru' (to hear), indicating sacred knowledge revealed directly to the ancient Rishis and transmitted by ear."
  },
  // 111-120
  {
    id: 111,
    difficulty: "Moderate",
    topic: "Vedic Literature - Upavedas",
    question: "Which Upaveda (auxiliary Veda) dealing with holistic medicine is traditionally attached to the Rig Veda?",
    options: ["Ayurveda", "Gandharvaveda", "Dhanurveda", "Shilpaveda"],
    correctAnswer: "A",
    explanation: "Ayurveda (the science of life and medicine) is the Upaveda canonically associated with the Rig Veda (or sometimes Atharva Veda)."
  },
  {
    id: 112,
    difficulty: "Moderate",
    topic: "Vedic Literature - Upavedas",
    question: "The 'Gandharvaveda', dealing with vocal music, instrumental arts, and dance, is the Upaveda of:",
    options: ["Sama Veda", "Rig Veda", "Yajur Veda", "Atharva Veda"],
    correctAnswer: "A",
    explanation: "Gandharvaveda (associated with the mythical divine musicians Gandharvas) is the Upaveda of the musical Sama Veda."
  },
  {
    id: 113,
    difficulty: "Moderate",
    topic: "Vedic Literature - Upavedas",
    question: "The 'Dhanurveda', treating archery, warfare, and military tactics, is the Upaveda of:",
    options: ["Yajur Veda", "Rig Veda", "Sama Veda", "Atharva Veda"],
    correctAnswer: "A",
    explanation: "Dhanurveda (science of martial arts and weaponry) is the traditional Upaveda affiliated with the ritualistic Yajur Veda."
  },
  {
    id: 114,
    difficulty: "Moderate",
    topic: "Vedic Literature - Upavedas",
    question: "The 'Shilpaveda' (or Sthapatyaveda), covering architecture and mechanical arts, is the Upaveda of:",
    options: ["Atharva Veda", "Rig Veda", "Sama Veda", "Yajur Veda"],
    correctAnswer: "A",
    explanation: "Shilpaveda or Sthapatyaveda (architecture, town building, and metallurgy) is associated with the practical Atharva Veda."
  },
  {
    id: 115,
    difficulty: "Moderate",
    topic: "Vedic Literature - Sama Veda",
    question: "How many verses in the Sama Veda are original, with all the remaining verses being derived directly from the Rig Veda?",
    options: ["75 verses", "108 verses", "250 verses", "500 verses"],
    correctAnswer: "A",
    explanation: "Out of 1,549 verses in the Sama Veda, all except 75 verses are drawn directly from the 8th and 9th Mandalas of the Rig Veda."
  },
  {
    id: 116,
    difficulty: "Moderate",
    topic: "Vedic Literature - Priests",
    question: "Which Vedic priest presided over and chanted the melodic verses of the Sama Veda during rituals?",
    options: ["Udgatri", "Hotri", "Adhvaryu", "Agnidhra"],
    correctAnswer: "A",
    explanation: "The Udgatri ('singer priest') specialized in chanting the melodic stanzas (Samans) of the Sama Veda."
  },
  {
    id: 117,
    difficulty: "Moderate",
    topic: "Vedic Literature - Priests",
    question: "Which Vedic priest performed the manual sacrificial acts and recited the prose mantras of the Yajur Veda?",
    options: ["Adhvaryu", "Hotri", "Udgatri", "Brahma"],
    correctAnswer: "A",
    explanation: "The Adhvaryu measured the sacrificial ground, prepared the altars, slaughtered sacrificial offerings, and whispered Yajur Veda mantras."
  },
  {
    id: 118,
    difficulty: "Moderate",
    topic: "Vedic Literature - Priests",
    question: "Which high priest sat silently to supervise the entire sacrificial ritual and silently corrected ritual errors using Atharvavedic mantras?",
    options: ["Brahma", "Hotri", "Adhvaryu", "Udgatri"],
    correctAnswer: "A",
    explanation: "The Brahma priest was the presiding supervisor who knew all four Vedas and guarded the sacrifice against ritual blemishes."
  },
  {
    id: 119,
    difficulty: "Difficult",
    topic: "Vedic History - Battle of Ten Kings",
    question: "The famous 'Battle of the Ten Kings' (Dasharajna Yuddha) described in the 7th Mandala of the Rig Veda was fought on the banks of:",
    options: ["Parushni (Ravi)", "Asikni (Chenab)", "Vitasta (Jhelum)", "Shutudri (Sutlej)"],
    correctAnswer: "A",
    explanation: "King Sudas of the Bharata-Tritsu tribe defeated a confederacy of ten Aryan and non-Aryan kings on the banks of the Parushni (Ravi) river."
  },
  {
    id: 120,
    difficulty: "Difficult",
    topic: "Vedic History - Battle of Ten Kings",
    question: "Who was the chief spiritual priest (Purohita) and advisor to King Sudas of the Bharata tribe in the Battle of Ten Kings?",
    options: ["Sage Vashistha", "Sage Vishvamitra", "Sage Agastya", "Sage Atri"],
    correctAnswer: "A",
    explanation: "Sage Vashistha served as the royal preceptor to King Sudas after Sudas dismissed Sage Vishvamitra, leading Vishvamitra to organize the opposing confederacy."
  },
  // 121-130
  {
    id: 121,
    difficulty: "Difficult",
    topic: "Vedic Literature - Rig Veda Seers",
    question: "The 2nd Mandala of the Rig Veda is attributed to which illustrious seer family?",
    options: ["Gritsamada", "Vishvamitra", "Vamadeva", "Bharadvaja"],
    correctAnswer: "A",
    explanation: "The 2nd Mandala was composed predominantly by seer Gritsamada and his descendants (Shaunaka family)."
  },
  {
    id: 122,
    difficulty: "Difficult",
    topic: "Vedic Literature - Rig Veda Seers",
    question: "Which Mandala of the Rig Veda is composed by Sage Vamadeva and contains foundational references to agricultural activities?",
    options: ["4th Mandala", "3rd Mandala", "5th Mandala", "6th Mandala"],
    correctAnswer: "A",
    explanation: "The 4th Mandala, attributed to Sage Vamadeva, contains hymns detailing the preparation of soil, yoking of oxen, and sowing of barley."
  },
  {
    id: 123,
    difficulty: "Difficult",
    topic: "Vedic Literature - Rig Veda Seers",
    question: "The 5th Mandala of the Rig Veda is dedicated to the compositions of which seer family?",
    options: ["Atri", "Bharadvaja", "Kanva", "Angiras"],
    correctAnswer: "A",
    explanation: "The 5th Mandala was authored by the Atri lineage (Atris)."
  },
  {
    id: 124,
    difficulty: "Difficult",
    topic: "Vedic Literature - Rig Veda Seers",
    question: "The 6th Mandala of the Rig Veda is canonically associated with the lineage of:",
    options: ["Bharadvaja", "Vashistha", "Vishvamitra", "Gritsamada"],
    correctAnswer: "A",
    explanation: "The 6th Mandala was composed by Sage Bharadvaja and his clan."
  },
  {
    id: 125,
    difficulty: "Difficult",
    topic: "Vedic Literature - Rig Veda Seers",
    question: "The 7th Mandala of the Rig Veda, which recounts the Dasharajna war, was composed by:",
    options: ["Vashistha", "Vishvamitra", "Vamadeva", "Atri"],
    correctAnswer: "A",
    explanation: "The entire 7th Mandala was authored by Sage Vashistha and his descendants."
  },
  {
    id: 126,
    difficulty: "Difficult",
    topic: "Vedic Literature - Rig Veda Seers",
    question: "The 8th Mandala of the Rig Veda contains the compositions of which major priestly families?",
    options: ["Kanva and Angiras", "Vishvamitra and Vashistha", "Atri and Bharadvaja", "Gritsamada and Bhrigu"],
    correctAnswer: "A",
    explanation: "The 8th Mandala consists predominantly of hymns by the Kanva and Angiras lineages."
  },
  {
    id: 127,
    difficulty: "Difficult",
    topic: "Vedic Literature - Atharva Veda",
    question: "The Atharva Veda is traditionally named after which two legendary fire-priests?",
    options: ["Atharvan and Angiras", "Vashistha and Vishvamitra", "Shunahshepa and Yaska", "Baudhayana and Apastamba"],
    correctAnswer: "A",
    explanation: "The text was originally called 'Atharvangirasa' after the ancestral seers Atharvan (auspicious rites) and Angiras (hostile sorcery/spells)."
  },
  {
    id: 128,
    difficulty: "Difficult",
    topic: "Vedic Society - Political Assemblies",
    question: "In the Atharva Veda, which two political assemblies are described as the twin daughters of the creator god Prajapati?",
    options: ["Sabha and Samiti", "Vidatha and Gana", "Sabha and Vidatha", "Samiti and Parishad"],
    correctAnswer: "A",
    explanation: "Atharva Veda (7.12.1) calls the 'Sabha' (elder council) and 'Samiti' (general popular assembly) the two divine daughters of Prajapati."
  },
  {
    id: 129,
    difficulty: "Difficult",
    topic: "Vedic Literature - Brahmanas",
    question: "The Aitareya Brahmana, which provides the earliest account of the coronation ritual (Rajasuya), belongs to which Veda?",
    options: ["Rig Veda", "Sama Veda", "Yajur Veda", "Atharva Veda"],
    correctAnswer: "A",
    explanation: "The Aitareya Brahmana belongs to the Rig Veda and was composed by Mahidasa Aitareya."
  },
  {
    id: 130,
    difficulty: "Difficult",
    topic: "Vedic Literature - Brahmanas",
    question: "The Kaushitaki (or Sankhayana) Brahmana is an explanatory commentary attached to:",
    options: ["Rig Veda", "Sama Veda", "Shukla Yajur Veda", "Krishna Yajur Veda"],
    correctAnswer: "A",
    explanation: "The Kaushitaki Brahmana is the second major Brahmana belonging to the Rig Veda."
  },
  // 131-140
  {
    id: 131,
    difficulty: "Difficult",
    topic: "Vedic Literature - Brahmanas",
    question: "The Panchavimsha Brahmana (also known as the Tandya Mahabrahmana) belongs to:",
    options: ["Sama Veda", "Rig Veda", "Yajur Veda", "Atharva Veda"],
    correctAnswer: "A",
    explanation: "The Panchavimsha (25-chapter) Brahmana belongs to the Sama Veda and contains the Vratyastoma rite to admit non-Aryans into the Aryan fold."
  },
  {
    id: 132,
    difficulty: "Difficult",
    topic: "Vedic Literature - Brahmanas",
    question: "Which Brahmana recounts the famous legend of Videha Madhava carrying sacrificial fire eastward to the Sadanira (Gandak) river?",
    options: ["Shatapatha Brahmana", "Aitareya Brahmana", "Gopatha Brahmana", "Panchavimsha Brahmana"],
    correctAnswer: "A",
    explanation: "The Shatapatha Brahmana (1.4.1) describes king Videha Madhava following the fire-god Agni eastward to Aryanize Bihar."
  },
  {
    id: 133,
    difficulty: "Difficult",
    topic: "Vedic Literature - Aranyakas",
    question: "Which of the following Vedas has NO surviving Aranyaka text whatsoever?",
    options: ["Atharva Veda", "Sama Veda", "Yajur Veda", "Rig Veda"],
    correctAnswer: "A",
    explanation: "The Atharva Veda has no Aranyaka attached to it, having focused on domestic spells rather than forest ascetic theology."
  },
  {
    id: 134,
    difficulty: "Difficult",
    topic: "Vedic Literature - Upanishads",
    question: "The philosophical dialogue between the sage Yajnavalkya and the learned female philosopher Gargi is recorded in the:",
    options: ["Brihadaranyaka Upanishad", "Chandogya Upanishad", "Katha Upanishad", "Kena Upanishad"],
    correctAnswer: "A",
    explanation: "The debate took place at the court of King Janaka of Videha and is preserved in the Brihadaranyaka Upanishad."
  },
  {
    id: 135,
    difficulty: "Difficult",
    topic: "Vedic Literature - Upanishads",
    question: "The profound Mahavakya 'Tat Tvam Asi' ('That Thou Art') originates in which Upanishad?",
    options: ["Chandogya Upanishad", "Brihadaranyaka Upanishad", "Mandukya Upanishad", "Taittiriya Upanishad"],
    correctAnswer: "A",
    explanation: "'Tat Tvam Asi' was taught by sage Uddalaka Aruni to his son Shvetaketu in the Chandogya Upanishad."
  },
  {
    id: 136,
    difficulty: "Difficult",
    topic: "Vedic Literature - Upanishads",
    question: "Which Upanishad features the dramatic dialogue between the young seeker Nachiketa and Yama (the God of Death)?",
    options: ["Katha Upanishad", "Mundaka Upanishad", "Prashna Upanishad", "Isha Upanishad"],
    correctAnswer: "A",
    explanation: "In the Katha Upanishad, Yama grants three boons to young Nachiketa, unveiling the secret of the immortality of the soul (Atman)."
  },
  {
    id: 137,
    difficulty: "Difficult",
    topic: "Vedic Literature - National Motto",
    question: "India's national motto 'Satyameva Jayate' (Truth alone triumphs) is inscribed from which Upanishad?",
    options: ["Mundaka Upanishad", "Mandukya Upanishad", "Katha Upanishad", "Chandogya Upanishad"],
    correctAnswer: "A",
    explanation: "The phrase comes from Mundaka Upanishad (3.1.6): 'Satyameva Jayate Nanritam'."
  },
  {
    id: 138,
    difficulty: "Difficult",
    topic: "Vedic Literature - Upanishads",
    question: "Which is the shortest of all classical Upanishads, containing only 12 verses on the states of consciousness and the syllable 'AUM'?",
    options: ["Mandukya Upanishad", "Kena Upanishad", "Isha Upanishad", "Prashna Upanishad"],
    correctAnswer: "A",
    explanation: "The Mandukya Upanishad consists of just 12 concise prose sentences expounding the four states of consciousness (waking, dreaming, deep sleep, Turiya)."
  },
  {
    id: 139,
    difficulty: "Difficult",
    topic: "Vedic Literature - Ashramas",
    question: "The earliest unambiguous textual mention of all four Ashramas (Brahmacharya, Grihastha, Vanaprastha, and Sanyasa) appears in the:",
    options: ["Jabala Upanishad", "Chandogya Upanishad", "Brihadaranyaka Upanishad", "Aitareya Upanishad"],
    correctAnswer: "A",
    explanation: "While the Chandogya mentions only three stages, the Jabala Upanishad explicitly enumerates all four Ashramas including Sanyasa."
  },
  {
    id: 140,
    difficulty: "Difficult",
    topic: "Vedic Literature - Upanishads",
    question: "The celebrated universal ethical command 'Matri Devo Bhava, Pitri Devo Bhava, Atithi Devo Bhava' is found in the:",
    options: ["Taittiriya Upanishad", "Kena Upanishad", "Isha Upanishad", "Katha Upanishad"],
    correctAnswer: "A",
    explanation: "The Shikshavalli section of the Taittiriya Upanishad delivers this convocation address to departing Vedic graduates."
  },
  // 141-150
  {
    id: 141,
    difficulty: "Difficult",
    topic: "Vedic Literature - Vedangas",
    question: "How many total limbs (Vedangas) are appended to the Vedas to ensure their accurate pronunciation, interpretation, and ritual execution?",
    options: ["Six", "Four", "Eight", "Twelve"],
    correctAnswer: "A",
    explanation: "There are six Vedangas: Shiksha (Phonetics), Kalpa (Rituals), Vyakarana (Grammar), Nirukta (Etymology), Chhanda (Metrics), and Jyotisha (Astronomy)."
  },
  {
    id: 142,
    difficulty: "Difficult",
    topic: "Vedic Literature - Vedangas",
    question: "The Vedanga 'Shiksha' specializes in which field of study?",
    options: ["Phonetics, accentuation, and pronunciation", "Ritual sacrifice measurements", "Grammatical compounding rules", "Genealogical history of seers"],
    correctAnswer: "A",
    explanation: "Shiksha deals with the science of phonetics, syllables, accents (Udatta, Anudatta, Svarita), and oral recitation rules codified in Pratishakhyas."
  },
  {
    id: 143,
    difficulty: "Difficult",
    topic: "Vedic Literature - Vedangas",
    question: "The Vedanga 'Chhanda' (Metrics) is canonically codified in the 'Chhandasutras' authored by:",
    options: ["Pingala", "Yaska", "Panini", "Baudhayana"],
    correctAnswer: "A",
    explanation: "Acharya Pingala composed the Chhandasutra (~3rd–2nd century BC), laying down metric meters (Gayatri, Trishtubh, Jagati) and early binary math."
  },
  {
    id: 144,
    difficulty: "Difficult",
    topic: "Vedic Philosophy - Shad-Darshanas",
    question: "Who founded the classical Samkhya school of Indian philosophy, which expounds the dualism of Purusha (consciousness) and Prakriti (matter)?",
    options: ["Sage Kapila", "Sage Patanjali", "Sage Gautama", "Sage Kanada"],
    correctAnswer: "A",
    explanation: "Sage Kapila founded the Samkhya system, traditionally regarded as the oldest philosophical darshana in India."
  },
  {
    id: 145,
    difficulty: "Difficult",
    topic: "Vedic Philosophy - Shad-Darshanas",
    question: "The Yoga Darshana, which outlines the Ashtanga Yoga pathway for mental mastery, was systematized in the 'Yoga Sutras' by:",
    options: ["Sage Patanjali", "Sage Kapila", "Sage Jaimini", "Sage Badarayana"],
    correctAnswer: "A",
    explanation: "Patanjali compiled the 196 aphorisms of the Yoga Sutras, establishing the classical school of Yoga philosophy."
  },
  {
    id: 146,
    difficulty: "Difficult",
    topic: "Vedic Philosophy - Shad-Darshanas",
    question: "The Nyaya school, renowned for establishing formal logic and epistemological pramanas (means of valid knowledge), was founded by:",
    options: ["Akshapada Gautama", "Uluka Kanada", "Jaimini", "Kumarila Bhatta"],
    correctAnswer: "A",
    explanation: "Sage Akshapada Gautama composed the Nyaya Sutras, creating the classical system of Indian logic."
  },
  {
    id: 147,
    difficulty: "Difficult",
    topic: "Vedic Philosophy - Shad-Darshanas",
    question: "The Vaisheshika school, which formulated an atomic theory of the physical cosmos (Paramanuvada), was founded by:",
    options: ["Uluka Kanada", "Kapila", "Patanjali", "Badarayana"],
    correctAnswer: "A",
    explanation: "Sage Kanada (also known as Uluka) authored the Vaisheshika Sutras, proposing that all material objects are composed of indivisible atoms (paramanu)."
  },
  {
    id: 148,
    difficulty: "Difficult",
    topic: "Vedic Philosophy - Shad-Darshanas",
    question: "The Purva Mimamsa school, which focuses on Vedic orthodoxy and ritual dharma, was established by:",
    options: ["Jaimini", "Badarayana", "Kapila", "Gautama"],
    correctAnswer: "A",
    explanation: "Sage Jaimini authored the Mimamsa Sutras, asserting the supreme authority and eternality of the Vedic injunctions."
  },
  {
    id: 149,
    difficulty: "Difficult",
    topic: "Vedic Philosophy - Shad-Darshanas",
    question: "The Uttara Mimamsa (Vedanta) school, based on the Upanishads and the 'Brahma Sutras', was founded by:",
    options: ["Badarayana (Veda Vyasa)", "Jaimini", "Kanada", "Kapila"],
    correctAnswer: "A",
    explanation: "Sage Badarayana compiled the Brahma Sutras (Vedanta Sutras), synthesizing the philosophical teachings of the Upanishads."
  },
  {
    id: 150,
    difficulty: "Difficult",
    topic: "Vedic Literature - Epics",
    question: "The Mahabharata originally consisted of 8,800 verses and was known by which ancient title?",
    options: ["Jaya Samhita", "Bharata", "Shatasahasri Samhita", "Kavya"],
    correctAnswer: "A",
    explanation: "The epic grew in three stages: first 'Jaya' (8,800 verses), then 'Bharata' (24,000 verses), and finally 'Mahabharata' (100,000 verses)."
  },
  // 151-160
  {
    id: 151,
    difficulty: "Easy",
    topic: "Indus Valley Civilization - Sites",
    question: "Which of the following Harappan sites is located in the Indian state of Gujarat?",
    options: ["Lothal", "Banawali", "Kalibangan", "Rakhigarhi"],
    correctAnswer: "A",
    explanation: "Lothal is located near Saragwala village in Dholka taluka of Ahmedabad district, Gujarat."
  },
  {
    id: 152,
    difficulty: "Easy",
    topic: "Indus Valley Civilization - Architecture",
    question: "What type of bricks did the Harappans primarily utilize for constructing domestic houses and water drains?",
    options: ["Kiln-burnt baked bricks", "Sun-dried mud blocks only", "Rough uncut quarry stone", "Granite monoliths"],
    correctAnswer: "A",
    explanation: "Unlike contemporary Egyptian and Mesopotamian civilizations which relied on sun-dried bricks, Harappans extensively used standardized kiln-burnt baked bricks."
  },
  {
    id: 153,
    difficulty: "Easy",
    topic: "Indus Valley Civilization - Sites",
    question: "The site of Chanhudaro is situated on the bank of which river?",
    options: ["Indus", "Ravi", "Bhogava", "Ghaggar"],
    correctAnswer: "A",
    explanation: "Chanhudaro is situated on the east bank of the Indus river in Sindh, Pakistan."
  },
  {
    id: 154,
    difficulty: "Easy",
    topic: "Indus Valley Civilization - Agriculture",
    question: "What were the two primary staple cereal crops cultivated by the Indus people?",
    options: ["Wheat and Barley", "Rice and Maize", "Rye and Oats", "Sorghum and Millet"],
    correctAnswer: "A",
    explanation: "Wheat and barley were the foundational staple grains found in granaries across Harappa and Mohenjodaro."
  },
  {
    id: 155,
    difficulty: "Easy",
    topic: "Vedic Literature - Epics",
    question: "Who is traditionally venerated as the author of the epic Ramayana?",
    options: ["Sage Valmiki", "Sage Veda Vyasa", "Sage Tulsidas", "Sage Kalidasa"],
    correctAnswer: "A",
    explanation: "Sage Valmiki, known as the 'Adi Kavi' (first poet), authored the Ramayana in Sanskrit."
  },
  {
    id: 156,
    difficulty: "Easy",
    topic: "Vedic Literature - Epics",
    question: "The epic Mahabharata is composed of how many total parvas (books)?",
    options: ["18 Parvas", "12 Parvas", "24 Parvas", "7 Parvas"],
    correctAnswer: "A",
    explanation: "The Mahabharata consists of 18 Parvas (books), with the Bhagavad Gita contained within the 6th book (Bhishma Parva)."
  },
  {
    id: 157,
    difficulty: "Easy",
    topic: "Vedic Literature - Puranas",
    question: "How many canonical Maha-Puranas exist in classical Sanskrit literature?",
    options: ["18", "12", "24", "108"],
    correctAnswer: "A",
    explanation: "There are traditionally 18 Maha-Puranas (including Vishnu, Bhagavata, Vayu, Matsya, Shiva Puranas)."
  },
  {
    id: 158,
    difficulty: "Easy",
    topic: "Vedic Literature - Puranas",
    question: "Which Purana is widely considered by historians to be the oldest surviving Purana text?",
    options: ["Matsya Purana", "Vishnu Purana", "Vayu Purana", "Garuda Purana"],
    correctAnswer: "A",
    explanation: "The Matsya Purana is regarded by historians as one of the oldest and most genealogically reliable Puranas."
  },
  {
    id: 159,
    difficulty: "Easy",
    topic: "Vedic Society - Varna",
    question: "In the Later Vedic period, which varna was primarily associated with agriculture, trade, and cattle-rearing?",
    options: ["Vaishya", "Brahmana", "Kshatriya", "Shudra"],
    correctAnswer: "A",
    explanation: "The Vaishyas engaged in commerce, agriculture, and livestock breeding, and were the sole tax-paying class."
  },
  {
    id: 160,
    difficulty: "Easy",
    topic: "Vedic Literature - Smriti",
    question: "Which of the following is regarded as the oldest legal treatise and Smriti text in ancient India?",
    options: ["Manusmriti (Manava Dharmashastra)", "Yajnavalkya Smriti", "Narada Smriti", "Parashara Smriti"],
    correctAnswer: "A",
    explanation: "Manusmriti, codified between the 2nd century BC and 2nd century AD, is the oldest and foremost legal Smriti text."
  },
  // 161-170
  {
    id: 161,
    difficulty: "Moderate",
    topic: "Indus Valley Civilization - Sites",
    question: "In which modern Pakistani province is the site of Harappa located?",
    options: ["Punjab", "Sindh", "Baluchistan", "Khyber Pakhtunkhwa"],
    correctAnswer: "A",
    explanation: "Harappa is located in Sahiwal (formerly Montgomery) district of Pakistani Punjab."
  },
  {
    id: 162,
    difficulty: "Moderate",
    topic: "Indus Valley Civilization - Sites",
    question: "In which modern Pakistani province is the site of Mohenjodaro located?",
    options: ["Sindh", "Punjab", "Baluchistan", "Gilgit-Baltistan"],
    correctAnswer: "A",
    explanation: "Mohenjodaro is situated in Larkana district of the Sindh province of Pakistan."
  },
  {
    id: 163,
    difficulty: "Moderate",
    topic: "Indus Valley Civilization - Architecture",
    question: "The residential quarters for workmen and circular brick threshing platforms were unearthed immediately outside the citadel of:",
    options: ["Harappa", "Mohenjodaro", "Lothal", "Chanhudaro"],
    correctAnswer: "A",
    explanation: "At Harappa, Mound F contained rows of single-roomed barracks for laborers and 18 circular brick working floors for pounding grain."
  },
  {
    id: 164,
    difficulty: "Moderate",
    topic: "Indus Valley Civilization - Drainage",
    question: "How did Harappan engineers ensure that covered street drains could be inspected and cleared of silt?",
    options: ["By installing regular inspection manholes covered with loose brick slabs", "By keeping drains completely open", "By flushing water using pumps", "By building vertical tunnels"],
    correctAnswer: "A",
    explanation: "Underground masonry drains had loose stone slabs or removable bricks serving as inspection manholes at regular intervals."
  },
  {
    id: 165,
    difficulty: "Moderate",
    topic: "Indus Valley Civilization - Seals",
    question: "Which Harappan site yielded two distinctive cylindrical seals similar to those found in Mesopotamia?",
    options: ["Kalibangan and Mohenjodaro", "Banawali and Lothal", "Surkotada and Manda", "Dholavira and Chanhudaro"],
    correctAnswer: "A",
    explanation: "Cylindrical seals characteristic of Mesopotamian city-states were excavated at Kalibangan and Mohenjodaro."
  },
  {
    id: 166,
    difficulty: "Moderate",
    topic: "Vedic Literature - Kalpa Sutras",
    question: "The 'Shrauta Sutras', a branch of the Kalpa Vedanga, deal specifically with:",
    options: ["Public community sacrifices and grand royal rituals", "Domestic household rites", "Civil and criminal laws", "Geometric altar rules"],
    correctAnswer: "A",
    explanation: "Shrauta Sutras prescribe rules for major public sacrificial ceremonies (like Rajasuya, Ashvamedha, Vajapeya)."
  },
  {
    id: 167,
    difficulty: "Moderate",
    topic: "Vedic Literature - Kalpa Sutras",
    question: "The 'Grihya Sutras' regulate:",
    options: ["Domestic life-cycle ceremonies (Samskaras) and household rituals", "State administration", "Military weaponry", "Astronomy and calendars"],
    correctAnswer: "A",
    explanation: "Grihya Sutras codify domestic rituals, birth rites, marriages, funerals, and daily household obligations."
  },
  {
    id: 168,
    difficulty: "Moderate",
    topic: "Vedic Literature - Kalpa Sutras",
    question: "The 'Dharma Sutras' treat which aspect of ancient Indian life?",
    options: ["Social law, ethics, royal duties, and civil jurisprudence", "Temple architecture", "Pronunciation of mantras", "Musical tuning"],
    correctAnswer: "A",
    explanation: "Dharma Sutras (like those of Gautama, Baudhayana, Apastamba) laid down legal codes, duties of Varnas, and royal governance."
  },
  {
    id: 169,
    difficulty: "Moderate",
    topic: "Vedic Literature - Upanishads",
    question: "The metaphor comparing formal Vedic sacrificial rituals to 'frail, unseaworthy boats' (Adridha Nau) is found in:",
    options: ["Mundaka Upanishad", "Katha Upanishad", "Kena Upanishad", "Prashna Upanishad"],
    correctAnswer: "A",
    explanation: "Mundaka Upanishad (1.2.7) asserts that ceremonial sacrifices are unstable rafts that cannot ferry human beings across sorrow."
  },
  {
    id: 170,
    difficulty: "Moderate",
    topic: "Vedic Literature - Upanishads",
    question: "The famous invocation 'Asato Ma Sadgamaya, Tamaso Ma Jyotirgamaya' (Lead me from the unreal to the real) occurs in:",
    options: ["Brihadaranyaka Upanishad", "Chandogya Upanishad", "Isha Upanishad", "Mandukya Upanishad"],
    correctAnswer: "A",
    explanation: "This celebrated prayer is located in the Pavamana Abhyaroha section of the Brihadaranyaka Upanishad (1.3.28)."
  },
  // 171-180
  {
    id: 171,
    difficulty: "Difficult",
    topic: "Indus Valley Civilization - Sites",
    question: "The site of Surkotada, known for horse bone specimens and stone-covered cairn graves, is located in:",
    options: ["Kutchh district of Gujarat", "Hanumangarh district of Rajasthan", "Larkana district of Sindh", "Hisar district of Haryana"],
    correctAnswer: "A",
    explanation: "Surkotada was excavated in 1964 by J.P. Joshi in the Rapar taluka of Kutchh district, Gujarat."
  },
  {
    id: 172,
    difficulty: "Difficult",
    topic: "Indus Valley Civilization - Sites",
    question: "Which Harappan site located on the dry bed of the ancient Drishadvati river was excavated by Suraj Bhan?",
    options: ["Siswal", "Mitathal", "Rakhigarhi", "Banawali"],
    correctAnswer: "A",
    explanation: "Siswal in Haryana was excavated by Suraj Bhan, identifying the pre-Harappan Siswal ceramic culture."
  },
  {
    id: 173,
    difficulty: "Difficult",
    topic: "Indus Valley Civilization - Terracotta",
    question: "What technique was utilized by Indus sculptors to cast their delicate bronze hollow and solid figurines?",
    options: ["Lost-wax casting (cire perdue)", "Hammered repousse technique", "Sand mould stamping", "Riveted sheet joining"],
    correctAnswer: "A",
    explanation: "Harappans used 'cire perdue' (lost-wax process) by modelling figures in beeswax, coating them in clay, baking to melt out the wax, and pouring molten bronze."
  },
  {
    id: 174,
    difficulty: "Difficult",
    topic: "Indus Valley Civilization - Pottery",
    question: "What was the dominant style of decorated pottery produced across mature Harappan settlements?",
    options: ["Red and Black ware with black painted motifs on a red slip", "Painted Grey Ware (PGW)", "Northern Black Polished Ware (NBPW)", "Ochre Coloured Pottery (OCP)"],
    correctAnswer: "A",
    explanation: "Harappan pottery was fast-wheel-turned Red Ware treated with red slip and decorated with designs painted in black manganese pigment."
  },
  {
    id: 175,
    difficulty: "Difficult",
    topic: "Indus Valley Civilization - Crops",
    question: "What two specific archaeological varieties of wheat were cultivated by the farmers of Harappa and Mohenjodaro?",
    options: ["Club wheat (Triticum compactum) and Indian dwarf wheat (Triticum sphaerococcum)", "Einkorn wheat and Emmer wheat", "Durum wheat and Spelt wheat", "Wild Rye and Khorasan wheat"],
    correctAnswer: "A",
    explanation: "Botanical analyses of charred grains from granaries identified Triticum compactum and Triticum sphaerococcum."
  },
  {
    id: 176,
    difficulty: "Difficult",
    topic: "Indus Valley Civilization - Trade",
    question: "Which precious blue-green gemstone was imported by the Harappans from the Khorasan region of northeastern Persia?",
    options: ["Turquoise", "Lapis Lazuli", "Jade", "Amethyst"],
    correctAnswer: "A",
    explanation: "Turquoise was imported from the mines of Nishapur in Khorasan (northeastern Iran)."
  },
  {
    id: 177,
    difficulty: "Difficult",
    topic: "Indus Valley Civilization - Trade",
    question: "Jade beads discovered in Harappan settlements were sourced from trade exchanges with:",
    options: ["Central Asia / Khotan", "South India", "Mesopotamia", "Egypt"],
    correctAnswer: "A",
    explanation: "Green nephrite jade was imported through trans-Himalayan caravan routes from Khotan and the Pamir regions of Central Asia."
  },
  {
    id: 178,
    difficulty: "Difficult",
    topic: "Indus Valley Civilization - Trade",
    question: "Amethyst, a violet gemstone found in Harappan ornamental beads, was brought from:",
    options: ["The Deccan traps of Maharashtra", "Badakhshan in Afghanistan", "Kolar in Karnataka", "Khetri in Rajasthan"],
    correctAnswer: "A",
    explanation: "Amethyst crystals were obtained from cavities in the volcanic Deccan trap rock formations in Maharashtra."
  },
  {
    id: 179,
    difficulty: "Difficult",
    topic: "Indus Valley Civilization - Trade",
    question: "Carnelian, renowned for producing translucent red Harappan beads, was sourced from:",
    options: ["Ratanpur in Rajpipla, Gujarat", "Kolar in Karnataka", "Badakhshan in Afghanistan", "Makran in Baluchistan"],
    correctAnswer: "A",
    explanation: "Ratanpur mines near the Narmada valley in Gujarat were the premier ancient supplier of agate and carnelian nodules."
  },
  {
    id: 180,
    difficulty: "Difficult",
    topic: "Vedic Literature - Rig Veda",
    question: "The 'Nasadiya Sukta', which contemplates the mystery of cosmic creation before time and existence, is in which Mandala?",
    options: ["10th Mandala", "1st Mandala", "2nd Mandala", "9th Mandala"],
    correctAnswer: "A",
    explanation: "The Nasadiya Sukta (Hymn of Non-Eternity, 10.129) is a philosophical hymn pondering what existed before creation."
  },
  // 181-190
  {
    id: 181,
    difficulty: "Difficult",
    topic: "Vedic Literature - Rig Veda",
    question: "The 'Nadistuti Sukta' (Hymn in praise of rivers), cataloging 21 rivers from east to west, is found in which Mandala of the Rig Veda?",
    options: ["10th Mandala", "7th Mandala", "3rd Mandala", "5th Mandala"],
    correctAnswer: "A",
    explanation: "Hymn 75 of the 10th Mandala enumerates Vedic rivers systematically starting from the Ganga in the east to the Kubha in the west."
  },
  {
    id: 182,
    difficulty: "Difficult",
    topic: "Vedic Literature - Rig Veda",
    question: "The 'Vivaha Sukta' (Marriage Hymn), which forms the liturgical core of Hindu wedding vows, is found in:",
    options: ["10th Mandala of Rig Veda", "Atharva Veda (Book 1)", "Shatapatha Brahmana", "Aitareya Brahmana"],
    correctAnswer: "A",
    explanation: "Hymn 85 of the 10th Mandala depicts the celestial wedding of Surya (daughter of the Sun) and Soma, establishing marriage vows."
  },
  {
    id: 183,
    difficulty: "Difficult",
    topic: "Vedic Literature - Yajur Veda Recensions",
    question: "The 'Vajasaneyi Samhita' is the standard textual recension of which Vedic collection?",
    options: ["Shukla (White) Yajur Veda", "Krishna (Black) Yajur Veda", "Sama Veda", "Atharva Veda"],
    correctAnswer: "A",
    explanation: "Shukla Yajur Veda is preserved in two shakhas: Madhyandina and Kanva, collectively termed the Vajasaneyi Samhita."
  },
  {
    id: 184,
    difficulty: "Difficult",
    topic: "Vedic Literature - Yajur Veda Recensions",
    question: "Which of the following Shakhas (recensions) belongs to the Krishna (Black) Yajur Veda?",
    options: ["Taittiriya, Maitrayani, Katha, and Kapisthala", "Shakala and Baskala", "Kauthuma and Ranayaniya", "Shaunaka and Pippalada"],
    correctAnswer: "A",
    explanation: "Krishna Yajurveda is preserved across the Taittiriya, Maitrayani, Katha, and Kapisthala recensions."
  },
  {
    id: 185,
    difficulty: "Difficult",
    topic: "Vedic Literature - Atharva Veda Recensions",
    question: "Which are the two surviving recensions (Shakhas) of the Atharva Veda Samhita?",
    options: ["Shaunaka and Pippalada", "Vajasaneyi and Kanva", "Aitareya and Kaushitaki", "Panchavimsha and Jaiminiya"],
    correctAnswer: "A",
    explanation: "Out of nine traditional branches, only the Shaunaka and Pippalada Shakhas of the Atharva Veda have survived into modern times."
  },
  {
    id: 186,
    difficulty: "Difficult",
    topic: "Vedic Literature - Sama Veda Recensions",
    question: "The three extant shakhas of the Sama Veda Samhita are:",
    options: ["Kauthuma, Ranayaniya, and Jaiminiya", "Shakala, Baskala, and Mandukeya", "Taittiriya, Maitrayani, and Katha", "Shaunaka, Paippalada, and Charanavaidya"],
    correctAnswer: "A",
    explanation: "The three surviving Sama Veda schools are Kauthuma (Gujarat/Bengal), Ranayaniya (Maharashtra/Karnataka), and Jaiminiya (Kerala/Tamil Nadu)."
  },
  {
    id: 187,
    difficulty: "Difficult",
    topic: "Vedic Literature - Vedangas",
    question: "Yaska's 'Nirukta' is composed as a comprehensive philological commentary upon which older lexicon of Vedic terms?",
    options: ["The Nighantu", "The Dhatupatha", "The Ganapatha", "The Amarakosha"],
    correctAnswer: "A",
    explanation: "The Nighantu was a traditional glossary of obscure Vedic words; Yaska's Nirukta is its earliest surviving systematic analytical commentary."
  },
  {
    id: 188,
    difficulty: "Difficult",
    topic: "Vedic Literature - Grammar",
    question: "Who authored the 'Varttikas', an essential supplementary critical commentary on Panini's Ashtadhyayi?",
    options: ["Katyayana (Vararuchi)", "Patanjali", "Bhartrihari", "Jayaditya"],
    correctAnswer: "A",
    explanation: "Katyayana composed the Varttikas (~3rd century BC) to explain, defend, and update Panini's aphorisms."
  },
  {
    id: 189,
    difficulty: "Difficult",
    topic: "Vedic Literature - Grammar",
    question: "Who composed the monumental grammatical treatise 'Mahabhashya', completing the Muni-Traya (Trio of Sages) of Sanskrit grammar?",
    options: ["Patanjali", "Panini", "Katyayana", "Yaska"],
    correctAnswer: "A",
    explanation: "Sage Patanjali (~2nd century BC) composed the Mahabhashya, completing the grammatical triumvirate of Panini, Katyayana, and Patanjali."
  },
  {
    id: 190,
    difficulty: "Difficult",
    topic: "Vedic Literature - Geometry",
    question: "Which ancient Shulva Sutra provides the earliest explicit statement of the Pythagorean geometric theorem in India?",
    options: ["Baudhayana Shulva Sutra", "Apastamba Shulva Sutra", "Manava Shulva Sutra", "Katyayana Shulva Sutra"],
    correctAnswer: "A",
    explanation: "The Baudhayana Shulva Sutra (~800–600 BC) states that the diagonal of a rectangle produces by itself the sum of the areas produced by both sides."
  },
  // 191-200
  {
    id: 191,
    difficulty: "Difficult",
    topic: "Vedic Philosophy - Samkhya",
    question: "Who authored the 'Samkhyakarika', the earliest surviving authoritative philosophical manual of the Samkhya school?",
    options: ["Ishvarakrishna", "Kapila", "Panchashikha", "Asuri"],
    correctAnswer: "A",
    explanation: "While sage Kapila founded the school, Ishvarakrishna (~4th century AD) authored the classical standard text 'Samkhyakarika'."
  },
  {
    id: 192,
    difficulty: "Difficult",
    topic: "Vedic Philosophy - Nyaya",
    question: "How many pramanas (valid sources of knowledge) are formally recognized in the Nyaya epistemological system?",
    options: ["Four (Pratyaksha, Anumana, Upamana, Shabda)", "Two (Pratyaksha, Anumana)", "Three (Pratyaksha, Anumana, Shabda)", "Six (including Arthapatti and Anupalabdhi)"],
    correctAnswer: "A",
    explanation: "Nyaya recognizes four pramanas: Pratyaksha (perception), Anumana (inference), Upamana (comparison), and Shabda (verbal testimony)."
  },
  {
    id: 193,
    difficulty: "Difficult",
    topic: "Vedic Philosophy - Vaisheshika",
    question: "How many fundamental ontological categories (Padarthas) are classified in Kanada's Vaisheshika system?",
    options: ["Six (Dravya, Guna, Karma, Samanya, Vishesha, Samavaya)", "Three", "Twelve", "Twenty-four"],
    correctAnswer: "A",
    explanation: "The Vaisheshika system analyzes reality into six categories: Substance (Dravya), Quality (Guna), Action (Karma), Generality (Samanya), Particularity (Vishesha), and Inherence (Samavaya)."
  },
  {
    id: 194,
    difficulty: "Difficult",
    topic: "Vedic Literature - Upanishads",
    question: "The philosophical doctrine that the world is an illusion (Maya) and that Brahman alone is ultimate reality was systematically synthesized by:",
    options: ["Adi Shankaracharya", "Ramanujacharya", "Madhvacharya", "Vallabhacharya"],
    correctAnswer: "A",
    explanation: "Adi Shankaracharya (8th century AD) established Advaita (Non-dualist) Vedanta, interpreting the Upanishads and Brahma Sutras."
  },
  {
    id: 195,
    difficulty: "Difficult",
    topic: "Vedic Literature - Epics",
    question: "The sacred philosophical discourse of the 'Bhagavad Gita' occurs in which Parva of the Mahabharata?",
    options: ["Bhishma Parva", "Udyoga Parva", "Drona Parva", "Shanti Parva"],
    correctAnswer: "A",
    explanation: "Chapters 23 to 40 of the Bhishma Parva constitute the 700 verses of the Bhagavad Gita."
  },
  {
    id: 196,
    difficulty: "Difficult",
    topic: "Vedic Literature - Epics",
    question: "Which Parva is the largest of the 18 Parvas of the Mahabharata, containing extensive discourses on statecraft and Raja Dharma?",
    options: ["Shanti Parva", "Vana Parva", "Anushasana Parva", "Sabha Parva"],
    correctAnswer: "A",
    explanation: "The Shanti Parva contains Bhishma's teachings to Yudhishthira from his bed of arrows on kingship, law, and liberation."
  },
  {
    id: 197,
    difficulty: "Difficult",
    topic: "Vedic Literature - Epics",
    question: "Who composed the monumental commentary 'Mahabharata-Tatparya-Nirnaya'?",
    options: ["Madhvacharya", "Ramanuja", "Shankara", "Nimbarka"],
    correctAnswer: "A",
    explanation: "The Dvaita philosopher Madhvacharya composed the Mahabharata-Tatparya-Nirnaya to expound the theological meaning of the epic."
  },
  {
    id: 198,
    difficulty: "Difficult",
    topic: "Vedic Literature - Smriti",
    question: "Which Smriti is famous for its legal clarity and the commentary written upon it by Vijnaneshvara known as the 'Mitakshara'?",
    options: ["Yajnavalkya Smriti", "Manusmriti", "Narada Smriti", "Brihaspati Smriti"],
    correctAnswer: "A",
    explanation: "Vijnaneshvara (11th century) authored the Mitakshara, a commentary on the Yajnavalkya Smriti governing Hindu inheritance."
  },
  {
    id: 199,
    difficulty: "Difficult",
    topic: "Vedic Literature - Legal Schools",
    question: "The rival school of Hindu inheritance law known as 'Dayabhaga' was authored by:",
    options: ["Jimutavahana", "Vijnaneshvara", "Kulluka Bhatta", "Medhatithi"],
    correctAnswer: "A",
    explanation: "Jimutavahana authored the Dayabhaga (~12th century), which became the pre-eminent legal code for inheritance in Bengal and Assam."
  },
  {
    id: 200,
    difficulty: "Difficult",
    topic: "Vedic Culture - Synthesis",
    question: "The famous passage comparing the four stages of life (Ashramas) to an ascent toward spiritual liberation was first systematized in which class of literature?",
    options: ["Dharma Sutras and Smritis", "Rig Veda Samhita", "Sama Veda Aranyakas", "Shulva Sutras"],
    correctAnswer: "A",
    explanation: "The classical Ashrama framework was fully codified in the Dharma Sutras (Apastamba, Gautama) and early Smritis as an organized societal pathway."
  }
];

// 1. Function to randomly shuffle options and assign the correct letter (A, B, C, D)
function shuffleQuestion(q) {
  const letters = ["A", "B", "C", "D"];
  // Map correct answer text
  let correctLetter = q.correctAnswer;
  let correctIndex = letters.indexOf(correctLetter);
  let correctText = q.options[correctIndex];

  // Shuffle options using Fisher-Yates
  let shuffledOptions = [...q.options];
  for (let i = shuffledOptions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledOptions[i], shuffledOptions[j]] = [shuffledOptions[j], shuffledOptions[i]];
  }

  // Find new index of correct text
  let newCorrectIndex = shuffledOptions.indexOf(correctText);
  let newCorrectLetter = letters[newCorrectIndex];

  return {
    ...q,
    options: shuffledOptions,
    correctAnswer: newCorrectLetter
  };
}

// Randomize options for each question so answers are distributed evenly across A, B, C, D
const randomizedQuestions = questions.map(q => shuffleQuestion(q));

// 2. Export to JSON
const jsonFilePath = path.join(__dirname, '..', 'data', 'mock-tests', 'ancient-india-200-mcq.json');
fs.writeFileSync(jsonFilePath, JSON.stringify(randomizedQuestions, null, 2), 'utf8');
console.log(`Successfully written JSON to: ${jsonFilePath}`);

// 3. Export to Markdown with rich formatting and explanations under each question
let mdContent = `# 🏛️ Ancient India: Indus Valley Civilization & Vedic Literature (200 Masterclass MCQs)
> **Curated from Lucent's General Knowledge (Ancient India: Harappan Civilization & Vedic Literature)**  
> **Repository:** [NextSem-Ranker-](https://github.com/nextsemacademy-max/NextSem-Ranker-)  
> **Standard:** Complete 200 High-Yield Exam-Grade Questions with Options Randomized (A, B, C, D) and In-Depth Explanations.

---

## 📑 Table of Contents
1. [Questions 1 - 50: Harappan Geography, Excavators, Cities & Town Planning](#questions-1---50)
2. [Questions 51 - 100: Artifacts, Crafts, Foreign Trade, Religion & Decline](#questions-51---100)
3. [Questions 101 - 150: Vedic Literature (Rig, Sama, Yajur, Atharva) & Rivers](#questions-101---150)
4. [Questions 151 - 200: Brahmanas, Upanishads, Vedangas & Shad-Darshanas](#questions-151---200)

---
`;

randomizedQuestions.forEach((q, idx) => {
  if (idx === 0) mdContent += `\n## Questions 1 - 50\n\n`;
  if (idx === 50) mdContent += `\n---\n## Questions 51 - 100\n\n`;
  if (idx === 100) mdContent += `\n---\n## Questions 101 - 150\n\n`;
  if (idx === 150) mdContent += `\n---\n## Questions 151 - 200\n\n`;

  const diffEmoji = q.difficulty === "Easy" ? "🟢" : (q.difficulty === "Moderate" ? "🟡" : "🔴");

  mdContent += `#### Q${q.id}. ${q.question}\n`;
  mdContent += `*Level: ${diffEmoji} ${q.difficulty} | Topic: ${q.topic}*\n\n`;
  q.options.forEach((opt, oIdx) => {
    const letters = ["A", "B", "C", "D"];
    mdContent += `- **${letters[oIdx]})** ${opt}\n`;
  });
  mdContent += `\n> **Correct Answer:** **${q.correctAnswer}**  \n`;
  mdContent += `> **💡 In-Depth Explanation:** ${q.explanation}\n\n`;
});

const mdFilePath = path.join(__dirname, '..', 'content', 'practice-questions', 'ancient-india-200-mcq.md');
fs.writeFileSync(mdFilePath, mdContent, 'utf8');
console.log(`Successfully written Markdown to: ${mdFilePath}`);
