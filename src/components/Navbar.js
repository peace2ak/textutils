import React from 'react' // - imr

import PropTypes from 'prop-types' // - impt
import { Link } from 'react-router-dom';

// - rfc
export default function Navbar(props) {

    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1)
    }

    return (
        <nav className={`container navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">{props.nav1}</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/about">{props.nav2}</Link>
                        </li>

                    </ul>
                    {/* <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-primary" type="submit">Search</button>
                    </form> */}
                    <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'} `} >
                        <input className="form-check-input" onClick={props.toggleFunction} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{capitalize(props.mode)} mode</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}


// defining what must be the type of the props or propertities given to the component
Navbar.propTypes = {
    title: PropTypes.string.isRequired, //-isRequired means ke agr ye na pass kya to error aae ga console me
    nav1: PropTypes.string,
    nav2: PropTypes.string
}

// default - if no props are given to the component
// Navbar.defaultProps = {
//     title: "Enter the title",
//     nav1: "Nav1",
//     nav2: "Nav2"
// }