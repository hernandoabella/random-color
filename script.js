// Function to generate a random color in hex format
const generateRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

// Function to determine if a color is light or dark for contrast
const isLightColor = (color) => {
    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);
    // Use the luminance formula to determine brightness
    const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
    return luminance > 186; // If luminance > 186, it's a light color
};

// Function to update the color display
const updateColorDisplay = (color) => {
    const colorDisplay = document.getElementById('colorDisplay');
    colorDisplay.textContent = color;
    colorDisplay.style.backgroundColor = color;
    colorDisplay.style.color = isLightColor(color) ? 'black' : 'white';
};

// Function to generate a random color when the button is clicked
document.getElementById('colorButton').addEventListener('click', () => {
    const newRandomColor = generateRandomColor();
    updateColorDisplay(newRandomColor);
});

// Initialize with a default color
updateColorDisplay('#FF5733');
