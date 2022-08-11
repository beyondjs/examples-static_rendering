import * as React from "react";

export /*bundle*/
function Widget(props) {
    const user = props.attributes.get('user');
    console.log(2, props.attributes)
    console.log(3, user)

    return (
        <div>
            Hello
            <span className="name">{user}</span>
        </div>
    );
}