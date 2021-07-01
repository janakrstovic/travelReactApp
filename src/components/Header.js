import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return(
    <>
        <header className="header">

            <div>
                <Link className="links" to="/">Home</Link>
            </div>
            <nav className='navbar'>
                <ul>
                    <Link className="links"  to="/login">Login</Link>
                    <Link className="links"  to="/signup">SignUp</Link>
                    <Link className="links"  to="/trip">Trips</Link>
                    <Link className="links"  to="/add">Add new trip</Link>
                    <Link className="links"  to="/list">My reservations</Link>


                </ul>   
            </nav>
            </header>
        </>
        )
        }

        export default Header
