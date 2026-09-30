// Reusable Global Footer & Floating Action Buttons Component
(function () {
    // Auto-inject Font Awesome 4.7 if not already present
    if (!document.querySelector('link[href*="font-awesome"]')) {
        const faLink = document.createElement('link');
        faLink.rel = 'stylesheet';
        faLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';
        faLink.crossOrigin = 'anonymous';
        document.head.appendChild(faLink);
    }

    // Auto-inject Mobile Centering Styles for Footer
    if (!document.getElementById('rf-footer-styles')) {
        const style = document.createElement('style');
        style.id = 'rf-footer-styles';
        style.textContent = `
            .footer-bottom {
                max-width: 1200px;
                margin: 0 auto;
                padding-top: 25px;
                border-top: 1px solid rgba(255, 255, 255, 0.05);
                display: flex !important;
                justify-content: space-between !important;
                align-items: center !important;
                flex-wrap: wrap;
                gap: 12px;
                font-size: 12px;
                color: #666;
            }
            .footer-col.links-col ul li a {
                color: #ccc !important;
                text-decoration: none;
                transition: color 0.2s ease;
            }
            .footer-col.links-col ul li a:hover {
                color: #f1683a !important;
            }
            .footer-bottom .copyright-text {
                color: #ccc !important;
            }
            .footer-bottom p {
                margin: 0 !important;
            }
            @media (max-width: 768px) {
                .site-footer { text-align: center !important; }
                .footer-container { grid-template-columns: 1fr !important; gap: 35px !important; text-align: center !important; }
                .footer-col { display: flex !important; flex-direction: column !important; align-items: center !important; text-align: center !important; }
                .footer-logo { margin: 0 auto 16px !important; }
                .footer-tagline { margin: 0 auto !important; text-align: center !important; }
                .footer-socials { justify-content: center !important; margin: 16px auto 0 !important; }
                .footer-col ul { text-align: center !important; padding: 0 !important; }
                .footer-col ul li { text-align: center !important; }
                .footer-col p { text-align: center !important; }
                .footer-bottom { 
                    flex-direction: column !important; 
                    justify-content: center !important; 
                    align-items: center !important; 
                    text-align: center !important; 
                    gap: 8px !important; 
                }
            }
        `;
        document.head.appendChild(style);
    }

    const footerHTML = `
    <!-- Global Footer Section -->
    <footer class="site-footer">
        <div class="footer-container">
            <div class="footer-col brand-col">
                <img src="/image/logo.png" alt="Raw Film Logo" class="footer-logo">
                <p class="footer-tagline"><strong>RAW FILM PHOTOGRAPHY</strong><br>Capturing real emotions and cinematic stories that endure for generations.</p>
                <div class="footer-socials">
                    <a href="https://www.facebook.com/lucky.singh.261176" target="_blank" rel="noreferrer" aria-label="Facebook"><i class="fa fa-facebook"></i></a>
                    <a href="https://www.instagram.com/rawfilm13" target="_blank" rel="noreferrer" aria-label="Instagram"><i class="fa fa-instagram"></i></a>
                    <a href="https://www.youtube.com/@rawfilm13" target="_blank" rel="noreferrer" aria-label="YouTube"><i class="fa fa-youtube-play"></i></a>
                    <a href="https://wa.me/+919877281570" target="_blank" rel="noreferrer" aria-label="WhatsApp"><i class="fa fa-whatsapp"></i></a>
                </div>
            </div>

            <div class="footer-col links-col">
                <h4>Quick Links</h4>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/prewedding.html">Pre Wedding Shoots</a></li>
                    <li><a href="/ringceremony.html">Ring Ceremony</a></li>
                    <li><a href="/wedding.html">Wedding Shoots</a></li>
                    <li><a href="/maternity.html">Maternity</a></li>
                    <li><a href="/about.html">About Us</a></li>
                    <li><a href="/contact.html">Contact</a></li>
                </ul>
            </div>

            <div class="footer-col contact-col">
                <h4>Get In Touch</h4>
                <p><strong>Phone:</strong> <a href="tel:+919877281570" style="color: #ffffff; text-decoration: none;">+91 98772 81570</a></p>
                <p><strong>Email:</strong> <a href="mailto:info@rawfilmphotography.com" style="color: #ffffff; text-decoration: none;">info@rawfilmphotography.com</a></p>
                <p><strong>Available for destination shoots worldwide.</strong></p>
            </div>
        </div>

        <div class="footer-bottom">
            <p class="copyright-text"><strong>Copyright &copy; 2026 Raw Film Photography. All rights reserved.</strong></p>
            <p class="dev-credits" style="font-size: 12px; color: #777; letter-spacing: 0.3px;">Developed by <a href="https://admtech.in" target="_blank" rel="noopener noreferrer" style="color: #b0b0b0; font-weight: 600; text-decoration: none;">ADMTech Digital Solutions</a></p>
        </div>
    </footer>

    <!-- WhatsApp Floating Button -->
    <a href="https://wa.me/+919877281570" class="float float-whatsapp bounce" target="_blank" rel="noreferrer" aria-label="WhatsApp">
        <i class="fa fa-whatsapp my-float"></i>
    </a>

    <!-- Call Floating Button -->
    <a href="tel:+919877281570" class="float float-call bounce" aria-label="Call Now">
        <i class="fa fa-phone my-float"></i>
    </a>
    `;

    function renderFooter() {
        if (document.querySelector('.site-footer')) return; // Avoid duplicate rendering

        const placeholder = document.getElementById('site-footer');
        if (placeholder) {
            placeholder.outerHTML = footerHTML;
            return;
        }

        const scriptTag = document.currentScript || document.querySelector('script[src*="footer.js"]');
        if (scriptTag && scriptTag.parentNode) {
            scriptTag.insertAdjacentHTML('beforebegin', footerHTML);
            return;
        }

        document.body.insertAdjacentHTML('beforeend', footerHTML);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', renderFooter);
    } else {
        renderFooter();
    }
})();
