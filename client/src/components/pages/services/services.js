import PageMainImage from "../../shared/PageMainImage";
import Breadcrumb from "../../../assets/images/bg-breadcrumb-min.jpg";
import image1 from "../../../assets/images/17-850x550.jpg";
import image2 from "../../../assets/images/14-850x550.jpg";
import image3 from "../../../assets/images/23-850x550.jpg";
import image4 from "../../../assets/images/13-850x550.jpg";
import image5 from "../../../assets/images/5-850x550.jpg";
import image6 from "../../../assets/images/11-850x550.jpg";
import image7 from "../../../assets/images/22-850x550.jpg";
import image8 from "../../../assets/images/25-850x550.jpg";
import image9 from "../../../assets/images/20-850x550.jpg";
import ServicesCard from "./ServicesCard";

const servDatam = [
  {
    id: 1,
    image: image1,
    text: "Redfin Ranks the Most Competitive Neighborhoods of 2020",
  },
  {
    id: 2,
    image: image2,
    text: "Why We Should All Support Clear Cooperation.",
  },
  {
    id: 3,
    image: image3,
    text: "12 Walkable Cities Where You Can Live Affordably",
  },
  {
    id: 4,
    image: image4,
    text: "Redfin Unveils the Best Canadian Cities for Biking",
  },
  {
    id: 5,
    image: image5,
    text: "You Can Buy The Piano Teacher’s Home from Groundhog Day",
  },
  {
    id: 6,
    image: image6,
    text: "Housing Markets That Changed the Most This Decade",
  },
  {
    id: 7,
    image: image7,
    text: "12 Walkable Cities Where You Can Live Affordably",
  },
  {
    id: 8,
    image: image8,
    text: "Redfin Ranks the Most Competitive Neighborhoods of 2020",
  },
  {
    id: 9,
    image: image9,
    text: "Why We Should All Support Clear Cooperation",
  },
];

export default function Services() {
  return (
    <>
      <PageMainImage image={Breadcrumb} />

      <section id="services">
        <div className="container p-5 justify-content-center">
          <div className="row gap-5 my-3 justify-content-center">
            {servDatam.map((srv) => (
              <ServicesCard key={srv.id} image={srv.image} title={srv.text} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
