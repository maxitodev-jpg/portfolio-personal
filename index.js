// Variables
const navbar = document.querySelector(".navbar")
const items = document.querySelectorAll(".a-items")
const sectionsTrain = document.querySelector(".sections-train")
const submit = document.querySelector(".btn-send")
const formulary = document.querySelector(".form")
const language = document.querySelector(".language")
const langImg = document.querySelector(".img-language")
document.querySelector('.projects').scrollTop = 0;
const translates = document.querySelectorAll("[data-translate]")
const gmail = document.querySelector(".a-gmail")
let currentLanguage = "en"
// 

const translations = {
    en: {
        home: "HOME",
        aboutMe:"ABOUT ME",
        projects: "PROJECTS",
        contact: "CONTACT",
        homeP: "~ Full Stack Developer ~",
        amP: "- I'm Maxi, a Full-Stack developer focused on Front-End and strongly driven by UX/UI design. I am passionate about building intuitive, visually appealing, and high-quality software that users truly enjoy. I am currently in my first year of the Associate Degree in Full Stack Development at the Universidad Provincial de Córdoba (UPC). I possess solid judgment and critical thinking skills, allowing me to confidently make difficult decisions when tackling complex projects.",
        enAm:"- Additionally, I have a strong command of English (B1 level). While much of my early learning was passive during my childhood, I have intensified my focus in recent years, significantly improving both my speaking and listening skills.",
        mfc: "My formation in CyberSecurity",
        cyb: "- In parallel, I am training in cybersecurity to integrate secure coding practices from the ground up. My current goal is to keep refining my technical skills and contribute value to challenging projects.",
        doCV: "Download CV",
        am: "About Me",
        skills: "Skills",
        muxic: "Muxic is a web-based music player designed with a clean, modern, and minimalist aesthetic. It features a fully responsive UI with glassmorphism effects, intuitive playback controls, and a vibrant summer-inspired visual identity.",
        myta: "Myta is a To-Do List application with extra functionalities. Beyond creating and managing tasks, what sets Myta apart are the 'Calendar' and 'Today' sections, designed specifically to maintain the user's focus.",
        contacto: "Contact Me",
        glad: "~ I'll be glad to answer! ~",
        send: "Send",
    },
    es: {
        home: "INICIO",
        aboutMe: "SOBRE MÍ",
        projects: "PROYECTOS",
        contact:"CONTACTO",
        homeP: "~ Desarrollador Full Stack ~",
        amP: "Soy Maxi, desarrollador Full-Stack centrado en el Front-End y con una fuerte inclinación hacia el diseño UX/UI. Me apasiona crear software intuitivo, estéticamente atractivo y de alta calidad para que los usuarios realmente disfruten la experiencia. Actualmente, curso el primer año de la Tecnicatura Universitaria en Desarrollo Full Stack en la Universidad Provincial de Córdoba (UPC). Cuento con un sólido criterio propio que me permite afrontar con seguridad la toma de decisiones complejas en cada proyecto.",
        enAm: "Además, poseo un gran entendimiento del inglés (nivel B1). Aunque gran parte de mi aprendizaje fue pasivo durante la infancia, en los últimos años intensifiqué mi formación, logrando una mejora significativa en mi fluidez al hablar y en mi comprensión auditiva.",
        mfc: "Mi formación en Ciberseguridad",
        cyb: "Paralelamente, me formo en ciberseguridad para integrar prácticas seguras desde las primeras etapas del desarrollo. Mi objetivo actual es seguir perfeccionando mis habilidades técnicas y aportar valor en proyectos desafiantes.",
        doCV: "Descargar CV",
        am: "Sobre Mí",
        skills: "Habilidades",
        muxic: "Muxic es un reproductor de música basado en web, diseñado con una estética limpia, moderna y minimalista. Cuenta con una interfaz de usuario completamente responsiva con efectos de glassmorphism, controles de reproducción y una identidad visual vibrante inspirada en el verano.",
        myta: 'Myta es una aplicación de lista de tareas con funcionalidades adicionales. Más allá de la creación y gestión de tareas, lo que diferencia a Myta son sus secciones "Calendario" y "Hoy", diseñadas específicamente para mantener el enfoque del usuario.',
        contacto: "Contacto",
        glad: "~ ¡Estaré encantado de responder! ~",
        send: "Enviar",
    }
}

gmail.addEventListener("click", (e) => {
    e.preventDefault()
    navigator.clipboard.writeText("maxitodeveloper@gmail.com")
    .then(() => {
            alert("¡Email copiado en portapapeles!"); 
        })
        .catch(error => {
            console.error("Error copiar el email: ", error);
        });
})

items.forEach((item) => {
    item.addEventListener("click", (e) => {
        e.preventDefault();
        
        items.forEach((itemRemove) =>{
            itemRemove.classList.remove("active-link");
            sectionsTrain.classList.remove("show-about", "show-projects", "show-contact");
        });
    item.classList.add("active-link");
    const destino = item.dataset.section;

    if (destino !== "home") {
            sectionsTrain.classList.add(destino);
    }
    });
});

formulary.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const formData = new FormData(formulary);

    fetch("https://formsubmit.co/maxitodeveloper@gmail.com?_captcha=false", {
        method: "POST",
        body: formData,
        headers: {
            "Accept": "application/json"
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Error en la respuesta del servidor");
        }
        return response.text();
    })
    .then(data => {
        formulary.reset();
        alert("¡Mensaje enviado!");
    })
    .catch(error => {
        console.error("Ocurrió un problema:", error);
        alert("Ocurrió un error al enviar. Intentá de nuevo.");
    });
});

language.addEventListener("click", () => {
    if (langImg.src.includes("estados-unidos.png")) {
        langImg.src = "icons/españa.png"
        currentLanguage = "es"
        translates.forEach((translate) => {
            const clave = translate.dataset.translate
            translate.textContent = translations[currentLanguage][translate.dataset.translate]
        })
    } else {
        langImg.src = "icons/estados-unidos.png"
        currentLanguage = "en"
        translates.forEach((translate) => {
            const clave = translate.dataset.translate
            translate.textContent = translations[currentLanguage][translate.dataset.translate]
        })
    }
});