import React from "react";
export default class RecursiveList extends React.Component {
    renderList(items) {
        return (
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        {typeof item === "string" ? (
                            item
                        ) : (
                            <>
                                {item.name}
                                {item.subtopics &&
                                    this.renderList(item.subtopics)}
                            </>
                        )}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <section id="list-container">
                {this.renderList(this.props.items)}
            </section>
        );
    }
}
