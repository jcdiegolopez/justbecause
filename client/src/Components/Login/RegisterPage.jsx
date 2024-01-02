import { Link } from "react-router-dom";

const LoginPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center relative text-slate-400 py-[2rem]">
        <div className="flex relative flex-col items-center lg:min-h-[50vh] lg:min-w-[30vw] sm:min-w-[60vw] sm:min-h-[40vh]  min-w-[85vw] min-h-[50vh] md:min-h-[30vh] md:min-w-[30vw] bg-white rounded-lg shadow-lg gap-[0.5rem]">
    <h1 className="text-slate-600 mt-[3rem]">Registro</h1>
    <a className="flex items-center justify-center w-[75%] py-[1rem]  text-sm font-medium transition duration-300 rounded-2xl text-slate-500 bg-slate-100 hover:bg-slate-200 focus:ring-4 focus:ring-slate-300">
      <img className="h-[1.2rem] mr-[1rem]" src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/logos/logo-google.png" alt=""/>
      Regístrate con Google
    </a>
    <div className=" flex flex-row w-full justify-center items-center">
      <div className="w-[30%] bg-slate-200 h-[0.1rem]"></div>
      <p className="mx-[1rem]">o</p>
      <div className="w-[30%] bg-slate-200 h-[0.1rem]"></div>
    </div>
    <div className="w-[75%] relative flex flex-col mb-[1rem]">
      <label htmlFor="name" className="mb-2 text-[0.9rem] text-start text-slate-500">Nombre:</label>
      <input id="name" type="text" placeholder="Tu nombre completo" className="flex items-center w-[90%] px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-slate-200 mb-7 placeholder:text-slate-500 bg-slate-100 text-dark-grey-900 rounded-2xl"/>
      <label htmlFor="email" className="mb-2 text-[0.9rem] text-start text-slate-500">Correo:</label>
      <input id="email" type="email" placeholder="mail@ejemplo.com" className="flex items-center w-[90%] px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-slate-200 mb-7 placeholder:text-slatey-500 bg-slate-100 text-dark-grey-900 rounded-2xl"/>
      <label htmlFor="password" className="mb-2 text-[0.9rem] text-start text-slate-500">Contraseña:</label>
      <input id="password" type="password" placeholder="Tu contraseña" className="flex items-center w-[90%] px-5 py-4 mb-5 mr-2 text-sm font-medium outline-none focus:bg-slate-200 placeholder:text-slate-500 bg-slate-100 text-dark-grey-900 rounded-2xl"/>
      <label htmlFor="confirmPassword" className="mb-2 text-[0.9rem] text-start text-slate-500">Confirmar Contraseña:</label>
      <input id="confirmPassword" type="password" placeholder="Confirma tu contraseña" className="flex items-center w-[90%] px-5 py-4 mb-5 mr-2 text-sm font-medium outline-none focus:bg-slate-200 placeholder:text-slate-500 bg-slate-100 text-dark-grey-900 rounded-2xl"/>
      <button className="max-w-[100%] px-6 py-5 mb-5 text-[0.9rem] font-bold  text-white transition duration-300 md:w-96 rounded-2xl hover:bg-violet-600 focus:ring-4 focus:ring-purple-blue-100 bg-violet-500">Registrar</button>
      <p className="text-[0.9rem] leading-relaxed text-grey-900">¿Ya tienes una cuenta? <Link to="/login" className="font-bold text-violet-500">¡Inicia sesión!</Link></p>
    </div>
  </div>
        </div>

            
        
    );
}

export default LoginPage;