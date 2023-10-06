import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PlusMarkSvg } from '../assets/Svg';

const ItemBox = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className='p-4 border-2 border-gray-200 border-dashed rounded-lg'>
        <div className='grid grid-cols-3 gap-4'>
          {[...Array(3)].map((_, i) => (
            <div key={i} className='flex items-center justify-center h-44 rounded-lg bg-gradient-to-r from-gray-400 to-gray-500'>
              <button
                onClick={() => navigate(`/app/${i}`)}
                className='text-2xl text-gray-400 bg-gray-200 p-2 rounded-lg hover:bg-gray-700 backdrop-blur-3xl drop-shadow-2xl'
              >
                <PlusMarkSvg />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ItemBox;
