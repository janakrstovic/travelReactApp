import React from 'react'

const Login = () => {
    return (
        <>
        <section className="showcase login">
            <div className="overlay">
                <form className="form-control">
                    <input type="email" name="email" id="email" placeholder="Your e-mail adress" required/>
                    <input type="password" name="password" id="password" placeholder="Your password" required/>
                <button type="submit">Login</button>
                </form>
            </div>
        </section>
        </>
    )
}

export default Login

