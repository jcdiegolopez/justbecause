const ShopPage = ({handleExpand}) => {
  return (
    
      <div className="relative top-[0rem] left-[0rem] rounded-[10px] bg-morado w-[5.44rem] h-[64rem] overflow-hidden ">
        <div className="absolute top-[18.94rem] left-[calc(50%_-_13.25px)] flex flex-col items-center justify-start gap-[3.06rem] h-[100%]">
          <img
            className=" left-[calc(50%_-_13.25px)] relative w-[1.88rem] h-[1.88rem] object-cover"
            alt=""
            src="/svg/login/white.svg"
          />
          <img
            className="relative w-[1.29rem] h-[1.17rem] object-cover"
            alt=""
            src="/svg/home/white.svg"
          />
          <img
            className="relative w-[1.29rem] h-[1.19rem] object-cover"
            alt=""
            src="/svg/shop/white.svg"
          />
          <img
            className="relative w-[1.56rem] h-[1.56rem] overflow-hidden shrink-0 object-cover"
            alt=""
            src="/svg/cart/white.svg"
          />
        </div>
        <img
          className="absolute top-[59.56rem] left-[calc(50%_-_19.5px)] w-[2.19rem] h-[2.19rem] overflow-hidden object-contain rotate-180"
          alt=""
          src="/svg/login/white.svg"
        />
        <img
          className="absolute top-[9.25rem] left-[calc(50%_-_22.5px)] w-[2.69rem] h-[2.61rem] object-cover"
          alt=""
          src="/BRANDING/ISOTIPO PNG/Artboard 1 cutted.png"
        />
        <img
          className="absolute top-[2.75rem] left-[calc(50%_-_14.5px)] w-[1.88rem] h-[1.88rem] overflow-hidden object-cover"
          alt=""
          src="/svg/menu/white.svg"
          onClick={handleExpand}
        />
      </div>
    
  );
};

export default ShopPage;
