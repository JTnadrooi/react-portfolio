import React from "react";
export default class Section extends React.Component {
    render() {
        return (
            <div
                id={this.props.id}
                className={`section ${this.props.dimensions}`}
                project={this.props.isProject ? "true" : undefined}
            >
                {this.props.children}
            </div>
        );
    }
}
