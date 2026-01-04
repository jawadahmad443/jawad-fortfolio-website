
const media = document.querySelector(".contact-media");

const contactList = [
    {
        id: 1,
        icon: "bx  bx-phone",
        name: "Phone",
        value: "+92346-9734292",
        href: "tel:++92346-9734292",
    },
    {
        id: 2,
        icon: "bx bx-envelope",
        name: "E-Mail",
        value: "jawadwebdiv.292@gmail.com",
        href: "mailto:jawadwebdiv.292@gmail.com",
    },
    {
        id: 3,
        icon: "bx bx-location-alt-2",
        name: "Country",
        value: "Pakistan",
        href: "#",
    },
];

const contactContent = contactList.map((ele) => {
    return `
        <div class="media" key=${ele?.id}>
          <span><i class="${ele?.icon}"></i></span>
            <div class="contact-value">
                <p>${ele?.name}</p>
                <a href=${ele?.href}>${ele?.value}</a>
             </div>

        </div>
    `
})
    .join("");

if (media) media.innerHTML = contactContent;

// send contact message

// document.getElementById("contact-form").addEventListener('submit', (event) => {
//     event.preventDefault();

//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const phone = document.getElementById('phone').value;
//     const message = document.getElementById('message').value;

//     if (!name || !email || !phone || !message) {
//         return alert("Hi");
//     }

//     emailjs.send("service_rqnwhej", "template_5beil54", {

//         name, email, phone, message
//     }).then(() => {
//         alert("Message Sent !")
//         console.log('SUCCESS!');
//     }, (error) => {
//         alert("Message Error !")
//         console.log('FAILED...', error);
//     });
// });





