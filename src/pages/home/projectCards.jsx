import { Link } from "react-router-dom";

const ProjectCard = ({ name, title, subtitle, img }) => {
    const portfolioImage = {
        backgroundImage: 'url(' + img + ')',
    };
    return (
        <div className="portfolio__box hidden">
            <Link to={`/project/${name}`} className="portfolio__item">

                <span className="portfolio__img" style={portfolioImage}></span>
                <span className="portfolio__btn"><i className="icon" data-icon="btn-arrow"></i></span>
                <span className="info">
                    <span className="info__title">{title}</span>
                    <p>{subtitle}</p>
                </span>
            </Link>
        </div>
    );
}

export default ProjectCard;