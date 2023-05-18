const totalCostWithSalesTax = (totalCostWithoutTax, taxRate) => {
  return (totalCostWithoutTax + totalCostWithoutTax * (taxRate / 100))
    .toFixed(2);
};

export default totalCostWithSalesTax;
