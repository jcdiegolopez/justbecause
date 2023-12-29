import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h1>Oh no, this route doesnt exist!</h1>
      <Link to="/">
        <p className="text-black">You can go back to the home page by clicking <strong>here</strong>, though!</p>
      </Link>
    </div>
  );
};

export default ErrorPage;