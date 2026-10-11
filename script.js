const messages = [
    "Estas segura?",
    "Realmente estas segura??",
    "Lo digo en serio?",
    "Negro por favor...",
    "Solo piensalo!",
    "Si dices que no me pondre triste...",
    "Voy a estar muy triste...",
    "Voy a estar muy muy muy muy triste...",
    "Okey fino, dejare de preguntar...",
    "Estoy bromeando, di que si porfavor! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}