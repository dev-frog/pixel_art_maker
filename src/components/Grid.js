import React from 'react';
import useStyle from './Grid.Style.js';

const offCells = {
    on:false,
    color:'#000000',
};

const Grid = ({ currentColor, cells, setCells }) =>{
    
    const classes = useStyle();
    const updateCells = (i,defaultState) => (e) =>{
        e.preventDefault();
        setCells(cells.map((cell,cellIndex) => {
            if(cellIndex === i){
                if (defaultState) return defaultState;
                return {
                    on:true,
                    color:currentColor,
                }
            }
            return cell;
        }))
    };
    
    return(
        <div className={classes.grid}>
            {cells.map((cell,i) => <div key={i} style={{ background: cell.on ? cell.color : '#ffffff' }} className={classes.cell} onContextMenu={updateCells(i,offCells)} onClick={updateCells(i)}></div>)}
        </div>
    )
}

export default Grid;

