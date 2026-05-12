# Architecture — website for shoes

# BhavShoes Website Architecture Document

## Project Overview
BhavShoes is a premium footwear retailer targeting fashion-conscious individuals aged 18-45 who seek trendy, quality shoes for everyday wear and special occasions. The website solves the common problem of finding authentic, stylish shoes online with a seamless shopping experience. Key goals include showcasing the latest collections, driving online sales, and building a strong brand presence. The overall vibe is energetic, modern, and luxurious - combining contemporary design with accessible pricing. The page structure flows logically from brand introduction to product discovery to conversion, featuring: Hero section → Featured Collections → Trending Now → Brand Story → Customer Reviews → Contact/Footer.

## Color Scheme & Typography
**Color Palette:**
- Background: #F8FAFB (light neutral)
- Primary: #6366F1 (vibrant indigo blue)
- Secondary: #1E293B (dark slate blue)
- Accent: #FB923C (warm orange)
- Text: #1E293B (primary text)
- Muted Text: #64748B (secondary text)
- Borders: #E2E8F0 (light gray)
- Gradient 1: linear-gradient(135deg, #667eea 0%, #764ba2 100%)
- Gradient 2: linear-gradient(135deg, #f093fb 0%, #f5576c 100%)
- Glassmorphism: rgba(255, 255, 255, 0.1) with backdrop-filter: blur(10px)

**Typography:**
- Heading Font: 'Poppins' (Google Fonts)
- Body Font: 'Inter' (Google Fonts)
- H1: 48px, weight 700
- H2: 36px, weight 600
- H3: 24px, weight 600
- P: 16px, weight 400
- Small: 14px, weight 400

**Spacing Scale:**
- XS: 4px
- SM: 8px
- MD: 16px
- LG: 24px
- XL: 32px
- XXL: 48px

## HTML Structure
**Header/Nav:**
- Logo: "BhavShoes" text with custom styling
- Nav Links: Home, Collections, About, Contact, Login/Cart
- Mobile: Hamburger icon (three lines)
- Behavior: Sticky with backdrop blur on scroll

**Hero Section:**
- Headline: "Step into Style with BhavShoes"
- Subheadline: "Discover the Perfect Pair for Every Occasion"
- CTA Button: "Shop Now"
- Background: Animated gradient with floating particles
- Contains: Logo, navigation, hero content, and promotional banner

**Featured Collections Section:**
- Section Title: "Featured Collections"
- Grid Layout: 4 columns on desktop, 2 on tablet, 1 on mobile
- Each Item: Product image, name, price, "Quick View" button
- Elements: 12 products displayed in carousel-style grid

**Trending Now Section:**
- Section Title: "Trending Now"
- Featured Items: 6 highlighted products with badges
- Layout: Two rows of 3 products each
- Special Elements: "Hot" badges, sale indicators, star ratings

**Brand Story Section:**
- Content: Brand history, mission statement, values
- Layout: Split design with text on left, imagery on right
- Elements: Timeline of brand milestones, founder quote

**Customer Reviews Section:**
- Section Title: "What Our Customers Say"
- Reviews Grid: 3 customer testimonials with avatars
- Elements: Star ratings, review text, customer names

**Contact/Footer Section:**
- Shop Details:
  - Phone: 9876543210
  - Email: bhav@mail.com
  - Address: ertyuiophgdszxcvbn87645
- Social Links: Instagram, Facebook, Twitter
- Newsletter Signup: Email input field with subscribe button
- Footer Links: About, Privacy Policy, Terms of Service

**Shared Class Names:**
- nav, nav-container, nav-links, nav-toggle
- hero, hero-content, hero-cta
- section, section-title
- product-grid, product-card, product-image, product-info
- testimonial, review-card
- footer, footer-content, contact-info
- btn, btn-primary, btn-secondary

## CSS Specifications
**Layout:**
- Header: Flexbox with sticky positioning
- Hero: Flexbox with centered content
- Product Grid: CSS Grid with auto-fit for responsiveness
- Sections: Flexbox with max-width containers

**Card Styles:**
- Border Radius: 20px
- Box Shadow: 0 10px 40px rgba(0, 0, 0, 0.1)
- Glassmorphism: background: rgba(255, 255, 255, 0.9), backdrop-filter: blur(10px)
- Hover Effects: Transform scale(1.05), box-shadow enhancement

**Button Styles:**
- Primary: Background gradient, white text, rounded corners
- Secondary: Transparent with border, white text
- Hover: Scale 1.05, shadow enhancement
- Focus: Outline with accent color

**Nav Design:**
- Desktop: Horizontal flex layout with smooth transitions
- Mobile: Hidden by default, toggled with hamburger
- Transition: All properties 0.3s ease

**Animations:**
- Fade In: opacity 0 to 1, duration 1s
- Slide Up: translateY 50px to 0, duration 0.8s
- Hover Zoom: scale 1.02, duration 0.2s
- Loading: Spinner animation for product images

**Breakpoints:**
- Mobile: 320px - 768px
- Tablet: 769px - 1024px
- Desktop: 1025px and above
- Changes: Grid columns, font sizes, padding adjustments

## JavaScript Functionality
**Mobile Navigation:**
- Toggle Class: .nav-active on nav-container
- Event: Click on nav-toggle
- Animation: Smooth slide-down for mobile menu

**Scroll Animations:**
- Intersection Observer: For section fade-in effects
- Threshold: 0.1 (10% of element visible)
- Elements: All section titles and content blocks

**Smooth Scroll:**
- Behavior: Smooth scrolling for anchor links
- Duration: 800ms ease

**Product Interactions:**
- Quick View: Modal popup with product details
- Add to Cart: Toast notification with count update
- Wishlist: Heart icon with fill animation

**Form Validation:**
- Email Field: Valid email format required
- Phone Field: 10-digit Indian number validation
- Newsletter: Email format check with success message

**Additional Features:**
- Product Counter: Animated number counting for prices
- Tab Switching: Product categories in featured section
- Search: Real-time product filtering
- Lazy Loading: Images load as user scrolls

## File Connections
**HTML File Structure:**
- Link Tags:
  - Google Fonts: Poppins and Inter
  - CSS: styles.css
  - Icons: Font Awesome for social media
- Script Tags:
  - Main JS: script.js
  - Utility: IntersectionObserver polyfill for older browsers
  - Analytics: Google Analytics tracking

**Shared Class Names (HTML & CSS):**
- nav, nav-container, nav-links, nav-toggle
- hero, hero-content, hero-cta, hero-background
- section, section-title, section-subtitle
- product-grid, product-card, product-image, product-info
- product-badge, product-price, product-quick-view
- testimonial, review-card, review-stars
- footer, footer-content, contact-info
- btn, btn-primary, btn-secondary, btn-outline
- modal, modal-content, modal-overlay
- toast, toast-notification

**JavaScript QuerySelector IDs:**
- navToggle: #nav-toggle
- mobileNav: #mobile-nav
- newsletterForm: #newsletter-form
- productModal: #product-modal
- cartCounter: #cart-count
- searchInput: #search-products
- filterTabs: #filter-tabs
- reviewStars: #review-rating

This architecture ensures a premium, modern shopping experience with rich interactions and stunning visuals that will wow visitors and drive conversions for BhavShoes.