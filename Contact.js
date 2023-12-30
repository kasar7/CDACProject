import React from "react";
import Header from "../layout/Header"
import Footer from "../layout/Footer";

class Contact extends React.Component
{
    render()
    {
        return(
            <>
            <Header/>
                <div className="container">
                    <div className="row" style={{placeContent:'center'}}>
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-body">
                                    <h3>This is contact page</h3>
                                    <div className="row mt-3">
                                        <div className="col-lg-12">
                                            <input className="form-control" placeholder="Enter Name"/>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-lg-12">
                                            <input className="form-control" placeholder="Enter Name"/>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-lg-12">
                                            <textarea className="form-control" placeholder="Enter Name"></textarea>
                                        </div>
                                    </div>                                    
                                    <div className="row mt-3">
                                        <div className="col-lg-12">
                                            <textarea className="form-control btn btn-primary" value="send"/>
                                        </div>
                                    </div>                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <Footer/>
            </>
        )
    }
} 
export default Contact