/*============== SPLASH =================*/
const splash = document.querySelector('.splash');
document.addEventListener('DOMContentLoaded', (e)=>{
    setTimeout(()=>{
        splash.classList.add('display-none');
    }, 2000);  
})

/*=============== SHOW MENU ===============*/

/*===== MENU SHOW =====*/
/* Validate if constant exists */

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */

/*==================== REMOVE MENU MOBILE ====================*/

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
    const header = document.getElementById('header');
    // when the scroll is greater than 80 view height add the scroll-header class to header tag
    if (this.scrollY >= 80) header.classList.add('scroll-header');
    else header.classList.remove ('scroll-header');
}

window.addEventListener('scroll', scrollHeader);
/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    // when the scroll is greater than 350 view height add the scroll-header class to header tag
    if (this.scrollY >= 350) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove ('show-scroll');
}

window.addEventListener('scroll', scrollUp);

/*==================== ABOUT TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]');

    tabs.forEach((tab) => {
        tab.addEventListener('click', () => {
            const target = document.querySelector(tab.dataset.target);
            
            tabContents.forEach((tabContent) => {
                tabContent.classList.remove('tab__active');
            });

            target.classList.add('tab__active');

            tabs.forEach((tab) => {
                tab.classList.remove('tab__active');
            })

            tab.classList.add('tab__active');
        });
    });

/*=============== CONTACT FORM =============== */
const contactForm = document.getElementById('contact-form'),
    contactName = document.getElementById('contact-name'),
    contactEmail = document.getElementById('contact-email'), 
    contactSubject = document.getElementById('contact-subject'),
    contactMessage = document.getElementById('contact-message'),
    errorMessage = document.getElementById('error-message');

    const sendEmail = (e) => {
        e.preventDefault();

        //check if the field has a value
        if (
        contactName.value === '' || 
        contactEmail.value === '' || 
        contactSubject.value === ''|| 
        contactMessage.value === ''
        ) { 
            // show message
            errorMessage.textContent = 'Write all the input fields'
        }

        else {
         // serviceID - templateID - #form - publickey
         emailjs.sendForm('service_pvpaqz5',
         'template_wnywl3f',
         '#contact-form',
         'MSkLCNKjIGBJv9RhM'
         ).then(() => {
            //show message and add color, window + dot to open emoji
            errorMessage.classList.add('color-first')
            errorMessage.textContent = 'Message sent ✔';

            // remove message after 5 seconds
            setTimeout(() => {
                errorMessage.textContent = '';
            }, 5000);
         }, (error) => {
            alert('OPPs! SOMETHING WENT WRONG...', error);
         }
         );
         
         // clear input fields
         contactName.value = '';
         contactEmail.value = '';
         contactSubject.value = '';
         contactMessage.value = '';
        }
    };

    contactForm.addEventListener('submit', sendEmail);
