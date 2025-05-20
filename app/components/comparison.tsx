import React from "react";

const Comparison = () => {
  return (
    <section id="savings" className="py-15 bg-white text-center">
      <h3 className="text-3xl font-bold mb-10">10 Email Pricing Comparison</h3>
      <p className="mb-10 text-gray-600 max-w-3xl mx-auto text-lg">
        Need 10 emails on your domain? Here’s the yearly cost across providers
      </p>
      <div className="grid md:grid-cols-3 gap-8 mx-auto text-left">
        <div className="bg-white py-16 px-4 rounded-[10px] border border-border-grey">
          <h4 className="text-xl font-bold mb-2">Kiskas</h4>
          <p className="text-2xl font-semibold text-text-green">£30/year</p>
          <p className="text-base font-normal text-text-black">
            10 emails, all included no extra charge
          </p>
        </div>
        <div className="bg-white py-16 px-4 rounded-[10px] border border-border-grey">
          <h4 className="text-xl font-bold mb-2">Google Workspace</h4>
          <p className="text-2xl font-semibold text-text-red">£570/year</p>
          <p className="text-base font-normal text-text-black">
            £57 × 10 users
          </p>
        </div>
         <div className="bg-white py-16 px-4 rounded-[10px] border border-border-grey">
          <h4 className="text-xl font-bold mb-2">Namecheap Pro</h4>
          <p className="text-2xl font-semibold text-text-red">£330/year</p>
          <p className="text-base font-normal text-text-black">
            £33 × 10 mailboxes
          </p>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
