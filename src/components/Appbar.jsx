import React from 'react'

const Appbar = () => {
  return (
    <div className='py-4 px-8 dark:bg-black dark:text-white'>
      <nav className='flex flex-row'>
        <div className='basis-1/4'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 text-gray-500 hover:text-blue-500 transition-colors duration-200"
          >
            <path
              fillRule="evenodd"
              d="M19.952 1.651a.75.75 0 0 1 .298.599V16.303a3 3 0 0 1-2.176 2.884l-1.32.377a2.553 2.553 0 1 1-1.403-4.909l2.311-.66a1.5 1.5 0 0 0 1.088-1.442V6.994l-9 2.572v9.737a3 3 0 0 1-2.176 2.884l-1.32.377a2.553 2.553 0 1 1-1.402-4.909l2.31-.66a1.5 1.5 0 0 0 1.088-1.442V5.25a.75.75 0 0 1 .544-.721l10.5-3a.75.75 0 0 1 .658.122Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className='flex flex-row basis-1/2 justify-center items-center gap-4'>
          <div className='rounded-full bg-white p-2'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-gray-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
          </div>
          <input
            type='search'
            id='search'
            placeholder="Search songs, artists..."
            className="px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className='flex flex-row basis-1/4 justify-end items-center'>
          <div className='px-5 py-2 hover:text-gray-800 transition-colors duration-200 cursor-pointer'>
            Sign up
          </div>
          <div className='px-5 rounded-full bg-white dark:text-black py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-200 cursor-pointer'>
            Log in
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Appbar
