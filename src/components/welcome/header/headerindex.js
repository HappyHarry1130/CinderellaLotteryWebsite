import "./header.css";
import Menu from "../../menu";

import { useEffect, useState } from "react";
import DropMenu from "../../menu/menu_hidetype";

const useWindowScrollPositions = () => {
  const [name, setName] = useState("lis1");

  useEffect(() => {
    function updatePosition() {
      if (window.scrollY > 1000) setName("lis");
      else setName("lis1");
    }

    window.addEventListener("scroll", updatePosition);
  }, []);

  return name;
};

export default function Headerindex() {
  const name = useWindowScrollPositions();
  return (
    <div className={name}>
      <div className="scroll"></div>
      <a className="first" href="/">
        <b> Cinderella </b>
      </a>
      <div className="menu">
        <Menu />
      </div>
      <div className="dropMenu">
        <DropMenu />
      </div>
    </div>
  );
}
