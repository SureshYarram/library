import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className="navbar">


       


                   


        {/* Populate 5 buttons with EXACT same classnames as of their routes name */}
        {/* Example: 
            <button className="history"> Link to history here  </button>  */}
        {/* Home component will have `/` route and classname as `home`  */}

      <Link className="home" to="/">HOME</Link>
      <Link className="mystrey" to="/mystrey">Mystrey</Link>
      <Link className="technology" to="/technology">Technology</Link>
      <Link className="mythology" to="/mythology">Mythology</Link>
      <Link className="history" to="/history">History</Link>
      </div>
    </>
  );
};
