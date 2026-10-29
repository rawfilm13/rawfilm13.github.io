// RAW FILM - Exclusive 20% Off Wedding Shoot Center Popup Component
(function () {
    // Prevent duplicate initialization
    if (window.RF_OFFER_POPUP_INITIALIZED) return;
    window.RF_OFFER_POPUP_INITIALIZED = true;

    // Inject Font Awesome if not already loaded
    if (!document.querySelector('link[href*="font-awesome"]')) {
        const faLink = document.createElement('link');
        faLink.rel = 'stylesheet';
        faLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';
        faLink.crossOrigin = 'anonymous';
        document.head.appendChild(faLink);
    }

    // Auto-inject Styles
    if (!document.getElementById('rf-offer-popup-styles')) {
        const style = document.createElement('style');
        style.id = 'rf-offer-popup-styles';
        style.textContent = `
            /* Overlay - Black with 75% transparent on background */
            .rf-popup-overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100vw;
                height: 100vh;
                background-color: rgba(0, 0, 0, 0.75); /* Exactly 75% black overlay */
                backdrop-filter: blur(4px);
                -webkit-backdrop-filter: blur(4px);
                z-index: 999999;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 16px;
                box-sizing: border-box;
                opacity: 0;
                visibility: hidden;
                pointer-events: none;
                transition: opacity 0.35s ease, visibility 0.35s ease;
            }

            .rf-popup-overlay.is-visible {
                opacity: 1;
                visibility: visible;
                pointer-events: auto;
            }

            /* Center Popup Modal Card */
            .rf-popup-modal {
                position: relative;
                width: 100%;
                max-width: 840px;
                background: linear-gradient(145deg, #1f0709 0%, #110305 60%, #190508 100%);
                border-radius: 18px;
                border: 1.5px solid rgba(229, 9, 20, 0.55);
                box-shadow: 0 25px 65px rgba(0, 0, 0, 0.92), 0 0 45px rgba(229, 9, 20, 0.3);
                display: grid;
                grid-template-columns: 360px 1fr;
                overflow: hidden;
                box-sizing: border-box;
                transform: scale(0.9) translateY(20px);
                opacity: 0;
                transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease;
                font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            }

            .rf-popup-overlay.is-visible .rf-popup-modal {
                transform: scale(1) translateY(0);
                opacity: 1;
            }

            /* Left Side: Dark Image Visual */
            .rf-popup-visual {
                position: relative;
                background-color: #0a0a0a;
                overflow: hidden;
                min-height: 480px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                padding: 24px;
                box-sizing: border-box;
            }

            .rf-popup-bg-img {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                object-fit: cover;
                object-position: center;
                z-index: 1;
                transform: scale(1.02);
                transition: transform 6s ease;
            }

            .rf-popup-modal:hover .rf-popup-bg-img {
                transform: scale(1.07);
            }

            /* Dark Vignette Overlay on the image */
            .rf-popup-visual-overlay {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: linear-gradient(
                    180deg,
                    rgba(25, 4, 7, 0.7) 0%,
                    rgba(20, 3, 5, 0.25) 40%,
                    rgba(25, 4, 7, 0.95) 100%
                );
                z-index: 2;
            }

            .rf-popup-visual-content {
                position: relative;
                z-index: 3;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
            }

            .rf-visual-badge {
                display: inline-flex;
                align-items: center;
                gap: 6px;
                background: rgba(35, 5, 8, 0.85);
                border: 1px solid rgba(255, 45, 68, 0.65);
                color: #ff334b;
                font-size: 11px;
                font-weight: 700;
                letter-spacing: 1.5px;
                text-transform: uppercase;
                padding: 6px 14px;
                border-radius: 20px;
                backdrop-filter: blur(8px);
                width: fit-content;
            }

            .rf-visual-footer {
                margin-top: auto;
            }

            .rf-visual-discount {
                font-size: 42px;
                font-weight: 800;
                line-height: 1;
                color: #ffffff;
                text-shadow: 0 4px 15px rgba(0, 0, 0, 0.9);
                letter-spacing: -0.5px;
            }

            .rf-visual-discount span {
                color: #ff2a40;
                text-shadow: 0 0 16px rgba(255, 42, 64, 0.6);
            }

            .rf-visual-subtitle {
                font-size: 13.5px;
                color: #e0e0e0;
                margin-top: 6px;
                font-weight: 500;
                line-height: 1.4;
                text-shadow: 0 2px 8px rgba(0, 0, 0, 0.8);
            }

            .rf-visual-tag {
                margin-top: 14px;
                display: flex;
                align-items: center;
                gap: 8px;
                font-size: 11px;
                color: #aaa;
                letter-spacing: 1px;
                text-transform: uppercase;
            }

            .rf-visual-tag img {
                height: 18px;
                opacity: 0.9;
            }

            /* Right Side: Form and Offer Content */
            .rf-popup-content {
                position: relative;
                padding: 34px 32px 30px;
                box-sizing: border-box;
                display: flex;
                flex-direction: column;
                background: linear-gradient(135deg, #180608 0%, #0f0304 100%);
            }

            /* Close Button */
            .rf-popup-close {
                position: absolute;
                top: 14px;
                right: 16px;
                width: 36px;
                height: 36px;
                background: rgba(255, 255, 255, 0.06);
                border: 1px solid rgba(255, 45, 68, 0.25);
                border-radius: 50%;
                color: #bbb;
                font-size: 22px;
                line-height: 1;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all 0.25s ease;
                z-index: 10;
                padding: 0;
            }

            .rf-popup-close:hover {
                background: #ff2a40;
                color: #fff;
                border-color: #ff2a40;
                transform: rotate(90deg);
            }

            /* Offer Tag */
            .rf-popup-tag {
                display: inline-flex;
                align-items: center;
                gap: 6px;
                color: #ff334b;
                font-size: 11px;
                font-weight: 700;
                letter-spacing: 1px;
                text-transform: uppercase;
                margin-bottom: 8px;
            }

            /* Title: "Get 20% off on Weding Shoot" */
            .rf-popup-title {
                font-size: 24px;
                font-weight: 700;
                color: #ffffff;
                line-height: 1.25;
                margin: 0 0 10px 0;
                padding-right: 25px;
            }

            .rf-popup-title .highlight {
                color: #ff2a40;
                text-shadow: 0 0 14px rgba(255, 42, 64, 0.45);
                position: relative;
                display: inline-block;
            }

            /* Description: "Any First 10 Lucky customers Get This Discount on Wedding Shoot or Pre-wedding Shoot, T & C Apply*" */
            .rf-popup-desc {
                font-size: 13.5px;
                color: #c5c5c5;
                line-height: 1.55;
                margin: 0 0 16px 0;
                font-weight: 400;
            }

            .rf-popup-urgency {
                display: flex;
                align-items: center;
                gap: 8px;
                background: rgba(229, 9, 20, 0.15);
                border-left: 3px solid #ff2a40;
                padding: 8px 14px;
                border-radius: 4px;
                margin-bottom: 18px;
                font-size: 12px;
                color: #ff9aa6;
                font-weight: 500;
            }

            /* Form Styles */
            .rf-popup-form {
                display: flex;
                flex-direction: column;
                gap: 13px;
                width: 100%;
                box-sizing: border-box;
            }

            .rf-form-field {
                display: flex;
                flex-direction: column;
                text-align: left;
                width: 100%;
                box-sizing: border-box;
            }

            .rf-form-field label {
                font-size: 12px;
                font-weight: 600;
                color: #ddd;
                margin-bottom: 5px;
                letter-spacing: 0.3px;
            }

            .rf-form-field label span {
                color: #ff334b;
            }

            .rf-input-wrap {
                position: relative;
                width: 100%;
            }

            .rf-input-wrap i {
                position: absolute;
                left: 14px;
                top: 50%;
                transform: translateY(-50%);
                color: #888;
                font-size: 15px;
                pointer-events: none;
                transition: color 0.25s ease;
            }

            .rf-form-field input {
                width: 100%;
                box-sizing: border-box;
                background: rgba(255, 255, 255, 0.05);
                border: 1px solid rgba(255, 45, 68, 0.25);
                border-radius: 10px;
                padding: 12px 14px 12px 42px;
                color: #ffffff;
                font-family: inherit;
                font-size: 14px;
                transition: all 0.25s ease;
                outline: none;
            }

            .rf-form-field input::placeholder {
                color: #888;
                font-size: 13.5px;
            }

            .rf-form-field input:focus {
                border-color: #ff2a40;
                background: rgba(255, 45, 68, 0.08);
                box-shadow: 0 0 12px rgba(255, 42, 64, 0.35);
            }

            .rf-form-field input:focus + i,
            .rf-input-wrap:focus-within i {
                color: #ff334b;
            }

            /* Submit Button (Bigger & Red Theme) */
            .rf-popup-submit {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                gap: 12px;
                background: linear-gradient(135deg, #e50914 0%, #b30010 100%);
                color: #ffffff;
                border: none;
                border-radius: 35px;
                padding: 16px 30px;
                min-height: 54px;
                font-size: 16px;
                font-weight: 700;
                letter-spacing: 0.6px;
                cursor: pointer;
                font-family: inherit;
                box-shadow: 0 8px 25px rgba(229, 9, 20, 0.45);
                transition: all 0.25s ease;
                margin-top: 6px;
                width: 100%;
                box-sizing: border-box;
            }

            .rf-popup-submit i {
                font-size: 22px;
            }

            .rf-popup-submit:hover {
                transform: translateY(-2px);
                box-shadow: 0 12px 30px rgba(229, 9, 20, 0.65);
                background: linear-gradient(135deg, #ff1a2b 0%, #cc0013 100%);
            }

            .rf-popup-submit:active {
                transform: translateY(0);
            }

            .rf-popup-submit:disabled {
                opacity: 0.65;
                cursor: not-allowed;
                transform: none;
            }

            /* Terms / Note */
            .rf-popup-tc-note {
                font-size: 11px;
                color: #777;
                text-align: center;
                margin-top: 10px;
                line-height: 1.4;
            }

            /* Success State */
            .rf-popup-success {
                display: none;
                text-align: center;
                padding: 24px 10px;
                animation: rfFadeIn 0.3s ease;
            }

            .rf-popup-success.is-active {
                display: block;
            }

            .rf-popup-success-icon {
                width: 60px;
                height: 60px;
                line-height: 60px;
                border-radius: 50%;
                background: rgba(229, 9, 20, 0.15);
                color: #ff2a40;
                font-size: 30px;
                margin: 0 auto 16px;
                display: flex;
                align-items: center;
                justify-content: center;
                border: 2px solid #ff2a40;
            }

            .rf-popup-success h4 {
                color: #fff;
                font-size: 19px;
                margin: 0 0 8px 0;
            }

            .rf-popup-success p {
                color: #ccc;
                font-size: 13.5px;
                line-height: 1.5;
                margin: 0 0 16px 0;
            }

            /* Floating Reopen Button (Bigger & Red Theme) */
            .rf-offer-reopen-btn {
                position: fixed;
                bottom: 25px;
                left: 25px;
                background: #180508;
                color: #ff334b;
                border: 1.5px solid #ff2a40;
                padding: 12px 22px;
                border-radius: 30px;
                font-size: 14px;
                font-weight: 700;
                cursor: pointer;
                z-index: 99990;
                display: inline-flex;
                align-items: center;
                gap: 8px;
                box-shadow: 0 6px 20px rgba(0, 0, 0, 0.5), 0 0 16px rgba(229, 9, 20, 0.35);
                font-family: 'Poppins', sans-serif;
                transition: all 0.3s ease;
                animation: rfPulseRed 2.5s infinite;
            }

            .rf-offer-reopen-btn:hover {
                background: #ff2a40;
                color: #fff;
                transform: translateY(-3px) scale(1.03);
                box-shadow: 0 10px 25px rgba(229, 9, 20, 0.55);
            }

            @keyframes rfPulseRed {
                0% { box-shadow: 0 0 0 0 rgba(229, 9, 20, 0.55); }
                70% { box-shadow: 0 0 0 12px rgba(229, 9, 20, 0); }
                100% { box-shadow: 0 0 0 0 rgba(229, 9, 20, 0); }
            }

            @keyframes rfFadeIn {
                from { opacity: 0; transform: translateY(10px); }
                to { opacity: 1; transform: translateY(0); }
            }

            /* Responsive Adjustments */
            @media (max-width: 768px) {
                .rf-popup-modal {
                    grid-template-columns: 1fr;
                    max-height: 92vh;
                    overflow-y: auto;
                    border-radius: 14px;
                }

                .rf-popup-visual {
                    min-height: 170px;
                    padding: 16px 20px;
                }

                .rf-visual-discount {
                    font-size: 30px;
                }

                .rf-visual-subtitle {
                    font-size: 12px;
                }

                .rf-visual-tag {
                    display: none;
                }

                .rf-popup-content {
                    padding: 24px 20px 22px;
                }

                .rf-popup-title {
                    font-size: 20px;
                    padding-right: 30px;
                }

                .rf-popup-desc {
                    font-size: 12.5px;
                    margin-bottom: 12px;
                }

                .rf-popup-submit {
                    padding: 15px 22px;
                    font-size: 15px;
                }

                .rf-offer-reopen-btn {
                    bottom: 20px;
                    left: 20px;
                    padding: 10px 16px;
                    font-size: 13px;
                }
            }
        `;
        document.head.appendChild(style);
    }

    // Determine correct image source path relative to current page
    const imagePath = (function () {
        // Test if in a subdirectory or root
        const isRoot = window.location.pathname === '/' || !window.location.pathname.substring(1).includes('/');
        return isRoot ? 'image/wedding/DSC05437.webp' : '/image/wedding/DSC05437.webp';
    })();

    // HTML Structure
    const popupHTML = `
    <!-- Center Offer Popup Overlay (Black 75% transparent on background) -->
    <div id="rfOfferPopupOverlay" class="rf-popup-overlay" role="dialog" aria-modal="true" aria-labelledby="rfPopupTitle">
        <div class="rf-popup-modal" id="rfPopupModal">
            
            <!-- Left: Dark Wedding Image Showcase -->
            <div class="rf-popup-visual">
                <img src="${imagePath}" 
                     onerror="if(this.src.indexOf('/image/')!==-1){this.src='image/wedding/DSC05437.webp';}else{this.src='/image/wedding/DSC05437.webp';}" 
                     alt="RAW FILM Wedding Shoot" 
                     class="rf-popup-bg-img">
                <div class="rf-popup-visual-overlay"></div>
                
                <div class="rf-popup-visual-content">
                    <div class="rf-visual-badge">
                        <i class="fa fa-sparkles"></i> Limited Deal
                    </div>
                    
                    <div class="rf-visual-footer">
                        <div class="rf-visual-discount"><span>20%</span> OFF</div>
                        <div class="rf-visual-subtitle">Luxury Wedding &amp; Pre-Wedding Cinematic Shoots</div>
                        <div class="rf-visual-tag">
                            <i class="fa fa-camera"></i> RAW FILM Photography
                        </div>
                    </div>
                </div>
            </div>

            <!-- Right: Content & Form -->
            <div class="rf-popup-content">
                <button type="button" class="rf-popup-close" id="rfPopupCloseBtn" aria-label="Close offer popup">&times;</button>
                
                <div class="rf-popup-tag">
                    <i class="fa fa-gift"></i> Exclusive Wedding Offer
                </div>

                <h3 class="rf-popup-title" id="rfPopupTitle">
                    Get <span class="highlight">20% off</span> on Wedding Shoot
                </h3>

                <p class="rf-popup-desc">
                    Any First 10 Lucky customers Get This Discount on Wedding Shoot or Pre-wedding Shoot, T & C Apply*
                </p>

                <div class="rf-popup-urgency">
                    <i class="fa fa-clock-o"></i>
                    <span>⚡ Special Offer for First 10 Lucky Couples Only!</span>
                </div>

                <!-- Submission Form -->
                <form id="rfPopupForm" class="rf-popup-form" autocomplete="on">
                    <div class="rf-form-field">
                        <label for="rfInputName">Name <span>*</span></label>
                        <div class="rf-input-wrap">
                            <i class="fa fa-user-o"></i>
                            <input type="text" id="rfInputName" name="name" required placeholder="Enter your full name" autocomplete="name">
                        </div>
                    </div>

                    <div class="rf-form-field">
                        <label for="rfInputEmail">Email <span>*</span></label>
                        <div class="rf-input-wrap">
                            <i class="fa fa-envelope-o"></i>
                            <input type="email" id="rfInputEmail" name="email" required placeholder="Enter your email address" autocomplete="email">
                        </div>
                    </div>

                    <div class="rf-form-field">
                        <label for="rfInputPhone">Phone Number <span>*</span></label>
                        <div class="rf-input-wrap">
                            <i class="fa fa-phone"></i>
                            <input type="tel" id="rfInputPhone" name="phone" required placeholder="Enter phone / WhatsApp number" autocomplete="tel">
                        </div>
                    </div>

                    <button type="submit" class="rf-popup-submit" id="rfPopupSubmitBtn">
                        <i class="fa fa-whatsapp"></i>
                        <span id="rfPopupSubmitText">Submit (Send to Whatsapp)</span>
                    </button>

                    <div class="rf-popup-tc-note">
                        * T &amp; C Apply &bull; Valid on 2026 - Jan 2027 Wedding &amp; Pre-wedding bookings
                    </div>
                </form>

                <!-- Success Confirmation Message -->
                <div class="rf-popup-success" id="rfPopupSuccess">
                    <div class="rf-popup-success-icon">
                        <i class="fa fa-check"></i>
                    </div>
                    <h4>Offer Claimed!</h4>
                    <p>Opening WhatsApp to connect directly with Lovepreet Singh Sadiora (RAW FILM)...</p>
                    <a href="#" id="rfPopupManualWaBtn" target="_blank" class="rf-popup-submit" style="text-decoration:none; display:inline-flex;">
                        <i class="fa fa-whatsapp"></i> Open WhatsApp Now
                    </a>
                </div>

            </div>

        </div>
    </div>

    <!-- Floating Trigger to Re-open anytime -->
    <button type="button" class="rf-offer-reopen-btn" id="rfOfferReopenBtn" aria-label="Open 20% off offer">
        <i class="fa fa-gift"></i> Get 20% Off Offer
    </button>
    `;

    function initPopup() {
        // Append HTML to body if not already present
        if (!document.getElementById('rfOfferPopupOverlay')) {
            document.body.insertAdjacentHTML('beforeend', popupHTML);
        }

        const overlay = document.getElementById('rfOfferPopupOverlay');
        const modal = document.getElementById('rfPopupModal');
        const closeBtn = document.getElementById('rfPopupCloseBtn');
        const reopenBtn = document.getElementById('rfOfferReopenBtn');
        const form = document.getElementById('rfPopupForm');
        const submitBtn = document.getElementById('rfPopupSubmitBtn');
        const submitText = document.getElementById('rfPopupSubmitText');
        const successBox = document.getElementById('rfPopupSuccess');
        const manualWaBtn = document.getElementById('rfPopupManualWaBtn');

        const whatsappNumber = '919877281570'; // RAW FILM studio WhatsApp

        let autoPopupTimer = null;

        // Open Popup Function
        function openPopup() {
            if (autoPopupTimer) {
                clearTimeout(autoPopupTimer);
                autoPopupTimer = null;
            }
            if (overlay) {
                overlay.classList.add('is-visible');
                document.body.style.overflow = 'hidden'; // Prevent background scrolling
            }
        }

        // Close Popup Function
        function closePopup() {
            if (overlay) {
                overlay.classList.remove('is-visible');
                document.body.style.overflow = '';
            }
        }

        // Close when clicking Close Button
        if (closeBtn) {
            closeBtn.addEventListener('click', closePopup);
        }

        // Close when clicking outside modal on 75% dark overlay
        if (overlay) {
            overlay.addEventListener('click', function (e) {
                if (e.target === overlay) {
                    closePopup();
                }
            });
        }

        // Close on ESC key press
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && overlay.classList.contains('is-visible')) {
                closePopup();
            }
        });

        // Reopen button click
        if (reopenBtn) {
            reopenBtn.addEventListener('click', openPopup);
        }

        // Form Submit Handler (Submit to WhatsApp + backup to Google Sheet)
        if (form) {
            form.addEventListener('submit', function (e) {
                e.preventDefault();

                const nameInput = document.getElementById('rfInputName');
                const emailInput = document.getElementById('rfInputEmail');
                const phoneInput = document.getElementById('rfInputPhone');

                const name = nameInput ? nameInput.value.trim() : '';
                const email = emailInput ? emailInput.value.trim() : '';
                const phone = phoneInput ? phoneInput.value.trim() : '';

                if (!name || !email || !phone) {
                    alert('Please fill in Name, Email, and Phone Number.');
                    return;
                }

                // Update Button State
                if (submitBtn) submitBtn.disabled = true;
                if (submitText) submitText.innerText = 'Connecting to WhatsApp...';

                // Format WhatsApp Message
                const waMessage = 
                    `*🎉 20% OFF WEDDING SHOOT CLAIM*\n\n` +
                    `Hello RAW FILM Photography,\n` +
                    `I want to claim the *20% Discount Offer* on Wedding / Pre-Wedding Shoot!\n\n` +
                    `*👤 Name:* ${name}\n` +
                    `*📧 Email:* ${email}\n` +
                    `*📞 Phone:* ${phone}\n` +
                    `*🏷️ Offer:* First 10 Lucky Customers - 20% Off\n` +
                    `*📋 Note:* T & C Apply*\n\n` +
                    `Please check date availability and send package details!`;

                const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(waMessage)}`;

                // Optional Background sync to Google Sheet lead sheet
                try {
                    const sheetData = {
                        name: name,
                        email: email,
                        phone: "'" + phone,
                        shootType: 'Wedding / Pre-Wedding (20% OFF Offer)',
                        message: 'Claimed 20% Off Wedding Shoot Offer (First 10 Lucky Customers)',
                        source: 'Center Popup Offer'
                    };

                    fetch('https://script.google.com/macros/s/AKfycbzWK5IcwE6Rqc4PBkIaVM1EGzhZsrAMhs0_n-JwMZU9oB9wEcdGnX9skOCHqr4fLOM1/exec', {
                        method: 'POST',
                        mode: 'no-cors',
                        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
                        body: JSON.stringify(sheetData)
                    }).catch(function () {});
                } catch (ignoreErr) {}

                // Set manual backup link
                if (manualWaBtn) {
                    manualWaBtn.href = waUrl;
                }

                // Show success container
                if (form) form.style.display = 'none';
                if (successBox) successBox.classList.add('is-active');

                // Redirect / Open WhatsApp
                setTimeout(function () {
                    window.open(waUrl, '_blank');
                }, 400);

                // Auto-close modal after 4.5 seconds
                setTimeout(function () {
                    closePopup();
                    // Reset form after closing
                    setTimeout(function () {
                        form.reset();
                        form.style.display = 'flex';
                        if (successBox) successBox.classList.remove('is-active');
                        if (submitBtn) submitBtn.disabled = false;
                        if (submitText) submitText.innerText = 'Submit (Send to Whatsapp)';
                    }, 500);
                }, 4500);
            });
        }

        // Auto display timer logic: 5 seconds on all pages
        const popupDelayMs = 5000;

        autoPopupTimer = setTimeout(function () {
            openPopup();
        }, popupDelayMs);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initPopup);
    } else {
        initPopup();
    }
})();

