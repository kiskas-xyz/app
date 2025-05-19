import React from "react";

const HowItWorks = () => {
     const data = [
    {
      icon: "/domain.svg",
      title: "Enter Your Domain",
      description:
        "Simply provide your domain name and we will handle the rest.",
    },
    {
      icon: "/payment.svg",
      title: "Payments",
      description:
        "Make your payment and get an instant booking link for configuration.",
    },
    {
      icon: "configured.svg",
      title: "Fully Configured",
      description:
        "Our experts set up all technical requirements automatically.",
    },
    {
      icon: "email.svg",
      title: "Access Your Email",
      description:
        "Connect to Gmail or your favourite email client and you’re ready.",
    },
  ];
  return (
    <section id="features" className="py-2 px-6 bg-white text-center space-y-2">
      <h3 className="text-4xl font-bold">How Kiskas Works?</h3>
      <p className="text-base font-normal text-text-black mb-8 text-center">
        Four simple steps to your professional email setup
      </p>
      <div className="lg:max-w-[70%] mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {data.map((item, index) => (
          <div
            key={index}
            className="p-6 text-left bg-white rounded-lg hover:shadow-2xl space-y-4 transition cursor-pointer"
          >
            <div className="bg-secondary rounded-lg p-3 w-fit">
              <img src={item.icon} alt="" />
            </div>
            <h4 className="text-xl font-bold">{item.title}</h4>
            <p className="text-text-black text-sm font-normal">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
