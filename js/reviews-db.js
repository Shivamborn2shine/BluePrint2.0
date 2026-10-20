/**
 * ===========================================================================
 * BLUE DOOR CAFE & BAKES — CENTRAL REVIEWS DATABASE (REVIEWS_DB)
 * ===========================================================================
 * 
 * Manage all AI review prompt engineering templates from this SINGLE file.
 * To add, edit, or customize review phrases, edit the sections below:
 *   - openings:   Introductory sentences
 *   - categories: Sentences triggered by selected food/dish chips
 *   - closings:   Polite concluding recommendations
 * ===========================================================================
 */

const REVIEWS_DB = {
    // =======================================================================
    // 1. ENGLISH REVIEWS
    // =======================================================================
    ENGLISH: {
        openings: [
            "Hands down one of the coziest cafes in town! ",
            "Visited Blue Door Café & Bakes today and was completely blown away. ",
            "If you have a sweet tooth or love good coffee, this place is heaven! ",
            "Such a charming aesthetic cafe with genuinely delicious food. ",
            "Tried this spot on a friend's recommendation and it exceeded all expectations! ",
            "Easily a 5-star experience from the ambience to the dessert counter. ",
            "Finally found my new favorite weekend brunch spot! "
        ],
        categories: {
            ALL: [
                "Everything we ordered was crafted to perfection. Zero complaints, genuine 10/10 quality.",
                "Loved every single item! The vibe is so relaxing and the bakes are top notch.",
                "The perfect blend of warm hospitality, artisanal pastries, and rich brews."
            ],
            BISCOFF: [
                "The Lotus Biscoff cheesecake is an absolute showstopper! Incredibly creamy and perfectly balanced.",
                "If you visit, you MUST try the Lotus Biscoff cheesecake. Hands down the best in the city!"
            ],
            TIRAMISU: [
                "The Tiramisu cup with ladyfinger biscuit was heavenly! Rich, velvety coffee flavor.",
                "Authentic Italian style tiramisu done right. Soft, creamy and not overly sweet."
            ],
            PANCAKES: [
                "The blueberry and banana pancakes were so fluffy and warm! Best breakfast ever.",
                "Pancakes were golden perfection, light as a cloud and generous with fresh toppings."
            ],
            PASTA: [
                "The Penne Arrabbiata pasta had the perfect spicy kick and fresh herbs! Full of flavor.",
                "Loved their savory pasta options — rich, savory sauce cooked al dente."
            ],
            CAKES: [
                "The cake vitrine is dangerous! The orange glaze cake and spiced carrot cake are mouthwatering.",
                "Ordered their bento floral cake for a birthday and it was both gorgeous and delectable!"
            ],
            COFFEE: [
                "The coffee is roasted to perfection! Smooth, aromatic and gave the best morning boost.",
                "Specialty coffee lovers will appreciate the quality of their beans and barista skill."
            ],
            AMBIANCE: [
                "The aesthetic interior and soothing music make this the ultimate chill spot.",
                "Very cozy, aesthetic corners, ideal for work sessions or catchups with friends."
            ],
            AMBIENCE: [
                "The aesthetic interior and soothing music make this the ultimate chill spot.",
                "Very cozy, aesthetic corners, ideal for work sessions or catchups with friends."
            ],
            SERVICE: [
                "The staff is exceptionally sweet, polite and fast with their recommendations.",
                "Super warm hospitality and prompt service even during busy hours."
            ],
            CLEANLINESS: [
                "Spotlessly clean dining area, sparkling cutlery and great hygiene standards.",
                "Very clean, sanitized and well-kept space with aesthetic seating."
            ],
            BAKES: [
                "The artisanal bakes and croissants are so flaky and fresh! Baked daily with 100% real butter.",
                "The dessert counter is full of fresh morning bakes and pastries made to perfection."
            ],
            FOOD: [
                "Every savory dish and snack is packed with delicious flavor and fresh ingredients.",
                "The food is prepared fresh with premium quality ingredients and mouthwatering taste."
            ],
            VALUE: [
                "Generous portions and premium cafe quality at very fair prices. Total value for money!",
                "Great pricing for the level of taste, hygiene and cafe presentation."
            ]
        },
        closings: [
            " Can't wait to visit again!",
            " 10/10 would highly recommend to everyone.",
            " Definitely ordering their cakes for my next celebration.",
            " A must-visit for every food lover!",
            " Will definitely be coming back every weekend!"
        ]
    },

    // =======================================================================
    // 2. HINGLISH REVIEWS (Conversational Hindi + English)
    // =======================================================================
    HINGLISH: {
        openings: [
            "bhai sach batau toh Blue Door Cafe literally slaps! ",
            "dosto ke sath aana yahan ka best decision tha. ",
            "ngl this place is a total aesthetic W. ",
            "dehradun me itna mast cafe aur bakery pehli baar dekha. ",
            "sweet craving ho rahi thi toh idhar aagaye aur dil khush ho gaya. "
        ],
        categories: {
            ALL: [
                "khana, coffee aur bakes sab kuch ek number the.",
                "quality aur taste dono top tier the, zero complaints fr.",
                "vibe ekdum cozy thi aur sab kuch freshly baked mila."
            ],
            BISCOFF: [
                "inka Lotus Biscoff cheesecake must try hai guys, muh me pighal jata hai!",
                "biscoff cheesecake ka texture aur crunch literally out of this world tha."
            ],
            TIRAMISU: [
                "tiramisu cup ka coffee flavor aur creaminess ekdum authentic laga.",
                "tiramisu lovers ke liye ye place heaven hai, 10/10 swaad!"
            ],
            PANCAKES: [
                "pancakes super fluffy aur tasty the, blueberry combo was so good.",
                "subah ke breakfast ke liye inke pancakes best option hain."
            ],
            PASTA: [
                "penne pasta ka spicy arrabbiata sauce ekdum restaurant-style hit karta hai.",
                "pasta ki seasoning aur fresh herbs ka flavor bohot badhiya tha."
            ],
            CAKES: [
                "bento cakes aur pastry counter dekh ke muh me paani aa gaya. Bohot fresh the!",
                "birthday cake order kiya tha, look aur taste dono 10/10 the."
            ],
            COFFEE: [
                "coffee lovers ko inki specialty brew bohot pasand aayegi.",
                "proper artisanal coffee vibes mili yahan aake."
            ],
            AMBIANCE: [
                "interior aur aesthetic vibes photos ke liye ekdum perfect hain.",
                "peaceful mahool aur soft music, baith ke relax karne ke liye best jagah."
            ],
            AMBIENCE: [
                "interior aur aesthetic vibes photos ke liye ekdum perfect hain.",
                "peaceful mahool aur soft music, baith ke relax karne ke liye best jagah."
            ],
            SERVICE: [
                "staff ka behavior bohot polite aur welcoming tha.",
                "order bohot jaldi serve hua aur hospitality lajawab thi."
            ],
            CLEANLINESS: [
                "cleanliness 10/10 thi, kitchen aur tables ekdum neat and clean.",
                "proper hygiene standards maintain kiye hue hain."
            ],
            BAKES: [
                "freshly baked croissants aur pastries ka taste ekdum top-notch tha.",
                "subah ke taaza bakes aur aroma ne dil khush kar diya."
            ],
            FOOD: [
                "food quality aur portion size dono ekdum on point the.",
                "yahan ka tasty food aur presentation dono 10/10 the."
            ],
            VALUE: [
                "rates quality aur quantity ke hisab se ekdum justified aur reasonable hain.",
                "proper value for money experience raha, worth every single penny."
            ]
        },
        closings: [
            " pakka wapas aayenge!",
            " highly recommended from my side.",
            " 10/10 experience raha.",
            " paisa vasool ekdum, must visit!"
        ]
    },

    // =======================================================================
    // 3. HINDI REVIEWS (Devanagari Script)
    // =======================================================================
    HINDI: {
        openings: [
            "ब्लू डोर कैफे एंड बेक्स का अनुभव बहुत ही शानदार रहा! ",
            "देहरादून में सबसे बेहतरीन और खूबसूरत कैफे में से एक! ",
            "अगर आपको स्वादिष्ट डेसर्ट और बेहतरीन कॉफी पसंद है, तो यहाँ ज़रूर आएं। ",
            "शानदार माहौल और लाजवाब स्वाद, पूरी तरह से 5-स्टार अनुभव!"
        ],
        categories: {
            ALL: [
                "यहाँ का खाना और बेकरी का हर आइटम बहुत ही ताज़ा और स्वादिष्ट था।",
                "बहुत ही सुकून भरा माहौल और बेहतरीन सर्विस। सब कुछ बहुत बढ़िया लगा।"
            ],
            BISCOFF: [
                "लोटस बिस्कॉफ चीज़केक का स्वाद वाकई लाजवाब है! एकदम क्रीमी और परफेक्ट।",
                "बिस्कॉफ चीज़केक यहाँ की बेस्ट डिश है, इसका स्वाद हमेशा याद रहेगा।"
            ],
            TIRAMISU: [
                "तिरामिसू कप बहुत ही स्वादिष्ट और फ्रेश था। कॉफी और मस्कार्पोन का बेहतरीन कॉम्बिनेशन!",
                "असली इटैलियन तिरामिसू का स्वाद मिला, मीठा भी एकदम संतुलित था।"
            ],
            PANCAKES: [
                "ब्लूबेरी पैनकेक्स बहुत ही सॉफ्ट और फ्लफी थे, ऊपर से मेपल सिरप बहुत बढ़िया लगा।",
                "नाश्ते के लिए पैनकेक्स एकदम बेस्ट हैं। बहुत हल्का और टेस्टी।"
            ],
            PASTA: [
                "पेने अराबियाटा पास्ता बहुत ही टेस्टी और स्पाइसी था, सॉस एकदम फ्रेश थी।",
                "पास्ता बहुत ही बढ़िया बना था, इटैलियन फ्लेवर्स पूरी तरह से महसूस हुए।"
            ],
            CAKES: [
                "बेंटो केक और कैरट केक का स्वाद बेहद उम्दा था। डिज़ाइन भी बहुत सुंदर था।",
                "केक बहुत ही फ्रेश और सॉफ्ट थे, हर बाइट में बेहतरीन क्वालिटी का अहसास।"
            ],
            COFFEE: [
                "यहाँ की कॉफी बहुत ही स्ट्रॉन्ग और रिच है। कॉफी लवर्स के लिए बेस्ट जगह।",
                "कैपुचीनो और कोल्ड कॉफी दोनों का स्वाद बहुत ही लाजवाब रहा।"
            ],
            AMBIANCE: [
                "कैफे का इंटीरियर बहुत ही खूबसूरत और सुकून देने वाला है। फोटो खिंचवाने के लिए बेस्ट स्पॉट!",
                "शांतिपूर्ण माहौल और अच्छी सिटिंग अरेंजमेंट, दोस्तों और फैमिली के साथ बैठने के लिए शानदार।"
            ],
            AMBIENCE: [
                "कैफे का इंटीरियर बहुत ही खूबसूरत और सुकून देने वाला है। फोटो खिंचवाने के लिए बेस्ट स्पॉट!",
                "शांतिपूर्ण माहौल और अच्छी सिटिंग अरेंजमेंट, दोस्तों और फैमिली के साथ बैठने के लिए शानदार।"
            ],
            SERVICE: [
                "स्टाफ का व्यवहार बहुत विनम्र और मददगार था।",
                "सर्विस बहुत तेज़ और शानदार थी।"
            ],
            CLEANLINESS: [
                "कैफे बहुत ही साफ़-सुथरा और स्वच्छ है।",
                "हाइजीन का पूरा ध्यान रखा गया है।"
            ],
            BAKES: [
                "यहाँ के फ्रेश बेक्स और पेस्ट्री बेहद ताज़ा और स्वादिष्ट हैं।",
                "ताज़े बने बेक्स और क्रॉसों का स्वाद वाकई लाजवाब था।"
            ],
            FOOD: [
                "खाने का स्वाद बहुत ही लज़ीज़ और बेहतरीन था।",
                "हर डिश में ताज़गी और बेहतरीन स्वाद महसूस होता है।"
            ],
            VALUE: [
                "बहुत ही उचित दाम और बेहतरीन क्वालिटी, एकदम पैसा वसूल अनुभव!",
                "शानदार स्वाद और बेहतरीन सर्विस के हिसाब से कीमतें बहुत वाजिब हैं।"
            ]
        },
        closings: [
            " स्टाफ का व्यवहार बहुत विनम्र और मददगार था। हम दोबारा ज़रूर आएंगे!",
            " क्लेमेंट टाउन आने वाले सभी लोगों को यहाँ ज़रूर आना चाहिए। शानदार अनुभव!",
            " ज़रूर विज़िट करें, आपको बहुत पसंद आएगा!"
        ]
    },

    // =======================================================================
    // 4. KANNADA REVIEWS
    // =======================================================================
    KANNADA: {
        openings: [
            "ಬ್ಲೂ ಡೋರ್ ಕೆಫೆ ಮತ್ತು ಬೇಕ್ಸ್‌ನಲ್ಲಿ ಅದ್ಭುತ ಅನುಭವ! ",
            "ಸ್ನೇಹಿತರ ಶಿಫಾರಸಿನ ಮೇರೆಗೆ ಇಲ್ಲಿಗೆ ಭೇಟಿ ನೀಡಿದೆ ಮತ್ತು ನಿರೀಕ್ಷೆಗೂ ಮೀರಿದ ಅನುಭವ ಸಿಕ್ಕಿತು! ",
            "ನೀವು ಸಿಹಿತಿಂಡಿಗಳು ಮತ್ತು ಉತ್ತಮ ಕಾಫಿಯನ್ನು ಇಷ್ಟಪಡುವವರಾಗಿದ್ದರೆ ಇದು ಸ್ವರ್ಗ! ",
            "ಅತ್ಯಂತ ಆಕರ್ಷಕ ಆಂಬಿಯನ್ಸ್ ಮತ್ತು ರುಚಿಕರವಾದ ತಿಂಡಿಗಳು. "
        ],
        categories: {
            ALL: [
                "ನಾವು ಆರ್ಡರ್ ಮಾಡಿದ ಪ್ರತಿಯೊಂದು ಪದಾರ್ಥವೂ ಅತ್ಯುತ್ತಮವಾಗಿತ್ತು. ಸಂಪೂರ್ಣ 10/10 ಗುಣಮಟ್ಟ.",
                "ಉತ್ತಮ ಆತಿಥ್ಯ, ಅದ್ಭುತ ಪೇಸ್ಟ್ರಿಗಳು ಮತ್ತು ಪರಿಮಳಯುಕ್ತ ಕಾಫಿಯ ಪರಿಪೂರ್ಣ ಸಮ್ಮಿಲನ."
            ],
            BISCOFF: [
                "ಲೋಟಸ್ ಬಿಸ್ಕಾಫ್ ಚೀಸ್‌ಕೇಕ್ ನಿಜವಾಗಿಯೂ ಅದ್ಭುತವಾಗಿದೆ! ಅತ್ಯಂತ ಕ್ರೀಮಿ ಮತ್ತು ಪರ್ಫೆಕ್ಟ್ ಬ್ಯಾಲೆನ್ಸ್ಡ್.",
                "ಇಲ್ಲಿನ ಲೋಟಸ್ ಬಿಸ್ಕಾಫ್ ಚೀಸ್‌ಕೇಕ್ ಖಂಡಿತವಾಗಿಯೂ ಟ್ರೈ ಮಾಡಲೇಬೇಕು!"
            ],
            TIRAMISU: [
                "ತಿರಾಮಿಸು ಕಪ್ ತುಂಬಾ ರುಚಿಕರವಾಗಿತ್ತು. ಕಾಫಿಯ ಪರಿಮಳ ಮತ್ತು ಕ್ರೀಮ್ ಅದ್ಭುತವಾಗಿತ್ತು!",
                "ಅಸಲಿ ಇಟಾಲಿಯನ್ ಶೈಲಿಯ ತಿರಾಮಿಸು, ಹೆಚ್ಚು ಸಿಹಿಯಲ್ಲದೆ ಹಿತಕರವಾಗಿತ್ತು."
            ],
            PANCAKES: [
                "ಬ್ಲೂಬೆರ್ರಿ ಪ್ಯಾನ್‌ಕೇಕ್‌ಗಳು ತುಂಬಾ ಮೃದು ಮತ್ತು ತಾಜಾವಾಗಿದ್ದವು! ಬೆಸ್ಟ್ ಬ್ರೇಕ್‌ಫಾಸ್ಟ್.",
                "ಪ್ಯಾನ್‌ಕೇಕ್‌ಗಳು ತುಂಬಾ ಫ್ಲಫಿ ಮತ್ತು ರುಚಿಕರವಾಗಿದ್ದವು."
            ],
            PASTA: [
                "ಪೆನ್ನೆ ಪಾಸ್ತಾ ತುಂಬಾ ರುಚಿಕರ ಮತ್ತು ಮಸಾಲೆಯುಕ್ತವಾಗಿತ್ತು, ಫ್ರೆಶ್ ಹರ್ಬ್ಸ್ ಕೂಡ ಇತ್ತು.",
                "ಇಲ್ಲಿನ ಪಾಸ್ತಾ ತುಂಬಾ ಇಷ್ಟವಾಯಿತು, ರಿಚ್ ಅಂಡ್ ಟೇಸ್ಟಿ."
            ],
            CAKES: [
                "ಇಲ್ಲಿನ ಕೇಕ್‌ಗಳು ತುಂಬಾ ಫ್ರೆಶ್ ಮತ್ತು ಸಾಫ್ಟ್ ಆಗಿವೆ.",
                "ಆರ್ಟಿಸಾನಲ್ ಕೇಕ್‌ಗಳ ವಿನ್ಯಾಸ ಮತ್ತು ರುಚಿ ಎರಡೂ ಅದ್ಭುತ!"
            ],
            COFFEE: [
                "ಇಲ್ಲಿನ ಸ್ಪೆಷಾಲಿಟಿ ಕಾಫಿ ಪರಿಮಳ ಮತ್ತು ರುಚಿ ತುಂಬಾ ಚೆನ್ನಾಗಿದೆ. ಕಾಫಿ ಪ್ರಿಯರಿಗೆ ಬೆಸ್ಟ್ ಸ್ಥಳ.",
                "ಕಾಫಿ ಬೀನ್ಸ್ ಕ್ವಾಲಿಟಿ ಮತ್ತು ಬರಿಸ್ತಾ ಕೌಶಲ್ಯ ನಿಜವಾಗಿಯೂ ಮೆಚ್ಚುವಂತದ್ದು."
            ],
            AMBIANCE: [
                "ಕೆಫೆಯ ಇಂಟೀರಿಯರ್ ಮತ್ತು ಆಂಬಿಯನ್ಸ್ ತುಂಬಾ ಶಾಂತಿಯುತವಾಗಿದೆ. ಫೋಟೋಗಳಿಗೆ ಬೆಸ್ಟ್ ಸ್ಪಾಟ್!",
                "ಸ್ನೇಹಿತರೊಂದಿಗೆ ಸಮಯ ಕಳೆಯಲು ತುಂಬಾ ಸುಂದರವಾದ ಜಾಗ."
            ],
            AMBIENCE: [
                "ಕೆಫೆಯ ಇಂಟೀರಿಯರ್ ಮತ್ತು ಆಂಬಿಯನ್ಸ್ ತುಂಬಾ ಶಾಂತಿಯುತವಾಗಿದೆ. ಫೋಟೋಗಳಿಗೆ ಬೆಸ್ಟ್ ಸ್ಪಾಟ್!",
                "ಸ್ನೇಹಿತರೊಂದಿಗೆ ಸಮಯ ಕಳೆಯಲು ತುಂಬಾ ಸುಂದರವಾದ ಜಾಗ."
            ],
            SERVICE: [
                "ಸಿಬ್ಬಂದಿ ತುಂಬಾ ವಿನಮ್ರರಾಗಿದ್ದಾರೆ ಮತ್ತು ತ್ವರಿತ ಸೇವೆ ನೀಡುತ್ತಾರೆ.",
                "ಉತ್ತಮ ಆತಿಥ್ಯ ಮತ್ತು ಸೂಪರ್ ಫಾಸ್ಟ್ ಸರ್ವಿಸ್."
            ],
            CLEANLINESS: [
                "ತುಂಬಾ ಸ್ವಚ್ಛ ಮತ್ತು ನೈರ್ಮಲ್ಯಯುತ ವಾತಾವರಣ.",
                "ಕ್ಲೀನ್‌ಲಿನೆಸ್ ಮತ್ತು ಹೈಜೀನ್‌ಗೆ ಪೂರ್ಣ ಅಂಕಗಳು."
            ]
        },
        closings: [
            " ಪ್ರತಿಯೊಬ್ಬರೂ ಖಂಡಿತ ಭೇಟಿ ನೀಡಲೇಬೇಕಾದ ಸ್ಥಳ!",
            " ಮತ್ತೆ ಮತ್ತೆ ಭೇಟಿ ನೀಡಲು ಇಷ್ಟಪಡುತ್ತೇನೆ!",
            " 10/10 ಎಲ್ಲರಿಗೂ ಶಿಫಾರಸು ಮಾಡುತ್ತೇನೆ."
        ]
    }
};

// ===========================================================================
// EXPORTS FOR BROWSER & MODULE SCOPES
// ===========================================================================
if (typeof window !== 'undefined') {
    window.REVIEWS_DB = REVIEWS_DB;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { REVIEWS_DB };
}
