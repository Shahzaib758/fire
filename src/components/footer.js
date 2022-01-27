import React from 'react';

function Footer() {
    return (
        <div className='footer'>

            <div className='f_row'>
                <div className='f-col'>

                    <h3>Address</h3>
                    <ul>
                        <div className='details'>
                            <i class="fas fa-street-view"></i><span> Office#35,Near Jamia Binoria Aalimiyah,site area,Karachi,Pakistan</span>
                        </div>
                        <div className='details'>
                            <i class="fas fa-phone-square-alt"></i><li className='li-f'>CELL: 92-311-1729526</li>
                        </div>
                        <div className='details'>
                        <i class="fas fa-envelope-open"></i><li className='li-f'>info@saylaniwelfare.com</li>
                        </div>
                    
                      
                    </ul>

                </div>
                <div>
                    <div className='f-col f-col2'>
                        
                        <h3>Follow  us </h3>
                        <div>
                        <ul>
                        <div>
                        <a href='https://www.facebook.com/'><i class="fab fa-facebook-square"></i><li className='li-f'>Facebook</li></a>
                        </div>
                        <div>
                        <a href=''><i class="fab fa-instagram"></i><li className='li-f'>Instagram</li></a>
                        </div>
                        <div>
                        <a href=''><i class="fab fa-twitter"></i><li className='li-f'>Twitter</li></a>
                        </div>
                      
                    </ul>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default Footer;
