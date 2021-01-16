const Util = require("../utility/Util");

const {fetchCurrencyRate} = require("../middlewares/CurrencyRateMiddleware");

class CurrencyRateController { /**
    * @description
    *
    * @param {Object}
    *
    * @return {String} Returned messsage
    */
    static async getCurrencyRate(req, res) {
        const {base, currency} = req.query;
        const arrayOfCurrencies = currency.split(",");

        const listOfAllCurrencies = [
            "CAD",
            "HKD",
            "ISK",
            "PHP",
            "DKK",
            "HUF",
            "CZK",
            "AUD",
            "RON",
            "SEK",
            "IDR",
            "INR",
            "BRL",
            "RUB",
            "HRK",
            "JPY",
            "THB",
            "CHF",
            "SGD",
            "PLN",
            "BGN",
            "TRY",
            "CNY",
            "NOK",
            "NZD",
            "ZAR",
            "USD",
            "MXN",
            "ILS",
            "GBP",
            "KRW",
            "MYR",
            "EUR"
        ];

        if (Util.validateInput([
            "base", "currency"
        ], req.query)) {

            if (arrayOfCurrencies.length > 0 && currency.length > 0) {

                const currencyRates = await fetchCurrencyRate(base, currency);

                if (currencyRates !== "error") {

                    res.status(200).send({results: currencyRates});
                } else {
                    res.status(404).send({

                        results: {
                            base: "",
                            date: "",
                            rates: {
                                "EUR": "",
                                "GBP": "",
                                "USD": ""
                            }
                        },

                        message: "An error occurred."


                    });
                }

            } else {
                res.status(401).send({

                    results: {
                        base: "",
                        date: "",
                        rates: {
                            "EUR": "",
                            "GBP": "",
                            "USD": ""
                        }
                    },

                    message: "Invalid request. Expected currency to be non-empty."


                });
            }

        } else {
            res.status(400).send({

                results: {
                    base: "",
                    date: "",
                    rates: {
                        "EUR": "",
                        "GBP": "",
                        "USD": ""
                    }
                },

                message: "Invalid request. Expected base and currency as request parameters."


            });
        }
    }
}

module.exports = CurrencyRateController;
