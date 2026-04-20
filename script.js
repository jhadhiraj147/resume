// Cursor animation
const cursor = document.getElementById('cursor');

document.addEventListener('mousemove', (e) => {
    // Smooth delay for custom cursor
    gsap.to(cursor, {
        x: e.clientX - cursor.clientWidth / 2,
        y: e.clientY - cursor.clientHeight / 2,
        duration: 0.1,
        ease: 'power2.out'
    });
});

// Interactive hover state on links/buttons
document.querySelectorAll('a, .skill-chip, .experience-item').forEach(el => {
    el.addEventListener('mouseenter', () => {
        gsap.to(cursor, {
            scale: 2.5,
            backgroundColor: 'rgba(56, 189, 248, 0.4)',
            duration: 0.3
        });
    });
    el.addEventListener('mouseleave', () => {
        gsap.to(cursor, {
            scale: 1,
            backgroundColor: 'rgba(147, 51, 234, 0.5)',
            duration: 0.3
        });
    });
});

// Hero Animations
gsap.to('.hero-text', {
    y: 0,
    opacity: 1,
    duration: 1,
    ease: 'power3.out',
    delay: 0.2
});

gsap.to('.hero-subtext', {
    y: 0,
    opacity: 1,
    duration: 1,
    ease: 'power3.out',
    delay: 0.4
});

gsap.to('.hero-btn', {
    y: 0,
    opacity: 1,
    scale: 1,
    duration: 1,
    ease: 'elastic.out(1, 0.3)',
    delay: 0.7
});

// Scroll Animations
gsap.registerPlugin(ScrollTrigger);

// Fade up for experience items
gsap.utils.toArray('.experience-item, .section-title').forEach(item => {
    gsap.fromTo(item, 
        { opacity: 0, y: 50 },
        {
            opacity: 1, 
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: item,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            }
        }
    );
});

// Stagger skill chips
gsap.fromTo('.skill-chip', 
    { opacity: 0, scale: 0.8, y: 20 },
    {
        opacity: 1,
        scale: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: 'back.out(1.7)',
        scrollTrigger: {
            trigger: '.skills-container',
            start: 'top 85%',
        }
    }
);