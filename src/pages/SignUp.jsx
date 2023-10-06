import Logo from '../assets/Logo.png';
import { ChevronRightSvg } from '../assets/Svg';
import Footer from '../components/Footer';

const SignUp = () => {
  return (
    <div id='login'>
      <main
        id='content'
        role='main'
        className="relative max-w-3xl px-4 sm:px-6 lg:px-8 flex flex-col justify-center sm:items-center mx-auto w-full h-screen before:absolute before:top-0 before:left-1/2 before:bg-[url('../svg/component/squared-bg-element-dark.svg')] before:bg-no-repeat before:bg-top before:w-full before:h-full before:-z-[1] before:transform before:-translate-x-1/2"
      >
        <div className='text-center py-8 px-4 sm:px-6 lg:px-8'>
          <div className='sm:mx-auto sm:w-full sm:max-w-sm mb-4'>
            <img
              className='mx-auto h-28 w-auto z-10 drop-shadow-2xl backdrop-opacity-100'
              src={Logo}
              alt='Your Company'
            />
          </div>
          <h1 className='text-2xl text-white sm:text-4xl'>
            Get notified when we launch
          </h1>
          <h2 className='mt-1 sm:mt-3 text-4xl font-bold text-white sm:text-6xl'>
            <span className='bg-clip-text bg-gradient-to-tr from-twingreen-50 to-twinpurple-500 text-transparent'>
              ArBuilder
            </span>
          </h2>

          <form>
            <div className='mt-8 space-y-4'>
              <div>
                <label
                  htmlFor='hs-cover-with-gradient-form-name-1'
                  className='sr-only'
                >
                  Full name
                </label>
                <div className='relative'>
                  <input
                    type='text'
                    id='hs-cover-with-gradient-form-name-1'
                    className='py-3 ps-11 pe-4 block w-full bg-white/40 border-twingreen-50/60 text-gray-700 placeholder:text-gray-700 rounded-md text-sm focus:border-twingreen-50/30 focus:ring-white/30 sm:p-4 sm:ps-11'
                    placeholder='Full name'
                  />
                  <div className='absolute inset-y-0 left-0 flex items-center pointer-events-none z-20 ps-4'>
                    <svg
                      className='h-4 w-4 text-gray-900'
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='16'
                      fill='currentColor'
                      viewBox='0 0 16 16'
                    >
                      <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' />
                    </svg>
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor='hs-cover-with-gradient-form-email-1'
                  className='sr-only'
                >
                  Email address
                </label>
                <div className='relative'>
                  <input
                    type='email'
                    id='hs-cover-with-gradient-form-email-1'
                    className='py-3 ps-11 pe-4 block w-full bg-white/40 border-twingreen-50/60 text-gray-700 placeholder:text-gray-700 rounded-md text-sm focus:border-twingreen-50/30 focus:ring-white/30 sm:p-4 sm:ps-11'
                    placeholder='Email address'
                  />
                  <div className='absolute inset-y-0 left-0 flex items-center pointer-events-none z-20 ps-4'>
                    <svg
                      className='h-4 w-4 text-gray-900'
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='16'
                      fill='currentColor'
                      viewBox='0 0 16 16'
                    >
                      <path d='M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z' />
                    </svg>
                  </div>
                </div>
              </div>

              <div className='grid'>
                <button
                  type='submit'
                  className='py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md bg-white/40 border border-twingreen-50 font-medium text-gray-700 hover:bg-white/80 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all text-sm sm:p-4'
                >
                  Join the waitlist
                  <ChevronRightSvg />
                </button>
              </div>
            </div>
          </form>
        </div>
      </main>
      <Newsletters />
      <Footer />
    </div>
  );
};
export default SignUp;

export const Newsletters = () => {
  return (
    <>
      <div className='max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-16 mx-auto bg-gray-800'>
        <div className='grid md:grid-cols-2 gap-8'>
          <div className='max-w-md'>
            <h2 className='text-2xl font-bold md:text-3xl md:leading-tight dark:text-white'>
              Subscribe
            </h2>
            <p className='mt-3 text-gray-200 dark:text-gray-200'>
              Subscribe and start making the most of every engagement.
            </p>
          </div>

          <form>
            <div className='w-full sm:max-w-lg md:ml-auto'>
              <div className='flex flex-col items-center gap-2 sm:flex-row sm:gap-3'>
                <div className='relative w-full'>
                  <input
                    type='email'
                    id='hs-cover-with-gradient-form-email-1'
                    className='py-3 ps-11 pe-4 block w-full bg-white/70 border-twingreen-50/60 text-gray-700 placeholder:text-gray-700 rounded-md text-sm focus:border-twingreen-50/30 focus:ring-white/30 sm:p-4 sm:ps-11'
                    placeholder='Email address'
                  />
                  <div className='absolute inset-y-0 left-0 flex items-center pointer-events-none z-20 ps-4'>
                    <svg
                      className='h-4 w-4 text-gray-900'
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='16'
                      fill='currentColor'
                      viewBox='0 0 16 16'
                    >
                      <path d='M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z' />
                    </svg>
                  </div>
                </div>
                <a
                  className='w-full sm:w-auto whitespace-nowrap inline-flex justify-center items-center gap-x-3 text-center bg-twinpurple-500 hover:bg-twinpurple-500 border border-twingreen-50 text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-twinpurple-500 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800'
                  href='#'
                >
                  Subscribe
                </a>
              </div>
              <p className='mt-3 text-sm text-gray-200 text-md'>
                No spam, unsubscribe at any time
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
