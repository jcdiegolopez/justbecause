import NavBar from "./Components/NavBar";
import Header from "./Components/Header";
import {useState} from 'react';
import { Outlet } from "react-router-dom";
import { Transition } from '@headlessui/react'

const App = () => {
  const [menuExpand, setMenuExpand] = useState(false);

  

  return (
    <div className="relative bg-blanco w-full h-[64rem] overflow-hidden text-left text-[1rem] text-blanco font-mulish">
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
      <div className="bg-blue-500 w-full h-full mt-[10vh] flex">
          <Outlet/>
      </div>
    
    
    
    
    
    </div>
  );
};

export default App;