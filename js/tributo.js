function showView(viewId) {
    // Escondemos todas las vistas
    document.querySelectorAll('.view').forEach(v => v.classList.add('hidden'));
    // Mostramos la elegida
    document.getElementById(viewId).classList.remove('hidden');
    // Scroll arriba por si acaso
    window.scrollTo(0,0);
}

const albumBtn = document.getElementById('albumBtn');
const textTarget = document.getElementById('text-target');
const music = document.getElementById('background-music');

const frases = [
    "El rap es un género contestatario y político.",
    "Escribir vueltas para recordarme qué es lo que soy.",
    "La sensatez de no ser nada más que sí mismo.",
    "Lo grabé a las dos de la mañana en el clóset.",
    "Si hablo de mí, hablo de los otros.",
    "No me acuerdo, pero este disco me ayuda a recordar."
];

if (albumBtn) {
    albumBtn.addEventListener('click', () => {
        textTarget.style.opacity = "0";
        setTimeout(() => {
            const random = Math.floor(Math.random() * frases.length);
            textTarget.innerText = `"${frases[random]}"`;
            textTarget.style.opacity = "1";
        }, 300);
    });
}
function showView(viewId) {
    // 1. Buscamos todas las secciones que tengan la clase 'view'
    const views = document.querySelectorAll('.view');
    
    // 2. Les ponemos la clase 'hidden' a todas para esconderlas
    views.forEach(v => {
        v.classList.add('hidden');
    });

    // 3. Le quitamos 'hidden' solo a la que queremos ver
    const target = document.getElementById(viewId);
    if (target) {
        target.classList.remove('hidden');
        window.scrollTo(0,0); // Volver al inicio de la pantalla
    } else {
        console.error("No se encontró la sección con ID: " + viewId);
    }
}

const secondMusic = document.getElementById('second-music');
const playPauseBtn = document.getElementById('play-pause-btn');

let currentMusic = music; // starts with background-music

function toggleSecondMusic() {
    // Pause the current one
    currentMusic.pause();
    
    // Switch to the other
    if (currentMusic === music) {
        currentMusic = secondMusic;
        playPauseBtn.innerText = 'CAMBIAR A NO ME ACUERDO';
    } else {
        currentMusic = music;
        playPauseBtn.innerText = 'CAMBIAR A MEDALLO BULLIES';
    }
    
    // Play the new one
    currentMusic.play();
}

function pauseMusic() {
    currentMusic.pause();
}


