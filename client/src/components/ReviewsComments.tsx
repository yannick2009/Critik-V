import "./styles/ReviewComments.scss";
import Comment from "./Comment";

export default function ReviewsComments(): JSX.Element {
  return (
    <div className="reviews__comments">
      <div className="reviews__comments__list">
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </div>
      <div className="reviews__comments__form">
        <form>
          <input
            placeholder="Donne ton avis sur ce CV"
            type="text"
            name=""
            id=""
          />
          <button type="submit">
            <i className="fa-solid fa-comments"></i>
          </button>
        </form>
      </div>
    </div>
  );
}
