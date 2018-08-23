import React from 'react';

export default props => (
    <div>
    <div className='well card'>
        <h4>{props.name}</h4>
        <p>{props.description}</p>
        <center><a className='btn btn-info' target='_blank' href={"https://www.google.com/maps?q=" + props.location[0] + "," + props.location[1]}>Open in Maps</a></center>
    </div>
    </div>
);