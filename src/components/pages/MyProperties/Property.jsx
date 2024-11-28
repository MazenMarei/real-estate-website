import { useEffect, useState } from "react";
import { Col, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import {
  addProperties,
  getProperties,
  updateProperties,
} from "../../../Apis/properties";
import { setLoading } from "../../../slices/loadingSlice";
import Loading from "../../shared/LoadingPage";
import { useNavigate, useParams } from "react-router-dom";

export default function NewProperty() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [validated, setValidated] = useState(false);
  const [linkInput, setLinkInput] = useState("");
  const loading = useSelector((state) => state.loading);
  const [property, setProperty] = useState({
    title: "",
    description: "",
    price: "",
    type: "apartment",
    saleType: "for_sale",
    soled: false,
    bedrooms: 1,
    bathrooms: 1,
    garage: 0,
    aria: 50,
    city: "new_york",
    mapIframe: "",
    location: "",
    gallery: [],
    propertyImage: "",
    date: "",
    features: {
      Air_Conditioning: false,
      barbeque: false,
      dryer: false,
      gym: false,
      laundry: false,
      lawn: false,
      microwave: false,
      outdoor_Shower: false,
      refrigerator: false,
      sauna: false,
      swimming_Pool: false,
      tv_Cable: false,
      washer: false,
      wifi: false,
      window_Coverings: false,
    },
  });

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    if (form.checkValidity() === false) return setValidated(true);
    if (property.title.length < 10) {
      toast.error("Title must be at least 10 characters");
      return;
    }
    if (property.description.length < 20) {
      toast.error("Description must be at least 20 characters");
      return;
    }
    if (!property.price) {
      toast.error("Price is required");
      return;
    }
    if (property.price.length < 2) {
      toast.error("Price must be at least 2 characters");
      return;
    }

    if (property.aria < 50) {
      toast.error("Area must be at least 50");
      return;
    }

    if (property.location.length < 10) {
      toast.error("Location must be at least 10 characters");
      return;
    }

    if (property.mapIframe.length < 10) {
      toast.error("Map link must be at least 10 characters");
      return;
    }

    if (!property.propertyImage) {
      toast.error("Property image is required");
      return;
    }

    if (property.gallery.length === 0) {
      toast.error("Gallery images are required");
      return;
    }
    const formData = new FormData();
    property.date = new Date().getTime();

    Object.keys(property).forEach((key) => {
      if (key === "features") {
        Object.keys(property.features).forEach((feature) => {
          formData.append(`features[${feature}]`, property.features[feature]);
        });
      } else if (key === "gallery") {
        property.gallery.forEach((file) => {
          formData.append("gallery", file);
        });
      } else {
        formData.append(key, property[key]);
      }
    });

    if (id) {
      dispatch(updateProperties({ ...property })).then((response) => {
        dispatch(setLoading(false));
        if (response.payload.status !== 200) {
          return toast.error("Failed to update property");
        }
        toast.success("Property updated successfully");
        navigate("/my-properties");
      });
    } else {
      dispatch(addProperties(formData)).then((response) => {
        dispatch(setLoading(false));
        if (response.payload.status !== 201) {
          return toast.error("Failed to add property");
        }
        toast.success("Property added successfully");
        navigate("/my-properties");
      });
    }
  };

  useEffect(() => {
    /// if user enter to edit property
    if (id) {
      dispatch(setLoading(true));
      // fetch property by id
      dispatch(getProperties({ _id: id })).then((response) => {
        dispatch(setLoading(false));
        if (response.payload.status !== 200) {
          return toast.error("Failed to fetch property");
        }
        if(!response.payload.data.properties[0]) return navigate("/my-properties"); // if the user was not the property owner
        setProperty(response.payload.data.properties[0]);
        setLinkInput(response.payload.data.properties[0].mapIframe);
      });
    }
  }, [id , dispatch , navigate]);

  const toggleFeatures = () => {
    const allSelected = Object.values(property.features).every((value) => value);
    const updatedFeatures = Object.keys(property.features).reduce(
      (acc, key) => {
        acc[key] = !allSelected;
        return acc;
      },
      {}
    );

    setProperty({
      ...property,
      features: updatedFeatures,
    });
  };


  // update the photo data type in the state
  useEffect(() => {
    if (property.gallery.length === 0) {
      document.getElementById("propertyGallery").files =
        new DataTransfer().files;
      return;
    }
    if (!property.gallery?.name) return;

    const fileBuffer = new DataTransfer();
    property.gallery.forEach((file) => {
      fileBuffer.items.add(file);
    });

    document.getElementById("propertyGallery").files = fileBuffer.files;
  }, [property.gallery]);

  return (
    <section className="light-gray-bg">
      
      {loading && <Loading />}

      <div className="container p-5">
        <div className="row mb-5">
          <h2 className="fw-bold light-secondary-color">Add New Property</h2>
        </div>

        {/*------------------------------ property form ----------------------------- */}

        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          {/* /* -------------------------- Bacsic Infomation row ------------------------- */}

          <div className="row bg-white p-4 justify-content-center  rounded-3 gap-5 border border-1 mb-4">
            <h5 className="fw-bold light-secondary-color">Bacsic Infomation</h5>

            {/* /* ----------------------------- Property Title ----------------------------- */}

            <Form.Group className="mb-4">
              <Form.Label>
                Property Title <span className="primary-color">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Property Title"
                className="p-3"
                value={property.title}
                onChange={(e) =>
                  setProperty({ ...property, title: e.target.value })
                }
                required
              />
            </Form.Group>

            {/* /* ----------------------------- Property Type select menu ----------------------------- */}

            <Form.Group className="mb-4">
              <Form.Label>Property Type</Form.Label>
              <Form.Control
                as="select"
                className="p-3"
                required
                value={property.type}
                onChange={(e) =>
                  setProperty({ ...property, type: e.target.value })
                }
              >
                <option defaultValue={true} value={"apartment"}>
                  Apartment
                </option>
                <option value={"condo"}>Condo</option>
                <option value={"family_house"}>Family House</option>
                <option value={"modern_villa"}>Modern Villa</option>
                <option value={"town_house"}>Town House</option>
              </Form.Control>
            </Form.Group>

            {/* /* ----------------------------- Property Description ----------------------------- */}

            <Form.Group controlId="propertyDescription" className="mb-4">
              <Form.Label>
                Property Description <span className="primary-color">*</span>
              </Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Enter Property Description"
                rows={4}
                className="p-3"
                value={property.description}
                onChange={(e) =>
                  setProperty({ ...property, description: e.target.value })
                }
                required
              />
            </Form.Group>
          </div>

          {/* /* -------------------------- Additional row ------------------------- */}

          <div className="row bg-white p-4 justify-content-center  rounded-3 gap-5 border border-1 mb-4">
            <h5 className="fw-bold light-secondary-color mb-3">Additional</h5>

            {/* /* ------------------------ Additional first sub row ------------------------*/}

            <div className="row">
              {/* /* ------------------------ Property type select menu ----------------------- */}

              <Form.Group as={Col} md="4" className="mb-4">
                <Form.Label>
                  Property Status<span className="primary-color">*</span>
                </Form.Label>
                <Form.Select
                  as={Col}
                  md="4"
                  className="p-3"
                  value={property.saleType}
                  onChange={(e) =>
                    setProperty({ ...property, saleType: e.type })
                  }
                  required
                >
                  <option value={"for_sale"} defaultValue={true}>
                    For Sale
                  </option>
                  <option value={"for_sale"}>For Rent</option>
                </Form.Select>
              </Form.Group>

              {/* /* ------------------------ Property Price input ----------------------- */}

              <Form.Group as={Col} md="4" className="mb-4">
                <Form.Label>
                  Property Price ($) Or Custom
                  <span className="primary-color">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Example : 6000$ or by agreement"
                  className="p-3"
                  value={property.price}
                  onChange={(e) =>
                    setProperty({ ...property, price: e.target.value })
                  }
                  required
                />
              </Form.Group>

              {/* /* ------------------------ Property Area input ----------------------- */}

              <Form.Group as={Col} md="4">
                <Form.Label>
                  Home area (sqft) <span className="primary-color">*</span>
                </Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter Property Area"
                  className="p-3"
                  value={property.aria}
                  onChange={(e) =>
                    setProperty({ ...property, aria: e.target.value })
                  }
                  required
                />
              </Form.Group>
            </div>

            {/* /* ------------------------ Additional second sub row ------------------------*/}

            <div className="row">
              {/* /* ------------------------ Property Bedrooms input ----------------------- */}

              <Form.Group as={Col} md="4" className="mb-4">
                <Form.Label>
                  Bedrooms <span className="primary-color">*</span>
                </Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter Bedrooms"
                  className="p-3"
                  value={property.bedrooms}
                  onChange={(e) =>
                    setProperty({ ...property, bedrooms: e.target.value })
                  }
                  required
                />
              </Form.Group>

              {/* /* ------------------------ Property Bathrooms input ----------------------- */}

              <Form.Group as={Col} md="4">
                <Form.Label>
                  Bathrooms <span className="primary-color">*</span>
                </Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter Bathrooms"
                  className="p-3"
                  value={property.bathrooms}
                  onChange={(e) =>
                    setProperty({ ...property, bathrooms: e.target.value })
                  }
                  required
                />
              </Form.Group>

              {/* /* ------------------------ Property Garages input ----------------------- */}

              <Form.Group as={Col} md="4" className="mb-4">
                <Form.Label>
                  Garages <span className="primary-color">*</span>
                </Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter Garages"
                  className="p-3"
                  value={property.garage}
                  onChange={(e) =>
                    setProperty({ ...property, garage: e.target.value })
                  }
                  required
                />
              </Form.Group>
            </div>
          </div>

          {/* /* -------------------------- Location row ------------------------- */}
          <div className="row bg-white p-4 justify-content-center  rounded-3 gap-5 border border-1 mb-4">
            <h5 className="fw-bold light-secondary-color mb-3">Location</h5>

            {/* /* ------------------------ Location first sub row ------------------------*/}

            <div className="row">
              {/* /* ------------------------ Property City select menu ----------------------- */}

              <Form.Group as={Col} md="12" className="mb-4">
                <Form.Label>
                  City <span className="primary-color">*</span>
                </Form.Label>
                <Form.Select
                  placeholder="Enter City"
                  className="p-3"
                  value={property.city}
                  onChange={(e) =>
                    setProperty({ ...property, city: e.target.value })
                  }
                  required
                >
                  <option value={"new_york"} defaultValue={true}>
                    New York
                  </option>
                  <option value={"atlanta"} defaultValue={true}>
                    Atlanta
                  </option>
                  <option value={"florida"}>Florida</option>
                  <option value={"los_angeles"}>Los Angeles</option>
                  <option value={"miami"}>Miami</option>
                  <option value={"orlando"}>Orlando</option>
                </Form.Select>
              </Form.Group>

              {/* /* ------------------------ Property Location input -----------------------*/}

              <Form.Group as={Col} md="12" className="mb-4">
                <Form.Label>
                  Property Location <span className="primary-color">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Location"
                  className="p-3"
                  value={property.location}
                  onChange={(e) =>
                    setProperty({ ...property, location: e.target.value })
                  }
                  required
                />
              </Form.Group>

              {/* /* ------------------------ Property Google Maps Embed Link input -----------------------*/}

              <Form.Group as={Col} md="12" className="mb-4">
                <Form.Label>
                  Google Maps Embed Link
                  <span className="primary-color">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Address"
                  className="p-3"
                  required
                  value={linkInput}
                  onChange={(e) => {
                    setLinkInput(e.target.value);
                    const srcMatch = e.target.value.match(/src="([^"]+)"/);
                    if (srcMatch) {
                      setProperty({ ...property, mapIframe: srcMatch[1] });
                    }
                  }}
                />
              </Form.Group>
            </div>

            {/* /* ------------------------ Location second sub row ------------------------*/}

            <div className="row">
              {/* /* ------------------------ Property Map iframe -----------------------*/}

              {property.mapIframe && (
                <iframe
                  src={property.mapIframe}
                  title="PropertyLocation"
                  width="800"
                  height="600"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              )}
            </div>
          </div>

          {/* /* -------------------------- Media row ------------------------- */}
          <div className="row bg-white p-4 justify-content-center  rounded-3 gap-5 border border-1">
            <h5 className="fw-bold light-secondary-color mb-3">Media</h5>

            {/* /* --------------------------- Media first sub row -------------------------- */}

            <div className="row">
              {/* /* ------------------------ Property Image input ----------------------- */}

              <Form.Group className="mb-4 col-4" controlId="propertyImage">
                <Form.Label>
                  Property Image <span className="primary-color">*</span>
                </Form.Label>
                {property.propertyImage && (
                  <div className="position-relative">
                    <button
                      className="btn btn-danger position-absolute mt-2 ms-2"
                      type="button"
                      onClick={() => {
                        document.getElementById("propertyImage").value = null;
                        setProperty({ ...property, propertyImage: null });
                      }}
                    >
                      <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
                    </button>
                    <img
                      src={
                        property.propertyImage?.name
                          ? URL.createObjectURL(property.propertyImage)
                          : property.propertyImage
                      }
                      alt="property"
                      className="img-thumbnail mb-2"
                    />
                  </div>
                )}
                <Form.Control
                  type="file"
                  className="p-3"
                  required={property.propertyImage?.name ? true : false}
                  onChange={(e) => {
                    setProperty({
                      ...property,
                      propertyImage: e.target.files[0],
                    });
                  }}
                />
              </Form.Group>
            </div>

            {/* /* --------------------------- Media second sub row -------------------------- */}
            <div className="row">
              {/* /* ------------------------ Property Gallery input ----------------------- */}
              <Form.Group controlId="propertyGallery" className="mb-4">
                <Form.Label>
                  Property Gallery <span className="primary-color">*</span>
                </Form.Label>
                {property.gallery.length > 0 && (
                  <div className="d-flex flex-row gap-5">
                    {Array.from(property.gallery).map((file, index) => (
                      <div className="position-relative col-2" key={index}>
                        <button
                          className="btn btn-danger position-absolute mt-2 ms-2"
                          type="button"
                          onClick={() => {
                            setProperty({
                              ...property,
                              gallery: property.gallery.filter(
                                (_, i) => i !== index
                              ),
                            });
                          }}
                        >
                          <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
                        </button>
                        <div className="d-flex gap-2">
                          <img
                            src={file?.name ? URL.createObjectURL(file) : file}
                            alt="property"
                            className="img-thumbnail mb-2 w-100 h-100"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <Form.Control
                  type="file"
                  className="p-3"
                  required={property.gallery[0]?.name ? true : false}
                  multiple={true}
                  accept="image/*"
                  onChange={(e) => {
                    if (e.target.files.length > 5) {
                      e.target.value = null;
                      setProperty({ ...property, gallery: [] });
                      return toast.error(
                        "You can only upload 5 images for the gallery"
                      );
                    }
                    setProperty({
                      ...property,
                      gallery: [...e.target.files],
                    });
                  }}
                />
              </Form.Group>
            </div>
          </div>

          {/* /* -------------------------- Features row ------------------------- */}
          <div className="row bg-white p-4 justify-content-center  rounded-3 gap-5 border border-1 mt-4">
            <h5 className="fw-bold light-secondary-color mb-3">Features</h5>

            <div className="row">
              <div className="row pb-3">
                <span
                  className="primary-color col-12 col-sm-6 col-md-3 border-0"
                  type="button"
                  onClick={toggleFeatures}
                >
                  Select / Deselect All
                </span>
              </div>
              <div className="row">
                {Object.keys(property.features).map((amenity, index) => (
                  <div className="col-6 col-md-4" key={index}>
                    <Form.Check
                      type="checkbox"
                      label={amenity
                        .replaceAll(/_/g, " ")
                        .split(" ")
                        .join(" ")
                        .toLocaleUpperCase()}
                      value={property.features[amenity]}
                      onChange={(e) =>
                        setProperty({
                          ...property,
                          features: {
                            ...property.features,
                            [amenity]: e.target.checked,
                          },
                        })
                      }
                      checked={property.features[amenity]}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* /* ---------------------------- submit button row ---------------------------*/}

          <div className="row">
            <button
              type="submit"
              className="btn primary-bg text-white fs-5 mt-4"
            >
              <span>Submit Property</span>
            </button>
          </div>

        </Form>
      </div>
    </section>
  );
}
