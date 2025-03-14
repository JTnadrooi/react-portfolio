const ProjectSection = ({
    id,
    title,
    description,
    imgSrc,
    screenshots,
    downloadLink,
}) => {
    return (
        <div id={id} className="section" project>
            <img src={imgSrc} alt={`${title} icon`} />
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
                {screenshots &&
                    screenshots.map((src, index) => (
                        <img
                            key={index}
                            className="screenshot"
                            src={src}
                            alt={`${title} screenshot ${index + 1}`}
                        />
                    ))}
                {downloadLink && <a href={downloadLink}>Download!</a>}
            </div>
        </div>
    );
};

export default ProjectSection;
