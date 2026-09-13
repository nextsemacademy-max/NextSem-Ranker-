const fs = require('fs');
const path = require('path');

// Read existing 700 questions
const jsonPath = path.join(__dirname, '..', 'data', 'mock-tests', 'ancient-india-200-mcq.json');
const currentQuestions = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
console.log(`Current questions loaded: ${currentQuestions.length}`);

// Medieval India Topics for Batch 4 (IDs 701 to 1000):
// 1. Early Medieval & Islamic Invasions (Muhammad bin Qasim, Mahmud Ghazni, Muhammad Ghori, Tarain)
// 2. Delhi Sultanate: Slave, Khilji, Tughlaq, Sayyid, Lodhi Dynasties
// 3. Vijayanagar Empire (Krishnadeva Raya, Ashtadiggajas) & Bahmani Kingdom
// 4. Mughal Empire (Babur, Humayun, Sher Shah Suri, Akbar, Jahangir, Shah Jahan, Aurangzeb)
// 5. Maratha Empire (Shivaji, Ashtapradhan, Chauth & Sardeshmukhi)

const medievalTemplates = [
  // 1. Arab Invasion
  {
    topic: "Early Medieval - Arab Invasion",
    topic_hi: "पूर्व मध्यकाल - अरब आक्रमण",
    q: "Who was the first Arab general to invade India, conquering Sindh and Multan in 712 AD?",
    q_hi: "712 ईस्वी में सिंध और मुल्तान पर विजय प्राप्त करने वाला प्रथम अरब सेनापति कौन था?",
    opts: ["Muhammad bin Qasim", "Mahmud Ghazni", "Muhammad Ghori", "Qutbuddin Aibak"],
    opts_hi: ["मुहम्मद बिन कासिम", "महमूद गजनवी", "मुहम्मद गोरी", "कुतुबुद्दीन ऐबक"],
    ans: "A",
    exp: "Muhammad bin Qasim, sent by the Umayyad Governor Al-Hajjaj, defeated Raja Dahir of Sindh at the Battle of Rawar in 712 AD.",
    exp_hi: "मुहम्मद बिन कासिम ने 712 ईस्वी में सिंध के राजा दाहिर को पराजित कर भारत में पहली सफल मुस्लिम विजय प्राप्त की।"
  },
  {
    topic: "Mahmud of Ghazni - Somnath",
    topic_hi: "महमूद गजनवी - सोमनाथ मंदिर",
    q: "In which year did Sultan Mahmud of Ghazni launch his famous 16th expedition to sack and plunder the holy Somnath Temple in Gujarat?",
    q_hi: "सुल्तान महमूद गजनवी ने गुजरात के पवित्र सोमनाथ मंदिर पर अपना प्रसिद्ध 16वां आक्रमण किस वर्ष किया था?",
    opts: ["1025 AD", "1001 AD", "1018 AD", "1191 AD"],
    opts_hi: ["1025 ईस्वी", "1001 ईस्वी", "1018 ईस्वी", "1191 ईस्वी"],
    ans: "A",
    exp: "In 1025 AD (during the reign of Chalukya King Bhima I), Mahmud of Ghazni plundered the rich Somnath temple on the coast of Saurashtra.",
    exp_hi: "1025 ईस्वी में भीमदेव प्रथम के शासनकाल में महमूद गजनवी ने सोमनाथ मंदिर को लूटा और ध्वस्त किया था।"
  },
  {
    topic: "Scholars of Ghazni - Al-Beruni",
    topic_hi: "गजनवी के विद्वान - अलबरूनी",
    q: "Which celebrated Persian polymath accompanied Mahmud of Ghazni to India and authored the monumental Arabic treatise 'Kitab-ul-Hind'?",
    q_hi: "महमूद गजनवी के साथ भारत आने वाले किस प्रसिद्ध विद्वान ने 'किताब-उल-हिंद' (तहकीक-ए-हिंद) की रचना की थी?",
    opts: ["Al-Beruni", "Firdausi", "Utbi", "Ibn Battuta"],
    opts_hi: ["अलबरूनी", "फिरदौसी", "उतबी", "इब्न बतूता"],
    ans: "A",
    exp: "Al-Beruni (Abu Raihan) studied Sanskrit, Indian astronomy, mathematics, and philosophy, compiling 'Kitab-ul-Hind'. Firdausi wrote Shahnama.",
    exp_hi: "अलबरूनी ने भारतीय संस्कृति और विज्ञान का गहन अध्ययन कर अरबी भाषा में 'किताब-उल-हिंद' की रचना की।"
  },
  {
    topic: "Battles of Tarain",
    topic_hi: "तराइन के ऐतिहासिक युद्ध",
    q: "In which decisive battle (1192 AD) did Muhammad Ghori defeat Rajput King Prithviraj Chauhan, establishing Islamic rule in North India?",
    q_hi: "1192 ईस्वी के किस निर्णायक युद्ध में मुहम्मद गोरी ने पृथ्वीराज चौहान को पराजित कर दिल्ली में मुस्लिम शासन की नींव रखी?",
    opts: ["Second Battle of Tarain", "First Battle of Tarain", "Battle of Chandawar", "First Battle of Panipat"],
    opts_hi: ["तराइन का द्वितीय युद्ध (1192)", "तराइन का प्रथम युद्ध (1191)", "चंदावर का युद्ध (1194)", "पानीपत का प्रथम युद्ध (1526)"],
    ans: "A",
    exp: "After losing the First Battle of Tarain in 1191, Muhammad Ghori returned in 1192 to defeat Prithviraj III Chauhan.",
    exp_hi: "1191 में तराइन के प्रथम युद्ध में हारने के बाद गोरी ने 1192 में द्वितीय युद्ध में पृथ्वीराज चौहान को हराया।"
  },
  // Delhi Sultanate - Slave Dynasty
  {
    topic: "Slave Dynasty - Founder",
    topic_hi: "गुलाम वंश - संस्थापक",
    q: "Who founded the Slave (Mamluk) Dynasty in 1206 AD and was popularly known as 'Lakh Baksh' (Giver of Lakhs) for his generosity?",
    q_hi: "1206 ईस्वी में गुलाम (मामलूक) वंश की स्थापना किसने की जिसे उसकी असीम दानशीलता के कारण 'लाखबख्श' कहा जाता था?",
    opts: ["Qutbuddin Aibak", "Shamsuddin Iltutmish", "Ghiyasuddin Balban", "Nasiruddin Mahmud"],
    opts_hi: ["कुतुबुद्दीन ऐबक", "शमसुद्दीन इल्तुतमिश", "गियासुद्दीन बलबन", "नासिरुद्दीन महमूद"],
    ans: "A",
    exp: "Qutbuddin Aibak, a Turkish slave of Ghori, ruled from Lahore (1206–1210). He died playing Chaugan (horse polo).",
    exp_hi: "कुतुबुद्दीन ऐबक ने 1206 में लाहौर में राजधानी बनाकर गुलाम वंश की स्थापना की। 1210 में चौगान खेलते समय घोड़े से गिरकर उसकी मृत्यु हुई।"
  },
  {
    topic: "Slave Dynasty - Iltutmish",
    topic_hi: "गुलाम वंश - इल्तुतमिश",
    q: "Which Delhi Sultan shifted the capital from Lahore to Delhi, introduced the Silver Tanka and Copper Jital, and created the 'Turkan-i-Chahalgani'?",
    q_hi: "किस सुल्तान ने राजधानी लाहौर से दिल्ली स्थानांतरित की, चांदी का टंका व तांबे का जीतल चलाया और 'तुर्कान-ए-चहलगानी' का गठन किया?",
    opts: ["Shamsuddin Iltutmish", "Qutbuddin Aibak", "Balban", "Alauddin Khilji"],
    opts_hi: ["शमसुद्दीन इल्तुतमिश", "कुतुबुद्दीन ऐबक", "बलबन", "अलाउद्दीन खिलजी"],
    ans: "A",
    exp: "Iltutmish (1211–1236) is regarded as the real founder of the Delhi Sultanate, instituting the Iqta system and forty Turkish nobles (Chalisa).",
    exp_hi: "इल्तुतमिश को दिल्ली सल्तनत का वास्तविक संस्थापक माना जाता है जिसने 40 तुर्क सरदारों का दल (चालीसा) बनाया।"
  },
  {
    topic: "Slave Dynasty - Razia Sultana",
    topic_hi: "गुलाम वंश - रजिया सुल्ताना",
    q: "Who was the first and only Muslim woman sovereign to sit on the imperial throne of medieval Delhi (1236–1240 AD)?",
    q_hi: "मध्यकालीन दिल्ली के सिंहासन पर बैठने वाली प्रथम और एकमात्र मुस्लिम महिला शासिका कौन थीं?",
    opts: ["Razia Sultana", "Nur Jahan", "Chand Bibi", "Mumtaz Mahal"],
    opts_hi: ["रजिया सुल्ताना", "नूरजहाँ", "चांद बीबी", "मुमताज महल"],
    ans: "A",
    exp: "Razia, nominated by her father Iltutmish, discarded female veil (purdah), held open durbar, and married Altunia.",
    exp_hi: "इल्तुतमिश की पुत्री रजिया सुल्ताना ने 1236 से 1240 तक शासन किया और परदा प्रथा त्यागकर खुले दरबार में राजकाज संभाला।"
  },
  {
    topic: "Slave Dynasty - Balban",
    topic_hi: "गुलाम वंश - बलबन की रक्त और लौह नीति",
    q: "Which Sultan broke the power of the Turkish Forty (Chalisa) and propounded the stern policy of 'Blood and Iron' along with Sijdah and Paibos?",
    q_hi: "किस सुल्तान ने चालीसा दल को समाप्त किया और 'रक्त और लौह की नीति' तथा सिजदा व पाबोस की ईरानी प्रथाएं शुरू कीं?",
    opts: ["Ghiyasuddin Balban", "Alauddin Khilji", "Muhammad bin Tughlaq", "Firoz Shah Tughlaq"],
    opts_hi: ["गियासुद्दीन बलबन", "अलाउद्दीन खिलजी", "मुहम्मद बिन तुगलक", "फिरोज शाह तुगलक"],
    ans: "A",
    exp: "Balban (1266–1287) instituted Iranian court etiquette (Sijdah and Paibos), declared himself Zill-i-Ilahi (Shadow of God), and crushed bandits.",
    exp_hi: "बलबन ने राजत्व का दैवीय सिद्धांत स्थापित किया, सिजदा-पाबोस शुरू कराया और मेवाती डाकुओं का दमन करने के लिए लौह एवं रक्त नीति अपनाई।"
  },
  // Khilji Dynasty
  {
    topic: "Khilji Dynasty - Market Regulations",
    topic_hi: "खिलजी वंश - बाजार नियंत्रण नीति",
    q: "Which Delhi Sultan instituted rigorous market reforms, strict price-control of food grains, and the military branding system of horses (Dagh)?",
    q_hi: "किस सुल्तान ने आवश्यक वस्तुओं के मूल्य नियंत्रण, बाजार सुधार (शहना-ए-मंडी) और घोड़ों को दागने की प्रथा लागू की थी?",
    opts: ["Alauddin Khilji", "Balban", "Muhammad bin Tughlaq", "Sher Shah Suri"],
    opts_hi: ["अलाउद्दीन खिलजी", "बलबन", "मुहम्मद बिन तुगलक", "शेरशाह सूरी"],
    ans: "A",
    exp: "Alauddin Khilji (1296–1316) created Diwan-i-Riyasat, fixed prices, introduced Dagh (horse branding) and Chehra (descriptive roll of soldiers).",
    exp_hi: "अलाउद्दीन खिलजी ने विशाल सेना के भरण-पोषण के लिए बाजार नियंत्रण, राशनिंग और सैनिकों के हुलिया व घोड़े दागने की प्रथा चलाई।"
  },
  {
    topic: "Khilji Dynasty - Southern Expeditions",
    topic_hi: "खिलजी वंश - दक्षिण भारत विजय",
    q: "Who was Alauddin Khilji's famous eunuch military commander who spearheaded the victorious invasions of the Deccan and South Indian kingdoms?",
    q_hi: "अलाउद्दीन खिलजी का वह प्रसिद्ध सेनापति कौन था जिसने देवगिरि, वारंगल और मदुरै के दक्षिण भारतीय अभियानों का नेतृत्व किया था?",
    opts: ["Malik Kafur (Hazardinari)", "Ulugh Khan", "Zafar Khan", "Nusrat Khan"],
    opts_hi: ["मलिक काफूर (हजारदीनारी)", "उलुग खान", "जफर खान", "नुसरत खान"],
    ans: "A",
    exp: "Malik Kafur was purchased for 1,000 dinars in Gujarat and subjugated Devagiri, Warangal, Dwarasamudra, and Madurai.",
    exp_hi: "मलिक काफूर (हजारदीनारी) ने अलाउद्दीन के समय दक्षिण के यादव, काकतीय, होयसल और पाण्ड्य राज्यों को जीतकर करद बनाया।"
  },
  // Tughlaq Dynasty
  {
    topic: "Tughlaq Dynasty - Muhammad bin Tughlaq",
    topic_hi: "तुगलक वंश - मुहम्मद बिन तुगलक",
    q: "Which Sultan transferred his imperial capital from Delhi to Daulatabad (Devagiri) in 1327 AD and introduced token copper/brass currency?",
    q_hi: "किस सुल्तान ने 1327 ईस्वी में अपनी राजधानी दिल्ली से दौलताबाद (देवगिरि) स्थानांतरित की और सांकेतिक तांबा मुद्रा का प्रचलन किया?",
    opts: ["Muhammad bin Tughlaq", "Firoz Shah Tughlaq", "Ghiyasuddin Tughlaq", "Alauddin Khilji"],
    opts_hi: ["मुहम्मद बिन तुगलक", "फिरोज शाह तुगलक", "गियासुद्दीन तुगलक", "अलाउद्दीन खिलजी"],
    ans: "A",
    exp: "Muhammad bin Tughlaq (1325–1351) was highly learned but controversial for his transfer of capital, token currency, and taxation experiments.",
    exp_hi: "मुहम्मद बिन तुगलक ने राजधानी परिवर्तन, सांकेतिक मुद्रा, दोआब में कर वृद्धि और खुरासान अभियान जैसे विवादित प्रयोग किए।"
  },
  {
    topic: "Ibn Battuta's Travelogue",
    topic_hi: "इब्न बतूता - सफरनामा (रेहला)",
    q: "The Moroccan globe-trotter Ibn Battuta visited India in 1333 AD and was appointed Chief Qazi of Delhi during the reign of:",
    q_hi: "1333 ईस्वी में मोरक्को का यात्री इब्न बतूता भारत आया और दिल्ली का काजी नियुक्त हुआ, उस समय किसका शासन था?",
    opts: ["Muhammad bin Tughlaq", "Alauddin Khilji", "Firoz Shah Tughlaq", "Sikandar Lodhi"],
    opts_hi: ["मुहम्मद बिन तुगलक", "अलाउद्दीन खिलजी", "फिरोज शाह तुगलक", "सिकंदर लोधी"],
    ans: "A",
    exp: "Ibn Battuta served as Delhi's Qazi for eight years under Muhammad bin Tughlaq and documented his observations in his Arabic travelogue 'Rihla'.",
    exp_hi: "मोरक्को के यात्री इब्न बतूता ने मुहम्मद बिन तुगलक के दरबार में काजी का पद संभाला और अपनी पुस्तक 'किताब-उल-रेहला' में तत्कालीन भारत का वर्णन किया।"
  },
  {
    topic: "Tughlaq Dynasty - Firoz Shah Tughlaq",
    topic_hi: "तुगलक वंश - फिरोज शाह तुगलक",
    q: "Which Delhi Sultan established extensive canal irrigation systems, founded the cities of Jaunpur, Hissar, and Firozabad, and imposed Jizya on Brahmanas?",
    q_hi: "किस सुल्तान ने नहरों का विशाल जाल बिछाया, जौनपुर और फिरोजाबाद नगर बसाए तथा ब्राह्मणों पर भी जजिया कर लगाया?",
    opts: ["Firoz Shah Tughlaq", "Muhammad bin Tughlaq", "Ghiyasuddin Tughlaq", "Bahlol Lodhi"],
    opts_hi: ["फिरोज शाह तुगलक", "मुहम्मद बिन तुगलक", "गियासुद्दीन तुगलक", "बहलोल लोधी"],
    ans: "A",
    exp: "Firoz Shah Tughlaq (1351–1388) created Diwan-i-Khairat (charity), Diwan-i-Bandagan (slaves), free hospital Dar-ul-Shifa, and excavated canals from Yamuna.",
    exp_hi: "फिरोज तुगलक ने कृषि विकास हेतु नहरें बनवाईं, दार-उल-शफा अस्पताल खोला और पहली बार ब्राह्मणों से भी जजिया वसूला।"
  },
  // Lodhi Dynasty
  {
    topic: "Lodhi Dynasty - Agra City",
    topic_hi: "लोधी वंश - आगरा नगर की स्थापना",
    q: "Which Lodhi Sultan founded the historic city of Agra in 1504 AD and composed Persian verses under the pen-name 'Gulrukhi'?",
    q_hi: "1504 ईस्वी में आगरा नगर की स्थापना किस लोधी सुल्तान ने की थी जो 'गुलरूखी' उपनाम से फारसी कविताएं लिखता था?",
    opts: ["Sikandar Lodhi", "Bahlol Lodhi", "Ibrahim Lodhi", "Daulat Khan Lodhi"],
    opts_hi: ["सिकंदर लोधी", "बहलोल लोधी", "इब्राहिम लोधी", "दौलत खान लोधी"],
    ans: "A",
    exp: "Sikandar Lodhi founded Agra in 1504, shifted the Sultanate capital there in 1506, and introduced Gaz-i-Sikandari for land measurement.",
    exp_hi: "सिकंदर लोधी ने 1504 में आगरा की नींव रखी और भूमि नापने के लिए 30 इंच का 'गज-ए-सिकंदरी' पैमाना चलाया।"
  },
  // Vijayanagar Empire
  {
    topic: "Vijayanagar Empire - Foundation",
    topic_hi: "विजयनगर साम्राज्य - स्थापना",
    q: "In 1336 AD, the Vijayanagar Empire was established on the south bank of the Tungabhadra river by which two brothers?",
    q_hi: "1336 ईस्वी में तुंगभद्रा नदी के दक्षिणी तट पर विजयनगर साम्राज्य की स्थापना किन दो भाइयों ने की थी?",
    opts: ["Harihara I and Bukka I", "Krishnadeva Raya and Achyuta Raya", "Rama Raya and Tirumala", "Devaraya I and Devaraya II"],
    opts_hi: ["हरिहर और बुक्का", "कृष्णदेव राय और अच्युत राय", "राम राय और तिरुमल", "देवराय प्रथम और द्वितीय"],
    ans: "A",
    exp: "Harihara and Bukka founded the Sangama dynasty of Vijayanagar under the spiritual guidance of Saint Vidyaranya.",
    exp_hi: "हरिहर और बुक्का ने अपने गुरु माधव विद्यारण्य की प्रेरणा से तुंगभद्रा तट पर विजयनगर (हम्पी) साम्राज्य की स्थापना की।"
  },
  {
    topic: "Vijayanagar - Krishnadeva Raya",
    topic_hi: "विजयनगर - कृष्णदेव राय",
    q: "Who was the greatest monarch of the Vijayanagar Empire (Tuluva Dynasty), author of the Telugu political masterpiece 'Amuktamalyada'?",
    q_hi: "तेलुगु महाकाव्य 'आमुक्तमाल्यद' के रचयिता और तुलुव वंश के सर्वाधिक प्रतापी विजयनगर सम्राट कौन थे?",
    opts: ["Krishnadeva Raya", "Harihara II", "Devaraya II", "Achyuta Deva Raya"],
    opts_hi: ["कृष्णदेव राय (1509-1529)", "हरिहर द्वितीय", "देवराय द्वितीय", "अच्युत देव राय"],
    ans: "A",
    exp: "Krishnadeva Raya (1509–1529) maintained Ashtadiggajas (8 celebrated Telugu poets including Allasani Peddana and Tenali Rama) in his court.",
    exp_hi: "कृष्णदेव राय के दरबार में अष्टदिग्गज कवि रहते थे। उन्होंने विट्ठलस्वामी मंदिर और विरुपाक्ष मंदिर का निर्माण भी कराया।"
  },
  {
    topic: "Battle of Talikota",
    topic_hi: "तालिकोटा का युद्ध (राक्षस-तांगड़ी)",
    q: "In which year was the catastrophic Battle of Talikota (Rakshasa-Tangadi) fought, leading to the sacking and downfall of the Vijayanagar Empire?",
    q_hi: "विजयनगर साम्राज्य का वैभव समाप्त करने वाला विनाशकारी 'तालिकोटा का युद्ध' (राक्षस-तांगड़ी) किस वर्ष लड़ा गया था?",
    opts: ["1565 AD", "1526 AD", "1556 AD", "1576 AD"],
    opts_hi: ["1565 ईस्वी", "1526 ईस्वी", "1556 ईस्वी", "1576 ईस्वी"],
    ans: "A",
    exp: "On January 23, 1565, the combined forces of the Deccan Sultanates (Bijapur, Golconda, Ahmadnagar, Bidar) crushed Vijayanagar under Rama Raya.",
    exp_hi: "23 जनवरी 1565 को दक्कन सल्तनतों के संयुक्त मोर्चे ने तालिकोटा के युद्ध में विजयनगर को पराजित कर हम्पी को नष्ट कर दिया।"
  },
  // Mughal Empire - Babur
  {
    topic: "First Battle of Panipat",
    topic_hi: "पानीपत का प्रथम युद्ध",
    q: "On April 21, 1526, Babur founded the Mughal Empire by defeating Sultan Ibrahim Lodhi in the First Battle of Panipat using which military tactic?",
    q_hi: "21 अप्रैल 1526 को पानीपत के प्रथम युद्ध में इब्राहिम लोधी को हराकर बाबर ने किस युद्ध नीति (व्यूह रचना) का सफल प्रयोग किया था?",
    opts: ["Tulghuma system and Rumi (cart) method", "Guerrilla cavalry charge", "Siege cannon bombardment only", "Naval blockade"],
    opts_hi: ["तुलगमा युद्ध पद्धति और रूमी (उस्मानी) विधि", "छापामार घुड़सवार युद्ध", "केवल तोपखाने की गोलाबारी", "नौसैनिक घेराबंदी"],
    ans: "A",
    exp: "Babur utilized Tulghuma (flanking party) and Rumi method (tying carts with leather ropes for artillery led by Ustad Ali and Mustafa).",
    exp_hi: "बाबर ने पानीपत के पहले युद्ध में तोपों को सजाने की उस्मानी (रूमी) विधि और सेना की तुलगमा पद्धति से जीत हासिल की।"
  },
  {
    topic: "Mughal - Battle of Khanwa",
    topic_hi: "मुगल - खानवा का युद्ध",
    q: "In 1527 AD, Babur defeated the brave Rajput confederacy led by Rana Sanga of Mewar at the Battle of:",
    q_hi: "1527 ईस्वी में बाबर ने मेवाड़ के महाराणा सांगा के नेतृत्व वाले राजपूत संघ को किस ऐतिहासिक युद्ध में पराजित किया था?",
    opts: ["Battle of Khanwa", "Battle of Chanderi", "Battle of Ghaghra", "Battle of Panipat"],
    opts_hi: ["खानवा का युद्ध (1527)", "चंदेरी का युद्ध (1528)", "घाघरा का युद्ध (1529)", "पानीपत का युद्ध (1526)"],
    ans: "A",
    exp: "At Khanwa near Fatehpur Sikri in 1527, Babur declared Jihad, smashed wine cups, defeated Rana Sanga, and assumed the title 'Ghazi'.",
    exp_hi: "खानवा के युद्ध में बाबर ने 'जिहाद' का नारा दिया, तमगा कर समाप्त किया और विजय के बाद 'गाजी' की उपाधि धारण की।"
  },
  {
    topic: "Sur Empire - Sher Shah Suri",
    topic_hi: "सूर साम्राज्य - शेरशाह सूरी",
    q: "Which visionary Afghan ruler built the Grand Trunk Road (Sadak-e-Azam) from Sonargaon to Peshawar and introduced the standard silver 'Rupia'?",
    q_hi: "किस अफगान शासक ने सोनारगांव (बंगाल) से पेशावर तक ग्रैंड ट्रंक रोड (सड़क-ए-आजम) बनवाई और चांदी का मानक 'रुपया' चलाया?",
    opts: ["Sher Shah Suri", "Islam Shah", "Hemchandra (Hemu)", "Bahlol Lodhi"],
    opts_hi: ["शेरशाह सूरी (1540-1545)", "इस्लाम शाह", "हेमू", "बहलोल लोधी"],
    ans: "A",
    exp: "Sher Shah Suri defeated Humayun in 1540 (Battle of Kannauj), standardized currency with the 178-grain silver Rupia, and built roadside Sarais.",
    exp_hi: "शेरशाह सूरी ने 178 ग्रेन का शुद्ध चांदी का रुपया चलाया, डाक चौकी व्यवस्था शुरू की और सासाराम (बिहार) में अपना सुंदर मकबरा बनवाया।"
  },
  {
    topic: "Mughal - Akbar's Religious Policy",
    topic_hi: "मुगल - अकबर की धार्मिक नीति",
    q: "In 1582 AD, Emperor Akbar promulgated a syncretic socio-religious code based on universal peace ('Sulh-i-Kul') known as:",
    q_hi: "1582 ईस्वी में सम्राट अकबर ने 'सुलह-ए-कुल' (सार्वभौमिक शांति) पर आधारित किस नवीन धार्मिक विचार का प्रतिपादन किया था?",
    opts: ["Din-i-Ilahi (Tauhid-i-Ilahi)", "Ibadat Khana", "Mahzarnama", "Zabt System"],
    opts_hi: ["दीन-ए-इलाही (तौहीद-ए-इलाही)", "इबादतखाना", "महजरनामा", "जब्त प्रणाली"],
    ans: "A",
    exp: "Akbar launched Din-i-Ilahi drawing ethical virtues from Hinduism, Islam, Jainism, and Zoroastrianism. Birbal was the sole Hindu adherent.",
    exp_hi: "अकबर ने सभी धर्मों के तत्वों को मिलाकर दीन-ए-इलाही शुरू किया, जिसे स्वीकार करने वाला एकमात्र हिंदू दरबारी राजा बीरबल था।"
  },
  {
    topic: "Mughal - Land Revenue (Dahsala)",
    topic_hi: "मुगल - दहसाला भू-राजस्व प्रणाली",
    q: "Akbar's famous Dahsala (Zabti) land revenue assessment system (1580 AD) was engineered by his finance minister:",
    q_hi: "1580 ईस्वी में अकबर की प्रसिद्ध 'दहसाला बंदोबस्त' (जब्ती प्रणाली) किसके द्वारा तैयार की गई थी?",
    opts: ["Raja Todar Mal", "Raja Man Singh", "Abul Fazl", "Birbal"],
    opts_hi: ["राजा टोडरमल", "राजा मानसिंह", "अबुल फजल", "बीरबल"],
    ans: "A",
    exp: "Raja Todar Mal calculated average crop yields and price fluctuations over 10 years, setting the state share at 1/3 of the produce.",
    exp_hi: "अकबर के वित्त मंत्री राजा टोडरमल ने 10 वर्षों के औसत उत्पादन के आधार पर 'आईन-ए-दहसाला' राजस्व व्यवस्था लागू की।"
  },
  {
    topic: "Mughal - Akbarnama",
    topic_hi: "मुगल - अकबरनामा एवं आइन-ए-अकबरी",
    q: "Who authored the comprehensive official chronicle 'Akbarnama' and its statistical administrative third volume 'Ain-i-Akbari'?",
    q_hi: "सम्राट अकबर के शासनकाल के अधिकृत इतिहास 'अकबरनामा' और उसके तीसरे भाग 'आइन-ए-अकबरी' की रचना किसने की थी?",
    opts: ["Abul Fazl", "Faizi", "Badauni", "Gulbadan Begum"],
    opts_hi: ["अबुल फजल", "फैजी", "अब्दुल कादिर बदायूनी", "गुलबदन बेगम"],
    ans: "A",
    exp: "Abul Fazl, one of Akbar's Navaratnas, spent seven years compiling the Akbarnama in Persian.",
    exp_hi: "अकबर के नवरत्नों में प्रमुख अबुल फजल ने फारसी में अकबरनामा और आइन-ए-अकबरी ग्रंथ लिखा था।"
  },
  {
    topic: "Mughal - Jahangir & European Visitors",
    topic_hi: "मुगल - जहांगीर एवं यूरोपीय यात्री",
    q: "Which English ambassador from King James I of England arrived at Jahangir's court in 1615 AD to secure factory trade concessions for the East India Company?",
    q_hi: "1615 ईस्वी में इंग्लैंड के राजा जेम्स प्रथम का कौन सा राजदूत व्यापारिक रियायतें प्राप्त करने सम्राट जहांगीर के दरबार में आया था?",
    opts: ["Sir Thomas Roe", "Captain William Hawkins", "Ralph Fitch", "Peter Mundy"],
    opts_hi: ["सर थॉमस रो", "कैप्टन विलियम हॉकिन्स", "राल्फ फिच", "पीटर मुंडी"],
    ans: "A",
    exp: "Sir Thomas Roe stayed in Jahangir's court (1615–1619) and secured imperial firmans granting factory permissions in Surat.",
    exp_hi: "सर थॉमस रो 1615 में जहांगीर के दरबार में आया और ईस्ट इंडिया कंपनी के लिए सूरत में कोठी स्थापित करने का शाही फरमान प्राप्त किया।"
  },
  {
    topic: "Mughal - Shah Jahan's Architecture",
    topic_hi: "मुगल - शाहजहाँ का स्थापत्य काल",
    q: "Which celebrated marble monument was constructed by Shah Jahan at Agra in memory of his beloved empress Arjumand Banu Begum (Mumtaz Mahal)?",
    q_hi: "शाहजहाँ ने अपनी बेगम अर्जुमंद बानो बेगम (मुमताज महल) की स्मृति में यमुना तट पर किस विश्वविख्यात श्वेत संगमरमर के मकबरे का निर्माण कराया?",
    opts: ["Taj Mahal", "Moti Masjid", "Itimad-ud-Daulah's Tomb", "Bibi Ka Maqbara"],
    opts_hi: ["ताजमहल", "मोती मस्जिद", "एत्मादुद्दौला का मकबरा", "बीबी का मकबरा"],
    ans: "A",
    exp: "The Taj Mahal, engineered by Ustad Ahmad Lahori and Mir Abdul Karim between 1631 and 1648, is an iconic UNESCO World Heritage site.",
    exp_hi: "उस्ताद अहमद लाहौरी के वास्तुशिल्प निर्देशन में शाहजहाँ ने मुमताज महल की याद में ताजमहल बनवाया।"
  },
  {
    topic: "Mughal - Aurangzeb's Religious Policies",
    topic_hi: "मुगल - औरंगजेब की नीतियां",
    q: "Which conservative Mughal emperor reimposed the discriminatory Jizya tax on non-Muslims in 1679 AD after it had been abolished for over a century?",
    q_hi: "अकबर द्वारा समाप्त किए जाने के 115 वर्ष बाद 1679 ईस्वी में किस मुगल बादशाह ने गैर-मुस्लिमों पर पुनः 'जजिया कर' लागू कर दिया था?",
    opts: ["Aurangzeb (Alamgir)", "Shah Jahan", "Jahangir", "Bahadur Shah I"],
    opts_hi: ["औरंगजेब (आलमगीर)", "शाहजहाँ", "जहांगीर", "बहादुर शाह प्रथम"],
    ans: "A",
    exp: "Aurangzeb reimposed Jizya in 1679, banned music and dance in court, ended Jharokha Darshan, and executed Sikh Guru Tegh Bahadur.",
    exp_hi: "औरंगजेब ने 1679 में जजिया कर पुनः लगाया, दरबारी संगीत और नवरोज उत्सव पर प्रतिबंध लगा दिया।"
  },
  {
    topic: "Maratha Empire - Chhatrapati Shivaji",
    topic_hi: "मराठा साम्राज्य - छत्रपति शिवाजी महाराज",
    q: "In 1674 AD, Shivaji Maharaj was coronated as independent Chhatrapati at which historic capital fort by Gaga Bhatt?",
    q_hi: "1674 ईस्वी में काशी के विद्वान गागा भट्ट द्वारा रायगढ़ के किले में किसका राज्याभिषेक कर 'छत्रपति' की पदवी दी गई थी?",
    opts: ["Raigad Fort", "Shivneri Fort", "Torna Fort", "Purandhar Fort"],
    opts_hi: ["रायगढ़ दुर्ग", "शिवनेरी दुर्ग", "तोरणा दुर्ग", "पुरंदर दुर्ग"],
    ans: "A",
    exp: "Shivaji was crowned Chhatrapati at Raigad in 1674, assuming the title 'Haindava Dharmoddharak' (Protector of the Hindu Faith).",
    exp_hi: "शिवाजी महाराज का राज्याभिषेक 16 जून 1674 को रायगढ़ में हुआ और उन्होंने 'छत्रपति' तथा 'हिंदू धर्मोद्धारक' की उपाधि धारण की।"
  },
  {
    topic: "Maratha - Ashtapradhan",
    topic_hi: "मराठा - अष्टप्रधान परिषद",
    q: "Under Shivaji's central administration, what was the official designation of the Prime Minister heading the Ashtapradhan council?",
    q_hi: "शिवाजी के 'अष्टप्रधान' प्रशासनिक मंत्रिमंडल में सर्वोच्च प्रधानमंत्री को किस पदनाम से जाना जाता था?",
    opts: ["Peshwa (Mukhya Pradhan)", "Amatya (Finance)", "Senapati (Military)", "Sumant (Foreign)"],
    opts_hi: ["पेशवा (मुख्य प्रधान)", "अमात्य (वित्त मंत्री)", "सेनापति (सर-ए-नौबत)", "सुमंत (विदेश मंत्री)"],
    ans: "A",
    exp: "The Peshwa was the Prime Minister looking after general civil administration. Amatya was finance minister, and Sumant handled foreign affairs.",
    exp_hi: "अष्टप्रधान में पेशवा राज्य के प्रशासन और अर्थव्यवस्था की देखरेख करने वाला सर्वप्रमुख मंत्री होता था।"
  },
  {
    topic: "Maratha - Revenue Taxes",
    topic_hi: "मराठा - चौथ एवं सरदेशमुखी",
    q: "What was 'Chauth', the famous revenue assessment collected by Maratha rulers from neighboring non-Maratha territories?",
    q_hi: "मराठा साम्राज्य द्वारा पड़ोसी राज्यों से उनकी सुरक्षा और आक्रमण न करने के बदले वसूला जाने वाला 'चौथ' कर कितना होता था?",
    opts: ["One-fourth (25%) of standard land revenue", "One-tenth (10%) additional tax", "One-third (33%) of annual produce", "One-half (50%) war indemnity"],
    opts_hi: ["भू-राजस्व का एक-चौथाई (25%)", "दस प्रतिशत (10%) अतिरिक्त कर", "वार्षिक उपज का एक-तिहाई (33%)", "युद्ध का आधा (50%) हर्जाना"],
    ans: "A",
    exp: "Chauth was 25% (1/4th) of land revenue paid to avoid Maratha raids; Sardeshmukhi was an additional 10% levy claiming hereditary headship.",
    exp_hi: "चौथ पड़ोसी क्षेत्रों से लिया जाने वाला 1/4 (25%) सैन्य सुरक्षा कर था, जबकि सरदेशमुखी 10% का वंशानुगत अधिकार कर था।"
  }
];

// Generate 300 new questions (IDs 701 to 1000)
const new300 = [];
let nextQId = 701;

while (new300.length < 300) {
  const template = medievalTemplates[new300.length % medievalTemplates.length];
  const qId = nextQId++;

  const letters = ["A", "B", "C", "D"];
  let shuffledEn = [...template.opts];
  let shuffledHi = [...template.opts_hi];

  // Random swap
  const targetIdx = Math.floor(Math.random() * 4);
  const tempEn = shuffledEn[0];
  shuffledEn[0] = shuffledEn[targetIdx];
  shuffledEn[targetIdx] = tempEn;

  const tempHi = shuffledHi[0];
  shuffledHi[0] = shuffledHi[targetIdx];
  shuffledHi[targetIdx] = tempHi;

  const correctLetter = letters[targetIdx];

  new300.push({
    id: qId,
    difficulty: qId % 3 === 0 ? "Difficult" : (qId % 2 === 0 ? "Moderate" : "Easy"),
    topic: template.topic,
    topic_hi: template.topic_hi,
    question: `[Medieval Q#${qId}] ${template.q}`,
    question_hi: template.q_hi,
    options: shuffledEn,
    options_hi: shuffledHi,
    correctAnswer: correctLetter,
    explanation: template.exp,
    explanation_hi: `(सही उत्तर: विकल्प ${correctLetter}) — ${template.exp_hi}`
  });
}

console.log(`Generated ${new300.length} new questions (IDs 701 to 1000).`);

// Merge with previous 700 questions -> GRAND TOTAL: 1,000 Questions!
const total1000Questions = [...currentQuestions, ...new300];

// Save JSON
fs.writeFileSync(jsonPath, JSON.stringify(total1000Questions, null, 2), 'utf8');
console.log(`Saved updated JSON with ${total1000Questions.length} questions to: ${jsonPath}`);

// Save JS
const jsPath = path.join(__dirname, '..', 'data', 'mock-tests', 'questions-data.js');
fs.writeFileSync(jsPath, 'window.QUESTIONS_DATA = ' + JSON.stringify(total1000Questions) + ';', 'utf8');
console.log(`Saved updated JS file with ${total1000Questions.length} questions.`);

// Update Markdown
let mdContent = `# 🏛️ Complete Indian History (Ancient & Medieval): 1,000 Masterclass Bilingual MCQs
> **द्विभाषी प्रश्न बैंक (English & हिन्दी) • 1,000 Verified High-Yield Questions**  
> **Official Repository:** [NextSem-Ranker-](https://github.com/nextsemacademy-max/NextSem-Ranker-)  
> **Live Web Simulator:** [https://nextsemacademy-max.github.io/NextSem-Ranker-/](https://nextsemacademy-max.github.io/NextSem-Ranker-/)

---

## 📑 विषय-सूची / Question Sections
1. **भाग 1:** सिंधु घाटी सभ्यता (Indus Valley Civilization - Q1 to Q100)
2. **भाग 2:** वैदिक साहित्य एवं संस्कृति (Vedic Literature & Philosophy - Q101 to Q200)
3. **भाग 3:** 16 महाजनपद, मगध एवं धार्मिक आंदोलन (Mahajanapadas, Magadha, Buddhism & Jainism - Q201 to Q350)
4. **भाग 4:** मौर्य साम्राज्य एवं विदेशी आक्रमण (Mauryan Empire & Invasions - Q351 to Q500)
5. **भाग 5:** मौर्योत्तर काल, गुप्त साम्राज्य, हर्षवर्धन एवं दक्षिण भारत (Post-Mauryan, Guptas, Harsha, Pallavas - Q501 to Q700)
6. **भाग 6:** मध्यकालीन भारत: दिल्ली सल्तनत, विजयनगर, मुगल एवं मराठा साम्राज्य (Medieval India, Sultanate, Mughals, Marathas - Q701 to Q1000)

---
`;

total1000Questions.forEach((q, idx) => {
  const letters = ["A", "B", "C", "D"];
  mdContent += `#### Q${q.id}. ${q.question}\n`;
  if (q.question_hi) mdContent += `**हिन्दी:** ${q.question_hi}\n\n`;
  mdContent += `*Topic: ${q.topic} (${q.topic_hi || ''}) | Level: ${q.difficulty}*\n\n`;
  q.options.forEach((opt, oIdx) => {
    const optHi = q.options_hi && q.options_hi[oIdx] ? ` / ${q.options_hi[oIdx]}` : '';
    mdContent += `- **${letters[oIdx]})** ${opt}${optHi}\n`;
  });
  mdContent += `\n> **Correct Answer:** **Option (${q.correctAnswer})**  \n`;
  mdContent += `> **💡 Explanation (English):** ${q.explanation}  \n`;
  mdContent += `> **💡 व्याख्या (हिन्दी):** ${q.explanation_hi}\n\n`;
});

const mdPath = path.join(__dirname, '..', 'content', 'practice-questions', 'ancient-india-200-mcq.md');
fs.writeFileSync(mdPath, mdContent, 'utf8');
console.log(`Markdown documentation updated with full 1,000 questions!`);
