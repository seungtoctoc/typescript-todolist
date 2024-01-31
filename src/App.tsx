import React from 'react';
import logo from './logo.svg';
import './App.css';
import CaptionImage from './components/CaptionImage';

function App() {
  return (
    <div className="App" style={{width: '100%'}}>
      <CaptionImage
        imgUrl='https://cdn.imweb.me/thumbnail/20230824/20e7077f9429c.png'
        text='구름'></CaptionImage>

    </div>
  );
}

export default App;
