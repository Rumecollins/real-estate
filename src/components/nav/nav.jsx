import React from 'react';
import "../components/nav/nav.css"

export default function Nav(props) {
    const [active, setActive] = React.useState(false)    

    const handleClick = () => setActive(prevActive => !prevActive)
    return(
        <div className="navigation">
            <section>
                <div className="logo">LOGO</div>
                    <ul className={`nav-list ${active?"active":null} `}>
                        <li className='nav-item'><a href="#">Home</a></li>
                        <li className='nav-item'><a href="#">About</a></li>
                        <li className='nav-item'><a href="#">Contact</a></li>
                        <li className='nav-item'><a href="#">Service</a></li>
                    </ul>
                    <div onClick={handleClick} className="toggle-btn">{active?"unClick":"click"}</div>
            </section>
        </div>
    )
}