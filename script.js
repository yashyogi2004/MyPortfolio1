gsap.from('.hero-content h1 ', {
    duration: 1,
    y: -50,
    opacity: 0,
    ease: 'power2.out'
});

gsap.from('.hero-content p', {
    duration: 1,
    y: -50,
    opacity: 0,
    ease: 'power2.out',
    delay: 0.5
});
gsap.from('.hero-content button', {
    duration: 1,
    y: -50,
    opacity: 0,
    ease: 'power2.out',
    delay: 1
});

gsap.from('.project-list ', {
      opacity: 0,
    y: 50,
    x: -50,
    duration: 1,
    delay: 0.5,
    ease: 'power2.out',
    stagger: 0.2,
    scrollTrigger: {
        trigger: '.project-list',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
    },

});
gsap.from('.service-list ', {
    scrollTrigger: {
        trigger: '.service-list',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
    },
      opacity: 0,
    y: 50,
    x: -50,
    duration: 1,
    delay: 0.5,
    ease: 'power2.out' 
});
gsap.from('.skills-list ', {
    opacity: 0,
    y: 50,
    x: -50,
    duration: 1,
    delay: 1.5,
    ease: 'power2.out',
    stagger: 0.2,
    scrollTrigger: {
        trigger: '.skills-list',
        start: 'top 80%',
        end: 'bottom 20%',
        
        toggleActions: 'play none none reverse'
    },
    
});



const nav = document.querySelector('.nav');
let navLinks = document.querySelector('.nav-links');
const menuIcon = document.querySelector('.nav i');
if(window.innerWidth <= 800) {
    navLinks.style.display = 'none';
}
menuIcon.addEventListener('click', () => {
    if (navLinks.style.display === 'none') {
        navLinks.style.display = 'block';
        navLinks.style.position = 'absolute';
        navLinks.style.zIndex = '999';
    } else {
        navLinks.style.display = 'none';
    }
});

const Button = document.querySelector('.hero-content button');
Button.addEventListener('click', () => {
    window.location.href = 'yashresume.pdf';
});