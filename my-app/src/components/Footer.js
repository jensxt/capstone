import logo from '../images/Logo .svg'

export default function Footer (){
return (
    <footer>
        <div>
            <img src={logo} alt=''/>
            <p>We are a family owned Mediteraneran restaurant, focused on traditionel recipes, served with a modern twist.</p>
        </div>
        <div>
            <h3>Links</h3>
            <ul>
                <li>
                    <a href='/'>Home</a>
                </li>
                <li>
                    <a href='/'>About</a>
                </li>
                <li>
                    <a href='/'>Services</a>
                </li>
                <li>
                    <a href='/'>Menu</a>
                </li>
                <li>
                    <a href='/'>Reservation</a>
                </li>
            </ul>
        </div>
        <div>
            <h3>Contace</h3>
            <li>Adress: <br /> 6160 EW, NL</li>
            <li>Phone: <br /> 123456677</li>
            <li>Email: <br /> contact@littlelemon.com</li>
        </div>
    </footer>
)
}