import { FolderOpenIcon } from '@heroicons/react/24/outline';
import { BeakerIcon } from '@heroicons/react/24/outline';
import { CubeTransparentIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <aside
      id='default-sidebar'
      className='fixed w-64 z-10 h-full transition-transform -translate-x-full sm:translate-x-0 shadow-xl'
      aria-label='Sidebar'
    >
      <div className='h-full px-3 py-4 overflow-y-auto bg-gray-800'>
        <div className='flex flex-col justify-between'>
          <ul className='text-white text-start flex flex-col gap-y-6 px-2 m-2'>
            <button
              type='button'
              onClick={() =>
                document.getElementById('devices').scrollIntoView()
              }
            >
              <li className='flex gap-x-4 text-md text-gray-400 font-normal items-center rounded-md p-2 hover:bg-gray-700 hover:text-gray-200'>
                <CubeTransparentIcon
                  strokeWidth='3'
                  className='h-6 w-6 text-white'
                />
                <p>Devices</p>
              </li>
            </button>
            <button
              type='button'
              onClick={() =>
                document.getElementById('Projects').scrollIntoView()
              }
            >
              <li className='flex gap-x-4 text-md text-gray-400 font-normal items-center rounded-md p-2 hover:bg-gray-700 hover:text-gray-200'>
                <FolderOpenIcon
                  strokeWidth='3'
                  className='h-6 w-6 text-white'
                />
                <p>Projects</p>
              </li>
            </button>
            <button
              type='button'
              onClick={() =>
                document.getElementById('Labs').scrollIntoView()
              }
            >
              <li className='flex gap-x-4 text-md text-gray-400 font-normal items-center rounded-md p-2 hover:bg-gray-700 hover:text-gray-200'>
                <BeakerIcon
                  strokeWidth='3'
                  className='h-6 w-6 text-white'
                />
                <p>Labs</p>
              </li>
            </button>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
