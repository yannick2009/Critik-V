import "./styles/SingleResume.scss";
// import resumePDF from "@assets/docs/resume.pdf";

export default function SingleResume(): JSX.Element {
  // RETUN
  return (
    <section id="singleResume">
      {/* PDF VIEW IN THIS SECTION */}
      <div className="pdf_viewer">
        {/* <object
          data={`${resumePDF}#toolbar=1&zoom=70`}
          type="application/pdf"></object> */}
      </div>
      {/* REVIEW BY OTHERS ON THE RESUME | MY REVIEWS */}
      <div className="reviews">
        <div className="reviews_header">
          <div className="reviews_header_switcher">
            <button>informations</button>
            <button>Commentaires</button>
          </div>
          <button className="like">
            <i className="fa-regular fa-star"></i> Liker
          </button>
        </div>
      </div>
    </section>
  );
}
