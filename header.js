// Reusable Global Header Component for Subpages (Black Background & Responsive Hamburger Menu)
(function () {
    // Do not modify index.html header if this script is ever loaded there
    const currentPath = window.location.pathname.toLowerCase();
    if (currentPath === '/' || currentPath === '/index.html' || currentPath.endsWith('/index.html') || currentPath === '') {
        // If placeholder explicitly exists on home page, do not replace home custom header
        if (!document.getElementById('site-header')) {
            return;
        }
    }

    // Auto-inject Header Styles
    if (!document.getElementById('rf-header-styles')) {
        const style = document.createElement('style');
        style.id = 'rf-header-styles';
        style.textContent = `
            .site-header-dark {
                background-color: #060606;
                border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                position: relative;
                z-index: 1000;
                width: 100%;
                box-sizing: border-box;
            }

            .site-header-dark .site-nav {
                max-width: 1200px;
                width: 90%;
                height: 70px;
                margin: 0 auto;
                display: flex;
                align-items: center;
                justify-content: space-between;
                box-sizing: border-box;
            }

            .site-header-dark .logo-link {
                display: flex;
                align-items: center;
                text-decoration: none;
            }

            .site-header-dark .logo {
                height: 42px;
                width: auto;
                filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.8));
                transition: transform 0.3s ease;
            }

            .site-header-dark .logo:hover {
                transform: scale(1.05);
            }

            .site-header-dark .navlinks {
                display: flex;
                align-items: center;
                gap: 28px;
            }

            .site-header-dark .navlinks a {
                color: #ffffff !important;
                font-family: 'Poppins', sans-serif;
                font-weight: 500;
                font-size: 12.5px;
                letter-spacing: 1.2px;
                text-transform: uppercase;
                text-decoration: none;
                margin: 0 !important;
                padding: 5px 0;
                display: inline-block;
                position: relative;
                transition: color 0.3s ease, text-shadow 0.3s ease, transform 0.2s ease;
                text-shadow: 0 2px 6px rgba(0, 0, 0, 0.95);
            }

            .site-header-dark .navlinks a::after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                width: 0%;
                height: 2px;
                background-color: #ffcc00;
                transition: width 0.3s ease;
                box-shadow: 0 0 8px #ffcc00;
            }

            .site-header-dark .navlinks a:hover {
                color: #ffffff !important;
                text-shadow: 0 2px 10px rgba(0, 0, 0, 1), 0 0 18px rgba(255, 204, 0, 0.6);
                transform: translateY(-2px);
            }

            .site-header-dark .navlinks a:hover::after,
            .site-header-dark .navlinks a.active::after {
                width: 100%;
            }

            .site-header-dark .navlinks a.active {
                color: #ffcc00 !important;
            }

            /* Hamburger Button */
            .site-header-dark .hamburger {
                display: none;
                flex-direction: column;
                justify-content: space-between;
                width: 44px;
                height: 44px;
                padding: 12px 10px;
                box-sizing: border-box;
                background: rgba(255, 255, 255, 0.08);
                border: 1px solid rgba(255, 255, 255, 0.22);
                border-radius: 12px;
                backdrop-filter: blur(10px);
                -webkit-backdrop-filter: blur(10px);
                cursor: pointer;
                z-index: 1100;
                transition: all 0.3s ease;
                box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
            }

            .site-header-dark .hamburger span {
                display: block;
                width: 100%;
                height: 2.5px;
                background-color: #ffffff;
                border-radius: 2px;
                transition: all 0.3s ease-in-out;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.8);
            }

            .site-header-dark .hamburger:hover {
                background: rgba(255, 204, 0, 0.85);
                border-color: #ffcc00;
            }

            .site-header-dark .hamburger.active span:nth-child(1) {
                transform: translateY(7.5px) rotate(45deg);
            }

            .site-header-dark .hamburger.active span:nth-child(2) {
                opacity: 0;
                transform: scaleX(0);
            }

            .site-header-dark .hamburger.active span:nth-child(3) {
                transform: translateY(-7.5px) rotate(-45deg);
            }

            /* Mobile View */
            @media (max-width: 768px) {
                .site-header-dark .site-nav {
                    height: 60px;
                }

                .site-header-dark .hamburger {
                    display: flex;
                }

                .site-header-dark .navlinks {
                    position: fixed;
                    top: 0;
                    right: -100%;
                    width: min(280px, 80vw);
                    height: 100vh;
                    background: rgba(12, 12, 12, 0.97);
                    backdrop-filter: blur(20px);
                    -webkit-backdrop-filter: blur(20px);
                    flex-direction: column;
                    align-items: stretch;
                    padding: 90px 24px 30px;
                    gap: 16px;
                    border-left: 1px solid rgba(255, 255, 255, 0.12);
                    box-shadow: -15px 0 35px rgba(0, 0, 0, 0.85);
                    transition: right 0.35s cubic-bezier(0.4, 0, 0.2, 1);
                    z-index: 1050;
                    box-sizing: border-box;
                }

                .site-header-dark .navlinks.active {
                    right: 0;
                }

                .site-header-dark .navlinks a {
                    text-align: left;
                    font-size: 16px;
                    letter-spacing: 1.5px;
                    padding: 14px 4px;
                    background: transparent;
                    border: none;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 0;
                    box-shadow: none;
                    width: 100%;
                    display: block;
                }

                .site-header-dark .navlinks a:hover,
                .site-header-dark .navlinks a:active {
                    color: #ffcc00 !important;
                    transform: none;
                }
            }
        `;
        document.head.appendChild(style);
    }

    const headerHTML = `
    <header class="site-header-dark" id="mainHeader">
        <nav class="site-nav">
            <a href="/" class="logo-link" aria-label="Raw Film Home">
                <img src="/image/logo.png" alt="Raw Film Logo" class="logo">
            </a>
            <div class="navlinks" id="hdrNavLinks">
                <a href="/">Home</a>
                <a href="/about.html">About</a>
                <a href="/contact.html">Contact</a>
            </div>
            <button class="hamburger" id="hdrHamburgerBtn" aria-label="Toggle navigation" aria-expanded="false">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </nav>
    </header>
    `;

    function initHeader() {
        if (document.querySelector('.site-header-dark')) return; // Avoid duplicate rendering

        const placeholder = document.getElementById('site-header');
        if (placeholder) {
            placeholder.outerHTML = headerHTML;
        } else {
            const existingHeader = document.querySelector('header');
            if (existingHeader) {
                existingHeader.outerHTML = headerHTML;
            } else {
                document.body.insertAdjacentHTML('afterbegin', headerHTML);
            }
        }

        // Active link detection
        const navLinksContainer = document.getElementById('hdrNavLinks');
        const hamburgerBtn = document.getElementById('hdrHamburgerBtn');

        if (navLinksContainer) {
            const links = navLinksContainer.querySelectorAll('a');
            const path = window.location.pathname.toLowerCase();
            links.forEach(link => {
                const href = link.getAttribute('href').toLowerCase();
                if (href === path || (href !== '/' && path.endsWith(href))) {
                    link.classList.add('active');
                }
            });
        }

        // Hamburger Menu Events
        if (hamburgerBtn && navLinksContainer) {
            hamburgerBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                const isOpen = navLinksContainer.classList.toggle('active');
                hamburgerBtn.classList.toggle('active');
                hamburgerBtn.setAttribute('aria-expanded', isOpen);
            });

            // Close on any link click
            navLinksContainer.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    navLinksContainer.classList.remove('active');
                    hamburgerBtn.classList.remove('active');
                    hamburgerBtn.setAttribute('aria-expanded', 'false');
                });
            });

            // Close on outside click
            document.addEventListener('click', (e) => {
                if (!navLinksContainer.contains(e.target) && !hamburgerBtn.contains(e.target)) {
                    navLinksContainer.classList.remove('active');
                    hamburgerBtn.classList.remove('active');
                    hamburgerBtn.setAttribute('aria-expanded', 'false');
                }
            });

            // Close on Escape key
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    navLinksContainer.classList.remove('active');
                    hamburgerBtn.classList.remove('active');
                    hamburgerBtn.setAttribute('aria-expanded', 'false');
                }
            });
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initHeader);
    } else {
        initHeader();
    }
})();
