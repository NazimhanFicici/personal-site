import React from 'react'

function Contact() {
    return (
        <div className='contact-main'>
            <a className="anchor" id="contact"></a>
            <div className='icons'>
                <h1>Follow me</h1>
                <div className="follow-me">
                    <a href="https://github.com/NazimhanFicici"><i  className="fab fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/nazımhan-fıçıcı-37394022a/"><i className="fab fa-linkedin"></i></a>
                </div>
            </div>
            <div className='contact-me'>
                <h1>Contact me via this email</h1>
                <br />
                <h3>nazimhanficici@gmail.com</h3>
            </div>
        </div>
    )
}

export default Contact
