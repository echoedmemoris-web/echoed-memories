const slides = document.querySelectorAll(".quote-slide");
const dots = document.querySelectorAll(".dot");

const prevButton = document.getElementById("prevQuote");
const nextButton = document.getElementById("nextQuote");

const quoteSection = document.querySelector(".quote-section");

let currentQuote = 0;


// =========================
// MENAMPILKAN QUOTE
// =========================

function showQuote(index) {

    if (index >= slides.length) {
        currentQuote = 0;
    }

    else if (index < 0) {
        currentQuote = slides.length - 1;
    }

    else {
        currentQuote = index;
    }


    // Hilangkan active dari semua quote

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });


    // Hilangkan active dari semua dot

    dots.forEach((dot) => {
        dot.classList.remove("active");
    });


    // Aktifkan quote

    slides[currentQuote].classList.add("active");


    // Aktifkan dot

    dots[currentQuote].classList.add("active");


    // =========================
    // GANTI BACKGROUND
    // =========================

    const newBackground =
        slides[currentQuote].getAttribute("data-background");


    quoteSection.style.backgroundImage =
        `url("${newBackground}")`;
}


// =========================
// TOMBOL >
// =========================

nextButton.addEventListener("click", () => {

    showQuote(currentQuote + 1);

    resetAutoSlide();

});


// =========================
// TOMBOL <
// =========================

prevButton.addEventListener("click", () => {

    showQuote(currentQuote - 1);

    resetAutoSlide();

});


// =========================
// DOT
// =========================

dots.forEach((dot, index) => {

    dot.addEventListener("click", () => {

        showQuote(index);

        resetAutoSlide();

    });

});


// =========================
// AUTO SLIDE
// =========================

let autoSlide = setInterval(() => {

    showQuote(currentQuote + 1);

}, 5000);


// =========================
// RESET TIMER
// =========================

function resetAutoSlide() {

    clearInterval(autoSlide);

    autoSlide = setInterval(() => {

        showQuote(currentQuote + 1);

    }, 5000);

}


// =========================
// BACKGROUND PERTAMA
// =========================

showQuote(0);