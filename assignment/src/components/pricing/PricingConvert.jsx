import React, { useState } from 'react';

const PricingConvert = () => {
    const [selectedCurrency, setSelectedCurrency] = useState('EUR');

    const handleCurrencyChange = (currency) => {
        setSelectedCurrency(currency);
    };

    return (
        <div className="flex h-8">
            <button
                className={`px-2 py-0 text-xs border-2 border-gray-400 ${selectedCurrency === 'EUR' ? 'bg-gray-200 text-black border-black' : 'hover:bg-gray-200'} rounded-l-md`}
                onClick={() => handleCurrencyChange('EUR')}
            >
                EUR
            </button>
            <button
                className={`px-2 py-0 text-xs border-2 border-gray-400 ${selectedCurrency === 'GBP' ? 'bg-gray-200 text-black border-black' : 'hover:bg-gray-200'
                    }`}
                onClick={() => handleCurrencyChange('GBP')}
            >
                GBP
            </button>
            <button
                className={`px-2 py-0 text-xs border-2 border-gray-400 rounded-r-md ${selectedCurrency === 'USD' ? 'bg-gray-200 text-black border-black' : 'hover:bg-gray-200'
                    }`}
                onClick={() => handleCurrencyChange('USD')}
            >
                USD
            </button>
        </div>
    );
};

export default PricingConvert;