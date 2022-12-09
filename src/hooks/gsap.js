import { useEffect } from "react";
import gsap, { Expo } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export const useGsapShutterUnveil = (item, delay = 0, trig) => {
  useEffect(() => {
    const el = item.current;

    gsap.fromTo(
      el,
      {
        height: "100%",
      },
      {
        height: 0,
        duration: 2,
        ease: Expo.easeIn,
        delay: delay,
        scrollTrigger: {
          trigger: trig.current,
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);
};

export const useGsapDownStagger = (arr, delay) => {
  useEffect(() => {
    const el = arr.map((item) => item.current);

    gsap.fromTo(
      el,
      {
        y: "-200%",
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.1,
        ease: Expo.easeIn,
        delay: delay,
      }
    );
  }, []);
};

export const useGsapPhotoDropping = (arr) => {
  useEffect(() => {
    const el = arr.map((item) => item.current);

    gsap.fromTo(
      el,
      {
        y: "-100vh",
        scale: 0,
      },
      {
        y: 0,
        scale: 1,
        duration: 2,
        ease: Expo.easeInOut,
        stagger: 0.1,
        delay: 2.5,
      }
    );
  }, []);
};

export const useGsapPhotoLavitate = (arr, trig) => {
  useEffect(() => {
    const el = arr.map((item) => item.current);
    gsap.fromTo(
      el,
      {
        y: 0,
      },
      {
        y: "-40%",
        ease: Expo.easeInOut,
        scrollTrigger: {
          trigger: trig.current,
          scrub: 1,
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);
};
