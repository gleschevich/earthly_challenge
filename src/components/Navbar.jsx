//Navigation Bar


export default function NavBar () {
    
  return (
    <>
    
    <nav className="navbar fixed-top navbar-expand-lg  bg-light">
   
    <div className="container-fluid ">
      <a className="navbar-brand" id="logo" href="#"> 
        <img className="img-fluid" src="./Earthly_logo.webp"></img> 
      </a>
      <div className="container-fluid ">  
        <span className="fw-bold">Earthly</span>
        <p className="fw-bold">Sustainable products at affordable prices</p>  
      <div/>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
     
        <ul className="navbar-nav ms-auto me-0 mb-2 mb-lg-0 me-lg-0 ">
          <li className="nav-item">
            <a className="nav-link" aria-current="page"  href="#">Home</a>
          </li>
          
          <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Categorías
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li Link className="dropdown-item" to='/categoria/Rock'>Rock</li>
                <li className="dropdown-item" to='/categoria/Metal'>Metal</li>
                <li className="dropdown-item" to='/categoria/Pop'>Pop</li>
              </ul>
           </li>
           <li>
            <a className='nav-link' href='#'>Contacto</a>
           </li>
        </ul>
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
           <button className="btn btn-danger ms-3 me-3 mb-3 mb-lg-0" href="#" id='cart'> </button>:
           
          </li>
        </ul>
        <form className="d-flex ">
            <a className="btn btn-primary btn-floating m-1 rounded-circle" id='face' to='https://www.facebook.com/gejo.leschevich'></a>  
            <a className="btn btn-primary btn-floating m-1 rounded-circle" id='insta' to='https://www.instagram.com/gejol86/'> </a>  
            <a className="btn btn-primary btn-floating m-1 rounded-circle" id='whats' to='/'> </a>  
            <a className="btn btn-primary btn-floating m-1 rounded-circle" id='linked' to='https://www.linkedin.com/in/german-leschevich-b9986927/'> </a>  
            <a className="btn btn-primary btn-floating m-1 rounded-circle" id='git' to='https://github.com/gleschevich/Vi-Commerce'> </a>  
        
        </form>
    
      </div>
    </div>
    </div>
  </nav>
    
    </>
  )
}
