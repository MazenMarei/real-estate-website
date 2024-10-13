import mainHomeImage from "../../../assets/images/1.jpg";



export default function HomeMainImage() {
  return (
    <section id="homeMainImage">
      <div className="container-fluid p-0 position-relative w-100">
        {/* <!-- --------------------- main image div --------------------- --> */}
        <div className="position-relative w-100">
          <img src={mainHomeImage} alt="main-image" className="img-fluid" />
        </div>

        {/* <!-- --------------------- overlay dark background div --------------------- --> */}
        <div className="overlay-dark-bg h-100 w-100 position-absolute top-0"></div>

        {/* <!-- --------------------- main image content div --------------------- --> */}
        <div className="container position-absolute top-50 start-50 translate-middle w-100">
          <div className="row text-center text-white">
            <h1 className="text-capitalize fw-bold">find your dream home</h1>
            <p className="fs-5 fw-semibold">
              From as low as $10 per day with limited time offer discounts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
