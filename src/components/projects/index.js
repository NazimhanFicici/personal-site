import React from 'react'

function Projects() {
    return (
        <div className='projects-main'>
            <a className="anchor" id="projects"></a>
            <input type="radio" name="dot" id="one"></input>
            <input type="radio" name="dot" id="two"></input>
                <h2>My Projects</h2>
            <div className='projects-cardgroup'>
                <div className='projects-group1'>
                        <div className='projects-card'>
                            <h1 className='card-header'>Pulse Of The People</h1>
                            <p className='card-content'>Pulse Of The People is a project that developed to sharpen my Web Development Skills. 
                                This projects front-end was developed mainly using Reactjs and Reduxjs, for the backend i have used Nodejs. This project is inspired by
                                a TV Show named "Family Feud". Concept of the project is like this; a question is asked to 100 pollster,
                                and the objective of the contestant is to find the most popular answers that are given by these pollsters.
                                This project can be played solo, with two players from same device or can be played online.In order to make
                                this project online Socket.io is used. 
                            </p>
                            <a className="viewMore" href='https://github.com/NazimhanFicici/Pulse-of-the-People'>Visit GitHub</a>
                        </div>
                        <div className='projects-card'>
                            <h1 className='card-header'>Doyle PSD</h1>
                            <p className='card-content'>Doyle PSD project is given to me by the company I did my internship which is POINTO Technology A.Ş. The main reason i was given this project
                            was teaching me basics of the html-css-js trio. I was only given a link of a zeplin.io platform and in that platform
                            there was a finished project and i could only access the visual features such as fonts, colors etc.
                            </p>
                            <a className="viewMore" href='https://github.com/NazimhanFicici/Doyle-Psd'>Visit GitHub</a>
                        </div>
                        <div className='projects-card'>
                            <h1 className='card-header'>Distance Keeper</h1>
                            <p className='card-content'>Distance Keeper is one of my Graduation Projects, In this project i have developed an android application that uses
                            BLE Technology. In this project i have used BLE Beacon modules, the main feature of this beacon device is that it broadcasts one-sided broadcast,
                            and with developing a mobile application i converted this one-sided broadcast to a tool for communication device. The idea behind that project was to
                            get HES (an unique code that's used for checking people whether they are infected or not) codes of the customers when they enter the store and when this code is entered to app
                            this code will be kept in the database for 14 days, and these codes will be checked regularly and will inform the customers who wants to enter like
                            "there was no COVID carrier in this store for last 14 days". I tried to launch this project but before it
                            i needed to get HES  access from Turkish Government after they kindly rejected me i suspended this project.
                            </p>
                            <a className="viewMore" href='https://github.com/NazimhanFicici/Distance-keeper'>Visit GitHub</a>
                        </div>
                </div>

                <div className='projects-group2'>
                <div className='projects-card'>
                            <h1 className='card-header'>eVision</h1>
                            <p className='card-content'>eVision is one of my Graduation Projects, in this project i developed a mobile application and used the same beacon device that i used on "Distance Keeper" project
                            and converted this one sided broadcast to a communication with using this app. And the concept of this project was to provide voice commands to visually impaired people. Functioning of this project is like this:
                            the user uses TTS(text to speech) technology to start the scanner if it matches with pre-defined beacon, the application will do a math with using signal strength to calculate the distance between
                            beacon and the user.
                            I've placed this beacon to a traffic light and gave the user informations about the distance left to traffic light and its content ( green or red ).
                            </p>
                            <a className="viewMore" href=''>Visit GitHub</a>
                        </div>
                        <div className='projects-card'>
                            <h1 className='card-header'>MR MOMOFUKU</h1>
                            <p className='card-content'>Mr MOMOFUKU is my last Graduation Project, The goal of Mr. Momofuku is protecting the solar system from star pirates who want to steal the sun's radiation and energy and then sell them in the space market. The game was developed in collaboration with Unity and C#.
                            </p>
                            <a className="viewMore" href='https://github.com/NazimhanFicici/MR-MOMOFUKU'>Visit GitHub</a>
                        </div>
                        <div className='projects-card'>
                            <h1 className='card-header'>Fried Chicken</h1>
                            <p className='card-content'>It is a 2D game that can be played with the keyboard, written in Java language and based on the principles of object-oriented programming.
                            The game mechanics are simple the chicken which is our character falls down vertically. Enemies will start to occur as the game progresses
                            the chicken must avoid these to reach the end.
                            </p>
                            <a className="viewMore" href='https://github.com/NazimhanFicici/2d-chicken-game'>Visit GitHub</a>
                        </div>
                </div>
            </div>
            <div className='cards-button'>
                <label htmlFor="one" className="one active">
                </label>
                <label htmlFor="two" className="two">
                </label>
            </div>
           
        </div>
    )
}

export default Projects;
