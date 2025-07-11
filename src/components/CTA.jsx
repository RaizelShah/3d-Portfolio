import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="cta">
      <p className="cta-text">
        Looking to work with a passionate developer?{" "}
        <br className="sm:block hidden" />
        I’m open to exciting opportunities — let’s connect and create something
        great.
      </p>
      <Link to="/contact" className="btn">
        Contact
      </Link>
    </section>
  );
};

export default CTA;
