import React from 'react';

const BodyLayout = () => {
  return (
    <div className='grid grid-cols-12 gap-4 dark:bg-black'>
      {/* Left Sidebar */}
      <div className='col-start-1 col-end-5 bg-gray-800 rounded-lg mx-2'>
        <div className='m-4'>
          {/* Link Wrapping Library and "+" */}
          <a href="#library" className='flex justify-between items-center text-white'>
            {/* Icon and Text */}
            <div className='flex items-center'>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0-3.75-3.75M17.25 21 21 17.25"
                />
              </svg>
              <span className='ml-2'>Your Library</span>
            </div>

            {/* "+" Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className='col-start-5 col-end-13 text-white'>Hello</div>
    </div>
  );
};

export default BodyLayout;
