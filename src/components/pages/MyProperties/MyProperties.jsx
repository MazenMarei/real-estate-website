import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faPlus } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useDispatch , useSelector} from "react-redux";
import { getProperties } from "../../../Apis/properties";
import PropertySlide from "./propertySlide";

export default function MyProperties() {

  
  const dispatch = useDispatch();
  const [properties , setProperties] = useState([]);
  const userInformation = useSelector(state => state.userInfo);
  
  /// Get the properties of the user
  useEffect(() => { 
    dispatch(getProperties({owner : userInformation.id})).then((response) => { 
      if(response.payload.status !== 200) return;
      setProperties(response.payload.data.properties);
    })
  }, [dispatch , userInformation]);
  return (
    <>
      <section className="light-gray-bg">
        <div className="container pb-5">
          {/* /* ------------------------------- header row ------------------------------- */}
          <div className="row my-4 ">
            <div className="col-sm-6 col-12">
              <h2 className="fw-bold light-secondary-color">
                My Properties
              </h2>
            </div>

            <div className="col-sm-6 col-12 justify-content-md-end d-flex h-50">
              <Link to="new">
                <button className="btn primary-bg text-white fs-5">
                  <FontAwesomeIcon icon={faPlus} /> <span>Submit Property</span>
                </button>
              </Link>
            </div>
          </div>

          {/* /* ------------------------------- properties table row ------------------------------- */}
          <div className="row bg-white p-4 justify-content-center  rounded-3 gap-5 border border-1">
            {/* /* ------------------------ properties table head row ----------------------- */}
            <div className="row secondary-bg p-2 rounded-3 text-white fw-bold">

              <div className="col-md-2 col-4 py-2">
                <p className="my-0">Image</p>
              </div>

              <div className="col-md-4 col-5 py-2">
                <p className="my-0">Information</p>
              </div>

              <div className="col-2 py-2 d-none d-lg-block">
                <p className="my-0">Expiry</p>
              </div>

              <div className="col py-2 d-none d-md-block">
                <p className="my-0">Likes</p>
              </div>

              <div className="col-2 py-2">
                <p className="my-0">Action</p>
              </div>
            </div>
              {/* /* -------- check if user posts properties and loop it to display it -------- */}
              {properties.length > 0 ? properties.map((e ,i) => (
                <PropertySlide image={`${e.propertyImage}`} title={e.title} price={e.price} date={e.date} location={e.location} key={e._id} id={e._id} />
              )) : (
                <>
                <h4 className="text-center">NO PROPERTIES YET</h4>
                </>
              )}
          </div>
        </div>
      </section>
    </>
  );
}
