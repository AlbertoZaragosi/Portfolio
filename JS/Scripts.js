function revealPhoneNumber() {
    var phoneNumber = document.getElementById("phone-number");
    phoneNumber.style.transition = "opacity 1s ease-in-out";
    phoneNumber.style.opacity = "1";
}

// Array de estilos disponibles
const styles = [
    '../CSS/styles-futurist.css',
    '../CSS/styles-cyberpunk.css',
    '../CSS/styles-pink.css',
    '../CSS/styles-pruple.css'
];

// Índice del estilo actual
var currentStyleIndex = 0;

// Función para cambiar el estilo
function changeStyle() {
    currentStyleIndex = parseInt(currentStyleIndex);
    currentStyleIndex = (currentStyleIndex+1) % styles.length;
    const styleLink = document.getElementById('cssLink');
    styleLink.setAttribute('href', `CSS/${styles[currentStyleIndex]}`);
    localStorage.setItem("index",currentStyleIndex);
}

function setStyle(){
    let index = localStorage.getItem("index");
    if(index ==null){
        index = 0;
        
    }
        const styleLink = document.getElementById('cssLink');
        styleLink.setAttribute('href', `CSS/${styles[index]}`);
        currentStyleIndex = index;
}

