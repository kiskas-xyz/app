import React, { useState } from "react";

const Pricing = () => {
  const tabList = [
    {
      name: "Bill Monthly",
    },
    {
      name: "Bill Yearly",
    },
  ];
  const [activeTab, setActiveTab] = useState("Bill Monthly");
  const data = [
    {
      title: "Starter",
      description: "Perfect for individuals or freelancers getting started.",
      yearlyPrice: " 30 / yr",
      monthlyPrice: " 500",
      details: [
        "1 Domain",
        "Up to 10 Emails",
        "Manual DNS Setup",
        "Email Routing",
        "24/7 Support",
      ],
      buttonTitle: "Get Started",
    },
    {
      title: "Pro",
      description: "Great for growing teams who need more flexibility.",
      yearlyPrice: "70 / yr",
      monthlyPrice: " 500",
      details: [
        "Up to 3 Domains",
        "Up to 25 Emails",
        "Assisted DNS Setup",
        "Email Routing",
        "24/7 Support",
      ],
      buttonTitle: "Get Started",
    },
    {
      title: "Business",
      description:
        "Built for businesses that need full support and scalability.",
      yearlyPrice: " 150 / yr",
      monthlyPrice: " 500",
      details: [
        "Up to 10 Domains",
        "Up to 100 Emails",
        "Full Setup & Management",
        "Priority Support",
        "24/7 Support",
      ],
      buttonTitle: "Get Started",
    },
    {
      title: "Enterprise",
      description: "Billed annually or quarterly.",
      yearlyPrice: "Contact",
      monthlyPrice: "Contact",
      details: [
        "Custom API & Automation",
        "Unlimited Domains",
        "Unlimited Emails",
        "Dedicated Account Manager",
        "24/7 Priority Support",
      ],
      buttonTitle: "Get Started",
    },
  ];
  return (
    <section
      id="pricing"
      className="flex items-center justfy-center flex-col py-15 bg-white text-center text-text-black space-y-8"
    >
      <h3 className="text-4xl font-bold">Simple, Transparent Pricing</h3>
      <p className="max-w-xl mx-auto">
        Choose a plan that works for you — monthly flexibility or yearly
        savings.
      </p>

      <div className="flex space-x-6 bg-white shadow-md rounded-lg p-2 w-fit justify-center">
        {tabList.map((item, index) => (
          <button
            key={index}
            className={`text-lg font-medium whitespace-nowrap py-4 px-7 transition-all ${
              activeTab === item.name
                ? "bg-primary rounded-[10px] text-white"
                : "text-text-black"
            }`}
            onClick={() => setActiveTab(item.name)}
          >
            {item.name}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-4 gap-8 text-left max-w-[90%]">
        {data.map((items, index) => (
          <div
            key={index}
            className="rounded-2xl pt-8 pb-2 px-4 shadow-sm text-center hover:bg-primary group transition-all duration-300"
          >
            <h4 className="text-2xl font-semibold group-hover:text-white mb-2">
              {items.title}
            </h4>
            <p className="text-sm text-text-black group-hover:text-white mb-4">
              {items.description}
            </p>
            <p className="text-[40px] group-hover:text-white font-bold mb-1">
              {!isNaN(
                parseFloat(
                  activeTab === "Bill Monthly"
                    ? items.monthlyPrice
                    : items.yearlyPrice
                )
              ) && <sup className="font-medium text-sm align-super relative -top-1.5">$</sup>}
              {activeTab === "Bill Monthly"
                ? items.monthlyPrice
                : items.yearlyPrice}
            </p>
            <ul className="mb-4 px-5 py-3 font-medium space-y-4 text-sm text-text-black bg-bg-grey rounded-lg">
              {items.details.map((detail, index) => (
                <li key={index} className="flex gap-2 items-center">
                  <div className="text-white bg-primary w-[21px] h-[21px] rounded-full">
                    &#10003;{" "}
                  </div>
                  <p>{detail}</p>
                </li>
              ))}
              <button className="shadow-md py-4 px-10 rounded-2xl text-lg font-semibold text-primary group-hover:bg-primary group-hover:text-white transition-all">
                {items.buttonTitle}
              </button>
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
