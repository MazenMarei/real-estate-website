//import faUncharted from "@fortawesome/free-brands-svg-icons";
import "./property-details.css"
import PageMainImage from "../../shared/PageMainImage";
import Breadcrumb from "../../../assets/images/bg-breadcrumb-min.jpg";

import img1 from "../../../assets/images/1.jpg"
import img2 from "../../../assets/images/24-850x550.jpg"
import img3 from "../../../assets/images/23-850x550.jpg"
import img4 from "../../../assets/images/13-850x550.jpg"
import img5 from "../../../assets/images/17-850x550.jpg"
import img6 from "../../../assets/images/9-characteristics-4.jpg"
import img7 from "../../../assets/images/10-850x550.jpg"
import img8 from "../../../assets/images/5.jpg"
import img9 from "../../../assets/images/5-850x550.jpg"
import img10 from "../../../assets/images/11-850x550.jpg"
import img11 from "../../../assets/images/12-1-850x550.jpg"


export default function Details() {

    return (
        <>
            <PageMainImage image={Breadcrumb} title="Details"/>


            {/* <!-- ----------------------------- main section ----------------------------- --> */}
            <div className="container my-5">
                <div className="row">
                    {/* <!-- Main content --> */}
                    <div className="col-lg-8">
                        <h1 className="mb-3">Gorgeous Villa Bay View</h1>
                        <p className="text-muted">1421 San Pedro St, Los Angeles, CA 900015</p>
                        <h2 className="text-danger">$11,000/mo</h2>

                        {/* <!-- Main Image --> */}
                        <img src={img1} className="img-fluid rounded mb-4" alt="Main" />

                        {/* <!-- Additional Images --> */}
                        <div className="row mb-4">
                            <div className="col-4"><img src={img2} className="img-fluid rounded mb-2" alt="1" /></div>
                            <div className="col-4"><img src={img3} className="img-fluid rounded mb-2" alt="2" /></div>
                            <div className="col-4"><img src={img4} className="img-fluid rounded mb-2" alt="3" /></div>
                            <div className="col-4"><img src={img5} className="img-fluid rounded mb-2" alt="4" /></div>
                            <div className="col-4"><img src={img6} className="img-fluid rounded mb-2" alt="5" /></div>
                            <div className="col-4"><img src={img7} className="img-fluid rounded mb-2" alt="6" /></div>
                        </div>

                        {/* <!-- Description Section --> */}
                        <div className="card mb-4">
                            <div className="card-body">
                                <h4>Description</h4>
                                <p>Evans Tower very high demand corner junior one bedroom plus a large balcony boasting full open NYC views.
                                    You need to see the views to believe them. Mint condition with new hardwood floors. Lots of closets plus
                                    washer and dryer.</p>
                                <p>Fully furnished. Elegantly appointed condominium unit situated on premier location. PS6. The wide entry hall
                                    leads to a large living room with dining area. This expansive 2 bedroom and 2 renovated marble bathroom
                                    apartment has great windows. Despite the interior views, the apartments Southern and Eastern exposures
                                    allow for lovely natural light to fill every room. The master suite is surrounded by handcrafted milkwork and
                                    features incredible walk-in closet and storage space.</p>
                                <p>Fully furnished. Elegantly appointed condominium unit situated on premier location. PS6. The wide entry hall
                                    leads to a large living room with dining area. This expansive 2 bedroom and 2 renovated marble bathroom
                                    apartment has great windows. Despite the interior views, the apartments Southern and Eastern exposures
                                    allow for lovely natural light to fill every room. The master suite is surrounded by handcrafted milkwork and
                                    features incredible walk-in closet and storage space.</p>
                                <p>Fully furnished. Elegantly appointed condominium unit situated on premier location. PS6. The wide entry hall
                                    leads to a large living room with dining area. This expansive 2 bedroom and 2 renovated marble bathroom
                                    apartment has great windows. Despite the interior views, the apartments Southern and Eastern exposures
                                    allow for lovely natural light to fill every room. The master suite is surrounded by handcrafted milkwork and
                                    features incredible walk-in closet and storage space.</p>
                                {/* <!-- Additional repeated text omitted for brevity --> */}
                            </div>
                        </div>

                        {/* <!-- Property Details Section --> */}
                        <div className="card mb-4">
                            <div className="card-body">
                                <h4>Property Details</h4>
                                <div className="row">
                                    <div className="col-md-6">
                                        <ul>
                                            <li><strong>Property ID:</strong> HZ27</li>
                                            <li><strong>Price:</strong> $130,000</li>
                                            <li><strong>Property Size:</strong> 1560 Sq Ft</li>
                                            <li><strong>Year Built:</strong> 2016-01-09</li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6">
                                        <ul>
                                            <li><strong>Bedrooms:</strong> 8</li>
                                            <li><strong>Bathrooms:</strong> 4</li>
                                            <li><strong>Garage:</strong> 2</li>
                                            <li><strong>Garage Size:</strong> 200 SqFt</li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6">
                                        <ul>
                                            <li><strong>Property Type:</strong> Apartment</li>
                                            <li><strong>Property Status:</strong> For Sale</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Additional Details Section --> */}
                        <div className="card mb-4">
                            <div className="card-body">
                                <h4>Additional Details</h4>
                                <div className="row">
                                    <div className="col-md-6">
                                        <ul>
                                            <li><strong>Deposit:</strong> 20%</li>
                                            <li><strong>Pool Size:</strong> 300 SqFt</li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6">
                                        <ul>
                                            <li><strong>Additional Rooms:</strong> Guest Bath</li>
                                            <li><strong>Equipment:</strong> Grill - Gas</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Features Section --> */}
                        <div className="card mb-4">
                            <div className="card-body">
                                <h4>Features</h4>
                                <div className="row">
                                    <div className="col-md-4">
                                        <ul>
                                            <li>Air Conditioning</li>
                                            <li>Barbeque</li>
                                            <li>Dryer</li>
                                            <li>Gym</li>
                                            <li>Laundry</li>
                                        </ul>
                                    </div>
                                    <div className="col-md-4">
                                        <ul>
                                            <li>Lawn</li>
                                            <li>Microwave</li>
                                            <li>Outdoor Shower</li>
                                            <li>Refrigerator</li>
                                            <li>Sauna</li>
                                        </ul>
                                    </div>
                                    <div className="col-md-4">
                                        <ul>
                                            <li>Swimming Pool</li>
                                            <li>TV Cable</li>
                                            <li>Washer</li>
                                            <li>WiFi</li>
                                            <li>Window Coverings</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Location Section --> */}
                        <div className="card mb-4">
                            <div className="card-body">
                                <h4>Location</h4>
                                <div className="google-map">
                                    <iframe title="googleMapsIframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6021.474367375896!2d-0.1318403506259366!3d51.505171852183864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2z2YTZhtiv2YbYjCDYp9mE2YXZhdmE2YPYqSDYp9mE2YXYqtit2K_YqQ!5e0!3m2!1sar!2seg!4v1725243317070!5m2!1sar!2seg"width="600" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                </div>

                                <p>1421 San Pedro St, Los Angeles, CA 90015</p>

                            </div>
                        </div>
                    </div>

                    {/* <!-- Sidebar content --> */}
                    <div className="col-lg-4">
                        {/* <!-- Agent Contact --> */}
                        <div className="card mb-4 text-center">
                            <div className="card-body">
                                <img src={img8} className="rounded-circle mb-3" alt="Agent" style={{width:" 120px", height: "120px"}} />
                                <h4>Samut Williams</h4>
                                <p className="text-muted">123-456-7890</p>
                                <p className="text-muted">info@homecisco.com</p>
                                <a href="#Action" className="btn btn-primary">View My Listing</a>
                            </div>
                        </div>

                        {/* <!-- Contact Form --> */}
                        <div className="card mb-4">
                            <div className="card-body">
                                <h4>Contact Agent</h4>
                                <form>
                                    <div className="mb-3">
                                        <input type="text" className="form-control" placeholder="Your Name" />
                                    </div>
                                    <div className="mb-3">
                                        <input type="phone" className="form-control" placeholder="Your Phone" />
                                    </div>
                                    <div className="mb-3">
                                        <input type="email" className="form-control" placeholder="Your Email" />
                                    </div>
                                    <div className="mb-3">
                                        <textarea className="form-control" rows="3" placeholder="Your Message"></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-danger">Send</button>
                                </form>
                            </div>
                        </div>

                        {/* <!-- Featured Properties --> */}
                        <div className="card mb-4">
                            <div className="card-body">
                                <h4>Featured Properties</h4>
                                <div className="d-flex mb-3">
                                    <img src={img9} className="img-thumbnail" alt="Featured Property 1" />
                                    <div className="ms-3">
                                        <p className="mb-0 text-danger">$13,000/mo</p>
                                        <p>Luxury Family Home</p>
                                    </div>
                                </div>
                                <div className="d-flex mb-3">
                                    <img src={img10} className="img-thumbnail" alt="Featured Property 2" />
                                    <div className="ms-3">
                                        <p className="mb-0 text-danger">$12,000/mo</p>
                                        <p>Luxury Family Home</p>
                                    </div>
                                </div>
                                <div className="d-flex mb-3">
                                    <img src={img11} className="img-thumbnail" alt="Featured Property 3" />
                                    <div className="ms-3">
                                        <p className="mb-0 text-danger">$11,000/mo</p>
                                        <p>Renovated Apartment</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}