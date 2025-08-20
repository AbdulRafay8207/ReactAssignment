import "../CSSFiles/Navbar.css"
const Navbar = () => {
    return (
    <nav className="navbar">
      <div className="container">
        <a href="https://flowbite.com/" className="logo">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            alt="Flowbite Logo"
            className="logo-img"
          />
          <span className="logo-text">Flowbite</span>
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="menu-icon"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <div className="navbar-menu" id="navbar-default">
          <ul className="menu-list">
            <li>
              <a href="#" className="active">
                Home
              </a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar