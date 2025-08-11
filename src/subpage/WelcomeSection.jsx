import { COMPANY_NAME } from "../utils/globals";
import "./WelcomeSection.css"; // custom styles

export default function WelcomeSection() {
  return (
    <div className="scroll-section vh-100 d-flex justify-content-center align-items-center" style={{ margin: 0 }}>
      <div className="text-center" >
        <h1 className="fw-bold sf-font">
          Precision Solutions for Cable Laying <br />
          Built for Industry, Trusted in the GCC.
        </h1>

        {/* Company Caption */}
        <p className="fs-6 sf-font">
          Crafting durable solutions for industrial needs,
          <br />
          ensuring precision and long-lasting performance.
        </p>

        {/* Image Below */}
        <img
          src="/src/assets/solidworks.jpeg"
          alt={`${COMPANY_NAME} Services`}
          className="img-fluid rounded-4 fade-in-image shadow mt-4"
          style={{ maxWidth: "700px" }}
        />
      </div>
    </div>
  );
}
