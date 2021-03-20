import React, {useState, useMemo} from 'react';
import useStyles from './App.Style';
import Grid from './components/Grid';
import ColorPicker from './components/ColorPicker';

const offCells = {
  on:false,
  color:'#000000',
};
const initialCells = Array.from({ length:40}, () => offCells);


function App() {
  const [cells,setCells] = useState(initialCells);
  const [currentColor, setCurrentColor] = useState('#56BC58');
  const classes = useStyles();
  const colorSwatch = useMemo(() => [...new Set(cells.filter((cell) => cell.on).map((cell) => cell.color))],[
    cells,
  ]);
 
  return (
    <div className={classes.app}>
      <ColorPicker currentColor={currentColor} onSetColor={setCurrentColor} />
      <div className={classes.colorSwatchContainer}>
        {colorSwatch.map((color) =>(
          <div key={color} onClick={() => setCurrentColor(color)} style={{background:color}} className={classes.colorSwatch}></div>
        ))}
      </div>
      <Grid cells={cells} setCells={setCells} currentColor={currentColor} />
    </div>
    
  );
}

export default App;
