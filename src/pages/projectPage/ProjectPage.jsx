import { useParams } from "react-router-dom";

import { projects } from "./../../data/projectsList";
import "./projectPage.scss";

const Project = () => {

    const { name } = useParams();
    const projectItem = projects.find((project) => project.name === name);

    return (
        <main className="main">
            <div className="project-page">
                <div className="project-page__inner">
                    <h1 className="project-page__title">{projectItem.title}</h1>
                    <div className="project-page__subtitle">{projectItem.subtitle}</div>

                    <div className="project-page__row">
                        <a href={projectItem.link} className="btn project-page__link">Сайт проекта</a>
                        <a href={projectItem.linkGh} className="btn project-page__linkGh">Посмотреть GitHub</a>
                        <div className="project-page__date">{projectItem.data}</div>
                    </div >

                    <div className="project-page__content">
                        <div className="project-page__text"><p>{projectItem.text}</p></div>
                        <div className="project-page__presentation">
                            <div className="presentation__header">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <div className="presentation__content">
                                <img src={projectItem.img} alt={projectItem.title} />
                            </div>

                            <div className="project-page__row project-page__row--center">
                                <a href={projectItem.link} className="btn project-page__link">Сайт проекта</a>
                                <a href={projectItem.linkGh} className="btn project-page__linkGh">Посмотреть GitHub</a>
                            </div >

                        </div>
                    </div>
                </div>
            </div>

        </main>
    );
}

export default Project;