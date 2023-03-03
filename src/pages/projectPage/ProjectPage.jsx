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
                        {projectItem.link && <a className="btn project-page__link" href={projectItem.link} target="_blank" rel="noreferrer">Сайт проекта</a>}
                        {projectItem.linkGh && <a className="btn project-page__linkGh" href={projectItem.linkGh} target="_blank" rel="noreferrer">Посмотреть GitHub</a>}
                        <div className="project-page__date">{projectItem.data}</div>
                    </div>
                </div>
                <div className="project-page__inner">
                    <div className="project-page__text"><p>{projectItem.text}</p></div>
                    <ul className="project-page__tools">
                        {projectItem.tools.map((listProjectTools) =>
                            <li>{listProjectTools}</li>
                        )}
                    </ul>
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
                            {projectItem.link && <a className="btn project-page__link" href={projectItem.link} target="_blank" rel="noreferrer">Сайт проекта</a>}
                            {projectItem.linkGh && <a className="btn project-page__linkGh" href={projectItem.linkGh} target="_blank" rel="noreferrer">Посмотреть GitHub</a>}
                        </div >

                    </div>
                </div>
            </div>
        </main>
    );
}

export default Project;