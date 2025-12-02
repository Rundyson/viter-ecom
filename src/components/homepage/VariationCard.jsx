import React from 'react'
import Variation from './Variation'

const VariationCard = () => {
    const variationCard = [
        {
            VariationImg: "card-7.jpg",
            VariationTitle: "MAN",
            VariationButton: "See Details",
        },
        {
            VariationImg: "card-8.jpg",
            VariationTitle: "WOMAN",
            VariationButton: "See Details",
        },
        {
            VariationImg: "card-9.jpg",
            VariationTitle: "KIDS",
            VariationButton: "See Details",
        },

]
  return (
    <div className="container">
        <div className="grid md:grid-cols-3 gap-2 w-[450px]  md:w-[1800px] mx-auto">
            {variationCard.map((item, key) => (
                <Variation item={item} key={key}/>
            ))}
        </div>
    </div>
  )
}

export default VariationCard
