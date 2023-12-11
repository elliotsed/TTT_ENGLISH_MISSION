import React from 'react';
import '../App.css';
import { Icon } from '@iconify/react';



function Section1() {
    return (
        <div className="container-fluid ff">
            <div className="row">
                <div className="mt-4 text-center">
                    <div className="d-flex justify-content-center">
                        <h1>TRAINING THAT TRANSFORM</h1>

                    </div>
                    <div className="d-flex justify-content-center">
                        <p>Vous apprendrez la manière la plus simple et la plus facile d'apprendre l'anglais grâce à TTT ENGLISH MISSION</p>

                    </div>
                    <div className=" d-flex justify-content-center d-sm-none d-md-none d-lg-none">
                        <Icon icon="clarity:email-solid" width={25} className='me-2' /> tttmission@gmail.com
                    </div>
                    <div className="d-flex justify-content-center mt-3">
                        <button className="btn custom-color text-white">Inscription</button>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Section1;