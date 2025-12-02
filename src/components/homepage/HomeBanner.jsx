import React from 'react'
import { Link } from 'react-router-dom'

const HomeBanner = ({ img, header, subheader }) => {
  return (
    <section className="home-banner relative pt-28 md:pt-32">
      <div className="container mx-auto px-5 md:px-20">
        <img
          src={img}
          alt=""
          className="rounded-3xl w-full max-h-[80vh] object-cover"
        />
        <div className="banner-details absolute bottom-10 left-5 lg:left-20 text-white w-full md:w-[80%]">
          <h1 className="font-semibold mb-4 md:mb-10 text-2xl md:text-5xl">{header}</h1>
          <div className="flex flex-col md:flex-row md:justify-between items-start gap-3 md:gap-5">
            <small className="text-sm md:text-base">{subheader}</small>
            <button className="bg-white text-black px-5 py-2 rounded-full text-sm hover:bg-black hover:text-white mt-2 md:mt-0">
              <Link to="/buynow">Buy Now</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeBanner
