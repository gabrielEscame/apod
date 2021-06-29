/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */

import { useEffect, useState } from "react";

import { get } from "../service/apod";
import { dateToApi, formatDate } from "../utils";
import Modal from "../components/Modal";

const Home = () => {
  const [data, setData] = useState([]);
  const [isModalActive, setIsModalActive] = useState(false);
  const [modalData, setModalDate] = useState({});
  
  const bodyRef = document.querySelector("body");

  const handleOpenModal = () => {
    setIsModalActive(true);
    bodyRef.classList.add("no-scroll");
  };

  const handleCloseModal = () => {
    setIsModalActive(false);
    bodyRef.classList.remove("no-scroll");
  };

  const handleMediaAction = (mediaInformations) => () => {
    setModalDate({
      ...mediaInformations,
      date: formatDate(mediaInformations.date),
    });
    handleOpenModal();
  };

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
        const mediaInformations = {
          title: e.title,
          copyright: e.copyright ? e.copyright : "No copyright",
          date: e.date,
          media: e.url,
          explanation: e.explanation,
        };
        return (
          <div key={idx} className="apod-container__block">
            <figure
              className="apod-container__figure"
              onClick={handleMediaAction(mediaInformations)}
            >
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
      <Modal
        isActive={isModalActive}
        onClose={handleCloseModal}
        {...modalData}
      />
    </div>
  );
};

export default Home;
