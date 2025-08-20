import '../CSSFiles/FooterSection.css';
const FooterSection = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="https://flowbite.com" className="footer-logo">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                alt="Flowbite Logo"
                className="footer-logo-img"
              />
              <span className="footer-logo-text">Flowbite</span>
            </a>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h2 className="footer-heading">Resources</h2>
              <ul>
                <li><a href="https://flowbite.com">Flowbite</a></li>
                <li><a href="https://tailwindcss.com">Tailwind CSS</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h2 className="footer-heading">Follow us</h2>
              <ul>
                <li><a href="https://github.com/themesberg/flowbite">GitHub</a></li>
                <li><a href="https://discord.gg/4eeurUVvTy">Discord</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h2 className="footer-heading">Legal</h2>
              <ul>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms & Conditions</a></li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="footer-bottom">
          <span className="footer-copy">
            © 2023 <a href="https://flowbite.com">Flowbite™</a>. All Rights Reserved.
          </span>
          <div className="footer-social">
            <a href="#" aria-label="Facebook">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#" aria-label="Discord">
              <i className="fa-brands fa-discord"></i>
            </a>
            <a href="#" aria-label="Twitter">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a href="#" aria-label="GitHub">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="#" aria-label="Dribbble">
              <i className="fa-brands fa-dribbble"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
