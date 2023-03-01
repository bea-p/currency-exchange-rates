import React, { Fragment } from "react";
import { Currency } from "../models/Currency";
import { Grid, GridHeader, GridData } from "../styles/CurrencyList";

interface Props {
  currencies: Currency[];
}

const CurrencyList: React.FC<Props> = (props: Props) => (
  <Grid>
    <GridHeader>Country</GridHeader>
    <GridHeader>Currency</GridHeader>
    <GridHeader>Code</GridHeader>
    <GridHeader>Amount</GridHeader>
    <GridHeader>Rate</GridHeader>
    {props.currencies.map((item: Currency, id: number) => (
      <Fragment key={id}>
        <GridData textAlign="left">{item.country}</GridData>
        <GridData textAlign="left">{item.currency}</GridData>
        <GridData textAlign="left">{item.code}</GridData>
        <GridData textAlign="right">{item.amount}</GridData>
        <GridData textAlign="right">{item.rate.toFixed(2)}</GridData>
      </Fragment>
    ))}
  </Grid>
);

export default CurrencyList;
