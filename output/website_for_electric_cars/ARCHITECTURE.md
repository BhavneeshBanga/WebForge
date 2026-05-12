# Architecture — website for electric cars

# Electric Vehicle Website Architecture Document

## Project Overview

**Project Name:** VoltLux - Premium Electric Vehicle Experience  
**Target Audience:** affluent eco-conscious consumers (30-55 years), tech enthusiasts, luxury car buyers  
**Problem Solved:** Provides an immersive, premium digital experience that showcases electric vehicles as the future of luxury transportation, combining sustainability with high performance  

**Key Goals:**
- Establish emotional connection between luxury and sustainability
- Drive test drive bookings and model inquiries
- Position brand as technological innovator in automotive space
- Create aspirational lifestyle content around EV ownership

**Overall Vibe/Mood:** Sophisticated, futuristic, premium, sustainable luxury. Minimalist yet powerful aesthetic with subtle motion and glassmorphic elements.

**Page Structure Summary:**
1. Header/Navigation with smooth scroll
2. Hero section with animated vehicle showcase
3. Features/Benefits section with interactive cards
4. Technology showcase with parallax effects
5. Model lineup with 3D-like cards
6. Sustainability impact visualization
7. Customer testimonials with carousel
8. Testimonials section with animated stats
9. CTA section with countdown timer
10. Footer with comprehensive links

## Color Scheme & Typography

**Exact Color Codes:**
- Background: #0A0A0F (Deep space black)
- Primary: #00D4FF (Electric cyan)
- Secondary: #FF006E (Vibrant pink)
- Accent: #FFBE0B (Golden yellow)
- Text: #FFFFFF (Pure white)
- Muted Text: #888888 (Light gray)
- Borders: #1A1A2E (Dark navy)
- Glass: rgba(255, 255, 255, 0.05)

**Typography Stack:**
- Headings: "Inter" (Google Fonts) - Bold, modern, tech-forward
- Body: "Inter" (Google Fonts) - Regular weight for readability
- Font sizes:
  - H1: 3.5rem (140px)
  - H2: 2.5rem (100px)
  - H3: 1.875rem (75px)
  - P: 1.125rem (18px)
  - Small: 0.875rem (14px)

**Spacing Scale:**
- XS: 0.25rem (4px)
- SM: 0.5rem (8px)
- MD: 1rem (16px)
- LG: 1.5rem (24px)
- XL: 2rem (32px)
- XXL: 3rem (48px)
- XXXL: 4rem (64px)

**Gradient Definitions:**
- Primary Gradient: linear-gradient(135deg, #00D4FF 0%, #0099CC 100%)
- Secondary Gradient: linear-gradient(135deg, #FF006E 0%, #FF00CC 100%)
- Glow Gradient: linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.3), transparent)
- Glass Gradient: linear-gradient(180deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.1) 100%)

## HTML Structure

**Header/Nav:**
```html
<header class="header">
  <nav class="nav">
    <div class="nav-container">
      <div class="logo">VOLTLUX</div>
      <ul class="nav-links">
        <li><a href="#features">Features</a></li>
        <li><a href="#technology">Technology</a></li>
        <li><a href="#models">Models</a></li>
        <li><a href="#sustainability">Sustainability</a></li>
        <li><a href="#testimonials">Reviews</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <button class="hamburger" aria-label="Toggle menu">
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
      </button>
    </div>
  </nav>
</header>
```

**Hero Section:**
```html
<section class="hero">
  <div class="hero-container">
    <div class="hero-content">
      <h1 class="hero-title">Drive the Future</h1>
      <p class="hero-subtitle">Where luxury meets sustainability in perfect harmony</p>
      <button class="btn btn-primary">Experience VoltLux</button>
    </div>
    <div class="hero-visual">
      <div class="vehicle-showcase">
        <div class="vehicle-model voltlux-sedan">
          <div class="vehicle-reflection"></div>
        </div>
        <div class="vehicle-model voltlux-suv">
          <div class="vehicle-reflection"></div>
        </div>
      </div>
    </div>
  </div>
</section>
```

**Features Section:**
```html
<section id="features" class="features">
  <div class="container">
    <h2 class="section-title">Revolutionary Features</h2>
    <div class="features-grid">
      <div class="feature-card">
        <div class="feature-icon">⚡</div>
        <h3>1000HP Instant Torque</h3>
        <p>Zero to 60 in 2.9 seconds with whisper-quiet electric power</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">🔋</div>
        <h3>400-Mile Range</h3>
        <p>Extended highway range with rapid charging technology</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">🛡️</div>
        <h3>5-Star Safety</h3>
        <p>Advanced AI-assisted safety systems for complete peace of mind</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">💎</div>
        <h3>Sustainable Luxury</h3>
        <p>Handcrafted with recycled materials and vegan leather interiors</p>
      </div>
    </div>
  </div>
</section>
```

**Technology Showcase:**
```html
<section id="technology" class="technology">
  <div class="container">
    <h2 class="section-title">Innovation Redefined</h2>
    <div class="tech-showcase">
      <div class="tech-item">
        <div class="tech-header">
          <h3>Neural AI Assistant</h3>
          <span class="tech-badge">AI-Powered</span>
        </div>
        <div class="tech-content">
          <p>Voice-activated AI that learns your preferences and anticipates your needs</p>
          <div class="tech-stats">
            <div class="stat">99.9% Accuracy</div>
            <div class="stat">27 Languages</div>
            <div class="stat">Real-time Updates</div>
          </div>
        </div>
      </div>
      <!-- More tech items -->
    </div>
  </div>
</section>
```

**Models Section:**
```html
<section id="models" class="models">
  <div class="container">
    <h2 class="section-title">Our Collection</h2>
    <div class="models-grid">
      <div class="model-card voltlux-sedan">
        <div class="model-badge">Sedan</div>
        <h3>VoltLux S</h3>
        <p>Starting at $89,999</p>
        <div class="model-features">
          <span>Max Range: 450mi</span>
          <span>0-60: 2.9s</span>
          <span>Seating: 5</span>
        </div>
      </div>
      <!-- More model cards -->
    </div>
  </div>
</section>
```

**Sustainability Section:**
```html
<section id="sustainability" class="sustainability">
  <div class="container">
    <h2 class="section-title">Our Green Commitment</h2>
    <div class="sustainability-visual">
      <div class="impact-counter">
        <span class="impact-number" data-target="500000">0</span>
        <span class="impact-label">Trees Planted</span>
      </div>
      <div class="impact-counter">
        <span class="impact-number" data-target="1000000">0</span>
        <span class="impact-label">CO₂ Saved (tons)</span>
      </div>
    </div>
  </div>
</section>
```

**Testimonials Carousel:**
```html
<section id="testimonials" class="testimonials">
  <div class="container">
    <h2 class="section-title">Customer Stories</h2>
    <div class="testimonial-carousel">
      <div class="testimonial-card active">
        <div class="testimonial-avatar">JD</div>
        <div class="testimonial-content">
          <p>"The future of driving is here. VoltLux has exceeded every expectation."</p>
          <h3>John Davidson</h3>
          <div class="testimonial-rating">★★★★★</div>
        </div>
      </div>
      <!-- More testimonial cards -->
    </div>
    <div class="testimonial-controls">
      <button class="testimonial-prev">‹</button>
      <button class="testimonial-next">›</button>
    </div>
  </div>
</section>
```

**CTA Section:**
```html
<section class="cta-section">
  <div class="container">
    <div class="cta-content">
      <h2>Ready to Experience Tomorrow?</h2>
      <p>Schedule your exclusive test drive today</p>
      <button class="btn btn-primary btn-large">Book Test Drive</button>
      <div class="cta-countdown">
        <span class="countdown-timer">00:00:00</span>
        <span class="countdown-label">Limited Time Offer</span>
      </div>
    </div>
  </div>
</section>
```

**Footer:**
```html
<footer class="footer">
  <div class="container">
    <div class="footer-content">
      <div class="footer-column">
        <h3>VoltLux</h3>
        <p>Driving the future of sustainable luxury</p>
        <div class="social-links">
          <a href="#" class="social-link">T</a>
          <a href="#" class="social-link">I</a>
          <a href="#" class="social-link">N</a>
          <a href="#" class="social-link">D</a>
        </div>
      </div>
      <div class="footer-column">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Technology</a></li>
          <li><a href="#">Models</a></li>
          <li><a href="#">Sustainability</a></li>
          <li><a href="#">Careers</a></li>
        </ul>
      </div>
      <div class="footer-column">
        <h4>Contact</h4>
        <ul>
          <li><a href="#">Showrooms</a></li>
          <li><a href="#">Service</a></li>
          <li><a href="#">Support</a></li>
          <li><a href="#">Press</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2024 VoltLux. All rights reserved. | Premium Electric Luxury</p>
    </div>
  </div>
</section>
```

## CSS Specifications

**Layout Systems:**
- Header: Fixed positioning with z-index 1000
- Container: Max-width 1400px, margin auto, padding 0 2rem
- Features Grid: CSS Grid, 2 columns desktop, 1 column mobile
- Models Grid: CSS Grid, 4 columns desktop, 2 columns tablet, 1 column mobile
- Testimonials: Flexbox with overflow hidden for carousel
- Responsive breakpoints: 768px (tablet), 1024px (desktop)

**Card Styles:**
- Base card: border-radius 20px, padding 2rem, box-shadow 0 20px 40px rgba(0,0,0,0.3)
- Glassmorphism: backdrop-filter blur(10px) saturate(150%) brightness(95%)
- Hover effects: transform translateY(-5px), box-shadow 0 25px 50px rgba(0,212,255,0.2)
- Animation: fade-in-up with 0.6s ease-out

**Button Styles:**
- Primary button: background linear-gradient(135deg, #00D4FF, #0099CC), text white, padding 1rem 2.5rem
- Hover: transform scale(1.05), box-shadow 0 10px 30px rgba(0,212,255,0.4)
- Secondary button: transparent background, 2px solid #00D4FF, hover: background #00D4FF, text white
- Large button: font-size 1.25rem, padding 1.25rem 3rem

**Navigation:**
- Desktop: Flexbox, links with 2rem spacing, hover underline animation
- Mobile: Hamburger menu, nav links slide down with 0.3s ease
- Active state: color #00D4FF, bottom border 2px solid #00D4FF

**Animations:**
- Scroll animations: IntersectionObserver with 0.1 threshold, fade-in with stagger
- Hero vehicles: continuous rotation 360deg over 20s, reflection shimmer
- Counters: Animated number count from 0 to target over 3s ease-out
- Parallax: Background elements move at 0.5x scroll speed

**Breakpoints:**
- Mobile: <768px (single column, hamburger menu)
- Tablet: 768px-1024px (2 columns, adjusted padding)
- Desktop: >1024px (full grid layouts, hover states)

## JavaScript Functionality

**Mobile Navigation:**
- Toggle class "active" on hamburger button
- Show/hide nav-links with slideDown animation
- Close menu when clicking outside
- Active link highlighting based on scroll position

**Scroll Animations:**
- IntersectionObserver for elements entering viewport
- Stagger animation for feature cards (0.1s delay between each)
- Parallax effect for hero and technology sections
- Smooth scroll behavior for anchor links

**Counters:**
- Animated number counting for sustainability metrics
- Count from 0 to target value with 2 decimal precision
- Trigger when element enters viewport
- Duration: 3 seconds with ease-out cubic-bezier

**Testimonial Carousel:**
- Auto-rotate every 5 seconds
- Manual prev/next controls with smooth transitions
- Dot indicators showing current position
- Pause on hover
- Keyboard navigation (arrow keys)

**Form Validation:**
- Test drive booking form with fields: name, email, phone, model preference
- Real-time validation with visual feedback
- Email format validation
- Phone number validation (US format)
- Success/error messages with animations

**Smooth Scroll:**
- Custom smooth scroll for anchor links
- Offset for fixed header
- Easing function easeInOutCubic
- Cancel default anchor behavior

**Additional Features:**
- Lazy loading for images below fold
- Parallax scrolling for hero background
- Dynamic viewport height for mobile
- Touch-friendly interactions
- Performance optimization with requestAnimationFrame

## File Connections

**HTML File (index.html):**
- Links: <link rel="stylesheet" href="styles.css">
- Scripts: <script src="script.js" defer></script>
- Meta: charset UTF-8, viewport responsive, theme-color #0A0A0F

**CSS File (styles.css):**
- Class names used: header, nav, nav-container, nav-links, hamburger, hero, hero-container, hero-content, hero-title, hero-subtitle, btn, btn-primary, features, features-grid, feature-card, feature-icon, technology, tech-showcase, tech-item, tech-header, tech-badge, tech-content, tech-stats, models, models-grid, model-card, model-badge, model-features, sustainability, sustainability-visual, impact-counter, impact-number, impact-label, testimonials, testimonial-carousel, testimonial-card, testimonial-avatar, testimonial-content, testimonial-rating, testimonial-controls, cta-section, cta-content, countdown-timer, countdown-label, footer, footer-content, footer-column, social-links, footer-bottom

**JavaScript File (script.js):**
- IDs used: None (uses class selectors primarily)
- Classes targeted: hamburger, nav-links, hero-visual, feature-card, model-card, testimonial-card, testimonial-prev, testimonial-next, impact-number, cta-countdown
- Event listeners: scroll, resize, click on nav items, click on carousel controls
- Functions: toggleMobileMenu(), initScrollAnimations(), initCounters(), initCarousel(), initSmoothScroll(), validateBookingForm()