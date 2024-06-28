import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import Registro2 from "../../components/Registro/Registro";
import logo from "../../assets/logo-trans.png";
import { MdOutlineAdsClick } from "react-icons/md";
import video from "../../assets/masterclassBealit.mp4";
const LandingVideo = () => {
  const [showImage, setShowImage] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showButton, setShowButton] = useState(false);
  const [showTopRightButton, setShowTopRightButton] = useState(false);
  const history = useHistory();
  const videoRef = useRef(null);

  const handleClick = () => {
    setShowImage(false);
    setIsPlaying(true);
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const currentTime = videoRef.current.currentTime;
      if (currentTime >= 585) {
        // 9 minutes 45 seconds
        setShowButton(true);
      }
      if (currentTime >= 600) {
        // 10 minutes
        setShowTopRightButton(true);
      }
    }
  };

  const actualizarEstadoPadre = (estado) => {
    if (estado === true) {
      history.push("/video");
    }
  };

  return (
    <div className="bg-[#018FE1] h-screen lg:h-full pb-14">
      <div className="flex flex-wrap justify-center items-start">
        <div className="w-full flex justify-center">
          <img className="w-[220px]" src={logo} alt="" />
        </div>
        <div className="space-y-2 px-3 lg:px-20 py-3">
          <p className="text-lg lg:text-xl italic text-gray-200">
            Lo que no quieren que sepas
          </p>
          <h1 className="text-balance font-podium text-4xl lg:text-6xl uppercase text-gray-100">
            Descubre el Método Científicamente Probado de 5 Minutos para
            <span className="text-gray-700">
              {" "}
              Revitalizar tu Piel en menos de 90 días
            </span>{" "}
            sin cirugía. Garantizado
          </h1>
          <p className="text-lg lg:text-xl italic text-gray-200">
            En una masterclass Exclusiva de 10 Minutos
          </p>
        </div>
        <div className="px-3 lg:px-44 xl:px-[380px] relative">
          {showImage && (
            <img
              className="button-video w-full h-auto mb-4 rounded-xl cursor-pointer"
              src="https://cdn.shopify.com/s/files/1/0694/5161/2377/files/videopreview.png?v=1719583128"
              alt="Placeholder"
              onClick={handleClick}
            />
          )}
          {(!showImage || isPlaying) && (
            <div className="relative">
              <video
                ref={videoRef}
                className="w-full h-auto mb-4 rounded-xl"
                controls
                onLoadedData={() => setIsLoading(false)}
                onWaiting={() => setIsLoading(true)}
                autoPlay={isPlaying}
                playsInline
                onTimeUpdate={handleTimeUpdate}
              >
                <source
                  src={video}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              {showTopRightButton && (
                <a
                href="https://bealit.mx/products/kit-revitalizante-antiage" 
                className="absolute top-2 right-2 bg-gray-200 hover:bg-gray-500 duration-300 text-[#018FE1] px-4 py-2 cursor-pointer rounded-full text-sm">
                  Click aqui para conseguir tu oferta!
                </a>
              )}
            </div>
          )}
        </div>
        {/* {showButton && ( */}
        <div className="w-full lg:w-auto mx-3">
          <a 
          href="https://bealit.mx/products/kit-revitalizante-antiage"
          className="button-lead flex justify-center items-center w-[100%] font-noto-700 font-semibold bg-gray-700 hover:bg-gray-500 duration-300 text-gray-50 px-2 lg:px-6 py-3 cursor-pointer rounded-xl text-lg lg:text-xl uppercase">
            <MdOutlineAdsClick className="mr-2 text-2xl  lg:text-3xl" />{" "}
            Comenzar hoy para una piel radiante
          </a>
        </div>
        {/* )} */}
      </div>
    </div>
  );
};

export default LandingVideo;
