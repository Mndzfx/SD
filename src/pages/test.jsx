import React from "react";
import Lottie from "lottie-react";
import splashAnimation from "./Scene.json";

const SplashScreen = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <Lottie animationData={splashAnimation} loop={false} />
    </div>
  );
};

export default SplashScreen;