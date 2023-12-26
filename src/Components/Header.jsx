const Header = ( {manageOpen} ) => {
    return (
      
        <div className="absolute top-[-0.06rem] left-[0rem] bg-morado w-full overflow-hidden flex flex-row items-center justify-between pt-[1.25rem] px-[5.44rem] pb-[1.27rem] box-border ">
          <img
            className="relative w-[2.81rem] h-[2.73rem] object-cover hover:scale-110 duration-300"
            alt=""
            src="./images/happyface.png"
          />
          <div className="shrink-0 flex flex-row items-center justify-start gap-[2rem]">
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
            <img
              className="relative w-[1.44rem] h-[1.36rem] object-cover hover:scale-110 duration-300"
              alt=""
              src="/svg/cart/white.svg"
            />
            <img
              className="relative w-[1.88rem] h-[1.88rem] object-cover hover:scale-110 duration-300"
              alt=""
              src="./images/sticker.png"
            />
          </div>
        </div>
      
    );
  };
  
  export default Header;
  