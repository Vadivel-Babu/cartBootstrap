
const Card = ({data,add,remove,cart}) => {
  return (
    <div className="col mb-5">
      <div className="card h-100">
            {/* Product image */}
        {data.isSale && <div className="badge bg-dark text-white position-absolute" style={{top: "8px", right: "8px"}}>Sale</div>}
        <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
        {/* Product details */}
        <div className="card-body p-4">
            <div className="text-center">
                  {/* Product name */}
                <h5 className="fw-bolder">{data.name}</h5>
                {/* Product price */}
                
                {data.isRated && <div className="d-flex justify-content-center small text-warning mb-2">
                    <div className="bi-star-fill"></div>
                    <div className="bi-star-fill"></div>
                    <div className="bi-star-fill"></div>
                    <div className="bi-star-fill"></div>
                    <div className="bi-star-fill"></div>
                 </div>}
                 {data.oldPrice !== 0 && <span className="text-muted text-decoration-line-through">{data.oldPrice}</span>}
                 {data.price}
            </div>
        </div>
          {/* Product actions */}
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center">
              {cart.some((item) => item.id === data.id) ? (
                <a className="btn btn-danger mt-auto" href="#" onClick={() => remove(data.id)}>
                Remove from cart
              </a>
              ):(
                <a className="btn btn-outline-dark mt-auto" href="#" onClick={() => add(data)}>
                Add to cart
              </a>
              )}
              
            </div>
        </div>
      </div>
    </div>
  )
}

export default Card