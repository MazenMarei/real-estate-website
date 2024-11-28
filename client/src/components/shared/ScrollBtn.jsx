import React, { useState, useEffect } from "react";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ScrollBtn() {
  const [visible, setVisible] = useState(false);
  const [animationClass, setAnimationClass] = useState("");

  /// Show the scroll up button when the user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.scrollY + document.documentElement.clientHeight >=
        document.documentElement.scrollHeight / 4
      ) {
        setVisible(true);
        setAnimationClass("slide-and-fade-in");
      } else {
        if (!visible) return;
        console.log("invisible before middle");
        setAnimationClass("slide-and-fade-out");
        setTimeout(() => {
          setVisible(false);
          setAnimationClass("");
        }, 300);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [visible]);

  /// Scroll to the top of the page
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setTimeout(() => {
      setAnimationClass("slide-and-fade-out");
      setTimeout(() => {
        setVisible(false);
        setAnimationClass("");
      }, 300);
    }, 1000);
  };

  return (
    <button
      className={`btn secondary-bg rounded-circle scroll-up-btn position-fixed z-3 bottom-0 end-0 me-3 mb-3 ${
        visible ? animationClass : "d-none"
      }`}
      onClick={handleClick}
      id="scrollUpBtn"
    >
      <FontAwesomeIcon icon={faArrowUp} className="primary-color fs-3" />
    </button>
  );
}
