import "./styles/Modal.scss";
import { modalContext } from "@context/store";
import { Fragment } from "react";
import ReactDOM from "react-dom";
import ResumeInfoModal from "./ResumeInfoModal";
import SetResumeModal from "./SetResumeModal";
import DeleteResumeModal from "./DeleteResumeModal";
const overlayElement = document.getElementById("overlays");

export function Backdrop(): JSX.Element {
  const hideModal = modalContext((state) => state.hide);
  return <section onClick={() => hideModal()} id="backdrop"></section>;
}

export default function Modal(): JSX.Element {
  // ========= VAIRABLES =========== //
  const { layout } = modalContext((state) => state);
  // ========= RENDER =========== //
  return (
    <Fragment>
      {overlayElement && ReactDOM.createPortal(<Backdrop />, overlayElement)}
      {overlayElement &&
        ReactDOM.createPortal(
          <Fragment>
            {layout === "INFO_RESUME" && <ResumeInfoModal />}
            {layout === "SET_RESUME" && <SetResumeModal />}
            {layout === "DELETE_RESUME" && <DeleteResumeModal />}
          </Fragment>,
          overlayElement
        )}
    </Fragment>
  );
}
