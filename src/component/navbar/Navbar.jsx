// import Logo from '/public/buyme.png';
import '/src/component/navbar/Navbar.css';


export default function navbar() {
    return (
             
<nav class="navbar navbar-expand-lg bg-body-tertiary bg-transparent">
  <div class="container">
    <a class=" Logo navbar-brand" href="#"> <img src="public/buyme.png" alt="Logo" /> </a>
    <button class="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="sidebar offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel"> <a class=" Logo navbar-brand" href="#"> <img src="public/buyme.png" alt="Logo" /> </a></h5>
        <button type="button" class="btn-close  shadow-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-center flex-grow-1 pe-3">
          <li class="nav-item mx-2">
            <a class="nav-link active" aria-current="page" href="#">Vehicles</a>
          </li>
          <li class="nav-item mx-2">
            <a class="nav-link active" href="#Model">Model</a>
          </li>
          <li class="nav-item mx-2">
            <a class="nav-link active" href="#Why">Discover</a>
          </li>
          <li class="nav-item mx-2">
            <a class="nav-link active" href="#shop">Shop</a>
          </li>
          <li class="nav-item mx-2">
            <a class="nav-link active" href="#">Reach Us</a>
          </li>
          
        </ul>
        

         <div class="d-flex justify-content-center align-items-center">
          <a href="" class=" Start text-decoration-none">Get started</a>
         </div>

      </div>
    </div>
  </div>
</nav>
           
    );
  }