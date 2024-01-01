import { NavLink } from "react-router-dom";

const MenuOption = ({text}) => {
    return (

        <NavLink
              to={`./shop/${text}`}
              
              className={({isActive}) => isActive ? "text-amarillo block px-4 py-2 text-sm" : " block px-4 py-2 text-sm hover:text-amarillo"}
              role="menuitem"
              
            >
              {text}
            </NavLink> 
    );
}

export default MenuOption;