import breadcrumb from "../../../assets/images/bg-breadcrumb-min.jpg";
import bgVideoImg from "../../../assets/images/bg-video.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faXmark } from "@fortawesome/free-solid-svg-icons";
import "../../../assets/css/about-us.css";
import { Modal } from "react-bootstrap";
import { useState } from "react";
import OurPartners from "../../shared/OurPartners";
import PageMainImage from "../../shared/PageMainImage";

export default function About() {

  const [show, setShow] = useState(false);
  const [autoplay, setAutoplay] = useState(1);

  const handleClose = () => {
    setShow(false);
    setAutoplay(0);
  };
  const handleShow = () => {
    setShow(true);
    setAutoplay(1);
  };

  return (
    <>

      <PageMainImage image={breadcrumb} />

      <section id="aboutUs">

        <div className="container pt-5 p-0">

          <div className="row pt-5 p-0 w-100 mx-auto">
            {/* /* ------------------------ about us lef side content -----------------------  */}
            <div className="col-lg-7 col-12 d-flex flex-column gap-4 py-5 p-0 ps-2">
              <p className="gray-text-color fs-5 fw-bold">
                Maurice ac consectetur ante, dapibus gravida tellus. Nollam
                aliquet eleifend dapibus. Crass sagitis, ex euismod lacinia
                tempor.
              </p>
              <p className="gray-text-color fs-6 lh-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Why
                does this ligula eu lectus vulputate porttitor sed feugiat nunc.
                Maurice ac consectetur ante, dapibus gravida tellus. Nollam
                aliquet eleifend dapibus. Crassus vulgaris, ex euismod lacinia
                tempor, lectus orci elementum augue, get auctor metus ante sit
                amet velit.
              </p>
              <p className="gray-text-color fs-6 lh-lg">
                What happens now, and is legally binding. Name congue augue and
                ex congue, sed luctus lectus congue. Integer convallis
                condimentum sem. Duis elementum tortor eget condimentum tempor.
                Prayersent solicitudin lectus ut pulvinar pharetra. Donec and
                libero ligula. Vivamus semper at orci at placerat.Placeat Lorem
                ipsum dolor sit amet, consectetur adipisicing elit. Quoted
                libero amet, laborum qui nulla quae alias tempora.
              </p>
            </div>
            {/* /* ------------------------ about us right side video -----------------------  */}
            <div className="col-lg-5 col-12 py-5 position-relative">
              <img
                src={bgVideoImg}
                alt="about us"
                className="img-fluid w-100"
              />
              <div className="position-absolute top-50 start-50 translate-middle popup-video">
                <button
                  className="btn primary-bg rounded-circle d-flex flex-row justify-content-center align-items-center w-100 h-100 border-0 "
                  onClick={handleShow}
                >
                  <FontAwesomeIcon icon={faPlay} className="text-white fs-1" />
                </button>
              </div>
            </div>
          </div>
          {/* <!-- Modal --> */}
          <Modal
            show={show}
            onHide={handleClose}
            contentClassName="bg-transparent border-0"
            dialogClassName="bg-transparent border-0"
            size="lg"
            centered={true}
          >
            <Modal.Header className="bg-transparent border-0 p-0 justify-content-end">
              <button
                type="button"
                className="btn text-white fs-3 border-0"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={handleClose}
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </Modal.Header>
            <Modal.Body className="bg-transparent p-0">
              <iframe
                width="100%"
                height="500"
                src={`https://www.youtube.com/embed/aQlkVB9LZPk?si=HqzsfrYD8IjkEPo_&autoplay=${autoplay}`}
                id="aboutUsVideo"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </Modal.Body>
          </Modal>
        </div>
      </section>

      <OurPartners />
      
    </>
  );
}
