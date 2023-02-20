import React, { useState, useEffect } from "react";

const Image = ({ src, alt }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [bgColor, setBgColor] = useState("#e2e8f0");

  useEffect(() => {
    const image = new window.Image();
    image.src = src;
    image.onload = () => setIsLoaded(true);
  }, [src]);

  useEffect(() => {
    if (!isLoaded) {
      const intervalId = setInterval(() => {
        setBgColor(bgColor === "#e2e8f0" ? "#f7fafc" : "#e2e8f0");
      }, 5000);
      return () => clearInterval(intervalId);
    }
  }, [isLoaded, bgColor]);

  return (
    <>
      {!isLoaded && (
        <div
          style={{
            backgroundColor: bgColor,
            width: "100%",
            height: "100%",
            borderRadius: "10px"
          }}
        />
      )}
      {isLoaded && <img src={src} alt={alt} />}
    </>
  );
};

export default Image;
