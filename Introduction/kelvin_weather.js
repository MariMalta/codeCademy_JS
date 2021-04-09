const kelvin = 293; // kelvin will remain constant
const celsius = kelvin - 273; //celsius is very similar to kelvin
let fahrenheit = celsius * (9 / 5) + 32; //will need to round the value so we use let because the var will change.
let newton = celsius * (33 / 100);//will need to round the value so we use let because the var will change.

fahrenheit = Math.floor(fahrenheit);
newton = Math.floor(newton);
// using the floor method to round 


console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);
