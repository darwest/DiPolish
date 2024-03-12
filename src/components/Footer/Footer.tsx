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
                <div className="logo-block">
                  <h1 className="logo">Hatsyk.Diana</h1>

                </div>

              </div>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSft29BqYNoGaUdZSBBs-58PuJ-YEhK0BUnxFsm3qJDHN5CrNg/viewform?usp=sf_link"
                className="banner-button"
              >
                ЗАЛИШИТИ ЗАЯВКУ
              </a>
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

                <p className="info-title">Соц. мережі</p>
                <a className="link" target="_blank" href="https://www.instagram.com/hatsyk.diana?igsh=MWxtdXo0NXo1azE1Yw==">
                  Instagram
                </a>
                <a className="link" target="_blank" href="http://t.me/d_hatsykk">
                  Telegram
                </a>
                <a className="link" target="_blank" href="https://www.tiktok.com/@hatsyk.polish?_t=8kcToAJwfHZ&_r=1">
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
