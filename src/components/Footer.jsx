import Logo from '../assets/Logo.png';

const Footer = () => {
  return (
    <footer className='w-full p-4 bg-gray-800 md:p-8 lg:p-10 bg-gray-800'>
      <div className='mx-auto max-w-screen-xl text-center'>
        <a
          href='#'
          className='flex justify-center items-center text-2xl font-semibold text-gray-900 text-white'
        >
          <img
            src={Logo}
            alt='Workflow'
            className='h-8 w-auto sm:h-10'
          />
          Twinverse™
        </a>
        <p className='my-6 text-gray-500 text-gray-400'>
          An Augmented Reality (AR) platform for the masses.
        </p>
        <ul className='flex flex-wrap justify-center items-center mb-6 text-gray-900 text-white'>
          <li>
            <a
              href='#'
              className='mr-4 hover:underline md:mr-6 '
            >
              About
            </a>
          </li>
          <li>
            <a
              href='#'
              className='mr-4 hover:underline md:mr-6'
            >
              Premium
            </a>
          </li>
          <li>
            <a
              href='#'
              className='mr-4 hover:underline md:mr-6 '
            >
              Campaigns
            </a>
          </li>
          <li>
            <a
              href='#'
              className='mr-4 hover:underline md:mr-6'
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href='#'
              className='mr-4 hover:underline md:mr-6'
            >
              Affiliate Program
            </a>
          </li>
          <li>
            <a
              href='#'
              className='mr-4 hover:underline md:mr-6'
            >
              FAQs
            </a>
          </li>
          <li>
            <a
              href='#'
              className='mr-4 hover:underline md:mr-6'
            >
              Contact
            </a>
          </li>
        </ul>
        <span className='text-sm text-gray-500 sm:text-center text-gray-400'>
          © 2021-2025{' '}
          <a
            href='#'
            className='hover:underline'
          >
            Twinverse™
          </a>
          {' '}All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};
export default Footer;
