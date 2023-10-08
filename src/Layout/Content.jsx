import ItemBox from '../components/ItemBox';
import Banner from '../components/Banner';
import { FolderOpenIcon } from '@heroicons/react/24/outline';
import { BeakerIcon } from '@heroicons/react/24/outline';
import { CubeTransparentIcon } from '@heroicons/react/24/outline';
import Projects from '../pages/Projects';
import Design from '../pages/Design';
import { PlusMarkSvg } from '../assets/Svg';
import { Newsletters } from '../pages/SignUp';

const menuItems = [
  {
    name: 'Devices',
    icon: (
      <CubeTransparentIcon
        strokeWidth='3'
        className='h-10 w-10'
      />
    ),
  },
  {
    name: 'Projects',
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
    <div className='p-4 sm:ml-64 h-screen w-full bg-gray-800 overflow-scroll'>
      <div className='flex flex-col'>
        <Banner />
        <Home />
        {/* <Projects /> */}
        {/* <Design /> */}
      </div>
      <Newsletters />
    </div>
  );
};

export default Content;

const Home = () => {
  return (
    <>
      <div
        id='devices'
        className='flex justify-center items-center tracking-widest mt-8 text-5xl font-bold text-gray-200'
      >
        Build Beyond Reality
      </div>
      {menuItems.map((item, index) => (
        <div key={index}>
          <div
            id={item.name}
            className='flex items-center gap-x-8 my-6'
          >
            {item.icon}
            <h1 className='text-gray-200 text-lg text-start font-bold tracking-tight md:text-xl lg:text-3xl'>
              {item.name}
            </h1>
            <hr className='w-full' />
            <button className='p-1 border-2 rounded bg-twinpurple-300'>
              <PlusMarkSvg size={`h-4 w-4`} />
            </button>
          </div>
          <ItemBox />
        </div>
      ))}
    </>
  );
};
