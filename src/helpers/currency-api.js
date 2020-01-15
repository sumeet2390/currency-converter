const proxyurl = "https://cors-anywhere.herokuapp.com/";
const apiKey = "c90fed8c553b436b8f7e48d0659b6302";

export const fetchCurrencies = () => {
  return fetch(
    proxyurl + "https://openexchangerates.org/api/latest.json?app_id=" + apiKey
  )
    .then(r => r.json())
    .then(({ rates }) => {
      rates.EUR = 1;
      return rates;
    });
};
// export const fetchCurrencies = () => {  //for development so that page doesn't refreshes on every change
//   const data = {
//     AED: 4.090534,
//     AFN: 86.868099,
//     ALL: 121.871509,
//     AMD: 533.506798,
//     ANG: 1.804307,
//     AOA: 541.2864,
//     ARS: 66.790491,
//     AUD: 1.614458,
//     AWG: 2.004678,
//     AZN: 1.890772,
//     BAM: 1.957157,
//     BBD: 2.248804,
//     BDT: 94.333225
//   };
//   return Promise.resolve(data);
// };
