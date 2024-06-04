document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-item');
    const indicator = document.querySelector('.indicator');
    const music = document.getElementById('background-music');
    const musicToggle = document.getElementById('music-toggle');
    let isMuted = false;

    // Function to move indicator
    function moveIndicator() {
        const activeLink = document.querySelector('.nav-item.active');
        const left = activeLink.offsetLeft;
        const width = activeLink.offsetWidth;
        indicator.style.left = `${left}px`;
        indicator.style.width = `${width}px`;
    }

    // Event listener for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navLinks.forEach(item => item.classList.remove('active'));
            this.classList.add('active');
            moveIndicator();
        });
    });

    // Ensure the indicator is in place when the page loads
    moveIndicator();

    // Play the background music when the page loads
    music.play();

    // Function to toggle music
    function toggleMusic() {
        if (isMuted) {
            music.play();
            musicToggle.textContent = 'Mute';
        } else {
            music.pause();
            musicToggle.textContent = 'Unmute';
        }
        isMuted = !isMuted;
    }

    // Add toggleMusic to the global scope
    window.toggleMusic = toggleMusic;

    // Event listener for the hamburger menu (for mobile view)
    const hamburger = document.querySelector('.hamburger');
    const navLinksContainer = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', () => {
        navLinksContainer.classList.toggle('nav-active');
    });
});