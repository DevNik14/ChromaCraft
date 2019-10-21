import React from 'react';
import Palette from './Palette.js';
import seedColors from './seedColors.js';

function App() {
  return (
    <div>
      <Palette {...seedColors[4]}/>
    </div>
  );
}

export default App;
