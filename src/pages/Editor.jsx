import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const Editor = () => {
  const labId = useParams().id;
  return (
    <>
      <aside
        id='logo-sidebar'
        class='fixed -top-[0.99rem] left-0 z-10 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700'
        aria-label='Sidebar'
      >
        <div class='h-full px-3 pb-4 overflow-y-auto bg-gray-700 dark:bg-gray-800'>
          <div className='w-full flex justify-between items-center'>
            <button className='rounded-full m-2 bg-gray-300 text-2xl p-2 drop-shadow-xl'>
              👗
            </button>
            {/* if labId === 0 then cosmetic lab if === 1 then Lens lab if === 2 then dress lab if === 3 then shoes lab */}
            {labId === '0' ? (
              <p className='text-lg font-semibold tracking-wider'>
                Cosmetic Lab
              </p>
            ) : labId === '1' ? (
              <p className='text-lg font-semibold tracking-wider'>
                Shades Lab
              </p>
            ) : labId === '2' ? (
              <p className='text-lg font-semibold tracking-wider'>
                Dress Lab
              </p>
            ) : labId === '3' ? (
              <p className='text-lg font-semibold tracking-wider'>
                Shoes Lab
              </p>
            ) : null}
          </div>
          <hr className='mt-2'/>
          <div className='w-full mt-2 text-start px-1'>
            <h2 className='text-2xl'>
              Assets
            </h2>
            <div className='grid grid-row-3'>
              <div className='w-full h-24 border-2 border-gray-300 rounded-md'>
                <p className='text-2xl text-center'>👗</p>
              </div>
              <div className='w-full h-24 border-2 border-gray-300 rounded-md'>
                <p className='text-2xl text-center'>👗</p>
              </div>
              <div className='w-full h-24 border-2 border-gray-300 rounded-md'>
                <p className='text-2xl text-center'>👗</p>
              </div>
            </div>
          </div>
        </div>
      </aside>
      <main className='bg-white h-full w-screen border-2'>game of throme</main>
    </>
  );
};
export default Editor;
