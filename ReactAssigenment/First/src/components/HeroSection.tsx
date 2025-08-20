import "../CSSFiles/HeroSection.css"
const Hero = ()=>{
    return (
        <section className="hero-section">
  <div className="container">
    <div className="content">
      <h1 className="title">
        Payments tool for software companies
      </h1>
      <p className="description">
        From checkout to global sales tax compliance, companies around the world
        use Flowbite to simplify their payment stack.
      </p>
      <a href="#" className="btn-primary">
        Get started
        <svg
          className="btn-icon"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </a>
      <a href="#" className="btn-secondary">
        Speak to Sales
      </a>
    </div>
    <div className="image-wrapper">
      <img
        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
        alt="mockup"
      />
    </div>
  </div>
</section>

    )
}

export default Hero