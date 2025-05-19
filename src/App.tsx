//import { useState } from 'react';
import Box from '@mui/material/Box';
import Header from './components/Header';
import Brain_Map from './components/Brain_Map';

function App() {
  //const [count, setCount] = useState(0);

  return (
    <Box sx={{ width: '100vw', height: '100vh', position: 'relative' }}>
      <Header/>
      <Brain_Map/>
    </Box>
  )
}

export default App
