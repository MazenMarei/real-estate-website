import { Link } from "react-router-dom";

export default function BlogCard({title,date,blogimage,desc,author,id}) {
  return (
    <div className="col-lg-4 col-md-6 col-sm-10 offset-sm-2 p-card m-2 rounded-4 p-0" style={{ background: "white" }}>
      <div className="image d-flex position-relative justify-content-center align-items-center overflow-hidden p-2">
        <img src={blogimage} alt="about us" className="img-fluid w-100 rounded-4 h-auto d-block " />
        <div className="label position-absolute rounded-1 p-1 text-bg-danger" style={{ background: "#ff5a5e" }}>Feature</div>
      </div>
      <div className="content m-3">
        <h4 className="mb-3 fw-bold fs-5">
        <Link className="text-decoration-none gray-text-color  primary-color-hover" to={"./" + id}>
        {title}
        </Link>
        </h4>
        <h6 className="mb-3 position-relative" style={{ color: "#777" }}>{date}</h6>
        <h6 className="special mb-5 position-relative" style={{ color: "#777" }}>
          {desc}
        </h6>
        <h6 className="ali position-relative border-top pt-4 m-2" style={{ color: "#777" }}>{author}</h6>
        <h6 className="mb-3 text-end position-relative" style={{ color: "#777" }} >
          <Link className="text-decoration-none position-relative more" style={{ color: "#ff5a5e" }}to={"./" + id}>
            Read More
          </Link>
        </h6>
      </div>
    </div>
  );
}
