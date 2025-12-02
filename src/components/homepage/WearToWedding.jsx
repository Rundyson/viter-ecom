import React from 'react'
import { imgPath } from '../helpers/functions-general'

const WearToWedding = ({ img, header, subheader, button }) => {
  return (
    <section className="py-10 px-5 md:px-20">
      <div className="flex flex-col items-center">
        <img
          src={`${imgPath}/${img}`}
          alt={header}
          className="rounded-3xl w-full max-w-[600px] md:max-w-[800px] max-h-[400px] object-cover"
        />
        <div className="wedding-texts flex flex-col items-center gap-3 text-center mt-4">
          <h2 className="text-xl md:text-3xl font-semibold">{header}</h2>
          <small className="text-gray-600">{subheader}</small>
          <button className="bg-black text-white px-4 py-2 rounded-full hover:bg-white hover:text-black hover:border hover:border-black mt-2">
            {button}
          </button>
        </div>
      </div>
    </section>
  )
}

export default WearToWedding
