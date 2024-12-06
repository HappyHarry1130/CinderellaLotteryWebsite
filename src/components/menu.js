import styles from "./menu.module.css";
import { useLocation } from "react-router-dom";
export default function Menu() {
  const items = [
    {
      label: "Welcome",
      link: "/",
    },
    {
      label: "About Us",
      link: "/about",
    },
    {
      label: "Upcoming Events",
      link: "/upcoming",
    },
    {
      label: "Works",
      link: "/work",
    },
    {
      label: "Our Team",
      link: "/team",
    },
    {
      label: "Learn More",
      link: "/learn",
    },
    {
      label: "Contact",
      link: "/contact",
    },
  ];
  const path = useLocation().pathname;
  return items.map((item, key) => (
    <Item label={item.label} link={item.link} active={item.link === path} />
  ));
}

function Item({ label, link, active }) {
  return (
    <a
      href={link}
      className={`${styles.dropdown} ${active ? styles.active : ""}`}
    >
      {`${label}`}
    </a>
  );
}
