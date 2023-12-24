import NavBar1 from "./Components/NavBar1";
import NavBar2 from "./Components/NavBar2";
import {useState} from 'react';
import { Outlet } from "react-router-dom";

const App = () => {
  const [menuExpand, setMenuExpand] = useState(true);

  

  return (
    <div className="flex bg-blanco w-full h-[64rem] overflow-hidden text-left text-[1rem] text-dark2 font-open-sans ">
    <div className="flex-none">
      {menuExpand ? <NavBar1 handleExpand={() => setMenuExpand(false)} /> : <NavBar2  handleExpand={() => setMenuExpand(true)} />}
      
    </div>
    <div className="flex-1 bg-blue-500">
      <Outlet/> 
    </div>
    
    
    </div>
  );
};

export default App;
