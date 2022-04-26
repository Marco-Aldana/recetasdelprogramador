import React from 'react'

const MenuItem = ({ children, link, current }) => {
    return (
        <>
            <li className="nav-item">
                <a className="nav-link" href={link}>{children}</a>
            </li>
            {/* {current ? <span className="visually-hidden">(current)</span> : null} */}
        </>

    )
}

export default MenuItem