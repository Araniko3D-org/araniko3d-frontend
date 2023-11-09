// DescriptionPage.js
import React, { useState } from "react";
import "./DescriptionPage.css";
import BhaktapurHero from "./images/BhaktapurHero.png";
import Bhaktapur1 from "./images/Bhaktapur1.png";
import Bhaktapur2 from "./images/Bhaktapur2.png";
import Bhaktapur3 from "./images/Bhaktapur3.png";
import { DescriptionMap } from "../components/DescriptionMap/DescriptionMap";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// Import Swiper styles
import "swiper/css";

function DescriptionPage() {
  const initialContent = `Bhaktapur Durbar Square (Nepali: भक्तपुर दरबार क्षेत्र) is a former royal palace complex located in Bhaktapur, Nepal. It housed the Malla kings of Nepal from the 14th to the 15th century and the kings of the Kingdom of Bhaktapur from the 15th to the late 18th century until the kingdom was conquered in 1769. Today, this square is recognized by UNESCO, managed jointly by the Archeological Department of Nepal and Bhaktapur Municipality, and is under heavy restoration due to the damages from the earthquake in 1934 and the recent earthquake of 2015.[1] The Durbar Square is a generic name for the Malla palace square and can be found in Kathmandu and Patan as well. The one in Bhaktapur was considered the biggest and the grandest among the three during its independency but now many of the buildings that once occupied the square have been lost to the frequent earthquakes.[2] During its height, Bhaktapur Durbar Square contained 99 courtyards but today hardly 15 of these courtyards remain.[2] The square has lost most of its buildings and courtyards to frequent earthquakes, particularly those in 1833 and 1934, and only a few of the damaged buildings were restored.`;

  const [showFullContent, setShowFullContent] = useState(false);
  const content = showFullContent
    ? initialContent
    : initialContent.slice(0, 700) + "...";

  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  function renderYouTubeVideo() {
    const videoUrl = "https://www.youtube.com/watch?v=NYt3ISwC6jk";

    // Extract the video ID from the URL
    const videoId = videoUrl.split("v=")[1];

    // Create the iframe code
    return (
      <iframe
        width="100%"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube Video"
        frameBorder="0"
        allowFullScreen
      />
    );
  }
  return (
    <div className="container">
      <div className="top-bar">
        <div className="page-title">Bhaktapur Durbar Square</div>
        <a className="back-button" href="/">
          ✖
        </a>
      </div>

      <div className="UpperDiv">
        <div className="left-column">
          <div className="image">
            <img src={Bhaktapur1} alt="Bhaktapur1" />
          </div>
          <div className="image">
            <img src={Bhaktapur2} alt="Bhaktapur2" />
          </div>
          <div className="image">
            <img src={Bhaktapur3} alt="Bhaktapur3" />
          </div>
        </div>

        <div className="hero-column">
          <div className="hero">
            <img src={BhaktapurHero} alt="BhaktapurHero" />
          </div>
        </div>

        {/* <div className="right-column">
          <div className="nav">
            <a href="/read-articles">Read Articles</a>
            <a href="/watch-videos">Watch Videos</a>
            <a href="/360-degree-view">360 Degree View</a>
          </div>
          <ul className="location-timepoint">
            <li>Location</li>
            <li>Time Point</li>
          </ul>
        </div> */}
        {/* <div className="description-map-container"> */}
        <div className="description-map-container-top">
          <DescriptionMap position={[27.6721, 85.4281]} />
        </div>
      </div>

      <div className="main-content">
        <div className="description">
          Description:
          <p>{content}</p>
          {!showFullContent && (
            <span className="read-more" onClick={toggleContent}>
              {showFullContent ? "See Less <<" : "See More >>"}
            </span>
          )}
        </div>
        {/* <div className="description-map-container">
          <DescriptionMap position={[27.6721, 85.4281]} />
        </div> */}

        <div className="youtube-video-container">{renderYouTubeVideo()}</div>
      </div>
    </div>
  );
}

export default DescriptionPage;

// {/* <SwiperSlide key={1}>
//         <div className="image">
//           <img src={Bhaktapur1} alt="Bhaktapur1" />
//         </div>
//       </SwiperSlide>
//       <SwiperSlide key={2}>
//         <div className="image">
//           <img src={Bhaktapur1} alt="Bhaktapur1" />
//         </div>
//       </SwiperSlide>
//       <SwiperSlide key={2}>
//         <div className="image">
//           <img src={Bhaktapur3} alt="Bhaktapur3" />
//         </div>
//       </SwiperSlide>
//       <SwiperSlide key={3}>
//         <div className="image">
//           <img src={Bhaktapur3} alt="Bhaktapur3" />
//         </div>
//       </SwiperSlide>

//     {/* <div> */}
//       {/* <Swiper
//       // install Swiper modules
//       modules={[Navigation, Pagination, Scrollbar, A11y]}
//       spaceBetween={50}
//       slidesPerView={1}
//       navigation
//       pagination={{ clickable: true }}
//       // scrollbar={{ draggable: true }}
//       onSwiper={(swiper) => console.log(swiper)}
//       onSlideChange={() => console.log("slide change")}
//     >
//       <SwiperSlide>
//         <SwiperSlide key={1}>
//           <img src={Bhaktapur1} alt="Bhaktapur1" />
//         </SwiperSlide>
//       </SwiperSlide>
//       <SwiperSlide>
//         <SwiperSlide key={2}>
//           <img src={Bhaktapur2} alt="Bhaktapur2" />
//         </SwiperSlide>
//       </SwiperSlide>
//       <SwiperSlide>
//         <SwiperSlide key={3}>
//           <img src={Bhaktapur3} alt="Bhaktapur3" />
//         </SwiperSlide>
//       </SwiperSlide>
//       <SwiperSlide>
//         <SwiperSlide key={4}>
//           <img src={Bhaktapur3} alt="Bhaktapur3" />
//         </SwiperSlide>
//       </SwiperSlide>
//       ...
//     </Swiper> */}

//  <Swiper
//             // install Swiper modules
//             // Navigation, Pagination,
//             modules={[Scrollbar, A11y]}
//             spaceBetween={50}
//             slidesPerView={1}
//             // navigation
//             // pagination={{ clickable: true }}
//             // scrollbar={{ draggable: true }}
//             onSwiper={(swiper) => console.log(swiper)}
//             onSlideChange={() => console.log("slide change")}
//           >
//             <SwiperSlide key={1}>
//               <div className="hero">
//                 <img src={BhaktapurHero} alt="BhaktapurHero" />
//               </div>
//             </SwiperSlide>

//             <SwiperSlide key={2}>
//               <div className="hero">
//                 {/* <img src={BhaktapurHero} alt="BhaktapurHero" /> */}
//                 <img src={Bhaktapur1} alt="Bhaktapur1" />
//               </div>
//             </SwiperSlide>

//             <SwiperSlide key={3}>
//               <div className="hero">
//                 <img src={BhaktapurHero} alt="BhaktapurHero" />
//                 {/* <img src={Bhaktapur2} alt="Bhaktapur2" /> */}
//               </div>
//             </SwiperSlide>

//             <SwiperSlide key={4}>
//               <div className="hero">
//                 <img src={BhaktapurHero} alt="BhaktapurHero" />
//                 {/* <img src={Bhaktapur3} alt="Bhaktapur3" /> */}
//               </div>
//             </SwiperSlide>
//             <SwiperSlide> ...</SwiperSlide>
//           </Swiper> */}
