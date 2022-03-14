import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@mui/material';
import Todo from './Todo';
import { db } from './firebase.js';
import { collection, query, orderBy, onSnapshot, addDoc, serverTimestamp } from 'firebase/firestore';
import './App.css';


const q = query(collection(db, 'todos'), orderBy('timestamp', 'desc'));


function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  useEffect(() => {
    onSnapshot(q, (snapshot) => {
      setTodos(snapshot.docs.map(doc => ({
        id: doc.id,
        item: doc.data()
      })))
    })
  }, [input]);
  const addTodo = (event) => {
    event.preventDefault();
    addDoc(collection(db, 'todos'), {
      todo: input,
      timestamp: serverTimestamp()
    })
    console.log('click')
    setInput('')
  };
  console.log(todos);

  return (
    <div className="App">
      <h1 class="App-header">Todo List</h1>
      <form>

        <TextField label="Make Todo" variant="outlined" style={{ margin: "0px 5px" }} size="small" value={input}
          onChange={event => setInput(event.target.value)} />

        <Button type="submit" disabled={!input} variant="contained" color="primary" onClick={addTodo}  >Add Todo</Button>

      </form>
      <ul>
        {todos.map(item => <Todo key={item.id} arr={item} />)}
      </ul>
    </div>
  );
}

export default App;

