const apiUrl = 'http://localhost:9008/get'; // Base URL for products
const cart = [];
async function fetchProducts() {
    console.log('Fetching products from the server...');
    try {
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }

        const products = await response.json();
        console.log('Products fetched successfully:', products);
        displayProducts(products); // Call the function to display products
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

async function addToCart(id) {
    try {
        const response = await fetch(`http://localhost:9008/get/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }

        const product = await response.json();
        cart.push(product);
        displayCart();
    } catch (error) {
        console.error('Error adding product to cart:', error);
    }
}

function displayProducts(products) {
    const dataDisplay = document.getElementById('dataDisplay');
    dataDisplay.innerHTML = ''; // Clear existing content

    products.forEach(product => {
        const item = document.createElement('div');
        item.classList.add('data-item');
        item.innerHTML = `
            <div>
                <h2>${product.nameofProduct}</h2>
                <p>Cost: ${product.costofproduct}</p>
                <p>Brand: ${product.brandofProduct}</p>
            </div>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        dataDisplay.appendChild(item);
    });
}

function displayCart() {
    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = ''; // Clear existing cart items

    cart.forEach(product => {
        const item = document.createElement('div');
        item.classList.add('data-item');
        item.innerHTML = `
            <h2>${product.nameofProduct}</h2>
            <p>Cost: ${product.costofproduct}</p>
            <p>Brand: ${product.brandofProduct}</p>
        `;
        cartItems.appendChild(item);
    });
}

document.getElementById('fetchButton').addEventListener('click', fetchProducts);
