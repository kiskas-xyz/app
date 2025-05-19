import ArrowDown from '@/public/images/arrowDown'
import ArrowRight from '@/public/images/arrowRight'
import React from 'react'

const Footer = () => {
  return (
    <section id="contact" className="pt-15 flex flex-col px-8 space-y-6 bg-primary overflow-hidden">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-white">
          <div className="flex flex-col gap-4 items-start">
            <img src="/logoWhite.svg" alt="" />
            <h3 className="font-normal text-base">
              Kiskas supports the new way we work, with simple, professional
              email for growing teams.
            </h3>
          </div>
          <div className="flex flex-col gap-4 items-start">
            <h3 className="font-bold text-lg">Quick Links</h3>
            <ul className="font-normal text-base space-y-2">
              <li>Home</li>
              <li>Pricing</li>
              <li>Features</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4 items-start">
            <h3 className="font-bold text-lg">Company</h3>
            <ul className="font-normal text-base space-y-2">
              <li>About Us</li>
              <li>Customer Stories</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4 items-start">
            <h3 className="text-[28px] font-bold ">{"Let’s Get You Set Up"}</h3>
            <p className="font-normal text-base">
              {
                "Ready to start or have questions? Reach out and we’ll handle the rest."
              }
            </p>
            <a
              href="mailto:hello@kiskas.xyz"
              className="flex items-center gap-3 border border-primary py-4 px-10 rounded-lg bg-white text-primary"
            >
              Contact Us <ArrowRight color='#8763e8'/>
            </a>
          </div>
        </div>
        <hr className="text-text-black"/>

        <footer className=" flex flex-col-reverse gap-4 md:flex-row whitespace-nowrap justify-between items-center py-3 text-center text-md text-white">
          <div className="flex flex-col md:flex-row gap-3 items-start md:gap-8 lg:items-center w-full">
            <div className="flex items-center gap-2">
            <img src="/globeWhite.svg" alt="globe icon" />
            <p>English</p>
            <ArrowDown color='#fff'/>
            </div>
            <p>Terms & Privacy</p>
            <p> &copy; {new Date().getFullYear()} Kiskas. All Rights Reserved</p>
          </div>
            <ul className="flex gap-4 items-center">
              <li><img src="/facebook.svg" alt="" /></li>
              <li><img src="/twitter.svg" alt="" /></li>
              <li><img src="/linkedIn.svg" alt="" /></li>
            </ul>
        </footer>
      </section>
  )
}

export default Footer
