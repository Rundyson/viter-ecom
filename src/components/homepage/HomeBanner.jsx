import React from 'react'
import { imgPath } from '../helpers/functions-general'
import { Link } from 'react-router-dom'

const HomeBanner = ({ img, header, subheader }) => {
  return (
    <section className="home-banner relative w-full h-[80vh] md:h-[90vh] overflow-hidden">
    
      <img
        src={`${imgPath}/${img}`}
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      
      <div className="absolute inset-0 bg-black/30 flex flex-col justify-center px-5 md:px-20 text-white">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">{header}</h1>
        <p className="text-sm md:text-lg mb-4 md:mb-6">{subheader}</p>
        <Link to="/buynow">
          <button className="bg-white text-black px-6 py-2 rounded-full text-sm md:text-base hover:bg-black hover:text-white">
            Buy Now
          </button>
        </Link>
      </div>
    </section>
  )
}

export default HomeBanner
