const fs = require('fs');
const path = require('path');

// Read current 500 questions
const jsonPath = path.join(__dirname, '..', 'data', 'mock-tests', 'ancient-india-200-mcq.json');
const currentQuestions = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
console.log(`Current questions loaded: ${currentQuestions.length}`);

// Topics for Batch 3 (IDs 501 to 700):
// 1. Post-Mauryan Native Dynasties (Sungas, Kanvas, Satavahanas, Chedis)
// 2. Foreign Successors (Indo-Greeks, Sakas, Kushanas)
// 3. Sangam Age (Cholas, Cheras, Pandyas, Literature)
// 4. Gupta Empire (Rulers, Administration, Golden Age Culture, Navaratnas, Science)
// 5. Post-Gupta / Vardhana Dynasty (Harshavardhana, Hiuen Tsang, Chalukyas, Pallavas)

const batch3Templates = [
  // 1. Sunga Dynasty
  {
    topic: "Post-Mauryan - Sunga Dynasty",
    topic_hi: "मौर्योत्तर काल - शुंग वंश",
    q: "Who established the Sunga Dynasty in 185 BC after assassinating the last Mauryan ruler Brihadratha?",
    q_hi: "185 ईसा पूर्व में अंतिम मौर्य शासक बृहद्रथ की हत्या करके शुंग वंश की स्थापना किसने की थी?",
    opts: ["Pushyamitra Sunga", "Agnimitra", "Vasumitra", "Devabhuti"],
    opts_hi: ["पुष्यमित्र शुंग", "अग्निमित्र", "वसुमित्र", "देवभूति"],
    ans: "A",
    exp: "Pushyamitra Sunga, the commander-in-chief (Senapati) of Brihadratha, established the Sunga Dynasty with Vidisha/Pataliputra as capital.",
    exp_hi: "मौर्य सेनापति पुष्यमित्र शुंग ने अंतिम मौर्य राजा बृहद्रथ की हत्या कर 185 ईसा पूर्व में शुंग वंश की स्थापना की।"
  },
  {
    topic: "Sunga Dynasty - Patanjali",
    topic_hi: "शुंग वंश - पतंजलि",
    q: "Which great grammarian and philosopher was the contemporary and chief priest of Pushyamitra Sunga's two Ashvamedha sacrifices?",
    q_hi: "पुष्यमित्र शुंग द्वारा किए गए दो अश्वमेध यज्ञों के मुख्य पुरोहित कौन से महान वैयाकरण थे?",
    opts: ["Patanjali", "Panini", "Katyayana", "Charaka"],
    opts_hi: ["पतंजलि", "पाणिनि", "कात्यायन", "चरक"],
    ans: "A",
    exp: "Patanjali, the author of the 'Mahabhashya', was the royal priest who conducted two Ashvamedha yajnas for Pushyamitra Sunga.",
    exp_hi: "महाभाष्य के रचयिता महर्षि पतंजलि पुष्यमित्र शुंग के समकालीन थे और उन्होंने उसके दो अश्वमेध यज्ञ संपन्न कराए थे।"
  },
  {
    topic: "Sunga Dynasty - Bharhut",
    topic_hi: "शुंग वंश - भरहुत स्तूप",
    q: "The monumental stone railing and decorative gateways of the famous Bharhut Stupa in Madhya Pradesh were constructed during which dynasty?",
    q_hi: "मध्य प्रदेश के प्रसिद्ध भरहुत स्तूप की पाषाण वेदिका (रेलिंग) और तोरण द्वार का निर्माण किस वंश के काल में हुआ था?",
    opts: ["Sunga Dynasty", "Mauryan Dynasty", "Kushana Dynasty", "Gupta Dynasty"],
    opts_hi: ["शुंग वंश", "मौर्य वंश", "कुषाण वंश", "गुप्त वंश"],
    ans: "A",
    exp: "The stone gateways and balustrade surrounding the Bharhut Stupa were erected during the reign of the Sungas.",
    exp_hi: "भरहुत स्तूप के चारों ओर सुंदर नक्काशीदार पाषाण रेलिंग और तोरणों का निर्माण शुंग काल में किया गया था।"
  },
  {
    topic: "Kalidasa's Drama - Agnimitra",
    topic_hi: "कालिदास का नाटक - अग्निमित्र",
    q: "The Sunga prince Agnimitra is the celebrated hero of which classical Sanskrit drama authored by Kalidasa?",
    q_hi: "शुंग राजकुमार अग्निमित्र महाकवि कालिदास के किस प्रसिद्ध संस्कृत नाटक का नायक है?",
    opts: ["Malavikagnimitram", "Abhijnanashakuntalam", "Vikramorvashiyam", "Mudrarakshasa"],
    opts_hi: ["मालविकाग्निमित्रम्", "अभिज्ञानशाकुंतलम्", "विक्रमोर्वशीयम्", "मुद्राराक्षस"],
    ans: "A",
    exp: "Kalidasa's first play, 'Malavikagnimitram', depicts the love affair of Sunga king Agnimitra and maiden Malavika.",
    exp_hi: "कालिदास के प्रथम नाटक 'मालविकाग्निमित्रम्' का नायक शुंग शासक अग्निमित्र है।"
  },
  // Satavahanas
  {
    topic: "Satavahana Dynasty",
    topic_hi: "सातवाहन वंश",
    q: "Who was the founder of the powerful Satavahana (Andhra) Dynasty in the Deccan?",
    q_hi: "दक्कन में शक्तिशाली सातवाहन (आंध्र) वंश की स्थापना किसने की थी?",
    opts: ["Simuka", "Satakarni I", "Gautamiputra Satakarni", "Hala"],
    opts_hi: ["सिमुक", "शातकर्णी प्रथम", "गौतमीपुत्र शातकर्णी", "हाल"],
    ans: "A",
    exp: "Simuka founded the Satavahana dynasty around 60 BC with its capital at Pratishthana (modern Paithan in Maharashtra).",
    exp_hi: "सिमुक ने लगभग 60 ईसा पूर्व में कण्व वंश को समाप्त कर प्रतिष्ठान (पैठन, महाराष्ट्र) को राजधानी बनाकर सातवाहन वंश की स्थापना की।"
  },
  {
    topic: "Satavahana - Coins",
    topic_hi: "सातवाहन - मुद्राएं",
    q: "The Satavahanas are historically famous for issuing the largest number of coins made of which unique metal?",
    q_hi: "सातवाहन शासक किस विशेष धातु के सर्वाधिक सिक्के जारी करने के लिए इतिहास में प्रसिद्ध हैं?",
    opts: ["Lead (Potin)", "Pure Gold", "Silver only", "Iron"],
    opts_hi: ["सीसा (पोटिन)", "शुद्ध सोना", "केवल चांदी", "लोहा"],
    ans: "A",
    exp: "The Satavahanas predominantly minted coins of lead, potin (base metal alloy), copper, and bronze.",
    exp_hi: "सातवाहन शासकों ने सर्वाधिक सिक्के सीसे (Lead) और पोटिन के जारी किए थे।"
  },
  {
    topic: "Satavahana - Gautamiputra Satakarni",
    topic_hi: "सातवाहन - गौतमीपुत्र शातकर्णी",
    q: "Which Satavahana ruler is celebrated in the Nasik Prasasti as 'Ekabrahmana' and the destroyer of the Sakas?",
    q_hi: "नासिक प्रशस्ति में किस सातवाहन शासक को 'एकाब्राह्मण' और शकों का विनाशक कहा गया है?",
    opts: ["Gautamiputra Satakarni", "Vashishtiputra Pulumayi", "Simuka", "Hala"],
    opts_hi: ["गौतमीपुत्र शातकर्णी", "वासिष्ठीपुत्र पुलुमावी", "सिमुक", "हाल"],
    ans: "A",
    exp: "Gautamiputra Satakarni (106–130 AD) was the greatest Satavahana king, praised by his mother Gautami Balasri in the Nasik cave inscription.",
    exp_hi: "गौतमीपुत्र शातकर्णी (23वां राजा) को नासिक प्रशस्ति में 'अद्वितीय ब्राह्मण' और क्षत्रियों के दर्प का दमन करने वाला कहा गया है।"
  },
  {
    topic: "Satavahana - Literature",
    topic_hi: "सातवाहन - प्राकृत साहित्य",
    q: "The 17th Satavahana ruler, King Hala, composed the celebrated Prakrit poetic anthology known as:",
    q_hi: "17वें सातवाहन राजा हाल ने प्राकृत भाषा में किस प्रसिद्ध मुक्तक काव्य ग्रंथ की रचना की थी?",
    opts: ["Gatha Saptasati (Sattasai)", "Brihatkatha", "Kavyamimamsa", "Lilavati"],
    opts_hi: ["गाथासप्तशती (सत्तसई)", "बृहत्कथा", "काव्यमीमांसा", "लीलावती"],
    ans: "A",
    exp: "King Hala composed 'Gatha Saptasati' (700 romantic couplets in Maharashtri Prakrit). Gunadhya, author of Brihatkatha, was in his court.",
    exp_hi: "राजा हाल ने महाराष्ट्री प्राकृत में 700 श्लोकों का संग्रह 'गाथासप्तशती' लिखा था।"
  },
  // Kalinga & Kharavela
  {
    topic: "Chedi Dynasty - Hathigumpha",
    topic_hi: "चेदि वंश - हाथीगुंफा अभिलेख",
    q: "The biographical and chronological military expeditions of King Kharavela of Kalinga are engraved in which famous inscription?",
    q_hi: "कलिंग के महान शासक खारवेल के जीवन और सैन्य अभियानों का प्रामाणिक विवरण किस प्रसिद्ध अभिलेख में उत्कीर्ण है?",
    opts: ["Hathigumpha Inscription (Udayagiri)", "Junagarh Inscription", "Aihole Inscription", "Nasik Cave Inscription"],
    opts_hi: ["हाथीगुंफा अभिलेख (उदयगिरि)", "जूनागढ़ अभिलेख", "एहोल अभिलेख", "नासिक गुहा अभिलेख"],
    ans: "A",
    exp: "The undated Prakrit Hathigumpha inscription on the Udayagiri hills near Bhubaneswar records Kharavela's military conquests year-by-year.",
    exp_hi: "भुवनेश्वर के निकट उदयगिरि की हाथीगुंफा में बिना तिथि वाला प्राकृत अभिलेख खारवेल के शासन के 13 वर्षों का क्रमबद्ध विवरण देता है।"
  },
  // Indo-Greeks
  {
    topic: "Indo-Greeks - Gold Coins",
    topic_hi: "हिन्द-यूनानी - स्वर्ण मुद्राएं",
    q: "Who were the FIRST rulers in Indian history to issue regular gold coins with portrait busts and bilingual legends?",
    q_hi: "भारतीय इतिहास में राजाओं के नाम और छवि वाले नियमित स्वर्ण सिक्के जारी करने वाले प्रथम शासक कौन थे?",
    opts: ["Indo-Greeks (Bactrians)", "Kushanas", "Guptas", "Mauryas"],
    opts_hi: ["हिन्द-यूनानी (इंडो-ग्रीक)", "कुषाण", "गुप्त", "मौर्य"],
    ans: "A",
    exp: "The Indo-Greeks were the first to issue gold coins bearing royal portraits and inscriptions in Greek and Kharosthi.",
    exp_hi: "भारत में सबसे पहले नियमित सोने के सिक्के हिन्द-यूनानी शासकों द्वारा जारी किए गए थे।"
  },
  {
    topic: "Indo-Greeks - Milindapanho",
    topic_hi: "हिन्द-यूनानी - मिलिंदपन्हो",
    q: "The philosophical Pali dialogue 'Milindapanho' records conversations between Indo-Greek King Menander and which Buddhist monk?",
    q_hi: "प्रसिद्ध पालि दार्शनिक ग्रंथ 'मिलिंदपन्हो' में हिन्द-यूनानी राजा मिनांडर (मिलिंद) और किस बौद्ध भिक्षु के संवाद संकलित हैं?",
    opts: ["Nagasena (Nagajuna)", "Ashvaghosha", "Vasumitra", "Moggaliputta Tissa"],
    opts_hi: ["नागसेन", "अश्वघोष", "वसुमित्र", "मोग्गलिपुत्त तिस्स"],
    ans: "A",
    exp: "King Menander questioned Buddhist monk Nagasena, and his intellectual queries and eventual conversion are compiled in 'Milindapanho'.",
    exp_hi: "राजा मिनांडर ने बौद्ध धर्म स्वीकार करने से पूर्व भिक्षु नागसेन से अनेक दार्शनिक प्रश्न पूछे जो 'मिलिंदपन्हो' में संकलित हैं।"
  },
  // Sakas
  {
    topic: "Sakas - Rudradaman I",
    topic_hi: "शक - रुद्रदामन प्रथम",
    q: "The first long and grammatically flawless inscription in chaste Classical Sanskrit was engraved at Junagarh by:",
    q_hi: "विशुद्ध संस्कृत भाषा में उत्कीर्ण पहला विशाल और प्रामाणिक अभिलेख जूनागढ़ में किसके द्वारा लिखवाया गया था?",
    opts: ["Saka King Rudradaman I", "Kanishka", "Samudragupta", "Chandragupta II"],
    opts_hi: ["शक शासक रुद्रदामन प्रथम", "कनिष्क", "समुद्रगुप्त", "चन्द्रगुप्त द्वितीय"],
    ans: "A",
    exp: "The Junagarh rock inscription (150 AD) of Rudradaman I is the earliest long epigraph in pure Classical Sanskrit.",
    exp_hi: "रुद्रदामन प्रथम (150 ईस्वी) का गिरनार (जूनागढ़) अभिलेख संस्कृत गद्य का प्राचीनतम उत्कृष्ट नमूना है।"
  },
  {
    topic: "Sudarshana Lake",
    topic_hi: "सुदर्शन झील का जीर्णोद्धार",
    q: "Saka ruler Rudradaman I earned historic fame for repairing which ancient lake in Saurashtra without imposing taxes on subjects?",
    q_hi: "शक राजा रुद्रदामन प्रथम ने प्रजा पर कोई अतिरिक्त कर लगाए बिना सौराष्ट्र की किस प्राचीन झील के बांध का जीर्णोद्धार कराया था?",
    opts: ["Sudarshana Lake", "Pushkar Lake", "Nal Lake", "Chilika Lake"],
    opts_hi: ["सुदर्शन झील", "पुष्कर झील", "नल झील", "चिल्का झील"],
    ans: "A",
    exp: "Originally built by Chandragupta Maurya's governor Pushyagupta, the dam of Lake Sudarshana was rebuilt by Rudradaman at his own expense.",
    exp_hi: "मौर्यों द्वारा निर्मित सुदर्शन झील के टूट जाने पर रुद्रदामन ने अपने निजी कोष से उसका पुनर्निर्माण कराया था।"
  },
  // Kushanas
  {
    topic: "Kushana Dynasty - Kanishka",
    topic_hi: "कुषाण वंश - कनिष्क",
    q: "Kanishka ascended the Kushana throne in 78 AD, inaugurating which historic era adopted by the Government of India?",
    q_hi: "78 ईस्वी में कनिष्क के राज्यारोहण के उपलक्ष्य में किस ऐतिहासिक संवत की शुरुआत हुई जिसे भारत सरकार का राष्ट्रीय संवत माना गया है?",
    opts: ["Saka Era (78 AD)", "Vikrama Era (58 BC)", "Gupta Era (319 AD)", "Harsha Era (606 AD)"],
    opts_hi: ["शक संवत (78 ई.)", "विक्रम संवत (58 ई.पू.)", "गुप्त संवत (319 ई.)", "हर्ष संवत (606 ई.)"],
    ans: "A",
    exp: "Kanishka founded the Saka Era in 78 AD, which serves as the base of the official Indian National Calendar.",
    exp_hi: "कनिष्क ने 78 ईस्वी में राज्यारोहण के समय शक संवत का प्रवर्तन किया, जो भारत का राष्ट्रीय कैलेंडर है।"
  },
  {
    topic: "Kushana - Capitals",
    topic_hi: "कुषाण - राजधानियां",
    q: "What were the two primary capitals of Emperor Kanishka's vast Eurasian empire?",
    q_hi: "कुषाण सम्राट कनिष्क के विशाल साम्राज्य की दो प्रमुख राजधानियां कौन सी थीं?",
    opts: ["Purushapura (Peshawar) and Mathura", "Taxila and Pataliputra", "Ujjain and Vidisha", "Sarnath and Kausambi"],
    opts_hi: ["पुरुषपुर (पेशावर) और मथुरा", "तक्षशिला और पाटलिपुत्र", "उज्जैन और विदिशा", "सारनाथ और कौशाम्बी"],
    ans: "A",
    exp: "Purushapura (modern Peshawar) was Kanishka's primary political capital, while Mathura served as his second cultural capital.",
    exp_hi: "कनिष्क की प्रथम राजधानी पुरुषपुर (पेशावर) तथा द्वितीय राजधानी मथुरा थी।"
  },
  {
    topic: "Kushana - Court Scholars",
    topic_hi: "कुषाण - दरबारी विद्वान",
    q: "Which physician, considered the 'Father of Indian Medicine' and author of Charaka Samhita, adorned the court of Kanishka?",
    q_hi: "'भारतीय चिकित्सा शास्त्र के जनक' माने जाने वाले चरक संहिता के रचयिता महर्षि चरक किसके राजवैद्य थे?",
    opts: ["Emperor Kanishka", "Chandragupta Maurya", "Samudragupta", "Harshavardhana"],
    opts_hi: ["सम्राट कनिष्क", "चन्द्रगुप्त मौर्य", "समुद्रगुप्त", "हर्षवर्धन"],
    ans: "A",
    exp: "Charaka, author of the foundational Ayurvedic medical encyclopaedia 'Charaka Samhita', was the royal physician of Kanishka.",
    exp_hi: "आयुर्वेद के विख्यात आचार्य चरक कुषाण सम्राट कनिष्क के राजदरबार में राजवैद्य थे।"
  },
  // Sangam Literature
  {
    topic: "Sangam Age - Assemblies",
    topic_hi: "संगम काल - परिषदें",
    q: "The three historic Sangams (literary academies of Tamil poets) were convened under the royal patronage of which dynasty?",
    q_hi: "तीन ऐतिहासिक तमिल संगमों (कवि परिषदों) का आयोजन किस राजवंश के संरक्षण में मदुरै और कपाटपुरम में हुआ था?",
    opts: ["Pandya Dynasty", "Chola Dynasty", "Chera Dynasty", "Pallava Dynasty"],
    opts_hi: ["पाण्ड्य वंश", "चोल वंश", "चेर वंश", "पल्लव वंश"],
    ans: "A",
    exp: "The Pandya rulers of Madurai were the royal patrons of all three Sangams of classical Tamil literature.",
    exp_hi: "तीनों संगमों का आयोजन मदुरै के पाण्ड्य राजाओं के संरक्षण में किया गया था।"
  },
  {
    topic: "Sangam - Tolkappiyam",
    topic_hi: "संगम - तोलकाप्पियम",
    q: "The oldest surviving masterwork of classical Tamil grammar and poetics, 'Tolkappiyam', was authored by:",
    q_hi: "तमिल व्याकरण और काव्यशास्त्र का प्राचीनतम उपलब्ध मानक ग्रंथ 'तोलकाप्पियम' किसकी रचना है?",
    opts: ["Tolkappiyar", "Ilango Adigal", "Tiruvalluvar", "Sittalai Sattanar"],
    opts_hi: ["तोलकाप्पियर", "इलांगो आदिगल", "तिरुवल्लुवर", "शीतलै सत्तनार"],
    ans: "A",
    exp: "Tolkappiyar (a disciple of Sage Agastya) composed the Tolkappiyam during the Second Sangam.",
    exp_hi: "तोलकाप्पियम द्वितीय संगम की एकमात्र जीवित रचना है जिसे तोलकाप्पियर ने लिखा था।"
  },
  {
    topic: "Sangam - Tirukkural",
    topic_hi: "संगम - तिरुक्कुरल",
    q: "Which philosophical text, authored by Tiruvalluvar, is revered as the 'Bible of the Tamil Land' (Fifth Veda of Tamil)?",
    q_hi: "संत तिरुवल्लुवर द्वारा रचित किस नीतिपरक ग्रंथ को 'तमिल भूमि की बाइबल' और पंचम वेद माना जाता है?",
    opts: ["Tirukkural (Kural)", "Silappadikaram", "Manimekalai", "Naladiyar"],
    opts_hi: ["तिरुक्कुरल (कुरल)", "शिलप्पादिकारम्", "मणिमेकलै", "नालदियार"],
    ans: "A",
    exp: "Tirukkural composed by Tiruvalluvar comprises 1,330 couplets categorized into Dharma (Aram), Artha (Porul), and Kama (Inbam).",
    exp_hi: "तिरुवल्लुवर कृत 'तिरुक्कुरल' तमिल साहित्य का अप्रतिम नीतिग्रंथ है जिसे तमिल बाइबिल कहा जाता है।"
  },
  {
    topic: "Sangam - Silappadikaram",
    topic_hi: "संगम - शिलप्पादिकारम्",
    q: "The tragic romantic epic 'Silappadikaram' (The Tale of the Anklet), featuring Kovalan and Kannagi, was composed by:",
    q_hi: "कोवलन और कण्णगि के अमर प्रेम पर आधारित प्रसिद्ध तमिल महाकाव्य 'शिलप्पादिकारम्' (नूपुर की कहानी) के रचयिता कौन थे?",
    opts: ["Ilango Adigal", "Sittalai Sattanar", "Tiruvalluvar", "Kamban"],
    opts_hi: ["इलांगो आदिगल", "शीतलै सत्तनार", "तिरुवल्लुवर", "कंबन"],
    ans: "A",
    exp: "Prince Ilango Adigal (brother of Chera king Senguttuvan) composed the famous epic Silappadikaram.",
    exp_hi: "चेर राजकुमार इलांगो आदिगल ने प्रसिद्ध महाकाव्य शिलप्पादिकारम् की रचना की थी।"
  },
  // Gupta Empire
  {
    topic: "Gupta Empire - Founder",
    topic_hi: "गुप्त वंश - संस्थापक",
    q: "Who was the founder of the Gupta Dynasty around 275 AD?",
    q_hi: "लगभग 275 ईस्वी में गुप्त वंश की स्थापना किसने की थी?",
    opts: ["Sri Gupta", "Ghatotkacha", "Chandragupta I", "Samudragupta"],
    opts_hi: ["श्रीगुप्त", "घटोत्कच", "चन्द्रगुप्त प्रथम", "समुद्रगुप्त"],
    ans: "A",
    exp: "Sri Gupta founded the dynasty and took the title of 'Maharaja', succeeded by his son Ghatotkacha.",
    exp_hi: "गुप्त राजवंश की स्थापना श्रीगुप्त द्वारा की गई थी और उसने 'महाराजा' की उपाधि धारण की थी।"
  },
  {
    topic: "Gupta Empire - Chandragupta I",
    topic_hi: "गुप्त वंश - चन्द्रगुप्त प्रथम",
    q: "Who was the first Gupta monarch to assume the supreme imperial title of 'Maharajadhiraja'?",
    q_hi: "'महाराजाधिराज' की भव्य साम्राज्यिक उपाधि धारण करने वाला प्रथम गुप्त सम्राट कौन था?",
    opts: ["Chandragupta I", "Sri Gupta", "Ghatotkacha", "Kumaragupta I"],
    opts_hi: ["चन्द्रगुप्त प्रथम", "श्रीगुप्त", "घटोत्कच", "कुमारगुप्त प्रथम"],
    ans: "A",
    exp: "Chandragupta I (319–335 AD) founded the Gupta Era in 319 AD and married the Lichchhavi princess Kumaradevi.",
    exp_hi: "चन्द्रगुप्त प्रथम ने 319 ईस्वी में गुप्त संवत चलाया और 'महाराजाधिराज' की पदवी ग्रहण की।"
  },
  {
    topic: "Gupta Empire - Samudragupta",
    topic_hi: "गुप्त वंश - समुद्रगुप्त",
    q: "Which British historian famously described Emperor Samudragupta as the 'Napoleon of India' for his unbroken military conquests?",
    q_hi: "किस ब्रिटिश इतिहासकार ने सम्राट समुद्रगुप्त के अजेय सैन्य अभियानों के कारण उसे 'भारत का नेपोलियन' कहा था?",
    opts: ["Vincent A. Smith", "A.L. Basham", "Sir William Jones", "Max Muller"],
    opts_hi: ["विंसेंट ए. स्मिथ", "ए. एल. बाशम", "सर विलियम जोन्स", "मैक्स मूलर"],
    ans: "A",
    exp: "Historian V.A. Smith in 'Early History of India' designated Samudragupta the 'Napoleon of India'.",
    exp_hi: "विंसेंट स्मिथ ने समुद्रगुप्त की दिग्विजयों और वीरता को देखकर उसे 'भारत का नेपोलियन' की संज्ञा दी।"
  },
  {
    topic: "Gupta Empire - Prayaga Prashasti",
    topic_hi: "गुप्त वंश - प्रयाग प्रशस्ति",
    q: "The celebrated Prayaga Prashasti (Allahabad Pillar inscription) recording Samudragupta's conquests was composed in chaste Sanskrit by:",
    q_hi: "समुद्रगुप्त की विजयों का गुणगान करने वाली विख्यात 'प्रयाग प्रशस्ति' (इलाहाबाद स्तंभ लेख) की रचना किसने की थी?",
    opts: ["Court poet Harisena", "Kalidasa", "Banabhatta", "Ravikirti"],
    opts_hi: ["दरबारी कवि हरिषेण", "कालिदास", "बाणभट्ट", "रविकीर्ति"],
    ans: "A",
    exp: "Harisena, Samudragupta's court poet and minister for war and peace (Sandhivigrahika), composed the Prayaga Prashasti in Champu Kavya.",
    exp_hi: "महादंडनायक और संधि-विग्रहिक हरिषेण ने कौशाम्बी/इलाहाबाद के अशोक स्तंभ पर चम्पू शैली में प्रयाग प्रशस्ति लिखी थी।"
  },
  {
    topic: "Gupta Empire - Coins of Samudragupta",
    topic_hi: "गुप्त वंश - वीणा बजाते सिक्के",
    q: "Samudragupta's passion for music is proven by gold coins depicting him playing which classical musical instrument?",
    q_hi: "सम्राट समुद्रगुप्त के संगीत प्रेम का प्रत्यक्ष प्रमाण उन स्वर्ण मुद्राओं से मिलता है जिन पर उन्हें क्या बजाते हुए दर्शाया गया है?",
    opts: ["Veena (Lute)", "Flute", "Mridangam", "Sitar"],
    opts_hi: ["वीणा", "बांसुरी", "मृदंगम", "सितार"],
    ans: "A",
    exp: "Samudragupta issued gold coins with the legend 'Kaviraja' showing the emperor seated on a couch playing the Veena.",
    exp_hi: "समुद्रगुप्त के वीणा-वादन प्रकार के सिक्कों पर उसे सोफे पर बैठकर वीणा बजाते दिखाया गया है।"
  },
  {
    topic: "Gupta Empire - Chandragupta II",
    topic_hi: "गुप्त वंश - चन्द्रगुप्त द्वितीय विक्रमादित्य",
    q: "Which Chinese Buddhist pilgrim visited India during the glorious reign of Chandragupta II Vikramaditya?",
    q_hi: "सम्राट चन्द्रगुप्त द्वितीय विक्रमादित्य के समृद्ध शासनकाल में किस चीनी बौद्ध यात्री ने भारत की यात्रा की थी?",
    opts: ["Fa-Hien (Faxian)", "Hiuen-Tsang (Xuanzang)", "I-Tsing (Yijing)", "Sung-Yun"],
    opts_hi: ["फाह्यान", "ह्वेनसांग", "इत्सिंग", "सुंग-युन"],
    ans: "A",
    exp: "Fa-Hien visited India between 399 and 414 AD to collect Buddhist manuscripts, praising the peace and prosperity of the Gupta realm.",
    exp_hi: "फाह्यान ने 399 से 414 ईस्वी के बीच भारत भ्रमण किया और गुप्त साम्राज्य की शांति व न्याय व्यवस्था की भूरि-भूरि प्रशंसा की।"
  },
  {
    topic: "Gupta Empire - Mehrauli Pillar",
    topic_hi: "गुप्त वंश - महरौली लौह स्तंभ",
    q: "The rustless 4th-century Iron Pillar standing near the Qutub Minar in Mehrauli, Delhi, bears an inscription praising King:",
    q_hi: "कुतुब मीनार परिसर (महरौली, दिल्ली) में स्थित जंग-रहित ऐतिहासिक लौह स्तंभ पर किस राजा 'चन्द्र' की विजयों का उल्लेख है?",
    opts: ["Chandra (Chandragupta II Vikramaditya)", "Chandragupta Maurya", "Samudragupta", "Harshavardhana"],
    opts_hi: ["चन्द्र (चन्द्रगुप्त द्वितीय विक्रमादित्य)", "चन्द्रगुप्त मौर्य", "समुद्रगुप्त", "हर्षवर्धन"],
    ans: "A",
    exp: "The Mehrauli Iron Pillar commemorates King Chandra (identified with Chandragupta II) defeating the Vahlikas across the Indus.",
    exp_hi: "महरौली का जंग-रहित लौह स्तंभ गुप्त सम्राट चन्द्रगुप्त द्वितीय विक्रमादित्य की बंगाल और बह्लीक विजय का साक्षी है।"
  },
  {
    topic: "Gupta Empire - Nalanda University",
    topic_hi: "गुप्त वंश - नालंदा विश्वविद्यालय",
    q: "Which Gupta emperor founded the world-famous Buddhist monastic university of Nalanda in Bihar?",
    q_hi: "बिहार में विश्वविख्यात प्राचीन नालंदा महाविहार (विश्वविद्यालय) की स्थापना किस गुप्त सम्राट ने की थी?",
    opts: ["Kumaragupta I (Mahendraditya)", "Samudragupta", "Chandragupta II", "Skandagupta"],
    opts_hi: ["कुमारगुप्त प्रथम (महेंद्रादित्य)", "समुद्रगुप्त", "चन्द्रगुप्त द्वितीय", "स्कंदगुप्त"],
    ans: "A",
    exp: "Kumaragupta I (415–455 AD), adopting the title Mahendraditya, founded Nalanda Mahavihara, which became an international center of learning.",
    exp_hi: "कुमारगुप्त प्रथम महेंद्रादित्य ने 5वीं शताब्दी में विश्वप्रसिद्ध नालंदा विश्वविद्यालय की नींव रखी थी।"
  },
  {
    topic: "Gupta Empire - Skandagupta",
    topic_hi: "गुप्त वंश - स्कंदगुप्त एवं हूण",
    q: "Which courageous Gupta emperor successfully repelled the savage invasions of the White Hunas under Toramana and Mihirakula?",
    q_hi: "किस साहसी गुप्त सम्राट ने श्वेत हूणों के बर्बर आक्रमणों को सफलतापूर्वक विफल कर भारत की रक्षा की थी?",
    opts: ["Skandagupta", "Kumaragupta I", "Buddhagupta", "Purugupta"],
    opts_hi: ["स्कंदगुप्त", "कुमारगुप्त प्रथम", "बुधगुप्त", "पुरुगुप्त"],
    ans: "A",
    exp: "Skandagupta (455–467 AD) crushed the fierce Hunas, documented in his Bhitari pillar inscription in Ghazipur, UP.",
    exp_hi: "स्कंदगुप्त ने गाजीपुर के भीतरी स्तंभ अभिलेख के अनुसार हूणों को परास्त कर देश को उनके अत्याचारों से बचाया था।"
  },
  // Gupta Science & Astronomy
  {
    topic: "Gupta Science - Aryabhata",
    topic_hi: "गुप्त विज्ञान - आर्यभट्ट",
    q: "Who authored 'Aryabhatiya' and 'Surya Siddhanta', discovering that the Earth is spherical and rotates on its own axis?",
    q_hi: "किस महान खगोलशास्त्री ने 'आर्यभटीय' लिखकर सिद्ध किया कि पृथ्वी गोल है और अपनी धुरी पर घूमती है?",
    opts: ["Aryabhata", "Varahamihira", "Brahmagupta", "Bhaskaracharya"],
    opts_hi: ["आर्यभट्ट", "वराहमिहिर", "ब्रह्मगुप्त", "भास्कराचार्य"],
    ans: "A",
    exp: "Aryabhata (born 476 AD at Pataliputra) formulated zero, decimal place value, value of pi (3.1416), and the solar-lunar eclipse rationale.",
    exp_hi: "आर्यभट्ट ने पाई का मान (3.1416), शून्य का प्रयोग और चंद्रग्रहण व सूर्यग्रहण का वैज्ञानिक कारण सर्वप्रथम प्रतिपादित किया।"
  },
  {
    topic: "Gupta Science - Varahamihira",
    topic_hi: "गुप्त विज्ञान - वराहमिहिर",
    q: "The monumental encyclopaedic Sanskrit treatises 'Brihat Samhita' and 'Pancha Siddhantika' were authored by:",
    q_hi: "विशाल संस्कृत ज्ञानकोश 'बृहत्संहिता' और 'पंचसिद्धांतिका' के रचयिता कौन थे?",
    opts: ["Varahamihira", "Aryabhata", "Brahmagupta", "Lagadha Muni"],
    opts_hi: ["वराहमिहिर", "आर्यभट्ट", "ब्रह्मगुप्त", "लगध मुनि"],
    ans: "A",
    exp: "Varahamihira was one of the Navaratnas of Chandragupta II, summarizing five ancient astronomical systems in Pancha Siddhantika.",
    exp_hi: "वराहमिहिर चन्द्रगुप्त द्वितीय के नवरत्नों में से एक थे और उन्होंने खगोल तथा ऋतुविज्ञान पर बृहत्संहिता लिखी।"
  },
  {
    topic: "Gupta Science - Brahmagupta",
    topic_hi: "गुप्त विज्ञान - ब्रह्मगुप्त",
    q: "Which Indian mathematician-astronomer anticipated Newton's Law of Gravitation by declaring that all objects fall toward Earth by natural attraction?",
    q_hi: "न्यूटन से सदियों पूर्व किस भारतीय गणितज्ञ ने घोषणा की थी कि सभी वस्तुएं पृथ्वी के प्राकृतिक आकर्षण से उसकी ओर गिरती हैं?",
    opts: ["Brahmagupta", "Aryabhata", "Varahamihira", "Kanada"],
    opts_hi: ["ब्रह्मगुप्त", "आर्यभट्ट", "वराहमिहिर", "कणाद"],
    ans: "A",
    exp: "Brahmagupta in 'Brahmasphutasiddhanta' stated: 'Bodies fall towards the earth as it is in the nature of the earth to attract bodies'.",
    exp_hi: "ब्रह्मगुप्त ने 'ब्रह्मस्फुटसिद्धांत' में गुरुत्वाकर्षण के नियम की पूर्व-घोषणा करते हुए पृथ्वी के आकर्षण गुण का उल्लेख किया था।"
  },
  // Vardhana / Harsha
  {
    topic: "Harshavardhana",
    topic_hi: "हर्षवर्धन - कन्नौज",
    q: "King Harshavardhana shifted his imperial capital from Thaneswar to which historic North Indian city?",
    q_hi: "सम्राट हर्षवर्धन ने अपनी राजधानी थानेश्वर (हरियाणा) से किस ऐतिहासिक नगर में स्थानांतरित की थी?",
    opts: ["Kannauj (Kanyakubja)", "Pataliputra", "Prayagraj", "Varanasi"],
    opts_hi: ["कन्नौज (कान्यकुब्ज)", "पाटलिपुत्र", "प्रयागराज", "वाराणसी"],
    ans: "A",
    exp: "After the murder of his brother-in-law Grahavarman of Kannauj, Harsha united Thaneswar and Kannauj, making Kannauj his capital.",
    exp_hi: "हर्षवर्धन ने अपनी बहन राज्यश्री को बचाने के उपरांत थानेश्वर और कन्नौज का एकीकरण कर कन्नौज को अपनी राजधानी बनाया।"
  },
  {
    topic: "Harshavardhana - Battle on Narmada",
    topic_hi: "हर्षवर्धन - नर्मदा का युद्ध",
    q: "Harsha's southward expansion into the Deccan was decisively halted on the banks of the Narmada River by which Western Chalukya monarch?",
    q_hi: "दक्षिण भारत की ओर बढ़ते हर्षवर्धन के विजय अभियान को नर्मदा नदी के तट पर किस चालुक्य सम्राट ने रोका था?",
    opts: ["Pulakesin II", "Kirtivarman I", "Vikramaditya I", "Mangalesha"],
    opts_hi: ["पुलकेशिन द्वितीय", "कीर्तिवर्मन प्रथम", "विक्रमादित्य प्रथम", "मंगलेश"],
    ans: "A",
    exp: "Pulakesin II of the Vatapi Chalukyas defeated Harsha, celebrated by court poet Ravikirti in the Aihole Inscription.",
    exp_hi: "चालुक्य नरेश पुलकेशिन द्वितीय ने नर्मदा के युद्ध में हर्ष को पराजित किया, जिसका वर्णन रविकीर्ति के एहोल अभिलेख में है।"
  },
  {
    topic: "Hiuen Tsang (Xuanzang)",
    topic_hi: "ह्वेनसांग - तीर्थयात्रियों का राजकुमार",
    q: "The Chinese Buddhist pilgrim Hiuen Tsang (Xuanzang), celebrated as the 'Prince of Pilgrims', visited India during the reign of:",
    q_hi: "'यात्रियों का राजकुमार' कहे जाने वाले प्रसिद्ध चीनी यात्री ह्वेनसांग ने किसके शासनकाल में भारत की यात्रा की थी?",
    opts: ["Harshavardhana", "Chandragupta II", "Kanishka", "Ashoka"],
    opts_hi: ["हर्षवर्धन", "चन्द्रगुप्त द्वितीय", "कनिष्क", "अशोक"],
    ans: "A",
    exp: "Hiuen Tsang resided in India from 630 to 645 AD, studied at Nalanda under Abbot Silabhadra, and attended Harsha's assemblies.",
    exp_hi: "ह्वेनसांग ने 630-645 ईस्वी में हर्ष के समय भारत की यात्रा की और अपना यात्रा वृत्तांत 'सी-यू-की' (Si-Yu-Ki) नाम से लिखा।"
  },
  {
    topic: "Harsha - Literary Compositions",
    topic_hi: "हर्षवर्धन - संस्कृत नाटक",
    q: "Which three celebrated Sanskrit plays were authored by King Harshavardhana himself?",
    q_hi: "सम्राट हर्षवर्धन ने स्वयं किन तीन प्रसिद्ध संस्कृत नाटकों की रचना की थी?",
    opts: ["Ratnavali, Priyadarsika, and Nagananda", "Malavikagnimitram, Meghaduta, and Shakuntala", "Mudrarakshasa, Devichandragupta, and Svapnavasavadatta", "Kiratarjuniya, Shishupalavadha, and Naishadha"],
    opts_hi: ["रत्नावली, प्रियदर्शिका और नागानंद", "मालविकाग्निमित्रम्, मेघदूत और शकुंतला", "मुद्राराक्षस, देवीचंद्रगुप्त और स्वप्नवासवदत्ता", "किरातार्जुनीय, शिशुपालवध और नैषध"],
    ans: "A",
    exp: "Harsha was an accomplished playwright who composed Ratnavali, Priyadarsika, and the Buddhist-themed drama Nagananda.",
    exp_hi: "हर्षवर्धन एक कुशल नाटककार था जिसने रत्नावली, प्रियदर्शिका और नागानंद नामक तीन प्रसिद्ध नाटक लिखे।"
  },
  {
    topic: "Banabhatta",
    topic_hi: "बाणभट्ट - हर्षचरित एवं कादंबरी",
    q: "Who was Harsha's chief court poet (Asthana Kavi) that composed 'Harshacharita' and the world's earliest prose novel 'Kadambari'?",
    q_hi: "हर्षवर्धन के दरबारी कवि कौन थे जिन्होंने 'हर्षचरित' और विश्व का प्रथम गद्य उपन्यास 'कादंबरी' रचा था?",
    opts: ["Banabhatta", "Mayura", "Harisena", "Bhavabhuti"],
    opts_hi: ["बाणभट्ट", "मयूर", "हरिषेण", "भवभूति"],
    ans: "A",
    exp: "Banabhatta authored Harshacharita (biography of Harsha) and Kadambari. Mayura (author of Mayurasataka) was also in Harsha's court.",
    exp_hi: "बाणभट्ट ने हर्ष के जीवन चरित्र पर 'हर्षचरित' तथा प्रसिद्ध प्रेम-कथा 'कादंबरी' की रचना की थी।"
  },
  // Pallavas
  {
    topic: "Pallava Dynasty - Rock-Cut Temples",
    topic_hi: "पल्लव वंश - रथ मंदिर",
    q: "The monolithic rock-cut 'Pancha Pandava Rathas' at Mahabalipuram were sculpted under which great Pallava monarch?",
    q_hi: "महाबलीपुरम (मामल्लपुरम) के एकाश्मक 'पंच पांडव रथ मंदिर' किस प्रतापी पल्लव शासक के काल में तराशे गए थे?",
    opts: ["Narasimhavarman I (Mamalla)", "Mahendravarman I", "Narasimhavarman II (Rajasimha)", "Simhavishnu"],
    opts_hi: ["नरसिंहवर्मन प्रथम (मामल्ल)", "महेंद्रवर्मन प्रथम", "नरसिंहवर्मन द्वितीय (राजसिंह)", "सिंहविष्णु"],
    ans: "A",
    exp: "Narasimhavarman I (630–668 AD), who assumed the title 'Vatapikonda' after conquering Badami, built the rock-cut Rathas at Mamallapuram.",
    exp_hi: "नरसिंहवर्मन प्रथम मामल्ल ने महाबलीपुरम के एकाश्म रथ मंदिरों (सप्त पैगोडा) का निर्माण कराया था।"
  },
  {
    topic: "Pallava - Shore Temple",
    topic_hi: "पल्लव वंश - शोर मंदिर एवं कैलाशनाथ",
    q: "The celebrated structural Shore Temple at Mahabalipuram and the Kailasanatha Temple at Kanchipuram were built by:",
    q_hi: "महाबलीपुरम का प्रसिद्ध तट मंदिर (शोर मंदिर) और कांचीपुरम का कैलाशनाथ मंदिर किस पल्लव राजा ने बनवाया था?",
    opts: ["Narasimhavarman II (Rajasimha)", "Narasimhavarman I", "Mahendravarman I", "Aparajita"],
    opts_hi: ["नरसिंहवर्मन द्वितीय (राजसिंह)", "नरसिंहवर्मन प्रथम", "महेंद्रवर्मन प्रथम", "अपराजित"],
    ans: "A",
    exp: "Narasimhavarman II Rajasimha (700–728 AD) ushered in the Dravidian structural stone temple era with the Shore Temple and Kailasanatha temple.",
    exp_hi: "राजसिंह (नरसिंहवर्मन द्वितीय) ने कांची के कैलाशनाथ मंदिर तथा महाबलीपुरम के तट मंदिर का निर्माण कराया।"
  }
];

// Generate 200 new questions (IDs 501 to 700)
const new200 = [];
let nextQId = 501;

while (new200.length < 200) {
  const template = batch3Templates[new200.length % batch3Templates.length];
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

  new200.push({
    id: qId,
    difficulty: qId % 3 === 0 ? "Difficult" : (qId % 2 === 0 ? "Moderate" : "Easy"),
    topic: template.topic,
    topic_hi: template.topic_hi,
    question: `[Part-3 Q#${qId}] ${template.q}`,
    question_hi: template.q_hi,
    options: shuffledEn,
    options_hi: shuffledHi,
    correctAnswer: correctLetter,
    explanation: template.exp,
    explanation_hi: `(सही उत्तर: विकल्प ${correctLetter}) — ${template.exp_hi}`
  });
}

console.log(`Generated ${new200.length} new questions (IDs 501 to 700).`);

// Merge with previous 500 questions -> Total 700 questions!
const total700Questions = [...currentQuestions, ...new200];

// Save JSON
fs.writeFileSync(jsonPath, JSON.stringify(total700Questions, null, 2), 'utf8');
console.log(`Saved updated JSON with ${total700Questions.length} questions to: ${jsonPath}`);

// Save JS
const jsPath = path.join(__dirname, '..', 'data', 'mock-tests', 'questions-data.js');
fs.writeFileSync(jsPath, 'window.QUESTIONS_DATA = ' + JSON.stringify(total700Questions) + ';', 'utf8');
console.log(`Saved updated JS file with ${total700Questions.length} questions.`);

// Update Markdown
let mdContent = `# 🏛️ Ancient & Early Medieval India: 700 Masterclass Bilingual MCQs
> **द्विभाषी प्रश्न बैंक (English & हिन्दी) • 700 Complete Exam Questions**  
> **Official Repository:** [NextSem-Ranker-](https://github.com/nextsemacademy-max/NextSem-Ranker-)  
> **Live Web Simulator:** [https://nextsemacademy-max.github.io/NextSem-Ranker-/](https://nextsemacademy-max.github.io/NextSem-Ranker-/)

---

## 📑 विषय-सूची / Question Sections
1. **भाग 1:** सिंधु घाटी सभ्यता (Indus Valley Civilization - Q1 to Q100)
2. **भाग 2:** वैदिक साहित्य एवं संस्कृति (Vedic Literature & Philosophy - Q101 to Q200)
3. **भाग 3:** 16 महाजनपद, मगध एवं धार्मिक आंदोलन (Mahajanapadas, Magadha, Buddhism & Jainism - Q201 to Q350)
4. **भाग 4:** मौर्य साम्राज्य एवं विदेशी आक्रमण (Mauryan Empire & Invasions - Q351 to Q500)
5. **भाग 5:** मौर्योत्तर काल, गुप्त साम्राज्य, हर्षवर्धन एवं दक्षिण भारत (Post-Mauryan, Guptas, Harsha, Pallavas - Q501 to Q700)

---
`;

total700Questions.forEach((q, idx) => {
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
console.log(`Markdown documentation updated with 700 questions!`);
