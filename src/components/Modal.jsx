import { useState } from 'react';

export const DevicePair = () => {
  const [active, setActive] = useState(true);

  return (
    <div
      className={
        active
          ? 'absolute h-full w-screen z-40 backdrop-blur-md text-black flex justify-center items-center'
          : 'hidden'
      }
    >
      <div
        id='popup-modal'
        tabIndex='-1'
        class='p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] w-[calc(100%-1rem)] fixed z-50 outline-none focus:outline-none justify-center items-center flex'
      >
        <div class='relative w-full max-w-md max-h-full'>
          <div class='relative bg-gray-200 rounded-lg shadow dark:bg-gray-700'>
            <button
              type='button'
              onClick={() => setActive(!active)}
              class='absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white'
              data-modal-hide='popup-modal'
            >
              <svg
                class='w-3 h-3'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 14 14'
              >
                <path
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
                />
              </svg>
              <span class='sr-only'>Close modal</span>
            </button>
            <div class='p-6 text-center'>
              <h3 className='text-xl font-semibold'>Pair your device</h3>
              <div className='mt-4 grid grid-cols-5'>
                {[...Array(5)].map((e, i) => (
                  <button
                    className='flex flex-col items-center'
                  >
                    <img
                      src='https://via.placeholder.com/100'
                      alt='device'
                      className='w-16 h-16 rounded-full hover:border-twinpurple-500 hover:border-2'
                    />
                    <p className='text-sm'>Device {i + 1}</p>
                  </button>
                ))}
              </div>
              <div class='mt-8 mb-2 text-sm text-gray-500 dark:text-gray-400'>
                <p>
                  To pair your device, enter the code displayed on your device
                  below.
                </p>
                <input
                  type='text'
                  className='mt-4 w-full p-2 border border-gray-300 rounded-md'
                />
                <button className='mt-4 w-full p-2 bg-twingreen-50 text-twinpurple-500 font-bold rounded-md'>
                  Pair
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
