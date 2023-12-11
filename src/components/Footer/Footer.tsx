//Імпорт стилів
import "./Footer.scss"
import "./Footer.media.scss"

//Імпорт іконок
import Logo from "../../assets/img/logo.png"
import TikTokIcon from "../../assets/img/free-icon-tik-tok-4782345.png"
import TelegramIcon from "../../assets/img/icon-telegram.png"
import InstIcon from "../../assets/img/inst-icon.png"
import NavBar from "../NavBar/NavBar"

//Створюємо функціональний компонент
const Footer = () => {
  return (
    <footer>
      <div className="google-maps">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9916.112896069288!2d25.348735188218004!3d50.76132342236368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472599eba185965d%3A0xd25274a2228db86c!2z0JvRg9GG0YzQuiwg0JLQvtC70LjQvdGB0YzQutCwINC-0LHQu9Cw0YHRgtGM!5e0!3m2!1suk!2sua!4v1699529402904!5m2!1suk!2sua"
          width="100%"
          height="420"
          style={{ border: 0 }}
          className="maps"
          loading="lazy"
        ></iframe>
      </div>

      <div className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="logo-socnetwork">
              <img
                src={Logo}
                alt="loading"
                width="170px"
                className="logo-footer"
              />
              <div className="socnetworks-link">
        
                <a href="http://t.me/d_hatsykk" className="telegram-link">
                  <img
                    src={TelegramIcon}
                    alt="loading"
                    width="30px"
                    className="telegram-icon"
                  />
                </a>
                <a href="https://www.tiktok.com/@di_polishh?_t=8hvbMUGTWwX&_r=1">
                  <img
                    src={TikTokIcon}
                    alt="loading"
                    className="tik-link"
                  />
                </a>
                <a href="https://instagram.com/hatsyk.polish?igshid=YTQwZjQ0NmI0OA==">
                  <img
                    src={InstIcon}
                    alt="loading"
                    className="inst-icon"
                  />
                </a>
              </div>
            </div>

            <nav className="menu-block">
              <ul className="menu-list-footer">
                <NavBar/>
              </ul>
            </nav>
          </div>
        </div>

        <div className="dev-block">
          <div className="container">
            <div className="dev-flex-container">
              <p className="name-dev">
                Design and development by Vasiuta Dariia © 2023.
              </p>
              <div>
                <a href="#" className="link-dev">
                  Telegram |{" "}
                </a>
                <a href="#" className="link-dev">
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
