export const dateToApi = (date) => {
  const formatedDate = new Intl.DateTimeFormat("pt-br").format(date).split("/");
  const [day, month, year] = formatedDate;
  const dateApi = `${year}-${month}-${day}`;
  return dateApi;
};

export const formatDate = (stringDate = "") => {
  const date = new Date(stringDate);
  const formatedDate = new Intl.DateTimeFormat("en-US").format(date);
  return formatedDate;
};
