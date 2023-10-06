const Design = () => {
  return (
    <div>
      <section className='dark:bg-gray-900'>
        <div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6'>
          <div className='grid gap-8 lg:grid-cols-2'>
            <article className='p-6 bg-gradient-to-tl from-gray-400 to-gray-100 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'>
              <Clips name='video' />
              <div className='mb-4 rounded-md border border-gray-200 hover:border hover:border-gray-400 p-4'>
                <img
                  className='rounded-md'
                  src='https://images.unsplash.com/photo-1640622300473-977435c38c04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80'
                />
              </div>
              <div className='flex justify-between items-center'>
                <div className='flex items-center space-x-4'>
                  <img
                    className='w-7 h-7 ml-4 rounded-full border-2 border-white'
                    src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png'
                    alt='Jese Leos avatar'
                  />
                  <span className='font-medium text-gray-900'>Jese Leos</span>
                </div>
              </div>
            </article>
            <article className='p-6 bg-gradient-to-tl from-gray-400 to-gray-100 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'>
              <Clips name='article' />
              <div className='mb-4 rounded-md border border-gray-200 hover:border hover:border-gray-400 p-4'>
                <img
                  className='rounded-md'
                  src='https://images.unsplash.com/photo-1640622300473-977435c38c04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80'
                />
              </div>
              <div className='flex justify-between items-center'>
                <div className='flex items-center space-x-4'>
                  <img
                    className='w-7 h-7 ml-4 rounded-full border-2 border-white'
                    src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png'
                    alt='Bonnie Green avatar'
                  />
                  <span className='font-medium text-gray-900'>
                    Bonnie Green
                  </span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Design;

const Clips = (props) => {
  return (
    <>
      {props.name === 'article' ? (
        <div className='flex justify-between items-center px-4 mb-1 text-gray-500'>
          <span className='bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800'>
            <svg
              className='mr-1 w-3 h-3'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z'
                clipRule='evenodd'
              ></path>
              <path d='M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z'></path>
            </svg>
            Article
          </span>
          <span className='text-sm'>10 days ago</span>
        </div>
      ) : props.name === 'video' ? (
        <div className='flex justify-between items-center px-4 mb-1 text-gray-500'>
          <span className='bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800'>
            <svg
              className='mr-1 w-3 h-3'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z'></path>
            </svg>
            Tutorial
          </span>
          <span className='text-sm'>14 days ago</span>
        </div>
      ) : null}
    </>
  );
};
