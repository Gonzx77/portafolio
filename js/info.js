document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    const ctaButton = document.querySelector('.cta-button');
    ctaButton.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = 'https://mail.google.com/mail/?view=cm&to=angobeal777@gmail.com';
    });

    const projectsButton = document.querySelector('.cta-button2');
    projectsButton.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = 'https://zxofficial.github.io/ZXPagesProject/';
    });

    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});