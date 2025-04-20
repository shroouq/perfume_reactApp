const numberFormat = (value) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR'
  }).format(value);

numberFormat(50000); //output as ₹ 50,000.00
numberFormat(10000); //output as ₹ 10,000.00