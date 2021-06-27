/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { get } from "../service/apod";
import { dateToApi } from "../utils";

const Home = () => {
  const [data, setData] = useState([]);

  const NOOP = () => null;

  const startDate = new Date();
  startDate.setDate(startDate.getDate() - 20);
  const formatedStartDate = dateToApi(startDate);

  useEffect(() => {
    get(setData, formatedStartDate);
  }, []);

  return (
    <div className="apod-container">
      {data.map((e, idx) => {
        return (
          <div key={idx} className="apod-container__block">
            <figure className="apod-container__figure">
              {e.media_type === "image" ? (
                <img
                  className="apod-container__content"
                  src={e.url}
                  alt={e.title}
                />
              ) : (
                <iframe
                  className="apod-container__content"
                  src={e.url}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
            </figure>
            <p className="apod-container__author">{e.copyright ? e.copyright : e.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
