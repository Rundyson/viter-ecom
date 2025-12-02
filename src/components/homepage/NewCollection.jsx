import React from 'react'
import { imgPath } from '../helpers/functions-general'

const NewCollection = ({item, key}) => {
  return (
    <>
      <section>
            <div className="new-collection-cards mb-5 items-center" key={key}>
                <div className="flex flex-col gap-5">
                    <img className="rounded-3xl h-[30rem] object-cover" src={`${imgPath}/${item.img}`} alt="" />
                    <div className="collection-texts">
                        <h6>{item.title}</h6>
                        <small className="text-gray-500">{item.info}</small>
                        <h6>${item.price}</h6>
                    </div>
                </div>
        </div>
      </section>
    </>
  )
}

export default NewCollection
