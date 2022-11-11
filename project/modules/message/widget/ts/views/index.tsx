import * as React from "react";

export /*bundle*/
function Widget(props) {
    const entry = props.attributes.get('entry');

    return (
        <div>
            I'm a <span className="name">Static Rendering(SR) Widget </span>
            and I'm displaying the attribute you put in the URL: <strong>{entry}</strong>
        </div>
    );
}