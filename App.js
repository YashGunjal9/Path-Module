const path = require('path');
// console.log(path);

//! Getting file name from a path    

console.log(path.basename("/5. NodeJS/3. Path Module/Text.txt"  
)); 

//! Getting directory name from a path

// console.log(path.dirname("/5. NodeJS/3. Path Module/Text.txt"));

//! Getting file extension from a path

// console.log(path.extname("/5. NodeJS/3. Path Module/Text.txt"));

//! Join paths 

// console.log(path.join("5. NodeJS", "3. Path Module", "Text.txt"));

//! Getting absolute path

// console.log(path.resolve("5. NodeJS", "3. Path Module", "Text.txt"));

// Access special path properties

console.log(__filename);
console.log(__dirname);
