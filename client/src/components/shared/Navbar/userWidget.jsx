import { Dropdown } from "react-bootstrap";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

export default function UserWidget({ home }) {
  const userInformation = useSelector((state) => state.userInfo);
  
  return (
    <>
      <div className="col">
        <Dropdown>
          <Dropdown.Toggle
            className={
              "bg-transparent border-0 d-flex flex-row align-items-center justify-content-start gap-2 px-lg-2 px-0 " +
              (home ? "text-white" : "text-black")
            }
            id="dropdown-basic"
          >
            <img
              src={`${userInformation.profileImage}`}
              className="rounded-circle"
              alt="profile"
              width="40"
            />
            <span
              className={
                (home ? "text-lg-white" : "text-black") +
                " fw-semibold m-0 me-2 d-lg-block d-none"
              }
            >
              {userInformation?.name}
            </span>
          </Dropdown.Toggle>

          <Dropdown.Menu className="px-3 none-active-dropdown">
            {userInformation.role === "seller" && (
              <Dropdown.Item
                href="/my-properties"
                className="text-black d-flex flex-row align-items-center justify-content-start gap-2 border-bottom px-0 pt-2"
              >
                <FontAwesomeIcon icon={faHouse} className="text-black" />
                <span>My properties</span>
              </Dropdown.Item>
            )}

            <Dropdown.Item
              href="profile"
              className="text-black d-flex flex-row align-items-center justify-content-start gap-2 border-bottom px-0 pt-2"
            >
              <FontAwesomeIcon icon={faUser} className="text-black" />
              <span>Profile</span>
            </Dropdown.Item>
            {/* 
            <Dropdown.Item
              href="messages"
              className="text-black d-flex flex-row align-items-center justify-content-start gap-2 border-bottom px-0 pt-2"
            >
              <FontAwesomeIcon icon={faMessage} className="text-black" />
              <span>Messages</span>
            </Dropdown.Item> */}
            {/* 
            <Dropdown.Item
              href="favorites"
              className="text-black d-flex flex-row align-items-center justify-content-start gap-2 border-bottom px-0 pt-2"
            >
              <FontAwesomeIcon icon={faHeart} className="text-black" />
              <span>My Favorites</span>
            </Dropdown.Item> */}

            <Dropdown.Item
              href="#"
              onClick={() => {
                localStorage.removeItem("token");
                window.location.reload();
              }}
              className="text-black d-flex flex-row align-items-center justify-content-start gap-2 px-0 pt-2"
            >
              <FontAwesomeIcon
                icon={faRightFromBracket}
                className="text-black"
              />
              <span>Log out</span>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </>
  );
}
