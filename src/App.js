import './App.css';
import ColorPicker from './ColorPicker';
import { useState } from 'react';

function App() {
  const [red, setRed] = useState(23);
  const [green, setGreen] = useState(10);
  const [blue, setBlue] = useState(9);

  const appStyle = {
    backgroundColor: `rgb(${red}, ${green}, ${blue})`
  };

  function rgbToHex(red, green, blue) {
    const rgb = (red << 16) | (green << 8) | (blue << 0);
    return '#' + (0x1000000 + rgb).toString(16).slice(1);
  }

  return (
    <div className="div-body" style={appStyle}>
     <ColorPicker
     label="R"
     color={red}
     setColor={setRed}
     />

     <br />

     <ColorPicker
     label="G"
     color={green}
     setColor={setGreen}
     />
     <br />
     <ColorPicker
     label="B"
     color={blue}
     setColor={setBlue}
     />
     <br />
    {rgbToHex(red, green, blue)};
    </div>
  );
}

export default App;
