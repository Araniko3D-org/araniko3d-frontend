import React from 'react';
import './styles.css';

const WebsiteStats = () => {
  return (
    <div className="website-stats-container">
      <div className="stats-rectangle">
        <div className="stat-circle">
          <div class="circle-content">
            10+
          </div>
          <div class="content-below">CULTURAL SITES</div>
        </div>
        <div className="stat-circle">
          <div class="circle-content">
            3
          </div>
          <div class="content-below">DISTRICTS</div>
        </div>
        <div className="stat-circle">
          <div class="circle-content">
            500+
          </div>
          <div class="content-below">VIEWS</div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteStats;
