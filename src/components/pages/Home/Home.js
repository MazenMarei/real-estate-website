import HomeMainImage from "./homeMainImage";

import { ToastContainer } from "react-toastify";
// import required modules

import OurPartners from "../../shared/OurPartners";
import FeaturedProperties from "./featuredProperties";
import FindPropertyInCities from "./FindPropertyInCities";
import WhyUs from "./WhyUs";
import HomeArticls from "./HomeArticls";

export default function Home() {
  return (
    <>
      <ToastContainer />

      {/* <!-- ----------------------------- Main Image ----------------------------- --> */}
      
      <HomeMainImage />

      {/* <!-- ----------------------------- Featured Properties ----------------------------- --> */}

      <FeaturedProperties />

      {/* <!-- ----------------------------- Find Property In Cities ----------------------------- --> */}

      <FindPropertyInCities />

      {/* <!-- --------------------------- why us section ---------------------------- --> */}

      <WhyUs />

      {/* <!-- ----------------------- Articles & Tips Section ----------------------- --> */}

      <HomeArticls />

      {/* <!-- ------------------------ Our Partners Section ------------------------- --> */}

      <OurPartners />

    </>
  );
}
