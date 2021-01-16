const axios = require("axios").default;

class CurrencyRateMiddleware {

    static async fetchCurrencyRate(base, currency) {

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
