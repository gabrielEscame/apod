/* eslint-disable react/no-unescaped-entities */

import { Fragment } from "react";

const Modal = ({
  isActive,
  onClose,
  title,
  copyright,
  date,
  media,
  explanation,
}) => {
  const modalClassName = `modal ${
    isActive ? "modal--active" : ""
  }`;

  const overlayClassName = `overlay ${
    isActive ? "overlay--active" : ""
  }`;

  return (
    <Fragment>
      <div className={overlayClassName} onClick={onClose} />
      <div className={modalClassName}>
        <div className="modal__header">
          <div className="modal__block">
            <h1 className="modal__title">{title}</h1>
            <p className="modal__copyright">{copyright}</p>
            <p className="modal__date">{date}</p>
          </div>
          <button className="modal__close" onClick={onClose} />
        </div>

        <div className="modal__content">
          <div
            className="modal__media"
            style={{ backgroundImage: `url(${media})` }}
          />
          <div className="modal__explanation">{explanation}</div>
        </div>
      </div>
    </Fragment>
  );
};

export default Modal;
