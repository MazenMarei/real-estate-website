import { Link } from "react-router-dom";



export default function ArticleCard({ title , date , author , category  , image  , authorImage , id}) {
    
    return (
        <div className="h-100 card pt-2 p-0 gray-border border-0">
        {/* <!-- -------------------------- image card -------------------------- --> */}
        <div className="px-2">
          <div className="slide position-relative overflow-hidden rounded-3">
            <div className="carousel-item active">
              <img
                src={image}
                className="d-block w-100"
                alt="property"
              />
            </div>
          </div>
        </div>

        {/* <!-- ----------------------------- card body ----------------------------- --> */}
        <div className="card-body">
          <div className="card-title">
            <p className="primary-color fw-semibold fs-5 text-capitalize">
              {category}
            </p>
            <Link to={"#"} className="text-decoration-none">
              <h4 className="gray-text-color fw-bold text-capitalize primary-color-hover">
                {title}
              </h4>
            </Link>
          </div>
        </div>

        {/* <!-- ----------------------------- card footer ----------------------------- --> */}
        <div className="card-footer bg-transparent">
          <div className="row p-3 px-1">
            {/* <!-- ----------------------------- profile row ----------------------------- --> */}
            <div className="d-flex flex-row col-7 gap-2">
              <div className="col-3 rounded-circle p-1">
                <img
                  src={authorImage}
                  alt="profile"
                  className="rounded-circle w-100"
                />
              </div>
              <div className="col-8 h-100 d-flex align-items-end pt-3">
                <p className="text-capitalize gray-text-color">
                  {author}
                </p>
              </div>
            </div>
            {/* <!-- --------------------------- posted time row --------------------------- --> */}
            <div className="d-flex col-5 align-items-end justify-content-end">
              <p className="p-0">{date}</p>
            </div>
          </div>
        </div>
      </div>
    );
}