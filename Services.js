import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
class Services extends React.Component
{
    render()
    {
        return(

            <>
            <Header/>
            <h1>This is Gallary Page</h1>
            <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false" data-bs-interval="false">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://www.bhmmedia.com/wp-content/uploads/2018/07/case-study-banner.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://tse3.mm.bing.net/th?id=OIP.4nm2SoNM-8bOohqXqbmt2QHaCm&pid=Api&P=0&h=180.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
            <Footer/>
            </>


        )
    }
}
 // eslint-disable-next-line no-undef
 export default Services

 