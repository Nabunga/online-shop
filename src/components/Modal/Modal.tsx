import React, { FC } from "react";
import "./Modal.scss";

interface ModalState {
  active: boolean;
  setActive: (arg0: boolean) => void;
  children: React.ReactNode | React.ReactChild
}

const Modal: FC<ModalState> = ({ active, setActive, children }) => {
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "modal__content active" : "modal__content"}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;