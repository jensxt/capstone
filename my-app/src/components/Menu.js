import MenuCard from './MenuCard'
import salad from '../images/salad.jpg'


const Menu = () => {
    return (
        <div className="menu">
            <MenuCard img={salad} name="Salad" description="Fresh salad with veggies, feta and a homemade dressing"/>
        </div>
    )
}

export default Menu