// Yazhagam E-Commerce Global State & Interactivity Handler

// Initialize State
let cart = [];
let wishlist = [];

document.addEventListener("DOMContentLoaded", () => {
  loadState();
  updateCartBadge();
  updateWishlistBadge();
  setupGlobalEventListeners();
});

// Load state from localStorage
function loadState() {
  try {
    const savedCart = localStorage.getItem("yazhagam_cart");
    const savedWishlist = localStorage.getItem("yazhagam_wishlist");
    
    if (savedCart) cart = JSON.parse(savedCart);
    if (savedWishlist) wishlist = JSON.parse(savedWishlist);
  } catch (e) {
    console.error("Error loading localStorage state:", e);
  }
}

// Save state to localStorage
function saveCart() {
  localStorage.setItem("yazhagam_cart", JSON.stringify(cart));
  updateCartBadge();
  updateCartUI();
}

function saveWishlist() {
  localStorage.setItem("yazhagam_wishlist", JSON.stringify(wishlist));
  updateWishlistBadge();
  updateWishlistButtonsState();
}

// Badge counters update
function updateCartBadge() {
  const badge = document.getElementById("cart-badge");
  if (!badge) return;
  
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  if (totalItems > 0) {
    badge.textContent = totalItems;
    badge.classList.remove("hidden");
    // Scale animation feedback
    badge.classList.add("scale-125", "transition-transform", "duration-200");
    setTimeout(() => {
      badge.classList.remove("scale-125", "transition-transform", "duration-200");
    }, 200);
  } else {
    badge.classList.add("hidden");
  }
}

function updateWishlistBadge() {
  const badge = document.getElementById("wishlist-badge");
  if (!badge) return;
  
  if (wishlist.length > 0) {
    badge.textContent = wishlist.length;
    badge.classList.remove("hidden");
    // Scale animation feedback
    badge.classList.add("scale-125", "transition-transform", "duration-200");
    setTimeout(() => {
      badge.classList.remove("scale-125", "transition-transform", "duration-200");
    }, 200);
  } else {
    badge.classList.add("hidden");
  }
}

// Cart Action Handlers
function addToCart(productId, quantity = 1, showDrawer = true) {
  const existingItem = cart.find(item => item.id === productId);
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({ id: productId, quantity });
  }
  
  saveCart();
  showToast("Added to Bag!");
  
  if (showDrawer) {
    // Open Cart Drawer automatically
    const cartToggle = document.getElementById("cart-drawer-toggle");
    if (cartToggle) cartToggle.click();
  }
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
  showToast("Removed from Bag");
}

function updateCartQuantity(productId, newQty) {
  const item = cart.find(item => item.id === productId);
  if (item) {
    item.quantity = Math.max(1, newQty);
    saveCart();
  }
}

// Wishlist Action Handlers
function toggleWishlist(productId) {
  const index = wishlist.indexOf(productId);
  let added = false;
  if (index > -1) {
    wishlist.splice(index, 1);
  } else {
    wishlist.push(productId);
    added = true;
  }
  saveWishlist();
  showToast(added ? "Added to Wishlist!" : "Removed from Wishlist");
  
  // Bouncy heartbeat transition on heart click
  document.querySelectorAll(`[data-wishlist-toggle="${productId}"]`).forEach(btn => {
    btn.classList.add("animate-heartbeat");
    setTimeout(() => {
      btn.classList.remove("animate-heartbeat");
    }, 350);
  });
  
  // Custom event to update wishlist page if active
  document.dispatchEvent(new CustomEvent("wishlistUpdated"));
}

// Update heart buttons active state across the website
function updateWishlistButtonsState() {
  document.querySelectorAll("[data-wishlist-toggle]").forEach(btn => {
    const pId = btn.getAttribute("data-wishlist-toggle");
    const isWished = wishlist.includes(pId);
    
    // Select the svg path to color
    const svgPath = btn.querySelector("svg path");
    if (svgPath) {
      if (isWished) {
        svgPath.setAttribute("fill", "#581123");
        svgPath.setAttribute("stroke", "#581123");
      } else {
        svgPath.setAttribute("fill", "none");
        svgPath.setAttribute("stroke", "currentColor");
      }
    }
  });
}

// Redraw Cart Drawer Content
function updateCartUI() {
  const listContainer = document.getElementById("cart-drawer-items-list");
  const summaryBlock = document.getElementById("cart-drawer-summary");
  const subtotalField = document.getElementById("cart-drawer-subtotal");
  
  if (!listContainer) return;
  
  if (cart.length === 0) {
    listContainer.innerHTML = `
      <div class="flex flex-col items-center justify-center h-full text-center text-gray-500 py-12">
        <svg class="h-16 w-16 text-brand-gold/45 mb-4 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
        <p class="text-sm font-semibold mb-2">Your shopping bag is empty</p>
        <p class="text-xs text-gray-400 max-w-[200px] mb-4">Add some beautiful handcrafted garments to your bag.</p>
        <a href="sarees.html" class="bg-brand-burgundy hover:bg-brand-burgundyLight text-white text-xs uppercase tracking-wider font-bold py-2.5 px-6 border-b-2 border-brand-gold transition duration-300">Shop Sarees</a>
      </div>
    `;
    if (summaryBlock) summaryBlock.classList.add("hidden");
    return;
  }
  
  if (summaryBlock) summaryBlock.classList.remove("hidden");
  
  let totalAmount = 0;
  let html = `<div class="divide-y divide-brand-gold/10">`;
  
  cart.forEach(item => {
    // Look up product in Mock DB (PRODUCTS array is globally accessible if products.js is loaded)
    const product = typeof ProductsDB !== "undefined" ? ProductsDB.getById(item.id) : null;
    if (!product) return;
    
    const itemSubtotal = product.price * item.quantity;
    totalAmount += itemSubtotal;
    
    html += `
      <div class="flex py-4 group/item">
        <div class="h-20 w-16 flex-shrink-0 overflow-hidden border border-brand-gold/10">
          <img src="${product.image}" alt="${product.name}" class="h-full w-full object-cover object-center">
        </div>
        <div class="ml-4 flex-1 flex flex-col justify-between">
          <div>
            <div class="flex justify-between text-xs font-semibold text-brand-charcoal">
              <h4 class="line-clamp-2 pr-2 hover:text-brand-burgundy transition-colors">
                <a href="${product.category === 'sarees' ? 'sarees.html' : 'kurtas.html'}">${product.name}</a>
              </h4>
              <p class="ml-4 text-brand-burgundy whitespace-nowrap">₹ ${product.price.toLocaleString("en-IN")}</p>
            </div>
            <p class="mt-1 text-xs text-gray-500">${product.fabric} | ${product.weave}</p>
          </div>
          <div class="flex items-center justify-between text-xs pt-2">
            <!-- Quantity adjustment controls -->
            <div class="flex items-center border border-brand-gold/30 bg-brand-cream/30">
              <button onclick="updateCartQuantity('${product.id}', ${item.quantity - 1})" class="px-2 py-0.5 text-brand-charcoal hover:bg-brand-gold/10">-</button>
              <span class="px-2 py-0.5 text-brand-burgundy font-semibold">${item.quantity}</span>
              <button onclick="updateCartQuantity('${product.id}', ${item.quantity + 1})" class="px-2 py-0.5 text-brand-charcoal hover:bg-brand-gold/10">+</button>
            </div>
            
            <button type="button" onclick="removeFromCart('${product.id}')" class="font-medium text-brand-burgundy/80 hover:text-brand-burgundy flex items-center">
              <svg class="h-4 w-4 mr-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-4v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              Remove
            </button>
          </div>
        </div>
      </div>
    `;
  });
  
  html += `</div>`;
  listContainer.innerHTML = html;
  
  if (subtotalField) {
    subtotalField.textContent = `₹ ${totalAmount.toLocaleString("en-IN")}`;
  }
}

// Global Event Listeners Delegation
function setupGlobalEventListeners() {
  document.addEventListener("click", (event) => {
    
    // 1. Wishlist toggle delegation
    const wishlistBtn = event.target.closest("[data-wishlist-toggle]");
    if (wishlistBtn) {
      event.preventDefault();
      const productId = wishlistBtn.getAttribute("data-wishlist-toggle");
      toggleWishlist(productId);
      return;
    }
    
    // 2. Add to cart delegation
    const addToCartBtn = event.target.closest("[data-add-to-cart]");
    if (addToCartBtn) {
      event.preventDefault();
      const productId = addToCartBtn.getAttribute("data-add-to-cart");
      // Check if inside PDP/modal with selected qty
      const qtyInput = document.getElementById(`qty-${productId}`);
      const quantity = qtyInput ? parseInt(qtyInput.value) || 1 : 1;
      addToCart(productId, quantity);
      return;
    }
    
    // 3. Quick View toggle delegation
    const quickViewBtn = event.target.closest("[data-quick-view]");
    if (quickViewBtn) {
      event.preventDefault();
      const productId = quickViewBtn.getAttribute("data-quick-view");
      openQuickView(productId);
      return;
    }
  });
  
  // Custom listener to sync wishlist buttons
  document.addEventListener("wishlistButtonsSync", updateWishlistButtonsState);
}

// Quick View Modal Core Logic
function openQuickView(productId) {
  if (typeof ProductsDB === "undefined") return;
  const product = ProductsDB.getById(productId);
  if (!product) return;
  
  const modal = document.getElementById("quick-view-modal");
  const overlay = document.getElementById("quick-view-overlay");
  const panel = document.getElementById("quick-view-panel");
  const content = document.getElementById("quick-view-modal-content");
  
  if (!modal || !content) return;
  
  // Populate Quick View HTML
  content.innerHTML = `
    <!-- Image block -->
    <div class="relative bg-brand-cream/20 flex items-center justify-center p-6 border-r border-brand-gold/15">
      <div class="w-full h-[400px] overflow-hidden">
        <img id="qv-main-img-${product.id}" src="${product.image}" alt="${product.name}" class="w-full h-full object-cover transition-all duration-300">
      </div>
      
      <!-- Alternate Thumbnail selectors -->
      <div class="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 bg-white/70 backdrop-blur-sm p-1.5 border border-brand-gold/25">
        <button onclick="document.getElementById('qv-main-img-${product.id}').src='${product.image}'" class="w-10 h-12 overflow-hidden border border-brand-gold/40 focus:outline-none">
          <img src="${product.image}" class="w-full h-full object-cover">
        </button>
        <button onclick="document.getElementById('qv-main-img-${product.id}').src='${product.hoverImage}'" class="w-10 h-12 overflow-hidden border border-brand-gold/20 focus:outline-none hover:border-brand-gold">
          <img src="${product.hoverImage}" class="w-full h-full object-cover">
        </button>
      </div>
    </div>
    
    <!-- Info block -->
    <div class="p-8 flex flex-col justify-between h-[450px] overflow-y-auto">
      <div>
        <div class="flex items-center space-x-1.5 text-xs text-brand-gold font-bold uppercase tracking-wider mb-2">
          <span>${product.fabric}</span>
          <span>•</span>
          <span>${product.weave}</span>
        </div>
        <h2 class="font-serif text-xl font-bold text-brand-burgundy mb-2.5">${product.name}</h2>
        
        <!-- Ratings -->
        <div class="flex items-center space-x-2 mb-4">
          <div class="flex items-center text-amber-500 text-sm">
            ${"★".repeat(Math.floor(product.rating))}${"☆".repeat(5 - Math.floor(product.rating))}
          </div>
          <span class="text-xs text-gray-500">(${product.reviews} reviews)</span>
        </div>
        
        <!-- Price Block -->
        <div class="flex items-baseline space-x-3 mb-6 bg-brand-cream/40 p-3 border-l-2 border-brand-gold">
          <span class="text-xl font-bold text-brand-burgundy">₹ ${product.price.toLocaleString("en-IN")}</span>
          ${product.originalPrice > product.price ? `
            <span class="text-sm text-gray-400 line-through">₹ ${product.originalPrice.toLocaleString("en-IN")}</span>
            <span class="text-xs font-bold text-green-700">(${product.discount}% OFF)</span>
          ` : ""}
        </div>
        
        <p class="text-xs text-brand-charcoal/80 leading-relaxed mb-6">${product.description}</p>
        
        <!-- Product Highlights list -->
        <ul class="text-[11px] text-brand-charcoal/80 space-y-1 mb-6 bg-brand-cream/20 p-3 border border-brand-gold/10">
          <h4 class="font-bold text-brand-burgundy mb-1 text-xs uppercase tracking-wider">Specifications</h4>
          ${product.highlights.map(h => `<li class="flex items-center"><span class="text-brand-gold mr-1.5">✦</span> ${h}</li>`).join("")}
        </ul>
      </div>
      
      <!-- Action buttons -->
      <div class="grid grid-cols-2 gap-4">
        <button data-add-to-cart="${product.id}" class="w-full flex items-center justify-center bg-brand-burgundy hover:bg-brand-burgundyLight text-white text-xs uppercase tracking-widest font-bold py-3 transition duration-300 border-b-2 border-brand-gold">
          Add To Bag
        </button>
        <button data-wishlist-toggle="${product.id}" class="w-full flex items-center justify-center bg-white hover:bg-brand-cream text-brand-burgundy text-xs uppercase tracking-widest font-bold py-3 border border-brand-gold transition duration-300">
          Wishlist
        </button>
      </div>
    </div>
  `;
  
  // Open modal animation
  modal.classList.remove("hidden");
  setTimeout(() => {
    overlay.classList.remove("opacity-0");
    overlay.classList.add("opacity-100");
    panel.classList.remove("scale-95", "opacity-0");
    panel.classList.add("scale-100", "opacity-100");
  }, 50);
  
  // Close event listener setup
  const closeQV = () => {
    overlay.classList.remove("opacity-100");
    overlay.classList.add("opacity-0");
    panel.classList.remove("scale-100", "opacity-100");
    panel.classList.add("scale-95", "opacity-0");
    setTimeout(() => {
      modal.classList.add("hidden");
    }, 300);
  };
  
  document.getElementById("quick-view-close").addEventListener("click", closeQV);
  overlay.addEventListener("click", closeQV);
  
  // Sync wishlist toggler state inside the loaded modal HTML
  updateWishlistButtonsState();
}

// Elegant Toast Notifications helper
function showToast(message) {
  let container = document.getElementById("toast-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "toast-container";
    container.className = "fixed bottom-5 right-5 z-50 flex flex-col space-y-2";
    document.body.appendChild(container);
  }
  
  const toast = document.createElement("div");
  toast.className = "bg-brand-burgundy text-white border-l-4 border-brand-gold px-4 py-3 shadow-lg flex items-center justify-between space-x-4 animate-toast";
  toast.innerHTML = `
    <span class="text-xs tracking-wider uppercase font-semibold">${message}</span>
    <button onclick="this.parentElement.remove()" class="text-brand-gold hover:text-white focus:outline-none">
      <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  `;
  
  container.appendChild(toast);
  
  // Auto remove toast after 3 seconds
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
    toast.style.transition = "all 0.3s ease-out";
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// Expose internal functions to click handlers
window.removeFromCart = removeFromCart;
window.updateCartQuantity = updateCartQuantity;
window.toggleWishlist = toggleWishlist;
window.addToCart = addToCart;
window.updateCartUI = updateCartUI;
