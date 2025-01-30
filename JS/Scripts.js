document.addEventListener("DOMContentLoaded", function () {
    const lightModeButton = document.querySelector(".box img[src='imgs/sun.jpeg']");
    const languageButton = document.querySelector(".box img[src='imgs/esp.jpeg']");
    const body = document.body;
    const myFace = document.querySelector(".myface img");
    const sideImages = document.querySelectorAll(".img_lateral img");
    const textElements = {
        "en": {
            /*"about": "About me",
            "projects": "Projects",*/
            "lightMode": "Dark mode",
            "language": "Language",
            "title": "Back-end Developer",
            "location": "📌Blackrock, Dublin📌",
            "description": "Back end developer with experience in web and software development. Committed to creating efficient software solutions and continuous improvement through learning and practice. Seeking an opportunity to grow as a Developer in a dynamic company."
        },
        "es": {
            /*"about": "Sobre mí",
            "projects": "Proyectos",*/
            "lightMode": "Modo oscuro",
            "language": "Idioma",
            "title": "Desarrollador Back-end",
            "location": "📌Blackrock, Dublín📌",
            "description": "Desarrollador Back-end con experiencia en desarrollo web y de software. Comprometido con la creación de soluciones de software eficientes y la mejora continua a través del aprendizaje y la práctica. Buscando una oportunidad para crecer como desarrollador en una empresa dinámica."
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
            myFace.src = "imgs/face.jpg";
            sideImages.forEach(img => img.src = "imgs/Mountain.gif");
        } else {
            body.style.backgroundColor = "#222034";
            body.style.color = "#ffffff";
            lightModeButton.src = "imgs/sun.jpeg";
            lightModeButton.nextElementSibling.textContent = "Dark mode";
            myFace.src = "imgs/face.jpg";
            sideImages.forEach(img => img.src = "imgs/SpaceShip.gif");
        }
    });

    languageButton.addEventListener("click", function () {
        currentLanguage = currentLanguage === "en" ? "es" : "en";
       /* document.querySelector("header button:first-of-type").textContent = textElements[currentLanguage].about;
        document.querySelector("header button:last-of-type").textContent = textElements[currentLanguage].projects;*/
        languageButton.nextElementSibling.textContent = textElements[currentLanguage].language;
        lightModeButton.nextElementSibling.textContent = textElements[currentLanguage].lightMode;
        document.querySelector(".info h1 + p").textContent = textElements[currentLanguage].title;
        document.querySelector(".info h1 + p + p").textContent = textElements[currentLanguage].location;
        document.querySelector(".info h1 + p + p + p").textContent = textElements[currentLanguage].description;
    });
});
