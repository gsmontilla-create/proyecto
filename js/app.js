// Función para mostrar vistas
function showView(viewId) {
    document.querySelectorAll('.view').forEach(v => v.classList.add('hidden'));
    const target = document.getElementById(viewId);
    if (target) {
        target.classList.remove('hidden');
        window.scrollTo(0,0);
    }
}

// Agregar efectos de fondo
document.addEventListener('DOMContentLoaded', function() {
    // Grain effect
    const grain = document.createElement('div');
    grain.className = 'grain';
    document.body.appendChild(grain);

    // Scanline effect
    const scanline = document.createElement('div');
    scanline.className = 'scanline';
    document.body.appendChild(scanline);

    // Frases inspiradoras
    const frases = [
        "El desarrollo web es un viaje continuo de aprendizaje.",
        "La creatividad es la clave para soluciones innovadoras.",
        "Cada línea de código cuenta una historia.",
        "La paciencia y la práctica hacen al maestro.",
        "Innova, crea, transforma el mundo digital.",
        "El código es poesía en movimiento."
    ];

    // Agregar botón para frase aleatoria
    const phraseBtn = document.createElement('button');
    phraseBtn.className = 'glow-btn';
    phraseBtn.textContent = 'FRASE ALEATORIA';
    document.querySelector('header').appendChild(phraseBtn);

    const textTarget = document.createElement('p');
    textTarget.id = 'text-target';
    textTarget.style.cssText = 'margin: 10px 0; opacity: 1; transition: opacity 0.3s; font-style: italic;';
    textTarget.textContent = '"Haz clic para una frase inspiradora."';
    document.querySelector('header').appendChild(textTarget);

    phraseBtn.addEventListener('click', () => {
        textTarget.style.opacity = "0";
        setTimeout(() => {
            const random = Math.floor(Math.random() * frases.length);
            textTarget.innerText = `"${frases[random]}"`;
            textTarget.style.opacity = "1";
        }, 300);
    });

    // Interactividad existente
    const mainElement = document.querySelector('main');
    if (mainElement) {
        mainElement.addEventListener('click', function() {
            if (this.style.backgroundColor === 'rgb(146, 30, 117)') {
                this.style.backgroundColor = '#ff5722';
            } else {
                this.style.backgroundColor = '#921e75';
            }
        });
    }

    const asideElement = document.querySelector('aside');
    if (asideElement) {
        const toggleButton = document.createElement('button');
        toggleButton.className = 'glow-btn';
        toggleButton.textContent = 'ALTERNAR CONTENIDO SECUNDARIO';
        document.querySelector('header').appendChild(toggleButton);

        toggleButton.addEventListener('click', function() {
            if (asideElement.style.display === 'none') {
                asideElement.style.display = 'block';
            } else {
                asideElement.style.display = 'none';
            }
        });
    }

    if (!window.location.pathname.includes('index.html')) {
        const existingHomeLink = document.querySelector('header nav a[href$="index.html"], header nav a[href="/"]');
        if (!existingHomeLink) {
            const backButton = document.createElement('button');
            backButton.className = 'glow-btn';
            backButton.textContent = 'VOLVER AL INICIO';
            document.querySelector('header').appendChild(backButton);

            backButton.addEventListener('click', function() {
                window.location.href = '../index.html';
            });
        }
    }

    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
            this.style.transition = 'transform 0.3s';
        });
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});

