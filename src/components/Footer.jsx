const Footer = () => {
  return (
    <div className="footer footer-expand-lg px-5 py-1 text-bg-dark text-light fixed-bottom d-flex justify-content-evenly align-items-start fs-6">
      <div className="d-flex flex-column px-5 py-2 gap-0">
        <div className="fs-5 fw-semibold">MENU</div>
        <div style={{ marginTop: "-6px" }}>About us</div>
        <div style={{ marginTop: "-6px" }}>Login</div>
        <div style={{ marginTop: "-6px" }}>Booking</div>
        <div style={{ marginTop: "-6px" }}>Profile</div>
      </div>

      <div className="d-flex flex-column p-2">
        <div className="fs-5 fw-semibold">SOCIALS</div>
        <div className="d-flex justify-content-center align-items-center flex-wrap">
          <a href="#" className="m-2">
            <ion-icon name="logo-facebook"></ion-icon>
          </a>

          <a href="#" className="m-2">
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>

          <a href="#" className="m-2">
            <ion-icon
              name="logo-instagram"
              href="#"
              cursor="pointer"
            ></ion-icon>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
