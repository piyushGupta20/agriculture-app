import React from 'react'
import Card from '../components/Card'
import Navbar from '../components/navbar'

function Products() {
    const cardItem = [
        {no:1,name:"x"},
        {no:2,name:"y"},
        {no:3,name:"y"},
        {no:4,name:"y"},
        {no:5,name:"y"},
        {no:6,name:"y"},
        {no:7,name:"y"},
        {no:8,name:"y"},
        
        
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

            <Card/>
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