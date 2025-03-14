import ProjectSection from "./ProjectSection";

const projects = [
    {
        id: "stolon",
        title: "Stolon",
        description:
            'Stolon is a game coded in C# and XNA/Monogame that switches the "Four in a row" formula up a bit. More info is on the Github.',
        imgSrc: "media/fax_icon2_wide.png",
        screenshots: [
            "media/Screenshot1.png",
            "media/Screenshot2.png",
            "media/Screenshot3.png",
        ],
        downloadLink: "https://github.com/JTnadrooi/Stolon/releases",
    },
    // ...other projects
];

const Content = () => {
    return (
        <div id="container" className="pageSection">
            {projects.map((project) => (
                <ProjectSection key={project.id} {...project} />
            ))}
        </div>
    );
};

export default Content;
