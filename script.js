// =====================================
// HTML ELEMENTS
// =====================================

const button = document.getElementById("startBtn");
const music = document.getElementById("bgMusic");

const stars = document.getElementById("stars");
const shootingStars = document.getElementById("shooting-stars");

const landing = document.getElementById("landing");

const memoryScreen = document.getElementById("memoryScreen");
const memoryTitle = document.getElementById("memoryTitle");
const memoryText = document.getElementById("memoryText");
const memoryImage = document.getElementById("memoryImage");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const finalScreen = document.getElementById("finalScreen");
const finalText = document.getElementById("finalText");
const finalPhoto = document.getElementById("finalPhoto");
const birthdayText = document.getElementById("birthdayText");
const letterBtn = document.getElementById("letterBtn");

const letterOverlay = document.getElementById("letterOverlay");
const letterContent = document.getElementById("letterContent");
const closeLetter = document.getElementById("closeLetter");


// =====================================
// LETTER
// =====================================

const letter = `
If you're reading this, then congratulations... you finally reached the end of this little website. 
Ya phir.. tumhari ek special din me tumhe thoorasa special feel karwane ka ek chhotasa effort hi keh lo.. 

I never really expected ke koi discord server & server ke kuchh log who lives miles away from 
me.. itna apna ho jayega.. mera baat batau? pehle I used to stay active in a server for like 
a week at max.. phir offline jata tha or server switch karta tha.. I mean.. real life me bhi 
esa hi hu, I almost always keep switching circles & relations, ya phir sabse gayeb bhi ho jata 
hu.. ek jaga pe rukne wala banda nahi hu mai, but.. gupshup se aurlets tak ka safar, it has 
been more than a year now, aur agar I'm sticking to it, then of course it means something to 
me... & it's people like YOU who made this a meaningful place.. 

From me constantly ragebaiting you, tumhara har doosre din gussa hona, your legendary 
spelling mistakes, coffee obsession, ruining your pfps, convincing you to become a Brazil 
fan, Eid Letters, and thousands of other random conversations... somehow, all these little 
moments became memories I genuinely cherish. 

You know... life gets busy. People change. Servers die. Chats get buried under thousands 
of new messages. & if i speak honestly.. umm.. tumne already notice kiya hoga that I'm not 
active anymore in the server cz, last letter me jis time ka baat kar raha tha ke life gets 
busy.. I guess wo time aa chuka hai for me.. not only dc, but you will rarely find me online 
anymore from the 7th of September.. bus kabhi kabhara ake korea ke cherry blossoms ka pics 
bheja karunga tm logo ko😝 That's why I pinged you & pali yesterday ke if you want toh you 
can take away my mod perms, you can.. I'll send a goodbye text, & agar chaho toh rakh bhi 
sakte ho.. However, wo sab chhoro, what was I saying? Oh ha, so life ke chapter changes & 
people move on but isi ke bich, some people somehow become a part of your memories 
without you even realizing it. And you're one of those people. 

So... Thank you for putting up with my nonsense, for bearing with my broken urdu, and for
making me laugh, queenz.. I'm promising one thing ke the bond ain't ending here.. I wasn't 
joking when I said coffee pilaunga, jab umrah me jaunga tab dhundke treat dunga :3

And lastly... Happy birthday Queenz!! I genuinely hope this year brings you more happiness 
& more reasons to smile than overthink. May Allah bless you with good health, endless 
happiness, and countless beautiful memories ahead. Take care of yourself, moti boni. 

— Ded Inside

`;


// =====================================
// CREATE STARS
// =====================================

const totalStars = 200;

for(let i=0;i<totalStars;i++){

    const star=document.createElement("div");

    star.className="star";

    const size=Math.random()*3+1;

    star.style.width=size+"px";
    star.style.height=size+"px";

    star.style.left=Math.random()*100+"%";
    star.style.top=Math.random()*100+"%";

    star.style.opacity=Math.random();

    star.style.animationDuration=
    (2+Math.random()*4)+"s";

    stars.appendChild(star);

}


// =====================================
// SHOOTING STARS
// =====================================

function createShootingStar(){

    const star=document.createElement("div");

    star.className="shooting-star";

    star.style.left=
    Math.random()*70+"%";

    star.style.top=
    Math.random()*40+"%";

    shootingStars.appendChild(star);

    setTimeout(()=>{

        star.remove();

    },1400);

}

setInterval(createShootingStar,5000);


// =====================================
// MEMORIES
// =====================================

const memories=[

{
title:"The Beginning",

text:"Our first interaction!.. back when I wasn't aware of 'baap' being too informal in urdu😭",

image:"assets/screenshots/01-first-meeting.png"
},

{
title:"Me Ragebaiting You",

text:"& somehow with time, annoying you became one of my favorite hobbies.",

image:"assets/screenshots/02-me-ragebaiting.jpeg"
},

{
title:"& You Getting Ragebaited",

text:"Boni mahila ki gussa toh dekho😝",

image:"assets/screenshots/03-you-ragebaited.jpeg"
},

{
title:"Ruining Your Pfps",

text:"If ruining Queenz's pfp is an art, then I am the artist💅",

image:"assets/screenshots/04-ruining-pfp.jpeg"
},

{
title:"Typos",

text:"Tm aur tumhari spelling, bhaiiii😭",

image:"assets/screenshots/05-spelling-errors.jpeg"
},

{
title:"Coffee Obsession",

text:"Wo Queenz hi kiya jo coffee ki lalaj me gussa bhul jaye☕",

image:"assets/screenshots/06-coffee-obsession.jpeg"
},

{
title:"Brazil Forever!",

text:"Yaad rakhnaa!..Win, lose, or tie... Brazil till we die!!😤",

image:"assets/screenshots/07-Brazil.jpeg"
},

{
title:"& Thousands More....",

text:"+1000 more moments between us... too many to fit into one website.",

image:"assets/screenshots/08-other-memories.jpeg"
}

];

let currentMemory=0;


// =====================================
// SHOW MEMORY
// =====================================

function showMemory(){

    memoryScreen.classList.remove("fade-in");

    void memoryScreen.offsetWidth;

    memoryScreen.classList.add("fade-in");

    memoryTitle.innerHTML=
    memories[currentMemory].title;

    memoryText.innerHTML=
    memories[currentMemory].text;

    memoryImage.src=
    memories[currentMemory].image;

}


// =====================================
// BEGIN
// =====================================

button.onclick=()=>{

    music.play();

    button.innerHTML=
    "Finding our story...";

    button.disabled=true;

    landing.classList.add("fade-out");

    setTimeout(()=>{

        landing.style.display="none";

        memoryScreen.style.display="flex";

        memoryScreen.classList.remove("hiddenScreen");

        showMemory();

    },1800);

};

// =====================================
// FINAL REVEAL
// =====================================

function showFinalReveal(){

    // Fade out the memories AND stars together

    document.body.classList.add("sceneFadeOut");

    setTimeout(()=>{

        // Remove fade out

        document.body.classList.remove("sceneFadeOut");

        // Hide memory screen

        memoryScreen.style.display="none";

        // Show final screen

        finalScreen.style.display="flex";

        finalScreen.classList.remove("hiddenScreen");

        finalScreen.classList.remove("fade-in");

        void finalScreen.offsetWidth;

        finalScreen.classList.add("fade-in");

        // Start with text only

        finalPhoto.style.display="none";
        birthdayText.style.display="none";
        letterBtn.style.display="none";

        finalText.style.display="block";

        finalText.innerHTML="One Last Thing...";

        // Dialogue

        setTimeout(()=>{

            finalText.innerHTML="I know...";

        },2200);

        setTimeout(()=>{

            finalText.innerHTML="you absolutely hate this word.";

        },4300);

        setTimeout(()=>{

            finalText.innerHTML="But...";

        },6500);

        // FINAL SCENE

        setTimeout(()=>{

            finalText.style.display="none";

            finalPhoto.style.display="block";
            birthdayText.style.display="block";
            letterBtn.style.display="inline-block";

            finalPhoto.classList.add("visible");
            birthdayText.classList.add("visible");
            letterBtn.classList.add("visible");

            // Fade whole scene back in

            void document.body.offsetWidth;

            document.body.classList.add("sceneFadeIn");

        },8200);

    },1200);

}


// =====================================
// NEXT
// =====================================

nextBtn.onclick=()=>{

    if(currentMemory<memories.length-1){

        currentMemory++;

        showMemory();

    }

    else{

        showFinalReveal();

    }

};


// =====================================
// PREVIOUS
// =====================================

prevBtn.onclick=()=>{

    if(currentMemory>0){

        currentMemory--;

        showMemory();

    }

};


// =====================================
// LETTER
// =====================================

letterBtn.onclick=()=>{

    letterOverlay.style.display="flex";

    letterContent.innerHTML=letter;

};

closeLetter.onclick=()=>{

    letterOverlay.style.display="none";

};


// Optional: click outside to close

letterOverlay.onclick=(e)=>{

    if(e.target===letterOverlay){

        letterOverlay.style.display="none";

    }

};
