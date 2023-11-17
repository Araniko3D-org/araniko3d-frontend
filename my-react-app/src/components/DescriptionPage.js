// DescriptionPage.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./DescriptionPage.css";
import Footer from "../content/footer.js";
import BhaktapurHero from "./images/BhaktapurHero.png";
import BhaktapurImage from "../content/images/Bhaktapur.png";
import UmaMaheswori from "../content/images/Umamaheswori.jpeg";
import BhagBhairav from "../content/images/BhagBhairav.jpg";
import { DescriptionMap } from "../components/DescriptionMap/DescriptionMap";

import { locationData } from "../data/locations";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// Import Swiper styles
import "swiper/css";

function DescriptionPage() {
  const [data, setData] = useState();

  const [initialContent, setInitalContent] = useState();
  const { title } = useParams();

  useEffect(() => {
    const monument = locationData.filter(
      (data) => data.title.replace(/\s/g, "") === title
    );
    if (monument.length > 0) {
      const capitalizedTitle = monument[0].title
        .toLowerCase()
        .replace(/(^|\s)\S/g, (char) => char.toUpperCase());

      const capitalizedMonument = {
        ...monument[0],
        title: capitalizedTitle,
      };

      setData(capitalizedMonument);
      setInitalContent(capitalizedMonument.description);
      // setData(monument[0]);
    }

    console.log(monument);
    // setInitalContent(monument.title);
  }, [title]);

  // const initialContent = data.title;

  // const initialContent = `Bhaktapur Durbar Square (Nepali: भक्तपुर दरबार क्षेत्र) is a former royal palace complex located in Bhaktapur, Nepal. It housed the Malla kings of Nepal from the 14th to the 15th century and the kings of the Kingdom of Bhaktapur from the 15th to the late 18th century until the kingdom was conquered in 1769. Today, this square is recognized by UNESCO, managed jointly by the Archeological Department of Nepal and Bhaktapur Municipality, and is under heavy restoration due to the damages from the earthquake in 1934 and the recent earthquake of 2015.[1] The Durbar Square is a generic name for the Malla palace square and can be found in Kathmandu and Patan as well. The one in Bhaktapur was considered the biggest and the grandest among the three during its independency but now many of the buildings that once occupied the square have been lost to the frequent earthquakes.[2] During its height, Bhaktapur Durbar Square contained 99 courtyards but today hardly 15 of these courtyards remain.[2] The square has lost most of its buildings and courtyards to frequent earthquakes, particularly those in 1833 and 1934, and only a few of the damaged buildings were restored.`;

  // const initialContent = `Sundari Chowk, also known as the Beautiful Courtyard, is a remarkable architectural gem located within the historic city of Bhaktapur in Nepal's Kathmandu Valley. It is one of the many courtyards within the Bhaktapur Durbar Square complex, a UNESCO World Heritage Site. Sundari Chowk is renowned for its exquisite craftsmanship and intricate design, reflecting the rich Newari architectural tradition.\n

  // The courtyard is enclosed by beautifully carved wooden windows, intricately adorned doors, and magnificent peacock windows. The central element of the courtyard is the grand sunken water tank, known as the "Tusha Hiti," featuring a lavishly decorated water spout. The layout of Sundari Chowk is a testament to the meticulous planning and craftsmanship of the Malla dynasty, who ruled Bhaktapur.\n

  // Sundari Chowk stands as a living testament to the artistic and cultural heritage of the region, attracting visitors from around the world who come to admire its beauty and historical significance. The courtyard remains a tranquil and captivating place, where one can immerse themselves in the rich history and artistry of Bhaktapur.\n

  // Sundari Chowk, situated within Bhaktapur Durbar Square, is a harmonious blend of cultural and architectural splendor. The name "Sundari" means "beautiful," and this courtyard lives up to its name. It is a prime example of Newari architecture, known for its intricate woodwork and fine craftsmanship.\n\n

  // The courtyard features 36 artistically designed windows, each telling its own unique story through the intricate carvings that adorn them. These windows are carved in a distinctive Newari style, often depicting deities, animals, and mythological figures. The wooden struts and columns, along with ornate doorways, add to the overall elegance of Sundari Chowk.\n

  // The central element of the courtyard is the Tusha Hiti, a sunken water tank with a magnificently carved water spout. The water spout is embellished with statues of gods and goddesses, showcasing the deep religious and cultural significance of the courtyard. Visitors to Sundari Chowk are transported back in time, experiencing the grandeur of the Malla period and the architectural brilliance of the Newars in the Kathmandu Valley. It remains a cherished heritage site, capturing the hearts and imaginations of all who visit.\n`;

  const [showFullContent, setShowFullContent] = useState(false);
  // const content =
  //   initialContent && showFullContent
  //     ? initialContent
  //     : initialContent.slice(0, 700) + "...";

  // const toggleContent = () => {
  //   setShowFullContent(!showFullContent);
  // };

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
  const imageUrl = { BhaktapurHero };

  return (
    <div className="DescriptionPage">
      <div className="UpperDiv">
        {/* <Swiper
            modules={[Scrollbar, Navigation, Pagination, A11y]}
            // spaceBetween={50}
            slidesPerView={1}
            // navigation
            loop={true} // Enable continuous loop
            loopedSlides={4} // Number of total slides (adjust as ne
            pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide key={1}>
              <div className="hero-column">
                <img
                  // src="monuments/sundari_1.jpeg"
                  src={BhaktapurHero}
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
          </Swiper> */}
        {data && (
          <Swiper
            modules={[Scrollbar, Navigation, Pagination, A11y]}
            // spaceBetween={50}
            slidesPerView={1}
            // navigation
            loop={true} // Enable continuous loop
            loopedSlides={4} // Number of total slides (adjust as ne
            pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log("slide change")}
          >
            {data.images.map((image, key) => {
              console.log(key);
              return (
                <SwiperSlide key={key}>
                  <div className="hero-column">
                    <img
                      // src="monuments/sundari_1.jpeg"
                      src={`/monuments/${image}`}
                      className="main-image"
                      alt="BhaktapurHero"
                    />
                  </div>
                </SwiperSlide>
              );
            })}
            {/* <SwiperSlide key={1}>
              <div className="hero-column">
                <img
                  // src="monuments/sundari_1.jpeg"
                  src={`/monuments/${data.images[0]}`}
                  className="main-image"
                  alt="BhaktapurHero"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide key={2}>
              <div className="hero-column">
                <img
                  src={`/monuments/${data.images[1]}`}
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
            </SwiperSlide> */}
          </Swiper>
        )}
      </div>
      <div className="description">
        <div className="desctiption-container">
          <div className="description-content">
            {data && <h2 className="description-title">{data.title}</h2>}

            {/* <h2 className="description-title">BHAKTAPUR DURBAR SQUARE</h2> */}

            {data && <p>{data.description}</p>}
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. voluptate
            </p> */}
          </div>
          <div className="description-map-container">
            {data && (
              <DescriptionMap position={[data.latitude, data.longitude]} />
            )}
            {/* <DescriptionMap position={[27.6727184, 85.3251013]} /> */}
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center youtube-video">
        <div className="youtube-video-container">{renderYouTubeVideo()}</div>
      </div>
      <div className="pano-image">
        <div class="image-container"></div>
      </div>

      {/* Near by places */}
      <div className="Near-by-palces">
        <p className="Place-title">Near By Places</p>
        <div className="frame-container">
          {/* Rectangle with text overlapping at the bottom */}

          <div className="frame">
            <div className="service-image">
              <img src={BhaktapurImage} alt="Work 1" />
            </div>
            <div className="text-overlay">
              <h4 className="frameh4">Bhaktapur Durbar Square</h4>
              <h5 className="frameh5">Bhaktapur</h5>
            </div>
          </div>

          {/* Repeat the frame for more images */}
          <div className="frame">
            <div className="service-image">
              <img src={UmaMaheswori} alt="Work 1" />
            </div>
            <div className="text-overlay">
              <h4 className="frameh4">Uma Maheswori</h4>
              <h5 className="frameh5">Kritipur</h5>
            </div>
          </div>

          <div className="frame">
            <div className="service-image">
              <img src={BhagBhairav} alt="Work 1" />
            </div>
            <div className="text-overlay">
              <h4 className="frameh4">BhagBhairab</h4>
              <h5 className="frameh5">Kritipur</h5>
            </div>
          </div>
          {/* Add more frames as needed */}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default DescriptionPage;
