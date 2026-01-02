(function () {
    // 1. Inject CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'hamburger-menu.css';
    document.head.appendChild(link);

    // 2. Inject HTML structure
    const navContainer = document.createElement('div');
    navContainer.innerHTML = `
    <button id="menu-toggle" aria-label="Toggle navigation menu">
      <span></span><span></span><span></span>
    </button>
    <nav id="nav-menu">
      <h3>🎮 Game Arcade</h3>
      <ul>
        <li><a href="index.html">Jammu Flight</a></li>
        <li><a href="colorMatch.html">Color Match</a></li>
        <li><a href="BrickBreakerPlus.html">Brick Breaker Plus</a></li>
        <li><a href="CircleShooter.html">Circle Shooter</a></li>
        <li><a href="EndlessRunnerDash.html">Endless Runner Dash</a></li>
        <li><a href="Snakereloaded.html">Snake Reloaded</a></li>
        <li><a href="SpaceShooterLite.html">Space Shooter Lite</a></li>
      </ul>
    </nav>
    <div id="menu-overlay"></div>
  `;
    document.body.insertAdjacentElement('afterbegin', navContainer);

    // 3. Highlight current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const links = navContainer.querySelectorAll('#nav-menu a');
    links.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('current');
        }
    });

    // 4. Interface Logic
    const toggleBtn = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const overlay = document.getElementById('menu-overlay');

    function toggleMenu() {
        const isActive = navMenu.classList.contains('show');
        if (isActive) {
            navMenu.classList.remove('show');
            overlay.classList.remove('show');
            toggleBtn.classList.remove('active');
        } else {
            navMenu.classList.add('show');
            overlay.classList.add('show');
            toggleBtn.classList.add('active');
        }
    }

    toggleBtn.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);
})();
