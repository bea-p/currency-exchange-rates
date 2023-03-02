import {
  URL,
  currenciesIndexStartAt,
  currencyObjectKeysLength,
} from "../../config";
import { Currency } from "../../models/Currency";

const fetchCurrencyRates = async (): Promise<Currency[]> => {
  try {
    const lines = (await (await fetch(URL)).text()).split("\n");
    const currencies: Currency[] = [];
    for (let i = currenciesIndexStartAt; i < lines.length; i++) {
      const line = lines[i].split("|");
      if (line.length !== currencyObjectKeysLength) {
        continue;
      }

      const currency: Currency = {
        country: line[0],
        currency: line[1],
        amount: Number(line[2]),
        code: line[3],
        rate: Number.parseFloat(line[4]),
      };

      currencies.push(currency);
    }

    return currencies;
  } catch {
    throw new Error("Invalid currency data");
  }
};

export default fetchCurrencyRates;
