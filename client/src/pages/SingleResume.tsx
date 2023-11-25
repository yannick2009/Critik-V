import ReviewsComments from "@/components/ReviewsComments";
import "./styles/SingleResume.scss";

export default function SingleResume(): JSX.Element {
  // RETUN
  return (
    <section id="singleResume">
      {/* PDF VIEW IN THIS SECTION */}
      <div className="pdf_viewer"></div>
      {/* REVIEW BY OTHERS ON THE RESUME | MY REVIEWS */}
      <div className="reviews">
        <div className="reviews__header">
          <button className="info">
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
