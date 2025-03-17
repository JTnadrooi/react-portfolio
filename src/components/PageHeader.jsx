import React from "react";
export default class PageHeader extends React.Component {
    render() {
        return (
            <div id="pageHeader">
                {this.props.userName === true ? (
                    <>
                        JTNADROOI
                        <div>Is how I'm called.</div>
                    </>
                ) : (
                    <>
                        JORDAN
                        <div>Is my name.</div>
                    </>
                )}
            </div>
        );
    }
}
