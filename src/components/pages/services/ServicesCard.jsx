
export default function ServicesCard({image,title }) {
  return (
    <div className="card col-lg-3 pt-2 col-md-5 col-sm-11 ">
      <img
        src={image}
        className="card-img-top
    rounded-2 "
        alt="..."
      />
      <div className="card-body">
        <p className="card-text">
          {title}
        </p>
      </div>
    </div>
  );
}
