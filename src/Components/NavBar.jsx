import { Link } from "react-router-dom";

const NavBar = ( {hidden, manageClose} ) => {
  return (
    
      <div className={`absolute bg-morado w-[16.06rem] h-full overflow-hidden shrink-0 flex flex-col items-center justify-center pt-[1.31rem] pb-[1.19rem] pr-[0.44rem] pl-[2.19rem] box-border gap-[5.19rem]  `}>
        <div className="w-[12.88rem] h-[9.93rem] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[5rem]">
          <img
            className="relative w-[12.88rem] h-[0.82rem] overflow-hidden shrink-0 object-cover hover:-translate-x-1 duration-200"
            alt=""
            src="./svg/close/white.svg"
            onClickCapture={manageClose}
          />
          <img
            className="w-[11.25rem] h-[4.05rem] object-cover ml-[0.19rem] hover:scale-105 duration-300"
            alt=""
            src="./images/logo.png"
          />
        </div>
        <div className="w-[13.44rem] h-[46.38rem] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[29.19rem]">
          <div className="flex flex-col items-center justify-start gap-[2.75rem] h-[14.06rem] ml-[0.31rem]">
            <Link to='/login'>
            <div className="shrink-0 flex flex-row items-center justify-start gap-[0.81rem] hover:scale-110 duration-300">
              <img
                className="relative w-[1.88rem] h-[1.88rem] overflow-hidden shrink-0 object-cover"
                alt=""
                src="./svg/login/white.svg"
              />
              <div className="relative font-black">Login</div>
            </div>
            </Link>
            <Link to='/Home'>
            <div className="shrink-0 flex flex-row items-start justify-start gap-[1.31rem] hover:scale-110 duration-300">
              <img
                className="relative w-[1.29rem] h-[1.17rem] object-cover"
                alt=""
                src="./svg/home/white.svg"
              />
              <div className="relative font-black">Home</div>
            </div>
            </Link>
            <Link to='/shop'>
            <div className="shrink-0 flex flex-row items-end justify-start gap-[1.31rem] hover:scale-110 duration-300">
              <img
                className="relative w-[1.29rem] h-[1.19rem] object-cover"
                alt=""
                src="./svg/shop/white.svg"
              />
              <div className="relative font-black">Tienda</div>
            </div>
            </Link>
            <Link to='/cart'>
            <div className="shrink-0 flex flex-row items-start justify-start gap-[1.19rem] hover:scale-110 duration-300">
              <img
                className="relative w-[1.56rem] h-[1.56rem] overflow-hidden shrink-0 object-cover"
                alt=""
                src="./svg/cart/white.svg"
              />
              <div className="relative font-black">Carrito</div>
            </div>
          </Link>
          </div>
          <div className="rounded-[5px] bg-morado w-[13.44rem] h-[3.06rem] flex flex-row items-center justify-center pt-[0.44rem] pb-[0.94rem] pr-[0.06rem] pl-[0rem] box-border gap-[0.75rem] text-gray ">
            <img
              className="relative w-[1.88rem] h-[1.88rem] object-cover hover:scale-110 duration-300"
              alt=""
              src="./images/sticker.png"
            />
            <div className="w-[10.44rem] h-[2.31rem] flex flex-row flex-wrap items-center justify-start gap-[1.31rem]">
              <div className="relative font-medium">Invitado</div>
              <img
                className="relative w-[2.19rem] h-[2.19rem] overflow-hidden shrink-0 object-contain hover:scale-110 duration-300"
                alt=""
                src="./svg/logout/white.svg"
              />
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default NavBar;