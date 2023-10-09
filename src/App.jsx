import { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Content from './Layout/Content';
import { DevicePair,ProjectList } from './components/Modal';
import { siteState } from './state/siteState';
import { useSnapshot} from 'valtio';


function App() {
  const [count, setCount] = useState(0);
  const [open, setOpen] = useState(false);
  const siteSnap = useSnapshot(siteState);


  return (
    <div className='w-full h-full flex'>
      <Sidebar />
      <Content />
      {siteSnap.devicePairModal && <DevicePair open={open} />}
      {siteSnap.projectListModal &&  <ProjectList />}
    </div>
  );
}

export default App;
