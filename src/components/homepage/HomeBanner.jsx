import React from 'react'
import { imgPath } from '../helpers/functions-general'
import { Link } from 'react-router-dom'

const HomeBanner = ({img, header, subheader}) => {
  return (
    <>
        <section className="home-banner relative pt-28 md:pt-32">
            <div className="container">
            <img src={`${imgPath}/${img}`} alt="" className="rounded-3xl h-screen md:h-full w-full object-cover"/>
            <div className="banner-details absolute bottom-10 left-5 lg:left-20 text-white w-[400px] md:w-[1700px] md:mx-auto">
                <h1 className="font-semibold mb-10">{header}</h1>
                <div className=" flex flex-col items-start gap-5 md:flex md:flex-row md:justify-between">
                <small>{subheader}</small>
                <button className="bg-white text-black px-5 py-1 rounded-full text-sm hover:bg-black hover:text-white">
                  <Link to="/buynow">Buy Now</Link> 
                </button>
                </div>
            </div>
            </div>
        </section>
    </>
  )
}

export default HomeBanner
