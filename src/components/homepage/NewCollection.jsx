import React from 'react'

const NewCollection = ({ item, key }) => {
  return (
    <section key={key} className="px-5 md:px-20 mb-10">
      <div className="new-collection-card flex flex-col gap-3 md:gap-5 items-center">
        <img
          src={item.img}
          alt={item.title}
          className="rounded-3xl w-full max-w-[400px] md:max-w-full max-h-[25rem] object-cover"
        />
        <div className="collection-texts text-center md:text-left mt-2">
          <h6 className="font-semibold">{item.title}</h6>
          <small className="text-gray-500">{item.info}</small>
          <h6 className="font-semibold">${item.price}</h6>
        </div>
      </div>
    </section>
  )
}

export default NewCollection
