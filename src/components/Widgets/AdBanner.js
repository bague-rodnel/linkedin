import React from "react";

const AdBanner = () => {
  return (
    <div className="ad-banner card">
      <img
        src="https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg"
        alt=""
      />

      <style jsx>{`
        .ad-banner {
          padding: 0;
        }
      `}</style>
    </div>
  );
};

export default AdBanner;
