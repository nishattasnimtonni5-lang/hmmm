const openEnvelope = document.getElementById("openEnvelope");
const letterPage = document.getElementById("letterPage");

const bigEnvelope = document.getElementById("bigEnvelope");
const openHint = document.getElementById("openHint");


// ==========================================
// FIRST PAGE
// Click small envelope
// ==========================================

openEnvelope.addEventListener("click", function () {

    letterPage.classList.add("show");

});


// ==========================================
// SECOND PAGE
// Click big envelope
// ==========================================

bigEnvelope.addEventListener("click", function () {

    bigEnvelope.classList.toggle("open");


    // Change instruction text

    if (bigEnvelope.classList.contains("open")) {

        openHint.textContent = "Click the letter to close";

    } else {

        openHint.textContent = "Click the envelope to open";

    }

});