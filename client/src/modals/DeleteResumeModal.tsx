import { modalContext } from "@context/store";
import "./styles/Modal.scss";

export default function DeleteResumeModal() {
  // ============ VARIABLES ============ //
  const hide = modalContext((state) => state.hide);
  // ============ FUNCTIONS ============ //
  const hideModal = () => hide();
  // ============ RENDER ============ //
  return (
    <div id="modal">
      <div className="header">
        <p></p>
        <button onClick={hideModal}>
          <i className="fa-solid fa-xmark"></i>+
        </button>
      </div>
    </div>
  );
}
