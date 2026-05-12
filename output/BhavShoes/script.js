document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle
    const navToggle = document.getElementById('nav-toggle');
    const mobileNav = document.getElementById('mobile-nav');
    const navLinks = document.querySelectorAll('.nav-links');

    if (navToggle && mobileNav) {
        navToggle.addEventListener('click', () => {
            mobileNav.classList.toggle('nav-active');
            navToggle.classList.toggle('active');
            document.body.style.overflow = mobileNav.classList.contains('nav-active') ? 'hidden' : '';
        });
    }

    // Close mobile nav when clicking links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('nav-active');
            navToggle.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Scroll-triggered Fade-in Animations (Intersection Observer)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all section titles and content blocks
    document.querySelectorAll('.section-title, .product-card, .review-card').forEach(el => {
        observer.observe(el);
    });

    // Form Validation
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        const emailInput = newsletterForm.querySelector('input[type="email"]');
        const subscribeBtn = newsletterForm.querySelector('button');
        let successMessage = null;

        const validateEmail = (email) => {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(email);
        };

        const showToast = (message, type = 'success') => {
            const toast = document.createElement('div');
            toast.className = `toast toast-${type}`;
            toast.textContent = message;
            document.body.appendChild(toast);
            setTimeout(() => toast.remove(), 3000);
        };

        subscribeBtn.addEventListener('click', () => {
            const email = emailInput.value.trim();
            if (!email) {
                showToast('Please enter your email.', 'error');
                return;
            }
            if (!validateEmail(email)) {
                showToast('Please enter a valid email address.', 'error');
                return;
            }
            showToast('Successfully subscribed!', 'success');
            emailInput.value = '';
            newsletterForm.reset();
        });
    }

    // Product Quick View Modal
    const productModals = document.querySelectorAll('.product-quick-view');
    productModals.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const productId = btn.dataset.productId;
            const modal = document.getElementById('product-modal');
            const modalContent = modal.querySelector('.modal-content');
            
            // Simulate fetching product details
            const productDetails = {
                name: 'Premium Leather Sneakers',
                price: '₹5,999',
                description: 'Handcrafted with the finest leather, these sneakers combine classic style with modern comfort.',
                image: `https://picsum.photos/seed/${productId}/400/400`
            };

            modalContent.innerHTML = `
                <div class="modal-image"><img src="${productDetails.image}" alt="${productDetails.name}"></div>
                <div class="modal-body">
                    <h2>${productDetails.name}</h2>
                    <p class="price">${productDetails.price}</p>
                    <p>${productDetails.description}</p>
                    <button class="btn btn-primary">Add to Cart</button>
                </div>
                <div class="modal-close">&times;</div>
            `;
            modal.classList.add('show');
            document.body.style.overflow = 'hidden';
        });
    });

    const modalClose = document.querySelector('.modal-close');
    const modalOverlay = document.querySelector('.modal-overlay');
    if (modalClose || modalOverlay) {
        [modalClose, modalOverlay].forEach(el => {
            if (el) el.addEventListener('click', () => {
                const modal = document.getElementById('product-modal');
                modal.classList.remove('show');
                document.body.style.overflow = '';
            });
        });
    }

    // Add to Cart with Toast Notification
    const cartButtons = document.querySelectorAll('.add-to-cart');
    let cartCount = 0;
    const cartCounter = document.getElementById('cart-count');

    cartButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            cartCount++;
            if (cartCounter) cartCounter.textContent = cartCount;
            
            const toast = document.createElement('div');
            toast.className = 'toast toast-success';
            toast.textContent = `Added to cart! (${cartCount})`;
            document.body.appendChild(toast);
            setTimeout(() => toast.remove(), 3000);
        });
    });

    // Product Counter Animation
    const priceElements = document.querySelectorAll('.product-price');
    priceElements.forEach(priceEl => {
        const originalPrice = priceEl.textContent;
        const numberStr = originalPrice.replace(/[^\d]/g, '');
        const finalNumber = parseInt(numberStr, 10);

        const animateValue = (start, end, duration) => {
            const range = end - start;
            const increment = range / (duration / 10);
            let current = start;
            const timer = setInterval(() => {
                current += increment;
                if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
                    current = end;
                    clearInterval(timer);
                }
                const display = Math.floor(current);
                priceEl.textContent = originalPrice.replace(/[^\d]/g, '') + originalPrice.replace(/[^\d]/g, '');
            }, 10);
        };
        
        // Trigger animation when element is visible
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                    animateValue(0, finalNumber, 1000);
                    entry.target.classList.add('animated');
                    observer.unobserve(entry.target);
                }
            });
        });
        observer.observe(priceEl);
    });

    // Search and Filter Functionality
    const searchInput = document.getElementById('search-products');
    const filterTabs = document.getElementById('filter-tabs');
    const productCards = document.querySelectorAll('.product-card');

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            productCards.forEach(card => {
                const text = card.textContent.toLowerCase();
                card.style.display = text.includes(query) ? 'block' : 'none';
            });
        });
    }

    if (filterTabs) {
        const tabs = filterTabs.querySelectorAll('.tab');
        const contents = filterTabs.querySelectorAll('.tab-content');
        tabs.forEach((tab, index) => {
            tab.addEventListener('click', () => {
                tabs.forEach(t => t.classList.remove('active'));
                contents.forEach(c => c.classList.remove('active'));
                tab.classList.add('active');
                contents[index].classList.add('active');
            });
        });
    }

    // Lazy Loading for Images (using Intersection Observer)
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });

    // Star Rating Interaction
    const reviewStars = document.querySelectorAll('.review-stars');
    reviewStars.forEach(stars => {
        stars.addEventListener('click', (e) => {
            const rating = e.target.dataset.rating;
            const starsContainer = e.target.closest('.review-stars');
            starsContainer.querySelectorAll('.star').forEach((star, index) => {
                star.classList.toggle('active', index < rating);
            });
        });
    });
});