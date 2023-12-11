//Імпорт компонента Link для створення посилань
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
//Імпорт стилів
import "./NavBar.scss"
import "./NavBar.media.scss"

//Створюємо функціональний компонент
const NavBar = () => {
//Створюємо масив об'єктів з властивостями value, path, type (тип посилання, чи це роутерне посилання чи посилання для прокрутки)
  const myLinks = [
    { value: "Головна", to: "/", type: "routerLink" },
    { value: "Статистика", to: "1", type: "scrollLink" },
    { value: "Про мене", to: "2", type: "scrollLink" },
    { value: "Пробний", to: "3", type: "scrollLink" },
    { value: "Вартість", to: "4", type: "scrollLink" },
  ];

/*Використовується метод map для перебору масиву myLinks та створення компонентів <li>.
  Властивість to визначає місце призначення посилання, а value визначає текст посилання.
*/
  return (
    <>
      {myLinks.map((item, index) => (
        <li className="navbar-item" key={index}>
          {item.type === "scrollLink" ? (
            <ScrollLink className="navbar-link" to={item.to} smooth={true}>
              {item.value}
            </ScrollLink>
          ) : (
            <Link className="navbar-link" to={item.to}>
              {item.value}
            </Link>
          )}
        </li>
      ))}
    </>
  );
};

export default NavBar;
