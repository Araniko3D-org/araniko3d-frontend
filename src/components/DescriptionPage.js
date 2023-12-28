// DescriptionPage.js
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import "./DescriptionPage.css";
import Footer from "../content/footer.js";

// import Image from "../components/360image/360image";

import { ImageSlider } from "../components/ImageSlider/ImageSlider";

import { DescriptionMap } from "../components/DescriptionMap/DescriptionMap";

import { locationData } from "../data/locations";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// Import Swiper styles
import "swiper/css";
import "swiper/swiper-bundle.css";

function DescriptionPage() {
  const navigate = useNavigate();
  const [data, setData] = useState();
  const [nearBy, setNearBy] = useState();
  console.log(nearBy);

  const { title } = useParams();

  useEffect(() => {
    const monument = locationData.filter(
      (data) => data.title.replace(/\s/g, "") === title
    );
    const nearByPlaces = locationData.filter(
      (data) => data.title.replace(/\s/g, "") !== title
    );
    setNearBy(nearByPlaces);

    if (monument.length > 0) {
      const capitalizedTitle = monument[0].title
        .toLowerCase()
        .replace(/(^|\s)\S/g, (char) => char.toUpperCase());

      const capitalizedMonument = {
        ...monument[0],
        title: capitalizedTitle,
      };

      setData(capitalizedMonument);
      // setData(monument[0]);
    }
  }, [title]);

  function renderYouTubeVideo() {
    const videoUrl = data.youtube;

    // const videoUrl = "https://www.youtube.com/watch?v=WN4-8-jBUG0";

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
    <div className="DescriptionPage">
      <div className="UpperDiv">
        {data && (
          <Swiper
            modules={[Scrollbar, Pagination, A11y]}
            // spaceBetween={50}
            slidesPerView={1}
            // navigation
            loop={true} // Enable continuous loop
            loopedSlides={4} // Number of total slides (adjust as ne
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log("slide change")}
          >
            {data.images.map((image, key) => {
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
          </Swiper>
        )}
      </div>
      <div className="description">
        <div className="desctiption-container">
          <div className="description-content">
            {data && <h2 className="description-title">{data.title}</h2>}

            {data && <p>{data.description}</p>}
          </div>
          <div className="description-map-container">
            {data && (
              <DescriptionMap position={[data.latitude, data.longitude]} />
            )}
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center youtube-video">
        <div className="youtube-video-container">
          {data && renderYouTubeVideo()}
        </div>
      </div>

      {/* 360 view */}
      {/* <div className="pano-image swiper-container">
       */}
      <div className="pano-image">
        {data && (
          <>
            <ImageSlider images={data.panellumImage} />
            {/* <Swiper
              className="custom-swiper"
              modules={[Scrollbar, Navigation, A11y]}
              navigation
              slidesPerView={1}
              loop={true}
              loopedSlides={1}
            >
              {data.panellumImage.map((image, key) => {
                return (
                  <SwiperSlide key={key}>
                    <Image imageUrl={image} />
                  </SwiperSlide>
                );
              })}
            </Swiper> */}
          </>
        )}
        {/* <div className="des-navigation-buttons">
          <div className="des-nav-container">
            <button className="nav-button">&lt;&lt;</button>
            <button className="nav-button">&gt;&gt;</button>
          </div>
        </div> */}
      </div>

      {/* Near by places */}
      <div className="Near-by-palces">
        <p className="Place-title">Near By Places</p>
        <div className="near-frame-container">
          {/* Rectangle with text overlapping at the bottom */}

          {nearBy &&
            nearBy.slice(0, 3).map((nearbylocation) => {
              return (
                <div
                  className="frame near-by-place-container"
                  // onClick={console.log(nearbylocation.title.replace(/\s/g, ""))}
                  // onClick={handleDivClick}
                  onClick={() => {
                    navigate(
                      "/description-page/" +
                        nearbylocation.title.replace(/\s/g, "")
                    );
                    window.scrollTo(0, 0);
                  }}
                >
                  <div className="service-image ">
                    <img
                      src={`/monuments/${nearbylocation.images[0]}`}
                      alt="Work 1"
                    />
                  </div>
                  <div className="text-overlay near-by-place">
                    <h4 className="frameh4">{nearbylocation.title}</h4>
                    <h5 className="frameh5">{nearbylocation.location}</h5>
                  </div>
                </div>
              );
            })}
          {/* <div className="frame">
            <div className="service-image">
              <img src={BhaktapurImage} alt="Work 1" />
            </div>
            <div className="text-overlay near-by-place">
              <h4 className="frameh4">Bhaktapur Durbar Square</h4>
              <h5 className="frameh5">Bhaktapur</h5>
            </div>
          </div>

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
          </div> */}
          {/* Add more frames as needed */}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default DescriptionPage;
