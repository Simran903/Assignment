import React from 'react';


const ResourcesComponent = ({heading, para, image, className}) => {
  return (
    <div className="flex justify-center items-center border-2 border-black rounded-md w-11/12 mt-16 overflow-hidden">
      <div className={`flex flex-col md:flex-row ${className}`}>
        <div className="flex md:w-1/2 flex-col justify-center ml-10 p-5">
          <h2 className="mb-5 text-lg lg:text-xl xl:text-3xl font-bold font-display">
            {heading}
          </h2>
          <p className="text-base lg:block lg:text-md text-left">
            {para}
          </p>
        </div>
        <div className="md:w-1/2  flex justify-end">
          <div className="items-center mx-auto">
            <img src={image} alt="" style={{ width: '100%', height: 'auto' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesComponent;