import { Link } from "react-router-dom";

const SingleNavber = () => {
    return (
        <div className="nav space-x-5">
        <Link to="/">Home</Link>
        <Link to="/career">Career</Link>
        <Link to="/about">About</Link>
      </div>
    );
};

export default SingleNavber;