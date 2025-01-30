document.addEventListener("DOMContentLoaded", function () {
    const lightModeButton = document.querySelector(".box img[src='imgs/sun.jpeg']");
    const languageButton = document.querySelector(".box img[src='imgs/esp.jpeg']");
    const body = document.body;
    const sideImages = document.querySelectorAll(".img_lateral img");
    
    const textElements = {
        "en": {
            "about-title": "About Me",
            "intro": "Hi, I'm <strong>Alberto Zaragosi</strong>, a passionate developer with interests in:",
            "games": "🎮 Video Games",
            "anime": "🎥 Anime",
            "pixelart": "🎨 Pixel Art",
            "coding": "💻 Coding",
            "goal": "I'm currently seeking a <strong>Junior Developer</strong> position, as I am eager to gain professional experience in programming.",
            "mission": "My goal is to grow as a developer, learn new technologies, and contribute to exciting projects."
        },
        "es": {
            "about-title": "Sobre mí",
            "intro": "Hola, soy <strong>Alberto Zaragosi</strong>, un desarrollador apasionado con intereses en:",
            "games": "🎮 Videojuegos",
            "anime": "🎥 Anime",
            "pixelart": "🎨 Pixel Art",
            "coding": "💻 Programación",
            "goal": "Actualmente busco un puesto como <strong>Desarrollador Junior</strong>, ya que quiero obtener experiencia profesional en programación.",
            "mission": "Mi objetivo es crecer como desarrollador, aprender nuevas tecnologías y contribuir a proyectos emocionantes."
        }
    };
    let currentLanguage = "en";
    
    lightModeButton.addEventListener("click", function () {
        body.classList.toggle("light-mode");
        if (body.classList.contains("light-mode")) {
            body.style.backgroundColor = "#f5f5f5";
            body.style.color = "#222";
            lightModeButton.src = "imgs/moon.jpeg";
            lightModeButton.nextElementSibling.textContent = "Dark mode";
            sideImages.forEach(img => img.src = "imgs/Mountain.gif");
        } else {
            body.style.backgroundColor = "#222034";
            body.style.color = "#ffffff";
            lightModeButton.src = "imgs/sun.jpeg";
            lightModeButton.nextElementSibling.textContent = "Light mode";
            sideImages.forEach(img => img.src = "imgs/SpaceShip.gif");
        }
    });

    languageButton.addEventListener("click", function () {
        currentLanguage = currentLanguage === "en" ? "es" : "en";
        for (const key in textElements[currentLanguage]) {
            document.getElementById(key).innerHTML = textElements[currentLanguage][key];
        }
        languageButton.nextElementSibling.textContent = currentLanguage === "en" ? "Language" : "Idioma";
    });
});