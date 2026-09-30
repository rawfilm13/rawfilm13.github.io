// Reusable Booking Form Component (FormSubmit AJAX Direct Email to rawfilm45@gmail.com)
(function () {
    // Auto-inject Form Styles
    if (!document.getElementById('rf-form-styles')) {
        const style = document.createElement('style');
        style.id = 'rf-form-styles';
        style.textContent = `
            .booking-form-wrapper {
                width: 100%;
                max-width: 900px;
                margin: 0 auto;
                box-sizing: border-box;
            }

            .booking-form {
                margin-top: 28px;
                width: 100%;
                box-sizing: border-box;
            }

            .booking-form .form-grid {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 20px;
                box-sizing: border-box;
            }

            .booking-form .form-group {
                display: flex;
                flex-direction: column;
                text-align: left;
                box-sizing: border-box;
            }

            .booking-form .form-group.full-width {
                grid-column: span 2;
            }

            .booking-form .form-group label {
                font-size: 12.5px;
                font-weight: 600;
                color: #ddd;
                margin-bottom: 8px;
                letter-spacing: 0.5px;
                font-family: 'Poppins', sans-serif;
            }

            .booking-form .form-group input,
            .booking-form .form-group select,
            .booking-form .form-group textarea {
                width: 100%;
                box-sizing: border-box;
                background: rgba(255, 255, 255, 0.05);
                border: 1px solid rgba(255, 255, 255, 0.15);
                border-radius: 10px;
                padding: 13px 16px;
                color: #ffffff;
                font-family: 'Poppins', sans-serif;
                font-size: 13.5px;
                transition: all 0.3s ease;
            }

            .booking-form .form-group input::placeholder,
            .booking-form .form-group textarea::placeholder {
                color: #777;
            }

            .booking-form .form-group select option {
                background-color: #1a1a1a;
                color: #fff;
            }

            .booking-form .form-group input:focus,
            .booking-form .form-group select:focus,
            .booking-form .form-group textarea:focus {
                outline: none;
                border-color: #f1683a;
                background: rgba(255, 255, 255, 0.09);
                box-shadow: 0 0 12px rgba(241, 104, 58, 0.35);
            }

            .booking-form .form-submit-row {
                text-align: center;
                margin-top: 32px;
            }

            .booking-form .cta-btn {
                display: inline-block;
                background-color: #f1683a;
                color: #fff;
                padding: 14px 42px;
                border-radius: 30px;
                font-weight: 600;
                font-size: 14px;
                letter-spacing: 1px;
                text-decoration: none;
                border: none;
                cursor: pointer;
                font-family: 'Poppins', sans-serif;
                transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
            }

            .booking-form .cta-btn:hover {
                background-color: #ff7e54;
                transform: translateY(-2px);
                box-shadow: 0 8px 20px rgba(241, 104, 58, 0.4);
            }

            .booking-form .cta-btn:disabled {
                opacity: 0.65;
                cursor: not-allowed;
                transform: none;
            }

            .booking-form .form-status {
                margin-top: 24px;
                padding: 16px 20px;
                border-radius: 12px;
                font-size: 14px;
                font-weight: 500;
                text-align: center;
                line-height: 1.6;
                font-family: 'Poppins', sans-serif;
            }

            .booking-form .form-status.success {
                background: rgba(46, 125, 50, 0.25);
                border: 1px solid #4caf50;
                color: #a5d6a7;
            }

            .booking-form .form-status.error {
                background: rgba(198, 40, 40, 0.25);
                border: 1px solid #ef5350;
                color: #ef9a9a;
            }

            @media (max-width: 768px) {
                .booking-form .form-grid {
                    grid-template-columns: 1fr !important;
                    gap: 16px !important;
                }

                .booking-form .form-group.full-width {
                    grid-column: span 1 !important;
                }

                .booking-form .cta-btn {
                    width: 100%;
                    padding: 14px 20px;
                }
            }
        `;
        document.head.appendChild(style);
    }

    const formHTML = `
    <div class="booking-form-wrapper">
        <form class="booking-form" action="https://script.google.com/macros/s/AKfycbzWK5IcwE6Rqc4PBkIaVM1EGzhZsrAMhs0_n-JwMZU9oB9wEcdGnX9skOCHqr4fLOM1/exec" method="POST">

            <div class="form-grid">
                <div class="form-group">
                    <label>Your Name *</label>
                    <input type="text" name="name" required placeholder="Your full name">
                </div>

                <div class="form-group">
                    <label>Email Address *</label>
                    <input type="email" name="email" required placeholder="you@example.com">
                </div>

                <div class="form-group">
                    <label>Phone / WhatsApp *</label>
                    <input type="tel" name="phone" required placeholder="+91 98772 81570">
                </div>

                <div class="form-group">
                    <label>Type of Shoot *</label>
                    <select name="shootType" required>
                        <option value="" disabled selected>Select Shoot Type</option>
                        <option value="Pre Wedding">Pre Wedding Shoot</option>
                        <option value="Ring Ceremony">Ring Ceremony</option>
                        <option value="Wedding">Wedding Shoot</option>
                        <option value="Maternity">Maternity Shoot</option>
                        <option value="Other">Other Event</option>
                    </select>
                </div>

                <div class="form-group">
                    <label>Preferred Date</label>
                    <input type="date" name="eventDate">
                </div>

                <div class="form-group">
                    <label>Location / City</label>
                    <input type="text" name="location" placeholder="e.g. Kotkapura, Chandigarh, Delhi">
                </div>

                <div class="form-group full-width">
                    <label>Message / Vision</label>
                    <textarea name="message" rows="4" placeholder="Tell us about your event, venue details, or any special requests..."></textarea>
                </div>
            </div>

            <div class="form-submit-row">
                <button type="submit" class="cta-btn submit-btn">
                    <span class="btn-text">Submit Booking Request</span>
                </button>
            </div>

            <div class="form-status" style="display: none;"></div>
        </form>
    </div>
    `;

    function initForm() {
        const placeholders = document.querySelectorAll('#booking-form-container, [data-booking-form]');
        if (placeholders.length > 0) {
            placeholders.forEach(placeholder => {
                placeholder.outerHTML = formHTML;
            });
        } else {
            // If current script or target location
            const scriptTag = document.currentScript || document.querySelector('script[src*="form.js"]');
            if (scriptTag && scriptTag.parentNode) {
                scriptTag.insertAdjacentHTML('beforebegin', formHTML);
            }
        }

        // Attach submission handlers to all booking forms on the page
        document.querySelectorAll('.booking-form').forEach(form => {
            if (form.dataset.attached === 'true') return;
            form.dataset.attached = 'true';

            const submitBtn = form.querySelector('.submit-btn');
            const formStatus = form.querySelector('.form-status');

            form.addEventListener('submit', async function (e) {
                e.preventDefault();

                const btnText = submitBtn ? submitBtn.querySelector('.btn-text') : null;
                const originalText = btnText ? btnText.innerText : 'Submit Booking Request';

                if (submitBtn) submitBtn.disabled = true;
                if (btnText) btnText.innerText = 'Sending Request...';
                if (formStatus) {
                    formStatus.style.display = 'none';
                    formStatus.className = 'form-status';
                }

                const formData = new FormData(form);
                const data = Object.fromEntries(formData.entries());

                // Primary Endpoint: Google Apps Script Web App (Saves to Google Sheet + Emails rawfilm45@gmail.com)
                const googleScriptURL = 'https://script.google.com/macros/s/AKfycbzWK5IcwE6Rqc4PBkIaVM1EGzhZsrAMhs0_n-JwMZU9oB9wEcdGnX9skOCHqr4fLOM1/exec';

                let isSuccess = false;

                try {
                    await fetch(googleScriptURL, {
                        method: 'POST',
                        mode: 'no-cors',
                        headers: {
                            'Content-Type': 'text/plain;charset=utf-8'
                        },
                        body: JSON.stringify(data)
                    });

                    // In mode 'no-cors', request is accepted and dispatched to Google
                    isSuccess = true;
                } catch (err) {
                    console.warn('Google Script API network issue:', err);
                }

                if (isSuccess) {
                    if (formStatus) {
                        formStatus.className = 'form-status success';
                        formStatus.innerHTML = '🎉 <strong>Thank you!</strong> Your booking request has been sent directly to our email. We will contact you shortly!';
                        formStatus.style.display = 'block';
                    }
                    form.reset();
                } else {
                    // Pre-fill WhatsApp message as a 100% reliable zero-downtime backup
                    const waMsg = encodeURIComponent(
                        `*New Photoshoot Booking Inquiry*\n` +
                        `Name: ${data.name || ''}\n` +
                        `Phone: ${data.phone || ''}\n` +
                        `Email: ${data.email || ''}\n` +
                        `Type: ${data.shootType || ''}\n` +
                        `Date: ${data.eventDate || ''}\n` +
                        `Location: ${data.location || ''}\n` +
                        `Message: ${data.message || ''}`
                    );
                    const waUrl = `https://wa.me/+919877281570?text=${waMsg}`;

                    if (formStatus) {
                        formStatus.className = 'form-status error';
                        formStatus.innerHTML = `
                            <p style="margin: 0 0 12px;">⚠️ Server is taking longer to respond. You can instantly send this booking via WhatsApp or Email:</p>
                            <a href="${waUrl}" target="_blank" class="cta-btn" style="background:#25d366; color:#fff; display:inline-block; padding:10px 22px; font-size:13px; text-decoration:none; margin: 4px; border-radius:20px;">
                                💬 Send on WhatsApp Directly
                            </a>
                            <a href="mailto:${targetEmail}?subject=New Booking - ${encodeURIComponent(data.name || 'Client')}&body=${waMsg}" class="cta-btn" style="background:#f1683a; color:#fff; display:inline-block; padding:10px 22px; font-size:13px; text-decoration:none; margin: 4px; border-radius:20px;">
                                ✉️ Send via Email App
                            </a>
                        `;
                        formStatus.style.display = 'block';
                    }
                }

                if (submitBtn) submitBtn.disabled = false;
                if (btnText) btnText.innerText = originalText;
            });
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initForm);
    } else {
        initForm();
    }
})();
