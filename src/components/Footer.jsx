import React from "react";

const Footer = () => {
  return (
    <footer className="">
      <div className="container p-5 footer-flex">
        <div>
          <h1 className="font-bold mb-0">JobHub</h1>
          <p className="font-medium">@all right reserved</p>
        </div>
        <div>
          <h5 className="font-bold">Follow Us</h5>
          <div className="footer-flex-col">
            <span>Youtube</span>
            <span>LinkedIn</span>
            <span>Github</span>
            <span>Instagram</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
