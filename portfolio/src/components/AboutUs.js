// Developed by Jignesh Sapoliya, Nikhil Lathiya
import React from "react";
import { Card, Container, Row, Col } from 'react-bootstrap';
import {FaReact, FaGitAlt, FaGithub, FaNpm, FaBootstrap} from "react-icons/fa";
import {DiNodejs, DiJavascript1} from "react-icons/di";
import {SiExpress, SiMongodb, SiPostman} from "react-icons/si";
import js from '../assets/js.jpeg';
import jd from '../assets/jd.jpeg';
import lg from '../assets/lg.jpeg';
import nl from '../assets/nl.jpeg';
import '../CSS/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


const AboutUs = () => {
    const teamMembers = [
        {
            name: 'Jignesh Sapoliya',
            position: 'CEO',
            expertise: 'Front-End Developer',
            image: js,
        },
        {
            name: 'Jaydip Talaviya',
            position: 'CTO',
            expertise: 'Back-End Developer',
            image: jd,
        },
        {
            name: 'Lakshit Gajera',
            position: 'COO',
            expertise: 'Full Stack Developer',
            image: lg,
        },
        {
            name: 'Nikhil Lathiya',
            position: 'President',
            expertise: 'UI/UX Designer',
            image: nl,
        },
    ];

    return (
        <section className="aboutus-container">
        <Container className="about-container">
            <h1 className="team-heading">Meet Our Team</h1>
            <Row className="justify-content-center">
                {teamMembers.map((member, index) => (
                    <Col md={3} sm={6} xs={12} key={index}>
                        <Card className="team-card mb-4">
                            <Card.Img variant="top" src={member.image} className="team-card-image" />
                            <Card.Body>
                                <Card.Title>{member.name}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{member.position}</Card.Subtitle>
                                <Card.Text>{member.expertise}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>

        <Container className="skill-container">
        <h1 className="skillsHeading">Our Expertise</h1>
            <div className="skills">
                <div title="React" className="skillBox"><FaReact/></div>
                <div title="Bootstrap" className="skillBox"><FaBootstrap/></div>
                <div title="JavaScript" className="skillBox"><DiJavascript1/></div>
                <div title="NodeJs" className="skillBox"><DiNodejs/></div>
                <div title="ExpressJs" className="skillBox"><SiExpress/></div>
                <div title="MongoDB" className="skillBox"><SiMongodb/></div>
                <div title="Git" className="skillBox"><FaGitAlt/></div>
                <div title="Github" className="skillBox"><FaGithub/></div>
                <div title="NPM" className="skillBox"><FaNpm/></div>
                <div title="Postman" className="skillBox"><SiPostman/></div>
            </div>
        </Container>
        </section>
    );


};

export default AboutUs;