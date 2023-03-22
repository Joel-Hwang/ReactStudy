import React, { useRef } from "react";
import './Camera.css';

const Camera: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const startWebcam = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }
    } catch (err) {
      console.error("Error: ", err);
    }
  };

  return (
    <div>
      <button onClick={startWebcam}>Start webcam</button>
      <video className="compact" ref={videoRef} />
    </div>
  );
};

export default Camera;