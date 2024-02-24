// Import module
const fs = require('fs');

// Use the module to read and write file.
fs.readFile('./homework.log', 'utf8', (error, content) => {
    if (error) throw error;
    console.log('The file has been read successfuly.');
    
    fs.writeFile('./log.txt', content, (err) => {
        if (err) throw err;
        console.log('The file has been saved successfuly.');
    });
});