import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Breadcrumb from "../../../assets/images/bg-breadcrumb.jpg";
import PageMainImage from "../../shared/PageMainImage";
import "../../../assets/css/contactUs.css"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebookF, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";



function ValidateForm() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <>
      <PageMainImage image={Breadcrumb} />

      <section id="Contact Us "className="light-gray-bg">
        
    <div className="container mt-5 bg-white ">
      <Row className="justify-content-center">
        {/* Contact Form Section */}
        <Col md={7}>
          <h2 className="mb-4">Send Us An Email</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida
            nulla libero, bibendum quam mattis enim at tortor.
          </p>
          <Form noValidate validated={validated} onSubmit={handleSubmit} className="p-4">
            <Row className="mb-3">
              <Form.Group as={Col} md={6} controlId="nameValidation">
                <Form.Control required type="text" placeholder="Name" className="p-3" />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md={6} controlId="emailValidation">
                <InputGroup hasValidation>
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    aria-describedby="inputGroupPrepend"
                    required
                    className="p-3"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter your Email
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} md={6} controlId="phoneValidation">
                <Form.Control
                  required
                  type="tel"
                  placeholder="Phone"
                  pattern="[0-9]{10}"
                  className="p-3"
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid phone number.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md={6} controlId="subjectValidation">
                <Form.Control type="text" placeholder="Subject" required className="p-3" />
                <Form.Control.Feedback>
                  Please provide a Subject.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="messageValidation">
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Your Message"
                  required
                  className="p-3"
                />
                <Form.Control.Feedback>
                  Please provide your message.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Button type="submit" className="btn-custom mt-3">
              Send Message
            </Button>
          </Form>
        </Col>

        {/* Contact Information Section */}
        <Col md={4} className="contact-info">
          <h2 className="mb-4">Contact Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida
            nulla libero, bibendum quam mattis enim at tortor.
          </p>
          <ul className="list-unstyled">
          <li><strong>Address</strong> </li>
            <p>2301 Ravenswood Rd Madison,WI 53711</p>
            <li><strong>Phone</strong> </li>
            <p>(315) 905-2321</p>
            <li><strong>Mail</strong> </li>
            <p>info@findhouse.com</p>
            <li><strong>Skype</strong> </li>
            <p>findhouse</p>
            <li><strong>Follow Us</strong> </li>
          </ul>
          <div className="social-icons">
          <i><FontAwesomeIcon icon={faFacebookF}/></i>
            <i><FontAwesomeIcon icon={faTwitter}/></i>
            <i><FontAwesomeIcon icon={faLinkedin}/></i>
            <i><FontAwesomeIcon icon={faInstagram}/></i>
          </div>
        </Col>
      </Row>
    </div>
    </section>
    </>
  );
}

export default ValidateForm;
