import { Button } from "@mui/material";
import clsx from "clsx";
import { FC, useRef } from "react";
import "./modal.style.scss";

export const Modal: FC<any> = ({ show, setShow, children }) => {
  const handleClose = () => setShow(false);

  const refContainer = useRef(null) as any;
  const refContent = useRef(null) as any;

  const closeModal = () => {
    refContainer.current.classList.add("before-close");
    refContent.current.classList.add("before-close");
    setTimeout(() => {
      setShow(false);
    }, 200);
  };
  
  const onBackdropClick = (e: any) => {
    if (e.target.classList.contains("Modal-container")) {
      closeModal();
    }
  };

  return (
    <div
      ref={refContainer}
      onClick={(e) => onBackdropClick(e)}
      className={clsx("Modal-container", { show })}
    >
      <div ref={refContent} className={clsx("Modal-content", { show })}>
        <div className="Modal-header">
          <h4>Burası Title Alanı</h4>
        </div>
        <div className="Modal-body">{children}</div>
        <div className="Modal-footer px-3">
          <div className="row">
            <div className="col-md-6">
              <Button onClick={closeModal} type="submit" variant="contained">
                Close
              </Button>
            </div>
            <div className="col-md-6 ">
              <Button onClick={closeModal} type="submit" variant="contained">
                Ok
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
