import { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Content from './Layout/Content';
import { DevicePair, ProjectList } from './components/Modal';

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className='w-full h-full flex'>
      <Sidebar />
      <Content />
      {/* <DevicePair state={open} /> */}
      <ProjectList />
    </div>
  );
}

export default App;
