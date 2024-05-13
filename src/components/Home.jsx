import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <div className="w-auto p-3 h-75">
        <img src="img/poster.png" className="w-100 h-75" alt="poster" />
      </div>

      <div
        className="d-flex justify-content-between align-items-start mb-3 px-2 py-3 border border-top-1 border-bottom-1"
        style={{ marginTop: "-80px" }}
      >
        <div className="d-flex flex-column gap-0">
          <p>
            Business laundry - simple, flexible and affordable. All types of
            laundry incl. delivery. All weekdays 10-15 or 17-22. 48 hour
            delivery. Digital management and invoice documents.Personal service.
            One-time needs or subscription with recurring pickups.
          </p>

          <p style={{ marginTop: "-10px" }}>
            We are happy to help you with tailor-made solutions for different
            requests!{" "}
          </p>
          <p style={{ marginTop: "-10px" }}>support@laundrop.se</p>
          <p style={{ marginTop: "-10px" }}>072-8712652</p>
        </div>

        <div className="d-flex flex-column">
          <div className="d-flex justify-content-center align-content-center">
            <img
              src="img/cleaning.png"
              className="w-100 h-100"
              alt="cleaning"
            />
          </div>

          <Link
            to="/"
            className="d-flex justify-content-center align-content-center m-3"
          >
            <button
              type="button"
              className="btn text-light"
              style={{
                backgroundColor: "#afe8bd",
                width: "100px",
                height: "50px",
              }}
            >
              About us
            </button>
          </Link>
        </div>
      </div>

      <h6 className="pl-2">Read more about our services</h6>

      <div className="category px-5 py-1 fs-5 d-flex flex-row gap-3">
        <div className="d-flex flex-column gap-0">
          <div className="p-3 m-1">
            <img
              src="img/floor.jpg"
              alt="floor"
              style={{ width: "200px", height: "120px" }}
            />
          </div>
          <h6>Cleaning service for private customers</h6>
          <div className="border border-1">
            <p className="fs-6 px-2">
              {" "}
              Our ambition is to offer home cleaning services, without breaking
              the bank. The price for home cleaning varies slightly depending on
              the size of the residence and how often you want cleaning
              services.
            </p>
            <p className="fs-6 px-2">
              Price for bi-weekly home cleaning:SEK 289/hour.
            </p>
            <p className="fs-6 px-2">
              Price for monthly home cleaning:SEK 249/hour.
            </p>
          </div>
        </div>

        <div className="d-flex flex-column gap-0">
          <div className="p-3 m-1">
            <img
              src="img/table.jpg"
              alt="table"
              style={{ width: "200px", height: "120px" }}
            />
          </div>
          <h6>Cleaning service for company customers</h6>
          <div className="border border-1">
            <p className="fs-6 px-2">
              {" "}
              Everything for your company. We are happy to help you with
              everything from recurring cleaning to easier handy work and
              relocation, tailored to your needs and wishes. The price for
              company cleaning varies slightly depending on the size of the
              offices and how often you want cleaning services.
            </p>
            <p className="fs-6 px-2">
              Price for bi-weekly company cleaning:SEK 389/hour.
            </p>
            <p className="fs-6 px-2">
              Price for monthly company cleaning:SEK 349/hour.
            </p>
          </div>
        </div>

        <div className="d-flex flex-column gap-0">
          <div className="p-3 m-1">
            <img
              src="img/eco.jpg"
              alt="eco"
              style={{ width: "200px", height: "120px" }}
            />
          </div>
          <h6>Eco - Friendly Service</h6>
          <div className="border border-1">
            <p className="fs-6 px-2">
              {" "}
              Just as you, we care about the environment and work with
              eco-labelled products. We are more than just your normal
              professional commercial cleaners. So much more. The price for eco-
              friendly cleaning varies slightly depending on the size of the
              places and how often you want cleaning services.
            </p>
            <p className="fs-6 px-2">
              Price for bi-weekly company cleaning:SEK 399/hour.
            </p>
            <p className="fs-6 px-2">
              Price for monthly company cleaning:SEK 359/hour.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
