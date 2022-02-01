import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import img1 from "../../images/intro-img.png";

const Intro = React.forwardRef((props,ref)=>{

    const addMore =  ()  => {
        ref.current.classList.remove("athome");
        ref.current.classList.add("atmore");
    }

    
    return (
        <div className='intro-main'>
            <a className="anchor" id="intro"></a>
            <div className='intro-div'>
                <img className="intro-img" src={img1} alt="myimg" />
            </div>
            <div className='intro-text'>
                <h1> I am NAZIMHAN </h1>
                <p>
                    I gruadated from Ankara University, major of Computer Engineering.
                    While studying, i had to make a decision on my future career thus i've started
                    researching about which field should i pursue my career on. After a while
                    i've decided to become a web developer.
                    <br />
                    <br />
                    <br />
                    <Link onClick={addMore} to="/more">If you want to know more about me i've talked about my background and my skills in this page </Link>
                    <br />
                    <br />
                    <Link onClick={addMore} to="/more#projects"> Or you can take a look at the projects that i've done from here</Link>
                </p>
            </div>
        </div>
    )
})
// function Intro() {
//     return (
//         <div className='whoami-main container'>
//             <a className="anchor" id="aboutme"></a>
//             <div className='whoami-img'>
//                 this is image
//             </div>
//             <div className='whoami-text'>
//                 <h1> I am NAZIMHAN </h1>
//                 <p>
//                     I gruadated from Ankara University, major of Computer Engineering.
//                     While studying, i had to make a decision on my future career thus i've started
//                     researching about which field should i pursue my career on. After a while
//                     i've decided to become a web developer.
//                     <br />
//                     <Link to="/more">If you want to know more about me i've talked about my background and my skills in this page </Link>
//                     <br />
//                     <Link to="/more#projects"> Or you can take a look at the projects that i've done</Link>
//                 </p>
//             </div>
//         </div>
//     )
// }

export default Intro;