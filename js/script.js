// Template data
const templates = [
    {
        id: 1,
        name: "Birthday 1.0",
        price: 149,
        category: "birthday",
        image: "assets/BD1.jpg",
        description: "A profesionally Devloped with beutiful theme, fonts, amazing functionality and your fav song in background. Customize and suprise your partner.",
        badge: "Popular",
        link: "https://birthdaycodrenix.netlify.app",
    },
    {
        id: 2,
        name: "Birthday 2.0",
        price: 149,
        category: "birthday",
        image: "assets/BD2.jpg",
        description: "A profesionally Devloped with beutiful theme, fonts, amazing functionality and your fav song in background. Customize and suprise your partner.",
        badge: "Best Seller",
        link: "https://birthday-1codrenix.netlify.app"
    },
    {
        id: 3,
        name: "Personal Company Porfolio",
        price:,
        category: "portfolio",
        image: "assets/PORT1.jpg",
        description: "Beautiful portfolio template for Business, and creative professionals. with the dark premium look.",
        badge: "New",
        link: "https://codrenix.netlify.app",
    },
    {
        id: 4,
        name: "Foodie's Delight",
        price: ,
        category: "restaurant",
        image: "assets/RES1.jpg",
        description: "Elegant restaurant template with menu display, reservation system, and gallery.",
        badge: "Featured",
        link: "https://restourentcodrenix.netlify.app",
    },
    {
        id: 5,
        name: "Fitness Master 1.0",
        price: ,
        category: "Portfolio",
        image: "assets/GYM1.jpg",
        description: "A dark themed Gym Portfolio with whatsapp messaging system. Book now and Boost your Gym's online presence & get more Clients",
        badge: "Popular",
        link: "https://gymcodrenix.netlify.app",
    },
    {
        id: 6,
        name: "Real Estate Pro",
        price: ,
        category: "business",
        image: "assets/Real.jpg",
        description: "Professional real estate template with property listings, search filters, and agent profiles.",
        badge: "Premium",
        link: "https://real-estatecodrenix.netlify.app",
    },
    {
        id: 7,
        name: "Anniversary 1.0",
        price: 149.00,
        category: "anniversary",
        image: "assets/ANNI1.jpg",
        description: "Make your day spacial with your heartfelt words, cherished memories, and their favorite song playing in the background.",
        badge: "Best Seller",
        link: "https://anniversary-1codrenix.netlify.app",
    },
    {
        id: 8,
        name: "Anniversary 2.0",
        price: 149.00,
        category: "anniversary",
        image: "assets/ANNI2.jpg",
        description: "Make your day spacial with your heartfelt words, cherished memories, and their favorite song playing in the background.",
        badge: "Popular",
        link: "https://anniversary-2codrenix.netlify.app"
    },
    {
        id: 9,
        name: "Video Editor's Portfolio 1.0",
        price: ,
        category: "portfolio",
        image: "assets/PORT2.jpg",
        description: "A sleek, modern portfolio website designed specifically for editors. Featuring an elegant dark theme, it allows you to beautifully showcase your past work, client reviews, and detailed pricing, making a powerful and professional impression.",
        badge: "Popular",
        link: "https://naseeb-studio.netlify.app/",
    },
    {
        id: 10,
        name: "Doctor's Portfolio",
        price: ,
        category: "portfolio",
        image: "assets/DR1.jpg",
        description: "A professional and elegant portfolio website designed for doctors. With a clean, sophisticated layout, it allows you to showcase your specializations, credentials, and patient testimonials, building trust and credibility with a modern online presence.",
        badge: "Popular",
        link: "https://drportfoliocodrenix.netlify.app",    
    },
    {
        id: 11,
        name: "Classes WebSites 1.0",
        price: ,
        category: "business",
        image: "assets/EDU.jpg",
        description: "A professional and elegant portfolio website designed for doctors. With a clean, sophisticated layout, it allows you to showcase your specializations, credentials, and patient testimonials, building trust and credibility with a modern online presence.",
        badge: "Popular",
        link: "https://coachingcodrenix.netlify.app"
    },
    {
        id: 12,
        name: "Sent Some Love",
        price: 119.00,
        category: "love",
        image: "assets/LOVE1.jpg",
        description: "A normal love website for express your love. Book and give some love to your spacial one",
        badge: "Popular",
        link: "https://ganeralcodrenix.netlify.app",
    },
    {
        id: 13,
        name: "Marriage Proposal",
        price: 119.00,
        category: "love",
        image: "assets/LOVE2.jpg",
        description: "Make your Proposal spacial with the website with background music memories wall and your spacial letter.",
        badge: "Popular",
        link: "https://perposalcodrenix.netlify.app",
    },
    {
        id: 14,
        name: "Thanks 1.0",
        price: 119.00,
        category: "love",
        image: "assets/LOVE3.jpg",
        description: "Thanks A spacial person with customize website.",
        badge: "Popular",
        link: "https://thankscodrenix.netlify.app",
    },
    {
        id: 15,
        name: "Valentine's Day",
        price: 119.00,
        category: "love",
        image: "assets/LOVE4.jpg",
        description: "Wish Valentine's Day to your spacial one in different style with customized website with your words and memories. ",
        badge: "Popular",
        link: "https://valencetinecodrenix.netlify.app",
    },
    {
        id: 16,
        name: "Anniversary 3.0",
        price: 149.00,
        category: "anniversary",
        image: "assets/LOVE5.jpg",
        description: "This is a beautiful and elegant wedding anniversary website, perfect for a personalized gift. It features a stunning dark and gold theme, a gallery for photos and videos, and a dedicated section for a personal love letter.",
        badge: "Popular",
        link: "https://weddingcodrenix.netlify.app",
    },
    {
        id: 17,
        name: "Birthday 3.0",
        price: 149.00,
        category: "birthday",
        image: "assets/IMG-20250823-WA0000.jpg",
        description: "This is a beautiful and elegant wedding birthday website, perfect for a personalized gift. It features a stunning dark and gold theme, a gallery for photos and videos, and a dedicated section for a personal love letter.",
        badge: "Popular",
        link: "https://birhday-2codrenix.netlify.app",
    },
    {
        id: 18,
        name: "Sorry 1.0",
        price: 199.00,
        category: "love",
        image: "assets/sorry-1.jpg",
        description: "Sometimes words aren’t enough… That’s why we created Sorry — A Personal Sorry Website, a beautifully designed interactive apology page that makes saying “I’m Sorry” truly unforgettable.",
        badge: "NEW",
        link: "https://sorry-1codrenix.netlify.app",
    },
    {
        id: 19,
        name: "Anniversary 4.0",
        price: 249.00,
        category: "anniversary",
        image: "assets/ANNI4.jpg",
        description: "A romantic Anniversary Website designed to celebrate love with heartfelt messages, soothing music, and elegant animations — a unique gift to make your special day unforgettable.",
        badge: "BEST",
        link: "https://anniversary-4codrenix.netlify.app/"
    },
    {
        id: 20,
        name: "Real Estate Pro 2.0",
        price: ,
        category: "business",
        image: "assets/Real.Estate2.jpg",
        description: "Professional real estate template with property listings, search filters, and agent profiles.",
        badge: "NEW",
        link: "https://real-estate-2codrenix.netlify.app",
    },
    {
        id: 21,
        name: "Construction Company 1.0",
        price: ,
        category: "business",
        image: "assets/Real.Estate3.jpg",
        description: "Professional Contruction Company template with property listings, search filters, and agent profiles.",
        badge: "NEW",
        link: "https://real-estate-3codrenix.netlify.app",
    },
    {
        id: 22,
        name: "Birthday 4.0",
        price: 149,
        category: "birthday",
        image: "assets/Birthday.new.jpg",
        description: "A profesionally Devloped with beutiful theme, fonts, amazing functionality and your fav song in background. Customize and suprise your partner.",
        badge: "NEW",
        link: "https://birthday-4codrenix.netlify.app"
    },
    {
        id: 23,
        name: "Foodie's Delight 2.0",
        price: ,
        category: "restaurant",
        image: "assets/Rest2.jpg",
        description: "Elegant restaurant template with menu display, reservation system, and gallery.",
        badge: "NEW",
        link: "https://restaurant-20codrenix.netlify.app",
    },
    {
        id: 24,
        name: "Video Editor's Portfolio 2.0",
        price: ,
        category: "portfolio",
        image: "assets/Editor's Portfolio 2.jpg",
        description: "A sleek, modern portfolio website designed specifically for editors. Featuring an elegant dark theme, it allows you to beautifully showcase your past work, client reviews, and detailed pricing, making a powerful and professional impression.",
        badge: "NEW",
        link: "https://editor-portfolio-2.netlify.app",
    },
    {
        id: 25,
        name: "Fitness Master 2.0",
        price: ,
        category: "Portfolio",
        image: "assets/Gym2.jpg",
        description: "A dark themed Gym Portfolio with whatsapp messaging system. Book now and Boost your Gym's online presence & get more Clients",
        badge: "NEW",
        link: "https://gym-20codrenix.netlify.app",
    },
];

// Cart functionality
let cart = [];
let currentCategory = 'all';
let currentSearch = '';

// DOM elements
const cartModal = document.getElementById('cartModal');
const cartCount = document.getElementById('cartCount');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const emptyCartMessage = document.getElementById('emptyCartMessage');
const checkoutForm = document.getElementById('checkoutForm');
const cartIcon = document.getElementById('cartIcon');
const closeModal = document.getElementById('closeModal');
const checkoutBtn = document.getElementById('checkoutBtn');
const whatsappBtn = document.getElementById('whatsappBtn');
const searchInput = document.getElementById('searchInput');
const productsGrid = document.getElementById('productsGrid');
const categoryButtons = document.getElementById('categoryButtons');

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    loadTemplates();
    setupEventListeners();
    updateCart();
});

function setupEventListeners() {
    // Cart icon
    cartIcon.addEventListener('click', toggleCart);
    
    // Close modal
    closeModal.addEventListener('click', toggleCart);
    
    // Checkout button
    checkoutBtn.addEventListener('click', showCheckoutForm);
    
    // WhatsApp button
    whatsappBtn.addEventListener('click', sendToWhatsApp);
    
    // Search functionality
    searchInput.addEventListener('input', searchTemplates);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') searchTemplates();
    });
    
    // Category buttons
    categoryButtons.addEventListener('click', function(e) {
        if (e.target.classList.contains('category-btn')) {
            const category = e.target.dataset.category;
            filterByCategory(category);
        }
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === cartModal) {
            toggleCart();
        }
    });
}

function loadTemplates() {
    productsGrid.innerHTML = '';
    
    const filteredTemplates = templates.filter(template => {
        const matchesCategory = currentCategory === 'all' || template.category === currentCategory;
        const matchesSearch = template.name.toLowerCase().includes(currentSearch.toLowerCase()) ||
                            template.description.toLowerCase().includes(currentSearch.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    filteredTemplates.forEach(template => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card fade-in';
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${template.image}" alt="${template.name} template">
                ${template.badge ? `<span class="product-badge">${template.badge}</span>` : ''}
            </div>
            <div class="product-info">
                <h3 class="product-title">${template.name}</h3>
                <div class="product-price">₹${template.price.toFixed(2)}</div>
                <p class="product-description">${template.description}</p>
                <button class="add-to-cart" onclick="addToCart(${template.id})">
                    <i class="fas fa-cart-plus"></i> Add to Cart
                </button>
                <br>
                <button class="add-to-cart" onclick="window.location.href='Page.html?id=${template.id}'">
                      See More Details
                </button>
            </div>
        `;
        productsGrid.appendChild(productCard);
    });
}

function filterByCategory(category) {
    currentCategory = category;
    const buttons = categoryButtons.querySelectorAll('.category-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[data-category="${category}"]`).classList.add('active');
    loadTemplates();
}

function searchTemplates() {
    currentSearch = searchInput.value;
    loadTemplates();
}

function addToCart(id) {
    const template = templates.find(t => t.id === id);
    if (!template) return;

    const existingItem = cart.find(item => item.id === id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: template.id,
            name: template.name,
            price: template.price,
            quantity: 1
        });
    }
    
    updateCart();
    showNotification(`${template.name} added to cart!`);
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCart();
}

function updateCart() {
    // Update cart count
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;

    // Update cart items
    if (cart.length === 0) {
        emptyCartMessage.style.display = 'block';
        cartItems.innerHTML = '<p id="emptyCartMessage">Your cart is empty</p>';
    } else {
        emptyCartMessage.style.display = 'none';
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-info">
                    <div class="cart-item-title">${item.name}</div>
                    <div class="cart-item-price">₹${item.price.toFixed(2)} x ${item.quantity}</div>
                </div>
                <button class="remove-item" onclick="removeFromCart(${item.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `).join('');
    }

    // Update total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = `Total: ₹${total.toFixed(2)}`;
}

function toggleCart() {
    if (cartModal.style.display === 'block') {
        cartModal.style.display = 'none';
        checkoutForm.style.display = 'none';
    } else {
        cartModal.style.display = 'block';
    }
}

function showCheckoutForm() {
    if (cart.length === 0) {
        showNotification('Please add items to your cart first!');
        return;
    }
    checkoutForm.style.display = 'block';
}

function sendToWhatsApp() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !phone || !email) {
        showNotification('Please fill in all required fields!');
        return;
    }

    // Create order summary
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    let orderSummary = `*NEW ORDER*%0A%0A`;
    orderSummary += `*Customer Information:*%0A`;
    orderSummary += `Name: ${encodeURIComponent(name)}%0A`;
    orderSummary += `Phone: ${encodeURIComponent(phone)}%0A`;
    orderSummary += `Email: ${encodeURIComponent(email)}%0A`;
    orderSummary += `Message: ${encodeURIComponent(message || 'None')}%0A%0A`;
    orderSummary += `*Order Details:*%0A`;

    cart.forEach(item => {
        orderSummary += `- ${encodeURIComponent(item.name)} (Qty: ${item.quantity}) - ₹${(item.price * item.quantity).toFixed(2)}%0A`;
    });

    orderSummary += `%0A*Total: ₹${total.toFixed(2)}*%0A%0A`;
    orderSummary += `Thank you for your order!`;

    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/9552477146?text=${orderSummary}`;
    
    // Open WhatsApp
    window.open(whatsappURL, '_blank');
    
    // Reset cart and close modal
    cart = [];
    updateCart();
    checkoutForm.style.display = 'none';
    toggleCart();
    
    // Clear form
    document.getElementById('name').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
    
    showNotification('Order sent successfully! We will contact you soon.');
}

function showNotification(message) {
    // Remove existing notifications
    document.querySelectorAll('.notification').forEach(el => el.remove());

    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: var(--success);
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        z-index: 3000;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        animation: fadeIn 0.3s ease-out;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'fadeOut 0.3s ease-out';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Add fadeOut animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        from { opacity: 1; transform: translateY(0); }
        to { opacity: 0; transform: translateY(-20px); }
    }
`;
document.head.appendChild(style);
