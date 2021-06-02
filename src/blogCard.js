import React from 'react';
import {dumpLogs} from './Utils'

const BlogCard = (props) =>{
    dumpLogs(props);
    return(
        <div className="cardPadding">
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    );
}

export default BlogCard;