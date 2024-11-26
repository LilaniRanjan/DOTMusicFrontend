import React from 'react';
import BodyLeftLayout from './BodyLeftLayout';

const BodyLayout = () => {
  return (
    <div className='grid grid-cols-12 gap-4 dark:bg-black'>
      {/* Left Sidebar */}
      <div className='col-start-1 col-end-5 bg-gray-900 rounded-lg mx-2 pb-16 mb-8'>
        <BodyLeftLayout/>
      </div>
    
      {/* Main Content */}
      <div className='col-start-5 col-end-13 text-white'>
        
      </div>
    </div>
  );
};

export default BodyLayout;
