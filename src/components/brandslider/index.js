import React from "react";
import Marquee from "react-fast-marquee";

function BrandSlider() {
  return (
    <div className="sm:my-[10%] mt-[20%]">
      <div>
        <h1 className="text-center ">Our Technology Partner</h1>
      </div>

      <div>
        <Marquee className="mq" direction="right" speed={60}>
          <div className="image_wrapper">
            <img
              src="https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/7ae42bac3b34999c0db3.png"
              alt=""
            />
          </div>
          <div className="image_wrapper">
            <img
              src="https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/b2bd91d7b87b2181ca45.png"
              alt=""
            />
          </div>
          <div className="image_wrapper">
            <img
              src="https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6591cdc0702b32310306.png"
              alt=""
            />
          </div>
          <div className="image_wrapper">
            <img
              src="https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3b7d9f4b073deb6a9b74.png"
              alt=""
            />
          </div>
          <div className="image_wrapper">
            <img
              src="https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3cd767dea94a85078ca4.png"
              alt=""
            />
          </div>
          <div className="image_wrapper">
            <img
              src="https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/a2b3c3709ffedce2a22a.png"
              alt=""
            />
          </div>
        </Marquee>
      </div>
      <div>
        <Marquee className="mq" direction="left" speed={60}>
          <div className="image_wrapper">
            <img
              src="https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6c585c33ca6c71c79bb7.png"
              alt=""
            />
          </div>
          <div className="image_wrapper">
            <img
              src="https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/9dd55e54b5a28658bf4e.png"
              alt=""
            />
          </div>
          <div className="image_wrapper">
            <img
              src="https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/0384060dcbf73b6a707c.png"
              alt=""
            />
          </div>
          <div className="image_wrapper">
            <img
              src="https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/35e044b3354aaa0caed5.png"
              alt=""
            />
          </div>
          <div className="image_wrapper">
            <img
              src="https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/f50ae7cbf6cc805bdadc.png"
              alt=""
            />
          </div>
          <div className="image_wrapper">
            <img
              src="https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6c585c33ca6c71c79bb7.png"
              alt=""
            />
          </div>
        </Marquee>
      </div>
    </div>
  );
}

export default BrandSlider;
