import React from 'react';
import training1 from "../images/sepfa.jpg";
import training2 from "../images/40days1.png";
import training3 from "../images/presentiel.png";
import { Icon } from '@iconify/react';

function Formation() {
    return (
        <>
            <div className="container-fluid" id='formations'>
                <div className="row">
                    <div className="d-flex justify-content-center">
                        <h2 className="text-center text-md-start">Découvrez nos offres de formation</h2>
                    </div>

                    <div className="col-lg-4 col-md-4 mt-3">
                        <div class="card h-100">
                            <img src={training1} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Direct Practical Spoken English Program For Adults</h5>
                                <p class="card-text">Saisissez l'opportunité d'être formé ce mois pour vous exprimer couramment en anglais avec le programme d'accélération TES.DE.PRO</p>
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
                                <h5 class="card-title">The Presential Class In The Centers</h5>
                                <p class="card-text">Venez directement dans nos locaux et suivez nos cours en présentiel</p>
                                <Icon icon="mdi:address-marker" width={25} /> Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <hr className="my-5" />
        </>
    )
}

export default Formation;