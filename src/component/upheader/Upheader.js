import React from 'react';
import '../.././../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Upheader = () => {
  return (
    

    
      <p className='bg-success text-dark pt-0 pb-0 mb-0 shadow'>

      <div className='container text-center text-md-left mb-0 pb-0'>
        <div className='row text-center text-md-left'>

          <div className='col-md-3 col-lg-3 col-xl-3 mx-auto mt-1'>
           
            <p className='shadow'><small>Welcome To <span className='font-weight-bold text-warning'>Shri Gwal Exim Pvt. Ltd.</span></small><br /><small><span className='text-warning'>CIN -</span> <span className='text-white'>U47219DL2023PTC424007</span></small></p>

          </div>

          <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mt-1'>
          
            <p className='shadow'><small>
              <i className="bi bi-envelope-paper " style={{ marginRight: '5px' }}></i> <span className=" text-white">info@shrigwalexim.com</span>
            </small>
            </p>
          </div>

          <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mt-1' >
            <p className='shadow'><small>
              <i className="bi bi-geo-alt" style={{ marginRight: '5px' }}></i><span className="font-weight-bold text-white">New Delhi, 110059 India </span>
            </small>
            </p>
          </div>

        </div>
      </div>

    </p>
    
  )
}

export default Upheader;