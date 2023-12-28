import React from 'react';
import './styles.css';
import Naamii from './images/naamii.png'
import Diyo from './images/diyo.png'

const SupportedBy = () => {
    return (
        <div id="supported-by" className="solution-page">
            <p className='solution'>Supported <span> By</span></p>
            <div className='supported-by-logo-container'>
                <img className='naamii-logo' src={Naamii} alt="NAAMII" />
                <img className='diyo-logo' src={Diyo} alt="DIYO.AI" />
            </div>
        </div>
    );
}

export default SupportedBy;
