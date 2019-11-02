import React from 'react';
import { withStyles } from "@material-ui/core/styles";

const styles = {
    root: {
    width: '20%',
    height: '25%',
    cursor: 'pointer',
    position: 'relative',
    display: 'inline-block',
    margin: '0 auto',
    marginBottom: '-4px'
    }  
}

function DragableColorBox(props) {
    const { classes } = props
    return (
        <div className={classes.root} style={{backgroundColor: props.color}}>
            {props.color}
        </div>
    )
}

export default withStyles(styles)(DragableColorBox);
