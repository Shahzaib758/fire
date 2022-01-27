import React from 'react';
import Navbar from '../components/nav';
import Footer from '../components/footer';
import Header from '../components/header';
import Button from '../components/Button';

function About() {
    return (
        <div>
            <Header />
            <Navbar />
            <div className='about-prt'>
                <div className='about-child'>
                    <h1>About us</h1>
                </div>
                <div className='intro'>
                    <h1>INTRODUCTION</h1>
                    <p>Five Star Trading is the Fire & Safety Protection service and Safety Equipment Provider Company in Pakistan. We provide new all types of Fire Extinguishers & refilling of Fire Extinguishers, fire fighting equipment’s, Fire Alarm & Detection System, Fire Hydrant System, PPE, Suppression Systems and all types of Safety Equipment’s, provide a wide range. Five Star Trading is a pioneer in providing inspection, functional testing, and maintenance of fire protection systems. Our company have established in 1996, we have earned the trust of companies and people both, by putting all our energy & expertise to secure life, property and environment.</p>

                </div>
                <div className='info'>

                    <div className='about-info' >
                        <h1>Mission</h1>
                        <p>Our mission is to empower customer to secure life, environment, property and business by delivering best quality & innovative fire protection solutions</p>
                    </div>
                    <div className='about-info'>
                        <h1>Vision</h1>
                        <p>To ensure safe and secure Life, safety & environment for all through professional development, unity, and teamwork as an important human obligation.</p>
                    </div>
                </div>
            </div>
            <Button />
            <Footer />
        </div>
    )
}

export default About;
