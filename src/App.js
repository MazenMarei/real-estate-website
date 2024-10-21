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
import FavoritesProparties from "./components/pages/Favorites/FavoritesProparties";
import Dashboard from "./components/pages/Dashboard/Dashboard";
import Messages from "./components/pages/Messages/Messages";
export default function App() {
  const [loading, setLoading] = useState(true); // Create a loading state
  const dispatch = useDispatch();
  useEffect(() => {
    const autoLoginUser = async () => {
      await dispatch(autoLogin()).catch((e) => null);
      setLoading(false);
    };

    autoLoginUser();
  }, [dispatch]);
  let userInfomaion = useSelector((state) => state.userInfo);
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <Router>
        <CostumeNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          {userInfomaion.role === "seller" && (
            <Route path="dashboard" element={<Dashboard />} />
          )}
          {userInfomaion.token && (
            <>
            <Route path="profile" element={<Profile />} />
            <Route path="messages" element={<Messages />} />
            </>
          )}
          <Route path="favorites" element={<FavoritesProparties />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
        <ScrollBtn />
        <CostumeFooter />
      </Router>
    </>
  );
}
