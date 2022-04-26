
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import MenuItem from './Menus/menuItem'


const NavbarBlack = ({ title }) => {
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch('/api/mainMenu')
            .then(r => r.json())
            .then(r => setItems(r))
    }, [])

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav me-auto">
                        {items.map((item) => {
                            return <MenuItem key={item.name} link={item.target}>{item.name}</MenuItem>
                        })}

                    </ul>
                    <div className="d-flex">
                        <div>Profile</div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavbarBlack
