// Developed by Jignesh Sapoliya, Jaydip Talaviya
import React from "react";
import { Col, Row } from "react-bootstrap";
import p1 from "../assets/p1.jpeg";
import g1 from '../assets/g1.jpeg';
import yogi from '../assets/yogi.png';
import '../CSS/App.css';

const OurProducts = () => {
    const productsList = [
        {
            ProductName: 'BookMyDoctor',
            ProductDescription: 'This Web Base Application Specially Design for Patient in a way that Patient can Access the available Doctors Appointment in their region of area and Book according to their comfort Time Zone as well as at Suitable dates.',
            image: p1,
        },
        {
            ProductName: 'DrivingTest',
            ProductDescription: 'Our driving test website offers a user-friendly platform for drivers to book G1, G2, and G license test dates with ease. Choose from available dates and times that suit your schedule. The website provides real-time availability, streamlined booking, and secure payments for a seamless testing experience.',
            image: g1,
        },
        {
            ProductName: 'YogiInfo',
            ProductDescription: 'Yogi Info is product based company who sells electornics products as well as provides services in security sector like CCTV camera installation, custom door lock with fingerprint reader and RFID scanner.',
            image: yogi,
        }

    ];

    return (
        <>
            <div className="OurProducts">
                <h1 className='projectHeading'>Our <b>Products</b></h1>
                <div className='project'>
                    {productsList.map((product, index) => (
                        <div className='projectBox' key={index}>
                            <img className='projectPhoto' src={product.image} alt="Project display" />
                            <div>
                                <br />
                                <h3 className="productTitle">{product.ProductName}</h3>
                                <br />
                                {product.ProductDescription}
                                <br />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );

};
export default OurProducts;