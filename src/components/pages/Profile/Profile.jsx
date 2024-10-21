import { useSelector } from "react-redux";

export default function Profile() {
  const userInformation = useSelector((state) => state.userInfo);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-4">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <div className="d-flex flex-column align-items-center text-center">
                <img
                  src={`./${userInformation.profileImage}`}
                  alt="avatar"
                  className="rounded-circle"
                  width="150"
                />
                <div className="mt-3">
                  <h4>{userInformation?.name}</h4>
                  <p className="text-secondary mb-1">{userInformation.email}</p>
                  <p className="text-muted font-size-sm">
                    {userInformation.role}
                  </p>
                  <button className="btn btn-primary">Follow</button>
                  <button className="btn btn-outline-primary">Message</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-8">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <div>
                  <h4>Profile</h4>
                </div>
                <div>
                  <button className="btn btn-primary">Edit Profile</button>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-12 col-lg-6">
                  <p className="text-muted">First Name</p>
                  <h6>{userInformation?.name}</h6>
                </div>
                <div className="col-12 col-lg-6">
                  <p className="text-muted">Email</p>
                  <h6>{userInformation.email}</h6>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-lg-6">
                  <p className="text-muted">Role</p>
                  <h6>{userInformation.role}</h6>
                </div>
                <div className="col-12 col-lg-6">
                  <p className="text-muted">Phone</p>
                  <h6>{userInformation.phone}</h6>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-lg-6">
                  <p className="text-muted">Address</p>
                  <h6>{userInformation.address}</h6>
                </div>
                <div className="col-12 col-lg-6">
                  <p className="text-muted">City</p>
                  <h6>{userInformation.city}</h6>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-lg-6">
                  <p className="text-muted">Country</p>
                  <h6>{userInformation.country}</h6>
                </div>
                <div className="col-12 col-lg-6">
                  <p className="text-muted">Postal Code</p>
                  <h6>{userInformation.postalCode}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
