const LoadingPage = () => {
    return (
        <div className="h-full w-full bg-morado">
        <div className="flex h-screen w-screen justify-center items-center">
        <div className="flex-container">
        <img
          className=" w-[5vw] h-[5vw] object-cover duration-300 animate-spin-slow mb-[1vh] ml-[1vh]"
          alt=""
          src="./images/happyface.png"
        />
        
        </div>
        
        </div>
        </div>
    );
}

export default LoadingPage;