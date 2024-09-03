// Event listener for dark mode toggle button
document.getElementById('dark-mode-toggle').addEventListener('click', function() {
    // Toggles the 'dark-mode' class on the body element
    document.body.classList.toggle('dark-mode');
});

// Object containing translations for English and Spanish
const translations = {
    en: {
        name: "Alberto Zaragosi Tenorio",
        title: "Back-end Developer",
        location: "Blackrock, Dublin",
        contactLabel: "Contact:",
        experienceTitle: "Experience",
        educationTitle: "Education",
        skillsTitle: "Skills",
        jobTitle: "Back-end Developer Intern",
        jobLocation: "TEIX, Madrid (Remote) | March 2024 - June 2024",
        jobTasks: [
            "Actively participated in backend application development.",
            "Collaborated on scalable solutions using modern technologies."
        ],
        educationInfo: "Higher National Diploma in Cross-Platform Application Development",
        educationInstitution: "UNIRFP, Madrid | September 2021 - June 2024",
        description: "Recent graduate in Cross-platform Application Development with experience in web and software development. Committed to creating efficient software solutions and continuous improvement through learning and practice. Seeking an opportunity to start my career as a Junior Developer in a dynamic company."
    },
    es: {
        name: "Alberto Zaragosi Tenorio",
        title: "Desarrollador Back-end",
        location: "Blackrock, Dublín",
        contactLabel: "Contacto:",
        experienceTitle: "Experiencia",
        educationTitle: "Educación",
        skillsTitle: "Habilidades",
        jobTitle: "Prácticas de Desarrollador Back-end",
        jobLocation: "TEIX, Madrid (Remoto) | Marzo 2024 - Junio 2024",
        jobTasks: [
            "Participé activamente en el desarrollo de aplicaciones backend.",
            "Colaboré en soluciones escalables utilizando tecnologías modernas."
        ],
        educationInfo: "Grado Superior en Desarrollo de Aplicaciones Multiplataforma",
        educationInstitution: "UNIRFP, Madrid | Septiembre 2021 - Junio 2024",
        description:"Recién graduado en Desarrollo de Aplicaciones Multiplataforma con experiencia en desarrollo web y software. Comprometido con la creación de soluciones de software eficientes y la mejora continua a través del aprendizaje y la práctica. Buscando una oportunidad para iniciar mi carrera como Desarrollador Junior en una empresa dinámica."
    }
};

// Function to set the language of the page
function setLanguage(lang) {
    // Update text content based on the selected language
    document.getElementById('name').textContent = translations[lang].name;
    document.getElementById('title').textContent = translations[lang].title;
    document.getElementById('location').textContent = translations[lang].location;
    document.getElementById('contact-label').textContent = translations[lang].contactLabel;
    document.getElementById('experience-title').textContent = translations[lang].experienceTitle;
    document.getElementById('education-title').textContent = translations[lang].educationTitle;
    document.getElementById('skills-title').textContent = translations[lang].skillsTitle;
    document.getElementById('job-title').textContent = translations[lang].jobTitle;
    document.getElementById('job-location').textContent = translations[lang].jobLocation;
    document.getElementById('description').textContent = translations[lang].description;

    // Update job tasks list
    const jobTasks = document.getElementById('job-tasks');
    jobTasks.innerHTML = ''; // Clear existing tasks
    translations[lang].jobTasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task;
        jobTasks.appendChild(li);
    });

    // Update education information
    document.getElementById('education-info').textContent = translations[lang].educationInfo;
    document.getElementById('education-institution').textContent = translations[lang].educationInstitution;
}
