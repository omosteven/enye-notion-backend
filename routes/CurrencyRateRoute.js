const router = require("express");

const baseRouter = router();

const currencyRateRouter = router();

const CurrencyRateController = require("../controllers/CurrencyRateController");

currencyRateRouter.get("/rates/", CurrencyRateController.getCurrencyRate);

// more end points  be added here for more features.
baseRouter.use("/", currencyRateRouter);

module.exports = baseRouter;
