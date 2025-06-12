import "./menu.css"

export function Menu(props) {

    return <div className="menu-card">
        <div className="dish-img">
            <img src={props.img} alt="" />
        </div>
        <div className="dish-desc">
            <h4>{props.title}</h4>
            <p>{props.para}</p>
        </div>
    </div>

}