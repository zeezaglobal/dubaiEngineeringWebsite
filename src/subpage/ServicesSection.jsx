import "./ServiceSection.css";
import ProductScroller from "../components/ProductScroller"; 
export default function ServicesSection() {
  return (
    // Removed "justify-content-center" from this line
    <div className="scroll-section vh-100 d-flex flex-column align-items-center ">
      <div className="text-center mb-4">
        <h1
          className="display-2 sf-freshman-font "
          style={{ color: "lightgrey" }}
        >
          FIND THE RIGHT EQUIPMENT
          <br />
          <span className="text-warning">SOLIDCORE</span> WILL PROVIDE
        </h1>
        <p className="lead">Explore the wide range of services we offer.</p>
        <ProductScroller />
      </div>
    </div>
  );
}
