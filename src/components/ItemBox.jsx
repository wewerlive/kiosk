import { useNavigate } from 'react-router-dom';
import { PlusMarkSvg } from '../assets/Svg';

const ItemBox = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className='p-4 border-2 border-gray-200 border-dashed rounded-lg'>
        <div className='grid grid-cols-4 gap-4'>
          {[...Array(1)].map((_, i) => (
            <div
              key={i}
              className='flex flex-grow items-center justify-center h-44 rounded-lg bg-gradient-to-r from-gray-400 to-gray-500'
            >
              <button
                onClick={() => navigate(`/app/${i}`)}
                className='text-2xl text-gray-400 bg-gray-200 p-2 rounded-lg hover:bg-gray-700 backdrop-blur-3xl drop-shadow-2xl'
              >
                <PlusMarkSvg size={`h-4 w-4`} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ItemBox;

export const MiniItemBox = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className='p-2 border-2 border-gray-200 border-dashed rounded-lg'>
        <div className='grid grid-cols-3 gap-4'>
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className='flex flex-grow items-center justify-center h-auto w-auto rounded-lg bg-gray-600 hover:bg-gray-700'
            >
              <button
                onClick={() => navigate(`/app/${i}`)}
                className='text-gray-100 p-2 py-4 rounded-lg backdrop-blur-3xl drop-shadow-2xl'
              >
                <PlusMarkSvg size={`h-2 w-2`} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
