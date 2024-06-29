import '/src/component/product/Products.css'
import Aos from 'Aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';



export default function Products() {
    useEffect(() => {
        Aos.init({
            duration: 2000,
        })
    }, [])
    return (
        <article className="Product" id='shop'>
              <p className='header'  data-aos="zoom-in-up">All Brand Are Available</p>
              <h3 className='Condition'>All Cars Are Always In Excellent Condition</h3>
              <p className='CarQuote'>My driving style and car handling are reflections of how I feel inside.</p>

               <div className="Firstcargalarrysection">

                    <section className='firstbg '>
                        <img src="public/Maruti Suzuki Invicto Front View.jpg" alt="" />
                        <h4>Maruti Suzuki Invicto</h4>
                        <p className='CarContent'>
                        The Maruti Invicto has 1 Petrol Engine on offer. The Petrol engine is 1987 cc .
                        It is available with Automatic transmission.Depending upon the variant and fuel type the
                        Invicto has a mileage of 23.24 kmpl . The Invicto is a 7 seater 4 cylinder car and has length
                        of 4755 mm, width of 1850 mm and a wheelbase of 2850 mm.
                        </p>
                        <h6 className="Carprice">
                                
                                </h6>

                        <div className='buttonSection'>
                                  <a href="" className='PreviewDesign'>Gallery</a>
                                  <a href="" className='specDesign'>Spec</a>
                        </div>
                    </section>
                    
                              <span className='space'>

                              </span>
                    <section className='firstbg '>
                        <img src="public/Toyota Vellfire Front View.jpg" alt="" />
                        <h4>Toyota Vellfire </h4>
                        <p className='CarContent'>
                        The Toyota Vellfire has 1 Petrol Engine on offer. The Petrol engine is 2487 cc. It is available with Automatic transmission. Depending upon the variant and fuel type the 
                        Vellfire has a mileage of. The Vellfire is a 7 seater 4 cylinder car and has length of 5010 mm, width of 1850 mm and a wheelbase of 2650 mm.
                        </p>
                               <h6 className="Carprice">

                               </h6>
                        <div className='buttonSection'>
                        <a href="" className='PreviewDesign'>Gallery</a>
                        <a href="" className='specDesign'>Spec</a>
                        </div>
                    </section>

                    <span className='space'>

</span>

                    <section className='firstbg '>
                        <img src="public/Lexus LM Front View.jpg" alt="" />
                        <h4> Lexus LM 500h </h4>
                        <p className='CarContent'>
                        The Lexus LM has 1 Petrol Engine on offer. The Petrol engine is 2487 cc .
                         It is available with Automatic transmission.Depending upon the variant and fuel type the LM has a mileage of . 
                        The LM is a seater 4 cylinder car and has length of 5125 mm, width of 1890 mm and a wheelbase of 3000 mm.
                        </p>
                        <h6 className="Carprice">
                                
                                </h6>

                        <div className='buttonSection'>
                        <a href="" className='PreviewDesign'>Gallery</a>
                        <a href="" className='specDesign'>Spec</a>
                        </div>
                    </section>

               </div>
           

{/* Second Row */}
               <div className="Firstcargalarrysection">

<aside className='firstbg '>
    <img src="public/Lexus LC 500h Front View.jpg" alt="" />
    <h4>Lexus LC 500h</h4>
    <p className='CarContent'>
    The Lexus LC 500h has 1 Petrol Engine on offer. The Petrol engine is 3456 cc . It is available with Automatic transmission.Depending upon the variant and fuel type the LC 500h has a mileage of 12.3 kmpl . The LC 500h is a 4 seater 6 cylinder car and has length of 4770 mm, width of 1920 mm and a wheelbase of 2585 mm.
    </p>
    <h6 className="Carprice">
            
            </h6>

    <div className='buttonSection'>
              <a href="" className='PreviewDesign'>Gallery</a>
              <a href="" className='specDesign'>Spec</a>
    </div>
</aside>

          <span className='space'>

          </span>
<aside className='firstbg '>
    <img src="public/Lotus Eletre Front View.jpg" alt="" />
    <h4> Lotus Eletre  </h4>
    <p className='CarContent'>
    The Lotus Eletre has 1 Electric Engine on offer. It is available with the Automatic transmission. The Eletre is a 5 seater and has length of 5103 mm, width of 2231 mm and a wheelbase of 2500 mm.
    The Lotus Eletre has 1 Electric Engine on offer. It is available with the Automatic transmission. 
    </p>
           <h6 className="Carprice">

           </h6>
    <div className='buttonSection'>
    <a href="" className='PreviewDesign'>Gallery</a>
    <a href="" className='specDesign'>Spec</a>
    </div>
</aside>

<span className='space'>

</span>

<aside className='firstbg '>
    <img src="public/Toyota Urban Cruiser Hyryder Front View.jpg" alt="" />
    <h4> Toyota Urban Cruiser Hyryder   </h4>
    <p className='CarContent'>
    The Toyota Hyryder has 2 Petrol Engine and 1 CNG Engine on offer. The Petrol engine is 1462 cc and 1490 cc while the CNG engine is 1462 cc . It is available with Automatic & Manual transmission.Depending upon the variant and fuel type the Urban Cruiser Hyryder has a mileage of 19.39 to 27.97 kmpl . The Urban Cruiser Hyryder is a 5 seater 3 cylinder car and has length of 4365 mm, width of 1795 mm and a wheelbase of 2750 mm.
    </p>
    <h6 className="Carprice">
            
            </h6>

    <div className='buttonSection'>
    <a href="" className='PreviewDesign'>Gallery</a>
    <a href="" className='specDesign'>Spec</a>
    </div>
</aside>

</div>



{/* Third Row */}
<div className="Firstcargalarrysection">

<aside className='firstbg '>
    <img src="public/MG Hector Front View.jpg" alt="" />
    <h4>Maruti Suzuki Invicto</h4>
    <p className='CarContent'>
    The MG Hector has 1 Diesel Engine and 1 Petrol Engine on offer. The Diesel engine is 1956 cc while the Petrol engine is 1451 cc . It is available with Automatic & Manual transmission.Depending upon the variant and fuel type the Hector has a mileage of 15.58 kmpl . The Hector is a 5 seater 4 cylinder car and has length of 4699 mm, width of 1835 mm and a wheelbase of 2750 mm.
    </p>
    <h6 className="Carprice">
            
            </h6>

    <div className='buttonSection'>
              <a href="" className='PreviewDesign'>Gallery</a>
              <a href="" className='specDesign'>Spec</a>
    </div>
</aside>

          <span className='space'>

          </span>
<aside className='firstbg '>
    <img src="public/Tata Harrier Front Right View.jpg" alt="" />
    <h4> Tata Harrier  </h4>
    <p className='CarContent'>
    The Tata Harrier has 1 Diesel Engine on offer. The Diesel engine is 1956 cc . It is available with Manual & Automatic transmission.Depending upon the variant and fuel type the Harrier has a mileage of 16.8 kmpl . The Harrier is a 5 seater 4 cylinder car and has length of 4605 mm, width of 1922 mm and a wheelbase of 2850 mm.
    </p>
           <h6 className="Carprice">

           </h6>
    <div className='buttonSection'>
    <a href="" className='PreviewDesign'>Gallery</a>
    <a href="" className='specDesign'>Spec</a>
    </div>
</aside>

<span className='space'>

</span>

<aside className='firstbg '>
    <img src="public/BMW XM Front View.jpg" alt="" />
    <h4> BMW XM   </h4>
    <p className='CarContent'>
    The BMW XM has 1 Petrol Engine on offer. The Petrol engine is 4395 cc . It is available with Automatic transmission.Depending upon the variant and fuel type the XM has a mileage of 61.9 kmpl . The XM is a 7 seater 8 cylinder car and has length of 5155 mm, width of 2000 mm and a wheelbase of 2651 mm.
    </p>
    <h6 className="Carprice">
            
            </h6>

    <div className='buttonSection'>
    <a href="" className='PreviewDesign'>Gallery</a>
    <a href="" className='specDesign'>Spec</a>
    </div>
</aside>

</div>
                
                 <div className="moreLink" data-aos="zoom-in">
                    <a href=""> Continue </a>
                 </div>

        </article>
    )
}