


import { useState } from 'react'
import Card from './component/Card'
import Footer from './component/Footer'
import Header from './component/Header'
import Navbar from './component/Navbar'

function App() {
  //items dataset
  const data = [{
    id:1,
    isSale:false,
    name:"Fancy Product",
    price:'$40.00 - $80.00',
    oldPrice:0,
    btn:'View options',
    isRated:false,
  },{
    id:2,
    isSale:true,
    name:"Special Item",
    oldPrice:'$20.00',
    price:'$18.00',
    btn:'Add to cart',
    isRated:true,
  },{
    id:3,
    isSale:true,
    name:"Sale Item",
    oldPrice:'$50.00',
    price:'$25.00',
    btn:'Add to cart',
    isRated:false,
  },{
    id:4,
    isSale:false,
    name:"Popular Item",
    oldPrice:0,
    price:'$40.00',
    btn:'Add to cart',
    isRated:true,
  },{
    id:5,
    isSale:false,
    name:"Fancy Product",
    price:'$40.00 - $80.00',
    oldPrice:0,
    btn:'View options',
    isRated:false,
  },{
    id:6,
    isSale:true,
    name:"Special Item",
    oldPrice:'$20.00',
    price:'$18.00',
    btn:'Add to cart',
    isRated:true,
  },{
    id:7,
    isSale:true,
    name:"Sale Item",
    oldPrice:'$50.00',
    price:'$25.00',
    btn:'Add to cart',
    isRated:false,
  },{
    id:8,
    isSale:false,
    name:"Popular Item",
    oldPrice:0,
    price:'$40.00',
    btn:'Add to cart',
    isRated:true,
  }]
  //set empty array for cart
  const [cart,setCart] = useState([]);

  //add functionality to the cart
  function handleAdditem(i){
    setCart([...cart,i])
  }
  
  //deleteing item from the cart
  function handleDeleteitem(i){
    const removed = cart.filter((item) => item.id !== i);
    setCart(removed);
  }

  return (
    <>
     <Navbar cart={cart}/>
     <Header/>
     <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {data.map((e) => 
          <Card key={e.id} data={e} add={handleAdditem} remove={handleDeleteitem} cart={cart}/>
          )}
        </div>
      </div>
     </section>
     <Footer/>      
    </>
  )
}

export default App
