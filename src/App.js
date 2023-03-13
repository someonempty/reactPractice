import React, { useState } from "react";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";
import PostItem from "./components/PostItem";
import './styles/App.css';

function App() {
  const [value, setValue] = useState('Some text');

  return (
    <div className="App">
      <PostItem/>
      <PostItem/>
      <PostItem/>
    </div>
  );
}

export default App;
