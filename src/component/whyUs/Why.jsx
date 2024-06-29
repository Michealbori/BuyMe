import '/src/component/whyUs/Why.css';
import Aos from 'Aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


export default function Why() {
    useEffect(() => {
        Aos.init({
            duration: 2000,
        })
    }, [])
    return (
        <section className="why" id='Why'>
               
               <p id='choose'>Why Choosing Us</p>
               <h3>
               Cheap Price With <br /> Quality Cars
               </h3>
               <p id='quote'> There Are Some Things Money Can’t Buy. <br /> For Everything Else, There’s Mastercard.</p>
               <h6 id='Journey'  data-aos="fade-up">Journey With Us</h6>
        </section>
    )
}