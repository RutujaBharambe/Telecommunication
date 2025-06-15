// Smooth scroll for "Get Started" button
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add a simple alert when selecting a plan
const planButtons = document.querySelectorAll('.cta-button');

planButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const planTitle = button.closest('.pricing-plan')?.querySelector('h3')?.innerText;
        if (planTitle) {
            alert(`You selected the "${planTitle}" plan! Thank you for choosing JioKing.`);
        }
    });
});

// Optional: Animate features on scroll
const features = document.querySelectorAll('.feature');

const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;

    features.forEach(feature => {
        const featureTop = feature.getBoundingClientRect().top;
        if (featureTop < triggerBottom) {
            feature.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
