import React from "react";

function scrollToElement(target) {
    console.log("scrolling to section with id " + target);
    var element = document.getElementById(target);
    element.scrollIntoView({ behavior: "smooth" });
    element.classList.add("flash");
    setTimeout(() => {
        element.classList.remove("flash");
    }, 1000);
}

export default class Section extends React.Component {
    constructor(props) {
        super(props);
        this.sectionRef = React.createRef();
        this.headerId = `${this.props.id}-header`;
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        const newButton = Object.assign(document.createElement("button"), {
            innerHTML: `> ${this.props.id}`,
            id: `${this.props.id}Button`,
            onclick: () => scrollToElement(this.props.id),
        });

        document.getElementById("buttonContainer").appendChild(newButton);

        const isProject = this.props.isProject;
        const header = Object.assign(document.createElement("h1"), {
            innerHTML:
                (isProject ? "P:" : "") + `${this.props.id.toUpperCase()}`,
            id: this.headerId,
        });
        if (this.sectionRef.current)
            this.sectionRef.current.insertBefore(
                header,
                this.sectionRef.current.firstChild
            );

        this.sectionRef.current.addEventListener("click", this.handleClick);
    }

    componentWillUnmount() {
        const button = document.getElementById(`${this.props.id}Button`);
        if (button) button.remove();

        const header = document.getElementById(this.headerId);
        if (header) header.remove();
        this.sectionRef.current.removeEventListener("click", this.handleClick);
    }

    handleClick(event) {
        console.log("clicked");
        this.sectionRef.current.classList.toggle("expanded");
    }

    render() {
        return (
            <div
                ref={this.sectionRef}
                id={this.props.id}
                className={`section ${this.props.dimensions ?? "default"}`}
                project={this.props.isProject ? "true" : undefined}
            >
                {this.props.children}
            </div>
        );
    }
}
