const MenuCard = (props) => {
    return (
        <div>
            <img className="menuCard"src={props.img} />
            <h2>{props.name}</h2>
            <p>{props.description}</p>
        </div>
    )
}

export default MenuCard; 