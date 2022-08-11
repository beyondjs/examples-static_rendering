import * as React from 'react';

export function Page(props) {
    const user = props.uri.vars.get('user');

    console.log(1, user)
    return (
        <>
            <h3 className="name"> Welcome</h3>
            <message-w user={user}/>
        </>
    );
}