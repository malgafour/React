import React from 'react';
import classes from './blogCard.module.css';
import {dumpLogs} from './Utils';

const BlogCard = (props) =>{
    dumpLogs(props);
    return(
        <div className={classes.cardPadding}>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    );
}

export default BlogCard;