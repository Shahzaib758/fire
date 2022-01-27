import React from 'react'
import Navbar from '../components/nav';
import Footer from '../components/footer';
import Header from '../components/header';
import Button from '../components/Button';
function Services() {
    return (
        <div>
            <Header />
            <Navbar />
            <div className='serv'>
                <div className='serv-child'>
                    <h3>Services</h3>
                </div>
                <div className='serv-intr'>
                <h2>
                    Our servicres
                </h2>
                <p>We are committed to providing reliable solutions using our literate team of experts and state of art technology following the local standards with safe & sound environmental practice.
                    Our goal is to meet our client’s objectives deliver on time and ensure total client satisfaction.
                    Our customer loves us for fast and friendly services and completely satisfied with us. Providing professional and experienced workers for fire and safety services.
                </p>

                </div>
                <div className='ser-points'>
                    <div className='points'>
                        <i class="fas fa-check"></i>
                        <span>Complete periodic & preventive maintenance of Fire Protection System</span>
                    </div>
                    <div className='points'>
                        <i class="fas fa-check"></i>
                        <span>Refilling, Maintenance and installation of Fire Extinguishers.</span>
                    </div>
                    <div className='points'>
                        <i class="fas fa-check"></i>
                        <span>	Installation of Fire Hydrant Systems.</span>
                    </div>
                    <div className='points'>
                        <i class="fas fa-check"></i>
                        <span>	Installation of Fire Alarm & Detection System</span>
                    </div>
                    <div className='points'>
                        <i class="fas fa-check"></i>
                        <span>	Installation of Automatic Fire Extinguishers.</span>
                    </div>
                    <div className='points'>
                        <i class="fas fa-check"></i>
                        <span>	Installation of Fire Suppression System.</span>
                    </div>
                    <div className='points'>
                        <i class="fas fa-check"></i>
                        <span>Firefighting, Fire Drill and First-aid training.</span>
                    </div>
                </div>
            </div>
            <Button />
            <Footer />
        </div>
    )
}

export default Services;
