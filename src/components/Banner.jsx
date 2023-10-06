import { BannerButtonSvg, ChevronRightSvg } from '../assets/Svg';

const Banner = () => {
  return (
    <div className='relative isolate flex items-center gap-x-6 overflow-hidden rounded-md bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1'>
      <StyledBanner />
      <BannerContent />
    </div>
  );
};

export default Banner;

const StyledBanner = () => {
  return (
    <>
      <div
        className='absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl'
        aria-hidden='true'
      >
        <div
          className='aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-twingreen-50 to-twinpurple-500 opacity-60'
          style={{
            clipPath:
              'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
          }}
        />
      </div>
      <div
        className='absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl'
        aria-hidden='true'
      >
        <div
          className='aspect-[577/310] w-[36.0625rem] bg-gradient-to-l from-twingreen-50 to-twinpurple-500 opacity-80'
          style={{
            clipPath:
              'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
          }}
        />
      </div>
    </>
  );
};

const BannerContent = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full h-full'>
      <div className='py-4 px-4 mx-auto max-w-screen-xl text-center lg:py-10 lg:px-12'>
        <a
          href='#'
          className='inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700'
          role='alert'
        >
          <span className='text-xs bg-twinpurple-500 rounded-full text-white px-4 py-1.5 mr-3'>
            New
          </span>{' '}
          <span className='text-sm font-medium'>
            ARBuilder is out! See what's new
          </span>
          <ChevronRightSvg />
        </a>
        <h1 className='mb-4 text-4xl font-extrabold tracking-tight leading-none text-twinpurple-500 md:text-5xl lg:text-6xl dark:text-white'>
          We create the virtual world&apos;s potential
        </h1>
        <p className='mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400'>
          Here at Twinverse we focus on markets where technology meets
          innovation.
        </p>
      </div>
      <BannerButton />
    </div>
  );
};

const BannerButton = () => {
  const emojis = [
    '🐸',
    '🐊',
    '🐢',
    '🐲',
    '🦖',
    '🐳',
    '🐬',
    '🦭',
    '🐟',
    '🦈',
  ];

  return (
    <div className='flex gap-x-8'>
      {emojis.map((e, i) => (
        <button
          key={i}
          type='button'
          className={`mb-2 inline-block rounded-full p-2 text-xl font-medium uppercase leading-normal text-white bg-red-500 drop-shadow-2xl shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg`}
        >
          {e}
        </button>
      ))}
    </div>
  );
};
