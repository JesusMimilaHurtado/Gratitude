"use strict"

let mother = {
    name: "Jesus Alicia",
    age: 49,
    occupation: "SAHM",
    hobbies: ["reading manga", "dancing", "cooking", "k-dramas"],
    favoriteColor: "blue",
    birthplace: "D.F., Mexico ",
    favoriteFoods: ["chiles rellenos", "alfredo angel hair pasta", "fruit"],
    favoriteSayings: "Siempre van hacer mis bebes no importa lo viejitos que esten",
    giftIdeas: ["A toyota sierra", "grandchildren LOL"]
};

const messages = [
    "Thank you for always being there!",
    "You are my biggest inspiration.",
    "Thank you for being patient with me when I acted rude and bratty",
    "For always being loving, caring, and playful",
    "Gracias por siempre tener fe en mi y por escuchar me cuendo te explicaba como me sentia"
];

function displayMessage() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    document.getElementById('message').textContent = messages[randomIndex];
}