import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <div className="poster-container">
        <img src="img/poster.png" className="poster-image" alt="poster" />
      </div>

      <div className="info-section">
        <div className="text-content">
          <p>
            Business laundry - simple, flexible and affordable. All types of
            laundry incl. delivery. All weekdays 10-15 or 17-22. 48 hour
            delivery. Digital management and invoice documents.Personal service.
            One-time needs or subscription with recurring pickups.
          </p>
          <p>
            We are happy to help you with tailor-made solutions for different
            requests!
          </p>
          <p>support@StädaFintAB.se</p>
          <p>072-8712652</p>
        </div>

        <div className="image-button-container">
          <div className="image-container">
            <img
              src="img/cleaning.png"
              className="cleaning-image"
              alt="cleaning"
            />
          </div>

          <Link to="/" className="about-link">
            <button type="button" className="about-button">
              About us
            </button>
          </Link>
        </div>
      </div>

      <h6 className="service-header">Read more about our services</h6>

      <div className="category">
        <div className="service-card">
          <div className="service-image-container">
            <img src="img/floor.jpg" alt="floor" className="service-image" />
          </div>
          <h6>Cleaning service for private customers</h6>
          <div className="service-info">
            <p>
              Our ambition is to offer home cleaning services, without breaking
              the bank. The price for home cleaning varies slightly depending on
              the size of the residence and how often you want cleaning
              services.
            </p>
            <p>Price for bi-weekly home cleaning: SEK 289/hour.</p>
            <p>Price for monthly home cleaning: SEK 249/hour.</p>
          </div>
        </div>

        <div className="service-card">
          <div className="service-image-container">
            <img src="img/table.jpg" alt="table" className="service-image" />
          </div>
          <h6>Cleaning service for company customers</h6>
          <div className="service-info">
            <p>
              Everything for your company. We are happy to help you with
              everything from recurring cleaning to easier handy work and
              relocation, tailored to your needs and wishes. The price for
              company cleaning varies slightly depending on the size of the
              offices and how often you want cleaning services.
            </p>
            <p>Price for bi-weekly company cleaning: SEK 299/hour.</p>
            <p>Price for monthly company cleaning: SEK 259/hour.</p>
          </div>
        </div>

        <div className="service-card">
          <div className="service-image-container">
            <img src="img/eco.jpg" alt="eco" className="service-image" />
          </div>
          <h6>Eco - Friendly Service</h6>
          <div className="service-info">
            <p>
              Just as you, we care about the environment and work with
              eco-labelled products. We are more than just your normal
              professional commercial cleaners. So much more. The price for
              eco-friendly cleaning varies slightly depending on the size of the
              places and how often you want cleaning services.
            </p>
            <p>Price for bi-weekly eco-cleaning: SEK 309/hour.</p>
            <p>Price for monthly eco-cleaning: SEK 269/hour.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
