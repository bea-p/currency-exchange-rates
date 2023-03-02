import { Currency } from "../../models/Currency";

const convertFromCZK = (
  amount: number,
  currencyCode: string,
  currencies: Currency[]
): number => {
  const currency = currencies.filter(
    (currency: Currency) => currency.code === currencyCode
  );
  if (currency.length === 0) {
    throw new Error("Selected currency not found");
  }

  return (amount / currency[0].rate) * currency[0].amount;
};

export default convertFromCZK;
