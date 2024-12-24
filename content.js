// Select the price element (adjust this for your specific page)
const priceElement = document.querySelector('.a-price-whole'); // Adjust this for your specific page

// Select the first image with the class 'landingImage'
const imageElement = document.querySelector('#landingImage');

if (priceElement && imageElement) {
    const basePrice = parseFloat(priceElement.textContent.replace(/[^\d.-]/g, '')); // Extract and parse the base price

    // Define a tax rate (for example, 18% tax)
    const taxRate = 0.18;
    const taxAmount = basePrice * taxRate;

    // Format the tax amount to 2 decimal places
    const formattedTaxAmount = taxAmount.toFixed(2);

    // --- Part 1: Side-by-Side Price Display ---
    const priceContainer = priceElement.parentElement; // Get the container of the original price

    const taxPriceDisplay = document.createElement('span');
    taxPriceDisplay.style.fontSize = '1.5em';
    taxPriceDisplay.style.color = 'red'; // Tax price in red
    taxPriceDisplay.style.fontWeight = 'bold'; // Bold the tax price
    taxPriceDisplay.style.marginLeft = '10px'; // Space between prices
    taxPriceDisplay.textContent = `₹${formattedTaxAmount}`;

    // Append the tax price next to the original price
    priceContainer.appendChild(taxPriceDisplay);

    // --- Part 2: Tax Amount Above the Image Height ---
    // Create a new element for the tax overlay above the image
    const taxOverlay = document.createElement('span');
    taxOverlay.style.position = 'absolute';
    taxOverlay.style.top = '30px'; // Position it above the image (adjust as needed)
    taxOverlay.style.left = '50%'; // Center horizontally
    taxOverlay.style.transform = 'translateX(-50%)'; // Center the overlay
    taxOverlay.style.fontSize = '3em'; // Large text size for emphasis
    taxOverlay.style.fontWeight = 'bold'; // Bold the text
    taxOverlay.style.color = 'red'; // Red color to indicate loss
    taxOverlay.style.zIndex = '100000000000000000'; // Ensure it's above the image
    taxOverlay.textContent = `₹${formattedTaxAmount}`;

    // Ensure the image has relative positioning so the absolute element is positioned correctly
    imageElement.style.position = 'relative';

    // Append the tax overlay to the container of the image (or a parent element if necessary)
    imageElement.parentElement.appendChild(taxOverlay);
} else {
    console.log('Price element or image element not found.');
}
