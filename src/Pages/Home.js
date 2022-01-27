import React from 'react'
import Navbar from '../components/nav'
import Slider from '../components/slider'
import Footer from '../components/footer'
import Header from '../components/header'
import Button from '../components/Button';

function Home() {
    return (
        <div>
            <Header />
            <Navbar />
            <Slider />
            <div className='h-into'>
                <div className='intro'>
                    <h1>INTRODUCTION</h1>
                    <p>Five Star Trading is the Fire & Safety Protection service and Safety Equipment Provider Company in Pakistan. We provide new all types of Fire Extinguishers & refilling of Fire Extinguishers, fire fighting equipment’s, Fire Alarm & Detection System, Fire Hydrant System, PPE, Suppression Systems and all types of Safety Equipment’s, provide a wide range. Five Star Trading is a pioneer in providing inspection, functional testing, and maintenance of fire protection systems. Our company have established in 1996, we have earned the trust of companies and people both, by putting all our energy & expertise to secure life, property and environment.</p>
                </div>
            </div>
            <div className='career-parent' id='care'>
                <h1>Training we provide</h1>
                <div className='career'>
                    <div className='career-card'>
                        <div className='card-body'>
                            <i class="fas fa-dumpster-fire"></i>
                            <h5>Fire Fighting Training</h5>
                        </div>
                    </div>
                    <div className='career-card'>
                        <div className='card-body'>
                            <i class="fas fa-medkit"></i>
                            <h5>First Aid Training </h5>
                        </div>
                    </div>
                    <div className='career-card'>
                        <div className='card-body'>
                            <i class="fas fa-fire-extinguisher"></i>
                            <h5>Rescue Training </h5>
                        </div>
                    </div>
                </div>

            </div>
            <Button />
            <Footer />
        </div>
    )
}

export default Home
