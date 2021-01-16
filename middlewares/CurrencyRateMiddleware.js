const axios = require("axios").default;

class CurrencyRateMiddleware {

    static async fetchCurrencyRate(base, currency) {
        // new Promise((reject, resolve) => {

        //     const fetchUrl = `https://api.exchangeratesapi.io/latest?symbols=${currency}&base=${base}`;
        //     console.log("test", fetchUrl)
        //     axios.get(fetchUrl).then(resp => {
        //         console.log("ddd",resp)
        //         resolve(resp);
        //     }).catch(err => {
        //         console.log("hh",err)
        //         reject(err);
        //     })
        // })
        try {
            const fetchUrl = `https://api.exchangeratesapi.io/latest?symbols=${currency}&base=${base}`;

            const response = await axios.get(fetchUrl);

            return response.data;
        } catch (error) {
            return "error";
        }
    }
}

module.exports = CurrencyRateMiddleware;
