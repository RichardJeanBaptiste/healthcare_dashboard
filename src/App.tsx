//import { useState } from 'react';
import Box from '@mui/material/Box';
import Header from './components/Header';
import Brain_Map from './components/Brain_Map';
import AI_Analytics from './components/AI_Analytics';
import Next_Steps from './components/Next_Steps';
import Index from './components/Index';

function App() {
  const Styles = {
    box1: {
      position: 'absolute',
      top: '67%',
      left: '2%',
      width: '29%',
      height: '25%',
      borderStyle: 'solid',
      borderWidth: '1px',
      borderColor: 'black',
      borderRadius: '20px'
    },
    box2: {
      position: 'absolute',
      top: '67%',
      left: '32.5%',
      width: '29%',
      height: '25%',
      borderStyle: 'solid',
      borderWidth: '1px',
      borderColor: 'black',
      borderRadius: '20px'
    },
    box3: {
      position: 'absolute',
      top: '94.5%',
      left: '2%',
      width: '29%',
      height: '25%',
      borderStyle: 'solid',
      borderWidth: '1px',
      borderColor: 'black',
      borderRadius: '20px'
    },
    box4: {
      position: 'absolute',
      top: '94.5%',
      left: '32.5%',
      width: '29%',
      height: '25%',
      borderStyle: 'solid',
      borderWidth: '1px',
      borderColor: 'black',
      borderRadius: '20px'
    }
  }

  return (
    <Box sx={{ width: '100vw', height: '100vh', position: 'relative' }}>
      <Header/>
      <Brain_Map/>
      <AI_Analytics/>
      <Next_Steps/>

      <Box sx={Styles.box1}>
        <Index title="Neural Activity Index" num="82/100" status="Normal"/>
      </Box>
      
      <Box sx={Styles.box2}>
        <Index title="Brain Symmetry Index" num="0.96" status="Normal"/>
      </Box>
      
      <Box sx={Styles.box3}>
        <Index title="Hippocampal Volume" num="1.2 cm^3" status="Moderate"/>
      </Box>
      
      <Box sx={Styles.box4}>
        <Index title="Gray Matter Volume" num="715 cm^3" status="Normal"/>
      </Box>
    </Box>
  )
}

export default App
