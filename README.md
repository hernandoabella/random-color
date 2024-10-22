# Random Color Generator

A simple web app that generates a random hex color with each button click.


## This project is built using
- HTML
- CSS
- JavaScript

## Explanation:
- **HTML:** The structure includes a div that displays the random color and a button that, when clicked, triggers the JavaScript function to generate a new color. 
- **CSS:** Styles the container and color box, with the button changing color on hover. 
- **JavaScript:** Generates a random hex color and updates the displayed color when the button is clicked. 

You can save these files (`index.html`, `style.css`, `script.js`) in a local folder and open `index.html` in your browser to see the app in action.

## Screenshot 📷
![Screenshot 2024-10-21 215919](https://github.com/user-attachments/assets/514b8f70-3fd1-4130-9f1c-3278534eca4b)

## Features
- Generates a random hex color
- Displays the hex color code
- Changes text color for better contrast based on the background color
- Simple, responsive design
- Clean user interface 
- Hover effect on the button for interactivity

## Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/hernandoabella/random-color.git
    ```

2. Navigate to the project folder:
    ```bash
    cd random-color
    ```

3. Open the `index.html` file in your browser to view the app.

## Usage
- Click the **"Random Color"** button to generate a new random color.
- The randomly generated color will appear in the display box along with its hex code.

## Customization
- You can change the length of the random string by modifying the `generateRandomString()` function in the `script.js` file.

## Customization
- You can modify the `generateRandomColor()` function in the `script.js` file to change how colors are generated or to add additional color formats.

```javascript
const generateRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};
```
