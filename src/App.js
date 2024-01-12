import React from 'react';
import './index.css';
import Slider from './component/Slider';

function App() {
  return (
    <div className="">
      <h1>
        Полезные материалы
      </h1>
      <p>Собрали для вас полезные исследования, схемы кормления и другие <br />
      материалы, которые пригодятся для лучших результатов на вашем <br />
      хозяйстве </p>
      <Slider />
    </div>
  );
}

export default App;
