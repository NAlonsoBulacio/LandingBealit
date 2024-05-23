import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Registro2 from "../../components/Registro/Registro";
import logo from "../../assets/logo-trans.png";
const LandingVideo = () => {
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();
  const actualizarEstadoPadre = (estado) => {
    if (estado === true) {
      history.push("/video");
    }
  };
  return (
    <div className="bg-[#07A3BA] h-full">
      
      <div className=" flex flex-wrap justify-center items-start py-4 lg:py-4">
        <div className="w-full flex justify-center">
          <img className="w-[220px]" src={logo} alt="" />
        </div>
        <div className="space-y-2 px-3 lg:px-20 py-3">
          <p className="text-lg lg:text-xl italic text-gray-200">
            Lo que no quieren que sepas
          </p>
          <h1 className="text-balance font-podium text-4xl lg:text-6xl uppercase text-gray-100">
            Descubre el Método Científicamente Probado de 5 Minutos para
            (Revitalizar tu Piel en menos de 90 días) sin cirugía. Garantizado
          </h1>
          <p className="text-lg lg:text-xl italic text-gray-200">
            En una masterclass Exclusiva de X Minutos
          </p>
        </div>
        <div className="px-3 lg:px-32 xl:px-[300px]">
          {isLoading && (
            <div className="flex justify-center items-center mb-4">
              <p className="text-gray-200 text-lg">Cargando video...</p>
              {/* Aquí puedes agregar un spinner si lo deseas */}
            </div>
          )}
          <video
            className="w-full h-auto mb-4 rounded-xl"
            controls
            onLoadedData={() => setIsLoading(false)} // Cuando el video está listo
            onWaiting={() => setIsLoading(true)} // Cuando el video está esperando más datos
          >
            <source
              src="https://res.cloudinary.com/de2r6mtda/video/upload/v1716494722/Bealit/Y2meta.app-MASTERCLASS-_1080p_2_elzkdu.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div>
          <button className="w-[100%] bg-gray-700 hover:bg-gray-500 duration-300 text-white p-3 cursor-pointer rounded-xl text-xl">
            Reservar mi plaza
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingVideo;
