import React from "react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Currency } from "../models/Currency";
import {
  Form,
  FormWrapper,
  FormResult,
  Select,
  Input,
  Error,
} from "../styles/CurrencyConverter";
import convertFromCZK from "../utils/helpers/convertFromCZK";

interface Props {
  currencies: Currency[];
}

export interface FormInputs {
  amount: number;
  code: string;
}

const CurrencyConverter: React.FC<Props> = (props: Props) => {
  const [amountCZK, setAmountCZK] = useState<number>();
  const [amountConverted, setAmountConverted] = useState<number>();
  const [currency, setCurrency] = useState<string>();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormInputs>();
  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    const result = convertFromCZK(data.amount, data.code, props.currencies);
    setAmountCZK(data.amount);
    setAmountConverted(result);
    setCurrency(data.code);
  };

  let formResult;
  if (amountCZK && amountConverted && currency) {
    formResult = (
      <FormResult>
        {amountCZK} CZK = {amountConverted?.toFixed(2)} {currency}
      </FormResult>
    );
  }

  return (
    <FormWrapper>
      <h2>
        Select amount in CZK and currency to convert to in the section below
      </h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="amount">CZK</label>
          <Input
            {...register("amount", { required: true, min: 0 })}
            aria-invalid={errors.amount ? "true" : "false"}
          />
        </div>
        <div>
          <label htmlFor="code">To</label>
          <Select {...register("code")}>
            {props.currencies.map((currency, id) => (
              <option key={id} value={currency.code}>
                {currency.code}
              </option>
            ))}
          </Select>
        </div>
        <div>
          <Input type="submit" value="Convert" />
        </div>
      </Form>

      {errors.amount?.type === "required" && (
        <Error role="alert">Please type the amount you wish to convert</Error>
      )}
      {errors.amount?.type === "min" && (
        <Error role="alert">The amount should be greater than 0</Error>
      )}

      {formResult}
    </FormWrapper>
  );
};

export default CurrencyConverter;
