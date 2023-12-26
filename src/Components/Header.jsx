import { Link } from "react-router-dom";

const Header = ( {manageOpen} ) => {
  return (
    
      <div className="absolute top-[-0.06rem] left-[0rem] bg-morado w-full overflow-hidden flex flex-row items-center justify-between pt-[1.25rem] px-[2rem] pb-[1.27rem] box-border h-[10.2vh]">
        <img
          className="relative w-[2.81rem] h-[2.73rem] object-cover hover:scale-110 duration-300"
          alt=""
          src="./images/happyface.png"
        />
        <div className="shrink-0 flex flex-row items-center justify-start gap-[3vw] right-[10vw]">
          <div className="shrink-0 flex flex-row items-center justify-start hover:scale-110 duration-300" onClick={manageOpen} >
            <img
              className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 object-cover "
              alt=""
              src="./svg/menu/white.svg"
            />
            <div className="shrink-0 flex flex-row items-center justify-start ">
              <div className="relative capitalize font-black">Menu</div>
            </div>
          </div>
          <div className="shrink-0 flex flex-row items-center justify-start hover:scale-110 duration-300">
            <div className="shrink-0 flex flex-row items-center justify-start">
              <div className="relative capitalize font-black">productos</div>
            </div>
            <img
              className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 object-cover"
              alt=""
              src="./svg/arrow/white.svg"
            />
          </div>
          <Link to="/cart">
          <img
            className="relative w-[1.44rem] h-[1.36rem] object-cover hover:scale-110 duration-300"
            alt=""
            src="/svg/cart/white.svg"
          />
          </Link>
          <Link to="/profile">
          <img
            className="relative w-[1.5rem] h-[1.5rem] object-cover hover:scale-110 duration-300"
            alt=""
            src="./images/sticker.png"
          />
          </Link>
        </div>
      </div>
    
  );
};

export default Header;
