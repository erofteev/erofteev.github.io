import { useEffect } from "react";

import photo from "./../../assets/img/me.jpg"
import gh from "./../../assets/img/icons/gh.svg"
import tg from "./../../assets/img/icons/tg.svg"
import vk from "./../../assets/img/icons/vk.svg"


const Home = () => {

    const myPhoto = {
        backgroundImage: 'url(' + photo + ')',
    };


    useEffect(() => {

        // =====[Animations]=====
        const handleOnMouseMove = e => {
            const { currentTarget: target } = e;
            const rect = target.getBoundingClientRect(),
                x = e.clientX - rect.left,
                y = e.clientY - rect.top;
            target.style.setProperty("--mouse-x", `${x}px`);
            target.style.setProperty("--mouse-y", `${y}px`);
        }

        for (const card of document.querySelectorAll(".card")) {
            card.onmousemove = e => handleOnMouseMove(e);
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                } else {
                    entry.target.classList.remove('show');
                }
            })
        })

        const hiddenElements = document.querySelectorAll('.hidden')
        hiddenElements.forEach((el) => observer.observe(el));

    })

    return (
        <main className="main">
            <div className="section">
                <div className="about" id="about">
                    <div className="about__col _info card hidden">
                        <div className="about__item">
                            <h1 className="about__title">Привет! Меня зовут Глеб, я веб-разработчик.</h1>
                            <p>Создаю современные и быстрые сайты под ваши запросы. Занимаюсь вёрсткой, дизайном и
                                поддержкой сайтов на популярных CMS.</p>
                            <p>Запускал собственные проекты. Есть навык работы с хостингом, базами данных, сервером
                                и
                                терминалом Linux, подключением доменов и SSL сертификатов.</p>
                        </div>
                        <div className="about__btn">
                            <div className="btn__box">
                                <a href="mailto:g.erofteev@gmail.com" className="btn">Обсудить проект</a>
                                <div className="btn__social">
                                    <a href="/"><img src={gh} alt="Github" /></a>
                                    <a href="/"><img src={tg} alt="Telegram" /></a>
                                    <a href="/"><img src={vk} alt="VK" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="about__col _photo card hidden" style={myPhoto}></div>
                </div>
            </div>
            <div className="section">
                <div className="services">
                    <div className="services__col card hidden">
                        <span className="services__subtitle">Frontend</span>
                        <h2 className="services__title">Вёрстка</h2>
                        <p>адаптивная и кроссбраузерная вёрстка с использованием новейших инструментов
                            веб-разработки.
                        </p>
                    </div>
                    <div className="services__col card hidden">
                        <span className="services__subtitle">Backend</span>
                        <h2 className="services__title">Разработка</h2>
                        <p>разрабатывал проекты с использованием CMS WordPress, OpenCart. Есть базовые знания PHP и
                            Python с подключением к БД.
                        </p>
                    </div>
                    <div className="services__col card hidden">
                        <span className="services__subtitle">Web</span>
                        <h2 className="services__title">Дизайн</h2>
                        <p>имею 2 года опыта работы веб-дизайнером и хорошо разбираюсь в Figma, Photoshop,
                            Illustrator.
                        </p>
                    </div>
                </div>
            </div>
            <div className="section">
                <div className="skills card hidden">
                    <ul className="skills__inner">
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Sass/Less</li>
                        <li>Flexbox/Grid</li>
                        <li>Bootstrap</li>
                        <li>БЭМ</li>
                        <li>Gulp</li>
                        <li>Bulma</li>
                        <li>Svelte</li>
                        <li>WordPress</li>
                        <li>OpenCart</li>
                        <li>Python</li>
                        <li>PHP</li>
                        <li>MySQL</li>
                        <li>MongoDB</li>
                        <li>Linux</li>
                        <li>Figma</li>
                        <li>XD</li>
                        <li>Photoshop</li>
                        <li>Illustrator</li>
                    </ul>
                </div>
            </div>
        </main>
    );
}

export default Home;