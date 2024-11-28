import { Form, Modal } from "react-bootstrap";
import { useEffect, useState } from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import bgLogin from "../../../assets/images/bg-login.jpg";
import bgRegister from "../../../assets/images/bg-register.jpg";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector, useDispatch } from "react-redux";
import Loading from "../LoadingPage";
import login from "../../../Apis/login";
import register from "../../../Apis/register";
import { setLoading } from "../../../slices/loadingSlice";

export default function LoginAndRegister({
  show,
  handleClose,
  loginForm,
  setLoginForm,
  handleLoginShow,
}) {
  const [validated, setValidated] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const loading = useSelector((state) => state.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    setValidated(false);
    setErrorMessage("");
  }, [loginForm]);
  
  useEffect(() => {
    setTimeout(() => {
      setErrorMessage("");
    }, 5000);
  }, [errorMessage]);

  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    if (form.checkValidity() === false) {
      return setValidated(true);
    }

    const data = {
      name: form.formBasicName?.value,
      email: form.formBasicEmail.value,
      password: form.formBasicPassword.value,
      password_confirmation: form.formBasicRePassword?.value,
      role: form.formBasicUserType?.value
        .replace("1", "user")
        .replace("2", "seller"),
    };

    if (!loginForm && data.password !== data.password_confirmation) {
      return setErrorMessage("Password and Confirm Password does not match.");
    }

    dispatch(setLoading(true));
    if (loginForm) {
      const loginDispatch = await dispatch(login(data));

      if (loginDispatch.payload.status !== 200) {
        setErrorMessage(loginDispatch.payload.message);
      } else {
        handleClose();
        toast.success(loginDispatch.payload.message);
      }
    } else {
      const registerDispatch = await dispatch(register(data));

      if (registerDispatch.payload.status !== 201) {
        setErrorMessage(registerDispatch.payload.message);
      } else {
        toast.success(registerDispatch.payload.message);
        setLoginForm(true);
        form.reset();
        form.formBasicEmail.value = data.email;
        form.formBasicPassword.value = data.password;
      }
    }
    dispatch(setLoading(false));
  };

  // login and register modal
  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="lg"
      centered={true}
      dialogClassName=""
    >

      <Modal.Body>


        {loading && <Loading />}

        <div className="container">

          <div className="row">

            {/* /* ----------------- left side image for login and register ----------------- */}
            <div className="col d-none d-lg-block">
              <img src={loginForm ? bgLogin : bgRegister} alt="bgLogin" />
            </div>
            {/* /* --------------- right side form for login and register form -------------- */}
            <div className="col d-flex flex-column ">

              <div className="row pt-3 d-flex flex-row justify-content-between align-items-center">
                {/* /* ------------------------------- form title ------------------------------- */}
                <h3 className="text-capitalize fs-4 col secondary-color">
                  {loginForm ? "Login" : "Register"}
                </h3>
                <button
                  type="button"
                  className="btn text-white fs-3 border-0 col-2 p-0"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={handleClose}
                >
                  <FontAwesomeIcon
                    icon={faXmark}
                    className="p-0 secondary-color"
                  />
                </button>
              </div>

              {/* /* ---------------------- display if there is an error ---------------------- */}
              {errorMessage && (
                <div className="row my-3 p-3 light-primary-bg rounded rounded-3">
                  <div className="col">
                    <strong className="dark-primary-color">
                      {errorMessage}
                    </strong>
                  </div>
                </div>
              )}

              {/* /* ------------------------------- form body and inputs  ------------------------------- */}
              <div className="row my-auto">
                <Form
                  validated={validated}
                  onSubmit={handleSubmit}
                  noValidate={true}
                >
                  {!loginForm && (
                    <Form.Group className="mb-3" controlId="formBasicName">
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter name"
                        autoComplete="name"
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Please Type your Full name.
                      </Form.Control.Feedback>
                    </Form.Group>
                  )}
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      autoComplete="email"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please Type your email.
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      autoComplete={
                        loginForm ? "current-password" : "new-password"
                      }
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please Type your password.
                    </Form.Control.Feedback>
                  </Form.Group>
                  {!loginForm && (
                    <Form.Group
                      className="mb-3"
                      controlId="formBasicRePassword"
                    >
                      <Form.Label>Confirm Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        autoComplete="new-password"
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Please Type your password.
                      </Form.Control.Feedback>
                    </Form.Group>
                  )}
                  {!loginForm && (
                    <Form.Group className="mb-3" controlId="formBasicUserType">
                      <Form.Label>User Type</Form.Label>
                      <Form.Select
                        className="mb-3"
                        aria-label="Default select example"
                        defaultValue="1"
                      >
                        <option value="1">User</option>
                        <option value="2">Seller</option>
                      </Form.Select>
                    </Form.Group>
                  )}
                  <div className="row">
                    <div className="col">
                      <button
                        type="submit"
                        className="btn primary-bg w-100 text-white"
                      >
                        {loginForm ? "Login" : "Register"}
                      </button>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col justify-content-center d-flex">
                      <p className="fw-semibold">
                        {loginForm
                          ? "Don't have an account?"
                          : "Already have an account?"}

                        <button
                          type="button"
                          className="bg-transparent border-0 text-primary ms-2"
                          onClick={handleLoginShow}
                        >
                          {loginForm ? "Register" : "Login"}
                        </button>
                      </p>
                    </div>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
