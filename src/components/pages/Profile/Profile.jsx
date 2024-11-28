import { useDispatch, useSelector } from "react-redux";
import { Tabs, Tab, Form } from "react-bootstrap";
import {  useState } from "react";
import { toast } from "react-toastify";
import { setLoading } from "../../../slices/loadingSlice";
import { UpdateUser, UpdateUserPassword } from "../../../Apis/updateUser";
import LoadingPage from "../../shared/LoadingPage";
export default function Profile() {
  const dispatch = useDispatch();
  const userInformation = useSelector((state) => state.userInfo);
  const loading = useSelector((state) => state.loading);
  const [newUserInformation, setNewUserInformation] = useState({
    name: userInformation.name ?? "",
    email: userInformation.email ?? "",
    phone: userInformation.phone ?? "",
    role: userInformation.role ?? "",
    address: userInformation.address ?? "",
    country: userInformation.country ?? "",
    postalCode: userInformation.postalCode ?? "",
    about: userInformation.about ?? "",
    id: userInformation.id,
    profileImage:
      userInformation.profileImage.replace("/uploads/", "") ??
      "defaultProfileImage.png",
  });
  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [profileValidation, setProfileValidation] = useState(false);
  const [passwordValidation, setPasswwordValidation] = useState(false);
  const handleProfileUpdate = (e) => {
    const form = e.currentTarget;
    e.preventDefault();
    e.stopPropagation();
    if (form.checkValidity() === false) {
      setProfileValidation(true);
      return toast.error("Please fill all the required fields");
    }
    dispatch(setLoading(true));
    dispatch(UpdateUser(newUserInformation)).then((data) => {
      dispatch(setLoading(false));
      if (data.payload.status === 200) {
        toast.success(data.payload.message);
      } else {
        toast.error(data.payload.message);
      }
    });
  };

  const handlePasswordChange = (e) => {
    const form = e.currentTarget;
    e.preventDefault();
    e.stopPropagation();
    if (form.checkValidity() === false) {
      toast.error("Please fill all the required fields");
      return setPasswwordValidation(true);
    }
    if (passwords.newPassword !== passwords.confirmPassword) {
      return toast.error("Passwords do not match");
    }

    if (passwords.newPassword === passwords.currentPassword) {
      return toast.error(
        "New password should be different from the current password"
      );
    }

    if (passwords.newPassword.length < 6) {
      return toast.error("Password should be at least 6 characters long");
    }
    dispatch(setLoading(true));
    dispatch(
      UpdateUserPassword({
        id: userInformation.id,
        oldPassword: passwords.currentPassword,
        newPassword: passwords.newPassword,
      })
    ).then((data) => {
      dispatch(setLoading(false));
      if (data.payload.status === 200) {
        toast.success(data.payload.message);
        form.reset();
        setPasswords({
          currentPassword: "",
          newPassword: "",
          confirmPassword: "",
        });
      } else {
        toast.error(data.payload.data);
      }
    });
  };

  return (
    <section className="bg-light py-3 py-md-5 py-xl-8">
      {loading && <LoadingPage />}
      {/* /* -------------------------- page header container ------------------------- */}
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
            <h2 className="mb-4 display-5 text-center">Profile</h2>
            <p className="text-secondary text-center lead fs-4 mb-5">
              The Profile page is your digital hub, where you can fine-tune your
              experience. Here's a closer look at the settings you can expect to
              find in your profile page.
            </p>
            <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row gy-4 gy-lg-0">
          {/* /* -------------------------- profile card container ------------------------- */}
          <div className="col-12 col-lg-4 col-xl-3">
            <div className="row gy-4">
              <div className="col-12">
                <div className="card widget-card border-light shadow-sm">
                  {/* ----------------------- welcome message card header ----------------------*/}
                  <div className="card-header primary-bg text-white fw-semibold">
                    Welcome, {userInformation?.name}
                  </div>

                  <div className="card-body">
                    {/* /* ------------------------------ profile image ----------------------------- */}
                    <div className="text-center mb-3">
                      <img
                        src={`./${userInformation.profileImage}`}
                        className="img-fluid rounded-circle"
                        alt="profile"
                        width="150"
                      />
                    </div>
                    {/* /* ------------------------------ profile data ----------------------------- */}

                    <h5 className="text-center mb-1">
                      {userInformation?.name}
                    </h5>
                    <h5 className="text-center mb-1">
                      {userInformation?.email}
                    </h5>
                    <p className="text-center text-secondary mb-4">
                      {userInformation.role}
                    </p>

                    {/* <div className="d-grid m-0">
                      <button className="btn btn-outline-primary" type="button">
                        Follow
                      </button>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /* -------------------------- profile data container ------------------------- */}
          <div className="col-12 col-lg-8 col-xl-9">
            <div className="card widget-card border-light shadow-sm">
              <div className="card-body p-4">
                {/* /* -------------------------- profile Taps ------------------------- */}

                <Tabs defaultActiveKey="overview" className="mb-3">
                  {/* /* ------------------------------ overview tap ------------------------------ */}

                  <Tab eventKey="overview" title="Overview">
                    <h5 className="mb-3">About</h5>
                    <p className="lead mb-3">
                      {userInformation.about?.length > 0
                        ? userInformation.about
                        : "No data available"}
                    </p>
                    <h5 className="mb-3">Profile</h5>
                    {/* /* -------------------------------- data row -------------------------------- */}
                    <div className="row g-0">
                      {/* /* ------------------------------ Name row ------------------------------ */}
                      <div className="col-5 col-md-3 bg-light border-bottom border-white border-3">
                        <div className="p-2">Name</div>
                      </div>
                      <div className="col-7 col-md-9 bg-light border-start border-bottom border-white border-3">
                        <div className="p-2">
                          {userInformation.name?.length > 0
                            ? userInformation.name
                            : "No data Provided"}
                        </div>
                      </div>

                      {/* /* ------------------------------ Email row ------------------------------ */}
                      <div className="col-5 col-md-3 bg-light border-bottom border-white border-3">
                        <div className="p-2">Email</div>
                      </div>
                      <div className="col-7 col-md-9 bg-light border-start border-bottom border-white border-3">
                        <div className="p-2">
                          {userInformation.email?.length > 0
                            ? userInformation.email
                            : "No data Provided"}
                        </div>
                      </div>

                      {/* /* ------------------------------ Phone row ------------------------------ */}
                      <div className="col-5 col-md-3 bg-light border-bottom border-white border-3">
                        <div className="p-2">Phone</div>
                      </div>
                      <div className="col-7 col-md-9 bg-light border-start border-bottom border-white border-3">
                        <div className="p-2">
                          {userInformation.phone?.length > 0
                            ? userInformation.phone
                            : "No data provided"}
                        </div>
                      </div>

                      {/* /* -------------------------------- role row --------------------------------  */}
                      <div className="col-5 col-md-3 bg-light border-bottom border-white border-3">
                        <div className="p-2">Role</div>
                      </div>
                      <div className="col-7 col-md-9 bg-light border-start border-bottom border-white border-3">
                        <div className="p-2">
                          {userInformation.role?.length > 0
                            ? userInformation.role
                            : "No data provided"}
                        </div>
                      </div>

                      {/* /* ------------------------------- address row ------------------------------ */}
                      <div className="col-5 col-md-3 bg-light border-bottom border-white border-3">
                        <div className="p-2">Address</div>
                      </div>
                      <div className="col-7 col-md-9 bg-light border-start border-bottom border-white border-3">
                        <div className="p-2">
                          {userInformation.address?.length > 0
                            ? userInformation.address
                            : "No data provided"}
                        </div>
                      </div>

                      {/* /* ------------------------------- country row ------------------------------ */}
                      <div className="col-5 col-md-3 bg-light border-bottom border-white border-3">
                        <div className="p-2">Country</div>
                      </div>
                      <div className="col-7 col-md-9 bg-light border-start border-bottom border-white border-3">
                        <div className="p-2">
                          {userInformation.country?.length > 0
                            ? userInformation.country
                            : "No data provided"}
                        </div>
                      </div>

                      <div className="col-5 col-md-3 bg-light border-bottom border-white border-3">
                        <div className="p-2">Postal Code</div>
                      </div>
                      <div className="col-7 col-md-9 bg-light border-start border-bottom border-white border-3">
                        <div className="p-2">
                          {userInformation.postalCode?.length > 0
                            ? userInformation.postalCode
                            : "No data provided"}
                        </div>
                      </div>
                    </div>
                  </Tab>

                  {/* /* ------------------------------ Edit tap ------------------------------ */}
                  <Tab eventKey="Edit" title="Edit">
                    <Form
                      noValidate
                      className="row"
                      validated={profileValidation}
                      onSubmit={(e) => handleProfileUpdate(e)}
                    >
                      {/* /* ----------------------------- profile picture ---------------------------- */}
                      <Form.Group className="col-12 mb-3">
                        <Form.Label>Profile Picture</Form.Label>
                        <div className="mb-3">
                          <img
                            src={
                              newUserInformation.profileImage?.name
                                ? URL.createObjectURL(newUserInformation.profileImage)
                                : `./uploads/${newUserInformation.profileImage}`
                            }
                            className="img-fluid rounded-circle"
                            alt="profile"
                            width="150"
                          />
                        </div>
                        <Form.Control
                          type="file"
                          name="profileImage"
                          onChange={(e) =>
                            setNewUserInformation({
                              ...newUserInformation,
                              profileImage: e.target.files[0],
                            })
                          }
                        />
                      </Form.Group>
                      {/* /* ------------------------------ Name ------------------------------ */}
                      <Form.Group className="col-12 col-md-6 mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          placeholder="Enter your name"
                          value={newUserInformation.name}
                          required
                          onChange={(e) =>
                            setNewUserInformation({
                              ...newUserInformation,
                              name: e.target.value,
                            })
                          }
                        />
                      </Form.Group>
                      {/* /* ------------------------------ Email ------------------------------ */}
                      <Form.Group className="col-12 col-md-6 mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="text"
                          name="email"
                          placeholder="Enter your name"
                          value={newUserInformation.email}
                          required
                          onChange={(e) =>
                            setNewUserInformation({
                              ...newUserInformation,
                              email: e.target.value,
                            })
                          }
                        />
                      </Form.Group>
                      {/* /* ------------------------------ Phone ------------------------------ */}
                      <Form.Group className="col-12 col-md-6 mb-3">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control
                          type="text"
                          name="phone"
                          placeholder="Enter your phone number"
                          value={newUserInformation.phone}
                          onChange={(e) =>
                            setNewUserInformation({
                              ...newUserInformation,
                              phone: e.target.value,
                            })
                          }
                        />
                      </Form.Group>
                      {/* /* ------------------------------ Role ------------------------------ */}
                      <Form.Group className="col-12 col-md-6 mb-3">
                        <Form.Label>Role</Form.Label>
                        <Form.Select
                          placeholder="Enter your role"
                          name="role"
                          value={newUserInformation.role}
                          onChange={(e) =>
                            setNewUserInformation({
                              ...newUserInformation,
                              role: e.target.value,
                            })
                          }
                        >
                          <option value={"user"}>User</option>
                          <option value={"seller"}>Seller</option>
                        </Form.Select>
                      </Form.Group>

                      {/* /* ------------------------------ Address ------------------------------ */}
                      <Form.Group className="col-12 mb-3">
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                          type="text"
                          name="address"
                          placeholder="Enter your address"
                          value={newUserInformation.address}
                          onChange={(e) =>
                            setNewUserInformation({
                              ...newUserInformation,
                              address: e.target.value,
                            })
                          }
                        />
                      </Form.Group>
                      {/* /* ------------------------------ Country ------------------------------ */}
                      <Form.Group className="col-12 col-md-6 mb-3">
                        <Form.Label>Country</Form.Label>
                        <Form.Control
                          type="text"
                          name="country"
                          placeholder="Enter your country"
                          value={newUserInformation.country}
                          onChange={(e) =>
                            setNewUserInformation({
                              ...newUserInformation,
                              country: e.target.value,
                            })
                          }
                        />
                      </Form.Group>

                      {/* /* ------------------------------ Postal Code ------------------------------ */}
                      <Form.Group className="col-12 col-md-6 mb-3">
                        <Form.Label>Postal Code</Form.Label>
                        <Form.Control
                          type="text"
                          name="postalCode"
                          placeholder="Enter your postal code"
                          value={newUserInformation.postalCode}
                          onChange={(e) =>
                            setNewUserInformation({
                              ...newUserInformation,
                              postalCode: e.target.value,
                            })
                          }
                        />
                      </Form.Group>

                      {/* /* ------------------------------ About ------------------------------ */}

                      <Form.Group className="col-12 mb-3">
                        <Form.Label>About</Form.Label>
                        <Form.Control
                          as="textarea"
                          name="about"
                          rows={3}
                          placeholder="Write about yourself"
                          value={newUserInformation.about}
                          onChange={(e) =>
                            setNewUserInformation({
                              ...newUserInformation,
                              about: e.target.value,
                            })
                          }
                        />
                      </Form.Group>

                      <div className="col-12">
                        <button
                          className="btn primary-bg text-white"
                          type="submit"
                        >
                          Save Changes
                        </button>
                      </div>
                    </Form>
                  </Tab>
                  {/* /* ------------------------------ Password tap ------------------------------ */}
                  <Tab eventKey="Password" title="Password">
                    <Form
                      noValidate
                      className="row"
                      validated={passwordValidation}
                      onSubmit={handlePasswordChange}
                    >
                      {/* /* ------------------------------ Current Password ------------------------------ */}
                      <Form.Group className="col-12 mb-3">
                        <Form.Label>Current Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Enter your current password"
                          value={passwords.currentPassword}
                          autoComplete="current-password"
                          required
                          onChange={(e) =>
                            setPasswords({
                              ...passwords,
                              currentPassword: e.target.value,
                            })
                          }
                        />
                      </Form.Group>

                      {/* /* ------------------------------ New Password ------------------------------ */}
                      <Form.Group className="col-12 mb-3">
                        <Form.Label>New Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Enter your new password"
                          autoComplete="new-password"
                          required
                          value={passwords.newPassword}
                          onChange={(e) =>
                            setPasswords({
                              ...passwords,
                              newPassword: e.target.value,
                            })
                          }
                        />
                      </Form.Group>

                      {/* /* ------------------------------ Confirm Password ------------------------------ */}
                      <Form.Group className="col-12 mb-3">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Confirm your new password"
                          autoComplete="new-password"
                          value={passwords.confirmPassword}
                          required
                          onChange={(e) =>
                            setPasswords({
                              ...passwords,
                              confirmPassword: e.target.value,
                            })
                          }
                        />
                      </Form.Group>

                      <div className="col-12">
                        <button
                          className="btn primary-bg text-white"
                          type="submit"
                        >
                          Change Password
                        </button>
                      </div>
                    </Form>
                  </Tab>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
