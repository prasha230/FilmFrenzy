import React from "react";

function Header (props) {
    return (
        <div>
            <div className="header">{props.heading}</div>
        </div>
    );
}

export default Header;
