import React from 'react'

const WearToWedding = ({ img, header, subheader, button }) => {
  return (
    <section className="py-10 px-5 md:px-20">
      <div className="container mx-auto flex flex-col items-center">
        <img
          src={img}
          alt={header}
          className="rounded-3xl mb-5 w-full max-h-[40rem] object-cover"
        />
        <div className="wedding-texts flex flex-col items-center gap-3 text-center">
          <h2 className="text-2xl md:text-4xl font-semibold">{header}</h2>
          <small className="text-gray-600">{subheader}</small>
          <button className="bg-black text-white px-5 py-2 rounded-full hover:bg-white hover:text-black hover:border hover:border-black mt-2">
            {button}
          </button>
        </div>
      </div>
    </section>
  )
}

export default WearToWedding
