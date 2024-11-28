import CostumeNavbar from "./components/shared/Navbar/CostumeNavbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import About from "./components/pages/About/About";
import CostumeFooter from "./components/shared/Footer/CustomFooter";
import ScrollBtn from "./components/shared/ScrollBtn";
import Page404 from "./components/pages/Page404";
import { useDispatch, useSelector } from "react-redux";
import autoLogin from "./Apis/autoLogin";
import { useEffect, useState } from "react";
import Loading from "./components/shared/LoadingPage";
import Profile from "./components/pages/Profile/Profile";
import MyProperties from "./components/pages/MyProperties/MyProperties";
import NewProperty from "./components/pages/MyProperties/Property";
import { ToastContainer } from "react-toastify";
import Property from "./components/pages/Property/Property";
import Details from "./components/pages/Property-Details/Property-Details";
import Contact from "./components/pages/Contact/Contact";
import Services from "./components/pages/services/services";
import Blog from "./components/pages/blog/Blog";
import BlogDetalis from "./components/pages/Blog-Details/BlogDetalis";
export default function App() {
  const [loading, setLoading] = useState(true); // Create a loading state
  const dispatch = useDispatch();
  let userInfomaion = useSelector((state) => state.userInfo);

  /// Create a useEffect to auto login the user
  useEffect(() => {
    // Create a function to auto login the user
    const autoLoginUser = async () => {
      await dispatch(autoLogin()).catch((e) => null);
      setLoading(false);
    };

    // Call the function
    autoLoginUser();
  }, [dispatch]);

  /// Check if the user is still loading
  if (loading) {
    /// If the user is still loading, return the loading component
    return <Loading />;
  }
  return (
    <>
      <Router>
        <CostumeNavbar />
        <ToastContainer />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about-us" element={<About />} />
          {/* /* -------- Check the user role and show the routes based on the role -------  */}
          {userInfomaion.role === "seller" && (
            <Route path="my-properties">
              <Route index element={<MyProperties />} />
              <Route path="new" element={<NewProperty />} />
              <Route path=":id" element={<NewProperty />} />
            </Route>
          )}

          {/* /* ----------- Check if the user is logged in and show the routes -----------  */}
          {userInfomaion.token && (
            <>
              <Route path="profile" element={<Profile />} />
            </>
          )}

          <Route path="property">
            <Route index element={<Property />} />
            <Route path=":id" element={<Details />} />
          </Route>

          <Route path="blog">
            <Route index element={<Blog />} />
            <Route path=":id" element={<BlogDetalis />} />
          </Route>

          <Route path="contact-us" element={<Contact />} />
          <Route path="services" element={<Services />} />

          {/* /* ------------------------- 404 page ------------------------- */}
          <Route path="*" element={<Page404 />} />
        </Routes>
        <ScrollBtn />
        <CostumeFooter />
      </Router>
    </>
  );
}
