// Reusable Components Injector for Taneira-Inspired Website

document.addEventListener("DOMContentLoaded", () => {
  injectHeader();
  injectFooter();
  injectDrawersAndModals();
  initializeComponentInteractivity();
});

// 1. Inject Header
function injectHeader() {
  const headerContainer = document.getElementById("global-header");
  if (!headerContainer) return;

  headerContainer.innerHTML = `
    <!-- Top Promotion Bar -->
    <div class="bg-brand-burgundy text-white text-xs py-2 px-4 overflow-hidden border-b border-brand-gold/20">
      <div class="ticker-wrap max-w-7xl mx-auto flex justify-between items-center text-center">
        <div class="ticker-content w-full flex justify-around space-x-8">
          <span>✨ Flat 10% OFF on your first order. Use code: <strong class="text-brand-gold">TANEIRA10</strong></span>
          <span class="hidden md:inline">|</span>
          <span>🚚 Free shipping across India on orders above ₹1,999</span>
          <span class="hidden md:inline">|</span>
          <span>⚜️ 100% Authentic Handlooms - Silk Mark Certified</span>
        </div>
      </div>
    </div>

    <!-- Main Header -->
    <div class="sticky-header sticky top-0 z-40 bg-white/95 border-b border-brand-gold/10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-20">
          
          <!-- Hamburger menu (Mobile) -->
          <div class="flex items-center lg:hidden">
            <button id="mobile-menu-toggle" type="button" class="text-brand-burgundy hover:text-brand-gold p-2" aria-label="Toggle menu">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          <!-- Brand Logo -->
          <div class="flex-shrink-0 flex items-center">
            <a href="index.html" class="flex items-center">
              <img src="images/vastraa_logo.png" alt="Vastraa Logo" class="h-16 w-auto mix-blend-multiply hover:opacity-90 transition duration-300">
            </a>
          </div>

          <!-- Desktop Search Bar -->
          <div class="hidden md:flex flex-1 max-w-md mx-8">
            <div class="w-full relative">
              <input type="text" id="desktop-search-input" placeholder="Search for Kanjivaram, Banarasi, Cotton..." 
                class="w-full bg-brand-cream/50 text-sm text-brand-charcoal pl-10 pr-4 py-2.5 border border-brand-gold/20 focus:outline-none focus:border-brand-burgundy transition-colors duration-300">
              <div class="absolute left-3.5 top-3 text-brand-gold">
                <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          <!-- Right Action Icons -->
          <div class="flex items-center space-x-2 sm:space-x-4">
            
            <!-- Store Locator -->
            <a href="#" class="hidden sm:inline-flex items-center text-xs text-brand-charcoal hover:text-brand-gold transition duration-300 mr-2">
              <svg class="h-5 w-5 text-brand-gold mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Stores</span>
            </a>

            <!-- Account Icon -->
            <button id="account-btn" class="p-2 text-brand-charcoal hover:text-brand-gold transition duration-300 relative group" aria-label="Account">
              <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              
              <!-- Simple tooltip/dropdown for account -->
              <div class="absolute right-0 mt-3 w-48 bg-white border border-brand-gold/20 shadow-lg py-2 hidden group-hover:block z-50 text-left">
                <p class="px-4 py-1 text-xs text-gray-500 font-semibold border-b border-gray-100">Welcome Back</p>
                <a href="#" class="block px-4 py-2 text-sm text-brand-charcoal hover:bg-brand-cream hover:text-brand-burgundy">My Profile</a>
                <a href="#" class="block px-4 py-2 text-sm text-brand-charcoal hover:bg-brand-cream hover:text-brand-burgundy">My Orders</a>
                <a href="#" class="block px-4 py-2 text-sm text-brand-charcoal hover:bg-brand-cream hover:text-brand-burgundy border-t border-gray-100">Sign In / Register</a>
              </div>
            </button>

            <!-- Wishlist Icon -->
            <a href="wishlist.html" class="p-2 text-brand-charcoal hover:text-brand-gold transition duration-300 relative" aria-label="Wishlist">
              <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span id="wishlist-badge" class="absolute top-0 right-0 bg-brand-gold text-brand-burgundy text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center hidden">
                0
              </span>
            </a>

            <!-- Cart/Bag Icon -->
            <button id="cart-drawer-toggle" class="p-2 text-brand-charcoal hover:text-brand-gold transition duration-300 relative" aria-label="Shopping Bag">
              <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span id="cart-badge" class="absolute top-0 right-0 bg-brand-burgundy text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center hidden">
                0
              </span>
            </button>
          </div>
        </div>
        
        <!-- Mobile Search (only visible on small screens under md) -->
        <div class="md:hidden pb-4 px-2">
          <div class="relative">
            <input type="text" id="mobile-search-input" placeholder="Search for Kanjivaram, Kurtas..." 
              class="w-full bg-brand-cream/50 text-sm text-brand-charcoal pl-10 pr-4 py-2 border border-brand-gold/20 focus:outline-none focus:border-brand-burgundy">
            <div class="absolute left-3 top-2.5 text-brand-gold">
              <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

      </div>

      <!-- Navigation Bar Links (Desktop Menu) -->
      <nav class="hidden lg:block bg-brand-cream border-t border-b border-brand-gold/15">
        <div class="max-w-7xl mx-auto px-4">
          <div class="flex justify-center space-x-10 py-3.5">
            <a href="index.html" class="text-xs uppercase tracking-widest font-semibold text-brand-charcoal hover:text-brand-burgundy hover:border-b-2 hover:border-brand-burgundy transition-all duration-200 pb-1">Home</a>
            <a href="sarees.html" class="text-xs uppercase tracking-widest font-semibold text-brand-charcoal hover:text-brand-burgundy hover:border-b-2 hover:border-brand-burgundy transition-all duration-200 pb-1">Sarees</a>
            <a href="kurtas.html" class="text-xs uppercase tracking-widest font-semibold text-brand-charcoal hover:text-brand-burgundy hover:border-b-2 hover:border-brand-burgundy transition-all duration-200 pb-1">Kurtas & Suits</a>
            <a href="sarees.html?fabric=Silk" class="text-xs uppercase tracking-widest font-semibold text-brand-charcoal hover:text-brand-burgundy hover:border-b-2 hover:border-brand-burgundy transition-all duration-200 pb-1">Heritage Weaves</a>
            <a href="wishlist.html" class="text-xs uppercase tracking-widest font-semibold text-brand-charcoal hover:text-brand-burgundy hover:border-b-2 hover:border-brand-burgundy transition-all duration-200 pb-1">Wishlist</a>
            <a href="cart.html" class="text-xs uppercase tracking-widest font-semibold text-brand-charcoal hover:text-brand-burgundy hover:border-b-2 hover:border-brand-burgundy transition-all duration-200 pb-1">Bag</a>
          </div>
        </div>
      </nav>
    </div>
  `;
}

// 2. Inject Footer
function injectFooter() {
  const footerContainer = document.getElementById("global-footer");
  if (!footerContainer) return;

  footerContainer.innerHTML = `
    <!-- Top Footer Bar - The Taneira Promise -->
    <div class="bg-[#581123]/5 border-t border-brand-gold/20 py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div class="flex flex-col items-center">
            <div class="p-3 bg-white border border-brand-gold/25 rounded-full mb-3 text-brand-burgundy">
              <svg class="h-6 w-6 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h4 class="font-serif text-sm font-bold text-brand-burgundy uppercase tracking-wider mb-1">Tata Trust</h4>
            <p class="text-xs text-brand-charcoal/80 max-w-[200px]">Backed by the legacy of trust and authentic service of the Tata Group.</p>
          </div>
          <div class="flex flex-col items-center">
            <div class="p-3 bg-white border border-brand-gold/25 rounded-full mb-3 text-brand-burgundy">
              <svg class="h-6 w-6 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 class="font-serif text-sm font-bold text-brand-burgundy uppercase tracking-wider mb-1">Silk Mark Certified</h4>
            <p class="text-xs text-brand-charcoal/80 max-w-[200px]">100% pure silk products authenticated with certification tags.</p>
          </div>
          <div class="flex flex-col items-center">
            <div class="p-3 bg-white border border-brand-gold/25 rounded-full mb-3 text-brand-burgundy">
              <svg class="h-6 w-6 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>
            <h4 class="font-serif text-sm font-bold text-brand-burgundy uppercase tracking-wider mb-1">Secure Checkout</h4>
            <p class="text-xs text-brand-charcoal/80 max-w-[200px]">Safe online payment gateways protecting your transaction details.</p>
          </div>
          <div class="flex flex-col items-center">
            <div class="p-3 bg-white border border-brand-gold/25 rounded-full mb-3 text-brand-burgundy">
              <svg class="h-6 w-6 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 8H18.2" />
              </svg>
            </div>
            <h4 class="font-serif text-sm font-bold text-brand-burgundy uppercase tracking-wider mb-1">Easy Returns</h4>
            <p class="text-xs text-brand-charcoal/80 max-w-[200px]">Hassle-free 7-day returns for worry-free ethnic shopping.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Footer -->
    <footer class="bg-brand-burgundy text-white pt-16 pb-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 border-b border-white/10 pb-12">
          
          <!-- Column 1: Brand Info -->
          <div>
            <span class="font-serif text-2xl font-bold tracking-widest text-white">VASTRAA</span>
            <p class="text-[7.5px] tracking-[0.05em] text-brand-gold -mt-0.5 mb-6 uppercase font-semibold">Woven in Heritage, Worn in Grace</p>
            <p class="text-sm text-white/80 leading-relaxed mb-6">
              Experience the best of handcrafted sarees and premium ethnic wear curated from diverse heritage weaving regions of India.
            </p>
            <!-- Newsletter Sign Up -->
            <form id="footer-newsletter-form" class="mt-4">
              <label for="newsletter-email" class="block text-xs uppercase tracking-wider font-semibold text-brand-gold mb-2">Subscribe to Our newsletter</label>
              <div class="flex">
                <input type="email" id="newsletter-email" placeholder="Your Email Address" required 
                  class="bg-white/10 text-sm text-white px-3 py-2 border border-brand-gold/30 focus:outline-none focus:border-brand-gold flex-1">
                <button type="submit" class="bg-brand-gold hover:bg-brand-goldDark text-brand-burgundy font-bold px-4 transition-colors duration-300">
                  Join
                </button>
              </div>
            </form>
          </div>

          <!-- Column 2: Quick Links -->
          <div>
            <h4 class="font-serif text-lg font-semibold text-brand-gold tracking-wide mb-6">Shop Categories</h4>
            <ul class="space-y-3.5 text-sm text-white/80">
              <li><a href="sarees.html" class="hover:text-brand-gold transition duration-200">Sarees collection</a></li>
              <li><a href="sarees.html?weave=Banarasi" class="hover:text-brand-gold transition duration-200">Banarasi Silk Sarees</a></li>
              <li><a href="sarees.html?weave=Kanjivaram" class="hover:text-brand-gold transition duration-200">Kanjivaram Silk Sarees</a></li>
              <li><a href="kurtas.html" class="hover:text-brand-gold transition duration-200">Kurta Sets & Salwars</a></li>
              <li><a href="sarees.html?fabric=Linen" class="hover:text-brand-gold transition duration-200">Summer Linen Sarees</a></li>
              <li><a href="wishlist.html" class="hover:text-brand-gold transition duration-200">My Wishlist</a></li>
            </ul>
          </div>

          <!-- Column 3: Corporate Info -->
          <div>
            <h4 class="font-serif text-lg font-semibold text-brand-gold tracking-wide mb-6">Customer Care</h4>
            <ul class="space-y-3.5 text-sm text-white/80">
              <li><a href="#" class="hover:text-brand-gold transition duration-200">Contact Us / Support</a></li>
              <li><a href="#" class="hover:text-brand-gold transition duration-200">Shipping & Delivery Policies</a></li>
              <li><a href="#" class="hover:text-brand-gold transition duration-200">Returns & Refund Process</a></li>
              <li><a href="#" class="hover:text-brand-gold transition duration-200">Store Locator Directory</a></li>
              <li><a href="#" class="hover:text-brand-gold transition duration-200">Authenticity Guarantee</a></li>
              <li><a href="#" class="hover:text-brand-gold transition duration-200">FAQs</a></li>
            </ul>
          </div>

          <!-- Column 4: Contact info & Social -->
          <div>
            <h4 class="font-serif text-lg font-semibold text-brand-gold tracking-wide mb-6">Get In Touch</h4>
            <ul class="space-y-3.5 text-sm text-white/80 mb-6">
              <li class="flex items-start">
                <svg class="h-5 w-5 text-brand-gold mr-2.5 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <span>Titan Company Limited, Off Old Airport Road, Kodihalli, Bengaluru - 560008, Karnataka, India</span>
              </li>
              <li class="flex items-center">
                <svg class="h-5 w-5 text-brand-gold mr-2.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:18002660123" class="hover:text-brand-gold">1800-266-0123</a>
              </li>
              <li class="flex items-center">
                <svg class="h-5 w-5 text-brand-gold mr-2.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:customercare@titan.co.in" class="hover:text-brand-gold">customercare@titan.co.in</a>
              </li>
            </ul>

            <!-- Social Media Links -->
            <div class="flex space-x-4">
              <a href="#" class="p-2 bg-white/5 hover:bg-brand-gold hover:text-brand-burgundy transition-all duration-300 rounded-full text-white/90" aria-label="Facebook">
                <svg class="h-4.5 w-4.5 fill-current" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/></svg>
              </a>
              <a href="#" class="p-2 bg-white/5 hover:bg-brand-gold hover:text-brand-burgundy transition-all duration-300 rounded-full text-white/90" aria-label="Instagram">
                <svg class="h-4.5 w-4.5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="#" class="p-2 bg-white/5 hover:bg-brand-gold hover:text-brand-burgundy transition-all duration-300 rounded-full text-white/90" aria-label="Pinterest">
                <svg class="h-4.5 w-4.5 fill-current" viewBox="0 0 24 24"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.947-.199-2.399.041-3.429.218-.927 1.408-5.968 1.408-5.968s-.359-.719-.359-1.781c0-1.663.967-2.909 2.167-2.909 1.02 0 1.517.769 1.517 1.687 0 1.029-.652 2.564-.992 3.993-.285 1.193.6 2.169 1.777 2.169 2.133 0 3.771-2.247 3.771-5.485 0-2.868-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.166-1.495-.69-2.433-2.878-2.433-4.617 0-3.766 2.737-7.229 7.892-7.229 4.145 0 7.372 2.956 7.372 6.9 0 4.12-2.597 7.433-6.202 7.433-1.212 0-2.35-.63-2.739-1.378l-.747 2.846c-.27 1.037-.999 2.337-1.49 3.138 1.122.35 2.31.54 3.541.54 6.621 0 11.988-5.367 11.988-11.987S18.638 0 12.017 0z"/></svg>
              </a>
              <a href="#" class="p-2 bg-white/5 hover:bg-brand-gold hover:text-brand-burgundy transition-all duration-300 rounded-full text-white/90" aria-label="YouTube">
                <svg class="h-4.5 w-4.5 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.871.508 9.388.508 9.388.508s7.517 0 9.388-.508a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>
        </div>

        <div class="pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/60">
          <p>© 2026 Vastraa E-commerce Website. Developed for training purposes. All trademarks and images belong to their respective owners.</p>
          <div class="flex space-x-6 mt-4 md:mt-0">
            <a href="#" class="hover:underline">Terms of Use</a>
            <a href="#" class="hover:underline">Privacy Policy</a>
            <a href="#" class="hover:underline">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}

// 3. Inject Drawers and Modals
function injectDrawersAndModals() {
  // Check if drawers container already exists, otherwise create it
  let container = document.getElementById("drawers-and-modals-root");
  if (!container) {
    container = document.createElement("div");
    container.id = "drawers-and-modals-root";
    document.body.appendChild(container);
  }

  container.innerHTML = `
    <!-- Mobile Navigation Drawer -->
    <div id="mobile-menu-drawer" class="fixed inset-0 z-50 overflow-hidden hidden" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
      <div class="absolute inset-0 overflow-hidden">
        <!-- Overlay -->
        <div id="mobile-menu-overlay" class="absolute inset-0 bg-brand-charcoal/50 opacity-0 transition-opacity duration-300 ease-in-out"></div>

        <div class="pointer-events-none fixed inset-y-0 left-0 flex max-w-full pr-10">
          <!-- Slide-over panel -->
          <div id="mobile-menu-panel" class="pointer-events-auto w-screen max-w-xs transform -translate-x-full drawer-transition bg-white shadow-xl flex flex-col justify-between">
            <div class="py-6 px-4 sm:px-6 border-b border-brand-gold/15">
              <div class="flex items-center justify-between">
                <span class="font-serif text-xl font-bold tracking-widest text-brand-burgundy">MENU</span>
                <button id="mobile-menu-close" type="button" class="text-brand-charcoal hover:text-brand-gold p-1" aria-label="Close menu">
                  <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            <!-- Menu Links list -->
            <div class="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
              <nav class="space-y-4">
                <a href="index.html" class="block text-sm font-semibold text-brand-charcoal hover:text-brand-burgundy py-2 border-b border-brand-gold/5">Home</a>
                <a href="sarees.html" class="block text-sm font-semibold text-brand-charcoal hover:text-brand-burgundy py-2 border-b border-brand-gold/5">Sarees Collection</a>
                <a href="kurtas.html" class="block text-sm font-semibold text-brand-charcoal hover:text-brand-burgundy py-2 border-b border-brand-gold/5">Kurtas & Suits</a>
                <a href="sarees.html?fabric=Silk" class="block text-sm font-semibold text-brand-charcoal hover:text-brand-burgundy py-2 border-b border-brand-gold/5">Heritage Silk Weaves</a>
                <a href="wishlist.html" class="block text-sm font-semibold text-brand-charcoal hover:text-brand-burgundy py-2 border-b border-brand-gold/5">My Wishlist</a>
                <a href="cart.html" class="block text-sm font-semibold text-brand-charcoal hover:text-brand-burgundy py-2 border-b border-brand-gold/5">Shopping Bag</a>
              </nav>

              <div class="mt-8 pt-8 border-t border-brand-gold/15 space-y-4">
                <a href="#" class="flex items-center text-sm text-brand-charcoal hover:text-brand-burgundy">
                  <svg class="h-5 w-5 text-brand-gold mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Store Locator</span>
                </a>
                <a href="tel:18002660123" class="flex items-center text-sm text-brand-charcoal hover:text-brand-burgundy">
                  <svg class="h-5 w-5 text-brand-gold mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>1800-266-0123</span>
                </a>
              </div>
            </div>
            
            <!-- Mobile Footer Banner -->
            <div class="bg-brand-burgundy text-white p-4 text-center">
              <span class="text-xs text-brand-gold tracking-widest font-semibold uppercase">100% Authentic Indian Weaves</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Shopping Cart Drawer (Right Side) -->
    <div id="cart-drawer" class="fixed inset-0 z-50 overflow-hidden hidden" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
      <div class="absolute inset-0 overflow-hidden">
        <!-- Overlay -->
        <div id="cart-overlay" class="absolute inset-0 bg-brand-charcoal/50 opacity-0 transition-opacity duration-300 ease-in-out"></div>

        <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
          <!-- Slide-over panel -->
          <div id="cart-panel" class="pointer-events-auto w-screen max-w-md transform translate-x-full drawer-transition bg-white shadow-xl flex flex-col">
            
            <!-- Header -->
            <div class="py-6 px-4 sm:px-6 border-b border-brand-gold/15 bg-brand-cream/40">
              <div class="flex items-center justify-between">
                <h3 class="font-serif text-lg font-bold text-brand-burgundy flex items-center">
                  <svg class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  Shopping Bag
                </h3>
                <button id="cart-close" type="button" class="text-brand-charcoal hover:text-brand-gold p-1" aria-label="Close cart">
                  <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            <!-- Cart Items container -->
            <div class="flex-1 overflow-y-auto py-6 px-4 sm:px-6" id="cart-drawer-items-list">
              <!-- Dynamically populated via JS -->
              <div class="flex flex-col items-center justify-center h-full text-center text-gray-500">
                <svg class="h-16 w-16 text-brand-gold/45 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <p class="text-sm font-semibold mb-2">Your shopping bag is empty</p>
                <p class="text-xs text-gray-400 max-w-[200px] mb-4">Add some beautiful handcrafted garments to your bag.</p>
                <a href="sarees.html" class="bg-brand-burgundy hover:bg-brand-burgundyLight text-white text-xs uppercase tracking-wider font-bold py-2.5 px-6 border-b-2 border-brand-gold transition duration-300">Shop Sarees</a>
              </div>
            </div>

            <!-- Footer summary (visible only if items in cart) -->
            <div id="cart-drawer-summary" class="border-t border-brand-gold/15 py-6 px-4 sm:px-6 bg-brand-cream/20 hidden">
              <div class="flex justify-between text-base font-semibold text-brand-charcoal mb-2">
                <span>Subtotal:</span>
                <span id="cart-drawer-subtotal">₹ 0</span>
              </div>
              <p class="text-xs text-gray-500 mb-4">Shipping and taxes calculated at checkout.</p>
              <div class="space-y-3">
                <a href="cart.html" class="w-full flex items-center justify-center bg-brand-burgundy hover:bg-brand-burgundyLight text-white text-sm uppercase tracking-widest font-bold py-3 transition duration-300 border-b-2 border-brand-gold">
                  Proceed to Checkout
                </a>
                <button id="cart-drawer-continue" class="w-full text-center text-xs font-semibold text-brand-burgundy hover:text-brand-gold transition duration-200">
                  Continue Shopping
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

    <!-- Quick View Modal -->
    <div id="quick-view-modal" class="fixed inset-0 z-50 overflow-y-auto hidden" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <!-- Background overlay -->
        <div id="quick-view-overlay" class="fixed inset-0 bg-brand-charcoal/50 opacity-0 transition-opacity duration-300 ease-out"></div>

        <!-- Center modal content -->
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div id="quick-view-panel" class="inline-block align-bottom bg-white text-left shadow-xl transform scale-95 opacity-0 transition-all duration-300 sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
          
          <!-- Close button -->
          <div class="absolute right-4 top-4 z-10">
            <button id="quick-view-close" type="button" class="text-brand-charcoal hover:text-brand-burgundy p-1.5 bg-white border border-brand-gold/15" aria-label="Close details">
              <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2" id="quick-view-modal-content">
            <!-- Dynamically populated via JS -->
          </div>
        </div>
      </div>
    </div>
  `;
}

// 4. Initialize component togglers
function initializeComponentInteractivity() {
  // Mobile menu drawer interactivity
  const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
  const mobileMenuDrawer = document.getElementById("mobile-menu-drawer");
  const mobileMenuClose = document.getElementById("mobile-menu-close");
  const mobileMenuOverlay = document.getElementById("mobile-menu-overlay");
  const mobileMenuPanel = document.getElementById("mobile-menu-panel");

  if (mobileMenuToggle && mobileMenuDrawer) {
    mobileMenuToggle.addEventListener("click", () => {
      mobileMenuDrawer.classList.remove("hidden");
      setTimeout(() => {
        mobileMenuOverlay.classList.remove("opacity-0");
        mobileMenuOverlay.classList.add("opacity-100");
        mobileMenuPanel.classList.remove("-translate-x-full");
        mobileMenuPanel.classList.add("translate-x-0");
      }, 50);
    });

    const closeMobileMenu = () => {
      mobileMenuOverlay.classList.remove("opacity-100");
      mobileMenuOverlay.classList.add("opacity-0");
      mobileMenuPanel.classList.remove("translate-x-0");
      mobileMenuPanel.classList.add("-translate-x-full");
      setTimeout(() => {
        mobileMenuDrawer.classList.add("hidden");
      }, 300);
    };

    mobileMenuClose.addEventListener("click", closeMobileMenu);
    mobileMenuOverlay.addEventListener("click", closeMobileMenu);
  }

  // Cart drawer interactivity
  const cartToggle = document.getElementById("cart-drawer-toggle");
  const cartDrawer = document.getElementById("cart-drawer");
  const cartClose = document.getElementById("cart-close");
  const cartOverlay = document.getElementById("cart-overlay");
  const cartPanel = document.getElementById("cart-panel");
  const cartContinue = document.getElementById("cart-drawer-continue");

  if (cartToggle && cartDrawer) {
    const openCart = () => {
      cartDrawer.classList.remove("hidden");
      // Trigger cart redrawing when opening
      if (typeof updateCartUI === "function") {
        updateCartUI();
      }
      setTimeout(() => {
        cartOverlay.classList.remove("opacity-0");
        cartOverlay.classList.add("opacity-100");
        cartPanel.classList.remove("translate-x-full");
        cartPanel.classList.add("translate-x-0");
      }, 50);
    };

    cartToggle.addEventListener("click", openCart);

    const closeCart = () => {
      cartOverlay.classList.remove("opacity-100");
      cartOverlay.classList.add("opacity-0");
      cartPanel.classList.remove("translate-x-0");
      cartPanel.classList.add("translate-x-full");
      setTimeout(() => {
        cartDrawer.classList.add("hidden");
      }, 300);
    };

    cartClose.addEventListener("click", closeCart);
    cartContinue.addEventListener("click", closeCart);
    cartOverlay.addEventListener("click", closeCart);
  }

  // Search input interactivity
  const desktopSearchInput = document.getElementById("desktop-search-input");
  const mobileSearchInput = document.getElementById("mobile-search-input");

  const handleSearchSubmit = (event) => {
    if (event.key === "Enter") {
      const query = event.target.value.trim();
      if (query !== "") {
        window.location.href = `sarees.html?search=${encodeURIComponent(query)}`;
      }
    }
  };

  if (desktopSearchInput) {
    desktopSearchInput.addEventListener("keydown", handleSearchSubmit);
  }
  if (mobileSearchInput) {
    mobileSearchInput.addEventListener("keydown", handleSearchSubmit);
  }
}
