// Función para agregar efectos de confeti cuando se carga la página
function createConfetti() {
    const colors = ['#667eea', '#764ba2', '#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4'];
    const confettiCount = 50;
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = '-10px';
        confetti.style.borderRadius = '50%';
        confetti.style.pointerEvents = 'none';
        confetti.style.zIndex = '1000';
        confetti.style.animation = `fall ${Math.random() * 3 + 2}s linear infinite`;
        
        document.body.appendChild(confetti);
        
        // Remover confeti después de la animación
        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}

// Función para agregar efecto de sparkles al hacer clic
function addSparkles(event) {
    const sparkle = document.createElement('div');
    sparkle.innerHTML = '✨';
    sparkle.style.position = 'fixed';
    sparkle.style.left = event.clientX + 'px';
    sparkle.style.top = event.clientY + 'px';
    sparkle.style.fontSize = '20px';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.zIndex = '1001';
    sparkle.style.animation = 'sparkle 1s ease-out forwards';
    
    document.body.appendChild(sparkle);
    
    setTimeout(() => {
        sparkle.remove();
    }, 1000);
}

// Función para animar elementos cuando aparecen en pantalla
function animateOnScroll() {
    const elements = document.querySelectorAll('.highlight-box, .volleyball-section, .gratitude-section, .wishes-section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}

// Función para agregar efecto de hover en la tarjeta
function addCardHoverEffect() {
    const card = document.querySelector('.birthday-card');
    
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.02)';
        card.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.15)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
        card.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.1)';
    });
}

// Función para agregar animación de escritura al título
function typeWriterEffect() {
    const title = document.querySelector('.title');
    const text = title.textContent;
    title.textContent = '';
    
    let i = 0;
    const typeInterval = setInterval(() => {
        if (i < text.length) {
            title.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(typeInterval);
        }
    }, 100);
}

// Función para agregar música de fondo (opcional)
function addBackgroundMusic() {
    // Esta función se puede usar para agregar música de fondo
    // Por ahora solo es un placeholder
    console.log('Música de fondo disponible para agregar');
}

// Función para agregar efecto de partículas flotantes
function addFloatingParticles() {
    const particles = ['🏐', '🎂', '🎈', '🎉', '✨', '🎊'];
    const particleCount = 15;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.textContent = particles[Math.floor(Math.random() * particles.length)];
        particle.style.position = 'fixed';
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.top = Math.random() * 100 + 'vh';
        particle.style.fontSize = '20px';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '999';
        particle.style.animation = `floatParticle ${Math.random() * 10 + 10}s ease-in-out infinite`;
        particle.style.opacity = '0.6';
        
        document.body.appendChild(particle);
    }
}

// Agregar estilos CSS dinámicamente para las animaciones
function addDynamicStyles() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fall {
            to {
                transform: translateY(100vh) rotate(360deg);
            }
        }
        
        @keyframes sparkle {
            0% {
                transform: scale(0) rotate(0deg);
                opacity: 1;
            }
            100% {
                transform: scale(1) rotate(180deg);
                opacity: 0;
            }
        }
        
        @keyframes floatParticle {
            0%, 100% {
                transform: translateY(0px) translateX(0px) rotate(0deg);
            }
            25% {
                transform: translateY(-20px) translateX(10px) rotate(90deg);
            }
            50% {
                transform: translateY(-10px) translateX(-10px) rotate(180deg);
            }
            75% {
                transform: translateY(-30px) translateX(5px) rotate(270deg);
            }
        }
    `;
    document.head.appendChild(style);
}

// Función principal que inicializa todos los efectos
function initBirthdayEffects() {
    addDynamicStyles();
    createConfetti();
    addFloatingParticles();
    animateOnScroll();
    addCardHoverEffect();
    
    // Agregar sparkles al hacer clic
    document.addEventListener('click', addSparkles);
    
    // Efecto de escritura después de un pequeño delay
    setTimeout(typeWriterEffect, 500);
    
    // Repetir confeti cada 10 segundos
    setInterval(createConfetti, 10000);
}

// Inicializar efectos cuando la página esté completamente cargada
document.addEventListener('DOMContentLoaded', initBirthdayEffects);

// Función para mostrar un mensaje especial al hacer doble clic en la tarjeta
function addSpecialMessage() {
    const card = document.querySelector('.birthday-card');
    let clickCount = 0;
    let clickTimer;
    
    card.addEventListener('click', () => {
        clickCount++;
        clearTimeout(clickTimer);
        
        clickTimer = setTimeout(() => {
            if (clickCount === 2) {
                showSpecialMessage();
            }
            clickCount = 0;
        }, 300);
    });
}

function showSpecialMessage() {
    const message = document.createElement('div');
    message.innerHTML = `
        <div style="
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            padding: 2rem;
            border-radius: 20px;
            text-align: center;
            z-index: 10000;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
            animation: popIn 0.5s ease-out;
        ">
            <h3 style="margin-bottom: 1rem;">🎉 ¡Feliz Cumpleaños Hannath! 🎉</h3>
            <p>¡Que este día esté lleno de alegría y bendiciones!</p>
            <button onclick="this.parentElement.remove()" style="
                margin-top: 1rem;
                padding: 0.5rem 1rem;
                border: none;
                border-radius: 10px;
                background: rgba(255, 255, 255, 0.2);
                color: white;
                cursor: pointer;
            ">Cerrar</button>
        </div>
    `;
    
    document.body.appendChild(message);
    
    // Remover automáticamente después de 5 segundos
    setTimeout(() => {
        if (message.parentElement) {
            message.remove();
        }
    }, 5000);
}

// Agregar el mensaje especial
document.addEventListener('DOMContentLoaded', addSpecialMessage); 