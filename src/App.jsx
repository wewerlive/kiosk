import { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Content from './Layout/Content';
import { DevicePair } from './components/Modal';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='w-full h-full flex'>
      <Sidebar />
      <Content />
      <DevicePair />
    </div>
  );
}

export default App;
