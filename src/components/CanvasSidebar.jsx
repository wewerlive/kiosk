import { SearchIconSvg } from '../assets/Svg';
import Logo from '../assets/logo.png';
import { XMarkIcon } from '@heroicons/react/24/outline';

const CanvasSidebar = (props) => {
  const { open, setOpen } = props;

  const list = ['Tools', 'Builds', 'Templates', 'Materials', 'Guides'];

  return (
    <>
      <aside
        id='logo-sidebar'
        className={
          open
            ? 'ml-2 mb-2 left-0 z-40 w-64 h-auto transition-transform -translate-x-full sm:translate-x-0'
            : 'translate-x-0 ease-out hidden'
        }
        aria-label='Sidebar'
      >
        <div className='w-64 h-[36rem] rounded-xl px-3 py-4 overflow-y-auto bg-gray-300 dark:bg-gray-800'>
          <div className='flex justify-between items-center mb-4'>
            <a
              href='#'
              className='flex items-center'
            >
              <img
                src={Logo}
                className='h-6 sm:h-7 w-auto'
                alt='Logo'
              />
              <span className='self-center text-twinpurple-500 text-xl font-semibold whitespace-nowrap dark:text-white'>
                ArBuilder
              </span>
            </a>
            <button
              onClick={() => setOpen(false)}
              className='rounded-full bg-twinpurple-500 p-1'
            >
              <XMarkIcon className='h-4 w-4 text-white' />
            </button>
          </div>
          <form className='flex items-center'>
            <label
              htmlFor='simple-search'
              className='sr-only'
            >
              Search
            </label>
            <div className='relative w-full'>
              <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                <SearchIconSvg />
              </div>
              <input
                type='text'
                id='simple-search'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-twingreen-50 focus:border-twinpurple-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                placeholder='Search'
              />
            </div>
          </form>
          <div>
            <div className='flex items-center justify-center pt-4 pb-2 md:pt-8 md:pb-4 flex-wrap'>
              <button
                type='button'
                className='text-twinpurple-500 hover:text-twinpurple-500 border border-twinpurple-500 bg-white hover:bg-twingreen-50 focus:ring-4 focus:outline-none focus:ring-twingreen-50 rounded-full text-base font-medium px-2.5 py-1 text-center mr-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800'
              >
                All categories
              </button>
              {list.map((item, index) => (
                <button
                  key={index}
                  type='button'
                  className='text-gray-900 border border-white hover:border-twinpurple-500 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-2.5 py-1 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800'
                >
                  {item}
                </button>
              ))}
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-2'>
              {[...Array(24)].map((_, i) => (
                <div key={i}>
                  <img
                    className='h-auto max-w-full rounded-lg border-2 border-white hover:border-twinpurple-500 dark:border-gray-900 dark:hover:border-gray-700'
                    src='https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg'
                    alt=''
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};
export default CanvasSidebar;
