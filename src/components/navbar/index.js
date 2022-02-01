import React, { useEffect, useRef, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashLink as Link } from 'react-router-hash-link';
import { useParams } from "react-router-dom";


const NavbarComponent = React.forwardRef((props, ref)=>{
    const [url, setUrl] = useState("")
    console.log(url);
    // const urlRef = useRef();
    console.log(ref);
    
    useEffect(()=>{
        setUrl(window.location.href)
       
    },[])
    useEffect(()=>{
        if(url.includes("more")){
            addMore();
        }
        else{
            addHome();
        }

    },[url])

    const addHome = () => {

        ref.current.classList.remove("atmore");
        ref.current.classList.add("athome");
    }
    const addMore = () => {

        ref.current.classList.remove("athome");
        ref.current.classList.add("atmore");
    }

    return (
        <div ref={ref} className="navbar-custom athome">
            <Link id="name-logo"to="#">NAZIMHAN FIÇICI</Link>
            <Link onClick={addHome} to ="/home#">Home</Link>
            <Link onClick={addHome} to ="/home#intro">Intro</Link>
            <Link onClick={addMore} to ="/more#">About Me</Link>
            <Link onClick={addMore} to ="/more#skills">Skills</Link>
            <Link onClick={addMore} to ="/more#projects" >Projects</Link>
            <Link  to="#contact">Contact</Link>    
        </div>
    ) 
})

// function NavbarComponent() {

    // const [url, setUrl] = useState("")
    // console.log(url);
    // const urlRef = useRef();
    // console.log(urlRef);
    
    // useEffect(()=>{
    //     setUrl(window.location.href)
    //     console.log("heyyy")
    //     if(url.includes("more")){
    //         addMore();
    //     }
    //     else{
    //         addHome();
    //     }

    // },[])
    // useEffect(()=>{
    //     console.log("aldsg")
    // },[url])

    // const addHome = () => {

    //     urlRef.current.classList.remove("atmore");
    //     urlRef.current.classList.add("athome");
    // }
    // const addMore = () => {

    //     urlRef.current.classList.remove("athome");
    //     urlRef.current.classList.add("atmore");
    // }

    // return (
    //     <div ref={urlRef} className="navbar-custom athome">
    //         <Link id="name-logo"to="#">NAZIMHAN FIÇICI</Link>
    //         <Link onClick={addHome} to ="/home">Home</Link>
    //         <Link onClick={addMore} to ="/more#aboutme">About Me</Link>
    //         <Link onClick={addMore} to ="/more#skills">Skills</Link>
    //         <Link onClick={addMore} to ="/more#projects" >Projects</Link>
    //         <Link  to="#contact">Contact</Link>    
    //     </div>
    // )


export default NavbarComponent;