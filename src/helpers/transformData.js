export function transformData(data) {
  const years = data[0].years;
  const categories = data[1].map(item => item.category);

  const result = [['years', ...categories]];

  for (let i = 0; i < years.length; i++) {
    const year = years[i];
    const sales = data[1].map(item => item.sales[i]);
    result.push([year.toString(), ...sales]);
  }

  return result;
}