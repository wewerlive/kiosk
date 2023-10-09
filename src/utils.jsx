import { Link } from 'react-router-dom';
import './styles/loader.css';
import { useState } from 'react';

export  const getToken = () => {
  const cookie = document.cookie
    .split(';')
    .find((cookie) => cookie.startsWith('token='));
  if (cookie) {
    return cookie.split('=')[1];
  }
  return null;
};
export const Loader = () => {
  return (
    <div className='loader-parent'>
      <span className='loader'></span>
    </div>
  );
};

export const ErrorBoundary = ({ children }) => {
  return <>{children}</>;
};

export const ProgressBar = ({ progress }) => {

  return (
    <div className='flex w-full h-4 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700'>
      <div
        className='flex flex-col justify-center overflow-hidden bg-blue-500 text-xs text-white text-center'
        role='progressbar'
        style='width: 57%'
        aria-valuenow='57'
        aria-valuemin='0'
        aria-valuemax='100'
      >
        57%
      </div>
    </div>
  );
};

export const Error = () => {
  return (
    <main className='grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8'>
      <div className='text-center'>
        <p className='text-base font-semibold text-indigo-600'>404</p>
        <h1 className='mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
          Page not found
        </h1>
        <p className='mt-6 text-base leading-7 text-gray-600'>
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </p>
        <div className='mt-10 flex items-center justify-center gap-x-6'>
          <Link
            to='/'
            className='rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
          >
            Go back
          </Link>
        </div>
      </div>
    </main>
  );
};
export default Error;
