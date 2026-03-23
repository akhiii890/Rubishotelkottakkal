// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // 1. Sticky Navbar Effect
    const navbar = document.querySelector(".navbar");
    
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.style.padding = "10px 0";
            navbar.style.background = "rgba(255, 255, 255, 0.98)";
            navbar.style.boxShadow = "0 5px 25px rgba(0,0,0,0.1)";
        } else {
            navbar.style.padding = "15px 0";
            navbar.style.background = "rgba(255, 255, 255, 0.95)";
            navbar.style.boxShadow = "0 2px 20px rgba(0,0,0,0.05)";
        }
    });

    // 2. Mobile Menu Toggle (Basic Implementation)
    const mobileBtn = document.querySelector(".mobile-menu-btn");
    const navLinks = document.querySelector(".nav-links");
    
    // We can add a simple toggle for mobile if needed, though for a premium feel
    // it's better to use GSAP or an overlay. Here is a basic implementation placeholder.
    mobileBtn.addEventListener("click", () => {
        // Toggle mobile menu logic here
        // For simplicity in this demo, just alert or expand a flex container
        // In a full implementation, you'd toggle a class that shows an overlay menu.
        alert("Mobile menu clicked! In a full prod version, this would open a fullscreen navigation overlay.");
    });

    // 3. GSAP Animations Registration
    gsap.registerPlugin(ScrollTrigger);

    // Initial Hero Animation
    const heroTl = gsap.timeline();
    
    heroTl.from(".rating-badge", {
        y: -30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.2
    })
    .from(".hero-headline", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
    }, "-=0.4")
    .from(".hero-subheadline", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
    }, "-=0.4")
    .from(".hero-buttons .btn", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: "power3.out"
    }, "-=0.4")
    .from(".scroll-indicator", {
        opacity: 0,
        duration: 1,
        ease: "power2.inOut"
    }, "-=0.2");

    // Hero Parallax Background
    gsap.to(".hero-bg", {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: true
        }
    });

    // Section Title Animation Utility
    const animateSectionTitles = document.querySelectorAll(".section-title");
    animateSectionTitles.forEach(title => {
        gsap.from(title, {
            y: 30,
            opacity: 0,
            duration: 0.8,
            scrollTrigger: {
                trigger: title,
                start: "top 85%",
                toggleActions: "play none none reverse"
            }
        });
    });

    // About Section
    gsap.from(".about-description, .proximity-cards", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
            trigger: ".about-text",
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
    });

    gsap.from(".about-img-box", {
        scale: 0.9,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".about-image-wrapper",
            start: "top 75%",
            toggleActions: "play none none reverse"
        }
    });

    // USP Animation
    gsap.from(".usp-item", {
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "back.out(1.7)",
        scrollTrigger: {
            trigger: ".usp-grid",
            start: "top 85%",
            toggleActions: "play none none reverse"
        }
    });

    // Rooms Showcase
    gsap.from(".room-main-image", {
        x: -50,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".rooms-showcase",
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
    });

    gsap.from(".feature-item", {
        x: 30,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".room-features-list",
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
    });

    // Amenities
    gsap.from(".amenity-card", {
        y: 40,
        opacity: 0,
        scale: 0.95,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".amenities-grid",
            start: "top 85%",
            toggleActions: "play none none reverse"
        }
    });

    // Reviews
    gsap.from(".review-card", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".reviews-grid",
            start: "top 85%",
            toggleActions: "play none none reverse"
        }
    });

    // Contact Grid
    gsap.from(".contact-item", {
        x: -30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".contact-methods",
            start: "top 85%",
            toggleActions: "play none none reverse"
        }
    });

    // Smooth Scrolling for Nav Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                // Account for fixed header
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
});
