import {
  faCalendar,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-regular-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { deleteProperties } from "../../../Apis/properties";
import { setLoading } from "../../../slices/loadingSlice";
import { useDispatch } from "react-redux";
import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
export default function PropertySlide({
  image,
  title,
  date,
  location,
  price,
  id,
}) {
  const [show, setShow] = useState(false);

  const deleteProperty = () => {
    setShow(true);
  };

  return (
    <>
      {/* /* ------------------------- show make sure message ------------------------- */}
      {show && (
        <SureMsg
          message="Are you sure you want to delete this property?"
          show={show}
          setShow={setShow}
          id={id}
        />
      )}

      {/* /* ------------------------- property slide ------------------------- */}
      <div className="row p-0 border-bottom pb-3">
        {/* /* ------------------------ property image ----------------------- */}
        <div className="col-4 col-md-2 p-0 align-items-center d-flex">
          <Link to="/property-details">
            <div className="div">
              <img
                src={image}
                alt="property thumbnail"
                className="img-thumbnail p-0"
              />
            </div>
          </Link>
        </div>
        {/* /* ----------------------------- property title ----------------------------- */}
        <div className="col-5 col-md-4">
          <div className="row">
            <div className="col d-flex flex-column gap-1 res-text">
              <p className="fw-bold m-0">
                <Link
                  className="text-decoration-none light-secondary-color fw-bold fs-5 primary-color-hover "
                  to={`${id}`}
                >
                  {title}
                </Link>
              </p>
              <p className="text-secondary m-0 res-text">
                <FontAwesomeIcon icon={faCalendar} />
                <span className="ms-2">{new Date(date).toDateString()}</span>
              </p>
              <p className="text-secondary m-0 res-text">
                <FontAwesomeIcon icon={faLocationDot} />
                <span className="ms-2">{location}</span>
              </p>
              <p className="text-secondary m-0 primary-color fw-bold fs-5 res-text">
                {Number(price) ? `$${price}` : "Not for sale"}
              </p>
            </div>
          </div>
        </div>

        {/* /* ------------------------ property expiry date ----------------------- */}
        <div className="col-md-2 d-flex flex-column justify-content-center d-none d-lg-flex">
          <p className="text-secondary m-0 primary-color">
            {new Date(
              new Date(date).setFullYear(new Date(date).getFullYear() + 6)
            ).toDateString()}
          </p>
        </div>
        
        {/* /* ------------------------ property likes ----------------------- */}
        <div className="col d-flex flex-column justify-content-center d-none d-md-flex">
          <p className="m-0">156</p>
        </div>
        
        {/* /* ------------------------ property action ----------------------- */}
        <div className="col-2 d-flex flex-column justify-content-center">
          <div className="row">
            <div className="col-6">
              <Link to={`${id}`} className="primary-color-hover">
                <button className="btn light-gray-bg">
                  <FontAwesomeIcon icon={faPenToSquare} />
                </button>
              </Link>
            </div>
            <div className="col-6">
              <button
                className="btn light-gray-bg primary-color-hover"
                onClick={deleteProperty}
              >
                <FontAwesomeIcon icon={faTrashCan} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


/// sure message component
function SureMsg({ message, show, setShow, id }) {
  const handleClose = () => setShow(false);
  const dispatch = useDispatch();
  const deleteProperty = () => {
    dispatch(setLoading(true));
    dispatch(deleteProperties(id)).then((response) => {
      dispatch(setLoading(false));
      setShow(false);
      if (response.payload.status !== 200) return;
      window.location.reload();
    });
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Delete Property</Modal.Title>
        </Modal.Header>
        <Modal.Body className="fs-2">{message}</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={deleteProperty}>
            Delete
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
