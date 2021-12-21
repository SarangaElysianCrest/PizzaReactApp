import React from "react";

const LoginHome = () => {
    return (
        <div>
        <div className="container">
        <div className="cover">
            <div className="front">
                {/* <img src="/images/chad-montano-MqT0asuoIcU-unsplash.jpg" alt="pizza_image"> */}
                <div className="button" id="signup">
                    <input type="button" value="Sign Up"/>
                </div>
                <div className="text">
                    <span className="fortext">Join With Neth Pizza <br/> With Free Delivery.</span>
                </div>
            </div>
        </div>
        <form action="#">
            <div className="form-content">
                <div className="formBox">
                    <h>Login</h>
                    <div className="input-boxes">
                        <div className="input-box">
                            <input type="text" name="email" placeholder="Email Address"/>
                        </div>
                        <div className="input-box">
                            <input type="password" name="password" placeholder="Password"/>
                            <i className="bi bi-eye-slash" id="togglePassword"></i>
                        </div>

                        <div className="button input-box">
                            <input type="submit" value="LOGIN"/>
                        </div>
                        <div className="text" id="forget-password">
                            <a href="#">Forgot Password</a>
                        </div>
                        <br />
                        <div className="text" id="description">
                            <text>Welcome to the official website of Neth Pizza (Sri Lanka). <br /> Call Us or order
                                online
                                and don't forget to enjoy CONTACTLESS delivery! 
                            </text>
                        </div>
                        <div className="imgBox" id="logo">
                            <img src="/images/Pizza-logo-design-template-Vector-PNG.png"/>
                        </div>
                        <div className="text" id="disclaimer">
                            <text>COPYRIGHT © 2021 Neth Pizza. ALL RIGHTS RESERVED.</text>
                        </div>
                    </div>
                </div>
            </div>
        </form>

        </div>
        </div>

       
    )

}


export default LoginHome;