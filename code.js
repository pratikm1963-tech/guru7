/** 
 * * MATESHWARI JYOTISH PEETH PHALADESH SANSTHAN * 
 * Multi-Scriptural, Time-Progression & Ultimate Dasha Engine
 * File Type: PURE JAVASCRIPT (JS) - Deployable on GitHub / Apps Script
 * Version: 108.7 Final (Unified Shastra & Ultimate Timeline)
 * Protocol: Abhay Kavach
 */

const SYSTEM_CONFIG = {
  name: "Mateshwari Jyotish Peeth Phaladesh Sansthan",
  version: "108.7",
  security: "Abhay Kavach"
};

// नक्षत्र एवं विंशोत्तरी महादशा स्वामी चक्र
const NAKSHATRA_LORDS = ["Ketu", "Venus", "Sun", "Moon", "Mars", "Rahu", "Jupiter", "Saturn", "Mercury"];

// 8 योगिनी दशाओं का 36 वर्षीय चक्र
const YOGINI_DASHAS = [
  { name: "Mangla (मंगला)", lord: "Moon", years: 1 },
  { name: "Pingla (पिंघला)", lord: "Sun", years: 2 },
  { name: "Dhanya (धन्या)", lord: "Jupiter", years: 3 },
  { name: "Bhramri (भ्रामरी)", lord: "Mars", years: 4 },
  { name: "Bhadrika (भद्रिका)", lord: "Mercury", years: 5 },
  { name: "Ulka (उल्का)", lord: "Saturn", years: 6 },
  { name: "Siddha (सिद्धा)", lord: "Venus", years: 7 },
  { name: "Sankata (संकटा)", lord: "Rahu", years: 8 }
];

/**
 * =========================================================================
 * 1. फलदीपिका नियम इंजन (PHALADEEPIKA ENGINE)
 * मुख्य फोकस: आजीविका (Career/Profession) और राज्यकृपा (Government)
 * =========================================================================
 */
const PhaladeepikaEngine = {
  getProfessionRule: function(sunHouse, jupiterHouse, mercuryHouse) {
    let insights = [];
    if (sunHouse === 10 || sunHouse === 1) {
      insights.push("【फलदीपिका - आजीविका अध्याय】: दशम/प्रथम का सूर्य जातक को राजकीय लाभ, प्रशासनिक प्रभुत्व और सरकारी क्षेत्र में उच्च पद का अचूक नियम देता है।");
    }
    if (mercuryHouse === 3 || mercuryHouse === 10) {
      insights.push("【फलदीपिका - आजीविका अध्याय】: बुध की स्थिति वाणिज्य, लेखन, कोडिंग और तकनीकी विश्लेषण से आजीविका निर्माण का नियम बनाती है।");
    }
    if (jupiterHouse === 5 || jupiterHouse === 9) {
      insights.push("【फलदीपिका - आजीविका अध्याय】: बृहस्पति का जीवकारक नियम जातक को बड़ा वित्तीय सलाहकार, उच्च परामर्शदाता या शिक्षण क्षेत्र में स्थापित करता है।");
    }
    return insights;
  }
};

/**
 * =========================================================================
 * 2. सारावली नियम इंजन (SARAVALI ENGINE)
 * मुख्य फोकस: चिकित्सा ज्योतिष (Medical/Health) और शारीरिक ऊर्जा
 * =========================================================================
 */
const SaravaliEngine = {
  getMedicalRule: function(planets) {
    let insights = [];
    if (planets.sun === 6 || planets.saturn === 6) {
      insights.push("【सारावली - रोग विचार】: षष्ठ भाव में सूर्य या शनि होने पर जातक को अस्थि जनित या वात विकार के प्रति सचेत रहना चाहिए।");
    }
    if (planets.moon === 5 && planets.rahu === 5) {
      insights.push("【सारावली - चित्त विचार】: पंचम भाव में चंद्रमा-राहु की स्थिति मानसिक भटकाव पैदा करती है, जिसे मंत्र बल से संतुलित किया जाता है।");
    }
    if (planets.mars === 8) {
      insights.push("【सारावली - अपघात विचार】: अष्टम का मंगल रक्त विकार या त्वरित चोट-चपेट का योग बनाता है। वाहन चलाते समय पूर्ण सावधानी रखें।");
    }
    return insights;
  }
};

/**
 * =========================================================================
 * 3. सर्वार्थ चिंतामणि नियम इंजन (SARVARTHA CHINTAMANI ENGINE)
 * मुख्य फोकस: धन, साम्राज्य और विशेष राजयोग (Wealth & Yogas)
 * =========================================================================
 */
const SarvarthaChintamaniEngine = {
  getYogaRules: function(planets) {
    let insights = [];
    if (planets.sun && planets.mercury && planets.sun === planets.mercury) {
      insights.push("【सर्वार्थ चिंतामणि - राजयोग अध्याय】: सूर्य-बुध की युति से उत्पन्न बुधादित्य योग जातक को तीक्ष्ण बुद्धि और असाधारण मैनेजमेंट क्षमता प्रदान करता है।");
    }
    if (planets.saturn === 8 || planets.mars === 6) {
      insights.push("【सर्वार्थ चिंतामणि - अपवाद नियम】: त्रिक भावों का कूटनीतिक नियम। घोर संघर्ष के बाद जातक को अचानक अप्रत्याशित बड़ी सफलता मिलती है।");
    }
    if (planets.jupiter === 2 || planets.jupiter === 11) {
      insights.push("【सर्वार्थ चिंतामणि - धन भाव विचार】: एकादश/द्वितीय का गुरु जातक के जीवन में लिक्विड कैश और संचित धन का स्थायी प्रवाह सुनिश्चित करता है।");
    }
    return insights;
  }
};

/**
 * =========================================================================
 * 4. बृहदजातक नियम इंजन (BRIHAD JATAKA ENGINE)
 * मुख्य फोकस: जातक का मूल स्वभाव, प्रवृत्तियाँ और आंतरिक गुण
 * =========================================================================
 */
const BrihadJatakaEngine = {
  getNatureRules: function(planets) {
    let insights = [];
    if (planets.moon === 1) {
      insights.push("【बृहदजातक - जन्माध्याय】: लग्न का चंद्रमा जातक को अत्यंत सौम्य, संवेदनशील, कलाप्रेमी और समाज में लोकप्रिय बनाता है।");
    }
    if (planets.ketu === 1 || planets.rahu === 1) {
      insights.push("【बृहदजातक - स्वभाव अध्याय】: लग्न में छाया ग्रहों की स्थिति जातक को लीक से हटकर सोचने वाला (Out-of-the-box thinker) और दार्शनिक बनाती है।");
    }
    if (planets.saturn === 1 || planets.saturn === 10) {
      insights.push("【बृहदजातक - कर्मफल विचार】: शनि का प्रभाव जातक को गंभीर, अनुशासित, न्यायप्रिय और अपने सिद्धांतों पर अडिग रहने वाला बनाता है।");
    }
    return insights;
  }
};

/**
 * =========================================================================
 * गणितीय इंजन - दशा एवं अंश विश्लेषण (Math Engine)
 * =========================================================================
 */
const AstroMathEngine = {
  getDegreeAvastha: function(degree) {
    if (degree >= 0 && degree < 6) return "बाल अवस्था (25% सक्रियता)";
    if (degree >= 6 && degree < 12) return "कुमार अवस्था (50% सक्रियता)";
    if (degree >= 12 && degree < 18) return "युवा अवस्था (100% पूर्ण-स्केल फल)";
    if (degree >= 18 && degree < 24) return "वृद्ध अवस्था (न्यूनतम प्रभाव)";
    return "मृत अवस्था (Passive Results)";
  },

  calculateTimeline: function(degrees, houses, age) {
    let moonDegree = degrees.moon || 13.20;
    let totalMinutes = moonDegree * 60;
    let nakshatraLengthMinutes = 13.3333 * 60; 
    
    let nakshatraIndex = Math.floor(totalMinutes / nakshatraLengthMinutes) % 27;
    
    let vimsottariLord = NAKSHATRA_LORDS[nakshatraIndex % 9];
    let yoginiIndex = (nakshatraIndex + 3) % 8;
    let currentYogini = YOGINI_DASHAS[yoginiIndex];

    // चारों स्वतंत्र महाग्रंथों के इंजनों से परिणाम निकालना
    let professionInsights = PhaladeepikaEngine.getProfessionRule(houses.sun, houses.jupiter, houses.mercury);
    let medicalInsights = SaravaliEngine.getMedicalRule(houses);
    let yogaInsights = SarvarthaChintamaniEngine.getYogaRules(houses);
    let natureInsights = BrihadJatakaEngine.getNatureRules(houses);

    // अंशों की अवस्था रिपोर्ट तैयार करना
    let degreeStatusReport = [];
    Object.keys(degrees).forEach(planet => {
      let planetHouse = houses[planet];
      let planetDeg = degrees[planet];
      if (planetHouse) {
        let avastha = this.getDegreeAvastha(planetDeg);
        degreeStatusReport.push(`◆ [${planet.toUpperCase()}] स्पष्ट अंश: ${planetDeg}° -> ${avastha} (भाव: ${planetHouse})`);
      }
    });

    return {
      vimsottariLord: vimsottariLord,
      yoginiName: currentYogini.name,
      nature: natureInsights,
      profession: professionInsights,
      yogas: yogaInsights,
      medical: medicalInsights,
      degreeStatus: degreeStatusReport
    };
  }
};

/**
 * =========================================================================
 * मुख्य प्रबंधक फ़ंक्शन (Main Gateway Orchestrator)
 * =========================================================================
 */
function generateMateshwariPrediction(inputData) {
  const locationMeta = inputData.location || { village: "Not Specified", pinCode: "000000" };
  const age = parseInt(inputData.age) || 16;
  
  const degrees = inputData.degrees || { sun: 14.5, jupiter: 16.2, mercury: 8.4, moon: 13.20, saturn: 15.1 };
  const houses = inputData.planets || { sun: 10, jupiter: 5, mercury: 3, moon: 1, saturn: 6 };
  
  let report = AstroMathEngine.calculateTimeline(degrees, houses, age);
  
  // आयु अनुसार प्रामाणिक कालप्रगति (Timeline Analysis) का निर्माण
  let timelineReport = [
    `● 15 वर्ष का आयु चक्र (प्रारंभिक मानसिक हलचल):\nविंशोत्तरी महादशा स्वामी [${report.vimsottariLord}] के प्रभाव से आंतरिक मन्थन शुरू। जातक के स्वभाव में सूक्ष्म परिवर्तन दिखाई देने लगते हैं।\n${report.nature.length > 0 ? report.nature.join("\n") : "जातक शांत व अध्ययनप्रिय रहेगा।"}`,
    
    `● 16 वर्ष का आयु चक्र (करियर दिशा निर्धारण):\nस्पष्ट ग्रहों के अंश जागृत होने लगे हैं। योगिनी दशा चक्र में [${report.yoginiName}] का प्रभाव आ चुका है। जातक अपनी मुख्य विधा (चिकित्सा, तकनीकी, वकालत या राजकीय पद) की ओर कदम बढ़ाएगा।\n${report.profession.length > 0 ? report.profession.join("\n") : "करियर का मार्ग सामान्य गोचर के अधीन है।"}`,
    
    `● 18 वर्ष का आयु चक्र (पूर्ण फलादेश बिंदु - महा-सक्रियता):\nइस समय विंशोत्तरी की अंतर्दशा और योगिनी का महाचक्र कुंडली के मुख्य कर्म एक्सिस पर सीधा प्रहार कर रहा है। सभी महाग्रंथों के नियम और राजयोग पूर्ण क्षमता से सक्रिय हो चुके हैं:\n\n[ग्रहों की जागृति अवस्था]\n${report.degreeStatus.join("\n")}\n\n[विशेष योग एवं साम्राज्य विचार]\n${report.yogas.length > 0 ? report.yogas.join("\n") : "सामान्य ग्रहीय योग।"}\n\n[स्वास्थ्य एवं चिकित्सा विचार]\n${report.medical.length > 0 ? report.medical.join("\n") : "स्वास्थ्य सामान्यतः उत्तम रहेगा।"}`
  ];

  return {
    meta: {
      source: SYSTEM_CONFIG.name,
      version: SYSTEM_CONFIG.version,
      locationPrecision: locationMeta,
      timestamp: new Date().toISOString()
    },
    prediction: {
      coreLine: "मातेश्वरी ज्योतिष पीठ - बहु-शास्त्रीय विंशोत्तरी एवं योगिनी दशा कालप्रगति फलादेश संस्थान",
      timelineAnalysis: timelineReport.join("\n\n\n"),
      textReferences: ["Brihat Jataka", "Saravali", "Phaladeepika", "Sarvartha Chintamani"]
    },
    remedies: [
      `वर्तमान कालचक्र के अनुसार विंशोत्तरी स्वामी [${report.vimsottariLord}] और योगिनी स्वरूपा [${report.yoginiName}] के निमित्त ध्यान व मंत्र जप करें।`,
      "प्रातःकाल माता-पिता व गुरुजनों का चरण स्पर्श करें। इससे लग्नेश मजबूत होता है और जीवन के सभी एक्सिस सदैव जाग्रत रहते हैं।"
    ]
  };
}

// Google Web API POST Handler (मोबाइल ऐप फ्रंटएंड से जुड़ने का मुख्य द्वार)
function doPost(e) {
  try {
    let jsonInput = JSON.parse(e.postData.contents);
    let outputData = generateMateshwariPrediction(jsonInput);
    return ContentService.createTextOutput(JSON.stringify(outputData))
                         .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: error.message }))
                         .setMimeType(ContentService.MimeType.JSON);
  }
}
