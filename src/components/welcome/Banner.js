import Headerindex from "./header/headerindex";
import MyManer from "./maner/maner";
import image1 from "../../images/maus.png";
import "../../components/background.css";
import image2 from "../../images/header_flowerpot.png";
import image3 from "../../images/header_marker.png";
import image4 from "../../images/header_edding.png";
import image5 from "../../images/header_papers.png";
import image6 from "../../images/header_tablet.png";
import image7 from "../../images/header_pen.png";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
export default function Firstsection() {
  return (
    <div className="backGround">
      <Back_FirstSection />
      <MyManer />
    </div>
  );
}
function Back_FirstSection() {
  return (
    <div className="FirstSection1">
      <img src={image1} className="mouseStyle"></img>
      <img src={image2} className="flowerStyle"></img>
      <div className="paper">
        <img src={image5} className="paperStyle"></img>
      </div>
      <img src={image3} className="markerStyle"></img>
      <img src={image4} className="image4"></img>
      <img src={image6} className="image6"></img>
      <img src={image7} className="image7"></img>
      <div className="arrow" onClick={scrollChange}>
        {" "}
        <KeyboardDoubleArrowDownIcon />{" "}
      </div>
    </div>
  );
}

function scrollChange() {
  document.body.scrollTop = 1000;
  document.documentElement.scrollTop = 1000;
}
