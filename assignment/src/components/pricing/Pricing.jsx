import React from "react";
import ToggleSwitch from "../toggleSwitch/ToggleSwitch";
import PricingCard from "./PricingCard";

const Pricing = () => {
  return (
    <div className="bg-[#ffeacd] py-20">
      <div className="">
        <div className="py-0.5 white">
          <div className="w-full">
            <div className="flex justify-center">
              <div className="w-full px-7 md:px-20 max-w-screen-2xl">
                <div className="flex justify-center">
                  <div className="w-full md:text-center max-w-3xl">
                    <h2 className="text-4xl md:text-5xl font-display font-bold">
                      The Shortcut to Effective Storyboards
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-8 md:justify-center">
          <div className="max-w-xl px-6 lg:max-w-2xl w-full text-center">
            <p className="text-xl md:text-lg leading-loose mb-4">
              Get the modern storyboarding tool loved by video professionals. All
              plans come with a risk-free 30-day money-back guarantee.
            </p>
          </div>
        </div>
        <ToggleSwitch />
      </div>
      <PricingCard />
    </div>
  );
};

export default Pricing;