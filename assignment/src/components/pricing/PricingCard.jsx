import React from "react";
import { PricingDetails } from "./PricingItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign, faCheck } from "@fortawesome/free-solid-svg-icons";

const PricingCard = () => {
  return (
    <div className="p-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-lg:gap-8">
          {PricingDetails.map((item, index) => {
            const isIndividualTitle = item.title === "Individual";
            return (
              <div
                key={item.title}
                className={`px-5 py-3 ${
                  index !== PricingDetails.length - 1
                    ? "border-r border-gray-300 md:border-0 md:border-b lg:border-r-0 lg:border-b"
                    : ""
                } ${
                  isIndividualTitle
                    ? "bg-gradient-to-bl from-[#efcfd8] to-[#e37d9b]"
                    : "bg-white"
                } rounded-lg lg:rounded-none`}
              >
                <div className="space-y-4 h-full">
                  <div className="py-6 border-b">
                    <h1 className="text-2xl font-semibold">
                      {item.title}
                      {isIndividualTitle && (
                        <div className="border-[#e37d9b] border text-[#e37d9b] rounded-full text-xs whitespace-nowrap md:text-sm pb-0 px-2 inline-block">
                          Popular
                        </div>
                      )}
                    </h1>
                  </div>
                  <div className="flex items-baseline pb-4 border-b">
                    <FontAwesomeIcon
                      icon={faDollarSign}
                      className="text-sm mr-1"
                    />
                    <h2 className="text-4xl">{item.price}</h2>
                    {item.title === "Free" ? (
                      <span className="text-sm text-gray-400">
                        {" "}
                        No credit card required{" "}
                      </span>
                    ) : (
                      <span className="text-sm text-gray-400">
                        {" "}
                        / month, billed yearly{" "}
                      </span>
                    )}
                  </div>
                  <div className="flex pb-6 pt-2 border-b items-center justify-center">
                    <button
                      className={`px-5 rounded-md text-center py-1.5 font-semibold border-2 lg:border-3 block sm:inline-block transition-all w-11/12 ${
                        isIndividualTitle
                          ? "border-transparent bg-gradient-to-r from-pink-400 to-amber-200 text-white"
                          : "text-black border-black"
                      }`}
                      href="#"
                    >
                      Get Started
                    </button>
                  </div>
                  <div className="">
                    <span className="font-bold">{item.subtitle}</span>
                  </div>
                  <div className="">
                    {Object.values(item.features).map((feature, index) => {
                      return (
                        <ul
                          className="flex items-center gap-2 leading-7 text-sm"
                          key={index}
                        >
                          <FontAwesomeIcon
                            icon={faCheck}
                            className="text-blue-300 text-sm"
                          />
                          <li>{feature}</li>
                        </ul>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PricingCard;