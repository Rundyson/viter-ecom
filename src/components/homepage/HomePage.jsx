import React from 'react'
import Header from '../partials/Header'
import Footer from '../partials/Footer'
import HomeBanner from './HomeBanner'
import ItemCards from './ItemCards'
import WearToWedding from './WearToWedding'
import VariationCard from './VariationCard'

const HomePage = () => {
  return (
    <>
      <Header/>
      <HomeBanner img="/img/banner-1.jpg" header="TOLUS SPRING COLLECTION" subheader="Find out our best spring collection. Offering our best quality product in a Tolus Spring Collection."/>
      <ItemCards/>
      <WearToWedding img="/img/banner-2.jpg" header="WEAR TO WEDDING" subheader="A symphony of exquisite designs tailored for your unforgettable moments" button="See Details"/>
      <VariationCard/>
      <Footer/>
    </>
  )
}

export default HomePage
