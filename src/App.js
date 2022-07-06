import './App.css';
import Blog from './partials/Blog';
import Brand from './partials/Brand';
import Location from './partials/Location';
import Navbar from './partials/Navbar';
import Testimonial from './partials/Testimonial';
import Footer from './partials/Footer';

function App() {

  const slideHandler = (e) => {
    const sideBar     = document.querySelector('.side-bar');
    const appClass    = document.querySelector('body');
    const blackblur   = document.querySelector('#blackblur');
    e.preventDefault();
    sideBar.classList.remove('slide');
    appClass.classList.remove('block');
    blackblur.classList.remove('black-blur');
  }
  return (
        <div className='app' data-testid="app-render-test">
          <div className="side-bar" id='sidebar'>


            <div className="scroll">

                <div className="side-bar-menu">

                  <div className="menu-toggle">
                      <input type="checkbox" onClick={slideHandler}/>
                      <span></span>
                      <span></span>
                  </div>
                  
                  <div className="list-menu">
                    <a href="#direction">Home</a>
                    <a href="#direction">Same Day Delivery</a>
                    <a href="#direction">1 Day Preorder</a>
                    <div className="multiple-link">
                      <a href="#direction">All Products</a>
                      <button>{'>'}</button>
                    </div>
                    <div className="multiple-link">
                      <a href="#direction">Delivery & Pickup</a>
                      <button>{'>'}</button>
                    </div>
                    <div className="multiple-link">
                      <a href="#direction">FAQs</a>
                      <button>{'>'}</button>
                    </div>
                    <a href="#direction">About Us</a>
                    <a href="#direction">Contact Us</a>
                    <a href="#direction">Login</a>
                    <a href="#direction">Create Account</a>
                  </div>

                  <div className="social-media">
                    <div className="icons">
                      <i className="fa-brands fa-facebook-square"></i>
                      <i className="fa-brands fa-instagram"></i>
                      <i className='fa-brands fa-tiktok'></i>
                    </div>
                  </div>
                </div>

              </div>

          </div>

          <div id='content'  style={{ position: 'relative' }}>
            <div id="blackblur"></div>
              <Navbar />
              <Brand />
              <Location />
              <Testimonial />
              <Blog />
              <Footer />
          </div>
        </div>
  );
}

export default App;
