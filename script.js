// ============ CONFIGURATION ============
const SECRET_CODE = "MYLOVE224";
const WEDDING_DATE = new Date("2026-07-30T00:00:00");

// Timeline data
const timelineEvents = [
    { icon: "👀", date: "16/11/2024", text: "La voir pour la première fois chez ses parents" },
    { icon: "💬", date: "01/12/2024", text: "Commencer à parler à distance pour la première fois" },
    { icon: "❤️", date: "25/05/2025", text: "Premier date physique" },
    { icon: "💎", date: "16/06/2025", text: "La proposal" },
    { icon: "✈️", date: "15/11/2025", text: "Atterrissage à l'aéroport (elle est venue te chercher)" },
    { icon: "🎁", date: "30/11/2025", text: "Son cadeau (tiramisu) le meilleur" },
    { icon: "💒", date: "30/07/2026", text: "Date du mariage" }
];

// Messages d'amour
const loveMessages = [
    "Chaque kilomètre qui nous sépare ne fait que renforcer mon amour pour toi. Tu es ma force, même à distance.",
    "Dans un monde de 8 milliards de personnes, c'est toi que mon cœur a choisi. C'est toi, ma 224, mon unique.",
    "Tu n'es pas juste mon amour, tu es mon avenir, mon rêve devenu réalité, ma raison de sourire chaque matin.",
    "Les meilleurs moments de ma vie sont ceux passés avec toi, et les plus beaux sont encore à venir.",
    "Je t'ai aimée hier, je t'aime aujourd'hui, et je t'aimerai pour toujours. Tu es mon éternité."
];

let currentStep = 1;
let puzzleCompleted = false;
let escapeAttempts = 0;

// ============ PARTICULES ANIMÉES ============
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = Math.random() * 10 + 5 + 'px';
        particle.style.height = particle.style.width;
        particle.style.borderRadius = '50%';
        
        // Mix de cœurs et étoiles
        if (Math.random() > 0.5) {
            particle.innerHTML = Math.random() > 0.5 ? '💕' : '⭐';
            particle.style.fontSize = Math.random() * 15 + 10 + 'px';
        } else {
            particle.style.background = `rgba(255, ${Math.random() * 100 + 155}, ${Math.random() * 100 + 155}, ${Math.random() * 0.5 + 0.2})`;
        }
        
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.pointerEvents = 'none';
        
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 5;
        
        particle.style.animation = `float ${duration}s ${delay}s infinite ease-in-out`;
        
        particlesContainer.appendChild(particle);
    }
}

// Animation CSS pour les particules
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0%, 100% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        50% {
            transform: translateY(-100vh) translateX(${Math.random() * 100 - 50}px) rotate(360deg);
        }
    }
`;
document.head.appendChild(style);

// ============ ÉTAPE 1: VÉRIFICATION DU CODE ============
function checkCode() {
    const input = document.getElementById('secret-code').value.trim();
    const errorMsg = document.getElementById('error-msg');
    
    if (input.toUpperCase() === SECRET_CODE.toUpperCase()) {
        errorMsg.textContent = '';
        nextStep(2);
    } else {
        errorMsg.textContent = '❌ Code incorrect. Regarde la carte dans les fleurs... 💐';
        document.getElementById('secret-code').value = '';
        
        // Shake animation
        const inputField = document.getElementById('secret-code');
        inputField.style.animation = 'shake 0.5s';
        setTimeout(() => {
            inputField.style.animation = '';
        }, 500);
    }
}

// Permettre Enter pour valider
document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('secret-code');
    if (input) {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                checkCode();
            }
        });
    }
});

// Shake animation
const shakeStyle = document.createElement('style');
shakeStyle.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-10px); }
        75% { transform: translateX(10px); }
    }
`;
document.head.appendChild(shakeStyle);

// ============ NAVIGATION ENTRE ÉTAPES ============
function nextStep(stepNumber) {
    document.querySelectorAll('.step').forEach(step => {
        step.classList.remove('active');
    });
    
    const nextStepElement = document.getElementById(`step-${getStepName(stepNumber)}`);
    if (nextStepElement) {
        nextStepElement.classList.add('active');
        currentStep = stepNumber;
        
        // Initialiser l'étape
        if (stepNumber === 2) initPuzzle();
        if (stepNumber === 3) initTimeline();
        if (stepNumber === 4) initMessages();
        if (stepNumber === 5) initQuestion();
        if (stepNumber === 6) initFinal();
    }
}

function getStepName(num) {
    const names = ['', 'login', 'puzzle', 'timeline', 'messages', 'question', 'final'];
    return names[num];
}

// ============ ÉTAPE 2: PUZZLE ============
let draggedPiece = null;
const puzzleState = Array(9).fill(null);

function initPuzzle() {
    const board = document.getElementById('puzzle-board');
    const piecesContainer = document.getElementById('puzzle-pieces');
    
    // Clear previous content
    board.innerHTML = '';
    piecesContainer.innerHTML = '';
    
    // Create board cells
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement('div');
        cell.className = 'puzzle-cell';
        cell.dataset.position = i;
        
        cell.addEventListener('dragover', handleDragOver);
        cell.addEventListener('drop', handleDrop);
        cell.addEventListener('dragleave', handleDragLeave);
        
        board.appendChild(cell);
    }
    
    // Create puzzle pieces in random order
    const positions = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    shuffleArray(positions);
    
    positions.forEach((pos, index) => {
        const piece = document.createElement('div');
        piece.className = 'puzzle-piece';
        piece.draggable = true;
        piece.dataset.correctPosition = pos;
        piece.dataset.currentPosition = index;
        
        const row = Math.floor(pos / 3);
        const col = pos % 3;
        piece.style.backgroundImage = 'url("puzzle-image.jpg")';
        piece.style.backgroundPosition = `-${col * 120}px -${row * 120}px`;
        
        piece.addEventListener('dragstart', handleDragStart);
        piece.addEventListener('dragend', handleDragEnd);
        
        piecesContainer.appendChild(piece);
    });
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function handleDragStart(e) {
    draggedPiece = e.target;
    e.target.classList.add('dragging');
}

function handleDragEnd(e) {
    e.target.classList.remove('dragging');
}

function handleDragOver(e) {
    e.preventDefault();
    e.currentTarget.classList.add('drop-active');
}

function handleDragLeave(e) {
    e.currentTarget.classList.remove('drop-active');
}

function handleDrop(e) {
    e.preventDefault();
    e.currentTarget.classList.remove('drop-active');
    
    const cell = e.currentTarget;
    const targetPosition = parseInt(cell.dataset.position);
    const correctPosition = parseInt(draggedPiece.dataset.correctPosition);
    
    if (targetPosition === correctPosition) {
        // Correct placement
        cell.appendChild(draggedPiece);
        draggedPiece.classList.add('placed');
        draggedPiece.draggable = false;
        puzzleState[targetPosition] = draggedPiece;
        
        // Check if puzzle is complete
        checkPuzzleComplete();
    } else {
        // Wrong placement - shake
        draggedPiece.style.animation = 'shake 0.5s';
        setTimeout(() => {
            draggedPiece.style.animation = '';
        }, 500);
    }
}

function checkPuzzleComplete() {
    const completed = puzzleState.every(piece => piece !== null);
    
    if (completed && !puzzleCompleted) {
        puzzleCompleted = true;
        setTimeout(() => {
            document.getElementById('puzzle-complete').classList.remove('hidden');
            createConfetti();
        }, 500);
    }
}

function createConfetti() {
    const colors = ['#ff6b6b', '#feca57', '#48dbfb', '#ff9ff3', '#54a0ff'];
    const confettiCount = 100;
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '-10px';
        confetti.style.opacity = '1';
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        confetti.style.pointerEvents = 'none';
        confetti.style.zIndex = '9999';
        
        document.body.appendChild(confetti);
        
        const fallDuration = Math.random() * 3 + 2;
        const fallDistance = window.innerHeight + 50;
        
        confetti.animate([
            { top: '-10px', opacity: 1 },
            { top: fallDistance + 'px', opacity: 0 }
        ], {
            duration: fallDuration * 1000,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        });
        
        setTimeout(() => {
            confetti.remove();
        }, fallDuration * 1000);
    }
}

// ============ ÉTAPE 3: TIMELINE ============
function initTimeline() {
    const timeline = document.getElementById('timeline');
    timeline.innerHTML = '';
    
    timelineEvents.forEach((event, index) => {
        const item = document.createElement('div');
        item.className = 'timeline-item';
        
        item.innerHTML = `
            <div class="timeline-icon">${event.icon}</div>
            <div class="timeline-content">
                <div class="timeline-date">${event.date}</div>
                <div class="timeline-text">${event.text}</div>
            </div>
        `;
        
        timeline.appendChild(item);
    });
}

// ============ ÉTAPE 4: MESSAGES D'AMOUR ============
function initMessages() {
    const container = document.getElementById('messages-container');
    container.innerHTML = '';
    
    loveMessages.forEach((message, index) => {
        setTimeout(() => {
            const card = document.createElement('div');
            card.className = 'message-card';
            card.style.animationDelay = `${index * 0.3}s`;
            
            card.innerHTML = `<p class="message-text">${message}</p>`;
            
            container.appendChild(card);
            
            // Show next button after all messages
            if (index === loveMessages.length - 1) {
                setTimeout(() => {
                    document.getElementById('btn-next-messages').style.display = 'block';
                }, 1000);
            }
        }, index * 1500);
    });
}

// ============ ÉTAPE 5: LA QUESTION (BOUTON QUI S'ÉCHAPPE) ============
const escapeMessages = [
    "Essaie encore 😏",
    "Tu es sûre ? 🤔",
    "Vraiment ? 😢",
    "Allez, clique sur OUI ! 💕",
    "Le bouton OUI est bien mieux ! 😊",
    "Tu me brises le cœur... 💔",
    "Dernier essai... 🥺"
];

function initQuestion() {
    const btnNo = document.getElementById('btn-no');
    escapeAttempts = 0;
    
    // Desktop: mouseover
    btnNo.addEventListener('mouseover', moveNoButton);
    
    // Mobile: touchstart
    btnNo.addEventListener('touchstart', function(e) {
        e.preventDefault();
        moveNoButton();
    });
}

function moveNoButton() {
    const btnNo = document.getElementById('btn-no');
    const container = document.querySelector('.buttons-container');
    const message = document.getElementById('escape-message');
    
    // Get container dimensions
    const containerRect = container.getBoundingClientRect();
    const btnRect = btnNo.getBoundingClientRect();
    
    // Calculate max positions
    const maxX = containerRect.width - btnRect.width - 40;
    const maxY = containerRect.height - btnRect.height - 40;
    
    // Random position
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    
    btnNo.style.left = randomX + 'px';
    btnNo.style.top = randomY + 'px';
    
    // Show message
    if (escapeAttempts < escapeMessages.length) {
        message.textContent = escapeMessages[escapeAttempts];
        escapeAttempts++;
    }
    
    // After many attempts, make button smaller or disappear
    if (escapeAttempts > 5) {
        btnNo.style.transform = `scale(${1 - (escapeAttempts - 5) * 0.15})`;
    }
    
    if (escapeAttempts > 8) {
        btnNo.style.opacity = '0';
        btnNo.style.pointerEvents = 'none';
        message.textContent = "Le bouton Non a disparu... Il ne reste que OUI ! 😊";
    }
}

function handleYes() {
    // Huge celebration!
    createMassiveConfetti();
    createHearts();
    nextStep(6);
}

function createMassiveConfetti() {
    const colors = ['#ff6b6b', '#feca57', '#48dbfb', '#ff9ff3', '#54a0ff', '#1dd1a1'];
    
    for (let i = 0; i < 200; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.position = 'fixed';
            confetti.style.width = Math.random() * 15 + 5 + 'px';
            confetti.style.height = confetti.style.width;
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.top = '-20px';
            confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
            confetti.style.opacity = '1';
            confetti.style.pointerEvents = 'none';
            confetti.style.zIndex = '9999';
            
            document.body.appendChild(confetti);
            
            confetti.animate([
                {
                    top: '-20px',
                    transform: `rotate(0deg)`,
                    opacity: 1
                },
                {
                    top: window.innerHeight + 50 + 'px',
                    transform: `rotate(${Math.random() * 720}deg)`,
                    opacity: 0
                }
            ], {
                duration: Math.random() * 3000 + 2000,
                easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            });
            
            setTimeout(() => confetti.remove(), 5000);
        }, i * 20);
    }
}

function createHearts() {
    const hearts = ['💕', '💖', '💗', '💝', '❤️', '💓'];
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.position = 'fixed';
            heart.style.fontSize = Math.random() * 30 + 20 + 'px';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.bottom = '-50px';
            heart.style.pointerEvents = 'none';
            heart.style.zIndex = '9999';
            
            document.body.appendChild(heart);
            
            heart.animate([
                {
                    bottom: '-50px',
                    opacity: 1,
                    transform: 'translateX(0) rotate(0deg)'
                },
                {
                    bottom: '110vh',
                    opacity: 0,
                    transform: `translateX(${Math.random() * 200 - 100}px) rotate(${Math.random() * 360}deg)`
                }
            ], {
                duration: Math.random() * 3000 + 3000,
                easing: 'ease-out'
            });
            
            setTimeout(() => heart.remove(), 6000);
        }, i * 50);
    }
}

// ============ ÉTAPE 6: FINAL + COMPTE À REBOURS ============
function initFinal() {
    createFireworks();
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

function updateCountdown() {
    const now = new Date();
    const diff = WEDDING_DATE - now;
    
    if (diff <= 0) {
        document.getElementById('countdown').innerHTML = '<p style="font-size: 36px;">🎉 C\'EST AUJOURD\'HUI ! 🎉</p>';
        return;
    }
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    document.getElementById('countdown').innerHTML = `
        <div class="countdown-item">
            <span class="countdown-number">${days}</span>
            <span class="countdown-label">Jours</span>
        </div>
        <div class="countdown-item">
            <span class="countdown-number">${hours}</span>
            <span class="countdown-label">Heures</span>
        </div>
        <div class="countdown-item">
            <span class="countdown-number">${minutes}</span>
            <span class="countdown-label">Minutes</span>
        </div>
        <div class="countdown-item">
            <span class="countdown-number">${seconds}</span>
            <span class="countdown-label">Secondes</span>
        </div>
    `;
}

function createFireworks() {
    const fireworksContainer = document.querySelector('.fireworks');
    const colors = ['#ff6b6b', '#feca57', '#48dbfb', '#ff9ff3', '#54a0ff', '#1dd1a1'];
    
    setInterval(() => {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight * 0.7;
        
        for (let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            particle.style.position = 'absolute';
            particle.style.width = '4px';
            particle.style.height = '4px';
            particle.style.borderRadius = '50%';
            particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            particle.style.left = x + 'px';
            particle.style.top = y + 'px';
            
            fireworksContainer.appendChild(particle);
            
            const angle = (Math.PI * 2 * i) / 30;
            const velocity = Math.random() * 100 + 50;
            const tx = Math.cos(angle) * velocity;
            const ty = Math.sin(angle) * velocity;
            
            particle.animate([
                {
                    transform: 'translate(0, 0) scale(1)',
                    opacity: 1
                },
                {
                    transform: `translate(${tx}px, ${ty}px) scale(0)`,
                    opacity: 0
                }
            ], {
                duration: 1000,
                easing: 'cubic-bezier(0, 0.9, 0.57, 1)'
            });
            
            setTimeout(() => particle.remove(), 1000);
        }
    }, 1500);
}

// ============ INITIALISATION ============
window.addEventListener('DOMContentLoaded', function() {
    createParticles();
});
