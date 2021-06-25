/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { get } from "../service/apod";
import { dateToApi } from "../utils";

const Home = () => {
  const [data, setData] = useState([]);

  const NOOP = () => null;

  const startDate = new Date();
  startDate.setMonth(startDate.getMonth() - 2);
  const formatedStartDate = dateToApi(startDate);

  useEffect(() => {
    get(setData, formatedStartDate);
  }, []);

  return (
    <div className="container">
      {data.map((e, idx) => {
        return (
          <figure key={idx}>
            {e.media_type === "image" ? (
              <img src={e.url} alt={e.title} />
            ) : (
              <NOOP />
            )}
          </figure>
        );
      })}
    </div>
  );
};

export default Home;
