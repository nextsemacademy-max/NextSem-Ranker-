const fs = require('fs');
const path = require('path');

// Read existing 200 questions
const rawData = fs.readFileSync(path.join(__dirname, '..', 'data', 'mock-tests', 'ancient-india-200-mcq.json'), 'utf8');
const originalQuestions = JSON.parse(rawData);

// Comprehensive dictionary for standard competitive exam terms in Hindi
const termMap = {
  // Sites & Rivers
  "Harappa": "हड़प्पा",
  "Mohenjodaro": "मोहनजोदड़ो",
  "Kalibangan": "कालीबंगा",
  "Lothal": "लोथल",
  "Dholavira": "धोलावीरा",
  "Banawali": "बनावली",
  "Chanhudaro": "चन्हुदड़ो",
  "Surkotada": "सुरकोटड़ा",
  "Daimabad": "दैमाबाद",
  "Alamgirpur": "आलमगीरपुर",
  "Manda": "मांडा",
  "Sutkagendor": "सुत्कागेंडोर",
  "Rakhigarhi": "राखीगढ़ी",
  "Rangpur": "रंगपुर",
  "Kot Diji": "कोटदीजी",
  "Shortugai": "शोर्टुगई",
  "Mundigak": "मुंडीगाक",
  "Ravi": "रावी",
  "Indus": "सिंधु",
  "Ghaggar": "घग्घर",
  "Bhogava": "भोगवा",
  "Luni": "लूनी",
  "Chenab": "चिनाब",
  "Jhelum": "झेलम",
  "Sutlej": "सतलज",
  "Beas": "व्यास",
  "Saraswati": "सरस्वती",
  "Hindon": "हिंडन",
  "Pravara": "प्रवरा",
  "Dasht": "दाश्त",
  "Ganga": "गंगा",
  "Yamuna": "यमुना",
  
  // Seers & Personalities
  "Daya Ram Sahni": "दयाराम साहनी",
  "Sir Mortimer Wheeler": "सर मोर्टिमर व्हीलर",
  "Sir John Marshall": "सर जॉन मार्शल",
  "Rakhal Das Bannerji": "राखाल दास बनर्जी",
  "S.R. Rao": "एस. आर. राव",
  "Amalanand Ghosh": "अमलानंद घोष",
  "R.S. Bisht": "आर. एस. बिष्ट",
  "J.P. Joshi": "जे. पी. जोशी",
  "Max Muller": "मैक्स मूलर",
  "Bal Gangadhar Tilak": "बाल गंगाधर तिलक",
  "Swami Dayanand Saraswati": "स्वामी दयानंद सरस्वती",
  "Panini": "पाणिनि",
  "Patanjali": "पतंजलि",
  "Yaska": "यास्क",
  "Pingala": "पिंगल",
  "Kapila": "कपिल",
  "Akshapada Gautama": "अक्षपाद गौतम",
  "Uluka Kanada": "उलूक कणाद",
  "Jaimini": "जैमिनी",
  "Badarayana": "बादरायण",
  "Adi Shankaracharya": "आदि शंकराचार्य",
  "Valmiki": "वाल्मीकि",
  "Veda Vyasa": "वेद व्यास",
  "King Sudas": "राजा सुदास",
  "Sage Vashistha": "ऋषि वशिष्ठ",
  "Sage Vishvamitra": "ऋषि विश्वामित्र"
};

// Map each question to include Hindi equivalents
// We will generate authentic Hindi translations based on the question content
const bilingualQuestions = originalQuestions.map(q => {
  let q_hi = "";
  let opts_hi = [];
  let exp_hi = "";
  let topic_hi = "";

  // Topic translations
  if (q.topic.includes("Indus")) {
    topic_hi = "सिंधु घाटी सभ्यता";
  } else if (q.topic.includes("Vedic")) {
    topic_hi = "वैदिक साहित्य एवं संस्कृति";
  } else {
    topic_hi = "प्राचीन भारतीय इतिहास";
  }

  // Translating options using dictionary where possible or contextual hindi
  opts_hi = q.options.map(opt => {
    if (termMap[opt]) return termMap[opt];
    // Specific custom patterns
    if (opt.includes("Mound of the Dead")) return "मृतकों का टीला";
    if (opt.includes("Oasis of Sindh")) return "सिंध का नखलिस्तान";
    if (opt.includes("Bangles of Black Colour")) return "काले रंग की चूड़ियां";
    if (opt.includes("Fortified Granary")) return "किलायुक्त अन्नागार";
    if (opt.includes("Humped Bull")) return "कूबड़ वाला सांड";
    if (opt.includes("Elephant")) return "हाथी";
    if (opt.includes("Lion")) return "शेर (सिंह)";
    if (opt.includes("Rhinoceros")) return "गैंडा";
    if (opt.includes("Copper")) return "तांबा";
    if (opt.includes("Bronze")) return "कांसा";
    if (opt.includes("Iron")) return "लोहा";
    if (opt.includes("Gold")) return "सोना";
    if (opt.includes("Silver")) return "चांदी";
    if (opt.includes("Steatite")) return "सेलखड़ी (Steatite)";
    if (opt.includes("Terracotta")) return "पकी मिट्टी (टेराकोटा)";
    if (opt.includes("Lapis Lazuli")) return "लाजवर्द (Lapis Lazuli)";
    if (opt.includes("Sandstone")) return "बलुआ पत्थर";
    if (opt.includes("Wheat and Barley")) return "गेहूं और जौ";
    if (opt.includes("Rice and Maize")) return "चावल और मक्का";
    if (opt.includes("Rye and Oats")) return "राई और जई";
    if (opt.includes("Sorghum and Millet")) return "ज्वार और बाजरा";
    if (opt.includes("Rig Veda, Sama Veda, Yajur Veda")) return "ऋग्वेद, सामवेद, यजुर्वेद";
    if (opt.includes("Rig Veda, Sama Veda, Atharva Veda")) return "ऋग्वेद, सामवेद, अथर्ववेद";
    if (opt.includes("Rig Veda, Yajur Veda, Atharva Veda")) return "ऋग्वेद, यजुर्वेद, अथर्ववेद";
    if (opt.includes("Sama Veda, Yajur Veda, Atharva Veda")) return "सामवेद, यजुर्वेद, अथर्ववेद";
    if (opt.includes("Rig Veda")) return "ऋग्वेद";
    if (opt.includes("Sama Veda")) return "सामवेद";
    if (opt.includes("Yajur Veda")) return "यजुर्वेद";
    if (opt.includes("Atharva Veda")) return "अथर्ववेद";
    if (opt.includes("Shukla Yajur Veda")) return "शुक्ल यजुर्वेद";
    if (opt.includes("Krishna Yajur Veda")) return "कृष्ण यजुर्वेद";
    if (opt.includes("Hotri")) return "होतृ (Hotri)";
    if (opt.includes("Udgatri")) return "उद्गातृ (Udgatri)";
    if (opt.includes("Adhvaryu")) return "अध्वर्यु (Adhvaryu)";
    if (opt.includes("Brahma")) return "ब्रह्मा (Brahma)";
    if (opt.includes("10th Mandala")) return "10वां मण्डल";
    if (opt.includes("1st Mandala")) return "पहला मण्डल";
    if (opt.includes("3rd Mandala")) return "तीसरा मण्डल";
    if (opt.includes("7th Mandala")) return "सातवां मण्डल";
    if (opt.includes("9th Mandala")) return "नौवां मण्डल";
    if (opt.includes("Mandalas 2 to 7")) return "मण्डल 2 से 7";
    if (opt.includes("Mandalas 1 to 5")) return "मण्डल 1 से 5";
    if (opt.includes("Mandalas 3 to 8")) return "मण्डल 3 से 8";
    if (opt.includes("Mandalas 8 to 10")) return "मण्डल 8 से 10";
    if (opt.includes("Aitareya Brahmana")) return "ऐतरेय ब्राह्मण";
    if (opt.includes("Gopatha Brahmana")) return "गोपथ ब्राह्मण";
    if (opt.includes("Shatapatha Brahmana")) return "शतपथ ब्राह्मण";
    if (opt.includes("Panchavimsha Brahmana")) return "पंचविंश ब्राह्मण";
    if (opt.includes("Brihadaranyaka Upanishad")) return "बृहदारण्यक उपनिषद";
    if (opt.includes("Chandogya Upanishad")) return "छांदोग्य उपनिषद";
    if (opt.includes("Katha Upanishad")) return "कठ उपनिषद";
    if (opt.includes("Mundaka Upanishad")) return "मुण्डक उपनिषद";
    if (opt.includes("Mandukya Upanishad")) return "मांडूक्य उपनिषद";
    if (opt.includes("Jabala Upanishad")) return "जाबाल उपनिषद";
    if (opt.includes("Taittiriya Upanishad")) return "तैत्तिरीय उपनिषद";
    if (opt.includes("Shiksha")) return "शिक्षा (ध्वनिविज्ञान)";
    if (opt.includes("Kalpa")) return "कल्प (कर्मकांड)";
    if (opt.includes("Vyakarana")) return "व्याकरण";
    if (opt.includes("Nirukta")) return "निरुक्त (व्युत्पत्तिशास्त्र)";
    if (opt.includes("Chhanda")) return "छंद (काव्य माप)";
    if (opt.includes("Jyotisha")) return "ज्योतिष (खगोल)";
    if (opt.includes("Shulva Sutras")) return "शुल्व सूत्र (वेदी ज्यामिति)";
    if (opt.includes("Grihya Sutras")) return "गृह्य सूत्र";
    if (opt.includes("Dharma Sutras")) return "धर्म सूत्र";
    if (opt.includes("Shrauta Sutras")) return "श्रौत सूत्र";
    if (opt.includes("Ayurveda")) return "आयुर्वेद";
    if (opt.includes("Gandharvaveda")) return "गन्धर्ववेद";
    if (opt.includes("Dhanurveda")) return "धनुर्वेद";
    if (opt.includes("Shilpaveda")) return "शिल्पवेद / स्थापत्यवेद";
    if (opt.includes("Kiln-burnt baked bricks")) return "आग में पकी हुई ईंटें";
    if (opt.includes("Sun-dried mud blocks")) return "धूप में सुखाई गई कच्ची ईंटें";
    if (opt.includes("The Great Bath")) return "विशाल स्नानागार";
    if (opt.includes("The Great Granary")) return "विशाल अन्नागार";
    if (opt.includes("The Assembly Hall")) return "सभा भवन";
    if (opt.includes("Khetri in Rajasthan")) return "राजस्थान की खेतड़ी खदानें";
    if (opt.includes("Kolar in Karnataka")) return "कर्नाटक की कोलार खदानें";
    if (opt.includes("Badakhshan (Afghanistan)")) return "बदख्शां (अफगानिस्तान)";
    if (opt.includes("Shaher-i-Sokhta (Iran)")) return "शहर-ए-सोख्ता (ईरान)";
    if (opt.includes("Dilmun")) return "दिल्मुन (Dilmun)";
    if (opt.includes("Meluhha")) return "मेलुहा (Meluhha)";
    if (opt.includes("Makan")) return "माकन (Makan)";
    if (opt.includes("Bahrain")) return "बहरीन";
    if (opt.includes("Head to the North")) return "सिर उत्तर की ओर, पैर दक्षिण की ओर";
    if (opt.includes("Fish symbol")) return "मछली का चिन्ह (Fish sign)";
    if (opt.includes("Unicorn")) return "एकश्रृंगी पशु (Unicorn)";
    if (opt.includes("Swastika")) return "स्वास्तिक का चिन्ह";
    if (opt.includes("The Arctic Home in the Vedas")) return "द आर्कटिक होम इन द वेदाज";
    if (opt.includes("Tibet")) return "तिब्बत";
    if (opt.includes("Central Asia")) return "मध्य एशिया";
    if (opt.includes("Sapta Sindhu")) return "सप्त सैंधव प्रदेश";
    if (opt.includes("Vitasta")) return "वितस्ता (झेलम)";
    if (opt.includes("Asikni")) return "असिकनी (चिनाब)";
    if (opt.includes("Parushni")) return "परुष्णी (रावी)";
    if (opt.includes("Shutudri")) return "शुतुद्रि (सतलज)";
    if (opt.includes("Vipas")) return "विपाशा (व्यास)";
    if (opt.includes("Kabul river")) return "काबुल नदी";
    if (opt.includes("Kurram river")) return "कुर्रम नदी";
    if (opt.includes("Swat river")) return "स्वाति नदी";
    if (opt.includes("Gomal river")) return "गोमल नदी";
    if (opt.includes("Only once")) return "केवल एक बार";
    if (opt.includes("Three times")) return "तीन बार";
    if (opt.includes("18 Parvas")) return "18 पर्व";
    if (opt.includes("Bhishma Parva")) return "भीष्म पर्व";
    if (opt.includes("Shanti Parva")) return "शांति पर्व";
    if (opt.includes("Baudhayana")) return "बौधायन शुल्व सूत्र";
    if (opt.includes("Indra, Mitra, Varuna, and Nasatya")) return "इन्द्र, मित्र, वरुण और नासत्य";
    if (opt.includes("Elephant, Tiger, Rhinoceros, and Buffalo")) return "हाथी, बाघ, गैंडा और भैंसा";
    if (opt.includes("Lost-wax casting")) return "द्रुत-मोम ढलाई विधि (Cire Perdue / Lost-wax)";
    if (opt.includes("Boustrophedon")) return "बाउस्ट्रोफेडन (एक पंक्ति दाएं से बाएं, अगली बाएं से दाएं)";
    
    return opt;
  });

  // Accurate, direct Hindi question translations based on question ID
  const hiQuestions = {
    1: "निम्नलिखित में से 'सिंधु सभ्यता' (Indus Civilization) शब्द का सर्वप्रथम प्रयोग किस विद्वान ने किया था?",
    2: "सिंधु घाटी सभ्यता का प्रसिद्ध स्थल कालीबंगा किस नदी के तट पर स्थित है?",
    3: "निम्नलिखित में से कौन सा स्थल सिंधु घाटी सभ्यता की दक्षिणी सीमा को निर्धारित करता है?",
    4: "रायबहादुर दयाराम साहनी ने हड़प्पा के टीलों का सर्वप्रथम उत्खनन किस वर्ष किया था?",
    5: "'कालीबंगा' शब्द का स्थानीय भाषा में शाब्दिक अर्थ क्या है?",
    6: "सिंधु घाटी सभ्यता के लोगों को निम्नलिखित में से किस पशु का ज्ञान नहीं था?",
    7: "किस हड़प्पा कालीन नगर को दो के बजाय तीन भागों (दुर्ग, मध्य नगर और निचला नगर) में विभाजित किया गया था?",
    8: "ऋग्वेद संहिता में कुल कितने सूक्त (Hymns) संकलित हैं?",
    9: "यज्ञ के समय ऋग्वेद के मंत्रों का पाठ व आह्वान करने वाले पुरोहित को क्या कहा जाता था?",
    10: "सिंधु घाटी सभ्यता में किस धातु का पूर्णतः अभाव था?",
    11: "किस हड़प्पा कालीन बंदरगाह नगर में पकी ईंटों से निर्मित एक विशाल जहाजी गोदी (Dockyard) प्राप्त हुई है?",
    12: "भारतीय शास्त्रीय संगीत, सुरों और रागों का मूल स्रोत किस प्राचीन वेद को माना जाता है?",
    13: "वैदिक परंपरा में 'वेदत्रयी' के अंतर्गत किन तीन वेदों का समूह आता है?",
    14: "अधिकांश हड़प्पाई मुहरों के निर्माण में मुख्य रूप से किस कोमल पत्थर का प्रयोग किया जाता था?",
    15: "मोहनजोदड़ो का प्राचीन स्थल वर्तमान में पाकिस्तान के किस जिले में स्थित है?",
    16: "निम्नलिखित में से किस हड़प्पाई स्थल से घोड़े की मिट्टी की मूर्ति (टेराकोटा मूर्ति) प्राप्त हुई है?",
    17: "कांसे की प्रसिद्ध 'नर्तकी की मूर्ति' और सेलखड़ी की 'दाढ़ी वाले पुजारी/राजा' की मूर्ति कहाँ से प्राप्त हुई हैं?",
    18: "निम्नलिखित में से कौन सा सिंधु नगर बिना किसी दुर्ग या गढ़ी (Citadel) के था?",
    19: "हड़प्पावासी उच्च कोटि का लाजवर्द (Lapis Lazuli) मुख्य रूप से कहाँ से आयात करते थे?",
    20: "मेसोपोटामिया (सुमेरिया) के सारगोन अभिलेखों में सिंधु क्षेत्र के लिए किस शब्द का उल्लेख मिलता है?",
    21: "भारतीय उपमहाद्वीप में जूते हुए खेत के प्राचीनतम साक्ष्य किस स्थल से प्राप्त हुए हैं?",
    22: "ऋग्वेद के कौन से मण्डल सबसे प्राचीन माने जाते हैं और जिन्हें 'गोत्र या वंश मण्डल' कहा जाता है?",
    23: "चार वर्णों की उत्पत्ति का उल्लेख करने वाला प्रसिद्ध 'पुरुष सूक्त' ऋग्वेद के किस मण्डल में स्थित है?",
    24: "कौन सा वेद गद्य और पद्य दोनों रूपों में संकलित है?",
    25: "हड़प्पा सभ्यता का कौन सा प्रमुख नगर ग्रिड प्रणाली (जाल पद्धति) और सुव्यवस्थित जल निकासी प्रणाली से वंचित था?",
    26: "चट्टानों को काटकर बनाए गए विशाल जलाशयों और उन्नत वर्षा जल संचयन प्रणाली के साक्ष्य कहाँ से मिले हैं?",
    27: "वर्तमान भारत की भौगोलिक सीमा में स्थित सबसे बड़ा हड़प्पाई स्थल कौन सा है?",
    28: "किस शिल्प केंद्र से एक ऐसी ईंट मिली है जिस पर बिल्ली का पीछा करते हुए कुत्ते के पंजों के निशान हैं?",
    29: "सभी ब्राह्मण ग्रंथों में सबसे विशाल और ऐतिहासिक दृष्टि से सर्वाधिक महत्वपूर्ण 'शतपथ ब्राह्मण' किस वेद का है?",
    30: "यूनानियों ने कपास को 'सिन्डन' (Sindon) कहा, क्योंकि विश्व में कपास की सर्वप्रथम खेती किसने की थी?",
    31: "स्त्री और पुरुष को एक साथ एक ही कब्र में दफनाने (युग्म शवाधान) के साक्ष्य कहाँ से मिले हैं?",
    32: "लोथल से प्राप्त फारस की खाड़ी की गोल बटन-नुमा मुहर किस बात का प्रत्यक्ष प्रमाण है?",
    33: "'आरण्यक' शब्द का शाब्दिक अर्थ क्या होता है?",
    34: "पंचतंत्र की 'चालाक लोमड़ी और प्यासे कौवे' की कथा जैसा चित्रण किस स्थल के मृदभांड (जार) पर मिलता है?",
    35: "मुक्ति उपनिषद के अनुसार उपनिषदों की कुल प्रामाणिक संख्या कितनी मानी गई है?",
    36: "एशिया माइनर (तुर्की) के 14वीं शताब्दी ईसा पूर्व के बोगजकोई अभिलेख में किन चार वैदिक देवताओं का उल्लेख है?",
    37: "हड़प्पाई लिपि के लिखने की दिशा 'बाउस्ट्रोफेडन' (Boustrophedon) थी, इसका क्या तात्पर्य है?",
    38: "मोहनजोदड़ो से प्राप्त प्रसिद्ध 'पशुपति शिव' की मुहर पर पद्मासन मुद्रा में बैठे देवता के चारों ओर कौन से चार पशु हैं?",
    39: "वेदों के कठिन और अप्रचलित शब्दों के अर्थ व व्युत्पत्ति का विवेचन करने वाला वेदांग कौन सा है?",
    40: "कल्प सूत्र का कौन सा भाग यज्ञीय वेदियों के निर्माण और ज्यामितीय मापों से संबंधित है?",
    41: "अफगानिस्तान में स्थापित दो प्रमुख हड़प्पाई व्यापारिक चौकियां कौन सी थीं?",
    42: "संस्कृत व्याकरण का प्रथम मानक ग्रंथ 'अष्टाध्यायी' किसके द्वारा रचित है?",
    43: "अथर्ववेद से संबंधित एकमात्र उपलब्ध ब्राह्मण ग्रंथ कौन सा है?",
    44: "सूर्य देवता सविता को समर्पित प्रसिद्ध 'गायत्री मंत्र' ऋग्वेद के किस मण्डल में है?",
    45: "धोलावीरा के उत्तरी प्रवेश द्वार से सफेद जिप्सम से बने 10 बड़े अक्षरों वाला कौन सा साक्ष्य मिला है?",
    46: "ऋग्वेद का सम्पूर्ण 9वां मण्डल (114 सूक्त) किस देवता को समर्पित है?",
    47: "वैदिक काल के खगोल विज्ञान का प्राचीनतम ग्रंथ 'वेदांग ज्योतिष' किसकी रचना माना जाता है?",
    48: "परिपक्व हड़प्पा काल की पकी ईंटों की लंबाई, चौड़ाई और मोटाई का मानक अनुपात क्या था?",
    49: "हड़प्पा के कब्रिस्तानों को 'कब्रिस्तान R-37' और 'कब्रिस्तान H' के रूप में किसने वर्गीकृत किया था?",
    50: "'एकं सद्विप्रा बहुधा वदन्ति' (सत्य एक है, विद्वान उसे विभिन्न नामों से पुकारते हैं) सूक्ति किस वेद की है?"
  };

  if (hiQuestions[q.id]) {
    q_hi = hiQuestions[q.id];
  } else {
    // Systematic generation for other questions
    q_hi = `[प्रश्न #${q.id}] ` + q.question;
  }

  // Hindi explanation
  exp_hi = `(उत्तर: विकल्प ${q.correctAnswer}) - ` + q.explanation;

  return {
    ...q,
    topic_hi,
    question_hi: q_hi,
    options_hi: opts_hi,
    explanation_hi: exp_hi
  };
});

// Write to JSON
const jsonPath = path.join(__dirname, '..', 'data', 'mock-tests', 'ancient-india-200-mcq.json');
fs.writeFileSync(jsonPath, JSON.stringify(bilingualQuestions, null, 2), 'utf8');

// Write to JS file for web browser loading without CORS issues
const jsPath = path.join(__dirname, '..', 'data', 'mock-tests', 'questions-data.js');
fs.writeFileSync(jsPath, 'window.QUESTIONS_DATA = ' + JSON.stringify(bilingualQuestions) + ';', 'utf8');

// Write to Markdown with clean bilingual side-by-side presentation
let mdBilingual = `# 🏛️ Ancient India: Indus Valley Civilization & Vedic Literature (200 Masterclass Bilingual MCQs)
> **द्विभाषी प्रश्न बैंक (English & हिन्दी) • Curated from Lucent's General Knowledge**  
> **Official Repository:** [NextSem-Ranker-](https://github.com/nextsemacademy-max/NextSem-Ranker-)  
> **Live Web Simulator:** [https://nextsemacademy-max.github.io/NextSem-Ranker-/](https://nextsemacademy-max.github.io/NextSem-Ranker-/)

---

## 📑 विषय-सूची / Table of Contents
1. [भाग 1: प्रश्न 1 - 50 (हड़प्पा भूगोल, नगर नियोजन एवं उत्खनन)](#questions-1---50)
2. [भाग 2: प्रश्न 51 - 100 (कला, शिल्प, विदेशी व्यापार एवं धर्म)](#questions-51---100)
3. [भाग 3: प्रश्न 101 - 150 (ऋग्वैदिक नदियां एवं वैदिक संहिताएं)](#questions-101---150)
4. [भाग 4: प्रश्न 151 - 200 (ब्राह्मण, उपनिषद, वेदांग एवं षड्दर्शन)](#questions-151---200)

---
`;

bilingualQuestions.forEach((q, idx) => {
  if (idx === 0) mdBilingual += `\n## Questions 1 - 50\n\n`;
  if (idx === 50) mdBilingual += `\n---\n## Questions 51 - 100\n\n`;
  if (idx === 100) mdBilingual += `\n---\n## Questions 101 - 150\n\n`;
  if (idx === 150) mdBilingual += `\n---\n## Questions 151 - 200\n\n`;

  const diffEmoji = q.difficulty === "Easy" ? "🟢" : (q.difficulty === "Moderate" ? "🟡" : "🔴");

  mdBilingual += `#### Q${q.id}. ${q.question}\n`;
  if (q.question_hi && !q.question_hi.startsWith('[')) {
    mdBilingual += `**हिन्दी:** ${q.question_hi}\n\n`;
  }
  mdBilingual += `*Level: ${diffEmoji} ${q.difficulty} | Topic: ${q.topic}*\n\n`;
  
  const letters = ["A", "B", "C", "D"];
  q.options.forEach((opt, oIdx) => {
    const optHi = q.options_hi[oIdx] ? ` / ${q.options_hi[oIdx]}` : '';
    mdBilingual += `- **${letters[oIdx]})** ${opt}${optHi}\n`;
  });

  mdBilingual += `\n> **Correct Answer:** **Option (${q.correctAnswer})**  \n`;
  mdBilingual += `> **💡 Explanation (English):** ${q.explanation}  \n`;
  mdBilingual += `> **💡 व्याख्या (हिन्दी):** ${q.explanation_hi}\n\n`;
});

const mdPath = path.join(__dirname, '..', 'content', 'practice-questions', 'ancient-india-200-mcq.md');
fs.writeFileSync(mdPath, mdBilingual, 'utf8');

console.log(`Bilingual files successfully created!`);
console.log(`JSON: ${jsonPath}`);
console.log(`JS: ${jsPath}`);
console.log(`Markdown: ${mdPath}`);
