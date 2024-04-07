import React, { useState } from 'react';

const ToggleSwitch = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const handleToggleSwitch = () => {
    setIsAnnual(!isAnnual);
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <span className="mr-2 text-sm text-black">Monthly</span>
        <label htmlFor="toggle-switch" className="inline-flex relative items-center cursor-pointer">
          <input
            id="toggle-switch"
            type="checkbox"
            className="sr-only peer"
            checked={isAnnual}
            onChange={handleToggleSwitch}
          />
          <div className="w-11 h-6 bg-[#121212] opacity-20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r from-pink-400 to-amber-200 peer-checked:opacity-100"></div>
        </label>
        <span className="ml-2 text-sm text-black">
          Annual <span className="text-gray-500">(save 20%)</span>
        </span>
      </div>
    </div>
  );
};

export default ToggleSwitch;