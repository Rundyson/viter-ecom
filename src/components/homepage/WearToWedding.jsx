import React from 'react'
import { imgPath } from '../helpers/functions-general'

const WearToWedding = ({img, header, subheader, button}) => {
  return (
    <section className="py-10 justify-center">
        <div className="container">
            <img className="rounded-3xl mb-5 w-full" src={`${imgPath}/${img}`} alt="" />
            <div className="wedding-texts flex flex-col items-center gap-5">
                <h2>{header}</h2>
                <small>{subheader}</small>
                <button className="bg-black text-white px-5 py-1 rounded-full hover:bg-white hover:text-black hover:border-black hover:border">{button}</button>
            </div>
        </div>
    </section>
  )
}

export default WearToWedding
