import PageMainImage from "../../shared/PageMainImage";
import Breadcrumb from "../../../assets/images/bg-breadcrumb-min.jpg";
import img1 from "../../../assets/images/8-850x550.jpg"
import img2 from "../../../assets/images/8-850x550.jpg"
import img3 from "../../../assets/images/5.jpg"
import img4 from "../../../assets/images/5-850x550.jpg"
import img5 from "../../../assets/images/6.jpg"
import img6 from "../../../assets/images/11-850x550.jpg"
import img7 from "../../../assets/images/7.jpg"
import img8 from "../../../assets/images/17-850x550.jpg"
import img9 from "../../../assets/images/8.jpg"
import img10 from "../../../assets/images/12-1-850x550.jpg"
import img11 from "../../../assets/images/9.jpg"
import img12 from "../../../assets/images/9-850x550.jpg"
import img13 from "../../../assets/images/5.jpg"
import img14 from "../../../assets/images/16-850x550.jpg"
import img15 from "../../../assets/images/6.jpg"
import img16 from "../../../assets/images/22-850x550.jpg"
import img17 from "../../../assets/images/7.jpg"
import img18 from "../../../assets/images/18-850x550.jpg"
import img19 from "../../../assets/images/8.jpg"
import img20 from "../../../assets/images/20-850x550.jpg"
import img21 from "../../../assets/images/9.jpg"
import { Link } from "react-router-dom";


export default function Property() {

    return (
        <>
            <PageMainImage image={Breadcrumb} title={""} />

            {/* <!-- ----------------------------- main section ----------------------------- --> */}

            <div className="container mt-5">
                <div className="row">
                    {/* <!-- Sidebar --> */}
                    <div className="col-lg-3">
                      {/* <!-- Search Filters --> */}
                        <div className="card mb-4">
                            <div className="card-body">
                                <h5 className="card-title">Filters</h5>
                                <form>
                                    <div className="form-group mb-2">
                                        <input type="text" className="form-control" placeholder="Keyword"/>
                                    </div>
                                    <div className="form-group mb-2">
                                        <input type="text" className="form-control" placeholder="Location"/>
                                    </div>
                                    <div className="form-group mb-2">
                                        <input type="text" className="form-control" placeholder="Status"/>
                                    </div>
                                    <div className="form-group mb-2">
                                        <input type="text" className="form-control" placeholder="Property Type"/>
                                    </div>
                                    <div className="form-group mb-2">
                                        <input type="text" className="form-control" placeholder="Price Range"/>
                                    </div>
                                    <div className="form-group mb-2">
                                        <input type="text" className="form-control" placeholder="Bathrooms"/>
                                </div>
                                    <div className="form-group mb-2">
                                        <input type="text" className="form-control" placeholder="Grades"/>
                                    </div>
                                    <div className="form-group mb-2">
                                        <input type="text" className="form-control" placeholder="Year built"/>
                                    </div>
                                    <div className="form-group mb-2 col-lg-6">
                                        <input type="text" className="form-control" placeholder="Min Area"/>
                                    </div>
                                    <div className="form-group mb-2 col-lg-6">
                                        <input type="text" className="form-control" placeholder="Max Area"/>
                                    </div>
                                    {/* <!-- Add more filter fields as needed --> */}
                                    <button type="submit" className="btn btn-danger btn-block">Clear Filters</button>
                                </form>
                            </div>
                        </div>

                        {/* <!-- Featured Properties --> */}
                        <div className="card mb-4">
                            <div className="card-body mb-4">
                                <h5 className="card-title">Featured Properties</h5>
                                <img src={img1} className="card-img-top" alt="Property"/>
                                {/* <!-- Featured properties list --> */}
                            </div>
                        </div>
                    </div>

                    {/* <!-- Main Property Listing --> */}
                    <div className="col-lg-9">
                        <h4>Get all Properties</h4>
                        <p>10 Search results</p>

                        <div className="row">
                            {/* <!-- Property Card --> */}
                            <div className="col-md-6 col-lg-4">
                                <div className="card mb-4">
                                    <img src={img2} className="card-img-top" alt="Property"/>
                                    <div className="card-body">
                                        <h5 className="card-title">$13,000/mo</h5>
                                        <p className="card-text"><Link to={"Details"} className="text-decoration-none">Luxury Family Home</Link></p>
                                        <p className="card-text"><small>Apartment</small></p>
                                        <p className="card-text"><i className="fas fa-map-marker-alt"></i> 1421 San Pedro St, Los Angeles, CA 90015</p>
                                        <hr/>
                                        <div className="d-flex justify-content-between align-items-center mt-3">
                                            <div className="profile d-flex align-items-center">
                                                <img src={img3} alt="User" className="rounded-circle" style= {{width: "30px"}}/>
                                                <small className="ml-2">Ali Tufan</small>
                                            </div>
                                            <small className="text-muted">1 year ago</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Property Card --> */}
                            <div className="col-md-6 col-lg-4">
                                <div className="card mb-4">
                                    <img src={img4} className="card-img-top" alt="Property"/>
                                    <div className="card-body ">
                                        <h5 className="card-title">$13,000/mo</h5>
                                        <p className="card-text"><Link to={"Details"} className="text-decoration-none">Luxury Family Home</Link></p>
                                        <p className="card-text"><small>Apartment</small></p>
                                        <p className="card-text"><i className="fas fa-map-marker-alt"></i> 1421 San Pedro St, Los Angeles, CA 90015</p>
                                        <hr/>
                                        <div className="d-flex justify-content-between align-items-center mt-3">
                                            <div className="profile d-flex align-items-center">
                                                <img src={img5} alt="User" className="rounded-circle" style= {{width: "30px"}}/>
                                                <small className="ml-2">Ali Tufan</small>
                                            </div>
                                            <small className="text-muted">1 year ago</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Property Card --> */}
                            <div className="col-md-6 col-lg-4">
                                <div className="card mb-4">
                                    <img src={img6} className="card-img-top" alt="Property"/>
                                    <div className="card-body">
                                        <h5 className="card-title">$13,000/mo</h5>
                                        <p className="card-text"><Link to={"Details"} className="text-decoration-none">Luxury Family Home</Link></p>
                                        <p className="card-text"><small>Apartment</small></p>
                                        <p className="card-text"><i className="fas fa-map-marker-alt"></i> 1421 San Pedro St, Los Angeles, CA 90015</p>
                                        <hr/>
                                        <div className="d-flex justify-content-between align-items-center mt-3">
                                            <div className="profile d-flex align-items-center">
                                                <img src={img7} alt="User" className="rounded-circle" style= {{width: "30px"}}/>
                                                <small className="ml-2">Ali Tufan</small>
                                            </div>
                                            <small className="text-muted">1 year ago</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Property Card --> */}
                            <div className="col-md-6 col-lg-4">
                                <div className="card mb-4">
                                    <img src={img8} className="card-img-top" alt="Property"/>
                                    <div className="card-body">
                                        <h5 className="card-title">$13,000/mo</h5>
                                        <p className="card-text"><Link to={"Details"} className="text-decoration-none">Luxury Family Home</Link></p>
                                        <p className="card-text"><small>Apartment</small></p>
                                        <p className="card-text"><i className="fas fa-map-marker-alt"></i> 1421 San Pedro St, Los Angeles, CA 90015</p>
                                        <hr/>
                                        <div className="d-flex justify-content-between align-items-center mt-3">
                                            <div className="profile d-flex align-items-center">
                                                <img src={img9} alt="User" className="rounded-circle" style= {{width: "30px"}}/>
                                                <small className="ml-2">Ali Tufan</small>
                                            </div>
                                            <small className="text-muted">1 year ago</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Property Card --> */}
                            <div className="col-md-6 col-lg-4">
                                <div className="card mb-4">
                                    <img src={img10} className="card-img-top" alt="Property"/>
                                    <div className="card-body">
                                        <h5 className="card-title">$13,000/mo</h5>
                                        <p className="card-text"><Link to={"Details"} className="text-decoration-none">Luxury Family Home</Link></p>
                                        <p className="card-text"><small>Apartment</small></p>
                                        <p className="card-text"><i className="fas fa-map-marker-alt"></i> 1421 San Pedro St, Los Angeles, CA 90015</p>
                                        <hr/>
                                        <div className="d-flex justify-content-between align-items-center mt-3">
                                            <div className="profile d-flex align-items-center">
                                                <img src={img11} alt="User" className="rounded-circle" style= {{width: "30px"}}/>
                                                <small className="ml-2">Ali Tufan</small>
                                            </div>
                                            <small className="text-muted">1 year ago</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Property Card --> */}
                            <div className="col-md-6 col-lg-4">
                                <div className="card mb-4">
                                    <img src={img12} className="card-img-top" alt="Property"/>
                                    <div className="card-body">
                                        <h5 className="card-title">$13,000/mo</h5>
                                        <p className="card-text"><Link to={"Details"} className="text-decoration-none">Luxury Family Home</Link></p>
                                        <p className="card-text"><small>Apartment</small></p>
                                        <p className="card-text"><i className="fas fa-map-marker-alt"></i> 1421 San Pedro St, Los Angeles, CA 90015</p>
                                        <hr/>
                                        <div className="d-flex justify-content-between align-items-center mt-3">
                                    <div className="profile d-flex align-items-center">
                                                <img src={img13} alt="User" className="rounded-circle" style= {{width: "30px"}}/>
                                                <small className="ml-2">Ali Tufan</small>
                                            </div>
                                            <small className="text-muted">1 year ago</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Property Card --> */}
                            <div className="col-md-6 col-lg-4">
                                    <div className="card mb-4">
                                        <img src={img14} className="card-img-top" alt="Property"/>
                                        <div className="card-body">
                                            <h5 className="card-title">$13,000/mo</h5>
                                            <p className="card-text"><Link to={"Details"} className="text-decoration-none">Luxury Family Home</Link></p>
                                            <p className="card-text"><small>Apartment</small></p>
                                            <p className="card-text"><i className="fas fa-map-marker-alt"></i> 1421 San Pedro St, Los Angeles, CA 90015</p>
                                            <hr/>
                                            <div className="d-flex justify-content-between align-items-center mt-3">
                                                <div className="profile d-flex align-items-center">
                                                    <img src={img15} alt="User" className="rounded-circle" style= {{width: "30px"}}/>
                                                    <small className="ml-2">Ali Tufan</small>
                                                </div>
                                                <small className="text-muted">1 year ago</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4">
                                    <div className="card mb-4">
                                        <img src={img16} className="card-img-top" alt="Property"/>
                                        <div className="card-body">
                                            <h5 className="card-title">$13,000/mo</h5>
                                            <p className="card-text"><Link to={"Details"} className="text-decoration-none">Luxury Family Home</Link></p>
                                            <p className="card-text"><small>Apartment</small></p>
                                            <p className="card-text"><i className="fas fa-map-marker-alt"></i> 1421 San Pedro St, Los Angeles, CA 90015</p>
                                            <hr/>                                
                                            <div className="d-flex justify-content-between align-items-center mt-3">
                                                <div className="profile d-flex align-items-center">
                                                    <img src={img17} alt="User" className="rounded-circle" style= {{width: "30px"}}/>
                                                    <small className="ml-2">Ali Tufan</small>
                                                </div>
                                                <small className="text-muted">1 year ago</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4">
                                    <div className="card mb-4">
                                        <img src={img18} className="card-img-top" alt="Property"/>
                                        <div className="card-body">
                                            <h5 className="card-title">$13,000/mo</h5>
                                            <p className="card-text"><Link to={"Details"} className="text-decoration-none">Luxury Family Home</Link></p>
                                            <p className="card-text"><small>Apartment</small></p>
                                            <p className="card-text"><i className="fas fa-map-marker-alt"></i> 1421 San Pedro St, Los Angeles, CA 90015</p>
                                            <hr/>
                                            <div className="d-flex justify-content-between align-items-center mt-3">
                                                <div className="profile d-flex align-items-center">
                                                    <img src={img19} alt="User" className="rounded-circle" style= {{width: "30px"}}/>
                                                    <small className="ml-2">Ali Tufan</small>
                                                </div>
                                                <small className="text-muted">1 year ago</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4">
                                    <div className="card mb-4">
                                        <img src={img20} className="card-img-top" alt="Property"/>
                                        <div className="card-body">
                                            <h5 className="card-title">$13,000/mo</h5>
                                            <p className="card-text"><Link to={"Details"} className="text-decoration-none">Luxury Family Home</Link></p>
                                            <p className="card-text"><small>Apartment</small></p>
                                            <p className="card-text"><i className="fas fa-map-marker-alt"></i> 1421 San Pedro St, Los Angeles, CA 90015</p>
                                            <hr/>
                                            <div className="d-flex justify-content-between align-items-center mt-3">
                                                <div className="profile d-flex align-items-center">
                                                    <img src={img21} alt="User" className="rounded-circle" style= {{width: "30px"}}/>
                                                    <small className="ml-2">Ali Tufan</small>
                                                </div>
                                                <small className="text-muted">1 year ago</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Repeat similar cards for other properties --> */}
                            </div>

                            {/* <!-- Pagination --> */}
                            <nav aria-label="Page navigation example">
                                <ul className="pagination justify-content-center">
                                    <li className="page-item"><a className="page-link" href="#page1">1</a></li>
                                    <li className="page-item"><a className="page-link" href="#page2">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#page3">3</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                </>
    );

}