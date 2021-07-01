import React from 'react'
import { useHistory } from 'react-router-dom';

const Footer = () => {

    const history = useHistory();
  const handleClick = () => history.push('/');
  const handleClick1 = () => history.push('/add');
    
    return (
        <footer className="footer">
            <ul>
            <li><button type="button" onClick={handleClick}>Home</button></li>
            </ul>

            <ul>
            <li><button type="button" onClick={handleClick1}>Book your next destination</button></li>
            </ul>

        </footer>
    )
}

export default Footer
