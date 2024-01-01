const LoadingPage = () => {
    return (
        <div className="h-full w-full bg-morado">
        <div className="flex h-screen w-screen justify-center items-center">
        <div className="flex-container">
        <img
          className=" h-[7vh] object-cover duration-300 animate-spin-slow"
          alt=""
          src="./images/happyface.png"
        />
        
        </div>
        
        </div>
        </div>
    );
}

export default LoadingPage;