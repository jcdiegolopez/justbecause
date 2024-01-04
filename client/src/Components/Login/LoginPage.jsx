import  { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    correo: "",
    contrasena: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/login",formData);
      console.log(response.data.msg);
    }catch (err) {
      console.log(err.response.data.msg);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center relative text-slate-400">
      <div className="flex relative flex-col items-center lg:min-h-[50vh] lg:min-w-[30vw] sm:min-w-[60vw] sm:min-h-[40vh]  min-w-[85vw] min-h-[50vh] md:min-h-[30vh] md:min-w-[30vw] bg-white rounded-lg shadow-lg gap-[0.5rem]">
        <h1 className="text-slate-600 mt-[3rem]">Log In</h1>
        <a className="flex items-center justify-center w-[75%] py-[1rem] text-sm font-medium transition duration-300 rounded-2xl text-slate-500 bg-slate-100 hover:bg-slate-200 focus:ring-4 focus:ring-slate-300">
          <img className="h-[1.2rem] mr-[1rem]" src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/logos/logo-google.png" alt="" />
          Inicia sesión con Google
        </a>
        <div className="flex flex-row w-full justify-center items-center">
          <div className="w-[30%] bg-slate-200 h-[0.1rem]"></div>
          <p className="mx-[1rem]">or</p>
          <div className="w-[30%] bg-slate-200 h-[0.1rem]"></div>
        </div>
        <form onSubmit={handleFormSubmit} className="w-[75%] relative flex flex-col mb-[1rem]">
          <label htmlFor="correo" className="mb-2 text-[0.9rem] text-start text-slate-500">
            correo:
          </label>
          <input
            id="correo"
            type="email"
            name="correo"
            placeholder="mail@ejemplo.com"
            value={formData.correo}
            onChange={handleInputChange}
            className="flex items-center w-[90%] px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-slate-200 mb-7 placeholder:text-slatey-500 bg-slate-100 text-dark-grey-900 rounded-2xl"
          />
          <label htmlFor="contrasena" className="mb-2 text-[0.9rem] text-start text-slate-500">
            Contraseña:
          </label>
          <input
            id="contrasena"
            type="password"
            name="contrasena"
            placeholder="Tu contraseña"
            value={formData.contrasena}
            onChange={handleInputChange}
            className="flex items-center w-[90%] px-5 py-4 mb-5 mr-2 text-sm font-medium outline-none focus:bg-slate-200 placeholder:text-slate-500 bg-slate-100 text-dark-grey-900 rounded-2xl"
          />
          <a href="#" className="ml-[45%] w-full text-[0.85rem] font-medium text-violet-500">
            ¿Olvidaste tu contraseña?
          </a>
        </form>
        <button
          className="w-[90%] mx-[1rem] px-6 py-5 mb-5 text-[0.9rem] font-bold leading-none text-white transition duration-300 md:w-96 rounded-2xl hover:bg-violet-600 focus:ring-4 focus:ring-purple-blue-100 bg-violet-500"
          onClick={handleFormSubmit}
        >
          Iniciar Sesión
        </button>
        <p className="text-[0.9rem] leading-relaxed text-grey-900">
          ¿No tienes cuenta aún? <Link to="/register" className="font-bold text-violet-500">¡Crea una!</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
