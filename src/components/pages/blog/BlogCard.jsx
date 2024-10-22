import { Link } from "react-router-dom";

export default function BlogCard({title,date,blogimage,desc,author,id}) {
  return (
    <div className="col-lg-4 col-md-6 col-sm-10 offset-sm-2 p-card">
      <div className="image">
        <img src={blogimage} alt="about us" className="img-fluid w-100" />
        <div className="label text-bg-danger">Feature</div>
      </div>
      <div className="content">
        <h4 className="mb-3">
        <Link className="text-decoration-none gray-text-color  primary-color-hover" to={"./" + id}>
        {title}
        </Link>
        </h4>
        <h6 className="mb-3">{date}</h6>
        <h6 className="spicial mb-5">
          {desc}
        </h6>
        <h6 className="ali">{author}</h6>
        <h6 className="mb-3 text-end">
          <Link className="text-decoration-none more" to={"./" + id}>
            Read More
          </Link>
        </h6>
      </div>
    </div>
  );
}
