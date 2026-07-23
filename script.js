// ==========================
// Project Thae v3
// script.js
// ==========================

const loadingScreen = document.getElementById("loadingScreen");
const startBtn = document.getElementById("startBtn");
const bgMusic = document.getElementById("bgMusic");

// Hide loading screen after 3 seconds
window.addEventListener("load", () => {
    setTimeout(() => {
        loadingScreen.style.opacity = "0";
        loadingScreen.style.transition = "opacity 1s ease";

        setTimeout(() => {
            loadingScreen.style.display = "none";
        }, 1000);

    }, 3000);
});

// Start button
if (startBtn) {

    startBtn.addEventListener("click", () => {

        

        setTimeout(() => {
            window.location.href = "surprise.html";
        }, 500);

    });

}
// ===============================
// Surprise Page
// ===============================

const lightBtn = document.getElementById("lightBtn");
const nextBtn = document.getElementById("nextBtn");
const flame = document.getElementById("flame");
console.log(lightBtn, nextBtn, flame);

if (lightBtn && nextBtn && flame) {

    lightBtn.addEventListener("click", () => {

        // Light candle
        flame.classList.add("on");

        // Hide light button
        lightBtn.style.display = "none";

        // Show continue button
        nextBtn.style.display = "block";

    });

    nextBtn.addEventListener("click", () => {

        window.location.href = "flower.html";

    });

}
// ===============================
// Gallery Page
// ===============================

const galleryPhoto = document.getElementById("galleryPhoto");
const galleryText = document.getElementById("galleryText");

const prevBtn = document.getElementById("prevBtn");
const galleryNextBtn = document.getElementById("galleryNextBtn");

const continueBtn = document.getElementById("continueBtn");
const musicBtn = document.getElementById("musicBtn");
if(musicBtn){

    musicBtn.addEventListener("click",()=>{

        bgMusic.play().catch(()=>{});

        lockButtons.forEach(btn=>{
            btn.style.pointerEvents = "auto";
        });

        musicBtn.style.display = "none";

    });

}
const lockButtons = document.querySelectorAll(".lockBtn");

lockButtons.forEach(btn=>{
    btn.style.pointerEvents = "none";
});


let currentPhoto = 0;


const photos = [
    "photo1.jpg",
    "photo2.jpg",
    "photo3.jpg",
    "photo4.jpg",
    "photo5.jpg",
    "photo6.jpg",
    "photo7.jpg",
    "photo8.jpg",
    "photo9.jpg",
    "photo10.jpg"
];


const messages = [

    "အရမ်းပျော်နေတဲ့ ကို့ရဲ့ ချစ်ဇနီးချောလေး ",

    "ဘွဲ့ဝတ်စုံလေးနဲ့လည်း လိုက်ဖက်နေရောပဲ သဲရယ် ",

    "ဝေးနေရတော့ ဖုန်းလေးနဲ့ အလွမ်းဖြေပေါ့ ",

    "ချစ်စရာကောင်းနေတာ မျက်နှာလေးက သဲရယ် ",

    "ကို့ရဲ့ ကမ္ဘာကြီးနှစ်ခုပေါ့ ",

    "ကို့ရဲ့ အိုအေစစ်လေးနှစ်ယောက်ပေါ့ ",

    "ရိုးရိုးလေးနဲ့တောင် လှနေလိုက်တာ သဲရယ် ",

    "ရှားရှားပါးပါး ကိုနဲ့သဲနဲ့ သားသားနဲ့ ပုံလေး ",

    "ချစ်စရာကောင်းတဲ့ သားသားလေး မွေးပေးတဲ့အတွက် ကျေးဇူးပါ သဲ ",

    "ကိုရဲ့ အကြိုက်ဆုံးသော photo လေးပေါ့ "

];


if(galleryPhoto){

    function showPhoto(){

    galleryPhoto.classList.remove("photoFade");

    void galleryPhoto.offsetWidth;


    galleryText.classList.remove("textFade");

    void galleryText.offsetWidth;


    galleryPhoto.src = photos[currentPhoto];

    galleryText.innerHTML = messages[currentPhoto];


    galleryPhoto.classList.add("photoFade");

    galleryText.classList.add("textFade");


    if(currentPhoto === 9){

        continueBtn.style.opacity = "1";

        continueBtn.style.pointerEvents = "auto";

    }else{

        continueBtn.style.opacity = "0";

        continueBtn.style.pointerEvents = "none";

    }

}


    galleryNextBtn.addEventListener("click",()=>{

        if(currentPhoto < photos.length - 1){

            currentPhoto++;

            showPhoto();

        }

    });


    prevBtn.addEventListener("click",()=>{

        if(currentPhoto > 0){

            currentPhoto--;

            showPhoto();

        }

    });


    continueBtn.addEventListener("click",()=>{

        window.location.href="final.html";

    });


    showPhoto();

}
