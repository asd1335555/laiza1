const cat = document.getElementById('cat');
const heartQuote = document.getElementById('heart-quote');
const emojiRain = document.getElementById('emoji-rain');
let isRaining = false;
let usedQuotes = [];

document.getElementById('show-thoughts').addEventListener('click', function () {
    const quotes = [
        "You are the source of my joy, the center of my world, and the whole of my heart",
        "In your arms is where I belong",
        "Every moment with you is like a beautiful dream come true",
        "My love for you knows no bounds",
        "You complete me in every way",
        "You are the missing piece to my puzzle of life",
        "Our love story is my favorite",
        "My heart beats only for you",
        "You are my sunshine on a cloudy day",
        "I am who I am because of you",
        "With you, I have found my forever",
        "In your eyes, I see my future",
        "Our love is a journey that knows no end",
        "You are the melody to my heart's song",
        "I love you more than words can express",
        "Being with you is my greatest adventure",
        "You make my heart skip a beat",
        "You are my happy place",
        "Loving you is the best thing I've ever done",
        "You are the love of my life",
        "I fall in love with you all over again every day",
        "You are the reason I believe in love",
        "My love for you grows stronger with each passing day",
        "You are the most beautiful thing that ever happened to me",
        "You are the essence of my existence",
        "With you, I am complete",
        "Forever isn't long enough when I'm with you",
        "You are my heart's desire",
        "You are my greatest treasure",
        "I choose you, now and always",
        "You are the love story I always dreamed of",
        "You make my world brighter",
        "Loving you is easy because you're amazing",
        "You are the best part of my day",
        "With you, every moment is special",
        "You are the one my heart adores",
        "You make my heart sing with joy",
        "You are the reason I smile",
        "You are the love that fills my life",
        "You are the answer to my prayers",
        "You are my forever and always",
        "I love you more than yesterday, but less than tomorrow",
        "You are the one I want to grow old with",
        "You are the love I never knew I was searching for",
        "My love for you is beyond measure",
        "You are the spark in my life's story",
        "You are my soul's reflection",
        "Loving you is the most beautiful journey",
        "You are my everything",
        "I am blessed to have you in my life"
    ];
    if (usedQuotes.length === quotes.length) {
        // Reset usedQuotes when all quotes have been displayed
        usedQuotes = [];
    }

    // Generate a random index until an unused quote is found
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (usedQuotes.includes(randomIndex));

    const randomQuote = quotes[randomIndex];
    usedQuotes.push(randomIndex);

    // Add a bounce animation to the cat
    cat.style.transform = 'scale(1.1)';
    setTimeout(() => {
        cat.style.transform = 'scale(1)';
    }, 500);

    // Add a magical appearing effect to the heart quote
    heartQuote.style.opacity = 0;
    setTimeout(() => {
        heartQuote.textContent = randomQuote;
        heartQuote.style.opacity = 1;
    }, 500);

    // Start the emoji rain only if it's not already raining
    if (!isRaining) {
        generateEmojiRain();
    }
});

function generateEmojiRain() {
    const emojis = ["❤️", "😻", "😺", "🐾", "😽", "💘", "🌈", "😍", "🥰", "💖", "💓", "💕",
    "❤️", "😻", "😺", "🐾", "😽", "💘", "🌈", "😍", "🥰", "💖", "💓", "💕"];


    emojis.forEach(emoji => {
        const emojiElement = document.createElement('div');
        emojiElement.className = 'emoji';
        emojiElement.textContent = emoji;
        emojiRain.appendChild(emojiElement);

        // Randomize initial position and animation duration
        const initialX = Math.random() * window.innerWidth;
        const initialY = Math.random() * window.innerHeight;
        const animationDuration = Math.random() * 2 + 3; // Between 3 and 5 seconds
        emojiElement.style.left = `${initialX}px`;
        emojiElement.style.top = `${initialY}px`;
        emojiElement.style.animationDuration = `${animationDuration}s`;

        // Remove emojis after they fall to the bottom
        emojiElement.addEventListener('animationiteration', () => {
            emojiRain.removeChild(emojiElement);
        });

        // Stop raining when emojiRain is empty
        emojiElement.addEventListener('animationend', () => {
            if (emojiRain.childElementCount === 0) {
                isRaining = false;
            }
        });
    });
}
