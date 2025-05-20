import React from "react";

const WhatYouNeed = () => {
  const data = [
    {
      icon: "/payment.svg",
      title: "Enter Your Domain",
      description:
        "Simply provide your domain name and we will handle the rest.",
    },
    {
      icon: "/headset.svg",
      title: "Payments",
      description:
        "Make your payment and get an instant booking link for configuration.",
    },
    {
      icon: "/email.svg",
      title: "Email-flexible",
      description: "No restrictions, connect with any email client.",
    },
    {
      icon: "/mobile.svg",
      title: "Mobile Ready",
      description: "Access your email from any device, anywhere.",
    },
    {
      icon: "/security.svg",
      title: "Enterprise-Grade Security",
      description: "Advanced spam protection and encryption included.",
    },
    {
      icon: "/replay.svg",
      title: "Automatic Updates",
      description: "Always up-to date with the latest email standard.",
    },
  ];
  return (
    <section
      id="how"
      className="py-15 text-center text-text-black space-y-6 px-5"
    >
      <h3 className="text-4xl font-bold">
        Everything You Need For Your Professional Email
      </h3>
      <p className="text-base font-normal text-text-black text-center">
        Simple, secure, and reliable email setup
      </p>

      <div className="grid md:grid-cols-3 gap-10 text-left ">
        {data.map((item, index)=>(
        <div key={index}
        className="bg-white py-16 px-4 rounded-xl transition space-y-6">
          <div className="bg-secondary rounded-lg p-3 w-fit">
            <img src={item.icon} alt="" />
          </div>
          <div className="text-xl font-bold mb-2">{item.title}</div>
          <p className="font-normal text-base">
            {item.description}
          </p>
        </div>
        ))}
      </div>
    </section>
  );
};

export default WhatYouNeed;
