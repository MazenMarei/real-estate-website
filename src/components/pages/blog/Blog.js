
import bgVideoImg from "../../../assets/images/4-1-850x550.jpg";
import bg2VideoImg from "../../../assets/images/5-850x550.jpg";
import bg3VideoImg from "../../../assets/images/9-characteristics-4.jpg";
import bg4VideoImg from "../../../assets/images/17-850x550.jpg";
import bg5VideoImg from "../../../assets/images/22-850x550.jpg";
import bg6VideoImg from "../../../assets/images/24-850x550.jpg";
import bg7VideoImg from "../../../assets/images/12-1-850x550.jpg";
import bg8VideoImg from "../../../assets/images/14-850x550.jpg";
import bg9VideoImg from "../../../assets/images/blog3-op5h9ukqohpvlj56kvz57kxf15eqhdeymxa36hjeck.jpg";
import bg10VideoImg from "../../../assets/images/25-850x550.jpg";
import "../../../assets/css/blog.css";
import OurPartners from "../../shared/OurPartners";
import { Link } from "react-router-dom";
import BlogCard from "./BlogCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

// api for blog

const Blogs = [
  {
    id: 1,
    title: "Skill that you can learn in the real state market",
    date: "10 Augest 2022",
    desc: "Lorem ipsum dolor sit amet 3, consectetur adipiscing elit. Duis mollis et sem sed sollicitudin armazém. ",
    blogimage: bgVideoImg,
    author: "Ali tufan",
  },
  {
    id: 2,
    title: "Bedroom Colors You will Never this Regret",
    date: "12 Augest 2022",
    desc: "Fantástico moinho em fase final de acabamentos para venda em Alte, Loulé imóvel afetação de armazém.",
    blogimage: bg2VideoImg,
    author: "Ali tufan",
  },
  {
    id: 3,
    title: "5 Essential Steps for Buying everyone Investment",
    date: "15 Augest 2022",
    desc: "Detached 3 bedroom villa overlooking the mountains, set on a plot of 1,500m² and sold together with 3 .",
    blogimage: bg3VideoImg,
    author: "Ali tufan",
  },
  {
    id: 4,
    title: "Cafe Restaurant & Bar For Sale in Alte Central Algarve",
    date: "18 Augest 2022",
    desc: "Cafe Restaurant & Bar For Sale in Alte Central Algarve is a great investment situated in a quiet with 3 .",
    blogimage: bg4VideoImg,
    author: "Ali tufan",
  },
  {
    id: 5,
    title: "5 Essential Steps for Buying everyone Investment",
    date: "12 Augest 2022",
    desc: "This property consists of 3 floors. The ground floor comprises dining room, equipped kitchen and bathroom.",
    blogimage: bg5VideoImg,
    author: "Ali tufan",
  },
  {
    id: 6,
    title: "House for sale, Faro, Loulé, Alte, Portugal, in Alte, Portugal",
    date: "26 Augest 2022",
    desc: "This property consists of 3 floors.The ground floor comprises and dining room, equipped kitchen and bathroom.",
    blogimage: bg6VideoImg,
    author: "Ali tufan",
  },
  {
    id: 7,
    title: "Condo/Apartment for sale in Alte, Portugal",
    date: "26 Augest 2022",
    desc: "Fantástico moinho em fase final de acabamentos para venda em Alte, Loulé imóvel afetação de armazém.",
    blogimage: bg2VideoImg,
    author: "Ali tufan",
  },
  {
    id: 8,
    title: "Skill that you can learn in the real state market",
    date: "26 Augest 2022",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis et sem sed sollicitudin de armazém.",
    blogimage: bg3VideoImg,
    author: "Ali tufan",
  },
  {
    id: 9,
    title: "5 Essential Steps for Buying everyone Investment",
    date: "26 Augest 2022",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis et sem sed sollicitudin de armazém.",
    blogimage: bg6VideoImg,
    author: "Ali tufan",
  },
  {
    id: 10,
    title: "House for sale, Faro, Loulé, Alte, Portugal, in Alte, Portugal",
    date: "26 Augest 2022",
    desc: "This property consists of 3 floors.The ground floor comprises dining room, equipped kitchen and bathroom.",
    blogimage: bgVideoImg,
    author: "Ali tufan",
  },
  {
    id: 11,
    title: "Bedroom Colors You will Never this Regret",
    date: "26 Augest 2022",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis et sem sed sollicitudin de armazém.",
    blogimage: bg5VideoImg,
    author: "Ali tufan",
  },
  {
    id: 12,
    title: "Condo/Apartment for sale in Alte, Portugal",
    date: "26 Augest 2022",
    desc: "Fantástico moinho em fase final de acabamentos para venda em Alte, Loulé imóvel afetação de armazém.",
    blogimage: bg7VideoImg,
    author: "Ali tufan",
  },
  {
    id: 13,
    title: "Skill that you can learn in the real state market",
    date: "26 Augest 2022",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis et sem sed sollicitudin de armazém.",
    blogimage: bg8VideoImg,
    author: "Ali tufan",
  },
  {
    id: 14,
    title: "House for sale, Faro, Loulé, Alte, Portugal, in Alte, Portugal",
    date: "26 Augest 2022",
    desc: "This property consists of 3 floors.The ground floor comprises dining room, equipped kitchen and  bathroom.",
    blogimage: bg9VideoImg,
    author: "Ali tufan",
  },
  {
    id: 15,
    title: "3 bedroom villa with dam for sale in Alte",
    date: "26 Augest 2022",
    desc: "Detached 3 bedroom villa overlooking the mountains, set on a plot of 1,500m² and sold items in the town .",
    blogimage: bg10VideoImg,
    author: "Ali tufan",
  },
  {
    id: 16,
    title: "Skill that you can learn in the real state market",
    date: "26 Augest 2022",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis et sem sed sollicitudin de armazém.",
    blogimage: bg6VideoImg,
    author: "Ali tufan",
  },
  {
    id: 17,
    title: "Skill that you can learn in the real state market",
    date: "26 Augest 2022",
    desc: "This property consists of 3 floors.The ground floor comprises dining room, equipped kitchen and  bathroom.",
    blogimage: bg5VideoImg,
    author: "Ali tufan",
  },
  {
    id: 18,
    title: "Skill that you can learn in the real state market",
    date: "26 Augest 2022",
    desc: "Fantástico moinho em fase final de acabamentos para venda em Alte, Loulé imóvel afetação de armazém.",
    blogimage: bgVideoImg,
    author: "Ali tufan",
  },
];

// end api for blog


const pageNums = Blogs.length / 6;

export default function Blog() {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <>
          {/* start blog section */}

      <section className="blog pb-5" style={{ background: "#F7F7F7" }}> 
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item mt-5">
                <Link className="text-decoration-none" style={{ color: "#484848" }} to={"/"}>Home</Link>
              </li>
              <li
                className="breadcrumb-item active mt-5"
                style={{ color: "#ff5a5e" }}
                aria-current="page"
              >
                Our Blog
              </li>
            </ol>
          </nav>

          <h1 className="fw-bold">Blog</h1>

          {/* blog cards */}

          <div className="row align-items-center justify-content-center">
            {Blogs.slice(currentPage*6 , (currentPage+1) * 6).map((blog) => (
              <BlogCard
                key={blog.id}
                id={blog.id}
                blogimage={blog.blogimage}
                title={blog.title}
                date={blog.date}
                desc={blog.desc}
                author={blog.author}
              />
            ))}
          </div>


          {/* end blog section */}


          {/* start page slide buttons */}


          <div className="row align-items-center justify-content-center pt-5">
            <ul className="d-flex flex-row list-unstyled align-items-center justify-content-center gap-3">

              <li>
                <button onClick={()=>(setCurrentPage(currentPage === 0 ? pageNums-1 : currentPage-1))} className="btn rounded-circle bg-white primary-bg-hover">
                  <FontAwesomeIcon icon={faArrowLeft} />
                </button>
              </li>

              {Array.from({ length: pageNums }, (_, index) => index).map(
                (index) => (
                  <li>
                    <button
                      onClick={() => setCurrentPage(index)}
                      key={index}
                      className={
                        "btn rounded-circle primary-bg-hover " +( currentPage ===
                        index
                          ? "primary-bg"
                          : "bg-white")
                      }
                    >
                      {index + 1}
                    </button>
                  </li>
                )
              )}

              <li>
                <button onClick={()=>(setCurrentPage(currentPage === pageNums-1 ? 0 : currentPage+1))} className="btn rounded-circle bg-white primary-bg-hover">
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </li>

            </ul>
          </div>

          {/* end page slide buttons */}

        </div>
      </section>

      {/* end blog section */}

      <OurPartners />
    </>
  );
}
