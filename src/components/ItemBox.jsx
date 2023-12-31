import { useNavigate } from 'react-router-dom';
import { PlusMarkSvg } from '../assets/Svg';

const DeviceItemBox = () => {
  const navigate = useNavigate();

  return (
    <div className='p-4 border-2 border-gray-200 border-dashed rounded-lg'>
      <div className='grid grid-cols-4 gap-4'>
        <div className='flex flex-grow items-center justify-center h-44 rounded-lg bg-kiosk object-cover overflow-hidden hover:ring-twingreen-50 hover:ring-2'>
          <div
            id='kioskImage'
            className='text-center uppercase tracking-widest font-bold text-xl text-gray-500 drop-shadow-2xl'
          >
            <p>Kiosk A</p>
          </div>
        </div>
        <div className='flex flex-grow items-center justify-center h-44 rounded-lg bg-gradient-to-r from-gray-400 to-gray-500'>
          <button className='text-2xl text-gray-400 bg-gray-200 p-2 rounded-lg hover:bg-gray-700 backdrop-blur-3xl drop-shadow-2xl'>
            <PlusMarkSvg size={`h-4 w-4`} />
          </button>
        </div>
      </div>
    </div>
  );
};
export default DeviceItemBox;

export const ProjectItemBox = () => {
  const navigate = useNavigate();

  return (
    <div className='p-4 border-2 border-gray-200 border-dashed rounded-lg'>
      <div className='grid grid-cols-4 gap-4'>
        <div className='flex flex-grow items-center justify-center h-44 rounded-lg bg-gradient-to-r from-gray-400 to-gray-500'>
          <button className='text-2xl text-gray-400 p-4 rounded-lg'>
            <p className='text-center tracking-tight font-semibold text-lg text-gray-900 drop-shadow-2xl'>
              Copy of Cosmetic Lab
            </p>
          </button>
        </div>
        <div className='flex flex-col gap-y-2 flex-grow items-center justify-center h-44 rounded-lg bg-gradient-to-r from-gray-400 to-gray-500'>
          <button className='text-2xl text-gray-400 bg-gray-200 p-2 rounded-lg hover:bg-gray-700 backdrop-blur-3xl drop-shadow-2xl'>
            <PlusMarkSvg size={`h-4 w-4`} />
          </button>
        </div>
      </div>
    </div>
  );
};

export const LabBox = () => {
  const icons = [
    {
      icon: '👕',
      name: 'Dress',
    },
    {
      icon: '👟',
      name: 'Shoes',
    },
    {
      icon: '🕶️',
      name: 'Shades',
    },
    {
      icon: '💄',
      name: 'Cosmetic',
    },
  ];
  return (
    <div className='p-4 border-2 border-gray-200 border-dashed rounded-lg'>
      <div className='grid grid-cols-4 gap-4'>
        {icons.map((e, i) => (
          <div
            key={i}
            className='flex flex-col gap-y-2 flex-grow items-center justify-center h-44 rounded-lg bg-gradient-to-r from-gray-400 to-gray-500'
          >
            <button
              onClick={() => navigate(`/app/${i}`)}
              className='text-2xl text-gray-400 bg-gray-200 p-4 rounded-full hover:bg-gray-700 backdrop-blur-3xl drop-shadow-2xl shadow-2xl'
            >
              {e.icon}
            </button>
            <p className='text-center uppercase tracking-widest font-semibold text-lg text-gray-200 drop-shadow-2xl'>
              {e.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
