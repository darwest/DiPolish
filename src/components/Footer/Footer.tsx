//Імпорт стилів
import "./Footer.scss"
import "./Footer.media.scss"

//Імпорт іконок

import NavBar from "../NavBar/NavBarFoot"

//Створюємо функціональний компонент
const Footer = () => {
  return (
    <footer>

      <div className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="logo-socnetwork">
              <div className="logo-block1">
                <p className="logo-block">
                  <h1 className="logo">Hatsyk.polish</h1>
                </p>
              </div>
              <div className="socnetworks-link">

                
              </div>
            </div>

            <nav className="menu-block">
              <div className="block-info">
                <p className="info-title">Контакти</p>
                
                  <a className="link" href="tel:+380688896135" >+(380) 68-889-61-35</a>
                  <a className="link" href="mailto:gacikdp@gmail.com">gacikdp@gmail.com</a>
               
              </div>
              <div className="block-info">

                <p className="info-title">Соціальні мережі</p>
                <a className="link" href="https://instagram.com/hatsyk.polish?igshid=YTQwZjQ0NmI0OA==">
                  Instagram
                </a>
                <a className="link" href="http://t.me/d_hatsykk">
                 Telegram
                </a>
                <a className="link" href="https://www.tiktok.com/@di_polishh?_t=8hvbMUGTWwX&_r=1">
                  Tik Tok
                </a>
                
              </div>
              <div className="block-info">
              <p className="info-title">Меню</p>
              <ul className="menu-list-footer">
                <NavBar />
              </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div className="dev-block">
        <div className="container">
          <div className="dev-flex-container">
            <p className="name-dev">
              Design and development by Vasiuta Dariia © 2023.
            </p>
            <div>
              <a href="https://www.instagram.com/dariinnaaa?igsh=ZGhuMWNlNG9lanV0" className="link-dev">
                Inst.
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>

  );
};

export default Footer;
