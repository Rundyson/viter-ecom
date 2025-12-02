import React from 'react'
import { imgPath } from '../helpers/functions-general'
import { Link } from 'react-router-dom'

const Variation = ({item, key}) => {
  return (
    <section className="py-10">
            <div className="relative" key={key}>
                <img className="rounded-3xl h-[20rem] w-[480px] md:w-full md:h-[30rem]" src={`${imgPath}/${item.VariationImg}`} alt="" />
                <div className="absolute bottom-10 left-5 flex flex-col gap-2 text-white">
                    <h2 className="font-semibold">{item.VariationTitle}</h2>
                    <Link to="/seedetails"><button className="bg-white text-black px-5 py-1 rounded-3xl text-sm hover:text-white hover:bg-black">{item.VariationButton}</button></Link>
                </div>
            </div>
    </section>
  )
}

export default Variation
