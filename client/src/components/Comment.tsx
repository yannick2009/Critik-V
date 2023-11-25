import "./styles/Comment.scss";

export default function Comment() {
  return (
    <div className="comment">
      <div className="comment__header">
        <p>ID-78d5d5zd5fsd5ad5da5ad5ad1849da</p>
        <p>25/11/2023, 00:21</p>
      </div>
      <div className="comment__content">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium
          iure dolorem, expedita accusamus at nam quos aspernatur odit, dolore
          quo vero ex, ut perferendis incidunt. Ipsa eius quisquam ducimus
          voluptates?
        </p>
      </div>
      <div className="comment__like">
        <p>13</p>
        <button>
          {/* <i className="fa-solid fa-heart"></i> */}
          <i className="fa-regular fa-heart"></i>
        </button>
      </div>
    </div>
  );
}
