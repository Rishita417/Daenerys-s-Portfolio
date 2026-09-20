document.addEventListener('DOMContentLoaded', () => {
    
    // ELEMENTS
    const bendKneeBtn = document.getElementById('bend-knee-btn');
    const refuseBtn = document.getElementById('refuse-btn');
    const splashScreen = document.getElementById('splash-screen');
    const mainPortfolio = document.getElementById('main-portfolio');
    const dracarysOverlay = document.getElementById('dracarys-overlay');
    const eggCards = document.querySelectorAll('.egg-card');

    // 1. SPLASH SCREEN INTERACTIONS
    bendKneeBtn.addEventListener('click', () => {
        // Fade out splash screen
        splashScreen.style.opacity = '0';
        
        // Wait for fade animation, then switch visibility layout
        setTimeout(() => {
            splashScreen.classList.add('hidden');
            mainPortfolio.classList.remove('hidden');
            // Initialize background effects
            startEmberRain();
        }, 600);
    });

    refuseBtn.addEventListener('click', () => {
        // Trigger catastrophic fire script sequence
        dracarysOverlay.style.opacity = '1';
        dracarysOverlay.style.pointerEvents = 'all';
        
        // Reload page automatically after 2.5 seconds to escape the fire
        setTimeout(() => {
            location.reload();
        }, 2500);
    });

    // 2. INTERACTIVE DRAGON EGG HATCHING HINTS
    eggCards.forEach(card => {
        card.addEventListener('click', () => {
            const skillsPanel = card.querySelector('.dragon-skills');
            const statusText = card.querySelector('.egg-status');
            
            // Toggle panel reveal states
            if (skillsPanel.classList.contains('hidden-skills')) {
                skillsPanel.classList.remove('hidden-skills');
                statusText.innerText = "SUMMONED 🔥";
                statusText.style.color = "#b91c1c";
                card.style.borderColor = "#b91c1c";
            } else {
                skillsPanel.classList.add('hidden-skills');
                statusText.innerText = "Click to Hatch";
                statusText.style.color = "#d97706";
                card.style.borderColor = "#262626";
            }
        });
    });

    // 3. BACKGROUND FLOATING EMBER LOGIC
    function startEmberRain() {
        const container = document.getElementById('ember-container');
        
        setInterval(() => {
            const ember = document.createElement('div');
            ember.classList.add('ember');
            
            // Randomize size, starting horizontal placement, and float speed rates
            const size = Math.random() * 6 + 2; 
            const leftPos = Math.random() * window.innerWidth;
            const duration = Math.random() * 4 + 4; 

            ember.style.width = `${size}px`;
            ember.style.height = `${size}px`;
            ember.style.left = `${leftPos}px`;
            ember.style.animationDuration = `${duration}s`;

            container.appendChild(ember);

            // Clean up DOM nodes after floating off-screen to preserve CPU performance
            setTimeout(() => {
                ember.remove();
            }, duration * 1000);

        }, 150); // Generates a new spark particle every 150ms
    }
});
