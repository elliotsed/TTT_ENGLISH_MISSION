import React from 'react';
import training1 from "../images/tesdepro.jpeg";
import training2 from "../images/40days1.png";
import training3 from "../images/presentiel.png";
import { Icon } from '@iconify/react';
import '../App.css';


function Formation() {
    return (
        <>
            <div className="container-fluid" id='formations'>
                <div className="row mb-5">
                    <div className="d-flex justify-content-center">
                        <h2 className="text-center text-md-start">Découvrez nos offres de formation</h2>
                    </div>

                    <div className="col-lg-4 col-md-4 mt-3">
                        <div class="card h-100">
                            <img src={training1} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Tutorat Personnel Certifié d'Accélération en Anglais Parlé (TESDEPRO)</h5>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-4 mt-3">
                        <div class="card h-100">
                            <img src={training2} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">40 Days English Listening Acceleration Program</h5>
                                <p class="card-text">Débloquez et améliorez votre écoute, expression orale et écrite dans différents accents de l'Anglais en 21 à 40 jours grâce à ce programme merveilleux et extraordinaire.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-4 mt-3">
                        <div class="card h-100">
                            <img src={training3} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">The Presential Class In Our Centers</h5>
                                <p class="card-text">Venez directement dans nos locaux et suivez nos cours en présentiel</p>
                                <Icon icon="mdi:address-marker" width={25} /> TTT ENGLISH MISSION CENTER, <br/> Akassato Goudron Kerekou, Rue de La Boulangerie Main D'or. 
                            </div>
                        </div>
                    </div>

                    <div className="d-flex justify-content-center mt-2">
                        <a href='https://Shorturl.at/ctvX1' target="_blank" rel="noopener noreferrer" className="btn custom-color2 text-white">Inscription</a>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Formation;