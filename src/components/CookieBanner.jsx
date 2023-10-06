import { XMarkSvg } from '../assets/Svg';

const CookieBanner = () => {
  return (
    <div>
      <div
        id='cookies-with-stacked-buttons'
        className='fixed bottom-0 right-0 z-[60] sm:max-w-sm w-full mx-auto p-6'
      >
        <div className='p-4 bg-white/[.6] backdrop-blur-lg rounded-xl shadow-2xl dark:bg-slate-900/[.6] dark:shadow-black/[.7]'>
          <div className='flex justify-between items-center gap-x-5 sm:gap-x-10'>
            <h2 className='font-semibold text-gray-800 dark:text-white'>
              Cookie Settings
            </h2>
            <button
              type='button'
              className='inline-flex rounded-full p-2 text-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-gray-600 dark:hover:bg-gray-600 dark:text-gray-300'
            >
              <span className='sr-only'>Dismiss</span>
              <XMarkSvg />
            </button>
          </div>
          <p className='mt-2 text-sm text-gray-800 dark:text-gray-200'>
            We use cookies to improve your experience and for marketing. Visit
            our{' '}
            <a
              className='inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium'
              href='#'
            >
              Cookies Policy
            </a>{' '}
            to learn more.
          </p>
          <div className='mt-5 mb-2 w-full flex gap-x-2'>
            <div className='grid w-full'>
              <button
                type='button'
                className='py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-twinpurple-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800'
              >
                Allow all
              </button>
            </div>
            <div className='grid w-full'>
              <button
                type='button'
                className='py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-twinpurple-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800'
              >
                Reject all
              </button>
            </div>
          </div>
          <div className='grid w-full'>
            <button
              type='button'
              className='py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800'
            >
              Manage cookies
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
