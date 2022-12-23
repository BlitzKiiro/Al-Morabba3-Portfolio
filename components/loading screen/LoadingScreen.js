const LoadingScreen = () => {
  return (
    <div className='splash-screen flex backdrop-blur-xl bg-dark-alpha flex-col items-center justify-center fixed w-full h-full z-50'>
      {/* <!-- loading logo --> */}
      <div className='logo flex flex-col items-center justify-center h-full w-full'>
        {/* <!-- name logo svg --> */}
        <div className='drawing flex justify-center w-[80%] md:w-1/3'>
          <svg
            className='w-full '
            version='1.2'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 1280 240'
            width='1280'
          >
            <g
              fill='none'
              fillRule='evenodd'
              stroke='currentColor'
              strokeWidth='5'
              className='lines dark:stroke-white stroke-neutral-900'
            >
              <path
                id='A'
                className='s0'
                aria-label='A'
                d='m69 212l7.5-16.3h50.9l7.7 16.3h32.7l-58.6-124.5h-14.8l-58.1 124.5zm33-71.2l12.7 27.4h-25.4z'
              />
              <path
                id='L '
                className='s0'
                aria-label='L '
                d='m185.6 212h77.5v-32.9h-44.8v-91.6h-32.7z'
              />
              <path
                id='M'
                className='s0'
                aria-label='M'
                d='m372.4 87.5h-14.8v124.5h32.9v-63.7l32.7 29.5 32.5-29.7v63.9h32.9v-124.5h-14.8l-50.6 46.1z'
              />
              <path
                id='O'
                className='s0'
                aria-label='O'
                d='m507.1 149.9c0 34.4 27.7 62.1 62.1 62.1 34.4 0 62.3-27.7 62.3-62.1 0-34.3-27.9-62.4-62.3-62.4-34.4 0-62.1 28.1-62.1 62.4zm91.8-0.2c0 16.3-13.3 29.8-29.7 29.8-16.3 0-29.5-13.5-29.5-29.8 0-16.4 13.2-29.7 29.5-29.7 16.4 0 29.7 13.3 29.7 29.7z'
              />
              <path
                id='R'
                className='s0'
                aria-label='R'
                d='m760.5 212l-26.4-45.2c9-8.3 14.8-20.2 14.8-33.5 0-25.2-20.6-45.8-45.8-45.8h-52.5v124.5h32.7v-33h20.3l19.2 33zm-77.2-96.9h20.3c9.9 0 17.9 7.9 17.9 17.9 0 9.9-8 17.7-17.9 17.7h-20.3z'
              />
              <path
                id='B'
                className='s0'
                aria-label='B'
                d='m812.3 185.1v-21.6h21.9c5.7 0 10.8 4.8 10.8 10.8 0 6-4.8 10.8-10.8 10.8zm0-49v-21.5h15.8c6 0 10.8 4.8 10.8 10.7 0 6-4.8 10.8-10.8 10.8zm28.7 75.9c19.8 0 36.5-16.8 36.5-36.5 0-11.3-5.6-21.8-14.1-28.6 4.8-6.1 8-13.9 8-22.4 0-19.9-16.9-37-36.9-37h-54.9v124.5z'
              />
              <path
                id='B'
                className='s0'
                aria-label='B'
                d='m932.3 185.1v-21.6h21.9c5.7 0 10.8 4.8 10.8 10.8 0 6-4.8 10.8-10.8 10.8zm0-49v-21.5h15.8c6 0 10.8 4.8 10.8 10.7 0 6-4.8 10.8-10.8 10.8zm28.7 75.9c19.8 0 36.5-16.8 36.5-36.5 0-11.3-5.6-21.8-14.1-28.6 4.8-6.1 8-13.9 8-22.4 0-19.9-16.9-37-36.9-37h-54.9v124.5z'
              />
              <path
                id='A'
                className='s0'
                aria-label='A'
                d='m1041 212l7.5-16.3h51l7.6 16.3h32.7l-58.6-124.5h-14.8l-58.1 124.5zm33-71.2l12.7 27.4h-25.4z'
              />
              <path
                id='3'
                className='s0'
                aria-label='3'
                d='m1157.6 200.2c0 0.2 11.3 11.8 30 11.8 18.8 0 39.5-15.4 39.5-40.3 0-32.2-30.4-39.9-30.4-39.9l31.3-44.3h-76.2v26.2h25.7l-19.9 28.7 18.6 18.8c0 0 2.5-4.5 11.2-4.5 8.8 0 13.7 8.2 13.7 15.1 0 7-5.5 14.1-13.5 14.1-8 0-11.4-4.3-11.4-4.4 0-0.2-18.6 18.5-18.6 18.7z'
              />
            </g>
          </svg>
        </div>
        {/* <!-- cool quote --> */}
        <p className='quote-line ont-semibold font-SlimJoe text-black dark:text-[#F4F4F4]  opacity-0  text-lg '>
          Marketing Agency
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;
