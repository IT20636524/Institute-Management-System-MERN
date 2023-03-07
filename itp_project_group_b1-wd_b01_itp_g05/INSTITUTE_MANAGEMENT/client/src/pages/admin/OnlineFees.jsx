import React from 'react'
import "../../style.css"
import Sidenav from '../../components/admin/Sidenav'
import AddFees from '../../components/modal/feesmodal/AddFees'
import { Link } from "react-router-dom";
import SearchPage from '../../components/modal/feesmodal/SearchPage'
import Piechart from '../../components/admin/Piechart';
import {  useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import Button from 'react-bootstrap/Button';

export default function OnlineFees() {

    const componentRef = useRef();
    const chart = useRef();
const handlePrint = useReactToPrint({
  content: ()=> componentRef.current,
});
   
    return (
        <div>       

      
        <br />
        <div className="row text-right inline">
        <Sidenav />
       
            <div className="col-md-2"></div>
            <div className="col-md-10">  
            <br />   
            <SearchPage/>
        </div>
        </div>
       
       <br />
        <div className="row text-center inline">
            <div className="col-md-2"></div>
            <div className="col-md-10 d-flex justify-content-center">

                    <AddFees/>
                   
                    <Link to="/adminviewfees" className="btn-dashb text-decoration-none d-flex justify-content-center align-items-center
">                        View All Fees Payments
                    </Link>
                   
                    <Button className='btn-dashb me-5' variant="warning" style={{marginLeft:"50px"}} onClick={()=>chart.current()}>
                        Generate Summary
                        </Button>

                        <Button className='btn-dashb me-5' variant="warning" onClick={handlePrint} style={{marginLeft:"10px"}}>
                        Print Summary
                        </Button>
                    
                </div>
              
            </div>
            
            <br/><br/>
          
        <div ref = {componentRef}>

            <h2 className="justify-content-center text-center" style={{marginLeft:'150px'}}>Fess Payment Summary for this Month</h2>
            <br/><br/>
           
            <div className="row text-right">
               
            <div className="col-md-5"></div>
           
            <Piechart chart={chart}/>
       
        </div>
        </div> 
          <br />
        </div>
    )
}


