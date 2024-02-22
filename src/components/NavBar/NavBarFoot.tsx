import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { useLocation } from 'react-router-dom';

import "./NavBar.scss"
import "./NavBar.media.scss"

const NavBar = () => {
  const location = useLocation(); 
  const onHomePage = location.pathname === '/'; 

  const myLinks = [
    { value: "Головна", to: "1", type: "scrollLink" },
    { value: "Досягнення", to: "7", type: "scrollLink" }, 
    { value: "Про мене", to: "2", type: "scrollLink" },
    { value: "Відгуки", to: "8", type: "scrollLink" },
    {value: "Пробний", to: "3", type: "scrollLink" },
    {  value: "Вартість", to: "4", type: "scrollLink" },

  ];

  return (
    <ul className="menu-list-footer">
      {myLinks.map((item, index) => (
        <li className="navbar-item-f" key={index}>
          {item.type === "scrollLink" && onHomePage ? (
            <ScrollLink
              to={item.to}
              smooth={true}
              duration={500}
              className="navbar-link-f"
              offset={-70}
            >
              {item.value}
            </ScrollLink>
          ) : (
            <Link to={item.type === "routerLink" ? item.to : `/?scrollTo=${item.to}`} className="navbar-link">
              {item.value}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
};
export default NavBar;
