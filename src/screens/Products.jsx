import React from 'react'
import Card from '../components/Card'
import Navbar from '../components/navbar'

function Products() {
  const cardItem = [
    {no:1,names:"DAP",image_link:"https://iffco-public-assets.s3.ap-south-1.amazonaws.com/s3fs-public/2020-04/18-46-0-%28DAP%29_1.png",Quantity:"50kg",price:1350},
    {no:2,names:"Urea",image_link:"https://iffco-public-assets.s3.ap-south-1.amazonaws.com/s3fs-public/2020-04/UREA_0.png",Quantity:"45kg",price:290},
    {no:1,names:"Zinc",image_link:"https://lsmedia.linker-cdn.net/270844/2022/7521222.png?width=600&height=570",Quantity:"1kg",price:350},
    {no:1,names:"Nano-Urea",image_link:"https://cdn-prodapi.iffcobazar.in/pub/media/catalog/product/cache/5f3447475aa96bb6c8cc6886bb71b2b4/1/j/1j1a0372_ed_1_1_-min_1.jpg",Quantity:"1l",price:600},
    {no:1,names:"Pesticide",image_link:"https://www.clipartmax.com/png/middle/241-2414797_bug-sprayer-pesticide-royalty-free-vector-clip-art-pesticide.png",Quantity:"250ml",price:200},
    {no:1,names:"Irrigation-Pump",image_link:"https://cdn.imgbin.com/24/4/6/imgbin-submersible-pump-water-well-pump-water-pumping-water-wrtrxJdUZh9zwNxaXTJxkVJ5H.jpg",Quantity:"1unit",price:50000, Rental_Rate:"1000 /day"},
    {no:1,names:"Cultivator",image_link:"https://img.favpng.com/6/0/11/cultivator-agriculture-agricultural-machinery-farm-tractor-png-favpng-1MLRzVV2FFwZA2XT2dDDszTbr.jpg",Quantity:"1unit",price:60000, Rental_Rate:"500 /day"}
    ];
  return (
    <>
    <Navbar/>
    <div className='container'> 
    <div class="row">
           {/* <div class="col-sm-4 mt-2"> */}
    {cardItem.map((curElem)=>{
        return(
            <div key={curElem.id} className="col-sm-4 mt-2">

            <Card names= {curElem.names} product = {curElem.product} image_link = {curElem.image_link} Quantity = {curElem.Quantity} price = {curElem.price} />
            </div>
  )
})}
{/* </div> */}
</div>
</div>
</>
  )
}

export default Products