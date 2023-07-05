import React from 'react'
import './index.css'

const Header = () => {
    const date = new Date();
    console.log(date.getDate(),date.getMonth(),date.getFullYear())
    const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
    const week = ["Sunday","Monday","Tueday","Wednesday","Thursday","Friday","Saturday"]
    const newLocal = 'details-page';
  return (
    <div>
        <div className='date-manual-main-box'>
            <div className='sales-and-number-box'>
                <div className='sales-manual-box'>
                    <p>Sales_Manual</p>
                </div>
                <div>
                    No : 16
                </div>
            </div>

            <div className='date-box'>
                <p>{date.getDate()}-{months[date.getMonth()]}-{date.getFullYear().toLocaleString().slice(3)}</p>
                <p>{week[date.getDay()]}</p>
            </div>
        </div>

        <div className='voucher-class'>
            <p style={{color:'grey'}}><span style={{ fontStyle: 'italic' }}>Voucher class:</span> sales</p>
        </div>

        <div className={newLocal}>
            <div>
                <div>
                    <p><span style={{marginRight:"20px"}} className='span-width-box'>Party A/c name  </span> : <span style={{fontWeight:"bold",fontSize:"smaller",marginLeft:"10px"}}> Online Transfer Customer</span></p>
                </div>
                <div>
                    <p style={{fontStyle:"italic"}}><span style={{marginRight:"11px"}}  className='span-width-box'>Current balance</span>  :<span style={{fontSize:"smaller",marginLeft:"10px"}}> 30,72,124.97 Cr</span></p>
                </div>
                <div>
                    <p><span style={{marginRight:"40px"}} className='span-width-box'>Sales Ledger</span> : <span style={{fontWeight:"bold",fontSize:"smaller",marginLeft:"10px"}}>GST Sales</span></p>
                </div>
                <div>
                    <p style={{fontStyle:"italic"}} ><span style={{marginRight:"13px"}} className='span-width-box'>Current balance </span> : <span style={{fontSize:"smaller",marginLeft:"10px"}}>82,71,260.99 Cr</span></p>
                </div>
            </div>

            <div>
                <p style={{fontSize:"smaller",marginRight:"150px"}}>Price Level :</p>
            </div>
        </div>
    </div>
  )
}

export default Header