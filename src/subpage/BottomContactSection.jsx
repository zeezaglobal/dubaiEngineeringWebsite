import React from "react";
import { Link } from "react-router-dom"; // ✅ Make sure this is imported

export default function BottomContactSection() {
  return (
    <div className="container-fluid bg-dark text-white py-5">
      <div className="container text-center">
        <h3 className="mb-4">Get in Touch</h3>
        <p>
          Email:{" "}
          <a href="mailto:contact@solidcoreengineering.com" className="text-white">
            contact@solidcoreengineering.com
          </a>
        </p>
        <p>
          Phone:{" "}
          <a href="tel:+971504172443" className="text-white">
            +971 50 417 2443
          </a>
        </p>
        <Link
          to="/contact"
          className="btn btn-light rounded-pill mt-3"
          style={{ minWidth: 130 }}
        >
          Contact Sales
        </Link>
      </div>
    </div>
  );
}
