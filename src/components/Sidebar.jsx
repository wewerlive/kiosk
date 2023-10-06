import { HomeIcon } from '@heroicons/react/24/outline';
import { FolderOpenIcon } from '@heroicons/react/24/outline';
import { BeakerIcon } from '@heroicons/react/24/outline';
import { CubeTransparentIcon } from '@heroicons/react/24/outline';
import { InformationCircleIcon } from '@heroicons/react/24/outline';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { XMarkSvg } from '../assets/Svg';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <aside
      id='default-sidebar'
      className='fixed w-64 h-full z-10 transition-transform -translate-x-full sm:translate-x-0 shadow-lg shadow-stone-700'
      aria-label='Sidebar'
    >
      <div className='h-full px-3 py-4 overflow-y-auto bg-gray-50 bg-gray-800'>
        <div className='h-5/6 flex flex-col justify-between'>
          <ul className='text-white text-start flex flex-col gap-y-6 px-2 m-2'>
            <li className='flex gap-x-4 text-md text-gray-400 font-normal items-center rounded-md p-2 hover:bg-gray-700 hover:text-gray-200'>
              <HomeIcon
                strokeWidth='3'
                className='h-6 w-6'
              />
              <p>Home</p>
            </li>
            <li className='flex gap-x-4 text-md text-gray-400 font-normal items-center rounded-md p-2 hover:bg-gray-700 hover:text-gray-200'>
              <CubeTransparentIcon
                strokeWidth='3'
                className='h-6 w-6'
              />
              <p>Kiosk</p>
            </li>
            <li className='flex gap-x-4 text-md text-gray-400 font-normal items-center rounded-md p-2 hover:bg-gray-700 hover:text-gray-200'>
              <FolderOpenIcon
                strokeWidth='3'
                className='h-6 w-6'
              />
              <p>Designs</p>
            </li>
            <li className='flex gap-x-4 text-md text-gray-400 font-normal items-center rounded-md p-2 hover:bg-gray-700 hover:text-gray-200'>
              <BeakerIcon
                strokeWidth='3'
                className='h-6 w-6'
              />
              <p>Labs</p>
            </li>
          </ul>
          <div
            id='dropdown-cta'
            className='p-4 m-2 border-2 border-twingreen-500 rounded-lg bg-blue-50 dark:bg-blue-900'
            role='alert'
          >
            <div className='flex items-center mb-3'>
              <span className='bg-twinpurple-400 text-twingreen-500 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-orange-200 dark:text-orange-900'>
                Beta
              </span>
              <button
                type='button'
                className='ml-auto -mx-1.5 -my-1.5 bg-twinpurple-100 inline-flex justify-center items-center w-6 h-6 text-blue-900 rounded-lg focus:ring-2 focus:ring-blue-400 p-1 hover:bg-blue-200 h-6 w-6 dark:bg-blue-900 dark:text-blue-400 dark:hover:bg-blue-800'
                data-dismiss-target='#dropdown-cta'
                aria-label='Close'
              >
                <span className='sr-only'>Close</span>
                <XMarkSvg />
              </button>
            </div>
            <p className='mb-3 text-sm text-blue-800 dark:text-blue-400'>
              Try out our new Augmented Reality builder! It's still in beta, so
              please report any bugs you find.
            </p>
            <a
              href='/info'
              className='inline-flex items-center text-sm font-semibold text-blue-700 hover:underline dark:text-blue-400 dark:hover:text-blue-300 underline underline-offset-2 '
            >
              Learn more
            </a>
          </div>
        </div>
        <div className='flex mx-2 gap-x-4 text-md text-gray-400 font-normal items-center rounded-md p-2 pl-4 hover:bg-gray-700 hover:text-gray-200'>
          <InformationCircleIcon
            strokeWidth='2'
            className='h-6 w-6'
          />
          <span className='flex items-center gap-x-4'>
            More Info
            <button
              onClick={() => navigate('/info')}
              className='rounded-lg bg-gray-700 hover:bg-gray-800 p-1'
            >
              <ChevronRightIcon
                strokeWidth='3'
                className='h-4 w-4'
              />
            </button>
          </span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
