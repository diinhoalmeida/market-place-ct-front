const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
    currency: "BRL",
    style: 'currency'
});

export const FormatCurrency = (number: number) => {
    return CURRENCY_FORMATTER.format(number);
}