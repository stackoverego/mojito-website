import React from "react";
import { featureLists, goodLists } from "../../constants";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { useMediaQuery } from "react-responsive";
gsap.registerPlugin(ScrollTrigger);
const Art = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  useGSAP(() => {
    const start = isMobile ? "top 20%" : "top top";

    const maskedTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#art",
        start,
        end: "bottom center",
        scrub: 1.5,
        pin: true,
      }
    })
    .to(".will-fade",{
        opacity: 0 ,stagger: 0.2 ,ease: "power1.inOut",
    })
    .to(".masked-img",{scale:1.3,maskPosition:"center", maskSize:'400%' ,duration:1, ease: "power1.inOut"})
    .to("#masked-content",{opacity:1,duration:1,ease:"power1.inOut"})

  });
  return (
    <div id="art">
      <div className="container mx-auto h-full pt-20">
        <h2 className="will-fade">THE ART</h2>
        <div className="content">
          <ul className="will-fade space-y-4 ">
            {goodLists.map((features, index) => (
              <li key={index} className="flex items-center gap-2">
                <img src="/images/check.png" alt="check" />
                <p>{features}</p>
              </li>
            ))}
          </ul>
          <div className="cocktail-img">
            <img
              src="/images/under-img.jpg"
              alt="cocktail"
              className="abs-center masked-img size-full object-contain"
            />
          </div>

          <ul className="will-fade space-y-4 ">
            {featureLists.map((features, index) => (
              <li key={index} className="flex items-center justify-start gap-2">
                <img src="/images/check.png" alt="check" />
                <p className="md:w-fit w-60">{features}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="masked-container">
          <h2 className="will-fade">Sip-Worthy Perfection</h2>
          <div id="masked-content">
            <h2>Made with Craft and Poured with Passion</h2>
            <p>
              This isn't just a drink. It's a carefully crafted moment made just
              for you
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Art;
