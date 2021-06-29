/* eslint-disable react/no-unescaped-entities */

import { Fragment } from "react";

const Modal = ({ isActive, onClose }) => {
  const modalClassName = `apod-container__modal modal ${
    isActive ? "modal--active" : ""
  }`;

  const overlayClassName = `apod-container__overlay ${
    isActive ? "apod-container__overlay--active" : ""
  }`;

  return (
    <Fragment>
      <div className={overlayClassName} onClick={onClose} />
      <div className={modalClassName}>
        <div className="modal__header">
          <div className="modal__block">
            <h1 className="modal__title">A paper moon solar solar eclipse</h1>
            <p className="modal__copyright">Wang LetianEyes at Night</p>
            <p className="modal__date">06/28/2021</p>
          </div>
          <button className="modal__close" onClick={onClose} />
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
    </Fragment>
  );
};

export default Modal;
