
const projectList = [
    {
        id: 1,
        number: "01",
        title: "Amazone - Clone",
        discription: "Developed a responsive e-commerce web application inspired by Amazon. Implemented product listing, navigation, and UI components using Bootstrap. Created interactive user interface with dynamic elements Focused on modern design, responsiveness, and usability",
        teachStack: ["HTML, CSS, Bootstrap, JavaScript"],
        image: "assets/projects/project1.webp",
        liveLink: "#",
        githubLink: "#",
    },
    {
        id: 2,
        number: "02",
        title: "WhatsApp - Clone",
        discription: "Developed a responsive chat interface inspired by WhatsApp. Implemented UI components such as chat list, message bubbles, and input area. Focused on mobile-first design and responsive layout using Bootstrap Created a frontend-only clone to showcase design and user interface",
        teachStack: ["HTML, CSS, Bootstrap, "],
        image: "assets/projects/whatsapp-clone.PNG",
        liveLink: "#",
        githubLink: "#",
    },
    {
        id: 3,
        number: "03",
        title: "WhatsApp - Clone",
        discription: "Developed a responsive chat interface inspired by WhatsApp. Implemented UI components such as chat list, message bubbles, and input area. Focused on mobile-first design and responsive layout using Bootstrap Created a frontend-only clone to showcase design and user interface",
        teachStack: ["HTML, CSS, Bootstrap, "],
        image: "assets/projects/Ice Cream.PNG",
        liveLink: "#",
        githubLink: "#",
    },
];

const projects = document.querySelector(".projects");

let currentIndex = 0;

const renderProject = (index) => {
    const projectContent = projectList[index];

    const previousDisabled = currentIndex === 0;

    const NextDisabled = currentIndex === projectList.length - 1;

    projects.innerHTML =
        `<div class="project-info">
            <h3>${projectContent?.number}</h3 >
            <h4>${projectContent?.title}</h4>
            <p>${projectContent?.discription}</p>

         <div class="tech-stack">
         ${projectContent?.teachStack?.map((tech, i) => {
            return `
            <span key=${i}>${tech}</span>
            `;
        }).join(",")}
         </div>

         <hr>

         <div class="links">
             <a href="${projectContent?.liveLink}">
                 <i class="bx bx-arrow-down-right"></i>
             </a>
             <a href="${projectContent?.githubLink}">
                 <i class="fa-brands fa-square-github"></i>
             </a>
         </div>

        </div>


        <div class="carousel">
                    <img src="${projectContent?.image}" alt="${projectContent?.title}">
                    <div class="arrows">
                        <a href="#" id="previous" class=${previousDisabled ? "disabled-btn" : ""}> <i class='bx  bx-less-than'></i></a>
                        <a href="#" id="next" class=${NextDisabled ? "disabled-btn" : ""}><i class='bx  bx-greater-than'></i></a>
                    </div>
        </div>
    `;

    document.getElementById('previous').addEventListener("click", (e) => {
        e.preventDefault();

        if (currentIndex > 0) {
            currentIndex--;
            renderProject(currentIndex);
        }
    });

    document.getElementById('next').addEventListener("click", (e) => {
        e.preventDefault();

        if (currentIndex < projectList.length - 1) {
            currentIndex++;
            renderProject(currentIndex);
        }
    });

};

renderProject(currentIndex);



