/* eslint-disable react/no-unescaped-entities */
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
        const mediaTitle =
          e?.title?.length <= 30 ? e.title : `${e.title.slice(0, 30)}...`;
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
            <p className="apod-container__title">{mediaTitle}</p>
          </div>
        );
      })}
      <div className="apod-container__overflow"></div>
      <div className="apod-container__modal modal">
        <div className="modal__header">
          <div className="modal__block">
            <h1 className="modal__title">A paper moon solar solar eclipse</h1>
            <p className="modal__copyright">Wang LetianEyes at Night</p>
            <p className="modal__date">06/28/2021</p>
          </div>
          <button className="modal__close" />
        </div>

        <div className="modal__content">
          <div className="modal__media" />
          <div className="modal__description">
            Few cosmic vistas excite the imagination like the Orion Nebula. Also
            known as M42, the nebula's glowing gas surrounds hot young stars at
            the edge of an immense interstellar molecular cloud only 1,500
            light-years away. The Orion Nebula offers one of the best
            opportunities to study how stars are born partly because it is the
            nearest large star-forming region, but also because the nebula's
            energetic stars have blown away obscuring gas and dust clouds that
            would otherwise block our view - providing an intimate look at a
            range of ongoing stages of starbirth and evolution. The featured
            image of the Orion Nebula is among the sharpest ever, constructed
            using data from the Hubble Space Telescope. The entire Orion Nebula
            spans about 40 light years and is located in the same spiral arm of
            our Galaxy as the Sun.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
