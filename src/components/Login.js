import React from 'react'
import { useHistory } from 'react-router-dom';

const Login = () => {
    const history = useHistory();
    const handleClick = () => history.push('/');
      
    return (
        <>
        <section className="showcase login">
            <div className="overlay">
                <form className="form-control">
                    <input type="email" name="email" id="email" placeholder="Your e-mail adress" required/>
                    <input type="password" name="password" id="password" placeholder="Your password" required/>
                <button onClick={handleClick} type="submit">Login</button>
                </form>
            </div>
        </section>
        </>
    )
}

export default Login

