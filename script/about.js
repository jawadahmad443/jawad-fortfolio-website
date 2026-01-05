
const aboutTabs = document.querySelectorAll(".tab");
const aboutContent = document.querySelectorAll(".tab-content");

document.addEventListener('DOMContentLoaded', () => {
    if (aboutTabs) {
        aboutTabs[0].click();
    }
})

aboutTabs.forEach((tab) => {
    tab.addEventListener('click', (e) => {
        e.preventDefault();

        aboutTabs.forEach((a) => {
            a.classList.remove("active")
        });

        tab.classList.add('active');

        aboutContent.forEach((c) => {
            c.classList.remove("active");
        });

        const activeTab = tab.dataset.section;

        document.getElementById(activeTab).classList.add("active");

        if (activeTab === "experience") {
            const experiences = document.querySelector(".experience-list");

            // experiences
            const experienceList = [{
                id: 1,
                date: "Aug 2025 - Present",
                position: "Frontend Developer Intern",
                company: "Qalam Training Program",
                details: "Working on frontend development using HTML, CSS, JavaScript, React.js. Building responsive and mobile- friendly UI with Bootstrap. Converting designs into functional web pages Improving UI / UX and basic performance optimization Learning and working on real - world practice projects"
            },
                // {
                //     id: 2,
                //     date: "2022 - 2023",
                //     position: "MERN Stack Intern",
                //     company: "MERN Stack Intern",
                //     details: "Working on frontend development using HTML, CSS, JavaScript, React.js Building responsive and mobile- friendly UI with Bootstrap Converting designs into functional web pages Improving UI / UX and basic performance optimization Learning and working on real - world practice projects"
                // },
                // {
                //     id: 3,
                //     date: "2021 - 2022",
                //     position: "Freelance Web Developer",
                //     company: "Self-Employed",
                //     details: "Developed custom websites for local businesses using HTML, CSS, JavaScript, and WordPress. Focused on performance, SEO, and mobile-first design."
                // }
            ];

            const experienceContent = experienceList.map((ele) => {
                return `
                 <div class="experience-box" key=${ele?.id}>
                        <h4>${ele?.date}</h4 >
                        <h3>${ele?.position}</h3>
                        <div class="company-name">
                            <span></span>
                            <p>${ele?.company}</p>
                        </div>
                        <p>${ele?.details}</p>
                    </div>
                `;
            })

                .join("");
            if (experiences) {
                experiences.innerHTML = experienceContent;
            }

        } else if (activeTab === "education") {
            const education = document.querySelector(".education-list");

            // education
            const educationList = [{
                id: 1,
                date: "2024 - 2025",
                degree: "Higher Secondary Education (HSC - Science",
                institution: "Government Postgraduate College Timergara KPK",
                details: "Along with core subjects like Math, Physics, and Chemistry, I developed an interest in technology and started learning basic computer and web skills independently."
            },
            {
                id: 2,
                date: "2022 - 2023",
                degree: "Secondary School Certificate (SSC)",
                institution: "Government High School Khall Dir Lower",
                details: "Completed Matriculation in Science, where I built a strong understanding of Mathematics and basic computer concepts."
            },
                // {
                //     id: 3,
                //     date: "2016 - 2018",
                //     degree: "Secondary School Certificate (SSC)",
                //     institution: "ABC High School, Banglore",
                //     details: "Completed basic schooling with distinction. Actively participated in computer clubs and tech-related events."
                // }
            ];

            const educationContent = educationList.map((ele) => {
                return `
                <div class="experience-box" key=${ele?.id}>
                        <h4>${ele?.date}</h4 >
                        <h3>${ele?.degree}</h3>
                        <div class="company-name">
                            <span></span>
                            <p>${ele?.institution}</p>
                        </div>
                        <p>${ele?.details}</p>
                    </div> 
                `;
            })
                .join("");
            if (education) {
                education.innerHTML = educationContent;
            }

        } else if (activeTab === "skills") {
            const skills = document.querySelector(".skill-list");

            // skillList
            const skillList = [{
                id: 1,
                name: "HTML - Hyper Text Markup Language",
                icon: "assets/skills/html.png"
            },
            {
                id: 2,
                name: "CSS - Cascading Style Sheet",
                icon: "assets/skills/css.png"
            },
            {
                id: 3,
                name: "JavaScript",
                icon: "assets/skills/js.png"
            },
            {
                id: 4,
                name: "Wordpress",
                icon: "assets/skills/wordpress.png"
            },
            {
                id: 5,
                name: "Bootstrap",
                icon: "assets/skills/bootstrap.png"
            },
            {
                id: 6,
                name: "Node",
                icon: "assets/skills/node.png"
            },
            {
                id: 7,
                name: "React",
                icon: "assets/skills/react.png"
            },
            ];

            const skillContent = skillList.map((ele) => {
                return `
                 <div class="skill-box" key=${ele?.id}>
                    <img src=${ele?.icon} alt=${ele?.name} tittle=${ele?.name} loading="lazy">
                </div>
                `;
            })
                .join("");
            if (skills) {
                skills.innerHTML = skillContent;
            }

        } else if (activeTab == "about-me") {
            const myInfo = document.querySelector(".my-info");

            // infolist
            const infoList = [
                {
                    id: 1,
                    key: "Name : ",
                    value: "Jawad Ahmad",
                },
                {
                    id: 2,
                    key: "Country : ",
                    value: "Pakistan",
                },
                {
                    id: 3,
                    key: "Industry :",
                    value: "Software & IT",
                },
                {
                    id: 4,
                    key: "Experience :",
                    value: "6+ Months",
                },
                {
                    id: 5,
                    key: "Address : ",
                    value: "Ghalib Market Gullberg III Lahore"
                }
            ];

            const infoContent = infoList.map((ele) => {
                return `
                <div class="info-box" key=${ele?.id}>
                <span>${ele?.key}</span >
                <span>${ele?.value}</span >
                </div >
                `;
            })
                .join("");
            if (myInfo) {
                myInfo.innerHTML = infoContent;
            }
        }
    });
});