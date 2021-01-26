const { writeFile } = require('fs');
const { argv } = require('yargs');
// read environment variables from .env file
require('dotenv').config();
// read the command line arguments passed with yargs
const environment = argv.environment;
const isProduction = environment === 'prod';
const targetPath = isProduction
   ? './src/environments/environment.prod.ts'
   : './src/environments/environment.ts';
// we have access to our environment variables
// in the process.env object thanks to dotenv
const environmentFileContent = `
export const environment = {
   production: ${isProduction},
   firebaseConfig :{
    apiKey: "AIzaSyB9kqZiok0XWdJsMt7oZfEohTRyleN09vI",
    authDomain:  "sports-store-c1ca4.firebaseapp.com",
    databaseURL: "https://sports-store-c1ca4.firebaseio.com",
    projectId:  "sports-store-c1ca4",
    storageBucket:  "sports-store-c1ca4.appspot.com",
    messagingSenderId:  "336982438490",
    appId:  "1:336982438490:web:9c386d2d65a0b80afa9e63",
    measurementId:  "G-FS0F4WWZYX"
}
}
`;
// write the content to the respective file
writeFile(targetPath, environmentFileContent, function (err) {
   if (err) {
      console.log(err);
   }
   console.log(`Wrote variables to ${targetPath}`);
})