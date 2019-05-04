import cityData from './cityData.js';
import newTripMockData from './newTripMockData.js';
import recommendTripMockData from './recommendTripMockData.js';
import seoulMockData from './seoulMockData.js';

const data = {cityData, newTripMockData, recommendTripMockData, seoulMockData}

const simpleFetch = url => new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve(data[url]);
  }, 3000);
});

export default simpleFetch;