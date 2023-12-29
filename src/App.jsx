import NavBar from "./Components/NavBar";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import {useState} from 'react';
import { Outlet } from "react-router-dom";
import { Transition } from '@headlessui/react'

const App = () => {
  const [menuExpand, setMenuExpand] = useState(false);

  

  return (
    <div className="bg-blanco w-full min-h-screen overflow-hidden text-left text-[1rem] text-blanco font-mulish">
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
      <div className="flex flex-col min-h-screen mt-[10vh] ">
        <div className="flex-grow mb-auto h-full bg-blue-500">
            <Outlet/>  
        </div>
          <Footer/>  
      </div>
      
      
      
      
    
    
    
    
    
    </div>
  );
};

export default App;