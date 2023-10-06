import position from '../assets/position.svg';
import rotate from '../assets/rotate.svg';
import handler from '../assets/handler.svg';
import resize from '../assets/resize.svg';
import move from '../assets/move.svg';
import menu from '../assets/menu.svg';
import layer from '../assets/layer.svg';
import textures from '../assets/textures.svg';
import popout from '../assets/popout.svg';
import { PlusMarkSvg } from '../assets/Svg';

const Canvas = () => {
  return (
    <>
      <div className='border-2 h-full w-screen'>
        {/* <SidebarHandler /> */}
        <div className='absolute w-full flex justify-center items-center px-2'>
          <SidebarHandler />
          <TopBarHandler />
          <SupportHandler />
        </div>
        // Canvas goes here (see src/components/Canvas.jsx)
      </div>
    </>
  );
};

export default Canvas;

const SidebarHandler = () => {
  return (
    <div className='flex gap-x-2'>
      <button className='border-2 p-2 rounded-lg bg-slate-600'>
        <PlusMarkSvg />
      </button>
      <div className='border-2 w-32 bg-slate-200 flex justify-between items-center rounded-lg'>
        <button className='hover:bg-zinc-600 p-1 rounded-md w-8'>
          <img
            src={menu}
            alt='menu'
          />
        </button>
        <button className='hover:bg-zinc-600 p-1 rounded-md w-8'>
          <img
            src={layer}
            alt='layer'
          />
        </button>
        <button className='hover:bg-zinc-600 p-1 rounded-md w-8'>
          <img
            src={textures}
            alt='textures'
          />
        </button>
      </div>
    </div>
  );
};

const TopBarHandler = () => {
  return (
    <div className='w-full flex justify-center items-center p-4'>
      <div className='border-2 bg-slate-200 w-60 h-10 flex gap-x-2 justify-evenly items-center rounded-lg'>
        <button className='hover:bg-zinc-600 p-2 rounded-md'>
          <img
            src={move}
            alt='move'
          />
        </button>
        <button className='hover:bg-zinc-600 p-2 rounded-md'>
          <img
            src={rotate}
            alt='rotate'
          />
        </button>
        <button className='hover:bg-zinc-600 p-2 rounded-md'>
          <img
            src={resize}
            alt='resize'
          />
        </button>
        <button className='hover:bg-zinc-600 p-2 rounded-md'>
          <img
            src={handler}
            alt='handler'
          />
        </button>
        <p className='text-gray-500'>|</p>
        <button className='hover:bg-zinc-600 p-2 rounded-md'>
          <img
            src={position}
            alt='position'
          />
        </button>
      </div>
    </div>
  );
};

const SupportHandler = () => {
  return (
    <div className='flex gap-x-2'>
      <button className='border-2 p-2 rounded-lg bg-slate-600'>
        Help
      </button>
      <div className='bg-slate-200 flex justify-between items-center rounded-lg px-1'>
        <button className='p-1 rounded-md w-8'>
          <img
            src={popout}
            alt='popout'
          />
        </button>
      </div>
    </div>
  );
};