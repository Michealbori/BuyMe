import '/src/component/allCars/Allcars.css';
import Aos from 'Aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';



export default function Allcars() {
    useEffect(() => {
        Aos.init({
            duration: 2000,
        })
    }, [])
    return (
      <section id='Model'>

        <div className='Allcar'  data-aos="fade-down">
            <b>
                All Cars
            </b>
         <h4>We have all types of cars</h4>
         <p id='Quote'>Let us do all the work for you so you don’t have to
            <br />You're getting ALL THIS.... and it's not even Christmas Yet !!
         </p>

        </div>
 
             <div className='gallary'>

                <section className='section1'>
                    <img src="/public/car1.jpg" alt="" />
                    <button>Maruti Suzuki Fronx</button>
                </section>

                <section className='section2'>
                    <img src="/public/car2.jpg" alt="" />
                     <button>Toyota Urban Cruiser Taisor</button>
                </section>

                <section className='section3'>
                    <img src="/public/car3.jpg" alt="" />
                     <button>Mahindra XUV700</button>
                </section>
                
            </div> 
 
           
 
             <div className='gallary'>

                <section className='section1'>
                    <img src="/public/car4.jpg" alt="" />
                    <button>Kia Carens</button>
                </section>

                <section className='section2'>
                    <img src="/public/car5.jpg" alt="" />
                     <button>Hyundai Exter</button>
                </section>

                <section className='section3'>
                    <img src="/public/car6.jpg" alt="" />
                     <button>Tata Punch</button>
                </section>
                
            </div> 
 
           

      </section>
    );
  }