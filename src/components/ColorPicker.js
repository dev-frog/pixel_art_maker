import React from 'react';
import createUseStyles from './ColorPicker.Style';

const ColorPicker = ({currentColor,onSetColor}) =>{
    const classes = createUseStyles();
    const colorChange = (event) => {
        onSetColor(event.target.value);
    };
    return(
        <input type="color" className={classes.ColorPicker} onChange={colorChange} value={currentColor} />
    );
};

export default ColorPicker;
