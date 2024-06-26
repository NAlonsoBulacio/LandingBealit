import React, { useState } from 'react';

const Registro2 = ({ actualizarEstado }) => {
  const [formData, setFormData] = useState({
    Name: '',
    Phone: ''
  });
  const [errors, setErrors] = useState({
    Name: "Completar con su nombre",
    Phone: "Donde te enviamos la Masterclass?",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const validate = (formData) => {
    let errors = {};
    if (!formData.Name) {
      errors.Name = "Llenar con su nombre";
    }
    if (!formData.Phone) {
      errors.Phone = "Donde te enviamos la Masterclass?";
    }
    // Aquí puedes agregar validaciones adicionales según sea necesario
    setErrors(errors);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    if (name === 'Phone' && value.trim().length > 0 && !value.startsWith('+52')) {
      setFormData({
        ...formData,
        [name]: '+52' + value
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  
    validate({ ...formData, [name]: value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(errors).length === 0) {
      submitForm();
    } else {
      setFormSubmitted(true);
    }
  };

  const submitForm = () => {
    const formDatab = new FormData();
    for (const key in formData) {
      formDatab.append(key, formData[key]);
    }

    fetch(
      "https://script.google.com/macros/s/AKfycbxluznPEhCzUIQkcIG-DmHeureqstKFVxMpHgE_Gmde7kOUKG43fraESuVco1rqEO6kkw/exec",
      {
        method: "POST",
        body: formDatab,
        mode: "no-cors",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
    
    // Actualización de estado después de enviar el formulario
    actualizarEstado(true);
  };

  return (
    <div className="App p-0 lg:p-4 space-y-4 w-full">
      <div className="flex flex-wrap justify-center">
        <h1 className="text-sm lg:text-lg font-semibold text-center uppercase text-gray-200">Rellena el formulario con tu nombre y teléfono</h1>
      </div>
      <div>
        <form className="flex flex-wrap space-y-2" onSubmit={handleSubmit}>
          <input
            className="w-full border-gray-700 border-[1px] py-2 px-2 focus:outline-none focus:border-gray-700 rounded-xl"
            placeholder="Tu Nombre"
            name="Name"
            type="text"
            value={formData.Name}
            onChange={handleChange}
            autoComplete="name"
          />
          {formSubmitted && errors.Name && (
            <span className="text-red-500">{errors.Name}</span>
          )}

          {/* Input para el número de teléfono */}
          <div className="w-full relative">
            {errors.Phone ? <span className="absolute left-2 top-2 text-gray-500">+52</span> : ""}
            <input
              className={`${errors.Phone ? "pl-10" : ""} w-full border-gray-700 border-[1px] py-2 px-2 focus:outline-none focus:border-gray-700 rounded-xl`}
              placeholder="Tu numero de telefono"
              name="Phone"
              type="text"
              value={formData.Phone}
              onChange={handleChange}
              autoComplete="phone"
            />
          </div>
          {formSubmitted && errors.Phone && (
            <span className="text-red-500">{errors.Phone}</span>
          )}

          {/* Botón de submit */}
          <input
            type="submit"
            className="flex justify-center items-center w-full font-noto-700 font-semibold bg-gray-700 hover:bg-gray-500 duration-300 text-gray-100 px-6 py-3 cursor-pointer rounded-xl text-xl"
            value="Reservar mi plaza!"
          />
        </form>
      </div>
    </div>
  );
};

export default Registro2;
