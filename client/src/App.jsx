import NavBar from "./Components/NavBar";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import LoadingPage from "./Components/LoadingPage";
import {useState, useEffect} from 'react';
import { Outlet } from "react-router-dom";
import { Transition } from '@headlessui/react'

const App = () => {
  const [menuExpand, setMenuExpand] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() =>{
    setTimeout(() => setLoading(false),3000);
  },[]);
  

  if(loading) {
    return <LoadingPage/>
  }else{

  return (
    <div className="bg-blanco relative w-full min-h-screen overflow-hidden text-left text-[1rem] text-blanco font-mulish">
    <Header manageOpen={()=> setMenuExpand(p => !p)}/>
    <Transition
        show={menuExpand}
        enter="transition-all duration-500"
        enterFrom="-ml-64"
        enterTo="ml-0"
        leave="transition-all duration-500"
        leaveFrom="-ml-0"
        leaveTo="-ml-64"
      >
        <NavBar hidden={menuExpand} manageClose={() => {setMenuExpand(false)}}/>
      </Transition>
      <div className=" z-0 flex flex-col min-h-screen mt-[10vh] ">
        <div className="relative flex-grow w-full bg-slate-200">
            <Outlet/>  
        </div>
          <Footer/>  
      </div>
      
      
      
      
    
    
    
    
    
    </div>
  );}
};

export default App;