import {writeFile} from'node:fs';

// creating text files
// writeFile('./hello.txt','<h1> Learning Node.js</>', () => {
//     console.log('File was created');
// });




// Creating files for pictures
// writeFile('./profiles/hello.jpeg','<h1> Learning Node.js</>', () => {
//     console.log('File was created');
// });


writeFile('./hello.html','<h1> Learning Node.js</>', () => {
    console.log('File was created');
});