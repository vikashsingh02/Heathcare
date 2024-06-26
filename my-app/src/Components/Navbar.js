import "../Styles/Navbar.css";
function Navbar(){
    return (
        <div className="navbar-section container">
          <h1 className="navbar-title">
            <a href="#">
              Health <span className="navbar-sign">+</span>
            </a>
          </h1>
    
       
          <ul className="navbar-items">
            <li>
              <a href="#home" className="navbar-links">
                Home
              </a>
            </li>
            <li>
              <a href="#services" className="navbar-links">
                Services
              </a>
            </li>
            <li>
              <a href="#about" className="navbar-links">
                About
              </a>
            </li>
            <li>
              <a href="#reviews" className="navbar-links">
                Reviews
              </a>
            </li>
            <li>
              <a href="#doctors" className="navbar-links">
                Doctors
              </a>
            </li>
          </ul>
    
          <button
            className="navbar-btn"
            type="button"
                    >
             Live Chat
          </button>
           
          </div>
       
      );
    }
    
    export default Navbar;
