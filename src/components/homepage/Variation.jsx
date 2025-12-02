import React from 'react'
import { Link } from 'react-router-dom'

const Variation = ({ item, key }) => {
  return (
    <section key={key} className="py-10 flex justify-center">
      <div className="relative">
        <img
          src={item.VariationImg}
          alt={item.VariationTitle}
          className="rounded-3xl w-full max-w-[480px] md:max-w-full max-h-[30rem] object-cover mx-auto"
        />
        <div className="absolute bottom-5 left-5 flex flex-col gap-2 text-white">
          <h2 className="font-semibold">{item.VariationTitle}</h2>
          <Link to="/seedetails">
            <button className="bg-white text-black px-5 py-2 rounded-full text-sm hover:text-white hover:bg-black">
              {item.VariationButton}
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Variation
