const NavBar1 = ({handleExpand}) => {
    return (
      <div className="relative top-[0rem] left-[0rem] rounded-[10px] [background:linear-gradient(#6d59a0,_#6d59a0),_#f1f1f1] w-[16.06rem] h-[64rem] overflow-hidden ">
        <div className="absolute top-[59.75rem] left-[2.19rem] rounded-[5px] bg-morado w-[13.88rem] h-[2.81rem] flex flex-row items-center justify-center pt-[0.44rem] pb-[0.94rem] pr-[0.06rem] pl-[0rem] box-border gap-[0.75rem] text-gray">
          <img
            className="relative w-[1.88rem] h-[1.88rem] object-cover"
            alt=""
            src="/BRANDING/STICKERS/Artboard-3-cutted.png"
          />
          <div className="w-[10.44rem] h-[2.31rem] flex flex-row flex-wrap items-center justify-start gap-[1.31rem]">
            <div className="relative font-semibold">Invitado</div>
            <img
              className="relative w-[2.19rem] h-[2.19rem] overflow-hidden shrink-0 object-contain rotate-180"
              alt=""
              src="/svg/login/white.svg"
            />
          </div>
        </div>
        <div className="absolute top-[43.19rem] left-[2.75rem] hidden flex-row items-center justify-start gap-[1rem]">
          <img
            className="relative w-[1.88rem] h-[1.88rem] overflow-hidden shrink-0 object-cover"
            alt="1"
            src="/saved@2x.png"
          />
          <div className="relative">Saved</div>
        </div>
        <div className="absolute top-[48.38rem] left-[2.75rem] hidden flex-row items-center justify-start gap-[1rem]">
          <img
            className="relative w-[1.69rem] h-[1.69rem] overflow-hidden shrink-0 object-cover"
            alt="2"
            src="/setting@2x.png"
          />
          <div className="relative">Setting</div>
        </div>
        <div className="absolute top-[16.44rem] left-[calc(50%_-_90.5px)] flex flex-col items-center justify-start gap-[2.75rem] text-blanco">
          <div className="shrink-0 flex flex-row items-center justify-start gap-[0.81rem]">
            <img
              
              className="relative w-[1.88rem] h-[1.88rem] overflow-hidden shrink-0 object-cover "
              alt=""
              src="/svg/login/white.svg"
            />
            <b className="relative">Iniciar</b>
          </div>
          <div className="shrink-0 flex flex-row items-start justify-start gap-[1.31rem]">
            <img
              className="relative w-[1.29rem] h-[1.17rem] object-cover"
              alt="3"
              src="/svg/home/white.svg"
            />
            <b className="relative">Home</b>
          </div>
          <div className="shrink-0 flex flex-row items-end justify-start gap-[1.31rem]">
            <img
              className="relative w-[1.29rem] h-[1.19rem] object-cover"
              alt="4"
              src="/svg/shop/white.svg"
            />
            <b className="relative">Tienda</b>
          </div>
          <div className="shrink-0 flex flex-row items-start justify-start gap-[1.19rem]">
            <img
              className="relative w-[1.56rem] h-[1.56rem] overflow-hidden shrink-0 object-cover"
              alt=""
              src="/svg/cart/white.svg"
            />
            <b className="relative">Carrito</b>
          </div>
        </div>
        <img
          className="absolute h-[10%] w-[10%] right-[7.4%]"
          alt="5"
          src="/svg/menu/extendedwhite.svg"
          onClick={handleExpand}
        />
        <img
          className="absolute top-[7.19rem] left-[calc(50%_-_90.5px)] w-[11.25rem] h-[4.05rem] object-cover"
          alt=""
          src="/BRANDING/LOGO PNG/Artboard 5 cutted.png"
        />
      </div>
    );
}

export default NavBar1;