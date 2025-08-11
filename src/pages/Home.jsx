import { Typography } from "antd";
import "./homestyle.css";
import WelcomeSection from "../subpage/WelcomeSection";
import ServicesSection from "../subpage/ServicesSection";
const { Title, Paragraph } = Typography;

export default function Home() {
  return (
    <div className="scroll-container">
    <WelcomeSection />
    <ServicesSection />
  
  </div>
  );
}
