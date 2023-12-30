import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
class Home extends React.Component
{
    render()
    {
        return(

            <>
            <Header/>
               <div className="container-fluid">
               <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="..." class="d-block w-100" alt="..."/>
                              </div>
                          <div class="carousel-item">
                            <img src="https://assets.cdn.thewebconsole.com/S3WEB8183/images/free-building-cleaning-promo.gif?m=eac16479f7f8ef2f173b217b6b4365ba.jpg"width="1500"height="300"/>
                  <img src="..." class="d-block w-100" alt="..."/>
                  </div>
                        <div class="carousel-item">
                        <img src="https://www.trumaxgroup.com/wp-content/uploads/2020/08/SERVICES-BANNER-FACILITY-MANAGEMENT-1.jpg"width="1500"height="300"/>
                  <img src="..." class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
                        <img src="https://truviconline.com/front_assets/img/enterprise_services/building-management-system-services-provider.jpg"width="1500"height="300"/>
                  <img src="..." class="d-block w-100" alt="..."/>
    </div>
  </div>
</div>
               </div>
             <Footer/>
            </>


        )
    }
}
 export default Home
