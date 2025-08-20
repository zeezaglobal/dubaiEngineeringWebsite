import { COMPANY_NAME } from "../utils/globals";
import "./WelcomeSection.css";
import bg from "../../src/assets/bg-pattern.png";
import banner from "../../src/assets/solidworks.png";
export default function WelcomeSection() {
  return (
    <div
      className="scroll-section vh-100 d-flex justify-content-center align-items-center"
      style={{ margin: 0 }}
    >
      <div className="text-center position-relative">
        {/* Background Pattern - inside heading container */}
        <img
          src={bg}
          alt="Floating"
          style={{
            position: "absolute",
            top: "-70px", // adjust so it sits just above h1
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 0,
            width: "300px",
            opacity: 0.3 // optional, to look more like a background
          }}
        />

        {/* Heading */}
        <h1 className="fw-bold sf-font position-relative" style={{ zIndex: 1 }}>
          Precision Solutions for Cable Laying <br />
          Built for Industry, Trusted in the GCC.
        </h1>

        {/* Caption */}
        <p className="fs-6 sf-font">
          Crafting durable solutions for industrial needs,
          <br />
          ensuring precision and long-lasting performance.
        </p>

        {/* Image Below */}
        <img
          src={banner}
          alt={`${COMPANY_NAME} Services`}
          className="img-fluid rounded-4 fade-in-image shadow mt-4"
          style={{ maxWidth: "700px" }}
        />
      </div>
    </div>
  );
}
