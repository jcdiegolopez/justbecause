import { useState } from "react";
import { Transition } from '@headlessui/react'
import MenuOption from './MenuOption';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  let items = ["vasos","combos","comida"];
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="shrink-0 flex flex-row items-center justify-start hover:scale-110 duration-300 " onClick={toggleDropdown}>
      <img
          className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 object-cover"
          alt=""
          src="./svg/arrow/white.svg"
        />
        <div className="shrink-0 flex flex-row items-center justify-start">
          <div className="relative capitalize font-black">productos</div>
        </div>
        
      </div>
      <div className="origin-top-left fixed z-999 mt-2   ">
      <Transition
        show={isOpen}
        enter="transition ease-out duration-200"
        enterFrom="transform scale-0"
        enterTo="transform scale-100"
        leave="transition ease-in duration-200"
        leaveFrom="transform scale-100"
        leaveTo="transform scale-0"
      >
        <div className="bg-morado w-56 rounded-md shadow-lg py-1">
            {items.map((item,index) => <MenuOption key={index} text={item}/>)}
        </div>
      </Transition>
      </div>
      
    </div>
  );
};

export default Dropdown;
