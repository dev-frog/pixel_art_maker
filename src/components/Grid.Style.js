import { createUseStyles } from 'react-jss';


export default createUseStyles({
    grid:{
      display:'grid',
      gridTemplateRows:'repeat(5,1fr)',
      gridTemplateColumns:'repeat(8,1fr)',
      width:'50%',
      height:'50%',
      outline:'2px solid black',
    },
    cell:{
      cursor:'pointer',
      background:'white',
      outline:'1px solid black',
      transition:'all 200ms linear',
      '&:hover':{
        transform:'scale(1.09)',
      }
    }
});


  