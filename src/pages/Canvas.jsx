import { useState } from 'react';
import CanvasSidebar from '../components/CanvasSidebar';
import { Bars3CenterLeftIcon } from '@heroicons/react/24/outline';
import Design from '../pages/Design';
const Canvas = () => {
  return (
    <>
      <SidebarHandler />
      <div>
        // Canvas goes here (see src/components/Canvas.jsx)
      </div>
    </>
  );
};

export default Canvas;

const SidebarHandler = () => {
  const [open, setOpen] = useState(false);

  const toggleSidebar = () => {
    setOpen(!open);
  };
  return (
    <div className='fixed top-20 w-full h-full'>
      <button
        onClick={toggleSidebar}
        className={
          open
            ? 'hidden'
            : 'flex gap-x-2 text-center justify-center items-center left-0 p-2 mx-2 font-semibold bg-gray-500 rounded-lg shadow-md dark:bg-gray-800'
        }
        aria-label='Toggle sidebar'
      >
        <Bars3CenterLeftIcon
          strokeWidth='3'
          className='h-4 w-4'
        />
      </button>
      <CanvasSidebar
        open={open}
        setOpen={setOpen}
      />
    </div>
  );
};
