import React from 'react';

function react(props) {
    console.log('in react component',props);
    return (
        <div>
            <h1>Hey this is react Componenet </h1>
            <p>Here is my datat {props.name} {props.course}</p>
        </div>
    );
}

export default react;