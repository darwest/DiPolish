//Імпорт компонента для створення навігаційних посилань у застосунку React Router.
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
          <div className="logo-block1">
            <h1 className="logo" >Hatsyk.polish</h1>
          </div>
          <div onClick={() => { setisMenuOpen(prev => !prev) }} className={`burger-menu ${isMenuOpen && "active"}`}>
            <div className={`menu-burger-block ${isMenuOpen && "active"}`}>
              <span></span>
            </div>
          </div>
          <nav className={`menu-block ${isMenuOpen && "active"}`}>
            <ul className="menu-list">
              <NavBar />
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
export default Header;
