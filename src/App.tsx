import React, {useState, useEffect} from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Board from './components/Board'
import Button from 'react-bootstrap/Button';
import Publish from './components/Publish';

function App() {
  const [writings, setWritings] = useState([])

  useEffect(() => {
    console.log('useEffect');
    loadData();
  }, [])

  const loadData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      return response.json();
    })
    .then(posts => {
      setWritings(posts);
      console.log('load set Writings');
    })
  }
  
  const deleteWriting = (writingToDelete) => {
    setWritings(writings.filter(writing => 
      writing.id != writingToDelete.id)
    );
  }

  const modifyWriting = (writingToModify, modifyValue) => {
    setWritings(writings.map((writing) => 
      writing.id === writingToModify.id ?
        {...writing, body: modifyValue} 
        : 
        writing)
    );
  }

  const publishWriting = (title, body) => {
    let id = writings.length + 1;
    setWritings([...writings, {title:title, body:body, id:id}])
  }
    
  return (
    <div className="App">
      <Board
          writings={writings} 
          deleteWriting={deleteWriting}
          modifyWriting={modifyWriting}>   
      </Board>

      <Publish
        publishWriting={publishWriting}>
      </Publish>
    </div>
  );
}

export default App;