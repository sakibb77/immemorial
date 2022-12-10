import React, { useRef } from "react";
import {
  useGsapFeaturedLeftShutterUnveil,
  useGsapFeaturedRightShutterUnveil,
} from "../hooks/gsap";

const Featured = () => {
  const featuredRef = useRef(null);
  const featuredShutterleftRef = useRef(null);
  const featuredShutterRightRef = useRef(null);

  useGsapFeaturedLeftShutterUnveil(featuredShutterleftRef, featuredRef);
  useGsapFeaturedRightShutterUnveil(featuredShutterRightRef, featuredRef);

  return (
    <section className="featured wrapper" ref={featuredRef}>
      <h6 className="section__title">featured</h6>
      <div className="featured__wrapper">
        <div className="featured__left">
          <span>90'S TELEPHONE</span>
          <img
            src="https://images.pexels.com/photos/2587464/pexels-photo-2587464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <span
            className="featured__shutter-left"
            ref={featuredShutterleftRef}
          ></span>
        </div>
        <div className="featured__right">
          <span>90'S CASSETTE PLAYER</span>
          <img
            src="https://images.pexels.com/photos/6076410/pexels-photo-6076410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <span
            className="featured__shutter-right"
            ref={featuredShutterRightRef}
          ></span>
        </div>
      </div>
    </section>
  );
};

export default Featured;
