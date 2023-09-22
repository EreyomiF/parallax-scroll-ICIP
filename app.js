document.addEventListener("scroll", function () {
    const parallaxSections = document.querySelectorAll(".parallax-section");
    const scrollY = window.scrollY;

    parallaxSections.forEach((section) => {
        const parallaxBg = section.querySelector(".parallax-bg");
        const bgSpeed = parseFloat(parallaxBg.getAttribute("data-speed")) || 0.2; // Adjust background speed
        const offsetY = (scrollY - section.offsetTop) * bgSpeed;
        parallaxBg.style.transform = `translateY(${offsetY}px)`;

        const content = section.querySelector(".content");
        const contentSpeed = parseFloat(content.getAttribute("data-speed")) || 0.7; // Adjust content speed
        const contentOffsetY = (scrollY - section.offsetTop) * contentSpeed;
        content.style.transform = `translateY(${contentOffsetY}px)`;
    });
});

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    });
});

