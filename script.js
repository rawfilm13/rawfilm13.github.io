// Mobile Hamburger Navigation
const hamburgerBtn = document.getElementById('hamburgerBtn');
const navLinks = document.getElementById('navLinks');

if (hamburgerBtn && navLinks) {
    hamburgerBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = navLinks.classList.toggle('active');
        hamburgerBtn.classList.toggle('active');
        hamburgerBtn.setAttribute('aria-expanded', isOpen);
    });

    // Close when clicking any nav link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburgerBtn.classList.remove('active');
            hamburgerBtn.setAttribute('aria-expanded', 'false');
        });
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !hamburgerBtn.contains(e.target)) {
            navLinks.classList.remove('active');
            hamburgerBtn.classList.remove('active');
            hamburgerBtn.setAttribute('aria-expanded', 'false');
        }
    });
}

// Carousel slider logic
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let carouselDom = document.querySelector('.carousel');
const overviewSection = document.getElementById('overview');

if (carouselDom && nextDom && prevDom) {
    let SliderDom = carouselDom.querySelector('.carousel .list');
    let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
    let thumbnailItemsDom = thumbnailBorderDom ? thumbnailBorderDom.querySelectorAll('.item') : [];
    
    // Total slides in the carousel (Pre Wedding, Ring Ceremony, Wedding, Maternity, Fashion Portfolio)
    const totalSlides = 5;
    let currentSlideIndex = 0; // Starts at 0 (Pre Wedding)
    let isTransitioning = false;

    if (thumbnailBorderDom && thumbnailItemsDom.length > 0) {
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
    }

    let timeRunning = 1500;
    let timeAutoNext = 7000;
    let runTimeOut;
    let runNextAuto;

    function resetAutoTimer() {
        clearTimeout(runNextAuto);
        // Only run auto-slider when user is at the top section
        if (window.scrollY < 100) {
            runNextAuto = setTimeout(() => {
                showSlider('next', true); // Auto next, does not force scroll down
            }, timeAutoNext);
        }
    }

    resetAutoTimer();

    // Pause/Resume auto-slider on page scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 150) {
            clearTimeout(runNextAuto);
        } else {
            resetAutoTimer();
        }

        // When user scrolls back up to the top, reset slide position to last slide
        if (window.scrollY <= 10 && currentSlideIndex < totalSlides - 1) {
            // User scrolled back to top
        }
    }, { passive: true });

    nextDom.onclick = function() {
        triggerSlide('next');
    };

    prevDom.onclick = function() {
        triggerSlide('prev');
    };

    function showSlider(type, isAuto = false) {
        let SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
        let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
        
        if (type === 'next') {
            currentSlideIndex = (currentSlideIndex + 1) % totalSlides;
            SliderDom.appendChild(SliderItemsDom[0]);
            if (thumbnailBorderDom && thumbnailItemsDom.length > 0) {
                thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
            }
            carouselDom.classList.add('next');
        } else {
            currentSlideIndex = (currentSlideIndex - 1 + totalSlides) % totalSlides;
            SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
            if (thumbnailBorderDom && thumbnailItemsDom.length > 0) {
                thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
            }
            carouselDom.classList.add('prev');
        }

        clearTimeout(runTimeOut);
        runTimeOut = setTimeout(() => {
            carouselDom.classList.remove('next');
            carouselDom.classList.remove('prev');
        }, timeRunning);

        resetAutoTimer();
    }

    function triggerSlide(type) {
        if (isTransitioning) return;
        isTransitioning = true;
        showSlider(type);
        setTimeout(() => {
            isTransitioning = false;
        }, 750);
    }

    // ----------------------------------------------------
    // Strict Mouse Wheel / Trackpad Scroll Handling (PC)
    // ----------------------------------------------------
    window.addEventListener('wheel', (e) => {
        // If already scrolled into the overview/footer section, normal scroll happens
        if (window.scrollY > 30) return;

        // DOWNWARD SCROLL
        if (e.deltaY > 15) {
            // If user has NOT reached the 4th (last) slide, NEVER scroll the page down!
            if (currentSlideIndex < totalSlides - 1) {
                e.preventDefault();
                if (!isTransitioning) {
                    triggerSlide('next');
                }
            } else {
                // User IS on the 4th slide (Maternity) and scrolls down:
                // Now allow smooth scroll down to the next section!
                if (overviewSection) {
                    overviewSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        }
        // UPWARD SCROLL
        else if (e.deltaY < -15) {
            if (window.scrollY <= 15) {
                if (currentSlideIndex > 0) {
                    e.preventDefault();
                    if (!isTransitioning) {
                        triggerSlide('prev');
                    }
                }
            }
        }
    }, { passive: false });

    // ----------------------------------------------------
    // Smartphone Touch Gestures (Strict Scroll Lock)
    // ----------------------------------------------------
    let touchStartX = 0;
    let touchStartY = 0;
    let isTouchingCarousel = false;

    window.addEventListener('touchstart', (e) => {
        if (window.scrollY <= 20) {
            touchStartX = e.touches[0].clientX;
            touchStartY = e.touches[0].clientY;
            isTouchingCarousel = true;
        } else {
            isTouchingCarousel = false;
        }
    }, { passive: true });

    // Crucial: prevent mobile browser from scrolling page down before all 4 slides complete
    window.addEventListener('touchmove', (e) => {
        if (!isTouchingCarousel || window.scrollY > 20) return;

        const currentY = e.touches[0].clientY;
        const diffY = currentY - touchStartY;

        // If not on the last slide, prevent native page vertical scroll!
        if (currentSlideIndex < totalSlides - 1) {
            if (e.cancelable) {
                e.preventDefault(); // Locks page scroll so slides change instead
            }
        } else {
            // On last slide: if swiping up (moving page down), allow or trigger smooth scroll
            if (diffY < -30 && overviewSection) {
                overviewSection.scrollIntoView({ behavior: 'smooth' });
                isTouchingCarousel = false;
            }
        }
    }, { passive: false });

    window.addEventListener('touchend', (e) => {
        if (!isTouchingCarousel || window.scrollY > 20) return;

        const touchEndX = e.changedTouches[0].clientX;
        const touchEndY = e.changedTouches[0].clientY;

        const diffX = touchEndX - touchStartX;
        const diffY = touchEndY - touchStartY;
        const absX = Math.abs(diffX);
        const absY = Math.abs(diffY);
        const threshold = 35;

        if (isTransitioning) return;

        // Horizontal Swipe (Left = Next, Right = Prev)
        if (absX > absY && absX > threshold) {
            if (diffX < 0) {
                if (currentSlideIndex < totalSlides - 1) {
                    triggerSlide('next');
                } else if (overviewSection) {
                    overviewSection.scrollIntoView({ behavior: 'smooth' });
                }
            } else {
                triggerSlide('prev');
            }
        }
        // Vertical Swipe (Up = Next, Down = Prev)
        else if (absY >= absX && absY > threshold) {
            if (diffY < 0) {
                // Swiping UP -> Next slide
                if (currentSlideIndex < totalSlides - 1) {
                    triggerSlide('next');
                } else if (overviewSection) {
                    overviewSection.scrollIntoView({ behavior: 'smooth' });
                }
            } else if (diffY > 0) {
                // Swiping DOWN -> Prev slide
                if (currentSlideIndex > 0) {
                    triggerSlide('prev');
                }
            }
        }
    }, { passive: true });
}

// ----------------------------------------------------
// Booking Form Direct Email Submission (FormSubmit AJAX)
// ----------------------------------------------------
const bookingForm = document.getElementById('bookingForm');
const submitBtn = document.getElementById('submitBtn');
const formStatus = document.getElementById('formStatus');

if (bookingForm && submitBtn && formStatus) {
    bookingForm.addEventListener('submit', async function (e) {
        e.preventDefault();

        const btnText = submitBtn.querySelector('.btn-text');
        const originalText = btnText ? btnText.innerText : 'Submit Booking Request';

        // Set loading state
        submitBtn.disabled = true;
        if (btnText) btnText.innerText = 'Sending Request...';
        formStatus.style.display = 'none';
        formStatus.className = 'form-status';

        const formData = new FormData(bookingForm);
        const data = Object.fromEntries(formData.entries());

        try {
            const scriptUrl = 'https://script.google.com/macros/s/AKfycbzWK5IcwE6Rqc4PBkIaVM1EGzhZsrAMhs0_n-JwMZU9oB9wEcdGnX9skOCHqr4fLOM1/exec';
            await fetch(scriptUrl, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'text/plain;charset=utf-8'
                },
                body: JSON.stringify(data)
            });

            formStatus.className = 'form-status success';
            formStatus.innerHTML = '🎉 <strong>Thank you!</strong> Your booking request has been sent successfully. We will contact you shortly!';
            formStatus.style.display = 'block';
            bookingForm.reset();
        } catch (error) {
            formStatus.className = 'form-status error';
            formStatus.innerHTML = '⚠️ Oops! Could not send message automatically. Please contact us directly at <a href="mailto:info@rawfilmphotography.com" style="color: #fff; text-decoration: underline;">info@rawfilmphotography.com</a> or Call/WhatsApp: <a href="tel:+919877281570" style="color: #fff; text-decoration: underline;">+91 9877 281 570</a>.';
            formStatus.style.display = 'block';
        } finally {
            submitBtn.disabled = false;
            if (btnText) btnText.innerText = originalText;
        }
    });
}