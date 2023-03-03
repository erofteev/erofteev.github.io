import "./footer.scss"

import gh from "./../../assets/img/icons/gh.svg"
import tg from "./../../assets/img/icons/tg.svg"
import vk from "./../../assets/img/icons/vk.svg"

const Footer = () => {

    return (
        <footer className="footer">
            <div className="footer__box card">
                <div className="contacts" id="contacts">
                    <div className="contacts__item">
                        <div className="contacts__title">Понравились работы?</div>
                        <p>Свяжитесь со мной для обсуждения вашего проекта или сотрудничества.</p>
                    </div>
                    <div className="footer__item">
                        <div className="btn__box">
                            <a href="mailto:g.erofteev@gmail.com" className="btn">Обсудить проект</a>
                            <div className="btn__social">
                                <a href="/"><img src={gh} alt="Github" /></a>
                                <a href="/"><img src={tg} alt="Telegram" /></a>
                                <a href="/"><img src={vk} alt="VK" /></a>
                            </div>
                        </div>
                        <div className="footer__copyright">Дизайн и разработка - Глеб Ерофтеев</div>
                    </div >
                </div>
            </div>
        </footer>
    );
}

export default Footer;