import "../CSSFiles/Newsletter.css";

const NewsletterSection = () => {
  return (
    <section className="newsletter-section">
      <div className="newsletter-container">
        <div className="newsletter-content">
          <h2 className="newsletter-title">Sign up for our newsletter</h2>
          <p className="newsletter-description">
            Stay up to date with the roadmap progress, announcements and exclusive
            discounts. Feel free to sign up with your email.
          </p>
          <form className="newsletter-form">
            <div className="form-group">
              <div className="input-wrapper">
                <label htmlFor="email" className="visually-hidden">
                  Email address
                </label>
                <span className="email-icon">
                  <svg
                    className="icon"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </span>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <button type="submit" className="subscribe-button">
                Subscribe
              </button>
            </div>
            <p className="newsletter-footer">
              We care about the protection of your data.{' '}
              <a href="#">Read our Privacy Policy</a>.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
