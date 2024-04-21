// Developed by Jignesh Sapoliya, Lakshit Gajera
import React from 'react';
import Typed from './Typed';
import '../CSS/App.css';
import developer from '../assets/developer.svg';
import team from '../assets/team.jpeg';


function Home() {
    return (
        <div className="home-container">
            <div className="home-content">

                <div className="HomeText">
                    <h1>Hello, Namste!  <i className="fa fa-hand-paper"></i></h1>
                    <h1>
                        We are <b>Team RockX</b>
                    </h1>
                    <Typed />
                </div>
                <div className="col-md-6 text-center">
                    <img src={developer} className="rounded img-fluid" alt="Your Image" />
                </div>

            </div>

            <div className="AboutPage">
                <div className="AboutText">
                    <h1 className="AboutTextHeading">
                        Brief intro about <b> Team RockX</b>
                    </h1>
                    <p>
                        As part of Team RockX, a dedicated group of four skilled developers, we excel in providing
                        comprehensive web and mobile development solutions.
                        <br />
                        <br></br>
                        We specialize in both the <b>MERN</b> stack
                        and <b>MEAN</b> stack, delivering high-quality, impactful websites and digital products.
                        With a passion for growth and learning, we aim to stay at the forefront of technology
                        by continuously expanding our expertise in <b>Next.js</b>, <b>Three.js</b>, and <b>TypeScript</b>.
                        <br />
                    </p>
                </div>
                <img src={team} className="Avatar" />
            </div>
        </div>
    );
}

export default Home;
