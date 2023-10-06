import CookieBanner from '../components/CookieBanner';
import Footer from '../components/Footer';
import { Newsletters } from './SignUp';

const MoreInfo = () => {
  return (
    <div>
      <Announcement />
      <div className='max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto bg-twinpurple-500'>
        <div className='mx-auto max-w-2xl mb-8 lg:mb-14 text-center'>
          <h2 className='text-3xl lg:text-4xl text-gray-100 font-bold dark:text-gray-100'>
            Explore tools
          </h2>
          <p className='mt-3 text-gray-100 dark:text-twingreen-50'>
            The powerful and flexible Augmented Reality Builder that lets you
            own AR experiences.
          </p>
        </div>

        <div className='mx-auto max-w-3xl grid grid-cols-12 gap-6 lg:gap-8'>
          <div className='col-span-6 sm:col-span-4 text-center'>
            <svg
              className='mx-auto h-auto w-7 md:w-9 text-twingreen-50 dark:text-gray-100'
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              viewBox='0 0 16 16'
            >
              <path d='M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z' />
              <path d='M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z' />
            </svg>
            <div className='mt-2 sm:mt-6'>
              <h3 className='text-lg font-semibold text-gray-100 dark:text-gray-100'>
                Responsive
              </h3>
            </div>
          </div>

          <div className='col-span-6 sm:col-span-4 text-center'>
            <svg
              className='mx-auto h-auto w-7 md:w-9 text-twingreen-50 dark:text-gray-100'
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              viewBox='0 0 16 16'
            >
              <path d='M9.465 10H12a2 2 0 1 1 0 4H9.465c.34-.588.535-1.271.535-2 0-.729-.195-1.412-.535-2z' />
              <path d='M6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 1a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm.535-10a3.975 3.975 0 0 1-.409-1H4a1 1 0 0 1 0-2h2.126c.091-.355.23-.69.41-1H4a2 2 0 1 0 0 4h2.535z' />
              <path d='M14 4a4 4 0 1 1-8 0 4 4 0 0 1 8 0z' />
            </svg>
            <div className='mt-2 sm:mt-6'>
              <h3 className='text-lg font-semibold text-gray-100 dark:text-gray-100'>
                Customizable
              </h3>
            </div>
          </div>

          <div className='col-span-6 col-start-4 sm:col-span-4 text-center'>
            <svg
              className='mx-auto h-auto w-7 md:w-9 text-twingreen-50 dark:text-gray-100'
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              viewBox='0 0 16 16'
            >
              <path d='M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1H2zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z' />
              <path d='M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z' />
            </svg>
            <div className='mt-2 sm:mt-6'>
              <h3 className='text-lg font-semibold text-gray-100 dark:text-gray-100'>
                24/7 Support
              </h3>
            </div>
          </div>
        </div>

        <div className='mt-20 grid grid-cols-12 items-center gap-x-2 sm:gap-x-6 lg:gap-x-8'>
          <div className='hidden md:block col-span-4 md:col-span-3'>
            <img
              className='rounded-xl'
              src='https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1981&q=80'
              alt='Image Description'
            />
          </div>

          <div className='col-span-4 md:col-span-3'>
            <img
              className='rounded-xl'
              src='https://images.unsplash.com/photo-1587613991119-fbbe8e90531d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1003&q=80'
              alt='Image Description'
            />
          </div>

          <div className='col-span-4 md:col-span-3'>
            <img
              className='rounded-xl'
              src='https://images.unsplash.com/photo-1554295405-abb8fd54f153?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=652&q=80'
              alt='Image Description'
            />
          </div>

          <div className='col-span-4 md:col-span-3'>
            <img
              className='rounded-xl'
              src='https://images.unsplash.com/photo-1640622300473-977435c38c04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80'
              alt='Image Description'
            />
          </div>
        </div>
      </div>
      <Newsletters />
      <Footer />
    </div>
  );
};
export default MoreInfo;

const Announcement = () => {
  return (
    <div className='bg-gradient-to-r from-red-500 via-purple-400 to-blue-500'>
      <div className='max-w-[85rem] px-4 py-4 sm:px-6 lg:px-8 mx-auto'>
        <div className='grid justify-center md:grid-cols-2 md:justify-between md:items-center gap-2'>
          <div className='text-center md:text-left'>
            <p className='text-xs text-white/[.8] uppercase tracking-wider'>
              Preview of the new AR Builder
            </p>
            <p className='mt-1 text-white font-medium'>
              Sign up to get early access. No credit card required.
            </p>
          </div>

          <div className='text-center md:text-left md:flex md:justify-end md:items-center'>
            <a
              className='py-3 px-6 inline-flex justify-center items-center gap-2 rounded-full font-medium bg-gray-200 text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm'
              href='/join'
            >
              Sign up free
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
