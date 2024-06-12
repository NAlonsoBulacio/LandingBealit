import React from "react";
import { useHistory } from "react-router-dom";
import Registro2 from "../../components/Registro/Registro";
import logo from "../../assets/logo-trans.png";

const Landing = () => {
  const history = useHistory();
  const actualizarEstadoPadre = (estado) => {
    if (estado === true) {
      history.push("/video");
    }
  };

  return (
    <div className="bg-[#5fc6d6] w-full lg:w-auto ">
      <div className="flex flex-wrap justify-center items-start py-4 ">
        <div className="w-full flex justify-center">
          <img className="w-64" src={logo} alt="" />
        </div>
        <div className="space-y-2 px-3 lg:px-10 xl:px-44">
          <p className="text-lg lg:text-xl italic text-gray-200">
            Lo que no quieren que sepas
          </p>
          <h1 className="text-balance font-podium text-4xl lg:text-7xl uppercase text-gray-100">
            Descubre el Método Científicamente Probado de 5 Minutos para 
           <span className="text-gray-700"> Revitalizar tu Piel en menos de 90 días</span>  sin cirugía. Garantizado
          </h1>
          <p className="text-lg lg:text-xl italic text-gray-200">
            En una masterclass Exclusiva de 10 Minutos
          </p>
        </div>
        <div className="flex flex-wrap  justify-center px-3 lg:px-10 xl:px-32 py-4">
          <div className="w-full lg:w-[50%] flex justify-center px-0 lg:px-3 ">
            <video className="w-full h-auto mb-4 rounded-xl" loop muted autoPlay playsInline>
              <source
                src="https://res.cloudinary.com/de2r6mtda/video/upload/v1716496259/Bealit/Dise%C3%B1o_sin_t%C3%ADtulo_1_ijbhrb.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="w-full lg:w-[40%] ">
            <Registro2 actualizarEstado={actualizarEstadoPadre} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
