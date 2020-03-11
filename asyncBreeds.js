// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function(breed, cb) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    if (error) {
      cb(undefined);
    } else {
      console.log(`In readFile's Callback: it has the data.`);
      // ISSUE: Returning from *inner* callback function, not breedDetailsFromFile.
      cb(data);
    };
  });
  // ISSUE: Attempting to return data out here will also not work.
  //        Currently not returning anything from here, so breedDetailsFromFile function returns undefined.
};

const printBreed = (data) => {
  console.log('Return Value: ', data);
};

module.exports = breedDetailsFromFile;
// we try to get the return value
//breedDetailsFromFile('Bombay', printBreed);
