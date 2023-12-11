import Logo from "../../assets/img/logo.png";
//Імпорт компонента для створення навігаційних посилань у застосунку React Router.
import { Link } from "react-router-dom";
//Імпорт компоненту навігації
import NavBar from "../NavBar/NavBar";
// Хуки React для створення локального стану та виконання ефектів життєвого циклу компонента
import { useState, useEffect } from "react";
import "./Header.scss";
import "./Header.media.scss"; 
//Створюємо функціональний компонент
const Header = () => {
//Застосовуємо хук useState для створення стану isMenuOpen, що відповідає за стан відкриття/закриття меню.
  const [isMenuOpen, setisMenuOpen] = useState<boolean>(false);

//Застосовуємо хук useEffect для закриття меню при завантаженні компонента.
  useEffect(() => {
    setisMenuOpen(false);
  }, [])
  return (
    <header className={`header ${isMenuOpen && "active"}`}>
      <div className="container">
        <div className="header-flex-container">
          <Link to={"/"} className="logo-block">
            <img src={Logo} alt="loading" className="logo" width="172px" />
          </Link>
          <div onClick={() => {setisMenuOpen(prev => !prev)}} className={`burger-menu ${isMenuOpen && "active"}`}>
            <div className={`menu-burger-block ${isMenuOpen && "active"}`}>
              <span></span>
            </div>
          </div>
          <nav className={`menu-block ${isMenuOpen && "active"}`}>
            <ul className="menu-list">
              
              <NavBar/>

              <li className="menu-item-button">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSft29BqYNoGaUdZSBBs-58PuJ-YEhK0BUnxFsm3qJDHN5CrNg/viewform?usp=sf_link"
                  className="menu-link-button"
                  target="_blank"
                >
                  FEEDBACK
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
export default Header;
/*onClick обробник подій, який викликається при кліку на елемент. setisMenuOpen - це функція, яка встановлює новий стан для isMenuOpen.
Використовується стрілкова функція з короткою формою, де prev - поточний стан isMenuOpen.
!prev - це логічне заперечення поточного стану, що дозволяє перемикати його значення між true та false
Якщо isMenuOpen = true, то додається клас active
*/