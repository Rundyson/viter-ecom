import React from 'react'
import NewCollection from './NewCollection'
import { Link } from 'react-router-dom'

const ItemCards = () => {
    const itemCardsArray = [
        {
            img: "card-1.jpg",
            title: "Loro Piana",
            info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.", 
            price: "45",
        },
        {
            img: "card-2.jpg",
            title: "White Pants",
            info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.", 
            price: "90",
        },
        {
            img: "card-5.jpg",
            title: "Bidha Glasses",
            info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.", 
            price: "50",
        },
        {
            img: "card-3.jpg",
            title: "Brown Bomber",
            info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.", 
            price: "52",
        },
        {
            img: "card-4.jpg",
            title: "Leather Shoes Jack",
            info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.", 
            price: "89",
        },
        {
            img: "card-6.jpg",
            title: "Grey Tshirt",
            info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.", 
            price: "21",
        },

    ]
  return (
    <section className="py-10 ">
        <div className="container">
        <div className="text-center mb-5" >
                <h2>NEW COLLECTION</h2>
                <p className="text-gray-400">Our latest collection, where classic and contemporary styles converge in perfect harmony.</p>
            </div>
        <div className="grid md:grid-cols-3 gap-2 w-[450px]  md:w-[1800px] mx-auto">
        {itemCardsArray.map((item, key) => (
            <Link to="/variation"><NewCollection item={item} key={key}/></Link>
            ))}
        </div>
        </div>
    </section>

  )
}

export default ItemCards
