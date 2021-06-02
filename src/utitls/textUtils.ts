const monthToYearText = (month: number): string => {
  const year = Math.floor(month / 12);
  const monthLeft = month - year * 12;

  const textYear = year !== 0 ? `${year} years ` : '';
  const textMonth = monthLeft !== 0 ? `${monthLeft} months` : '';
  return `${textYear}${textMonth}`;
};

export { monthToYearText };
