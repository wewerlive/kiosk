import ItemBox from '../components/ItemBox';
import Banner from '../components/Banner';
import { FolderOpenIcon } from '@heroicons/react/24/outline';
import { BeakerIcon } from '@heroicons/react/24/outline';
import { CubeTransparentIcon } from '@heroicons/react/24/outline';
import Projects from '../pages/Projects';
import Design from '../pages/Design';

const menuItems = [
  {
    name: 'Kiosk',
    icon: (
      <CubeTransparentIcon
        strokeWidth='3'
        className='h-10 w-10'
      />
    ),
  },
  {
    name: 'Designs',
    icon: (
      <FolderOpenIcon
        strokeWidth='3'
        className='h-10 w-10'
      />
    ),
  },
  {
    name: 'Labs',
    icon: (
      <BeakerIcon
        strokeWidth='3'
        className='h-10 w-10'
      />
    ),
  },
];

const Content = () => {
  return (
    <div className='p-4 sm:ml-64 h-full w-full bg-gray-800 overflow-scroll'>
      <div className='flex flex-col'>
        <Banner />
        <Home />
        {/* <Projects /> */}
        {/* <Design /> */}
      </div>
    </div>
  );
};

export default Content;

const Home = () => {
  return (
    <>
      {menuItems.map((item, index) => (
        <div key={index}>
          <div
            id={item.name}
            className='flex items-center gap-x-2 my-6'
          >
            {item.icon}
            <h1 className='text-gray-200 text-lg text-start font-bold tracking-tight md:text-xl lg:text-3xl'>
              {item.name}
            </h1>
            <hr className='w-full' />
          </div>
          <ItemBox />
        </div>
      ))}
    </>
  );
};
