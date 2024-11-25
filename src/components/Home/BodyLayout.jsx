import React from 'react';

const BodyLayout = () => {
  return (
    <div className='grid grid-cols-12 gap-4 dark:bg-black'>
      {/* Left Sidebar */}
      <div className='col-start-1 col-end-5 bg-gray-900 rounded-lg mx-2 pb-16 mb-8'>
        <div className='m-4'>
          {/* Link Wrapping Library and "+" */}
          <a href="#library" className='flex justify-between items-center text-gray-400 font-bold'>
            {/* Icon and Text */}
            <div className='flex items-center pb-4'>
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

        <div className='text-white mx-3 my-4 p-5 mt-6 bg-gray-800 rounded-lg'>
            <div className='font-bold mb-1'>Create your ﬁrst playlist</div>
            <div className='text-sm mb-5'>It's easy, we'll help you</div>
            <span className='rounded-full bg-white text-black py-2 text-sm font-bold px-4'>Create Playlist</span>
        </div>

        <div className='text-white mx-3 my-4 p-5 mt-6 bg-gray-800 rounded-lg'>
            <div className='font-bold mb-1'>Let's ﬁnd some podcasts to follow</div>
            <div className='text-sm mb-5'>We'll keep you updated on new episodes</div>
            <span className='rounded-full bg-white text-black py-2 text-sm font-bold px-4'>Browse podcasts</span>
        </div>

        <div className='text-white mx-3 my-4 p-5 mt-6 text-xs'>
            <div className='mb-3 text-gray-400'><span className='pr-4'>Legal</span> <span className='pr-4'>Safety & Privacy Center</span> <span className='pr-4'>Privacy Policy</span> <span className='pr-4'>Cookies</span></div>
            <div className='mb-3 text-gray-400'><span className='pr-4'>About Ads</span> <span className='pr-4'>Accessibility</span></div>
            <div>Cookies</div>
        </div>

        <span className='inline-flex flex-row items-center text-white border-2 p-2 rounded-full ml-8'>
            {/* SVG Icon */}
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                className="w-6 h-6 pr-1"
            >
                <path d="M21.721 12.752a9.711 9.711 0 0 0-.945-5.003 12.754 12.754 0 0 1-4.339 2.708 18.991 18.991 0 0 1-.214 4.772 17.165 17.165 0 0 0 5.498-2.477ZM14.634 15.55a17.324 17.324 0 0 0 .332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 0 0 .332 4.647 17.385 17.385 0 0 0 5.268 0ZM9.772 17.119a18.963 18.963 0 0 0 4.456 0A17.182 17.182 0 0 1 12 21.724a17.18 17.18 0 0 1-2.228-4.605ZM7.777 15.23a18.87 18.87 0 0 1-.214-4.774 12.753 12.753 0 0 1-4.34-2.708 9.711 9.711 0 0 0-.944 5.004 17.165 17.165 0 0 0 5.498 2.477ZM21.356 14.752a9.765 9.765 0 0 1-7.478 6.817 18.64 18.64 0 0 0 1.988-4.718 18.627 18.627 0 0 0 5.49-2.098ZM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 0 0 1.988 4.718 9.765 9.765 0 0 1-7.478-6.816ZM13.878 2.43a9.755 9.755 0 0 1 6.116 3.986 11.267 11.267 0 0 1-3.746 2.504 18.63 18.63 0 0 0-2.37-6.49ZM12 2.276a17.152 17.152 0 0 1 2.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0 1 12 2.276ZM10.122 2.43a18.629 18.629 0 0 0-2.37 6.49 11.266 11.266 0 0 1-3.746-2.504 9.754 9.754 0 0 1 6.116-3.985Z" />
            </svg>

            {/* Text */}
            <span className='ml-2'>English</span>
        </span>

      </div>
    
      {/* Main Content */}
      <div className='col-start-5 col-end-13 text-white'>Hello</div>
    </div>
  );
};

export default BodyLayout;
