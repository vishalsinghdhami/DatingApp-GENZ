import whitelogo from "../images/tinder_logo_white.png";
import colorlogo from "../images/color-logo-tinder.png";

const Nav = ({minimal,authToken,setShowModal,showModal,setIsSignUp}) => {
  const handleClick=()=>{
    setShowModal(true);
    setIsSignUp(false);
  }
  
  return (
    <nav>
      <div className="logo-container">
        <img className="logo" src={minimal ?  colorlogo : whitelogo}/>
      </div>
      {
      !authToken &&!minimal && 
      <button className="nav-button" disabled={showModal} onClick={handleClick}> Log In</button>
      }
    </nav>
  );
};

export default Nav;
