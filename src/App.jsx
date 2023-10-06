import { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Content from './Layout/Content';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='w-full h-full flex'>
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;
