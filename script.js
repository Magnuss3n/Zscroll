document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');

    // Add click event listeners to navigation links
    document.querySelectorAll('nav a').forEach(link => {
        if (link.getAttribute('href') !== "https://magnuss3n.github.io/factflow/") {
            link.addEventListener('click', (e) => {
                e.preventDefault(); // Prevent default behavior of anchor tags
                const targetId = link.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);
                sections.forEach(section => {
                    section.style.display = 'none';
                });
                targetSection.style.display = 'block';
            });
        }
    });
});
