let display = document.getElementById('calc-display');
isDegree = true; // Default mode is degree

// Function to append values to the display
function input(value) {
    display.value += value;
}

// Function to clear the display
function clearDisplay() {
    display.value = '';
}

// Function to delete the last character
function deleteChar() {
    display.value = display.value.slice(0, -1);
}

// Function to switch between Degree and Radian modes
function toggleDegreeRadian() {
    isDegree = !isDegree;
    document.getElementById('deg-rad-btn').innerText = isDegree ? "DEG" : "RAD";
}

// Function to calculate the result of the expression
function calculate() {
    try {
        let expression = display.value;

        // Handle pi replacement
        expression = expression.replace(/π/g, 'Math.PI');

        // Handle exponentiation (replace 'x^y' with '**')
        expression = expression.replace(/(\d+|\))\^(\d+)/g, '$1**$2');

        // Replace common math functions with JavaScript Math equivalents
        
        // Replace 'exp(' with 'Math.exp(' for the exponential function
        expression = expression.replace(/exp\(/g, 'Math.exp(');

        // Replace 'abs(' with 'Math.abs(' for the absolute function
        expression = expression.replace(/abs\(/g, 'Math.abs(');

        // Evaluate the expression safely
        display.value = eval(expression);
    } catch (error) {
        display.value = 'Error';
    }
}
        function square() {
            if (display.value) {
                display.value += '^2'; // Append ^2 for squaring
                calculate(); // Calculate the result
            }
        }

        // Function for cubing the last input
        function cube() {
            if (display.value) {
                display.value += '^3'; // Append ^3 for cubing
                calculate(); // Calculate the result
            }
        }
        // Function to calculate sine based on input
function calculateSine(value) {
    let radians;
    
    // Check if the input is a valid number
    if (isNaN(value)) {
        return 'Error: Not a number';
    }

    // Convert degrees to radians if in degree mode
    if (isDegree) {
        radians = degToRad(value);
    } else {
        radians = value; // Already in radians
    }

    // Calculate sine
    return Math.sin(radians);
}

// Function to convert degrees to radians
function degToRad(degrees) {
    return degrees * (Math.PI / 180);
}

// Example Usage
console.log(calculateSine(30));  // If in degree mode, this will return 0.5
console.log(calculateSine(Math.PI / 6));  // If in radian mode, this will also return 0.5


// Function to convert degrees to radians
function degToRad(degrees) {
    return degrees * (Math.PI / 180);
}

// Function to convert radians to degrees (in case you need it later)
function radToDeg(radians) {
    return radians * (180 / Math.PI);
}



