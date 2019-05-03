import cityData from './cityData.js';

const data = {cityData}

const simpleFetch = url => new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve(data[url]);
  }, 3000);
});

export default simpleFetch;