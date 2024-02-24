// Import modules
import {area as squareArea, perimeter as squarePerimeter} from './modules/square.js';
import {area as rectangleArea, perimeter as rectanglePerimeter} from './modules/rectangle.js';

// Use the module to calculate area and perimeter of square and rectangle.
console.log(squareArea(2));
console.log(squarePerimeter(2));
console.log(rectangleArea(2, 3));
console.log(rectanglePerimeter(2, 3));

// Note: Run this file with Deno because its ESM compability or simply add "type":"module" in the package.json file to run this file with Node.  