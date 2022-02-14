import React from 'react';
import './Home.css';
import { FaQuoteRight, FaSplotch,FaStarHalfAlt } from "react-icons/fa";



function Home() {
  return (
   <>
   <div className="container">
      <div className="navbar">
      <div className="logo">
        <img src="./images/logo.png" />
        
      </div>
        <nav> 
            <ul>
            <li><a href=''>Home</a></li>
            <li><a href='Latest_product.html'>Products</a></li>
            <li><a href=''>About</a></li>
            <li><a href=''>Contact</a></li>
            <li><a href=''>Acount</a></li>
          </ul>
        <img src="./images/cart.png"  />
        <img src="./images/menu.png"  />  
        </nav>
      </div>
  
    <div className="row-2">
      <div className="col-2">
        <h1>Give Your Workout <br /> A New Style !</h1>
        <p> Success isn't always about greatness. <br /> It's about consistency. Consistent <br />hard work gain success. Gretness will come.</p>
        <div className="btn-explore">Explore Now</div>     
        </div>
        <div className="col-2">
            <img src="images/image1.png" />
        </div>
      </div>
    </div>
      
    <div className="product">
      <img src="./images/category-1.jpg" />
      <img src="./images/category-2.jpg" />
      <img src="./images/category-3.jpg" />
    </div>
    
    <div className="fearture-product">
      <h4>Feature Products</h4>
      <div className="feature_img">
        <img src="./images/product-1.jpg" />
        <img src="./images/product-2.jpg" />
        <img src="./images/product-3.jpg" />
        <img src="./images/product-4.jpg" />
      </div>
    </div>
        
    <div className="Latest_product">
          
            <h4>Latest Product</h4>  

        <div className="Col-product">
          <div className='product_img'>
          <div className="latest_img"><img src="./images/product-5.jpg" />
            <p>Red Printed T-Shirt</p>
            <div><i className='Star'><FaSplotch/> <FaSplotch/><FaSplotch/><FaSplotch/> <FaStarHalfAlt/></i> </div> 
            <p>$50.00</p>
          </div>
          </div>
           <div className='product_img'>
          <div className="latest_img"><img src="./images/product-6.jpg" />
            <p>Red Printed T-Shirt</p>
            <div><i className='Star'><FaSplotch/> <FaSplotch/><FaSplotch/><FaSplotch/> <FaStarHalfAlt/></i> </div> 
            <p>$50.00</p>
          </div>
          </div>
           <div className='product_img'>
          <div className="latest_img"><img src="./images/product-7.jpg" />
            <p>Red Printed T-Shirt</p>
            <div><i className='Star'><FaSplotch/> <FaSplotch/><FaSplotch/><FaSplotch/> <FaStarHalfAlt/></i> </div> 
            <p>$50.00</p>
          </div>
          </div>
           <div className='product_img'>
          <div className="latest_img"><img src="./images/product-8.jpg" />
            <p>Red Printed T-Shirt</p>
            <div><i className='Star'><FaSplotch/> <FaSplotch/><FaSplotch/><FaSplotch/> <FaStarHalfAlt/></i> </div> 
            <p>$50.00</p>
          </div>
          </div>
           <div className='product_img'>
          <div className="latest_img"><img src="./images/product-9.jpg" />
            <p>Red Printed T-Shirt</p>
            <div><i className='Star'><FaSplotch/> <FaSplotch/><FaSplotch/><FaSplotch/> <FaStarHalfAlt/></i> </div> 
            <p>$50.00</p>
          </div>
          </div>
           <div className='product_img'>
          <div className="latest_img"><img src="./images/product-10.jpg" />
            <p>Red Printed T-Shirt</p>
            <div><i className='Star'><FaSplotch/> <FaSplotch/><FaSplotch/><FaSplotch/> <FaStarHalfAlt/></i> </div> 
            <p>$50.00</p>
          </div>
          </div>
           <div className='product_img'>
          <div className="latest_img"><img src="./images/product-11.jpg" />
            <p>Red Printed T-Shirt</p>
            <div><i className='Star'><FaSplotch/> <FaSplotch/><FaSplotch/><FaSplotch/> <FaStarHalfAlt/></i> </div> 
            <p>$50.00</p>
          </div>
          </div>
           <div className='product_img'>
          <div className="latest_img"><img src="./images/product-12.jpg" />
            <p>Red Printed T-Shirt</p>
            <div><i className='Star'><FaSplotch/> <FaSplotch/><FaSplotch/><FaSplotch/> <FaStarHalfAlt/></i> </div> 
            <p>$50.00</p>
          </div>
          </div>
        </div>
    </div>
  
    <div className="exclusive">
    <div className="col-3"> 
     <img src="./images/exclusive.png" />
    </div>
     <div className="col-4"> 
     <h4> Exclusive Available on RedStore </h4>
           <h2>Smart Band 4 </h2>
          <p>The Mi Smart Band 4 features a 39.9% larger (than Mi Band 3) AMOLED color full-touch display with adjustable brightness, so everything is clear as can be.  </p>
          <div className="btn_buy">Buy Now</div>
     </div>   
    </div>

    <div className="testimonial">
        <div className="row-5">
            <div className="col-5">
              <i className="qoute"> <FaQuoteRight/></i>
              
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>  
                <img src="./images/user-1.png" />
                <p>Cynthia Morgan</p>
            </div>
            </div>
            <div className="row-5">
            <div className="col-5">
              <i className="qoute"> <FaQuoteRight/></i>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>  
                <img src="./images/user-2.png" />
                <p>Henry Crush</p>
            </div>
          </div>
            <div className="row-5">
            <div className="col-5">
              <i className="qoute"> <FaQuoteRight/></i>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>  
                <img src="./images/user-3.png" />
                <p>Faith Nathanial </p>
            </div>
          </div> 
      </div>
       <div className="brands"> 
       <div className="col-6">
        <img src="./images/logo-coca-cola.png" />
       </div>
       <div className="col-6">
        <img src="./images/logo-godrej.png" />
       </div>
       <div className="col-6"> 
        <img src="./images/logo-oppo.png" />
        </div>
       <div className="col-6">
        <img src="./images/logo-paypal.png" />
       </div>
        <div className="col-6">
          <img src="./images/logo-philips.png" />
        </div>
       
       </div>
    <div className="foter">
      <div className="download_app">
        <h5>Download App</h5>
        <p>Download App for Android and ios mobile phone.</p>
      <div className="col-7"><img src="./images/app-store.png"  />
      <img src="./images/play-store.png" />
      </div>
      </div> 
        <div className="mission">
          <img src="./images/logo.png" />
          <p>Our Purpose Is To Sustainably Make th Pleasure and Benefits of Sports Accessible to the Many.</p>
        </div>
        <div classNa
          me="useful_links">
        <h6>Useful Links  </h6>
          <p> Coupons <br/> Blog Post <br/> Return Policy <br/>Join Affiliate </p> 
        </div>
        <div className="social_media"> 
        <h6>Follow us</h6>
        <p> Facebook <br/> Twitter <br/> Instagram <br/> Youtube </p>
        </div>
        
    </div>
    <div className="copyright" >
    <i className="underline"> </i> 
        <p>Copytight 2022 - I Muhammad Tanimnu</p>
        </div>

  
</>

  );
}


export default Home;
