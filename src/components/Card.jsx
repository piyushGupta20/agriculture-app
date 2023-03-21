import React from 'react'

function Card({names, product, image_link, Quantity, price}) {
  return (
    <div>
        <div className="height d-flex justify-content-center align-items-center">
    <div className="card p-3">
        <div className="d-flex justify-content-between align-items-center ">
            <div className="mt-2">
                <h4 className="text-uppercase">{names}</h4>
                <div className="mt-5">
                    <h5 className="text-uppercase mb-0">{product}</h5>
                    <div className="d-flex flex-row user-ratings">
                        {/* <div className="ratings">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        </div> */}
                        <h6 className="text-muted ml-1">₹{price}</h6>
                    </div>
                </div>
            </div>
            <div className="image">
                <img src={image_link} width="200"/>
            </div>
        </div>
        <p>{Quantity}</p>
        
        <button className="btn btn-danger">Add to cart</button>
    </div>
    
</div>
    </div>
  )
}

export default Card;