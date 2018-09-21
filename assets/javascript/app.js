var count = 600;
var interval = setInterval(function(){
  document.getElementById('count').innerHTML=count;
  count--;
  if (count === 0){
    clearInterval(interval);
    document.getElementById('count').innerHTML='Done';
    alert("You're out of time!");
  }
}, 1000);
var quiz = [
    {
        "question" : "Who were the opposing forces in the Punic Wars?",
        "image" : "https://i2.wp.com/about-history.com/wp-content/uploads/2018/04/The-Second-Punic-War-The-Hannibal-War.jpg?resize=1013%2C640&ssl=1",
        "choices" : [
            "Athens vs. Sparta",
            "Greece vs. Persia",
            "Carthage vs. Rome",
            "Egypt vs. Babylon"
            ],
        "correct" : "Carthage vs. Rome",
        "explanation" : "The Punic wars were between the two Mediterranean powers of the day, the Carthaginian Empire in the South and West and the Roman Republic in the North and East. It was during these wars that Hannibal Barca famously crossed the Alps and conquered Northern Italy",
    },
    {
        "question" : "What is the oldest written language known today?",
        "image" : "https://upload.wikimedia.org/wikipedia/commons/9/91/Sumerian_26th_c_Adab.jpg",
        "choices" : [
            "Sumerian",
            "Egyptian",
            "Arabic",
            "Greek"
            ],
        "correct" : "Sumerian",
        "explanation" : "Although Egyptian Hieroglyphs are just as old as Sumerian Cuneiform, it is beleived it didn't develop into a phonetic writing system till later making Sumerian the oldest written language.",
    },
    {
        "question" : "What is the only Wonder of the Ancient World still standing",
        "image" : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Hanging_Gardens_of_Babylon.jpg/350px-Hanging_Gardens_of_Babylon.jpg",
        "choices" : [
            "Taj Mahal",
            "Great Wall of China",
            "Pyramids of Giza",
            "Hanging Gardens of Babylon"
            ],
        "correct" : "Pyramids of Giza",
        "explanation" : "The Hanging Gardens were destroyed thousands of years ago and the Taj Mahal and Great Wall are not exactly ancient being less than 400 years old. The Pyramids of Giza are the correct answer at 4500 years old and still standing strong.",
    },
    {
        "question" : "Where is Alexandar the Great From?",
        "image" : "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Alexander_the_Great_mosaic.jpg/1280px-Alexander_the_Great_mosaic.jpg",
        "choices" : [
            "Sparta of Laconia",
            "Athens of Attica",
            "Pella of Macedonia",
            "Corinth of Corinthia"
            ],
        "correct" : "Pella of Macedonia",
        "explanation" : "Untill Phillip II of Macedon unified the Greek states through conquest and diplomacy, Madedonia was considered a small unimportant region of Greece. Modern Macedonia takes it's name from the region of Ancient Greece although modern Macedonians are a South Slavic people not Greek.",
    },
    {
        "question" : "What was the largest non-colonial Empire in the world by land?",
        "image" : "https://i.redd.it/clj64siubeqz.png",
        "choices" : [
            "Roman Empire",
            "Mongolian Khanate",
            "Persian Empire",
            "Greek Empire",
            "Egyptian Empire"
            ],
        "correct" : "Mongolian Khanate",
        "explanation" : "Including colonies and Governates the British empire had the most land, the Roman Empire wins wealthiest empire, and Persia in its various forms was the most populated at one time containing over 40% of the world's population. But no one beats Mongolia when it comes to good old-fashioned land by conquest.",
    },
    {
        "question" : "What was the first city to reach 1 million inhabitants?",
        "image" : "https://www.realmofhistory.com/wp-content/uploads/2017/12/10-digital-reconstructions-ancient-cities.jpg",
        "choices" : [
            "Rome",
            "London",
            "Babylon",
            "Alexanrdria",
            "Thebes",
            "Yinxu",
            ],
        "correct" : "Rome",
        "explanation" : "Historians agree Rome reached a population of 1 million in the first Century B.C. and most beleive it was the first city to do so.",
    },
    {
        "question" : "What was the first city to reach 100,000 inhabitants?",
        "image" : "https://www.ancient-origins.net/sites/default/files/The-honeycomb-city-of-Catalhoyuk.jpg",
        "choices" : [
            "Catalhoyuk, Turkey",
            "Yinxu, China",
            "Thebes, Egypt",
            "Ur, Iraq",
            "Athens, Greece"
            ],
        "correct" : "Ur, Iraq",
        "explanation" : "Ur was the capital of the Akkadian Empire (commonly believed to be the oldest empire) and reached 100,000 inhabitants by 2100 B.C.",
    },
    {
        "question" : "Which Mesopotamian King is famous for writing a code of law?",
        "image" : "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/F0182_Louvre_Code_Hammourabi_Bas-relief_Sb8_rwk.jpg/800px-F0182_Louvre_Code_Hammourabi_Bas-relief_Sb8_rwk.jpg",
        "choices" : [
            "Sargon of Akkad",
            "Nebuchadnezzar II of Babylon",
            "Cyrus the Great of Persia",
            "Hammurabi of Babylon",
            "Gilgamesh of Sumeria"
            ],
        "correct" : "Hammurabi of Babylon",
        "explanation" : "Hammurabi's code of laws is the oldest set of government enforced laws. It is referenced in ancient literature including the bible and the original stele still exists today in the Louvre. An eye for an eye, tooth for a tooth, right?",
    },
    {
        "question" : "Which of the following non-Egyptians never actually ruled Egypt?",
        "image" : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Hanging_Gardens_of_Babylon.jpg/350px-Hanging_Gardens_of_Babylon.jpg",
        "choices" : [
            "Cleopatra (Greek)",
            "Julius Caesar (Roman)",
            "Alexander the Great (Macedonian)",
            "Maaibre Sheshi (Hyksos)"
            ],
        "correct" : "Julius Caesar (Roman)",
        "explanation" : "Although his son by Cleopatra ruled Egypt very briefly, Julius Caesar never ruled Egypt or technically anything since he was killed before solidifying his role as dictator for life. Rome did not conqeur Egypt till after his death anyway.",
    },
    {
        "question" : "Who were the oppossing forces in the Peloponnesian War",
        "image" : "https://boardgaminglife.files.wordpress.com/2017/07/peloponnesianwar03.jpg",
        "choices" : [
            "Rome vs. Greece",
            "Greece vs. Persia",
            "Athens vs. Sparta",
            "Babylon vs. Egypt"
            ],
        "correct" : "Athens vs. Sparta",
        "explanation" : "The Peloponnesian War took place in the fourth Century B.C. between the Spartan lead Peloponnesian League and the Athenian lead Delian League.",
    },
    {
        "question" : "The Illiad by Homer portrays the events of which Ancient conflict?",
        "image" : "https://www.ancient.eu/uploads/images/2860.jpg?v=1490109009",
        "choices" : [
            "The Trojan War",
            "The Persian War",
            "The Egyptian War",
            "The Spartan War"
            ],
        "correct" : "The Trojan War",
        "explanation" : "Although there was a historical Trojan War, much of our modern understanding comes from Homer's writings which are full of drama, myth and magic.",
    },
    {
        "question" : "A small band of Spartan lead Greek soldiers fought a massive Persian army in what famous battle?",
        "image" : "http://media.interactive.netuse.gr/filesystem/images/20150706/low/pegasus_LARGE_t_1581_106618240.JPG",
        "choices" : [
            "The Battle of Marathon",
            "The Battle of Thermopylae",
            "The Battle of Salamis",
            "The Battle of Delium"
            ],
        "correct" : "The Battle of Thermopylae",
        "explanation" : "Greek historian Herodotus says 6000 Greeks lead by Leonidas of Sparta faced down over 2 million Persian Troops. Spoiler alert: they all died.",
    },
    {
        "question" : "Julius Caesar rose to fame fighting for Commander Crassus against which famous insurectionist?",
        "image" : "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Tod_des_Spartacus_by_Hermann_Vogel.jpg/1200px-Tod_des_Spartacus_by_Hermann_Vogel.jpg",
        "choices" : [
            "Boudica of Britannia",
            "Decalabus of Dacia",
            "The Gladiator Spartacus",
            "Vercingetorix of the Gauls"
            ],
        "correct" : "The Gladiator Spartacus",
        "explanation" : "By the time Spartacus was defeated, Julius Caesar and the wealthy Marcus Lucinius Crassus were close friends. Crassus and political rival Pompey Magnus decided to use mutual ally Caesar to control the senate by appointing him Console of Rome. The rest is history.",
    },
    {
        "question" : "Which of the following geographic regions does not take it's name from a Roman Province",
        "image" : "http://classics.oxfordre.com/fileasset/Map%207%20FINAL%20romto211.jpg",
        "choices" : [
            "Africa",
            "Brittian",
            "Germany",
            "America"
            ],
        "correct" : "America",
        "explanation" : "Africa was a province in Northern Africa, Germania was a province covering much of modern Germany, Brittania was the province covering all of England and Wales and Southern Scotland, America was named after Italian Explorer Amerigo.",
    },
    {
        "question" : "What is the modern name for the city of Byzantium",
        "image" : "https://www.realmofhistory.com/wp-content/uploads/2017/05/constantinople-reconstructed-4th-13th-century_1.jpg",
        "choices" : [
            "Constantinople",
            "Cairo",
            "Baghdad",
            "Istanbul"
            ],
        "correct" : "Istanbul",
        "explanation" : "Emperor Constantine moved the Roman capitol to the small city of Byzantium creating the Eastern Roman Empire commonly known as the Byantine Empire. The city was renamed Constantinople in his honor and eventually Istanbul when conqured by the Ottoman Turks.",
    },
];
var currentquestion = 0, score = 0, submt=true, picked;
jQuery(document).ready(function($){

    function htmlEncode(value){
      return $(document.createElement('div')).text(value).html();
    }

    function addChoices(choices){
        if(typeof choices !== "undefined" && $.type(choices) == "array"){
            $('#choice-block').empty();
            for(var i=0;i<choices.length; i++){
                $(document.createElement('li')).addClass('choice choice-box').attr('data-index', i).text(choices[i]).appendTo('#choice-block');                    
            }
        }
    }

    function nextQuestion(){
        submt = true;
        $('#explanation').empty();
        $('#question').text(quiz[currentquestion]['question']);
        $('#pager').text('Question ' + Number(currentquestion + 1) + ' of ' + quiz.length);
        if(quiz[currentquestion].hasOwnProperty('image') && quiz[currentquestion]['image'] != ""){
            if($('#question-image').length == 0){
                $(document.createElement('img')).addClass('question-image').attr('id', 'question-image').attr('src', quiz[currentquestion]['image']).attr('alt', htmlEncode(quiz[currentquestion]['question'])).insertAfter('#question');
            } else {
                $('#question-image').attr('src', quiz[currentquestion]['image']).attr('alt', htmlEncode(quiz[currentquestion]['question']));
            }
        } else {
            $('#question-image').remove();
        }
        addChoices(quiz[currentquestion]['choices']);
        setupButtons();
    }

    function processQuestion(choice){
        if(quiz[currentquestion]['choices'][choice] == quiz[currentquestion]['correct']){
            $('.choice').eq(choice).css({'background-color':'#50D943'});
            $('#explanation').html('<strong>Correct!</strong> ' + htmlEncode(quiz[currentquestion]['explanation']));
            score++;
        } else {
            $('.choice').eq(choice).css({'background-color':'#D92623'});
            $('#explanation').html('<strong>Incorrect.</strong> ' + htmlEncode(quiz[currentquestion]['explanation']));
        }
        currentquestion++;
        $('#submitbutton').html('NEXT QUESTION &raquo;').on('click', function(){
            if(currentquestion == quiz.length){
                endQuiz();
            } else {
                $(this).text('Check Answer').css({'color':'#222'}).off('click');
                nextQuestion();
            }
        })
    }

    function setupButtons(){
        $('.choice').on('mouseover', function(){
            $(this).css({'background-color':'#e1e1e1'});
        });
        $('.choice').on('mouseout', function(){
            $(this).css({'background-color':'#fff'});
        })
        $('.choice').on('click', function(){
            picked = $(this).attr('data-index');
            $('.choice').removeAttr('style').off('mouseout mouseover');
            $(this).css({'border-color':'#222','font-weight':700,'background-color':'#c1c1c1'});
            if(submt){
                submt=false;
                $('#submitbutton').css({'color':'#000'}).on('click', function(){
                    $('.choice').off('click');
                    $(this).off('click');
                    processQuestion(picked);
                });
            }
        })
    }
    
    function endQuiz(){
        $('#explanation').empty();
        $('#question').empty();
        $('#choice-block').empty();
        $('#submitbutton').remove();
        $('#question').text("You got " + score + " out of " + quiz.length + " correct.");
        $(document.createElement('h2')).css({'text-align':'center', 'font-size':'4em'}).text(Math.round(score/quiz.length * 100) + '%').insertAfter('#question');
    }

    function init(){
        if(typeof quiztitle !== "undefined" && $.type(quiztitle) === "string"){
            $(document.createElement('h1')).text(quiztitle).appendTo('#frame');
        } else {
            $(document.createElement('h1')).text("Ancient History Quiz").appendTo('#frame');
        }

        if(typeof quiz !== "undefined" && $.type(quiz) === "array"){
            
            $(document.createElement('p')).addClass('pager').attr('id','pager').text('Question 1 of ' + quiz.length).appendTo('#frame');
            
            
            
            if(quiz[0].hasOwnProperty('image') && quiz[0]['image'] != ""){
                $(document.createElement('img')).addClass('question-image').attr('id', 'question-image').attr('src', quiz[0]['image']).attr('alt', htmlEncode(quiz[0]['question'])).appendTo('#frame');
            }
            $(document.createElement('p')).addClass('explanation').attr('id','explanation').html('&nbsp;').appendTo('#frame');
        
            $(document.createElement('h2')).addClass('question').attr('id', 'question').text(quiz[0]['question']).appendTo('#frame');
            $(document.createElement('ul')).attr('id', 'choice-block').appendTo('#frame');
        
            
            addChoices(quiz[0]['choices']);
        
            
            $(document.createElement('div')).addClass('choice-box').attr('id', 'submitbutton').text('Check Answer').css({'font-weight':700,'color':'#222','padding':'30px 0'}).appendTo('#frame');
        
            setupButtons();
        }
    }
    
    init();
});