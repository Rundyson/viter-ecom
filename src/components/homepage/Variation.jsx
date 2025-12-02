import React from 'react'
import { imgPath } from '../helpers/functions-general'
import { Link } from 'react-router-dom'

const Variation = ({ item, key }) => {
  return (
    <section key={key} className="py-10 flex justify-center px-5 md:px-20">
      <div className="relative">
        <img
          src={`${imgPath}/${item.VariationImg}`}
          alt={item.VariationTitle}
          className="rounded-3xl w-full max-w-[480px] md:max-w-[600px] max-h-[400px] object-cover mx-auto"
        />
        <div className="absolute bottom-3 left-3 flex flex-col gap-1 text-white">
          <h2 className="font-semibold text-sm md:text-lg">{item.VariationTitle}</h2>
          <Link to="/seedetails">
            <button className="bg-white text-black px-4 py-1 rounded-full text-xs md:text-sm hover:text-white hover:bg-black">
              {item.VariationButton}
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Variation
