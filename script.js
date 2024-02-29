const questions = [
    {
        question:"वह समूह कौन-सा है, जिसकी सदस्यता जन्म से निर्धारित होती है तथा आजन्म रहती है ?",
        answers: [
            { text: "जाति", correct: true},
            { text: "वर्ग", correct: false},
            { text: "वर्ण", correct: false},
            { text: "धर्म", correct: false},
        ] 
    },
    {
        question:"जाति व्यवस्था का व्यवसायात्मक सिद्धांत के प्रतिपादक कौन है ?",
        answers: [
            { text: "रिजले", correct: true},
            { text: "धूरिये", correct: false},
            { text: "नेसफिल्ड", correct: false},
            { text: "मार्क्स", correct: false},
        ] 
    },
    {
        question:"किस जनजाति में परीक्षा विवाह प्रचलित है ?",
        answers: [
            { text: "नागा", correct: false},
            { text: "बिरहोर", correct: false},
            { text: "भील", correct: true},
            { text: "संथाल", correct: false},
        ] 
    },
    {
        question:"‘महर’ का संबंध किस विवाह से है ?",
        answers: [
            { text: "मुस्लिम", correct: true},
            { text: "हिन्दू", correct: false},
            { text: "सिख", correct: false},
            { text: "इनमें से सभी", correct: false},
        ] 
    },
    {
        question:"जिन व्यक्तियों के बीच रक्त या विवाह का प्रत्यक्ष संबंध होता है, उसे किस श्रेणी का नातेदारी कहा जाता है ?",
        answers: [
            { text: "प्राथमिक नातेदारी", correct: true},
            { text: "द्वितीयक नातेदारी", correct: false},
            { text: "तृतीयक नातेदारी", correct: false},
            { text: "उपर्युक्त कोई नहीं", correct: false},
        ] 
    },
    {
        question:"जब व्यक्ति प्राथमिक नातेदार के प्राथमिक संबंधी होते है ] उसे किस श्रेणी का नातेदार कहा जाता है ?",
        answers: [
            { text: "प्राथमिक नातेदारी", correct: false},
            { text: "द्वितीयक नातेदारी", correct: true},
            { text: "तृतीयक नातेदारी", correct: false},
            { text: "उपर्युक्त कोई नहीं", correct: false},
        ] 
    },
    {
        question:"जब व्यक्ति द्वितीयक नातेदार का प्राथमिक नातेदार होता है तो इस श्रेणी के नातेदारी को क्या कहा जाता है ?",
        answers: [
            { text: "प्राथमिक नातेदारी", correct: false},
            { text: "द्वितीयक नातेदारी", correct: false},
            { text: "तृतीयक नातेदारी", correct: true},
            { text: "उपर्युक्त कोई नहीं", correct: false},
        ] 
    },
    {
        question:"जनजातीय विवाह का स्वरूप क्या होता है ?",
        answers: [
            { text: "अन्तर्विवाही", correct: true},
            { text: "बहुविवाह", correct: false},
            { text: "स्प्रवर अन्तर्विवाही", correct: false},
            { text: "उपर्युक्त कोई नहीं", correct: false},
        ] 
    },
    {
        question:"हिन्दू समाज में किस प्रकार के विवाह प्रचलित हैं ?",
        answers: [
            { text: "बहुर्विवाह", correct: false},
            { text: "अन्तर्विवाह", correct: true},
            { text: "सप्तवर अन्तर्विवाह", correct: false},
            { text: "उपर्युक्त कोई नहीं", correct: false},
        ] 
    },
    {
        question:"‘फैमिली’ शब्द की उत्पत्ति किस भाषा के शब्द से हुई है ?",
        answers: [
            { text: "लैटिन", correct: true},
            { text: "फ्रेंच", correct: false},
            { text: "संस्कृत", correct: false},
            { text: "उर्दू", correct: false},
        ] 
    },
    {
        question:" ‘द एलिमेन्ट्री फॉर्स ऑफ रिलिजियस लाइफ’ पुस्तक किसने लिखी है ?",
        answers: [
            { text: "मैक्स मूलर", correct: false},
            { text: "स्पेंन्सर", correct: false},
            { text: "दुर्खिम", correct: true},
            { text: "मैक्स वेबर", correct: false},
        ] 
    },
    {
        question:"इनमें से कौन जाति व्यवस्था की देन है ?",
        answers: [
            { text: "शोषण", correct: false},
            { text: "असमानता", correct: false},
            { text: "जातिवाद", correct: true},
            { text: "उपरोक्त सभी", correct: false},
        ] 
    },
    {
        question:"प्रायः संयुक्त परिवार का कर्ता कौन होता है ?", 
        answers: [
            { text: "सबसे बुजुर्ग पुरुष", correct: true},
            { text: "सबसे बुजुर्ग महिला", correct: false},
            { text: "पढ़ा-लिखा व्यक्ति", correct: false},
            { text: "ज्येष्ठ पुत्र", correct: false},
        ] 
    },
    {
        question:"निम्नलिखित में क्या संयुक्त परिवार का प्रकार्य नहीं हैं",
        answers: [
            { text: "सामाजिक सुरक्षा", correct: false},
            { text: "आर्थिक सुरक्षा", correct: true},
            { text: "व्यक्तिवादिता", correct: false},
            { text: "मानसिक सुरक्षा", correct: false},
        ] 
    },
    {
        question:"जाति का आधार क्या है ?",
        answers: [
            { text: "भाग्य", correct: false},
            { text: "कर्म", correct: false},
            { text: "पुनर्जन्म", correct: false},
            { text: "जन्म", correct: true},
        ] 
    },
    {
        question:"बहुपति विवाह किस जनजाति में पाया जाता है ?",
        answers: [
            { text: "संथाल", correct: false},
            { text: "टोडा", correct: true},
            { text: "मुंडा", correct: false},
            { text: "खस", correct: false},
        ] 
    },
    {
        question:"‘चाचा’ नातेदारी के किस श्रेणी के अंतर्गत आता है ?",
        answers: [
            { text: "प्राथमिक", correct: false},
            { text: "द्वितीयक", correct: true},
            { text: "तृतीयक", correct: false},
            { text: "इनमें से कोई नहीं", correct: false},
        ] 
    },
    {
        question:"भारतीय समाज में सामाजिक स्तरीकरण का बुनियादी आधार क्या है ?",
        answers: [
            { text: "धन एवं सम्पत्ति", correct: false},
            { text: "जाति", correct: true},
            { text: "परिवार", correct: false},
            { text: "धर्म", correct: false},
        ] 
    },
    {
        question:"भारत का सबसे बड़ा जनजातीय समूह कौन है ?",
        answers: [
            { text: "संथाल", correct: false},
            { text: "मुंडा", correct: false},
            { text: "भील", correct: true},
            { text: "गोंड", correct: false},
        ] 
    },
    {
        question:"संयुक्त परिवार की प्रकृति होती है",
        answers: [
            { text: "पूँजीवादी", correct: false},
            { text: "समाजवादी", correct: true},
            { text: "साम्यवादी", correct: false},
            { text: "अराजकतावादी", correct: false},
        ] 
    },
    {
        question:"‘दि फेमिली’ नामक पुस्तक किसने लिखी ?",
        answers: [
            { text: "बर्गेस एवं लॉक", correct: true},
            { text: "इलियट एवं मेटिल", correct: false},
            { text: "ऑगबर्न एवं निमकाफ", correct: false},
            { text: "मार्टिन यूमेचर", correct: false},
        ] 
    },
    {
        question:" ‘यौन-साम्यवाद’ के सिद्धांत के प्रतिपादकों में कौन प्रमुख हैं ?",
        answers: [
            { text: "बैकोफन", correct: false},
            { text: "बेस्टर मार्क", correct: false},
            { text: "मार्गन", correct: true},
            { text: "एंडरसन", correct: false},
        ] 
    },
    {
        question:"निम्नलिखित में कौन सामाजिक स्तरीकरण का प्राणीशास्त्रीय आधार नहीं है ?",
        answers: [
            { text: "लिंग भेद", correct: false},
            { text: "आयु", correct: true},
            { text: "जन्म", correct: false},
            { text: "संपत्ति", correct: false},
        ] 
    },
    {
        question:"सामाजिक स्तरीकरण के प्रकारों में कौन-सा इसका प्रकार नहीं है ?",
        answers: [
            { text: "दास प्रथा", correct: false},
            { text: "जाति व्यवस्था", correct: false},
            { text: "समुदाय", correct: true},
            { text: " वर्ग", correct: false},
        ] 
    },
    {
        question:"कौन-सा आदिवासी समाज मातृ प्रधान है ?",
        answers: [
            { text: "संथाल", correct: true},
            { text: "मुण्डा", correct: false},
            { text: "गारो", correct: false},
            { text: "इनमें से कोई नहीं", correct: false},
        ] 
    },
    {
        question:"कृषि के लिए कौन परिवार अनुकूल है ?",
        answers: [
            { text: "एकल परिवार", correct: false},
            { text: "संयुक्त परिवार", correct: true},
            { text: "विस्तारित परिवार", correct: false},
            { text: "उपर्युक्त सभी", correct: false},
        ] 
    },
    {
        question:"भारतीय समाज में सामाजिक स्तरीकरण का बुनियादी आधार क्या है ?",
        answers: [
            { text: "धन एवं सम्पत्ति", correct: false},
            { text: "जाति", correct: true},
            { text: "परिवार", correct: false},
            { text: "धर्म", correct: false},
        ] 
    },
    {
        question:"किस सामाजिक वैज्ञानिक ने कहा? “बाजार का महत्त्व सिर्फ इसकी आर्थिक क्रियाओं तक सीमित नहीं है।”",
        answers: [
            { text: "हार्डग्रो, एनी", correct: false},
            { text: "एल्फ्रेड गेल", correct: true},
            { text: "पाल कार्ल", correct: false},
            { text: "रूडनर, डेविड", correct: false},
        ] 
    },
    {
        question:"परिवार एवं विवाह पूरक अवधारणाएँ है: विवाह एक संस्था है, परिवार वह समिति है जिसमें संस्था सम्मिलित होती है’ यह किसने कहा है ?",
        answers: [
            { text: "मैलिनोवस्की", correct: true},
            { text: "रीवर्स", correct: false},
            { text: "लॉवी", correct: false},
            { text: "वेस्टर मार्क", correct: false},
        ] 
    },
    {
        question:"आधुनिक परिवारों में नातेदारी माता एवं पिता दोनों के जन्म के परिवारों के साथ जोड़ी जाती है, ऐसे परिवार को कहते हैं ]",
        answers: [
            { text: "पितृ-बन्ध", correct: false},
            { text: "द्विपक्षीय समूह", correct: true},
            { text: "एक पक्षीय समूह", correct: false},
            { text: "मातृ-स्वजन", correct: false},
        ] 
    },
    {
        question:"भारत में नातेदारी व्यवस्था का अध्ययन किसने किया है ?",
        answers: [
            { text: "कर्वे", correct: true},
            { text: "कपाडिया", correct: false},
            { text: "देसाई", correct: false},
            { text: "श्रीनिवास", correct: false},
        ] 
    },
    {
        question:" ‘Family Kinship and Marriage in India’ नामक पुस्तक का संपादक कौन है ?",
        answers: [
            { text: "कर्वे", correct: false},
            { text: "कपाडिया", correct: false},
            { text: "देसाई", correct: false},
            { text: "पेट्रिशिया ओबराय", correct: true},
        ] 
    },
    {
        question:"जाति प्रथा की उत्पत्ति में प्रजातीय सिद्धांत के प्रतिपादक हैं –",
        answers: [
            { text: "रिजले", correct: true},
            { text: "कुले", correct: false},
            { text: "हट्टन", correct: false},
            { text: "ब्लंट", correct: false},
        ] 
    },
    {
        question:"किस समाज में हठ विवाह का प्रचलन है ?",
        answers: [
            { text: "हिन्दू समाज में", correct: false},
            { text: "मुस्लिम समाज में", correct: false},
            { text: "जनजातीय समाज में", correct: true},
            { text: "उपरोक्त में से कोई नहीं", correct: false},
        ] 
    },
    {
        question:"सहपलायन विवाह, विवाह का एक प्रकार है",
        answers: [
            { text: "जनजातिय समाज में", correct: true},
            { text: "हिन्दू समाज में", correct: false},
            { text: "मुस्लिम समाज में", correct: false},
            { text: "ईसाई समाज में", correct: false},
        ] 
    },
    {
        question:"परिवीक्षा विवाह, विवाह का एक प्रकार है ",
        answers: [
            { text: "जनजातीय समाज में", correct: true},
            { text: "हिन्दू समाज में", correct: false},
            { text: "मुस्लिम समाज में", correct: false},
            { text: "ईसाई समाज में", correct: false},
        ] 
    },
    {
        question:"“ भारत में विवाह और परिवार” किसने लिखी ?",
        answers: [
            { text: "ए० एम० शाह", correct: false},
            { text: "जी० एस० घुर्ये", correct: false},
            { text: "के० एम० कपाडिया", correct: true},
            { text: "डब्ल्यू ० आई० वार्नर", correct: false},
        ] 
    },
    {
        question:"किस विद्वान ने समाज को ‘सामाजिक संबंधों के जाल’ के रूप में परिभाषित किया ?",
        answers: [
            { text: "पार्सन्स", correct: false},
            { text: "मर्टन", correct: false},
            { text: "फिक्टर", correct: false},
            { text: "मेकाईवर एवं पेज", correct: true},
        ] 
    },
    {
        question:"‘सोसायटी इन इण्डिया’ किसने लिखी ?",
        answers: [
            { text: "मेंडलबम", correct: true},
            { text: "के० एम० कपाड़िया", correct: false},
            { text: "ए० एम० शाह", correct: false},
            { text: "डब्ल्यू० आई० वार्नर", correct: false},
        ] 
    },
    {
        question:" ‘सोसायटी’ नामक पुस्तक के लेखक है –",
        answers: [
            { text: "मेकाईवर एवं पेज", correct: true},
            { text: "ए० डब्ल्यू० ग्रीन", correct: false},
            { text: "फेयर चाइल्ड", correct: false},
            { text: "जॉनसन", correct: false},
        ] 
    },
    {
        question:"निम्न में से किन्होंने धर्म की समाजशास्त्रीय अवधारणा प्रस्तुत किया है ?",
        answers: [
            { text: "दुर्थीम", correct: true},
            { text: "फ्रेजर", correct: false},
            { text: "टायलर", correct: false},
            { text: "मेकाईवर", correct: false},
        ] 
    },
    {
        question:"निम्न में से कौन सामाजिक परिवर्तन का कारक है ?",
        answers: [
            { text: "तकनीकी", correct: false},
            { text: "जनसंख्या", correct: false},
            { text: "संस्कृति", correct: false},
            { text: "उपर्युक्त सभी", correct: true},
        ] 
    },
    {
        question:"मार्क्स ने सामाजिक परिवर्तन के लि किस कारक को उत्तरदायी माना है –",
        answers: [
            { text: "भौगोलिक", correct: false},
            { text: "सांस्कृतिक", correct: false},
            { text: "आर्थिक", correct: true},
            { text: "जनसंख्यात्मक", correct: false},
        ] 
    },
    {
        question:"‘मामा’ नातेदारी के किस श्रेणी के अंतर्गत आता है ?",
        answers: [
            { text: "प्राथमिक", correct: false},
            { text: "द्वितीयक", correct: false},
            { text: "तृतीयक", correct: true},
            { text: "इनमें से कोई नहीं", correct: false},
        ] 
    },
    {
        question:"विनिमय विवाह का स्वरूप किस समाज में प्रचलित है ?",
        answers: [
            { text: "हिन्दू समाज", correct: false},
            { text: "सिख समाज", correct: false},
            { text: "आदिवासी समाज", correct: true},
            { text: "मुस्लिम समाज", correct: false},
        ] 
    },
    {
        question:"‘कास्ट, क्लास एण्ड ओकुपेशन’ नामक पुस्तक किसने लिखा है ?",
        answers: [
            { text: "आर०के० मुखर्जी", correct: false},
            { text: "जी०एस०  घुर्ये", correct: true},
            { text: "डी०एन० मजुमदार", correct: false},
            { text: "एस०सी० दूबे", correct: false},
        ] 
    },
    {
        question:"आदिम समाज में जादू के कौन से प्रकार को सामाजिक स्वीकृति प्राप्त है ?",
        answers: [
            { text: "काला जादू", correct: false},
            { text: "अनुकरणात्मक जादू", correct: false},
            { text: "सफेद जादू", correct: true},
            { text: "इनमें से कोई नहीं", correct: false},
        ] 
    },
    {
        question:"युवा संगठन किस समाज में पाया जाता है ?",
        answers: [
            { text: "ग्रामीण समाज", correct: false},
            { text: " नगरीय समाज", correct: false},
            { text: "आदिम समाज", correct: true},
            { text: "औद्योगिक समाज", correct: false},
        ] 
    },
    {
        question:"‘बिटलाहा’ परम्परा किस समाज में पायी जाती है ?",
        answers: [
            { text: "आदिम समाज", correct: true},
            { text: " मुस्लिम समाज", correct: false},
            { text: "सिख समाज", correct: false},
            { text: "नगरीय समाज", correct: false},
        ] 
    },
    {
        question:"मुस्लिम समाज में व्यापक पैमाने पर सुधार आंदोलन कार्य किसने किया ?",
        answers: [
            { text: "मौलाना अबुल कलाम आजाद", correct: false},
            { text: "डॉ० जाकिर हुसैन", correct: false},
            { text: "सैयद अहमद खाँ", correct: true},
            { text: "ए० पी० जी० अब्दुल कलाम", correct: false},
        ] 
    },




    
 
   
];


const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    });
} 

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct ==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz(); 