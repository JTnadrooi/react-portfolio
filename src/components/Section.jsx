import React from "react";

export default class Section extends React.Component {
    constructor(props) {
        super(props);
        this.sectionRef = React.createRef(); // Create a ref for the section div
        this.headerId = `${this.props.id}-header`; // Unique ID for the header
    }

    componentDidMount() {
        // Create the button
        const newButton = Object.assign(document.createElement("button"), {
            innerHTML: `> ${this.props.id}`,
            id: `${this.props.id}Button`,
        });

        // Append button to buttonContainer
        document.getElementById("buttonContainer").appendChild(newButton);

        // Create the header
        const isProject = this.props.isProject;
        const header = Object.assign(document.createElement("h1"), {
            innerHTML:
                (isProject ? "P:" : "") + `${this.props.id.toUpperCase()}`,
            id: this.headerId, // Assign the unique ID
        });

        // Insert header before the first child of the section
        if (this.sectionRef.current) {
            this.sectionRef.current.insertBefore(
                header,
                this.sectionRef.current.firstChild
            );
        }
    }

    componentWillUnmount() {
        // Remove the dynamically created button
        const button = document.getElementById(`${this.props.id}Button`);
        if (button) button.remove();

        // Remove the dynamically inserted header
        const header = document.getElementById(this.headerId);
        if (header) header.remove();
    }

    render() {
        return (
            <div
                ref={this.sectionRef} // Attach ref to the div
                id={this.props.id}
                className={`section ${this.props.dimensions ?? "default"}`}
                project={this.props.isProject ? "true" : undefined}
            >
                {this.props.children}
            </div>
        );
    }
}
