export const dateToApi = (date) => {
  const formatedDate = new Intl.DateTimeFormat("pt-br")
    .format(date)
    .split("/");
  const [day, month, year] = formatedDate;
  const dateApi = `${year}-${month}-${day}`;
  return dateApi;
};
