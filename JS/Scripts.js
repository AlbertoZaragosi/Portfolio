function revealPhoneNumber() {
    var phoneNumber = document.getElementById("phone-number");
    phoneNumber.style.transition = "opacity 1s ease-in-out";
    phoneNumber.style.opacity = "1";
}

// Array de estilos disponibles
const styles = [
    'styles-default.css',
    'styles-modern.css',
    'styles-futurist.css',
    'styles-cyberpunk.css',
    'styles-neon.css'
];

// Índice del estilo actual
let currentStyleIndex = 0;

// Función para cambiar el estilo
function changeStyle() {
    currentStyleIndex = (currentStyleIndex + 1) % styles.length;
    const styleLink = document.getElementById('style-link');
    styleLink.setAttribute('href', `CSS/${styles[currentStyleIndex]}`);
}