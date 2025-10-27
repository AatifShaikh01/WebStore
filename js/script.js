// Template data
const templates = [
    {
        id: 1,
        name: "Birthday 1.0",
        price: 199.00,
        originalPrice: 249.00,
        category: "birthday",
        image: "assets/BD1.jpg",
        description: "A professionally developed with beautiful theme, fonts, amazing functionality and your favorite song in background. Customize and surprise your partner.",
        badge: "Popular",
        link: "https://birthdaycodrenix.netlify.app",
        features: ["Responsive Design", "Custom Music", "Photo Gallery", "Easy Customization"],
        rating: 4.5,
        sales: 15
    },
    {
        id: 2,
        name: "Birthday 2.0",
        price: 199.00,
        originalPrice: 249.00,
        category: "birthday",
        image: "assets/BD2.jpg",
        description: "A professionally developed with beautiful theme, fonts, amazing functionality and your favorite song in background. Customize and surprise your partner.",
        badge: "Best Seller",
        link: "https://birthday-1codrenix.netlify.app",
        features: ["Responsive Design", "Custom Music", "Photo Gallery", "Easy Customization"],
        rating: 4.7,
        sales: 22
    },
    {
        id: 3,
        name: "Personal Company Portfolio",
        price: 1999.00,
        category: "portfolio",
        image: "assets/PORT1.jpg",
        description: "Beautiful portfolio template for Business, and creative professionals. with the dark premium look.",
        badge: "New",
        link: "https://codrenix.netlify.app",
        features: ["Dark Theme", "Responsive Design", "Project Showcase", "Contact Form"],
        rating: 4.8,
        sales: 8
    },
    {
        id: 4,
        name: "Foodie's Delight",
        price: 1999.00,
        category: "restaurant",
        image: "assets/RES1.jpg",
        description: "Elegant restaurant template with menu display, reservation system, and gallery.",
        badge: "Featured",
        link: "https://restourentcodrenix.netlify.app",
        features: ["Menu Display", "Reservation System", "Photo Gallery", "Online Ordering"],
        rating: 4.6,
        sales: 12
    },
    {
        id: 5,
        name: "Fitness Master 1.0",
        price: 1999.00,
        category: "portfolio",
        image: "assets/GYM1.jpg",
        description: "A dark themed Gym Portfolio with whatsapp messaging system. Book now and Boost your Gym's online presence & get more Clients",
        badge: "Popular",
        link: "https://gymcodrenix.netlify.app",
        features: ["Dark Theme", "Class Schedule", "Trainer Profiles", "WhatsApp Integration"],
        rating: 4.4,
        sales: 10
    },
    {
        id: 6,
        name: "Real Estate Pro",
        price: 1999.00,
        category: "business",
        image: "assets/Real.jpg",
        description: "Professional real estate template with property listings, search filters, and agent profiles.",
        badge: "Premium",
        link: "https://real-estatecodrenix.netlify.app",
        features: ["Property Listings", "Search Filters", "Agent Profiles", "Contact Forms"],
        rating: 4.5,
        sales: 7
    },
    {
        id: 7,
        name: "Anniversary 1.0",
        price: 199.00,
        originalPrice: 249.00,
        category: "anniversary",
        image: "assets/ANNI1.jpg",
        description: "Make your day special with your heartfelt words, cherished memories, and their favorite song playing in the background.",
        badge: "Best Seller",
        link: "https://anniversary-1codrenix.netlify.app",
        features: ["Romantic Design", "Custom Music", "Memory Gallery", "Love Letter Section"],
        rating: 4.9,
        sales: 18
    },
    {
        id: 8,
        name: "Anniversary 2.0",
        price: 199.00,
        originalPrice: 249.00,
        category: "anniversary",
        image: "assets/ANNI2.jpg",
        description: "Make your day special with your heartfelt words, cherished memories, and their favorite song playing in the background.",
        badge: "Popular",
        link: "https://anniversary-2codrenix.netlify.app",
        features: ["Romantic Design", "Custom Music", "Memory Gallery", "Love Letter Section"],
        rating: 4.8,
        sales: 16
    },
    {
        id: 9,
        name: "Video Editor's Portfolio 1.0",
        price: 1999.00,
        category: "portfolio",
        image: "assets/PORT2.jpg",
        description: "A sleek, modern portfolio website designed specifically for editors. Featuring an elegant dark theme, it allows you to beautifully showcase your past work, client reviews, and detailed pricing, making a powerful and professional impression.",
        badge: "Popular",
        link: "https://naseeb-studio.netlify.app/",
        features: ["Dark Theme", "Video Showcase", "Client Testimonials", "Service Pricing"],
        rating: 4.7,
        sales: 9
    },
    {
        id: 10,
        name: "Doctor's Portfolio",
        price: 2999.00,
        category: "portfolio",
        image: "assets/DR1.jpg",
        description: "A professional and elegant portfolio website designed for doctors. With a clean, sophisticated layout, it allows you to showcase your specializations, credentials, and patient testimonials, building trust and credibility with a modern online presence.",
        badge: "Popular",
        link: "https://drportfoliocodrenix.netlify.app",
        features: ["Professional Design", "Specialization Showcase", "Patient Testimonials", "Appointment Booking"],
        rating: 4.9,
        sales: 6
    },
    {
        id: 11,
        name: "Classes WebSites 1.0",
        price: 1999.00,
        category: "business",
        image: "assets/EDU.jpg",
        description: "A professional website for educational institutions and coaching classes with course listings, faculty information, and contact forms.",
        badge: "Popular",
        link: "https://coachingcodrenix.netlify.app",
        features: ["Course Listings", "Faculty Profiles", "Student Portal", "Contact Forms"],
        rating: 4.5,
        sales: 8
    },
    {
        id: 12,
        name: "Sent Some Love",
        price: 129.00,
        category: "love",
        image: "assets/LOVE1.jpg",
        description: "A beautiful love website to express your feelings. Perfect for surprising your special someone with heartfelt messages.",
        badge: "Popular",
        link: "https://ganeralcodrenix.netlify.app",
        features: ["Romantic Design", "Custom Messages", "Photo Gallery", "Responsive Layout"],
        rating: 4.6,
        sales: 14
    },
    {
        id: 13,
        name: "Marriage Proposal",
        price: 129.00,
        category: "love",
        image: "assets/LOVE2.jpg",
        description: "Make your Proposal special with a website featuring background music, a memories wall, and your special letter.",
        badge: "Popular",
        link: "https://perposalcodrenix.netlify.app",
        features: ["Romantic Design", "Custom Music", "Memory Wall", "Proposal Letter"],
        rating: 4.8,
        sales: 11
    },
    {
        id: 14,
        name: "Thanks 1.0",
        price: 129.00,
        category: "love",
        image: "assets/LOVE3.jpg",
        description: "Thank a special person with a customized website to show your appreciation in a unique way.",
        badge: "Popular",
        link: "https://thankscodrenix.netlify.app",
        features: ["Gratitude Theme", "Custom Messages", "Photo Gallery", "Responsive Design"],
        rating: 4.4,
        sales: 9
    },
    {
        id: 15,
        name: "Valentine's Day",
        price: 129.00,
        category: "love",
        image: "assets/LOVE4.jpg",
        description: "Wish Valentine's Day to your special one in a different style with a customized website featuring your words and memories.",
        badge: "Popular",
        link: "https://valencetinecodrenix.netlify.app",
        features: ["Valentine Theme", "Custom Messages", "Memory Gallery", "Romantic Animations"],
        rating: 4.7,
        sales: 13
    },
    {
        id: 16,
        name: "Anniversary 3.0",
        price: 199.00,
        originalPrice: 249.00,
        category: "anniversary",
        image: "assets/LOVE5.jpg",
        description: "This is a beautiful and elegant wedding anniversary website, perfect for a personalized gift. It features a stunning dark and gold theme, a gallery for photos and videos, and a dedicated section for a personal love letter.",
        badge: "Popular",
        link: "https://weddingcodrenix.netlify.app",
        features: ["Dark & Gold Theme", "Photo/Video Gallery", "Love Letter Section", "Custom Music"],
        rating: 5.0,
        sales: 20
    },
    {
        id: 17,
        name: "Birthday 3.0",
        price: 199.00,
        originalPrice: 249.00,
        category: "birthday",
        image: "assets/IMG-20250823-WA0000.jpg",
        description: "This is a beautiful and elegant birthday website, perfect for a personalized gift. It features a stunning dark and gold theme, a gallery for photos and videos, and a dedicated section for a personal message.",
        badge: "Popular",
        link: "https://birhday-2codrenix.netlify.app",
        features: ["Dark & Gold Theme", "Photo/Video Gallery", "Personal Message", "Custom Music"],
        rating: 4.8,
        sales: 17
    },
    {
        id: 18,
        name: "Sorry 1.0",
        price: 199.00,
        category: "love",
        image: "assets/sorry-1.jpg",
        description: "Sometimes words aren't enough… That's why we created Sorry — A Personal Sorry Website, a beautifully designed interactive apology page that makes saying 'I'm Sorry' truly unforgettable.",
        badge: "NEW",
        link: "https://sorry-1codrenix.netlify.app",
        features: ["Apology Theme", "Interactive Elements", "Personal Messages", "Responsive Design"],
        rating: 4.6,
        sales: 8
    },
    {
        id: 19,
        name: "Anniversary 4.0",
        price: 299.00,
        category: "anniversary",
        image: "assets/ANNI4.jpg",
        description: "A romantic Anniversary Website designed to celebrate love with heartfelt messages, soothing music, and elegant animations — a unique gift to make your special day unforgettable.",
        badge: "BEST",
        link: "https://anniversary-4codrenix.netlify.app/",
        features: ["Romantic Design", "Custom Music", "Elegant Animations", "Memory Timeline"],
        rating: 4.9,
        sales: 15
    },
    {
        id: 20,
        name: "Real Estate Pro 2.0",
        price: 1999.00,
        category: "business",
        image: "assets/Real.Estate2.jpg",
        description: "Professional real estate template with property listings, search filters, and agent profiles.",
        badge: "NEW",
        link: "https://real-estate-2codrenix.netlify.app",
        features: ["Property Listings", "Advanced Search", "Agent Profiles", "Virtual Tours"],
        rating: 4.5,
        sales: 5
    },
    {
        id: 21,
        name: "Construction Company 1.0",
        price: 1999.00,
        category: "business",
        image: "assets/Real.Estate3.jpg",
        description: "Professional Construction Company template with project portfolio, service listings, and contact forms.",
        badge: "NEW",
        link: "https://real-estate-3codrenix.netlify.app",
        features: ["Project Portfolio", "Service Listings", "Team Profiles", "Contact Forms"],
        rating: 4.4,
        sales: 4
    },
    {
        id: 22,
        name: "Birthday 4.0",
        price: 199.00,
        originalPrice: 249.00,
        category: "birthday",
        image: "assets/Birthday.new.jpg",
        description: "A professionally developed with beautiful theme, fonts, amazing functionality and your favorite song in background. Customize and surprise your partner.",
        badge: "NEW",
        link: "https://birthday-4codrenix.netlify.app",
        features: ["Modern Design", "Custom Music", "Photo Gallery", "Interactive Elements"],
        rating: 4.7,
        sales: 11
    },
    {
        id: 23,
        name: "Foodie's Delight 2.0",
        price: 1999.00,
        category: "restaurant",
        image: "assets/Rest2.jpg",
        description: "Elegant restaurant template with menu display, reservation system, and gallery.",
        badge: "NEW",
        link: "https://restaurant-20codrenix.netlify.app",
        features: ["Menu Display", "Online Reservations", "Photo Gallery", "Customer Reviews"],
        rating: 4.6,
        sales: 7
    },
    {
        id: 24,
        name: "Video Editor's Portfolio 2.0",
        price: 1999.00,
        category: "portfolio",
        image: "assets/Editor's Portfolio 2.jpg",
        description: "A sleek, modern portfolio website designed specifically for editors. Featuring an elegant dark theme, it allows you to beautifully showcase your past work, client reviews, and detailed pricing, making a powerful and professional impression.",
        badge: "NEW",
        link: "https://editor-portfolio-2.netlify.app",
        features: ["Dark Theme", "Video Portfolio", "Client Testimonials", "Service Packages"],
        rating: 4.8,
        sales: 6
    },
    {
        id: 25,
        name: "Fitness Master 2.0",
        price: 1999.00,
        category: "portfolio",
        image: "assets/Gym2.jpg",
        description: "A dark themed Gym Portfolio with whatsapp messaging system. Book now and Boost your Gym's online presence & get more Clients",
        badge: "NEW",
        link: "https://gym-20codrenix.netlify.app",
        features: ["Dark Theme", "Class Schedule", "Trainer Profiles", "Membership Plans"],
        rating: 4.5,
        sales: 8
    },
    {
        id: 26,
        name: "Construction Company 2.0",
        price: 1999.00,
        category: "business",
        image: "assets/Construction Company 2.0.jpg",
        description: "Professional Construction Company template with property listings, search filters, and agent profiles.",
        badge: "NEW",
        link: "https://construction-codrenix.netlify.app/",
        features: ["Project Showcase", "Service Listings", "Team Profiles", "Testimonials"],
        rating: 4.4,
        sales: 3
    },
        {
        id: 27,
        name: "Technical Lab 1.0",
        price: 2999.00,
        category: "medical",
        image: "assets/Lab1.jpg",
        description: "Professional website for Lab technicians with service listings, tests,google map intigration, search filters, and  Booking via Whatsapp",
        badge: "NEW",
        link: "https://technical-lab-1.netlify.app/",
        features: ["Tests Booking", "Service Listings", "Booking via Whatsapp", "Testimonials", "FAQs", "Google map Intigration"],
        rating: 4.7,
        sales: 11
    },
    {
        id: 28,
        name: "Technical Lab 2.0",
        price: 2999.00,
        category: "medical",
        image: "assets/Lab2.jpg",
        description: "Professional website for Lab technicians with service listings, tests,google map intigration, search filters, and  Booking via Whatsapp",
        badge: "NEW",
        link: "https://technical-lab-2.netlify.app/",
        features: ["Tests Booking", "Service Listings", "Booking via Whatsapp", "Testimonials", "FAQs", "Google map Intigration"],
        rating: 4.7,
        sales: 6,
    },
    {
        id: 29,
        name: "Technical Lab 3.0",
        price: 2999.00,
        category: "medical",
        image: "assets/Lab3.jpg",
        description: "Professional website for Lab technicians with service listings, tests,google map intigration, search filters, and  Booking via Whatsapp",
        badge: "NEW",
        link: "https://technical-lab-3.netlify.app/",
        features: ["Tests Booking", "Service Listings","Dark Theme", "Booking via Whatsapp", "Testimonials", "FAQs", "Google map Intigration"],
        rating: 4.7,
        sales: 2,
    },
    {
        id: 30,
        name: "Technical Lab 4.0",
        price: 2999.00,
        category: "medical",
        image: "assets/Lab4.jpg",
        description: "Professional website for Lab technicians with service listings, tests,google map intigration, search filters, and  Booking via Whatsapp",
        badge: "NEW",
        link: "https://technical-lab-4.netlify.app/",
        features: ["Tests Booking", "Service Listings", "Booking via Whatsapp", "Testimonials", "FAQs", "Google map Intigration"],
        rating: 4.7,
        sales: 2,
    },
    {
        id: 31,
        name: "Doctor's Portfolio 2.0",
        price: 2999.00,
        category: "portfolio",
        image: "assets/DR2.jpg",
        description: "A professional and elegant portfolio website designed for doctors. With a clean, sophisticated layout, it allows you to showcase your specializations, credentials, and patient testimonials, building trust and credibility with a modern online presence.",
        badge: "Popular",
        link: "https://doctor-s-portfolio2.netlify.app",
        features: ["Professional Design", "Specialization Showcase", "Patient Testimonials", "Appointment Booking"],
        rating: 4.9,
        sales: 6
    },
    {
        id: 32,
        name: "Doctor's Portfolio 3.0",
        price: 2999.00,
        category: "portfolio",
        image: "assets/DR3.jpg",
        description: "A professional and elegant portfolio website designed for doctors. With a clean, sophisticated layout, it allows you to showcase your specializations, credentials, and patient testimonials, building trust and credibility with a modern online presence.",
        badge: "Popular",
        link: "https://doctor-s-portfolio3.netlify.app",
        features: ["Professional Design", "Specialization Showcase", "Patient Testimonials", "Appointment Booking"],
        rating: 4.9,
        sales: 6
    },
];

// Cart functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentCategory = 'all';
let currentSearch = '';
let currentSort = 'default';
let currentPage = 1;
const itemsPerPage = 9;

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
const loadingSpinner = document.getElementById('loadingSpinner');
const resultsCount = document.getElementById('resultsCount');
const pagination = document.getElementById('pagination');
const quickViewModal = document.getElementById('quickViewModal');
const quickViewClose = document.getElementById('quickViewClose');
const reviewCards = document.getElementById('reviewCards');

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    loadTemplates();
    setupEventListeners();
    updateCart();
    loadReviews();
});

function setupEventListeners() {
    // Cart icon
    if (cartIcon) cartIcon.addEventListener('click', toggleCart);
    
    // Close modal
    if (closeModal) closeModal.addEventListener('click', toggleCart);
    
    // Checkout button
    if (checkoutBtn) checkoutBtn.addEventListener('click', showCheckoutForm);
    
    // WhatsApp button
    if (whatsappBtn) whatsappBtn.addEventListener('click', sendToWhatsApp);
    
    // Search functionality
    if (searchInput) {
        searchInput.addEventListener('input', searchTemplates);
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') searchTemplates();
        });
    }
    
    // Category buttons
    if (categoryButtons) {
        categoryButtons.addEventListener('click', function(e) {
            if (e.target.classList.contains('category-btn')) {
                const category = e.target.dataset.category;
                filterByCategory(category);
            }
        });
    }
    
    // Sort buttons
    const sortButtons = document.querySelectorAll('.sort-btn');
    sortButtons.forEach(button => {
        button.addEventListener('click', function() {
            const sort = this.dataset.sort;
            sortTemplates(sort);
            
            // Update active state
            sortButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Quick view modal
    if (quickViewClose) quickViewClose.addEventListener('click', closeQuickView);
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === cartModal) {
            toggleCart();
        }
        if (event.target === quickViewModal) {
            closeQuickView();
        }
    });
}

function loadTemplates() {
    if (!productsGrid) return;
    
    // Show loading spinner
    loadingSpinner.style.display = 'block';
    productsGrid.innerHTML = '';
    
    // Simulate loading for better UX
    setTimeout(() => {
        const filteredTemplates = templates.filter(template => {
            const matchesCategory = currentCategory === 'all' || template.category === currentCategory;
            const matchesSearch = template.name.toLowerCase().includes(currentSearch.toLowerCase()) ||
                                template.description.toLowerCase().includes(currentSearch.toLowerCase());
            return matchesCategory && matchesSearch;
        });

        // Sort templates
        const sortedTemplates = sortTemplatesList(filteredTemplates, currentSort);
        
        // Update results count
        if (resultsCount) {
            resultsCount.textContent = filteredTemplates.length;
        }
        
        // Pagination
        const totalPages = Math.ceil(sortedTemplates.length / itemsPerPage);
        const startIndex = (currentPage - 1) * itemsPerPage;
        const paginatedTemplates = sortedTemplates.slice(startIndex, startIndex + itemsPerPage);
        
        // Generate pagination
        generatePagination(totalPages);
        
        // Display templates
        if (paginatedTemplates.length === 0) {
            productsGrid.innerHTML = `
                <div class="no-results">
                    <i class="fas fa-search" style="font-size: 3rem; margin-bottom: 1rem; color: var(--gray);"></i>
                    <h3>No templates found</h3>
                    <p>Try adjusting your search or filter criteria</p>
                </div>
            `;
        } else {
            paginatedTemplates.forEach(template => {
                const productCard = document.createElement('div');
                productCard.className = 'product-card fade-in';
                productCard.innerHTML = `
                    <div class="product-image">
                        <img src="${template.image}" alt="${template.name} template" loading="lazy">
                        ${template.badge ? `<span class="product-badge">${template.badge}</span>` : ''}
                        ${template.originalPrice ? `<span class="discount-badge">${Math.round((1 - template.price / template.originalPrice) * 100)}% OFF</span>` : ''}
                    </div>
                    <div class="product-info">
                        <h3 class="product-title">${template.name}</h3>
                        <div class="price-compare">
                            <div class="product-price">₹${template.price.toFixed(2)}</div>
                            ${template.originalPrice ? `<div class="original-price">₹${template.originalPrice.toFixed(2)}</div>` : ''}
                        </div>
                        <p class="product-description">${template.description}</p>
                        <div class="product-meta">
                            <span class="product-rating"><i class="fas fa-star"></i> ${template.rating}</span>
                            <span class="product-sales">${template.sales} sales</span>
                        </div>
                        <div class="product-actions">
                            <button class="add-to-cart" onclick="addToCart(${template.id})">
                                <i class="fas fa-cart-plus"></i> Add to Cart
                            </button>
                            <button class="quick-view-btn" onclick="openQuickView(${template.id})">
                                <i class="fas fa-eye"></i> Quick View
                            </button>
                        </div>
                        <button class="view-details-btn" onclick="window.location.href='Page.html?id=${template.id}'">
                            View Details
                        </button>
                    </div>
                `;
                productsGrid.appendChild(productCard);
            });
        }
        
        // Hide loading spinner
        loadingSpinner.style.display = 'none';
    }, 500); // Simulate network delay
}

function sortTemplates(sort) {
    currentSort = sort;
    currentPage = 1; // Reset to first page when sorting
    loadTemplates();
}

function sortTemplatesList(templatesList, sort) {
    switch(sort) {
        case 'price-low':
            return templatesList.sort((a, b) => a.price - b.price);
        case 'price-high':
            return templatesList.sort((a, b) => b.price - a.price);
        case 'name':
            return templatesList.sort((a, b) => a.name.localeCompare(b.name));
        case 'rating':
            return templatesList.sort((a, b) => b.rating - a.rating);
        default:
            return templatesList;
    }
}

function generatePagination(totalPages) {
    if (!pagination || totalPages <= 1) {
        pagination.innerHTML = '';
        return;
    }
    
    let paginationHTML = '';
    
    // Previous button
    if (currentPage > 1) {
        paginationHTML += `<button class="pagination-btn" onclick="changePage(${currentPage - 1})">Previous</button>`;
    }
    
    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
        if (i === currentPage) {
            paginationHTML += `<button class="pagination-btn active">${i}</button>`;
        } else {
            paginationHTML += `<button class="pagination-btn" onclick="changePage(${i})">${i}</button>`;
        }
    }
    
    // Next button
    if (currentPage < totalPages) {
        paginationHTML += `<button class="pagination-btn" onclick="changePage(${currentPage + 1})">Next</button>`;
    }
    
    pagination.innerHTML = paginationHTML;
}

function changePage(page) {
    currentPage = page;
    loadTemplates();
    
    // Scroll to products section
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

function filterByCategory(category) {
    currentCategory = category;
    currentPage = 1; // Reset to first page when filtering
    loadTemplates();
}

function searchTemplates() {
    currentSearch = searchInput.value;
    currentPage = 1; // Reset to first page when searching
    loadTemplates();
}

function openQuickView(id) {
    const template = templates.find(t => t.id === id);
    if (!template) return;
    
    document.getElementById('quickViewTitle').textContent = template.name;
    document.getElementById('quickViewImage').src = template.image;
    document.getElementById('quickViewPrice').textContent = `₹${template.price.toFixed(2)}`;
    document.getElementById('quickViewDescription').textContent = template.description;
    
    // Set up buttons
    document.getElementById('quickViewAddToCart').onclick = function() {
        addToCart(template.id);
        closeQuickView();
    };
    
    document.getElementById('quickViewLiveDemo').onclick = function() {
        window.open(template.link, "_blank");
    };
    
    // Show modal
    quickViewModal.style.display = 'block';
}

function closeQuickView() {
    quickViewModal.style.display = 'none';
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
    
    // Save to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    updateCart();
    showNotification(`${template.name} added to cart!`);
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    
    // Update localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    updateCart();
}

function updateCart() {
    // Update cart count
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    if (cartCount) cartCount.textContent = totalItems;

    // Update cart items
    if (cartItems) {
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
        if (cartTotal) cartTotal.textContent = `Total: ₹${total.toFixed(2)}`;
    }
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
    orderSummary += `*Ordered from* :- https://codrenix-webstore.netlify.app`;

    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/919552477146?text=${orderSummary}`;
    
    // Open WhatsApp
    window.open(whatsappURL, '_blank');
    
    // Reset cart and close modal
    cart = [];
    localStorage.removeItem('cart');
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

function showNotification(message, type = 'success') {
    // Remove existing notifications
    document.querySelectorAll('.notification').forEach(el => el.remove());

    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : '#ef4444'};
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

function loadReviews() {
    if (!reviewCards) return;
    
    // Sample reviews data
    const reviews = [
        {
            stars: 4,
            template: "Anniversary 2.0",
            text: "I surprised my parents with this anniversary website. It was emotional and beautiful. They loved it.",
            reviewer: "Sneha Gupta",
            date: "March 15, 2024"
        },
        {
            stars: 5,
            template: "Video Editor's Portfolio",
            text: "As a freelancer, this portfolio gave me the professional edge I needed. Sleek design and very smooth.",
            reviewer: "Aabid Khan",
            date: "February 28, 2024"
        },
        {
            stars: 5,
            template: "Birthday 2.0",
            text: "Mere dost ke liye banaya tha, sab ne bola kahan se banaya? Easy setup aur photos add karna bahut simple tha.",
            reviewer: "Shubham",
            date: "February 10, 2024"
        }
    ];
    
    reviewCards.innerHTML = reviews.map(review => `
        <div class="review-card">
            <div class="review-stars">
                ${'<i class="fas fa-star"></i>'.repeat(review.stars)}
                ${review.stars < 5 ? '<i class="far fa-star"></i>'.repeat(5 - review.stars) : ''}
            </div>
            <h3 class="review-template">${review.template}</h3>
            <p class="review-text">"${review.text}"</p>
            <div class="reviewer">
                <div class="reviewer-avatar">${review.reviewer.split(' ').map(n => n[0]).join('')}</div>
                <div>
                    <div class="reviewer-name">${review.reviewer}</div>
                    <div class="review-date">${review.date}</div>
                </div>
            </div>
        </div>
    `).join('');
}

// Add fadeOut animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        from { opacity: 1; transform: translateY(0); }
        to { opacity: 0; transform: translateY(-20px); }
    }
    
    .product-meta {
        display: flex;
        justify-content: space-between;
        margin: 10px 0;
        font-size: 0.9rem;
        color: var(--gray);
    }
    
    .product-rating, .product-sales {
        display: flex;
        align-items: center;
        gap: 5px;
    }
    
    .product-rating i {
        color: #f59e0b;
    }
    
    .view-details-btn {
        width: 100%;
        background: transparent;
        color: var(--primary);
        border: 1px solid var(--primary);
        padding: 10px;
        border-radius: 5px;
        cursor: pointer;
        margin-top: 10px;
        transition: all 0.3s;
    }
    
    .view-details-btn:hover {
        background: var(--primary);
        color: white;
    }
`;
document.head.appendChild(style);
