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
  // const initialContent = `Bhaktapur Durbar Square (Nepali: भक्तपुर दरबार क्षेत्र) is a former royal palace complex located in Bhaktapur, Nepal. It housed the Malla kings of Nepal from the 14th to the 15th century and the kings of the Kingdom of Bhaktapur from the 15th to the late 18th century until the kingdom was conquered in 1769. Today, this square is recognized by UNESCO, managed jointly by the Archeological Department of Nepal and Bhaktapur Municipality, and is under heavy restoration due to the damages from the earthquake in 1934 and the recent earthquake of 2015.[1] The Durbar Square is a generic name for the Malla palace square and can be found in Kathmandu and Patan as well. The one in Bhaktapur was considered the biggest and the grandest among the three during its independency but now many of the buildings that once occupied the square have been lost to the frequent earthquakes.[2] During its height, Bhaktapur Durbar Square contained 99 courtyards but today hardly 15 of these courtyards remain.[2] The square has lost most of its buildings and courtyards to frequent earthquakes, particularly those in 1833 and 1934, and only a few of the damaged buildings were restored.`;

  const initialContent = `Sundari Chowk, also known as the Beautiful Courtyard, is a remarkable architectural gem located within the historic city of Bhaktapur in Nepal's Kathmandu Valley. It is one of the many courtyards within the Bhaktapur Durbar Square complex, a UNESCO World Heritage Site. Sundari Chowk is renowned for its exquisite craftsmanship and intricate design, reflecting the rich Newari architectural tradition.\n

The courtyard is enclosed by beautifully carved wooden windows, intricately adorned doors, and magnificent peacock windows. The central element of the courtyard is the grand sunken water tank, known as the "Tusha Hiti," featuring a lavishly decorated water spout. The layout of Sundari Chowk is a testament to the meticulous planning and craftsmanship of the Malla dynasty, who ruled Bhaktapur.\n

Sundari Chowk stands as a living testament to the artistic and cultural heritage of the region, attracting visitors from around the world who come to admire its beauty and historical significance. The courtyard remains a tranquil and captivating place, where one can immerse themselves in the rich history and artistry of Bhaktapur.\n

Sundari Chowk, situated within Bhaktapur Durbar Square, is a harmonious blend of cultural and architectural splendor. The name "Sundari" means "beautiful," and this courtyard lives up to its name. It is a prime example of Newari architecture, known for its intricate woodwork and fine craftsmanship.\n\n

The courtyard features 36 artistically designed windows, each telling its own unique story through the intricate carvings that adorn them. These windows are carved in a distinctive Newari style, often depicting deities, animals, and mythological figures. The wooden struts and columns, along with ornate doorways, add to the overall elegance of Sundari Chowk.\n

The central element of the courtyard is the Tusha Hiti, a sunken water tank with a magnificently carved water spout. The water spout is embellished with statues of gods and goddesses, showcasing the deep religious and cultural significance of the courtyard. Visitors to Sundari Chowk are transported back in time, experiencing the grandeur of the Malla period and the architectural brilliance of the Newars in the Kathmandu Valley. It remains a cherished heritage site, capturing the hearts and imaginations of all who visit.\n`;

  const [showFullContent, setShowFullContent] = useState(false);
  const content = showFullContent
    ? initialContent
    : initialContent.slice(0, 700) + "...";

  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  function renderYouTubeVideo() {
    const videoUrl = "https://www.youtube.com/watch?v=WN4-8-jBUG0";

    // Extract the video ID from the URL
    const videoId = videoUrl.split("v=")[1];

    // Create the iframe code
    return (
      <iframe
        width="100%"
        height="100%"
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
        <div className="page-title">Sundari Chowk</div>
        <a className="back-button" href="/">
          ✖
        </a>
      </div>
      {/* <div className="left-column">
          <div className="image">
            <img src={Bhaktapur1} alt="Bhaktapur1" />
          </div>
          <div className="image">
            <img src={Bhaktapur2} alt="Bhaktapur2" />
          </div>
          <div className="image">
            <img src={Bhaktapur3} alt="Bhaktapur3" />
          </div>
        </div> */}
      {/* <div className="hero-column"> */}

      <div className="UpperDiv">
        <Swiper
          modules={[Scrollbar, Navigation, Pagination, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          loop={true} // Enable continuous loop
          loopedSlides={4} // Number of total slides (adjust as ne
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide key={1}>
            <div className="hero-column">
              <img
                src="monuments/sundari_1.jpeg"
                className="main-image"
                alt="BhaktapurHero"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide key={2}>
            <div className="hero-column">
              <img
                src="monuments/sundari_2.jpeg"
                className="main-image"
                alt="Bhaktapur1"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide key={3}>
            <div className="hero-column">
              <img
                src="monuments/sundari_3.jpeg"
                className="main-image"
                alt="BhaktapurHero"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide key={4}>
            <div className="hero-column">
              <img
                src="monuments/sundari_4.webp"
                className="main-image"
                alt="BhaktapurHero"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="main-content">
        <div className="description-map">
          <div className="description">
            <span className="description-title">Description:</span>
            <p>{content}</p>
            {!showFullContent && (
              <span className="read-more" onClick={toggleContent}>
                {showFullContent ? "See Less <<" : "See More >>"}
              </span>
            )}
          </div>
          <div className="description-map-container">
            <DescriptionMap position={[27.6727184, 85.3251013]} />
          </div>
        </div>

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
