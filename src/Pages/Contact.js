import React from 'react'
import Navbar from '../components/nav';
import Footer from '../components/footer';
import { useState } from 'react';
import emailjs from 'emailjs-com';
import Header from '../components/header';
import Button from '../components/Button';
// import React, { useRef } from 'react';




function Contact() {
    // const form = useRef();
    const [userData, setuserData] = useState({
        name: "",
        email: "",
        number: "",
        subject: "",
        message: ""

    })
    let name, value;
    const Data = (e) => {
        name = e.target.name;
        value = e.target.value;
setuserData({...userData,[name]:value})

    }
    const sendEmail = (e)=>{
       
        e.preventDefault();
        emailjs.sendForm('service_4mgmynd', 'template_p0b76sf', e.target, 'user_WkscwjExFT18TOnto3dxW')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
      
        
setuserData({name:"",email:"",number:"",subject:"",message:""})
    }
    return (
        <div className='contact'>
            <Header />
            <Navbar />
            <div className='contact-child'>
                <h1>Contact us</h1>
            </div>
            <div className='con-main'>
                <div className='con-left'>
                    <div className='details'>
                        <i class="fas fa-street-view"></i><span> Office#35,Near Jamia Binoria Aalimiyah,site area,Karachi,Pakistan</span>
                    </div>
                    <div className='details'>
                        <i class="fas fa-phone-square-alt"></i><li className='li-f'>CELL: 92-311-1729526</li>
                    </div>
                    <div className='details'>
                        <i class="fas fa-envelope-open"></i><li className='li-f'>info@saylaniwelfare.com</li>
                    </div>


                    <p> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.717482783213!2d66.99268281500383!3d24.907616584031665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x77129835e3336f12!2zMjTCsDU0JzI3LjQiTiA2NsKwNTknNDEuNSJF!5e0!3m2!1sen!2s!4v1643280294198!5m2!1sen!2s" width='80%' allowFullscreen="" ></iframe></p>
                </div>
                <div className='con-right'>
                    <form onSubmit={sendEmail}>
                        <div className='input_group'>
                            <input type='text' name='name' value={userData.name} onChange={Data} placeholder='Name' />
                        </div>
                        <div className='input_group'>
                            <input type='email' name='email' value={userData.email} onChange={Data} placeholder='Eamail' />
                        </div>
                        <div className='input_group'>
                            <input type='Number' name='number' value={userData.number} onChange={Data} placeholder='Contact Number' />
                        </div>
                        <div className='input_group'>
                            <input type='text' name='subject' value={userData.subject} onChange={Data} placeholder='Subject' />
                        </div>
                        <div className='input_group'>
                            <textarea name='message' value={userData.message} onChange={Data} placeholder='Your Message'>

                            </textarea>
                        </div>
                        <button className='cbutton'>Send</button>
                    </form>

                </div>
            </div>
            <Button />
            <Footer />
        </div>
    )
}

export default Contact
