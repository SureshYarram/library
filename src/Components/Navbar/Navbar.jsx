import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className="navbar">


       


                   


        {/* Populate 5 buttons with EXACT same classnames as of their routes name */}
        {/* Example: 
            <button className="history"> Link to history here  </button>  */}
        {/* Home component will have `/` route and classname as `home`  */}

        <div className="navbar">
        <Link to='/'>Home</Link>
        <Link to={`/section/${'History'}`}>History</Link>
        <Link to={`/section/${'Technology'}`}>Technology</Link>
        <Link to={`/section/${'Mythology'}`}>Mythology</Link>
        <Link to={`/section/${'Mystery'}`}>Mystery</Link>
    </div>
      </div>
    </>
  );
};
