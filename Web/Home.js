const apiUrl = 'http://localhost:9008/create'; // Endpoint URL

// Function to post product data
async function postProduct(product) {
    try {
        // Make the POST request
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // Specify that we are sending JSON
            },
            body: JSON.stringify(product) // Convert the product object to JSON string
        });

        // Check if the response is ok
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Parse and log the response data
        const data = await response.json();
        console.log('Product posted successfully:', data);
    } catch (error) {
        console.error('Error posting product:', error);
    }
}

// Handle form submission
document.getElementById('productForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Collect form data
    const product = {
        nameofProduct: document.getElementById('name').value,
        costofproduct: document.getElementById('cost').value,
        brandofProduct: document.getElementById('brand').value
    };

    // Post the product data
    postProduct(product);
});
