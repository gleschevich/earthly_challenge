
import {BsCart} from 'react-icons/bs'
//Navigation Bar
export default function NavBar () {
    
  return (
    <>
        <nav className="navbar navbar-expand-xl bg-light w-100">
          <div className="container-fluid">
            <a className="navbar-brand"  href="#"> 
              <img className="logo" src="./Earthly_logo.webp"></img> 
            </a>
            <div>  
              <span id="company-name" className="fw-bold fs-3 ms-xl-5 ms-md-0">Earthly</span>
              <p id="company-slogan" className="fw-bold ms-xl-5 ms-md-0">Sustainable products at affordable prices</p>
            </div>
            <span><img id="recycle-logo" src="./recycle-logo.png" alt="Logo"></img></span>  
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
      
      <div className="navbar-collapse collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto me-0 mb-2 mb-lg-0 me-lg-0 ">
        
          <li className="nav-item">
            <a className="nav-link text-white fs-5" aria-current="page"  href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white fs-5" aria-current="page"  href="#">Shop</a>
          </li>
          <li className="nav-item">
            <a className='nav-link text-white fs-5' href='#'>Contact</a>
          </li>
          <li className="nav-item">
            <a className='nav-link text-white fs-5' href='#'>About Us</a>
          </li>
          <li className="nav-item">
            <button className="btn btn-light btn-lg"  href="#" id='cart'> <BsCart/> </button>
          </li>
        </ul>
      </div>
      </div>
      </nav>
  
     
    </>
  )
}
