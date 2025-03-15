import React from "react";
export default class ImageContainer extends React.Component {
    render() {
        const lineBreaks = Array.from(
            { length: this.props.whiteLines ?? 2 },
            (_, i) => <br key={i} />
        );
        return (
            <div>
                {lineBreaks}
                <p>{this.props.headerText}:</p>
                {this.props.images.length > 0 ? (
                    this.props.images.map((src, index) => (
                        <img
                            key={index}
                            className="screenshot"
                            src={src}
                            alt={`Screenshot ${index + 1}`}
                        />
                    ))
                ) : (
                    <p>no images available</p>
                )}
                {lineBreaks}
            </div>
        );
    }
}
