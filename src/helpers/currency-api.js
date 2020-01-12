const proxyurl = "http://cors-anywhere.herokuapp.com/";
const apiKey = "2817f82593543d07802970b7c833c52a";
export const fetchCurrencies = () => {
  return fetch(
    proxyurl + "http://data.fixer.io/api/latest?access_key=" + apiKey
  )
    .then(r => r.json())
    .then(({ rates }) => {
      console.log("rates", rates);
      rates.EUR = 1;
      console.log("Fetched new FX rates");
      return rates;
    });
};
