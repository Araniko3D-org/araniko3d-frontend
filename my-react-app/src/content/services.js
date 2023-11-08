import BhaktapurImage from "./images/Bhaktapur.png";
import NyatapolImage from "./images/Nyatapol.png";
import CarpetImage from "./images/Cartpet.png";
import slideIcon from "./images/seemore.png";
const services = () => {
    return (
      <div className="workpage">
      <div id='services' className="services-section">
      <div className="slide-icon">
          <img src={slideIcon} alt="Slide Icon" />
        </div>
          <p className="OurServices">Our Services</p>
          <p className="OServices">Our <span>Services</span></p>
  
        {/* Create a container for the frame */}
        <div className="frame-container">
          {/* Rectangle with text overlapping at the bottom */}
          <div className="frame">
            <div className="service-image">
              <img src={BhaktapurImage} alt="Work 1" />
            </div>
            <div className="text-overlay">
              <frameh4>Bhaktapur Durbar Square</frameh4>
              <h5>Virtual Tourism</h5>
            </div>
          </div>
  
          {/* Repeat the frame for more images */}
          <div className="frame">
            <div className="service-image">
              <img src={NyatapolImage} alt="Work 1" />
            </div>
            <div className="text-overlay">
              <frameh4>Nyatapol</frameh4>
              <h5>360 degree views</h5>
            </div>
          </div>
          
          <div className="frame">
            <div className="service-image">
              <img src={CarpetImage} alt="Work 1" />
            </div>
            <div className="text-overlay">
              <frameh4>Carpet Exhibition</frameh4>
              <h5>Agumentation</h5>
            </div>
          </div>
          {/* Add more frames as needed */}
        </div>
      </div>
      </div>
    );
  };
  
  export default services;
  