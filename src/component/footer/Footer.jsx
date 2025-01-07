import "/src/component/footer/Fotter.css";



export default function Footer() {
    return(
        <footer>

             <section>
                <h3>About</h3>
                <ul>
                    <li><a href="">Features</a></li>
                    <li><a href="">News & Blog</a></li>
                    <li><a href="">About Us</a></li>
                </ul>
             </section>

             <section>
                <h3> Company </h3>
                <ul>
                    <li><a href=""> Shop </a></li>
                    <li><a href=""> Model </a></li>
                    <li><a href="">Discover</a></li>
                </ul>
             </section>

             <section>
                {/* <h3> BuyMe </h3> */}
                <img src="public/buyme.png" alt="Logo" />
                 <p>Little-known secrets that can steer you to tremendous success</p>
             </section>

             <section>
                <h3> Support </h3>
                <ul>
                    <li><a href="">FAQ</a></li>
                    <li><a href="">Support Center</a></li>
                    <li><a href="">Contact Us</a></li>
                </ul>
             </section>

             <section>
                <h3> Follow Us </h3>
                <ul>
                    <li><a href="">Facebook</a></li>
                    <li><a href="">Instagram</a></li>
                    <li><a href="">Twitter</a></li>
                </ul>
             </section>

        </footer>
    )
}