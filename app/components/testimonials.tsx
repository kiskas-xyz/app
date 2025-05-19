import React from "react";

const Testimonials = () => {
  const data = [
    {
      icons:'/stars.svg',
      description:'Working with Kiskas through Dastech has been a breeze. Fast, reliable and cost-effective.',
      clientImg:'/dasTech.png',
      clientName:'Das Technology',
      clientUrl:'https://dastech.org.uk/',
      clientUrlName:'dastech.org.uk'
    },
      {
      icons:'/stars.svg',
      description:'“Kiskas helped us set up email routing for our restaurant clients. Super support!”',
      clientImg:'/myqrmenu.png',
      clientName:'My QR Menu',
      clientUrl:'https://myqrmenu.co/',
      clientUrlName:'myqrmenu.co'
    },
      {
      icons:'/stars.svg',
      description:'“A great solution for dev communities. Kiskas made custom email simple.”',
      clientImg:'/CEO.png',
      clientName:'React Native Nigeria',
      clientUrl:'#',
      clientUrlName:'React Native NG'
    },

  ];
  return (
    <section
      id="testimonials"
      className="py-15 bg-white text-center text-text-black space-y-6"
    >
      <h3 className="text-4xl font-bold">Trusted By Real Users</h3>
      <p className="max-w-xl mx-auto">See what our customers have to say</p>
      <div className="grid md:grid-cols-3 gap-8 text-left">
         {data.map((items, index) => (
          <div key={index} className="bg-white py-1 flex flex-col justify-between gap-12 px-4 rounded-[10px]">
            <div>
              <img src={items.icons} alt="stars" className="mb-4" />
              <p className="italic font-md">
                “{items.description}”
              </p>
            </div>

            <div className="flex justify-start items-center gap-3">
              <img
                src={items.clientImg}
                alt="Kiskas Logo"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h3 className="font-bold text-xl text-primary">
                  {items.clientName}
                </h3>
                <a
                  href={items.clientUrl}
                  className="text-md font-normal underline"
                >
                  {items.clientUrlName}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
