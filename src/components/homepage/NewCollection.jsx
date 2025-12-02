import React from 'react'
import { imgPath } from '../helpers/functions-general'

const NewCollection = ({ item, key }) => {
  return (
    <section key={key} className="px-5 md:px-20 mb-10">
      <div className="flex flex-col items-center gap-4">
        <img
          src={`${imgPath}/${item.img}`}
          alt={item.title}
          className="rounded-3xl w-full max-w-[400px] md:max-w-[500px] max-h-[400px] object-cover"
        />
        <div className="collection-texts text-center">
          <h6 className="font-semibold">{item.title}</h6>
          <small className="text-gray-500">{item.info}</small>
          <h6 className="font-semibold">${item.price}</h6>
        </div>
      </div>
    </section>
  )
}

export default NewCollection
