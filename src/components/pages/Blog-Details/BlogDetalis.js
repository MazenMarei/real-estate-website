import breadcrumb from "../../../assets/images/bg-breadcrumb-min.jpg";
import bggVideoImg from "../../../assets/images/11-850x550.jpg";
import "../../../assets/css/blog.css";
import PageMainImage from "../../shared/PageMainImage";
import { Link } from "react-router-dom";


export default function BlogDetalis() {
  return (
    <>
      <PageMainImage title={"Blog Details"} image={breadcrumb} />

      <section className="blogDetail  pb-5 light-gray-bg">
      <div className="container h-100">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item mt-5"><Link className="text-decoration-none light-secondary-color" to={"/"}>Home</Link></li>
            <li
              className="breadcrumb-item active mt-5"
              style={{color: "#ff5a5e"}}
              aria-current="page"
            >
              single blog
            </li>
          </ol>
        </nav>
        <h1 className="fw-bold mb-5">Blog Details</h1>
        <div
          className="body row justify-content-center align-items-center h-150 text-center mt-5 p-2 rounded-4 position-relative" style={{ background: "white" }} 
        >
          <div className="blogbox col-12 mb-5 bg-white p-5 rounded rounded-4">
            <button className="btn btn-danger d-flex text-start mb-4">
              construction
            </button>
            <h2 className="text-start mb-4 fw-bold">
              Redfin Ranks The Most Compatitive Neighborhoods of 2020
            </h2>
            <h6 className="text-start mb-4">january 16, 2020</h6>
            
            <img
                src={bggVideoImg}
                alt="about us"
                className="img-fluid w-100 rounded-3"
              />
            <h6 className="text-start col-12 mb-4 mt-5" style={{ color: "#777" }} >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              mollis et sem sed sollicitudin. Donec non odio neque Aliquam
              hendrerit sollicitudin purus, quis rutrum mi accumsan nec. Quisque
              bibendum orci ac nibh facilisis, at malesuada orci congue. Nullam
              tempus sollicitudin cursus. Ut et adipiscing erat Curabitur this
              is a text link libero tempus congue.
            </h6>
            <h6 className="text-start col-12  mb-4" style={{ color: "#777" }}>
              Duis mattis laoreet neaue. et ornare neque sollicitudin at. Proin
              sagitis dolor sed mi elementum pretium. Donec et justo ante.
              Vivamus egestas sodales est, eu rhoncus urna semper eu. Cum sociis
              natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Integer tristique elit lobortis purus bibendum,
              quis dictum metus mattis. Phasellus posuere felis sed eros
              porttitor mattis. Curabitur massa magna tempor in blandit id,
              porta in ligula. Aliquam laoreet nisl massa N interdum mauris
              sollicitudin et.
            </h6>
            <h5 className="fw-bold text-start col-12 mt-5 mb-5">
              Housing Markets That Changed the Most This Decade
            </h5>
            <h6 className="text-start col-12" style={{ color: "#777" }}>
              Nullam tempus solicitudin cursus. Nulla elit mauris, volutpat eu
              varius malesuada, pulvinar eu ligula. Ut et adipiscing erat.
              Curabitur adipiscing erat vel libero tempus congue. Nam pharetra
              interdum vestibulum. Aenean gravida mi non aliquet porttitor.
              Praesent dapibus, nisi a faucibus tincidunt, quam dolor
              condimentum metus, in convallis libero ligula ut eros
            </h6>
            <h6 className="text-start col-12 mb-4" style={{ color: "#777" }}>
              Curabitur massa magna, tempor in blandit id, porta in ligula.
              Aliquam laoreet nisl massa at interdum mauris sollicitudin et.
              Mauris risus lectus, tristique at nisl at, pharetra tristique
              enim.
            </h6>
            <h6 className="text-start col-12 mb-2" style={{ color: "#777" }}>
              Nullam this is a link nibh facilisis, at malesuada orci congue.
              Nullam tempus sollicitudin cursus. Nulla elit mauris, volutpat eu
              varius malesuada, pulvinar eu ligula. Ut et adipiscing erat.
              Curabitur adipiscing erat vel libero tempus congue. Nam pharetra
              interdum vestibulum. Aenean gravida mi non aliquet porttitor.
              Praesent dapibus, nisi a faucibus tincidunt, quam dolor
              condimentum metus, in convallis libero ligula ut eros.
            </h6>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}