import React from 'react';
import {animateScroll as scroll} from 'react-scroll';
import {Link as LinkR} from 'react-router-dom'

import './Footer.css'

function Footer() {
    return (
        <div className='Footer-container'>
            <p onClick={() => {scroll.scrollToTop()}} className='footer-logo'>Pizza-Pizzetta</p>
            <div className='social-icons'>
                <LinkR
                    className='social-icon-link facebook'
                    to='/'
                    target='_blank'
                    aria-label='Facebook'
                >
                    <i className='fab fa-facebook-f'/>
                </LinkR>
                <LinkR
                    className='social-icon-link instagram'
                    to='/'
                    target='_blank'
                    aria-label='Instagram'
                >
                    <i className='fab fa-instagram'/>
                </LinkR>
                <LinkR
                    className='social-icon-link youtube'
                    to='/'
                    target='_blank'
                    aria-label='Youtube'
                >
                    <i className='fab fa-youtube'/>
                </LinkR>
                <LinkR
                    className='social-icon-link twitter'
                    to='/'
                    target='_blank'
                    aria-label='Twitter'
                >
                    <i className='fab fa-twitter'/>
                </LinkR>

            </div>
        </div>
    )
}

export default Footer