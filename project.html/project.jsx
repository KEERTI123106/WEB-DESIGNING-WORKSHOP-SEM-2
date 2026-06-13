// Mock Product Data
const products = [
    {
        id: 1,
        title: "Wireless Noise Cancelling Headphones",
        price: 199.99,
        rating: "⭐⭐⭐⭐★ (4.5)",
        image: "https://unsplash.com"
    },
    {
        id: 2,
        title: "Minimalist Leather Quartz Watch",
        price: 89.45,
        rating: "⭐⭐⭐⭐⭐ (4.8)",
        image: "https://unsplash.com"
    },
    {
        id: 3,
        title: "Ergonomic Mechanical Keyboard",
        price: 124.99,
        rating: "⭐⭐⭐⭐★ (4.2)",
        image: "https://unsplash.com"
    },
    {
        id: 4,
        title: "Ultra-Wide Gaming Monitor 34-inch",
        price: 449.99,
        rating: "⭐⭐⭐⭐⭐ (4.9)",
        image: "https://unsplash.com"
    }
];

let cartCount = 0;

// Function to render products on page load
function displayProducts() {
    const grid = document.getElementById('product-grid');
    
    products.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('product-card');
        
        card.innerHTML = `
            <div>
                <img src="${product.image}" alt="${product.title}" class="product-image">
                <h3 class="product-title">${product.title}</h3>
                <div class="product-rating">${product.rating}</div>
                <div class="product-price"><span class="price-symbol">$</span>${product.price}</div>
            </div>
            <button class="add-to-cart-btn" onclick="updateCart()">Add to Cart</button>
        `;
        
        grid.appendChild(card);
    });
}

// Function to handle shopping cart logic
function updateCart() {
    cartCount++;
    document.getElementById('cart-count').innerText = cartCount;
}

// Initialize application
document.addEventListener('DOMContentLoaded', displayProducts);
