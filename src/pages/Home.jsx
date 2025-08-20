import { Typography } from "antd";
import "./homestyle.css";
import WelcomeSection from "../subpage/WelcomeSection";
import ServicesSection from "../subpage/ServicesSection";
import BannerSection from "../subpage/BannerSection";
import BottomContactSection from "../subpage/BottomContactSection";
const { Title, Paragraph } = Typography;

export default function Home() {
  return (
    <div className="scroll-container">
      <WelcomeSection className="scroll-section" />
      <ServicesSection className="scroll-section" />
      <BannerSection className="scroll-section" />
        <BottomContactSection className="scroll-section" />
    </div>
  );
}
