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
                    <a href='/booking'>Reservation</a>
                </li>
            </ul>
        </div>
        <div>
            <h3>Contact</h3>
            <li>Adress: <br /> 6112 Chicago</li>
            <li>Phone: <br /> 123456677</li>
            <li>Email: <br /> contact@littlelemon.com</li>
        </div>
    </footer>
)
}