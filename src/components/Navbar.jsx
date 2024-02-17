import PropTypes from 'prop-types';
import { NavLink, Outlet } from 'react-router-dom';

const Navbar = (props) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary mb-2 shadow" data-bs-theme={props.theme}>
        <div className="container">
          <NavLink className="navbar-brand" href="/">{props.title}</NavLink>
          <div className="navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">{props.aboutText}</NavLink>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox"
                role="switch" id="switchTheme" style={{ scale: '1.5' }}
                onClick={props.toggleTheme}
              />
              <label className={`form-check-label ms-3 text-${props.theme === 'dark' && 'light'}`} htmlFor="switchTheme">
                Enable {props.theme === 'dark' ? 'Light' : 'Dark'}Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
  toggleTheme: PropTypes.func,
};

Navbar.defaultProps = {
  title: "Title",
  aboutText: "About",
  theme: "light"
};

export default Navbar;