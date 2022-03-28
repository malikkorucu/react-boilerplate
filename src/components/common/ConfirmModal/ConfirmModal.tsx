import { Button } from "@mui/material";
import clsx from "clsx";
import { FC, useRef, useState } from "react";
import "./modal.style.scss";

export const ConfirmModal: FC<any> = ({ children }) => {
  const refContainer = useRef(null) as any;
  const refContent = useRef(null) as any;

  const closeModal = () => {
    refContainer.current.classList.add("before-close");
    refContent.current.classList.add("before-close");
    setTimeout(() => {
      refContent.current.classList.remove("show");
      refContainer.current.classList.remove("show");
      refContainer.current.classList.remove("before-close");
      refContent.current.classList.remove("before-close");
    }, 200);
  };

  const onBackdropClick = (e: any) => {
    if (e.target.classList.contains("ConfirmModal-container")) {
      closeModal();
    }
  };

  return (
    <div
      id="confirm_modal"
      ref={refContainer}
      onClick={(e) => onBackdropClick(e)}
      className="ConfirmModal-container"
    >
      <div
        id="confirm_modal_content"
        ref={refContent}
        className="ConfirmModal-content"
      >
        <div className="ConfirmModal-header">
          <h4 id="confirm_modal_title">Burası Title Alanı</h4>
        </div>
        <div className="ConfirmModal-body" id="confirm_modal_body"></div>
        <div className="ConfirmModal-footer px-3">
          <div className="row">
            <div className="col-md-6">
              <Button id="dismiss_btn" onClick={closeModal} variant="contained">
                Close
              </Button>
            </div>
            <div id="ok_btn" className="col-md-6 ">
              <Button onClick={closeModal} variant="contained">
                Ok
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
