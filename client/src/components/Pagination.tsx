import "./styles/Pagination.scss";

export default function Pagination(): JSX.Element {
  return (
    <div className="pagination">
      <button>
        <i className="fa-solid fa-caret-left"></i>
      </button>
      <button disabled style={{ cursor: "default" }}>
        1
      </button>
      <button>
        <i className="fa-solid fa-caret-right"></i>
      </button>
    </div>
  );
}
