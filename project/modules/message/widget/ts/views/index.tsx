import * as React from "react";

export /*bundle*/
function Widget(props) {
    const entry = props.attributes.get('entry');

    return (
        <div>
            Dev, i'm a <span className="name">Static Rendering(SR) widget </span>
            and I'm displaying the attribute you put in the URL: <strong>{entry}</strong>
        </div>
    );
}