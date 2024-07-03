import { useHistory, Link, NavLink } from 'react-router-dom';

const Navbar = ({ SearchText, setSearchText }) => {
  const history = useHistory();

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    history.push('/SearchView');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to='/'>MovieBrowser</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" exact to='/'>Home</NavLink>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/SearchView" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="true">
                Dropdown
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><NavLink className="dropdown-item" exact to='/'>Home</NavLink></li>
                <li><NavLink className="dropdown-item" to="/about">About Us</NavLink></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About Us</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to='/comingsoon'>Coming Soon</NavLink>
            </li>
          </ul>
          <form className="d-flex" onSubmit={handleSearchSubmit}>
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={SearchText} onChange={handleInputChange} />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
