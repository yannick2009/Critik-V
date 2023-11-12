import "./styles/Resume.scss";

export default function Resume() {
  return (
    <div id="resume">
      <div className="part__1">
        <div className="part__1__label">
          <p>Applying for software Engineer internship</p>
        </div>
        <div className="part__1__info">
          <p>
            <i className="fa-solid fa-briefcase"></i>Stage
          </p>
          <p>
            <i className="fa-solid fa-graduation-cap"></i>Debutant (0 - 2 ans)
          </p>
        </div>
      </div>
      <div className="part__2">
        <p>
          <i className="fa-regular fa-message"></i>23
        </p>
        <p>
          <i className="fa-regular fa-star"></i>10
        </p>
      </div>
      <div className="part__3">
        <p>Uploadé il y a 1 jour par Yannick KOUAKOU</p>
        <p>Côte d'Ivoire</p>
      </div>
      <div className="part__4">
        <button>
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
}
