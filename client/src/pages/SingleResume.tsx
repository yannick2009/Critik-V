import ReviewsComments from "@components/ReviewsComments";
import "./styles/SingleResume.scss";
import resumePDF from "@assets/docs/resume.pdf";
import { modalContext } from "@context/store";

export default function SingleResume(): JSX.Element {
  // ========= VARIABLE ========== //
  const show = modalContext((state) => state.show);
  // ========= FUNCTIONS ========== //
  const showModal = () => show({ layout: "INFO_RESUME", data: {} });
  // ========= RENDER ========== //
  return (
    <section id="singleResume">
      {/* ======= PDF VIEW IN THIS SECTION ======= */}
      <div className="pdf_viewer">
        <embed
          src={`${resumePDF}#toolbar=1&navpanes=0`}
          type="application/pdf"></embed>
      </div>
      {/*======= REVIEW BY OTHERS ON THE RESUME | MY REVIEWS ======= */}
      <div className="reviews">
        <div className="reviews__header">
          <button className="info" onClick={showModal}>
            <i className="fa-solid fa-circle-info"></i> En savoir plus
          </button>
          <button className="like">
            <i className="fa-regular fa-star"></i> Liker
          </button>
        </div>
        <ReviewsComments />
      </div>
    </section>
  );
}
