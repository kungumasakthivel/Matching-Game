import React from 'react';
import './index.css';

function IntroScreen() {
    return (
        <div className="intro-screen">
            <div className='text-bg'>
                <h3 className='heading'>Welcome Kiddo!</h3>
            </div>
            <div className='monkey-container'>
                <img className='monkey' src={require('..\\public\\monkey.png')} alt='monkey-png'/>
            </div>
        </div>
    )
}

export default IntroScreen;