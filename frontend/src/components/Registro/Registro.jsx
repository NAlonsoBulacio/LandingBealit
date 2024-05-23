import React, { useState } from 'react';

const Registro2 = ({ actualizarEstado }) => {
  const [formData, setFormData] = useState({
    Name: '',
    Email: ''
  });
  const [errors, setErrors] = useState({
    Name: "completar con su nombre",
    Email: "completar email",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const validate = (formData) => {
    let errors = {};
    if (!formData.Name) {
      errors.Name = "Llenar con su nombre";
    }
    if (!formData.Email) {
      errors.Email = "Debes ingresar un Email.";
    }
    if (formData.Email) {
      const EmailRegex =
        /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
      if (!EmailRegex.test(formData.Email)) {
        errors.Email = "El email ingresado no es válido";
      }
    }
    setErrors(errors);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    validate({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(errors).length === 0) {
      Submit();
    } else {
      setFormSubmitted(true);
    }
  };

  const Submit = () => {
    const formDatab = new FormData();
    for (const key in formData) {
      formDatab.append(key, formData[key]);
    }

    fetch(
      "https://script.google.com/macros/s/AKfycbxs41-dMJbPG4HZM87CYa_WFNaLexnxaDs81jCLmcDWnAbwiMlc58f3qMltRnVg704a/exec",
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
    
    actualizarEstado(true);
  };

  return (
    <div className="App p-0 lg:p-4 space-y-4 w-full">
      <div className="flex flex-wrap justify-center">
        <h1 className="text-md lg:text-lg font-semibold text-center uppercase text-gray-200">Rellena el formulario con tu nombre y email</h1>
      </div>
      {/* <h1 className="text-left">
      Rellena el formulario con tu nombre y email
      </h1> */}
      <div>
        <form
          className="flex flex-wrap space-y-2 "
          onSubmit={handleSubmit}
        >
          <input
            className="w-full border-gray-700 border-[1px] py-2 px-2 focus:outline-none focus:border-gray-700"
            placeholder="Tu Nombre"
            name="Name"
            type="text"
            value={formData.Name}
            onChange={handleChange}
          />
           {formSubmitted && errors.Name && (
                <span className="text-red-500">{errors.Name}</span>
              )}
          <input
            className="w-[100%] border-gray-700 border-[1px] py-2 px-2 focus:outline-none focus:border-gray-700"
            placeholder="Tu Email"
            name="Email"
            type="text"
            value={formData.Email}
            onChange={handleChange}
          />
           {formSubmitted && errors.Email && (
                <span className="text-red-500">{errors.Email}</span>
              )}
          <input
            type="submit"
            className="flex justify-center items-center w-[100%] font-noto-700 font-semibold bg-gray-200 hover:bg-gray-500 duration-300 text-[#07A3BA] px-6 py-3 cursor-pointer rounded-xl text-xl"
            value="Reservar mi plaza!"
          />
        </form>
      </div>
    </div>
  );
};

export default Registro2;
