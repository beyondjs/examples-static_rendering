import * as React from 'react';

export function Page(props) {
    const entry = props.uri.vars.get('entry');

    return (
        <div className="page-container">
            <h2>
                Welcome to <span className="name">BeyondJs test</span>.
                Im a page with static rendering.
            </h2>
            {entry ?
                <message-wd entry={entry}/>
                :
                <div>
                    To display a widget you must add a parameter in the url: beyond or render
                </div>}
        </div>
    );
}