const gasPrice = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 3
});

console.log(gasPrice.format(5.259)); // $5.259

const rupiahIndo = new Intl.NumberFormat("id", {
  style: "currency",
  currency: "IDR"
});

console.log(rupiahIndo.format(1314.25));
