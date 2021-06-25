import { dateToApi } from "../utils";

const currentDate = dateToApi(new Date());

export const get = async (
  func,
  start_date = currentDate,
  end_date = currentDate
) => {
  try {
    await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=T9NSyUEhA8VorTQxnm9RchmoN1r3dyWZG1M3nVvu&start_date=${start_date}&end_date=${end_date}`
    ).then((res) => res.json().then((data) => func(data.reverse())));
  } catch (error) {
    console.log(error);
  }
};
