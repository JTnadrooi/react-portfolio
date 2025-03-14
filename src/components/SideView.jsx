const SideView = () => {
    return (
        <div id="sideView" className="pageSection">
            <h1>PAGE INFO</h1>
            <ul>
                <li>Projects are prefixed with a "P".</li>
                <li>All tiles are scrollable.</li>
            </ul>
            <br />
            <h1>CONTENT</h1>
            <div id="buttonContainer">
                {/* Populate with dynamic content or components */}
            </div>
        </div>
    );
};

export default SideView;
